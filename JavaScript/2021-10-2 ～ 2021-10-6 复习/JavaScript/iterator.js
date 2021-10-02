// 迭代器 和 生成器
function* iterator1() {
  try {
    yield 1;
    yield 2;
    const v = yield 3;
    console.log(v);
    return;
  } catch (r) {
    console.log(r);
  }
}
const i = iterator1();
console.log(i.next()); // => {value:1,done:false}
console.log(i.next()); // => {value:2,done:false}
console.log(i.next('no')); // => {value:3,done:false}
console.log(i.next('yes')); // => yes {value:undefined,done:true}

function* iterator2() {
  yield* iterator1();
  yield 4;
  yield 5;
}
const i2 = iterator2();

console.log(i2.next()); // => {value:1,done:false}
console.log(i2.next()); // => {value:2,done:false}
console.log(i2.next('no')); // => {value:3,done:false}
console.log(i2.next('yes')); // => yes {value:4,done:false}
console.log(i2.next()); // => {value:5,done:false}
console.log(i2.next()); // => {value:undefined,done:true}
console.log(i2.next('no')); // => {value:undefined,done:true}
console.log(i2.next('yes')); // => {value:undefined,done:true}

const i3 = iterator1();
console.log(i3.next()); // { value: 1, done: false }
console.log(i3.return()); // { value: undefined, done: true }
console.log(i3.next()); // { value: undefined, done: true }
const i4 = iterator1();

console.log(i4.next()); // { value: 1, done: false }
console.log(i4.throw()); //false  { value: undefined, done: true }
console.log(i4.next()); // { value: undefined, done: true }

const i5 = iterator1();
for (item of i5) {
  console.log(item); // 1, 2 ,3
}
