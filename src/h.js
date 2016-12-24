import { VNode } from './vnode'

export function h(nodeName, attributes) {
  let children = []
  // returns child nodes in reverse order
  for (let i=arguments.length; i-- > 2;) {
    children.push((arguments[i]))
  }
  return new VNode(nodeName, attributes, children.reverse());
}
