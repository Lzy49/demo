// 保护机制
class Javascript {
  javascript: any;
  javascriptLog() {
    console.log('JavaScript');
  }
}
class Java {
  java: any;
  javaLog() {
    console.log('Java');
  }
}
function isJavascript(lang: Javascript | Java): lang is Javascript {
  return (lang as Javascript).javascript !== undefined;
}
function test(lang: Javascript | Java, n: string | number) {
  // 函数判断
  if (isJavascript(lang)) {
    lang.javascriptLog();
  }
  // typeof 判断
  if (typeof n === 'string') {
    n.length;
  } else {
    n.toFixed(2);
  }
  // in 判断
  if ('java' in lang) {
    lang.javaLog();
  } else {
    lang.javascriptLog();
  }
  // instanceof 判断
  if (lang instanceof Javascript) {
    lang.javascriptLog();
  } else {
    lang.javaLog();
  }
}
