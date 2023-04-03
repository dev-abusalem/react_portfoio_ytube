import React from 'react'
import {ImFacebook, ImTwitter , ImYoutube, ImDribbble, ImGithub} from "react-icons/im"

const Social = () => {
  return (
    <div className="social__links pb-3">
        <div className="w-full flex justify-between align-middle">
          <a className='mr-2 text-slate-600 hover:text-slate-500 text-xl p-1' href="/">
                <ImFacebook />
           </a>
           <a className='mr-2 text-slate-600 hover:text-slate-500 text-xl p-1' href="/">
                <ImTwitter />
           </a>
           <a className='mr-2 text-slate-600 hover:text-slate-500 text-xl p-1' href="/">
                <ImYoutube />
           </a>
           <a className='mr-2 text-slate-600 hover:text-slate-500 text-xl p-1' href="/">
                <ImDribbble />
           </a>
           <a className='mr-2 text-slate-600 hover:text-slate-500 text-xl p-1' href="/">
                <ImGithub />
           </a>
        </div>
    </div>
  )
}

export default Social