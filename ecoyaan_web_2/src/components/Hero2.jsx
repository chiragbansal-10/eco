import React from 'react'
import styles from '../style'
import { features } from '../constants';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[200%] h-[70%] object-cover" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Hero2 = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <h4 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[34px] text-white ss:leading-[70px] leading-[60px]"> Our
                    <span className="text-gradient"> Values</span>
                </h4>
            </div>

            <div className={`flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}


export default Hero2