(function () {
  // 条件类型 公式 T extends U ? X : Y 
  type test <T> =  
    T extends string ?  'string':
    T extends number ?  'number':
    'other'
  let a:test<'10'> = 'string'; // 可
  // let b:test<'10'> = 'list'; // 报错因为他只能是 'string'
  type test2 <T> = 
    T extends string ? 1|2|3|4:'other';
  let b:test2<'10'> = 1;
  let c:test2<1> = 'other';
})();
