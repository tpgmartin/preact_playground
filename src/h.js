import { VNode } from './vnode'

export function h(nodeName, attributes) {
  let child,
      children = [],
      stack = []
  // returns child nodes in reverse order
  for (let i=arguments.length; i-- > 2;) {
    stack.push((arguments[i]))
  }
  while (stack.length) {
    child = stack.pop()
    if (child instanceof Array) {
      for (let i=child.length; i--;) stack.push(child[i])
    } else {
      children.push(child)
    }
  }
  return new VNode(nodeName, attributes || undefined, children);
}
