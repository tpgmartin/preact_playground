import { VNode } from './vnode'

export function h(nodeName, attributes) {
  return new VNode(nodeName, attributes);
}
