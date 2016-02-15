// revealing module
v5_revealing_module = function(){
  var doStuff = function(){
    return "do stuff";
  }
  return {
    "doStuff": doStuff
  };
}()

// mixin module
(function(module){
  module.doStuff = function(){
    return "do stuff";
  }
}(v5_mixin_module = v5_mixin_module || {}));
