export function VNode(nodeName, attributes, children) {
  this.nodeName = nodeName
  this.attributes = attributes
  this.children = children
  this.key = attributes && attributes.key
}
