import(/* webpackPrefetch: true */ './another-module');
import './another-module1.js'
import _ from 'lodash'
function getComponent() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  document.body.appendChild(element);
  console.log('我先执行 index')
}
getComponent()