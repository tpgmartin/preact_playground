import { expect } from 'chai'
import { render } from '../../src/index.js'

describe('render()', () => {
  let scratch;

  before(() => {
    scratch = document.createElement('div')
    (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  it('should create empty nodes (<* />)', () => {
  })

})
