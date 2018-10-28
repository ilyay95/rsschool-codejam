
module.exports =function make(num) {
    let sum = [+num];
  
    return function f() {
        if (typeof arguments[0] == 'function') {
          return sum.reduce(arguments[0]);
        }
  
        for (let i = 0; i < arguments.length; i++) {
          if (typeof +arguments[i] == 'number') sum.push(+arguments[i]);
        }
  
        return f;
    };
  }
  function sum(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function del(a,b){
    
    return a/b;
}