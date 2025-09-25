// https://doka.guide/js/array-reduce/

myArray = [[1, 2], [3, 4], [5, 6]]

const flatten = myArray.reduce((acu, elem) => {
  return acu.concat(elem)
}) // ожно указать значение с корого наченется счет. т.е. значение acu
console.log(flatten) //[ 1, 2, 3, 4, 5, 6 ]

//-------------------------------------
const friends = [
  {
    name: 'Lera',
    books: ['JS', 'QA testing'],
  },
  {
    name: 'Bonia',
    books: ['Happy kitty', 'Lazy cat'],
  },
  {
    name: 'Musia',
    books: ['How top avoid dog', 'Best food for cats'],
  },
]

const flattenBooks = friends.reduce((acu, elem) => {
  return acu.concat(elem.books)
}, []) // В данном случае нужно обязательно укзать начальное значение (можно пустой массив)
console.log(flattenBooks)
// [
//     'JS',
//     'QA testing',
//     'Happy kitty',
//     'Lazy cat',
//     'How top avoid dog',
//     'Best food for cats'
// ]

//--------------------------------------
const testTags = [
  {
    description: 'This is desc 1',
    carrier: 'NFS',
    tags: [
      {name: 'tag1', value: 'tag1'},
      {name: 'tag11', value: 'tag11'},
    ],
  },
  {
    description: 'This is desc 2',
    carrier: 'NFS 2',
    tags: [
      {name: 'tag2', value: 'tag2'},
      {name: 'tag22', value: 'tag22'},
    ],
  },
]

// const flatTags = testTags.map((item) => item.tags.map(tag => tag.name)).flat()
// console.log(flatTags)

const my_tags = [
  {
    item: 1,
    tags: [
      { name: "LandingPage", value: "true" },
      { name: "Country", value: "GB" },
      { name: "Carrier", value: "Evri" },
      { name: "EventCode", value: "Dispatched" }
    ]
  },
  {
    item: 2,
    tags: [
      { name: "LandingPage", value: "true" },
      { name: "Country", value: "USA" },
      { name: "Carrier", value: "RoyalMail" },
      { name: "EventCode", value: "Dispatched" }
    ]
  }
];

const countriesAndCarriers = my_tags.map((item => {
  const carrier = item.tags.find(tag => tag.name === 'Carrier')
  const country = item.tags.find(tag => tag.name === 'Country')
  return [carrier.value,country.value ]
}))
console.log(countriesAndCarriers)

countriesAndCarriers.map(([carrier, country]) => {
  console.log(carrier)
  console.log(country)
})

// ---------------------

const newArr3 = ['Joe', 'Danny', 'Andrew']

newArr3.reduce((accumulator, currentVal, index, array) => {
  return {
    ...accumulator,
    [index]: currentVal
  }
}, {})


const arr = ['Nick', 'Mike']
const objFromArr = arr.reduce((acc, elem, index) => {
  acc[index] = elem
  return acc
}, {})
console.log(objFromArr)
// -----------------------

let numbers = [10, 5, 100, 28977, 1000, 2065];
const maxVal = numbers.reduce((acc, val) => acc > val ?acc : val, numbers[0]);
console.log(maxVal);

// -------------------------
let keyValuePairs = [['key1','value1'], ['key2','value2'], ['key3','value3']]

const flattenKeyValuePairs = keyValuePairs.reduce((acc,[key, value] ) => {
    return {...acc,[key]: value};
})
console.log(flattenKeyValuePairs);
// ----------------------

const sumDigits = (digits) => {
    const res = Math.abs(digits.toString()
        .split('')
        .reduce((acc , curr) => Number(acc) + Number(curr), 0))
    console.log(res)
}
sumDigits(53)
// --------------------------
// const indexOfCapitals = (str) => {
//     //2:
//     return str.split('').reduce((result, letter, index) => {
//         if (letter === letter.toUpperCase()) { result.push(index) }
//         return result
//     }, [])
// }
// console.log(indexOfCapitals('CodEWaRs')); //0,3,4,6
