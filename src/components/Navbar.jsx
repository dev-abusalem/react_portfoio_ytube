import React from 'react'

const Navbar = () => {
  const menu = [
    {
      path:"/",
      title:"Home"
    },
    {
      path:"/#about",
      title:"About Me"
    },
    {
      path:"/",
      title:"What I Do"
    },
    {
      path:"/",
      title:"Resume"
    },
    {
      path:"/",
      title:"Portfolio"
    },
    {
      path:"/",
      title:"Contact"
    }
  ]

  return (
    <section>
      <nav>
        <ul className='text-center'>
          {
            menu.map((item,index)=>{
              return <li  key={index}><a className='hover:text-emerald-600 duration-300 w-full py-3 block' href={item.path}>{item.title}</a></li>
            })
          }
        </ul>
      </nav>
    </section>
  )
}

export default Navbar