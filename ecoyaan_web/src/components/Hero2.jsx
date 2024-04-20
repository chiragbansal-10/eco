import React from 'react'
import styles from '../style'
import img1 from '../images/image2.jpg'

const Hero2 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-start items-start w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px]">
            Carefully curated <br className="sm:block hidden" />
            <span className="text-gradient">Eco-friendly</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px] w-full">
          products.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          We believe that every purchase you make can have a positive impact on the planet and the future.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={img1} alt="ecoyaan" className="w-[90%] h-[90%] relative z-[5] hover:scale-110" />
      </div>
    </section>


  )
}

export default Hero2