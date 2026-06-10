import Image from 'next/image'
import React from 'react'
import {assets} from '@/assets/assets'
import {Ovo} from 'next/font/google';


const ovo = Ovo ({
    weight: '400',
    subsets: ['latin'],
});

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.me_profile} alt='jas' className='rounded-full w-32'/>
            </div>
            
            <h3 className={`${ovo.className} flex items-end gap-2 text-xl md:text-2xl mb-3`}>
                    Hi! I'm Jasmine 
            </h3>
            
            <h1 className={`${ovo.className} text-3xl sm:text-6xl lg:text-[66px]`}>
                cs grad from osu
            </h1>

            <p className={`${ovo.className} 'max-w-2xl mx-auto'`}>
                I am passionate about tech literacy, security, and UX/UI! 
            </p>
            
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="https://github.com/jasbot01" target="_blank" 
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
                >my github<Image src={assets.right_arrow_white} alt='contact button'
                className='w-4'/></a>

                <a href="/J_Sny_Resume.pdf" target="_blank" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> 
                my resume<Image src={assets.download_icon} alt='resume download button'
                className='w-4'/></a> 
            
            </div> 
        </div>
    )
}

export default Header