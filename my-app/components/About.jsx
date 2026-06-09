import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'
import {Ovo} from 'next/font/google';

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
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.jas_climb_pic} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'>
                    <p>
                        Before studying Computer Science, I was a classical pianist for over 10 years and taught at a music
                        school. I am passionate about user experience and using technology for good.<br/><br/>
                        During my time at University, I wrote apps in C, C++, Python, Javascript, HTML, CSS, Dart, SQL. <br/><br/>
                        Outside of music and technology, I love training for marathons and rock climbing. I have traveled across the U.S. 
                        as well as internationally to Canada and Greece for climbing and hope to climb in China one day.<br/><br/>
                        Currently, I am studying to pass the German A2 Goethe language exam and training my cattledog, Roux to join me on 
                        trail runs. 
                    </p>
                </div>
            </div> 
        
        </div>
    )
}

export default About