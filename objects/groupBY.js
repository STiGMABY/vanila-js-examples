const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

// const sortByFruit = Object.groupBy(inventory, ({ type }) => type);

const groupByType = inventory.reduce((group, item) => {
    const { type } = item;
    group[type] = group[type] || [];
    group[type].push(item);
    return group;
}, {});
// console.log(sortByFruit)
console.log(groupByType)

// {
//     vegetables: [ { name: 'asparagus', type: 'vegetables', quantity: 5 } ],
//         fruit: [
//     { name: 'bananas', type: 'fruit', quantity: 0 },
//     { name: 'cherries', type: 'fruit', quantity: 5 }
// ],
//     meat: [
//     { name: 'goat', type: 'meat', quantity: 23 },
//     { name: 'fish', type: 'meat', quantity: 22 }
// ]
// }

