/// <reference path="a.ts"/>
namespace A {
  export function say() {
    console.log('你好 say');
  }
}
A.set();

import set = A.set
set();