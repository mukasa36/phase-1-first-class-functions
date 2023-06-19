function receivesAFunction(me = () => "Why always Me") {
    return me();
  }
  
  function returnsANamedFunction() {
    // console.log(receivesAFunction()
  
    return receivesAFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("world");
    };
  }
  
  returnsANamedFunction();
  