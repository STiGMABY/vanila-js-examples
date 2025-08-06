function updateVegetablesCollection(veggiesList, veggie) {
  switch (veggies.indexOf(veggie)) {
    case -1:
      console.log(`We added new vegetable ${ veggie }`)
      return veggies.push(veggie)
    default:
      return console.log(`The vegetable is already in the refrigerator`)
  }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper']

updateVegetablesCollection(veggies, 'spinach')
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach')
// spinach already exists in the veggies collection.

console.log(veggies)