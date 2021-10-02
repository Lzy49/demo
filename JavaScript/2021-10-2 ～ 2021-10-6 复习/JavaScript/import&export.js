// import 引入
import { module1 } from 'url';
import module2 from 'url';
import { module as newModule } from 'url';
import { default as newModule2 } from 'url';
import('url').then(res=>{
  console.log(res)
})
export const module = 'xxx';
export default module = 'xxx';
export { default as module3 } from 'url';
