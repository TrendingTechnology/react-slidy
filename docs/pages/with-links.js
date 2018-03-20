import React from 'react'
import ReactSlidy from '../../src'

import { DisplayCode } from '../utils'

export const demo = (
  <div className='text-center'>
    <p>You can easily add links for each image by wrapping each image with the needed tag.</p>
    <ReactSlidy
      infinite={false}>
      <a href='http://miduga.es'>
        <img src='./img/beautiful_landscapes.jpg' />
      </a>
      <a href='https://github.com/miduga/react-slidy'>
        <img src='./img/beautiful_landscapes_02.jpg' />
      </a>
    </ReactSlidy>
    <DisplayCode>
      {`<ReactSlidy
      infinite={false}>
      <a href='http://miduga.es'>
        <img src='./img/beautiful_landscapes.jpg' />
      </a>
      <a href='https://github.com/miduga/react-slidy'>
        <img src='./img/beautiful_landscapes_02.jpg' />
      </a>
    </ReactSlidy>`
      }
    </DisplayCode>
  </div>
)
