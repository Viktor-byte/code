function isHappy(n) {
    // Good Luck
    for(let i = 0; i < 100; i++){
    n = n.toString().split('').reduce((a ,b) => a+ (b*b), 0)
      }
    return n === 1
  }
  
  function digitalRoot(n) {
    // ...
    return (n - 1) % 9 + 1;
  }