// /*
// ** file: js/main.js
// ** description: javascript code for "html/main.html" page
// */

var console = chrome.extension.getBackgroundPage().console;

function init_main () {
    $('html').hide().fadeIn('slow');
};

document.addEventListener('DOMContentLoaded', init_main);

var goodRanks = 0;
var badRanks = 0;
var averageRanks = 0;
var nullRanks = 0;

var loadedData;
function loadData () {
    $.ajax({ 
        type: 'GET', 
        url: '../data.json', 
        jsonData: { get_param: 'value' }, 
        dataType: 'json',
        success: function (jsonData) { 
            // get json keys
            loadedData = jsonData;
            keys = Object.keys(jsonData); 

            // get current active tab
            chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
                
                url = tabs[0].url;
                //change extension title to current tab name
                $("#website").text(url.split('/')[2]);

                for (i = 0; i < keys.length; i++) {
                    var key = keys[i];
    
                    //if current tab exists in dataset, setContent()
                    if (url.includes(key)){
                        // print current tab name that matches with dataset
                        console.log("[Website printed] " + key);
                        setContent(jsonData[key]);
                        rankType(jsonData[key]);
                    }
                } 
            });
        }
    });    
}

function setContent (currentTab) {
    
    for (var elem = 0; elem < currentTab.length; elem++) {
        var title = currentTab[elem].category;
        var sentence = currentTab[elem].sentence;
        $("#header-" + elem).text(title);
        $("#content-" + elem).text(sentence);

        var dataRank = currentTab[elem].rank;
        if (dataRank === "good" || dataRank ===  "full" || dataRank ===  "no" || dataRank >= 0.9) {
            goodRanks++;
            $("#sect-" + elem).css("border", "4px solid green");
            $("#icon-" + elem).attr("src","../images/good.png");
        } else if (dataRank === "average" || dataRank === "partial") {
            averageRanks++;
            $("#sect-" + elem).css("border", "4px solid orange");
            $("#icon-" + elem).attr("src","../images/average.png"); 
        } else if (dataRank === "bad" || dataRank === "yes" || dataRank === "none" || dataRank <= 0.1) {
            badRanks++;
            $("#sect-" + elem).css("border", "4px solid red"); 
            $("#icon-" + elem).attr("src","../images/bad.png");
        } else {
            nullRanks++;
            $("#sect-" + elem).css("border", "4px solid grey"); 
            $("#icon-" + elem).attr("src","../images/null.png");
            $("#content-" + elem).text("More information required.");
        };
    };
    setHeaderBackground();
};

function setHeaderBackground (overrideValue) {
    var avRank = overrideValue || calculateOverallRank();
    if (avRank === "good") {
        $("#header").css("background", "linear-gradient(rgb(21, 124, 33), rgb(1, 193, 27))");
    } else if (avRank === "average" ) {
        $("#header").css("background", "linear-gradient(rgb(252, 74, 26), rgb(247, 183, 51))");
    } else if (avRank === "bad") {
        $("#header").css("background", "linear-gradient(rgb(221, 24, 24), rgb(252, 74, 26))");
    } else {
        $("#header").css("background", "linear-gradient(rgb(79, 79, 79), rgb(216, 216, 216))");
    }
};

function calculateOverallRank(){
    var g = goodRanks;
    var b = badRanks;
    var a = averageRanks;
    var n = nullRanks;
    if(g > b + a + n){
        return "good";
    }
    if(a + g >= b + n){
        return "average";
    }
    if(b > n){
        return "bad";
    }
    return undefined
}

function rankType (currentTab) {
    //hard coded to look at the category "data security" category that has been predicted by the ML model
    var dataRank = currentTab[1].rank;
    if (typeof dataRank === "number") {
        $("#rankClass").attr("src","../images/comp.png");
    } else if (typeof dataRank === "string") {
        $("#rankClass").attr("src","../images/person.png");
    } else {
        $("#rankClass").attr("src","../images/na.png");
    }
};


$("#sect-0").click(function(){
    $("#content-0").toggle();
});
$("#sect-1").click(function(){
    $("#content-1").toggle();
});
$("#sect-2").click(function(){
    $("#content-2").toggle();
});
$("#sect-3").click(function(){
    $("#content-3").toggle();
});
$("#sect-4").click(function(){
    $("#content-4").toggle();
});
$("#sect-5").click(function(){
    $("#content-5").toggle();
});
$("#sect-6").click(function(){
    $("#content-6").toggle();
});


function onPageLoad () {
    // setContent();
    loadData();
    setHeaderBackground("null");
    rankType();
};
$( document ).ready( onPageLoad );