(function () {
  let a: any;
  a = [10];
  a = 11;
  a = '123';
  let b: number;
  b = a;
})();

(function () {
  let a: unknown;
  a = 10;
  let b:number = 10;
  // b = a; // error
  b = typeof a === 'number' ? a : 0 // ok
});
