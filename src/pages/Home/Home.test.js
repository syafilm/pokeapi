import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Home from './Home'

describe('Home page', () => {
  it('Can render Smoothly', () => {
    const component = shallow(
      <Home />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
})
