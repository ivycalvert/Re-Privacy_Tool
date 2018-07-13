# Re: Privacy

This project was developed alongside a Masters in Design Innovation thesis. This projects addresses concerns around the privacy paradox phenomenon and aims to increase internet user accessibility and understanding of website Privacy Policy (PP) documents. This browser extension tool is developed for Google Chrome and ranks website PP and displays them back to the user in visualisations and extracted text. It is a proof of concept project for a proposed tool that integrates machine learning technology in order to provide a tool that is sustainable in the ever-changing online environment. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. As this model is a proof of concept tool, it has not been released on the chrome extension store. 

### Prerequisites

Google Chrome Browser

### Installation 

A step by step series of examples that tell you how to get a development env running

Download this repository as a zip

```
This can be done via the green "Clone or Dowload" button found on the right of the screen

Once the download has been completed, "unzip" the downloaded file
```

Open the Google Chrome web browser and navigate to the chrome extensions page

```
Copy: "chrome://extensions" into the search bar and go to this page
```

Turn on "Developer Mode"

```
Toggle this mode on by clicking the small slider icon labeled "developer mode" in the top right of the webpage
```

Upload the downloaded browser extension tool files that you have just put on your local machine

```
Select the "Load Unpackaged" link located in the page center. 

Select the unzip tool file that you have just downloaded onto your computer and click "Select" in the popup window
```

The "Re: Privacy" browser extension tool is now uploaded to your local version of Google Chrome. It will appear on your extension toolbar and ba activated when you click on the icon

```
Ensure the extension tool is "on": Check that the toggle slider (similar in visuals to the one seen when "developer mode" was turned on), it will appear BLUE when the extesnion is active/on. 
```

You have now installed the browser extention, please see the list of websites below to find those which have been included in the dataset. This will allow you to experience the proof of concept tool for this proposed design.

## Ranked Websites

Below the websites ranked are listed per method of rank created (manual and automated). 

It is important to note that the automated ranking system is currently a proof of concept tool and not the final product. As a result, the manual summaries show the intended visuals of the browser extension (these were used as the training dataset for the ML model).

### Manual (Human Generated) Websites

* [Facebook](https://www.facebook.com)
* [Google](https://www.google.com)
* [Asos](https://www.asos.com)
* [Amazon](https://www.amazon.com)
* [Github](https://www.github.com)
* [Sky](https://www.sky.co.nz)
* [The Guardian](https://www.theguardian.com)
* [Tripadvisor](https://www.tripadvisor.co.nz)
* [Twitch](https://www.twitch.tv)
* [Twitter](https://www.twitter.com)
* [Whatsapp](https://www.whatsapp.com)
* [Wikimedia](https://www.wikimedia.org)
* [Imgur](https://www.imgur.com)
* [CNN](https://edition.cnn.com)
* [LADbible](https://www.ladbible.com)
* [Netflix](https://www.netflix.com)
* [Stack Exchange](https://stackexchange.com)
* [The Independent](https://www.independent.co.uk)
* [United Airlines](https://www.united.com)
* [The Walt Disney Company](https://www.thewaltdisneycompany.com)

### Automated (Machine Learning Model) Websites

* [Rotten Tomatoes](https://www.rottentomatoes.com)
* [Plex](https://www.plex.tv)
* [Slack](https://slack.com)
* [Zotero](https://www.zotero.org)
* [Westpac](https://www.westpac.co.nz)
* [Steam](https://store.steampowered.com)
* [The Verge](https://www.theverge.com)
* [Trademe](https://www.trademe.co.nz)
* [Jetstar](https://www.jetstar.com)
* [Unity](https://unity3d.com)
* [Telegram](https://telegram.org)
* [reddit](https://www.reddit.com)
* [Qualtrics](https://www.qualtrics.com)
* [Brave Browser](https://brave.com)
* [Adobe](https://www.adobe.com)
* [Snapchat](https://www.snapchat.com)
* [ANZ Bank](https://www.anz.co.nz)
* [IMDb](https://www.imdb.com)

These automated ranks only categorise the "Data Security" category.

Only some of these websites listed will show positive/negative responses, as the ML model is still in the early stages of development. 

## Additional Notes

The Machine Learning system is not required to be run on the local system in order to experience the browser extension tool, and has since NOT been included in this repository. However, the above listed automatically ranked websites were ranked using this system. 

## Built With

* [spaCy](https://spacy.io/usage/training#textcat) - The spaCy machine learning system which was reappropriated for building the model included in this project can be found via this link. The installation and running of this system can also be found via this link for those more curious about the machine learning model that was designed and incorporated in this tool. However, this demands a higher level of understanding of the technical aspects and is not required for the running of the current version of this tool.

* [PrivacyGuide](https://github.com/InfiniteCoding/PrivacyGuide) - The initial dataset was largely based off the work conducted for this project. 

## Author

* **Elizabeth Calvert (Ivy)** - [portfolio](https://www.ivycalvert.me/portfolio) 

## Acknowledgments

* [Tom White](https://github.com/dribnet): For helping build and run the machine learning model that repurposed the spaCy text classification library.