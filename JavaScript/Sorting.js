// 2).Perform sorting of an array in descending order.


const numbers = [5, 2, 8, 1, 4];

// Create a copy and sort in descending order
const descendingOrder = [...numbers].sort((a, b) => b - a);

console.log('Original array:', numbers);
console.log('Sorted in descending order:', descendingOrder);
