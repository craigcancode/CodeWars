var expect = require('chai').expect;
var should = require('chai').should;
var fs = require('fs');
var main = require('../src/main.js');

describe('File main.js', function() {
    it('should exist', function() {
        const main = fs.readFileSync('./src/main.js');
    });
});

describe('highAndLow', function() {
    describe('should be a function', function() {
        it('is a function', function() {
        expect(main.highAndLow).to.be.an('function');
        });
    });
    
    describe('should return a string', function() {
        it('returned a string', function() {
            const str = '1 1';
            expect(main.highAndLow(str)).to.be.an('string');
        });
    });

    describe('should return the highest and lowest numbers from a string as a string', function() {
        it ('should return \"542 -214\"', function() {
            expect(main.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).to.equal("542 -214");
        });
       
        it ('should return \"1 -1\"', function() {
            expect(main.highAndLow("1 -1")).to.equal("1 -1");
        });
       
        it ('should return \"1 1\"', function() {
            expect(main.highAndLow("1 1")).to.equal("1 1");
        });

        it ('should return \"5 1\"', function() {
            expect(main.highAndLow("1 2 3 4 5")).to.equal("5 1");
        });

        it ('should return \"5 -3\"', function() {
            expect(main.highAndLow("1 2 -3 4 5")).to.equal("5 -3");
        });

        it ('should return \"9 -5\"', function() {
            expect(main.highAndLow("1 9 3 4 -5")).to.equal("9 -5");
        });

        it ('should return \"-1770 -4823\"', function() {
            expect(main.highAndLow("-3336 -1921 -2524 -3217 -4823 -3393 -4660 -4226 -3371 -2108 -3703 -1981 -3717 -3523 -4239 -1993 -2804 -4582 -2642 -3514 -1770")).to.equal("-1770 -4823");
        });

        
    });

});

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */