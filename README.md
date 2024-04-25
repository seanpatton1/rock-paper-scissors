# Rock, Paper & Scissors

![Rock, Paper & Scissors responsive image]()

I've created a rock-paper-scissors game where users compete against the computer in a fun and engaging battle. The game showcases a straightforward layout and vibrant color scheme designed to elevate the user experience. The goal of the game is to provide users with a brief and entertaining competition against the computer, where the first player to reach 10 victories wins.

The rules are simple: players choose between rock, paper, or scissors. The opponent also selects one of these three options. Remember, Rock defeats scissors, scissors defeat paper, and paper defeats rock.

Visit the deployed website [here](https://seanpatton1.github.io/rock-paper-scissors/).

## Table of Contents

1. [User Experience (UX)](#user-experience-ux)
    1. [Project Goals](#project-goals)
    2. [User Stories](#user-stories)
    3. [Color Scheme](#color-scheme)
    4. [Typography](#typography)
    5. [Basic Design](#basic-design)
2. [Features](#features)
    1. [General](#general)
    2. [Landing Page](#landing-page)
    3. [Game page](#game-page)
 3. [Technologies Used](#technologies-used)
    1. [Languages Used](#languages-used)
    2. [Libraries and Programs Used](#libraries-and-programs-used)
4. [Testing](#testing)
    1. [Testing User Stories](#testing-user-stories)
    2. [Code Validation](#code-validation)
    3. [Accessibility](#accessibility)
    4. [Tools Testing](#tools-testing)
    5. [Manual Testing](#manual-testing)
5. [Finished Product](#finished-product)
6. [Deployment](#deployment)
    1. [GitHub Pages](#github-pages)
7. [Credits](#credits)
    1. [Content](#content)
    2. [Media](#media)
    3. [Code](#code)
8. [Acknowledgements](#acknowledgements)

***

## User Experience (UX)

### Project Goals

* The game page presents an inviting layout with supporting images for enhanced gameplay.

* Provide the user with a visual indication of the current score and clear game rules.

* Enable the user to view the outcome through an on-screen message once a selection is made.

### User Stories

* As a customer, I desire a clear indication of how to play the game.

* As a customer, I want to be aware of both my score and the computer's score.

* As a customer, I desire an attractive color scheme and layout.

* As a customer, I want an end game result or target score to aim for.

### Color Scheme


### Typography

I have selected Josefin Sans for the entirety of the website. On the game page, the font styling varies, with bolder fonts used for the score area. The same bold styling is applied to the game buttons and the game rules in the footer. I have chosen this font as I felt it went well within a game but also easily legible. I chose this over others to ensure it was easier for as many people as possible.

![Josefin Sans - lowercase](assets/readme-files/lowercacse.png)  ![Josefin Sans - UPPERCASE](assets/readme-files/uppercase.png)

### Basic Design

I've outlined the design on pen and paper, creating multiple versions before finalizing the current live project. The design was focused on ensuring everything is within view of the user, including specific adjustments for the mobile view to accommodate the placement of the user's hand while holding the phone.

## Features

### General

* The colour scheme chosen consists on is green and blue with black and white fonts. I have used a linear gradient for the background combining the green and blue. 

* The website has been optimized to function seamlessly across multiple screen sizes, from mobile and tablet to desktop computers, utilizing responsive design. It adjusts the page layout according to the user's device to cater to as many users as possible.

* **Header**

![Header](assets/readme-files/header.png)

- Font size adjusts as the screen sizes grows

- As this is a standalone page there are no nav links in the header

* **Footer**

![footer](assets/readme-files/footer.png)

- The footer give the user the rules of the game.

### Game page

![Game-page](assets/readme-files/game-page-2.png)

- I have utilized images from [Pinterest](https://in.pinterest.com/pin/747879081845727421/) to user for the game images. I have then split these up to display as the user selects their choice.


## Technologies Used

### Languages Used

* HTML5(https://en.wikipedia.org/wiki/HTML5)
* CSS(https://en.wikipedia.org/wiki/CSS)
* JavaScript(https://en.wikipedia.org/wiki/JavaScript)


### Libraries and Programs Used

* [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the font Oswald with sans-serif as a backup.

* [GitPod](https://gitpod.io/)
    - GitPod was used for writing code, committing, and then pushing to GitHub.

* [GitHub](https://github.com/)
    - GitHub was used to store the project after pushing.

* [Pen and Pad design]
    - I designed the website not on Balsamiq but on pen and paper.

* [Am I Responsive?](http://ami.responsivedesign.is/#)
    - Am I Responsive was used to check responsivness of the website on each page over multiple devices.

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools was used during development process for code review and fix any visual errors throught the creation of the website.

* [W3C Markup Validator](https://validator.w3.org/)
    - W3C Markup Validator was used to validate the HTML code.

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - W3C CSS Validator was used to validate the CSS code.

* [JSHint](https://jshint.com/)
    - JSHint was used to validate the JavaScript code.

[Back to top ⇧](#table-of-contents)


## Testing

### Testing User Stories

* As a customer, I want to know the rules of the game before playing. 

     - The rules for the game are set in the footer of the page.

* As a customer, I want to be able to compete again the computer.

    - There is JavaScript set to allow the user to play against the computer.

* As a customer, I want and interesting design to help me engage with the game.

    - I have selected a colour scheme and design to help engagement.

* As a customer, I want to be able to track my correct answers.

    - THe game shows the user how many correct answers both they have made and the computer.

* As a customer, I want to have a clear goal to win the game.

    - The game is designed as first to 10 with a display message telling the user who won.

### Code Validation

* The [W3C Markup Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/)


### Accessibility

* Used Lighthouse 

* Lighthouse reports
        
        - **Game Page**

        - Mobile View
        !insert image

        - Desktop View
        !insert image

    

### Tools Testing

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

    - Chrome dev tools was used throughout the development of the project, testing mostly CSS design with some minor changes in HTML to test structure as well as console/sources when checking JavaScript.

* Responsiveness
    
    - [Am I Responsive?](http://ami.responsivedesign.is/#) 

    - [Responsive Design Checker](https://www.responsivedesignchecker.com/) 
    
    - [Chrome DevTool](https://developer.chrome.com/docs/devtools)

### Manual Testing

* Device compatibility

    - The website has been tested on multiple devices, including:


* Elements Testing

    - Game Page
        
        - **Buttons**
            - Buttons adjust throughout all views

        - **Game images**
            - Game images adjust in size and the screen changes

* JavaScript Testing

     - Game Page
        - **Buttons**
            - Buttons work throughout the game and reset button correctly resets the scores.

        - **Images**
            - Images change correctly when user/computer selects their choice. Base image loads on game start and when reset button is clicked.

        - **Game testing - Other Users**
            - Multiple users have played the game to ensure it works correctly - no issues found.

* Common Elements Testing

    - General

    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Rock Button | Brings up the correct image of a rock for both players. | Pass
    Paper | Brings up the correct image of a rock for both players | Pass
    Scissors | Brings up the correct image of a rock for both players | Pass
    Responsive design | The game can be played on mobile, tablet and Desktop | Pass
    Reset Button | Resets the score either once there is a winner or during the match | Pass
    Player Score | Score correctly increases only when the player wins the round | Pass
    Computer Score | Score correctly increases only when the computer wins the round | Pass
    Center Message | JavaScript works and shows the correct message in the center on who won/lost | Pass
    End Result | Games ends correctly when either player reaches 10 | Pass
    Game Images | Correctly change when user makes choice and are both responsive | Pass
    Game Heading | Responsive accross devices without hindering the game | Pass
    Footer |

    - Home Section
    
    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Start Game Button | Hover effect work and link to game section when button is clicked work as expected. | Pass
    Feedback Button | Hover effect work as expected and open feedback form popup when clicked. | Pass
    
    - Feedback Form Popup
    
    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Form | Require all fields in the right format before submission. |  Pass
    Send Feedback Button | Hover effect work as expected and submit form when cicked. |  Pass
    Close Button | Hover effect work as expected and close popup when clicked. | Pass

    - Game Section

    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Player Score | Increase by 1 when player win round. |  Pass
    Computer Score | Increase by 1 when computer win round. |  Pass
    Player Icon | Display the weapon chosen by the player. | Pass
    Computer Icon | Display the weapon generated by the computer. | Pass
    Game Feedback | Display the expected text depending on the round result. | Pass
    Game Buttons | Clicking on each button select the correct weapon. | Pass
    Rules Button | Hover effect work as expected and open rules popup when clicked. | Pass
    Rules' Close Button | Hover effect work as expected and close popup when clicked. | Pass





[Back to top ⇧](#guitar-history-101)

### Validator errors

**No JavaScript errors found**

**lighthouse error**

**footer error**


## Finished Product

### Game Page


[Back to top ⇧](#guitar-history-101)


## Deployment

* This website was developed using [GitPod](https://www.gitpod.io/), which was then committed and pushed to GitHub using the GitPod terminal.

## Credits 

* Images on website used from (https://pixabay.com/images/search/acoustic%20/)

### Content

- Almost all content written by developer

### Media

* [Pixabay](https://pixabay.com/)

*  [Font Awesome](https://fontawesome.com/search)
   

### Code

- 

- 

- 

- [YouTube](https://www.youtube.com/), [Stack Overflow](https://stackoverflow.com/) and [W3schools](https://www.w3schools.com/) were used throughout the creation of this project.

[Back to top ⇧](#guitar-history-101)

## Acknowledgements

- 

- 

- 
- 

[Back to top ⇧](#guitar-history-101)
