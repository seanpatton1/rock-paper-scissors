# Rock, Paper & Scissors

![Rock, Paper & Scissors responsive image](assets/readme-files/am-I-responsive.png)

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

I have chosen the below pallate using [mycolor.space](https://mycolor.space/?hex=%2308A55A&sub=1) adding in white and black.

![Colour-pallate](assets/readme-files/colour-pallate.png)

### Typography

I've opted for Josefin Sans as the universal font across the entire website. However, on the game page, there's a variation in font styling, particularly with the implementation of bolder fonts for the score section, game buttons, and game rules in the footer. I selected this font because it blends well with the gaming theme while maintaining readability. This choice was made to enhance accessibility for a broader audience.

![Josefin Sans - lowercase](assets/readme-files/lowercacse.png)  ![Josefin Sans - UPPERCASE](assets/readme-files/uppercase.png)

### Basic Design

I've sketched out the design on paper, iterating through multiple versions before settling on the current live project. The emphasis was on making sure everything remains visible to the user, with particular attention given to optimizing the layout for mobile viewing to accommodate how users hold their phones. The images below display the original design featuring the previous button placement, prior to optimizing the layout.

![Desktop-image](assets/readme-files/Sketch-one.png)

![Mobile-image](assets/readme-files/Sketch-two.png)

## Features

### General

* The selected color palette features shades of green and blue, complemented by black and white fonts. To create the background, I've utilized a linear gradient blending the green and blue hues.

* The website has been fine-tuned for smooth performance across various screen sizes, spanning from mobile and tablet to desktop computers, through responsive design. This adaptation ensures that the page layout adjusts dynamically based on the user's device, aiming to accommodate a broad range of users.

* **Header**

![Header](assets/readme-files/header.png)

- Font size adjusts as the screen sizes grows

- As this is a standalone page there are no nav links in the header

* **Footer**

![footer](assets/readme-files/footer.png)

- The footer give the user the rules of the game.

### Game page

![Game-page](assets/readme-files/game-page-2.png)

- I have utilized images from [Pinterest](https://in.pinterest.com/pin/747879081845727421/) to user for the game images. I've subsequently divided these elements to be displayed individually as the user makes their selection.


## Technologies Used

### Languages Used

* HTML5(https://en.wikipedia.org/wiki/HTML5)
* CSS(https://en.wikipedia.org/wiki/CSS)
* JavaScript(https://en.wikipedia.org/wiki/JavaScript)


### Libraries and Programs Used

* [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the font Josefin Sans with sans-serif as a backup.

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

* As a customer, I seek clarity on the game rules before engaging in play. 

     - The rules for the game are set in the footer of the page.

* As a customer, I desire the ability to compete against the computer.

    - There is JavaScript set to allow the user to play against the computer.

* As a customer, I seek an engaging design that enhances my interaction with the game.

    - I have selected a colour scheme and design to help engagement.

* As a customer, I wish to stay informed about the game's score as I progress.

    - The game shows the user how many correct answers both they have made and the computer.

* As a customer, I seek a clearly defined objective to achieve victory in the game.

    - The game is designed as first to 10 with a display message telling the user who won.

### Code Validation

* The [W3C Markup Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/)


### Accessibility

* Used Lighthouse 

* Lighthouse reports
        
    - **Game Page**

    - Mobile View
    ![lighthouse-mobile](assets/readme-files/lighthouse-final-mobile.png)

    - Desktop View
    ![lighthouse-mobile](assets/readme-files/lighthouse-final-desktop.png)

    

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
    
        - Galaxy Z Fold - No issues
        - Tablet - 768px and up - No issues
        - Laptops - 992px, 1280px - No issues


* Elements Testing

* Common Elements Testing

    - General

    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Responsive design | The game can be played on mobile, tablet and Desktop | Pass
    Game Images | Correctly change when user makes choice and are both responsive | Pass
    Game Heading | Responsive accross devices without hindering the game | Pass
    Footer | Displays the rules on all screen sizes clearly | Pass

    - Game Section

    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Rock Button | Brings up the correct image of a rock for both players. | Pass
    Paper | Brings up the correct image of a rock for both players | Pass
    Scissors | Brings up the correct image of a rock for both players | Pass
    Reset Button | Resets the score either once there is a winner or during the match | Pass
    Player Score | Score correctly increases only when the player wins the round | Pass
    Computer Score | Score correctly increases only when the computer wins the round | Pass
    Center Message | JavaScript works and shows the correct message in the center on who won/lost | Pass
    End Result | Games ends correctly when either player reaches 10 | Pass
    Game Images | Correctly change when user makes choice and are both responsive | Pass

[Back to top ⇧](#table-of-contents)

### Validator errors

**No JavaScript errors found**

**No CSS errors found**

**lighthouse error**

![Lighthouse-error](assets/readme-files/lighthouse1.png)

There was accessibility issues for this as I had used h1 tags for the header and then h3 for the score section. This has been changed and accessibility fixed

![Lighthouse-fix](assets/readme-files/lighthouse2.png)

**HTML validator error**

There was a warning when checking HTML - No heading for second section - fixed by changing "Make a choice" to h3

![html-val-warning](assets/readme-files/html-val-warning.png)



## Finished Product

### Game Page

![finished product](assets/readme-files/game-page-2.png)

[Back to top ⇧](#guitar-history-101)


## Deployment

* This website was developed using [GitPod](https://www.gitpod.io/), which was then committed and pushed to GitHub using the GitPod terminal.

## Credits 

* Images on website used from (https://www.pinterest.co.uk/)

* Game images edited by Martina Arrigoni

### Content

- All content written by developer
   

### Code

- Code references commented on JavaScript file.

- [YouTube](https://www.youtube.com/), [Stack Overflow](https://stackoverflow.com/) and [W3schools](https://www.w3schools.com/) were used throughout the creation of this project. I found [Youtube-Kevein-Powell](https://www.youtube.com/@KevinPowell) very helpful with CSS styling issues.

[Back to top ⇧](#table-of-contents)

## Acknowledgements

- I would like to express my gratitude to my girlfriend, Martina. She has contributed to the image selection and served as a valuable sounding board during the process of deciding on a color scheme for the page.

- I want to extend my gratitude to Marcel for his invaluable contributions to the design and creation of this README file. His insights provided perspectives that I had not previously considered.

- I express my gratitude to everyone who tested the game, ensuring its proper functionality, and also for their efforts to stress-test it, ensuring its robustness.

[Back to top ⇧](#table-of-contents)
