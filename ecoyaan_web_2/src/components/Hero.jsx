import React from 'react'
import styles from '../style'
import img1 from '../images/about.png'

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px]"> About
                        <span className="text-gradient"> Ecoyaan</span>
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
                    At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
                    We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
                    <ul className="list-none mt-2">
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-secondary`}>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-secondary`}>Videos, posts, and quizzes on climate change and sustainability</li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-secondary`}>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                    </ul>
                </p>

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={img1} alt="ecoyaan" className="w-[90%] h-[70%] relative z-[5] hover:scale-110" />
            </div>
        </section>


    )
}

export default Hero