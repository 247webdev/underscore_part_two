var myFunctions = {

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  extend: function(obj) {

  },

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.

  once: function(func) {

  var alreadyCalled = false;
  var result;

  // TIP: We'll return a new function that delegates to the old one, but only
  // if it hasn't been called before.
  return function() {

    // TIP: .apply(this, arguments) is the standard way to pass on all of the
    // information from one function call to another.

    // The new function always returns the originally computed result.

   };

  },

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  delay: function(func, wait) {

  },

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // _.memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  // http://addyosmani.com/blog/faster-javascript-memoization/
  memoize: function(func) {

  }

};
module.exports = myFunctions;
