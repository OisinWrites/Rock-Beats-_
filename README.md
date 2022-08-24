# Purpose of Site
- This site is a place to play a version of the Rock, Paper, Scissors game.
- It is expanded to include the variables of Lizard and Spock, created and popularised by
- the sitcom 'The Big Bang Theory'.
- The site must be attractive and well laid out. 
- It must have instruction on how the game is played, and a scoring system.

# Design
- Colour pallete:
-   I saved this pallete while exploring the colour pallete generating site, "Coolers", and decided to
    see how to apply it to this project. 
    In terms of the significance of the colours, the darker navy is used to signify defeat,
    and the lighter cream and orange, for victory.
    This is implemented in the gradient background colour, 'good bearing down on the dark'.
    The theme reoccurs on win and lose conditions. On a loss the steep gradient flashes unpleasantly and
    the orange and navy are juxtaposed for their high contrast. On a win, the background is smooth, light
    and bright, with an even gradient.
-![Coolers Palette](assets/readme-documentation/colour-choice.jpg)

- Layout:
-   I opted to have the game at the top of the page and instructions at the bottom, and it is
    an unpleasant user experience to have to scroll past the instructions for every play through, and because
    the instructions are only necessary at most once, the game being largly intuitive and widely understood.
    On larger screens, the game log of past moves is pushed up to the right of screen so that the use 
    needn't scroll to scan the cpu's previous moves.

- Typography:
-   The font chosen is a retro pixelated style, which I believe gives the game something closer to an
    arcade game feel. 

# Features
- The site will have interactive buttons that give the user feedback based on their choice.
- ![Buttons](assets/readme-documentation/buttons.jpg)
- The player will be able to play against the computer, which will be able to randomly select a choice.
- The player will see a record of past moves, their current score of best of 5.
- The player should be able to enter their player name.
- ![Form](assets/readme-documentation/submitname.jpg)
- The site should replace the player name submission form with the players name, and an automated title.
- Such as *Oisín, the Oblivious!*.
- ![Title after player name](assets/readme-documentation/randomtitle.jpg)
- In the record of past moves the latest choices should appear at the top of the list.
- ![Log chronological order](assets/readme-documentation/logorder.jpg) 
- The record of past choices should reset after each best of three.
- In the record of past moves the relationship between various choices should show.
-   Such as 'Rock' *crushes* 'Scissors'.
- ![Verbs between Choices](assets/readme-documentation/actionwords.jpg)
- If in any case the player loses to the computer by a choice of rock, the players name could appear in the banner, such as 'Rock Beats _' => 'Rock Beats Oisín'.
- ![Rock beats You](assets/readme-documentation/bannername.jpg)
- Choices that the computer ties against will have their own seperate counter.
- ![Tie Counter](assets/readme-documentation/tiescounter.jpg)
- Stickman avatar changes to a tombstone or a hero depending on win or lose, and reverts back on reset button click.
- ![Defeat Avatar](assets/readme-documentation/defeat-avatar.jpg)
- ![Hero Avatar](assets/readme-documentation/hero-avatar.jpg)
## Error log
- Stylesheet having no effect on server output
    Recreated stylesheet, rewrote link, rewrote ids in css.
    Resolved finally by add/push/commit/sync

- JS not updating changes in browser
    add/push/commit/sync and restarting python3 -m http.server command not resolving
    exiting git pod and reloading resolved

- Console log shows that click event not tying into global choice vars
    Resolution: in event, calling on function 'makeChoice' should have been reapplied
    to the new const of 'choice' which pulls the data from old const of 'choiceName'

- Console log shows that the cpuChoice is not being acknowledged in click event
    Added return of choices
    Resolved. console log shows random choice for each click of 'rock'

- Chart with record of past moves not working
    Saving and restarting
    Solution found: needed square brackets over html identifier in js script

- Record of choices issues
 
- Rock can't win against second opponent, 'Lizard'.
    Tried making 2 beats in list. Tried making second rock global element that only beats lizard
    Going to make beats 2 and treat as beats
    Resolved, not by treating exactly the same but by use of an 'or' statement, ||, at same place.

- Second charts issue: computers winning choices aren't showing as having beaten player
    No idea how this was resolved other than through workshopping the next issue, and it  seems to inadvertently fixed the issue.

- Third issue: record flowing out to right of page endlessly.
    Changed back to divs and content is going down the page, but need to limit times
    Also need both choices to appear along side, not one after the other as is happening
    Now appearing alongside- moved js keyword 'record-choices-chart' into last child span of its original div, allowing the div styling to target it as its child.
    Continued to not work. Long Fix!
            JS code replacing innerHTML would replace the inner with new followed by old
            as one single innerHTML into one singular replaced div.
            Instead I made 5 divs, stacked from 5 -> 1 with
            the function imgToLog replacing innerHTML for each based on
            the numberClicks counter.
            And then used styling on the same divs the function targets to successfully
            center content with justify. 

- Game ends and restarts on 5th go
    Shouldn't restart but instead create a restart button, which itself sets counters to 0
    Made the restart button replace the selection moves buttons, and on click, reappear them.

- Button clicks caused cpuChoice to select random no 5 times, instead of just random of. thus 5 x 5
    tidied code within button event

- Changing Player 1 to a form on click is only allowed input into form with permanent click.
    Perhaps clicking into form to use it is creating a new form each time.
    This was part of the issue and to circumvent it, one div has a click event
    which changes a different div below that has no event listener.
    *gave up on making the input field its own submit button*

- Trying to create a form that saves its input to a var. After countless attempts
    I've found the correct method. Documented below.
-    "*form id="player-name-form">*
    *input type="text" name="nickname" placeholder="Your name, mortal!" id="player-name">*
    *input type="button" name="submit" onclick="onSubmit()" value="submit"*></form>*"

- Best of five paragraph not returning on reset 
    Issue with the innerHTML text not replacing "best of five"
    Fixed now.

### Errors Remaining
- Input form for player name is too long and needs to be shortened, I believe it can be achieved with bootstrap. It is being left as is for submission.`
- Player name, ties, and CPU text are not sufficiently styled to be in line with eachother.
- After fix button selection, when the actionword div replaces the best of five div, the buttons jump position. On pc this can cause an unintentional drag and highlight action by the user.

### Future plans for the site
- The 'Face the Computer' navigation link is a little lack-luster and without significant functionality as it only drops the users screen beneath itself. (I kept it to fit the theme of the cpu being enemity, offering the player time to 'prepare' or if they were ready to 'face the computer'). I would make this function more impactful, such as disappearing the whole first section behind a 'Start Game' button that the 'Face the Computer' nav link also activated.
- I would like to add in a timing function between player choice selection and both the action relationship div and past moves div that reveal the cpu's choice. The timing would be a "1, 2, and on 3" count, to emulate the classic playing of the game "Rock, Paper, Scissors", where players shake their hand in a fist on the rock and paper count, declaring their move on the scissors count.
- I would like to add in retro feeling, 8-bit, music, with a mute toggle in the banner, that plays throughout the game, but also includes timed sound effects for the 3 punch countdown, a win, loss or tie.
- I would like to arrange the player selections in a circle, and animate the opposing selections accordingly, and have the score counter in the middle of the circle so that the entire game existed with that cicurlar space.


## Credits and Sources
- StackOverflow. An example of random selection: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript 
- Coolers. Colour palette generator. https://coolors.co/palette/001524-15616d-ffecd1-ff7d00-78290f
- StackOverflow. To get the form input type=text to submit on press enter key https://stackoverflow.com/questions/4418819/how-to-submit-a-form-on-enter-when-the-textarea-has-focus

## Testing

### HTML Validation
- ![](assets/readme-documentation/html-validation.jpg)
### CSS Validation
- ![](assets/readme-documentation/css-vaildation.jpg)
    CSS has a bit of a grievance with the -web-kit functionality employed by browsers, but all seems to be working,
    and the validator didn't note it.
### javaScript Validation
- ![](assets/readme-documentation/javascript-validation.jpg)
    Hundreds of warnings in linter, but no errors left. A majority of these are single quote rather than
    double quote infractions. As far as I understand, the warnings are not effecting the functionality of the code as is,
    so I needn't address them for submission.
### Media Screen Mock-ups for Responsivity
- ![](assets/readme-documentation/screen-mockups.jpg)
### Wave Accessibility Testing
- ![](assets/readme-documentation/accessibility.jpg)
    I am electing to keep my colour decisions in the navbar, which I feel are consistent in style, and reasonably legible.
    For those with a vision impairment, the site would still be fully accessible as the use of the navigation links are not crucial.
    Wave also highlighted 'no text in anchors' for the footer. Considering that they i) function correctly, without HTML error, 
    ii) are styled adequately as are, and iii) both icons and text have each of the same links/functions, I will also be ignoring WAVE's suggestions.
### Lighthouse Performance Testing
- ![](assets/readme-documentation/performance.jpg)
- Note: Performance marker had been at 92% before addition of images for readme. Do images, not loaded into the page, 
but that are only in the directory effect this rating?
- Improved performance after swapping readme images from .png to .jpeg and compressing .pngs for game. However, I should have also compressed the .jpgs.
- ![](assets/readme-documentation/performancenew.jpg)
### Alternate Browser Testing
- Safari 
- ![](assets/readme-documentation/safari-test-1.jpg)
- ![](assets/readme-documentation/safari-test-2.jpg)

- Firefox
- ![](assets/readme-documentation/firefox-test-1.jpg)
- ![](assets/readme-documentation/firefox-test-2.jpg)

- Chrome
    Website was tested from beinning to end using chrome