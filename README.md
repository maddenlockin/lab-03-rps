## html setup: 
need  heading, text section, 3 images as radio buttons, result-div, total-games-div, wins-div, submit button

## State: 
computer's throw, total games, total wins/losses
### initialize state: 
total:0
wins:0
computer throw: 'rock' | 'paper' | 'scissors'

## events:
1- on button click:
    - get computer throw
        - change state of 'computer throw'
    - get user throw from radio button
    - compare user and computer throws
    -update state: wins/ losses
    - present results of updated state