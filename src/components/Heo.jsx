import React from 'react'
import DownloadAds from './DownloadAds'

function Heo() {
  return (
    <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] '>
        {/* left-side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span>Experience the</span>
            <span><b>Best Quality Products</b></span>

            <span className='text-[15px] text-[#525D6E]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, cumque!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>

            {/* download ads */}
            <div>
                <span className='text-[13px]'>Download Now on Android & iOS</span>
                <DownloadAds />
            </div>

        </div>

        {/* right-side */}
        <div className="images relative w-[50%]">
            <img src={require("../img/backgraphics.png")} alt="" 
                className='absolute top-[-8rem] left-[19rem]'
            />
            <img src={require("../img/p 1.png")} alt="" 
            className='absolute top-[-18rem] h-[34rem] left-[13rem]'
            />
            <img src={require("../img/p 2.png")} alt="" 
            className='absolute left-[231px] top-[45px] w-[179px]'
            />
            <img src={require("../img/p 3.png")} alt="" 
            className='absolute w-[5rem] left-[13rem] top-[9rem]'
            />
            <img src={require("../img/p 4.png")} alt="" 
            className='absolute w-[5rem]  left-[12.5rem] top-[9rem]'
            />
        </div>
         
    </div>
  )
}

export default Heo