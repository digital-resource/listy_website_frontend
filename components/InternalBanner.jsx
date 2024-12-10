'use client'
import Image from "next/image";

import Container from "@/components/Container";

const InternalBanner = ({ bannerImg, title }) => {
    return (
        <section className="my-[3rem]">
            <Container customStyle="flex flex-wrap responsive_container rounded-[2.69rem]">
                <div className="w-full relative flex flex-col items-end flex-end">
                    <div className="rounded-[2.69rem] w-full h-[40%] absolute top-[60%] z-10">
                        <h1 className="text-white text-center absolute top-[45%] left-0 right-0 mx-auto z-10 text-2xl xsm:text-3xl md:text-5xl mb-8 sm:top-[50%]">{ title }</h1>
                        <section className="bg-gradient-to-t from-[#3B82A3] to-transparent w-full h-[100%] rounded-[2.69rem] mix-blend-multiply"></section>
                    </div>
                    <Image
                        src={bannerImg}
                        className="w-[100%] rounded-[2.69rem]"
                        alt={`${title} Banner`}
                    />
                </div>
            </Container>
        </section>
    )
}

export default InternalBanner