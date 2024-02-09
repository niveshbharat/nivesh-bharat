import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    title: string;
    body: string;
}

export const AboutCard = ({ image, title, body }: Props) => {
    return (
        <div className="flex backdrop-blur-2xl flex-col border items-center p-10 rounded-xl sm:w-[25vw] justify-around hover:bg-p_orange/20 hover:scale-105 duration-300 transition-all cursor-pointer">
            <Image src={image} alt="investor" />
            <hr className="w-1/2 my-5" />
            <div className="flex flex-col justify-center items-center">
                <span className="pt-2 font-bold text-center text-[25px]">{title}</span>
                <p className="text-center">{body}</p>
            </div>
        </div>
    )
}