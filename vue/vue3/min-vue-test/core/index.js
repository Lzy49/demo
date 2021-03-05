import {effectWatch} from './reactive/index.js'
import {mountElement} from './render/index.js'
export function createApp(component){
  return {
    mount(rootContainer){
      const context = component.setup()
      effectWatch(()=>{
        rootContainer.innerHTML = ``
        mountElement(component.render(context),rootContainer)
      })
    }
  }
}