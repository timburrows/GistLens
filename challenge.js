export function stack(stackOperation, stackValue) {
	var stackHolder = {
		// We can actaully remove count here altogether and just use array.length
		count: 3,
		storage: [
			1,
			'{id: 1,value: "obj"}',
			"stringHolder",
			46
		]
	};

	var push = function (value) {
		// as mentioned above, we should just use stackHolder.storage.length here
		// but in fact there is a bug here, because your not incrementing count when you push a new item to the stack
		stackHolder.storage[stackHolder.count] = value;
		return stackHolder.storage;
	}

	var pop = function () {
		if (stackHolder.count === 0) {
			return [];
		}

		var poppedItem = stackHolder.storage[stackHolder.count];
		delete stackHolder.storage[stackHolder.count];
		/**
		 * The `delete` operator can be thought of as 'removing a property from an object', and typically deallocates it from memory along the way.
		 * In this case, the object your working with is an array. By using the delete operator on an **element** within the array, 
		 * you are 'destroying' the object at that position, however the space allocated for the array in memory remains, 
		 * and so the element at that location simply becomes 'undefined' in JavaScript. In other words, it could be thought of as the equivalent of `array[your_index] = undefined`
		**/
		stackHolder.count--;
		return poppedItem;
	}

	var peek = function () {
		/** 
		 * Here we return the value of the first element in the array, which is actually considered the bottom of your stack. 
		 * Return the last element instead as a stack is Last In First Out (LIFO), which is at stackholder[stackholder.length - 1].
		 * Also in my opinion it's probably more beneficial just to return the value at that position, rather than wrap it in an array,
		 * unless you wanted to be able to peek multiple items from the top specified by passing in an argument
		**/  
		return [stackHolder.storage[0]];
	}

	// This doesn't implement the functionality described in the required
	// To swap two elements in an array, you can use array.slice().
	var swap = function () {
		return stackHolder.storage;
	}

	/** 
	 * In general, using string literlals in this way is not good practice.
	 * For example, what if you wrote some code like var item = stack("popp"), 
	 * instead of the expected behaviour, something vastly different would occur.
	**/
	switch (stackOperation) {
		case 'push':
			// Your calling an inline functions here that returns either a value or object, but then is immediately lost because your not assigning it to a variable,
			// nor returning it from the parent function stack(). Use return here and remove the break on the next line
			push(stackValue);
			break;
		case 'pop':
			// same as above
			pop();
			break;
		case 'swap':
			// same as above
			swap();
			break;
		case 'peek':
			// same as above
			peek();
			break;
		default:
			return stackHolder.storage;
	}
}

/**
 * Putting the bugs aside, let's say you wrote some code like below:
 *	var item1 = stack("pop");
 *	var item2 = stack("pop");

 * What do you think the value of item2 would be, and does this represent how a stack should behave?
 * Think about a stack of cards, the number on top being 10, and the bottom card being 1.
 * If you called pop twice, the value should be 9. But in this case, with the code you have written, you would get the same value twice.

 * What do you think happens to the variable `stackHolder` defined at the start of this code?
 * 
 * Let's consider an example:
 * Below we get the whole storage array as this will execute the code in the default case within your switch
 * var myStack = stack();

 * next we immediately defeated the purpose of a stack, because we are able to assign a new value at index 0, the "bottom of your stack"
 * myStack[0] = 1;
 * 
 * Now, thinking about your `stackHolder` object defined in your stack function, do you think the value at array index 0 has changed?
**/