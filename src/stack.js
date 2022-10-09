

// We declare `storage` in the global scope of the file and
// outside of the Stack class itself, this 'protects' it from being directly mutated.
let storage = [ 1, 2, 3];

/**
 * A `Stack` is used as a collection of values or objects in an array, that operate with the constraints of Last In First Out (LIFO)
 */
export default class Stack {
    
    /**
     * Constructs a new `Stack` from the bottom up with the arguments passed to this constructor
     * @param  {...any} initial_elements The elements the `Stack` will contain after construction
     */
    constructor(...initial_elements) {
        storage = initial_elements;
    }

    /**
     * Removes the top item on the `Stack`
     * @returns The element at the last index of the array #storage
     */
    pop() {
        if (storage.length === 0) {
            console.log("No items on the stack");
        } else {
            return storage.pop();
        }
    }

    /**
     * Adds a new item to top of the `Stack`
     * @param {*} value 
     * @returns Number of items on the `Stack` after adding a new item
     */
    push(value) {
        return storage.push(value);
    }

    /**
     * 
     * @param {Integer} num The amount of items you want to peek, starting at the top of the `Stack`
     * @returns {Array} Items in the `Stack` in their descending order
     */
    peek (num) {
        let peek = storage.slice([storage.length - num]);
        return peek.reverse();
    }


    /**
     * Swaps the position of the top two elements in the `Stack`
     */
    swap () {
        let items = storage.splice(storage.length - 2, 2);
        storage.push(items[1]);
        storage.push(items[0]);
    }
}