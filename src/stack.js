export default function stack(stackOperation, stackValue) {
	var storage = [
		1,
		'{id: 1,value: "obj"}',
		"stringHolder",
		46
	];

	var push = function (value) {
		storage.splice(storage.length, 0, value);
		return storage;
	}

	var pop = function () {
		if (storage.length === 0) {
			console.log("count was 0");

			return [];
		}

		var poppedItem = storage.splice(storage.length - 1, 1);
		return poppedItem[0];
	}

	var peek = function () {
		return storage[storage.length - 1];
	}

	var swap = function (indexes) {
		var index1 = indexes[0];
		var index2 = indexes[1];

		// replace the element at index1 with the value at index2
		var replacedItem = storage.splice(index1, 1, storage[index2]);

		// replace the element at index2 with `replacedItem` which has taken the value index1
		storage.splice(index2, 1, replacedItem[0]);

		return storage;
	}

	switch (stackOperation) {
		case 'push':
			return push(stackValue);
		case 'pop':
			return pop();
		case 'swap':
			return swap(stackValue);
		case 'peek':
			return peek();
		default:
			return storage;
	}
}