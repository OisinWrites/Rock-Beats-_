# Purpose of Site
- This site is place to play a version of the Rock, Paper, Scissors game
- It is expanded to include the variables of Lizard and Spock, created and popularised by
- the sitcom 'The Big Bang Theory'.
- The site must be attractive and well laid out. 
- It must have instruction on how the game is played, and a scoring system.

# Features
- The site will have interactive buttons that give the user feedback based on their choice.
- The player will be able to play against the computer, which will be able to randomly select a choice.
- The player will see a record of past moves, their current score, and best of 3 scores.
- The player should be able to enter their player name.
- The site should replace the player name submission form with the players name, and an automated title.
- Such as *Oisín, the Oblivious!*.
- In the record of past moves the winning choice should appear more dominant.
- In the record of past moves the latest choices should appear at the top of the list.
- The record of past choices should reset after each best of three.
- In the record of past moves the relationship between various choices should show.
- A seperate counter for rounds of 'Best of Three' should be included.
- This second counter should itself be a best of three and upon completion result in a reset.
- On final completion of the game the user should be greeted by a message based on performance.
- If in any case the player loses to the computer by a choice of rock, the players name 
- could appear in the banner, such as 'Rock Beats _' => 'Rock Beats Oisín'.
- Such as 'Rock' *smashes* 'Scissors'.
- Choices that the computer ties against will have their own seperate counter.
- Text displaying a win, loss, or tie should appear after each choice is made.
- This could be followed by a congratulatory, commiserating, or encouraging message.

## Error log
- Stylesheet having no effect on server output
- Recreated stylesheet, rewrote link, rewrote ids in css.
- Resolved finally by add/push/commit/sync

- JS not updating changes in browser
- add/push/commit/sync and restarting python3 -m http.server command not resolving
- exiting git pod and reloading resolved

- Console log shows that click event not tying into global choice vars
- Resolution: in event, calling on function 'makeChoice' should have been reapplied
- to the new const of 'choice' which pulls the data from old const of 'choiceName'

- Console log shows that the cpuChoice is not being acknowledged in click event
- Added return of choices
- Resolved. console log shows random choice for each click of 'rock'

- Chart with record of past moves not working
- Saving and restarting
- Solution found: needed square brackets over html identifier in js script

- Record of choices issues
 
- Rock can't win against second opponent, 'Lizard'.
- Tried making 2 beats in list. Tried making second rock global element that only beats lizard
- Going to make beats 2 and treat as beats
- Resolved, not by treating exactly the same but by use of an 'or' statement, ||, at same place.