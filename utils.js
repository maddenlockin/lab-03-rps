import { getRandomThrow } from './get-random-throw.js';

export function didUserWin(userThrow, compThrow) {
        // rock > scissors
        //scissors > paper
        //paper > rock
    //const compThrow = getRandomThrow();
    if (compThrow === userThrow) return 'draw';
    else if ((compThrow === 'rock' && userThrow === 'scissors') 
    || (compThrow === 'scissors' && userThrow === 'paper') 
    || (compThrow === 'paper' && userThrow === 'rock')) {
        return 'lose';
    }
    else return 'win';


}