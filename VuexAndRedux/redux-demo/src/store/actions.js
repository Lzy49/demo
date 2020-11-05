export const addTodo = (ags)=>{
  return {
    type:'ADDTODO',
    ...ags
  }
}