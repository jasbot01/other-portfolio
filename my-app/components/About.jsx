import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'
import {Ovo} from 'next/font/google';
import {infoList} from '@/assets/assets'

const ovo = Ovo ({
    weight: '400',
    subsets: ['latin'],
});



const About = () => {
    return (
        <div id='about' className={`${ovo.className} w-full px-[12%] py-10 scroll-mt-20`}>
            <h4 className={`${ovo.className} text-center mb-2 text-lg`}>
                Introduction
            </h4>
            
            <h2 className={`${ovo.className} text-center text-5xl`}>
                About me
            </h2>

            {/* this is so that there are two columns with the divs */}
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-84 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.jas_climb_pic} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'>
                    <p className={`${ovo.className} mb-10 max-w-2xl`}>
                        Before studying Computer Science, I was a classical pianist for over 10 years and taught at a music
                        school. I am passionate about user experience and using technology for good.<br/><br/>
                        During my time at University, I wrote apps in C, C++, Python, Javascript, HTML, CSS, Dart, SQL. <br/><br/>
                        Outside of music and technology, I love training for marathons and rock climbing. I have traveled across the U.S. 
                        as well as internationally to Canada and Greece for climbing and hope to climb in China one day.<br/><br/>
                        Currently, I am studying to pass the German A2 Goethe language exam and training my cattledog, Roux to join me on 
                        trail runs. 
                    </p>
                    <ul className={`${ovo.className} grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl`}>
                        {infoList.map(({icon, iconDark, title, description},
                        index)=>(
                            <li className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500`}
                            key={index}>
                                <Image src={icon} alt={title} className='w-7
                                mt-3'/>
                                <h3 className='my-4 front-semibold text-gray-700'>{title}</h3>
                                <p className={`${ovo.className} text-gray-600 text-sm`}>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        
        </div>
    )
}

export default About