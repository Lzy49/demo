// 创建一个 URL 对象
const url = new URL('https://www.taptap.com?v=10&age=11');
console.log(url);
// searchPromise
console.log(url.searchParams.has('v')); // true
url.searchParams.append('c', '你好');
console.log(url.search); // '?v=10&age=11&c=%E4%BD%A0%E5%A5%BD'
url.searchParams.set('c', 'abc');
console.log(url.search); // '?v=10&age=11&c=abc'
url.searchParams.append('c', 'ddd');
console.log(url.searchParams.get('c')); //abc
console.log(url.searchParams.getAll('c')); //[ 'abc', 'ddd' ]
console.log(url.search); // ?v=10&age=11&c=abc&c=ddd
url.searchParams.sort();
console.log(url.search); // ?age=11&c=abc&c=ddd&v=10
url.searchParams.delete('c');
console.log(url.searchParams.getAll('c')); // []
console.log(url.searchParams.has('v')); // true
url.searchParams.sort();
