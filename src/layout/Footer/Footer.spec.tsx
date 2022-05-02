import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Footer from './Footer'

it('footer renders correctly', () => {
  const elem = renderer.create(<BrowserRouter><Footer/></BrowserRouter>).toJSON()
  expect(elem).toMatchSnapshot()
})
