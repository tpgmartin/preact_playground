import { expect } from 'chai'
import { h } from '../../src'
import { VNode } from '../../src/vnode'

const buildVNode = (nodeName, attributes, children=[]) => ({
  nodeName,
	children,
	attributes,
	key: attributes && attributes.key
});

describe('h(jsx)', () => {
  it('should return a VNode', () => {
    let r;
    expect(() => r = h('foo')).not.to.throw()
    expect(r).to.be.an('object');
    expect(r).to.be.an.instanceof(VNode);
    expect(r).to.have.property('attributes', undefined);
    expect(r).to.have.property('children').that.eql([]);
  })

  it('should preserve raw attributes', () => {
    let attrs = { foo:'bar', baz:10, func:()=>{} },
        r = h('foo', attrs);
    expect(r).to.be.an('object')
             .with.property('attributes')
             .that.deep.equals(attrs)
  })

  it('should support element children', () => {
    let r = h('foo', null, h('bar'), h('baz'))
    expect(r).to.be.an('object')
             .with.property('children')
             .that.deep.equals([buildVNode('bar'), buildVNode('baz')])
  })

  it('should support multiple element children given as arg list', () => {
    let r = h('foo', null, h('bar'), h('baz', null, h('test')))
    expect(r).to.be.an('object')
             .with.property('children')
             .that.deep.equals([
               buildVNode('bar'),
               buildVNode('baz', undefined, [
                 buildVNode('test')
               ])
             ])
  })

  it('should support multiple element children given as an array', () => {
    let r = h('foo', null, [ h('bar'), h('baz', null, h('test')) ])
    expect(r).to.be.an('object')
             .with.property('children')
             .that.deep.equals([
               buildVNode('bar'),
               buildVNode('baz', undefined, [
                 buildVNode('test')
               ])
             ])
  })
})
