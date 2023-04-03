import React from 'react'
import NavMenuLinks from '../../components/NavMenuLinks'


const About = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5 md:gap-10 text-white p-10 md:py-20 md:px-10 overflow-hidden">
        <div>
          <h1 className='text-3xl font-bold mb-5'>Self Overview</h1>
          <p>hi, my name is Ariel Maniago. I'm a start up Front-end Web Developer, always dreaming to achieved this kind career path and manifest it. I love creating a mockup design and building it into a web design from scratch at my own pace. I also loved taking photos using my phone's camera and edit it on any multimedia applications.</p>
          <p></p>
        </div>
        <NavMenuLinks/>
      </div>
    </section>
  )
}

export default About