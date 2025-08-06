interface Repository<T> {
  crate:(obj: T) => T
  get:(obj: T) => T
  update:(obj: T) => T
  delete: (obj: T) => T
}

class Car {
  name: string
  model: string
  year: number
}

class Person {
  name: string
  surName: string
  mail: string
}

class CarRepository implements Repository<Car>{
  crate(obj: Car): Car {
    return undefined
  }

  delete(obj: Car): Car {
    return undefined
  }

  get(obj: Car): Car {
    return undefined
  }

  update(obj: Car): Car {
    return undefined
  }
}

class PersonRepository implements Repository<Person>{
  crate(obj: Person): Person {
    return undefined
  }

  delete(obj: Person): Person {
    return undefined
  }

  get(obj: Person): Person {
    return undefined
  }

  update(obj: Person): Person {
    return undefined
  }
}