import Schema from 'async-validator'
const descriptor = {
  name: {
    type: 'string', // 要求类型
    required: true, // 必填
    message: "The name must be Muji", // 错误提示
    validator: (rule, value) => value === 'Muji', // 处理方法
  },
  age: [
    {
      type: 'number',
      required: true, // 必填
      min:10,
      max:1000
    },
    // {
    //   asyncValidator: (rule, value) => {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(()=>{
    //         console.log('123')
    //         if(value !== 10){
    //           reject('value !== 10')
    //         }
    //         resolve()
    //       },3000)
    //     })
    //   },
    // }
  ],
  phone:{
    pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,   //11位手机号码正则,
    type: 'string', 
    required: true
  },
  list:{
    required: true, // 必填
    type:'array',
    defaultField: { type: 'url' },
    fields:[
      {
        type:'string',
        required: true, // 必填
      }
    ],
    transform(value){
      return value
      // return value.reverse();
    }
  }
};
const validator = new Schema(descriptor);
// validator.validate({ name: 'Muji',age:11}, (errors, fields) => {
//   console.log(errors)
//   console.log(fields)
//   if (errors) {
//     console.log(errors,fields)
//   }
// });

let p = validator.validate({ name: 'muji', age: 0,phone:'15248089350' ,list:['123','http://www.baidu.com','https://www.baidu.com']})
p.then(res=>{}).catch(({ errors, fields })=>{
  console.log({ errors, fields })
})