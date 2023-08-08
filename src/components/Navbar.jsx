import { useState } from 'react'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile.png'
import { HiDotsVertical } from 'react-icons/hi'
import { menu } from '../constants'
import HeaderItem from './HeaderItem'

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-start gap-8'>
        <img src={logo} alt="logo" className='w-[80px] m:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
          {
            menu.map((item) => (
              <HeaderItem name={item.name} Icon={item.icon} />
            ))
          }
        </div>

        <div className='flex md:hidden gap-5'>
          {
            menu.map((item, index) => index<3&&(
              <HeaderItem name={''} Icon={item.icon} />
            ))
          }
        

          <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {
              toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
              {
                  menu.map((item,index)=>index>2&&(
                  <HeaderItem name={item.name} Icon={item.icon} />
                ))
              }
            </div>:null}
          </div>
        
        </div>

      </div>
      <img src={profile} alt="profile" className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Navbar