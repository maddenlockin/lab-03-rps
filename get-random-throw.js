export function getRandomThrow() {
    let autoThrow = Math.ceil(Math.random() * 3);
    if (autoThrow === 1) return 'rock';
    else if (autoThrow === 2) return 'scissors';
    else return 'paper';
}