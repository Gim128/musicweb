import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import CenterMenuComponent from './CenterMenuComponent'

function Header() {

    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'

  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]'>

        {/* logo */}
        <img src={require("../img/MuzicLogo.png")} alt="" />

        {/* centerMEnu */}
        <CenterMenuComponent />

        {/* btns */}
        <div className="btns flex">
            <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>Log In</button>
            <button className={buttonStyle +` bg-[#232A4E]`}>Sign In</button> 
        </div>

    </div>
  )
}

export default Header