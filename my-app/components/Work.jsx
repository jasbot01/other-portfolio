import React from 'react'
import {Ovo} from 'next/font/google';
import {workData} from '@/assets/assets'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const ovo = Ovo ({
    weight: '400',
    subsets: ['latin'],
});

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className={`${ovo.className} text-center mb-2 text-lg`}>
                My Portfolio 
            </h4>
            
            <h2 className={`${ovo.className} text-center text-5xl`}>
                My latest projects 
            </h2>

            <p className={`${ovo.className} text-center max-w-2xl mx-auto mt-5 mb-12`}>
                Welcome to my portfolio! Here is the collection of my latest projects.
            </p> 

            <div className='grid grid-cols-auto my-10 gap-5'>
                {workData.map((project, index) => (
                    <div key={index}
                    style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                        justify-between duration-500 group-hover:bottom-7'>
                        
                        </div>

                        <div>
                            <h2>{project.title}</h2> 
                            <p>{project.description}</p> 
                        </div>
                        
                        <div>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    
                    </div>
                ))}
            </div>


        </div> 
    )
}

export default Work