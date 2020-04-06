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
    const copy = [];
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

    const result = [];

    for (const element of copy) {
      if (element !== "duplicate") {
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
    const array = [];
    this.each(collection, (val) => array.push(iteratee(val)));
    return array;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    const result = [];
    this.filter(collection, (val) => {
      if (!test(val)) result.push(val);
    });
    return result;
  }

  reduce(collection, iterator, accumulator) {
    let total;
    if (typeof accumulator == "undefined") {
      total = collection[0];
      const copy = [];
      for (let i = 1; i < collection.length; i++) {
        copy.push(collection[i]);
      }
      this.each(copy, (item) => {
        total = iterator(total, item);
      });
    } else {
      total = accumulator;
      this.each(collection, (item) => {
        total = iterator(total, item);
      });
    }

    return total;
  }

  every(collection, iterator) {
    //if there is no callback is provided
    if (iterator === undefined) {
      for (const element of collection) {
        if (element === 1 || element === {}) {
          return true;
        } else if (element === false && element !== undefined) {
          return false;
        }
        return true;
      }
    }
    // if the callback is provided
    else {
      const result = this.reduce(
        collection,
        (accumulator, item) => {
          if (item === 1 || item === {}) {
            return true;
          } else if (accumulator === false || item === undefined) {
            return false;
          }
          return iterator(item);
        },
        true
      );
      return result;
    }
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  extend(...obj) {
    // YOUR CODE HERE
    const array = [...obj];
    // put all the things to array[0] which is the main obj
    for (let i = 1; i < array.length; i++) {
      this.each(array[i], (item, key) => {
        array[0][key] = item;
      });
    }
    return array[0];
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    const database = [];

    return function() {
      for (const set of database) {
        if (set.fn !== null) {
          return set.value;
        }
      }
      let newSet = { fn: func, value: func() };
      database.push(newSet);
      return newSet.value;
    };
  }

  memoize(func) {
    // YOUR CODE HERE
    // another solution but failed
    // let isInvoked = false;
    // let thisArg = false;
    // let value;
    // return function(arg) {
    //   if(!isInvoked){
    //     isInvoked = true;
    //     thisArg = true;
    //     value = func(arg);
    //     return value;
    //   } else {
    //       if(!thisArg){
    //         thisArg = true;
    //         value = func(arg);
    //         return value;
    //       } else {
    //           return value;
    //         }
    //     }
    // }

    const database = [];

    return function(para) {
      for (const set of database) {
        if (set.fn === func) {
          if (set.pa === para) return set.value;
        }
      }

      const newSet = { fn: func, pa: para, value: func(para) };
      database.push(newSet);
      return newSet.value;
    };
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE

    const result = [];

    if (typeof functionOrKey === "string") {
      this.each(collection, (item) => {
        result.push(collection[0][functionOrKey].apply(item));
      });
    } else {
      this.each(collection, (item) => {
        result.push(functionOrKey.apply(item));
      });
    }

    return result;
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
