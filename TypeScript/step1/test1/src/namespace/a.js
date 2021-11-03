var A;
(function (A) {
    // export function say(){ // 报错 因为其他页面有相同 namespace
    //   console.log('你好')
    // }
    function set() {
        console.log('你好 set');
    }
    A.set = set;
})(A || (A = {}));
