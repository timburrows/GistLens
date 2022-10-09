
import assert from 'assert';
import stack from '../src/stack.js';

describe('stack', () => {
    describe('#pop', () => {
        it('should return and remove the last element of the array', () => {
            // by default, stack() returns the array with no changes
            var expectedVal = stack();
            expectedVal = expectedVal[expectedVal.length - 1];
            const actualVal = stack("pop");
            assert.equal(actualVal, expectedVal);
        });
    });
});

describe('stack', () => {
    describe('#push', () => {
        it('should add a new element at the end of the array', () => {
            const expectedVal = 420;
            const actualVal = stack("push", expectedVal);
            assert.equal(actualVal[actualVal.length - 1], expectedVal);
        });
    });
});

describe('stack', () => {
    describe('#push', () => {
        it('should add a new element at the end of the array', () => {
            const expectedVal = 420;
            const actualVal = stack("push", expectedVal);
            assert.equal(actualVal[actualVal.length - 1], expectedVal);
        });
    });
});

describe('stack', () => {
    describe('#swap', () => {
        it('should switch the position of two elements in the stack', () => {
            const expectedVal1 = stack()[3];
            const expectedVal2 = stack()[0];

            const actualVal = stack("swap", [0, 3]);
            assert.equal(actualVal[0], expectedVal1);
            assert.equal(actualVal[3], expectedVal2);
        });
    });
});


describe('stack', () => {
    describe('#peek', () => {
        // pending better implementation of stack
        it('should return the last element of the stack, but not remove it');
    });
});

