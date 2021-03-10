import _ from 'lodash';
import './style.css'
import pic from './pic.jpg'
import data from './test.csv';
function component() {
  const element = document.createElement('div');

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello=>', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = pic;

  element.appendChild(myIcon);
  console.log(data);
  return element;
}

document.body.appendChild(component());