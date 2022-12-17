import React from 'react'

function CenterMenuComponent() {
    const listStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className='menu flex'>
        <ul className='flex w-[100%] justify-between'>
            <li className={listStyle}>Home</li>
            <li className={listStyle}>About Us</li>
            <li className={listStyle}>Products</li>
            <li className={listStyle}>Contact Us</li>
        </ul>
    </div>
  )
}

export default CenterMenuComponent