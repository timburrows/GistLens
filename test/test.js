
import assert from 'assert';
import Stack from '../src/stack.js';

describe('stack', () => {
    describe('#pop', () => {
        it('should return and remove the last element of the array', () => {
            let expectedVal = 3;

            let sut = new Stack(1, 2, expectedVal);

            assert.equal(expectedVal, sut.pop());
        });
    });
});

describe('stack', () => {
    describe('#push', () => {
        it('should add a new element at the end of the array', () => {
            let expectedValues = [4, 3, 2, 1];

            let sut = new Stack(1, 2, 3);
            sut.push(4);

            let actualValues = sut.peek(4);
            assert.equal(actualValues.every((val, idx) => val === expectedValues[idx]), true);
        });
    });
});

describe('stack', () => {
    describe('#swap', () => {
        it('should switch the position of two elements in the stack', () => {
            let expectedValues = [2, 1, 3];
            let sut = new Stack(3, 2, 1);

            sut.swap();

            let actualValues = sut.peek(3);

            assert.equal(actualValues.every((val, idx) => val === expectedValues[idx]), true);
        });
    });
});


describe('stack', () => {
    describe('#peek', () => {
        it('should return the last element of the stack, but not remove it', () => {
            let expectedVal = 1;
            let sut = new Stack(3, 2, 1);

            let actualVal = sut.peek(1);
            assert.equal(actualVal, expectedVal);
        });
    });
});

describe('stack', () => {
    describe('#storage', () => {
        it('should not be accessible, either by read or write', () => {
            let sut = new Stack(3, 2, 1);
            assert.equal(sut.storage, undefined);
        });
    });
});