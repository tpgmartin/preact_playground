import { expect } from 'chai'
import { h } from '../src/h'
import { VNode } from '../src/vnode'

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
})
