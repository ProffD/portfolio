import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-16'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
              As a committed and proficient full stack developer, my primary goal is to excel in my role and make meaningful contributions to the technology industry through my expertise. I am dedicated to honing my skills by seeking guidance from seasoned developers, enrolling in online courses, maintaining a humble attitude, and consistently pushing myself to acquire comprehensive knowledge in the field of software development.
            </p>
        </div>
    </div>
  )
}

export default About