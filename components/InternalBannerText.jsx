import Container from './Container'
import CustomButton from "./CustomButton";

import Image from 'next/image'
import {Link} from "@nextui-org/react"

import horizontalBanner from "@/public/images/services/internalHorizontalBan.webp"

const InternalBannerText = () => {
	return (
		<section className="bg-[#F0F0F0] py-24 w-full">
			
			<Container customStyle="flex flex-wrap justify-between responsive_container">
				<div className="w-full">
					<section className="text-center text-black">
						<h2 className="leading-[120%] lg:max-w-[800px] text-center mx-auto">Morem ipsum dolor sit amet, consectetur <span
							className="text-lightBlue">adipiscing elit.</span></h2>
						<Image
							src={horizontalBanner}
							className="w-full max-h-[24rem] object-cover rounded-[2.69rem] my-12"
						/>
					</section>
					<section className={`grid md:grid-cols-2 gap-4`}>
						<article className="px-12 text-sm">
							<p className="my-6">Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
								dictum est a, mattis
								tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
								elit
								sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
								litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
								ac
								scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
								vel
								bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
							
							<p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
								tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
								elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu
								ad
								litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
								ac
								scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
								vel
								bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
							</p>
						</article>
						<article className="px-12 text-sm">
							<p className="my-6">
								Corem ipsum dolor sit amet, consectetur adipiscing elit.
								
								Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
								risus
								sem sollicitudin lacus.
							</p>
								<p>
									Corem ipsum dolor sit amet, consectetur adipiscing ept.
								</p>
								<p>
									
									Etiam eu turpis molestie, dictum est a, mattis tellus.
								</p>
								<p>
									
									Sed dignissim, metus nec fringilla accumsan, risus sem solpcitudin lacus, ut interdum tellus ept
									sed
									risus. Maecenas eget condimentum vept, sit amet feugiat lectus.
								</p>
								<p>
									
									Class aptent taciti sociosqu ad ptora torquent per conubia nostra, per inceptos himenaeos.
								</p>
							
							<p>
								Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
								Suspendisse
								ac rhoncus nisl, eu tempor urna.
							</p>
							<section className={`grid sm:grid-cols-2 gap-4 my-16`}>
								<CustomButton
									className="btn_secondary xl:min-w-[14rem] border-lighBlue bg-lightBlue hover:bg-black text-white">
									<Link href="#" className="text-white hover:text-lightBlue">
										Talk to an Expert
									</Link>
								</CustomButton>
								<CustomButton
									className="btn_secondary xl:min-w-[14rem] border-black bg-transparent hover:bg-black hover:text-lightBlue">
									<Link href="#" className="text-black hover:text-lightBlue">
										Explore all Listy packages
									</Link>
								</CustomButton>
							</section>
						</article>
					</section>
				</div>
			</Container>
		</section>
	)
}

export default InternalBannerText