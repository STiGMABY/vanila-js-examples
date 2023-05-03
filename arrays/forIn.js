const animals = ['cat', 'dog', 'shark']

for (const animal in animals) {
    console.log(animal); // 0 1 2 
}

for (let animal in animals) {
    console.log(animals[animal]) // cat dog shark
}