import React from 'react'
import styles from '../style'
import img1 from '../images/impact.png'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px]">
            Join our Community  <br className="sm:block hidden" /> in creating a more <br className="sm:block hidden" />
            <span className="text-gradient">Sustainable</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px] w-full">
          future for everyone.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          Join our community in creating a more sustainable future for everyone.
          At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={img1} alt="ecoyaan" className="w-[80%] h-[80%] relative z-[5] hover:scale-110" />
      </div>
    </section>


  )
}

export default Hero