import React from 'react'

function DownloadAds() {
    const downloadImage = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div>
        <div className="download">
            <div className="download_images flex">
                <img src={require("../img/App Store.png")} alt="" className={downloadImage + ` mr-[2rem]`}/>
                <img src={require("../img/Google Play.png")} alt="" className={downloadImage}/>
            </div>
        </div>
    </div>
  )
}

export default DownloadAds