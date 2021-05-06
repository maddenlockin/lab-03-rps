import '../utils.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('if user wins over compthrow', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if user loses to compthrow',
    (expect) => {
        const expected = 'lose';
        const actual = didUserWin('scissors', 'rock');
        expect.equal(actual, expected);
    });
    
test('if user and compthrow draw',
    (expect) => {
        const expected = 'draw';
        const actual = didUserWin('scissors', 'scissors');
        expect.equal(actual, expected);
    });