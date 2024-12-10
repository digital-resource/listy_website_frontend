import Navbar from '@/components/Navbar'
import {Divider} from '@nextui-org/react'
import Faqs from '@/components/Faqs'
import Footer from '@/components/Footer'
import RichText from "@/components/RichText";
import InternalText from "@/components/InternalText";
import InternalBanner from "@/components/InternalBanner";
import InternalServices from "@/components/InternalServices";
import InternalBannerText from "@/components/InternalBannerText";

import serviceIcon1 from "@/public/images/services/serviceIcon1.webp";
import serviceIcon2 from "@/public/images/services/serviceIcon2.webp";
import serviceIcon3 from "@/public/images/services/serviceIcon3.webp";


import richTextImage from "@/public/images/services/internal-image.webp"
import mainBannerImg from '@/public/images/internal_banner.webp';


export const metadata = {
	title: 'Home Valuation | Listy',
	description: 'Listy description',
}

const serviceCards = [
	{
		title: 'Service name 1',
		content: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
		link: '#',
		icon: serviceIcon1,
	},
	{
		title: 'Service 2',
		content: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
		link: '#',
		icon: serviceIcon2,
	},
	{
		title: 'Service 3',
		content: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
		link: '#',
		icon: serviceIcon3,
	},
]

const richText1 = {
	img: richTextImage,
	title: "Torem Ipsum Dolor sit Aime",
	text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem	ipsum dolor sit amet, consectetur adipiscing elit.",
	buttonLink: "#",
	direction: "imgTxt"
}
const richText2 = {
	img: richTextImage,
	title: "Torem Ipsum Dolor sit Aime",
	text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem	ipsum dolor sit amet, consectetur adipiscing elit.",
	direction: "txtImg"
}

const Home = () => {
	return (
		<>
			<section className="top-0 relative overflow-hidden py-[1.8rem] px-[4.5rem] w-full left-0 z-50 shadow-lg">
				<Navbar bgColor='bg-white' textColor='text-lightBlue' isHome={false}/>
			</section>
			<InternalBanner bannerImg={mainBannerImg} title="Home Valuation"/>
			<InternalText/>
			<InternalServices cards={serviceCards}/>
			<RichText props={richText1} />
			<Faqs/>
			<InternalBannerText />
			<RichText props={richText2} />
			<Footer/>
		</>
	)
}

export default Home
