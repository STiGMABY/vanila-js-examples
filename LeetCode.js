const expect = (expect) => {
  return {
    toBe: (toBe) => {
      if(expect === toBe){
        return true
      } else {
        throw new Error("Not Equal")
      }
    },
    notToBe: (toBe) => {
      if(expect !== toBe){
        return true
      } else {
        throw  new Error("Equal")
      }
    }
  }
}

expect(5).toBe(5)
expect(6).notToBe(5)

function createCounter(init) {
  let currentValue = init;

  return {
    increment: function() {
      currentValue ++;
      return currentValue;
    },
    decrement: function() {
      currentValue --;
      return currentValue;
    },
    reset: function() {
      currentValue = init;
      return currentValue;
    }
  };
}

// Пример использования
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4

const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset());     // 0
