{
  // 创建
  const str1 = '1234567';
  const str2 = new String('12345');
  // 转换
  const arr = str1.split();
  console.log(arr);
}
// 剪切
{
  const str1 = '123456';
  const str2 = str1.slice(1, 3); //23 ( index or length + -index , index or length + -index )
  const str4 = str1.substring(1, 3); // 23 (index,length)
  const str3 = str1.substr(1, 3); // 234 (index,index)
  console.log(str1, str2, str3, str4);
}
// 大小写
{
  const str1 = 'abc';
  const strUp = str1.toLocaleUpperCase();
  console.log(strUp, str1);
  const strLow = strUp.toLocaleLowerCase();
  console.log(strLow, strUp);
}
// 码点和码元
{
  const str1 = 'abc';
  console.log(str1.charAt(0)); // a
  console.log(str1.codePointAt(0)); // 97
  console.log(str1.charCodeAt(0)); // 97
}
{
  //raw  & ``
  const str1 = 'd';
  console.log(String.raw`abc${str1}e`); // abcde
  console.log(
    // abcde
    String.raw(
      {
        raw: ['abc', 'e']
      },
      'd'
    )
  );
}

//判断
{
  const str = '123456';
  console.log(str.includes(3)); // true
  console.log(str.endsWith(6)); // true
  console.log(str.startsWith(1)); // true
}

// 正则
{
  const str = '123456';
  console.log(str.match(/[1-9]/g)); // [ '1', '2', '3', '4', '5', '6' ]
  console.log(str.match(/[1-9]/)); // [ '1', index: 0, input: '123456', groups: undefined ]
  console.log(str.replace(/[1-9]/, 'n')); // n23456
  console.log(str.replace(/[1-9]/g, 'n')); // nnnnnn
  console.log(str.search(/[1-9]/)); // 0
  console.log(str.search(/[7-9]/)); // -1
}

// 填充
{
  const str = '12345';
  console.log(str.padStart(4, '1')); // 12345
  console.log(str.padStart(10, '1')); // 1111112345
  console.log(str.padEnd(100, 'a')); //12345aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
}
// copy
{
  const str = '123456';
  console.log(str.repeat(2)); // 123456123456
}

// 去空格
{
  const str = ' 12345 ';
  console.log(str.trim());
  console.log(str.trimEnd());
  console.log(str.trimStart());
}
