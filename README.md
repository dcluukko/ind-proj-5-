# _Super Galactic Age Calculator_

#### _A webpage that takes an Earthling's age and calculates it on Mercury, Venus, Mars and Jupiter. February 7th, 2020_

#### By _**Dana Luukko**_


## Preview



## Description

_A webpage that converts a person's age on Earth to their age on Mercury, Venus,Mars, and Jupiter. Taking into account their life expectancy on Earth, the webpage returns how many years they have left on each planet._

## Project Specifications

|Behavior|Input|Output|
|---|:---:|:---:|
| User submits without input | text | Fail |
| User submits any character that is not an integer| text | fail |
| User submits number | text | Success |
| User recieves their age in Mercury Years | Earth Years Age | Earth Years x .24 |
| User recieves their age in Venus Years | Earth Years Age | Earth Years x .62 |
| User recieves their age in Mars Years | Earth Years Age | Earth Years x 1.88 |
| User recieves their age in Jupiter Years | Earth Years Age | Earth Years x 11.86 |
| User revieves their remaining years based on life expentency | Earth Years Age | 78 - Earth Years  |
| User revieves their remaining years based their gender identity | selects male, female, gender fluid| if male then subtract the users Earth age from 81, if female subtract user's Earth age from 76, if trans/nonbinary subtract users Earth age from 500 |
| User revieves their remaining years based on smoking habbits | Yes/ No | If user enters "yes" subtract 15 years from life expectancy, if user enters "no" remove 0 years from life expectency  |
| User revieves their remaining years based on amount of alcoholic beverages consumed per day | selects either 1-2 or >2| if 1-2 then add 3 years to life expectancy, if >2 then subtract 5 years from life expectency |
| User recieves Life expectancy based on minutes of extersize per week| Minutes of exersice per week | if input >= 150 then add 10 years to Life Expectency, if input >= 60 then add 5 years to life expectency, if input >= 30 then add 2 years to life expectency|
## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/kwicz/pizza-parlor.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} pizza-parlor```
* On Windows: ```pizza-parlor```

_Download Manually:_

* Navigate to https://github.com/kwicz/pizza-parlor.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "pizza-parlor".
* Right click "index.html" and select your preferred browser or text editor.

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/pizza-parlor/issues) here on GitHub._

## Technologies Used

* Javascript
* jQuery
* HTML & CSS
* Bootstrap 3.3.7
* Google Fonts
* Node_modules

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Dana Luukko_**