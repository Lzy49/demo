console.log('执行后加载我 another-module')
function getComponent() {
  return import('jquery')
    .then(({ default: $ }) => {
      console.log($)
      const element = document.createElement('div');
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
