// vdom -> dom
export function mountElement(vdom,container){
  const {tag,props,children}  = vdom
  //tag
  let element = document.createElement(tag)
  //props
  if(props){
    for (const k in props){
      element.setAttribute(k,props[k])
    }
  }
  //children
  if(Array.isArray(children)){
    children.forEach(v => {
      mountElement(v,element)
    });
  }else{
    element.append(document.createTextNode(children))
  }
  
  container.append(element)
}