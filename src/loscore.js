// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    let copy = [];
    for (let element of array) {
      copy.push(element);
    }

    for (let i = 0; i < array.length; i++) {
      for (let y = i + 1; y < copy.length; y++) {
        if (copy[y] === array[i]) {
          copy[y] = "duplicate";
        }
      }
    }

    let result = [];

    for (const element of copy) {
      if (element != "duplicate") {
        result.push(element);
      }
    }

    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    let array = [];
    this.each(collection, (val) => array.push(iteratee(val)));
    return array;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    let result = [];
    this.filter(collection, (val) => {
      if (!test(val)) result.push(val);
    });
    return result;
  }

  //   `_.reduce` - reduces a collection to a single value by repetitively calling the`iterator(accumulator, item)` for each item.
  //   The accumulator should be the return value of the previous iterator call.

  // If no starting value is passed, the first element in the collection should be used as the accumulator.

  // ```js
  // const numbers = [1, 2, 3];
  // const accumulate = (result, int) => {
  //   return result + int;// };
  // const sum = _.reduce(numbers, accumulate(total, number), 0); // ---> 6
  reduce(collection, iterator, accumulator) {
    let total;
    if (typeof accumulator == "undefined") {
      total = collection[0];
      let copy = [];
      for (let i = 1; i < collection.length; i++) {
        copy.push(collection[i]);
      }
      this.each(copy, function(item, index) {
        total = iterator(total, item);
      });
    } else {
      total = accumulator;
      this.each(collection, function(item, index) {
        total = iterator(total, item);
      });
    }

    return total;
  }

  every(collection, iterator) {
    //if there is no callback is provided
    if (iterator === undefined) {
      for (const element of collection) {
        if (element === {}) {
          return;
        } else {
          return true;
        }
      }
    }
    // if the callback is provided
    else {
      let result = this.reduce(
        collection,
        (accumulator, item) => {
          if (accumulator === false || item === undefined) {
            return false;
          } else {
            return iterator(item);
          }
        },
        true
      );
      return result;
    }
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    // YOUR CODE HERE
  }

  memoize(func) {
    // YOUR CODE HERE
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
