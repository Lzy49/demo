/// <reference path="a.ts"/>
var A;
(function (A) {
    function say() {
        console.log('你好 say');
    }
    A.say = say;
})(A || (A = {}));
A.set();
var set = A.set;
set();
