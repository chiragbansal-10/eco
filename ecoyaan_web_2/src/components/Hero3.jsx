import React from 'react'
import styles from '../style'
import img1 from '../images/person1.png'
import img2 from '../images/person2.png'

const Hero3 = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            <div className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={img1} alt="ecoyaan" className="w-[40%] h-[40%] relative z-[5] hover:scale-110" />
                <img src={img2} alt="ecoyaan" className="w-[40%] h-[40%] relative z-[5] hover:scale-110" />
            </div>

            <div className={`flex flex-col xl:px-0 sm:px-16`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px]"> Our
                        <span className="text-gradient"> Story</span>
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
                    We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
                </p>

                <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
                    Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
                </p>

                <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
                    We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
                </p>

                <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
                    As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we'll make a difference.
                </p>

            </div>

        </section>
    )
}

export default Hero3