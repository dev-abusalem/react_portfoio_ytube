import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='px-12 py-5 bg-emerald-100 mt-16'>
        <div className="footer__wrapper md:flex justify-between">

            <p>Copyright © 2023 Simone. All Rights Reserved.</p>
            <ul className='mt-2 md:mt-0 md:flex gap-5'>
                <li><a href="#">Terms & Policy</a></li>
                <li><a href="#">Disclaimer</a></li>
            </ul>
            
        </div>
      </footer>
    )
  }
}
