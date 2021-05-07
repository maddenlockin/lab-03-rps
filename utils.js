export function didUserWin(userThrow, compThrow) {
        // rock > scissors
        //scissors > paper
        //paper > rock
    //const compThrow = getRandomThrow();
    if (compThrow === userThrow) 
    {return 'draw';}
    else if ((compThrow === 'rock' && userThrow === 'scissors') 
    || (compThrow === 'scissors' && userThrow === 'paper') 
    || (compThrow === 'paper' && userThrow === 'rock')) {
        return 'lose';
    }
    else return 'win';
}
//get comp throw
export function getRandomThrow() {
    let autoThrow = Math.ceil(Math.random() * 3);
    if (autoThrow === 1) return 'rock';
    else if (autoThrow === 2) return 'scissors';
    else return 'paper';
}