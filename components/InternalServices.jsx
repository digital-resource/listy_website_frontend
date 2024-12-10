import Container from './Container'
import CardService from './CardService'

const InternalServices = ({cards} ) => {
    return (
        <section className="bg-lightBlue w-[100vw] py-24 my-12">
            <Container customStyle="flex flex-col md:flex-row responsive_container justify-between gap-10">
                {cards.map((card, index) => (
                    <CardService
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        content={card.content}
                        link={card.link}
                        className="gap-10"
                    />
                ))}
            </Container>
        </section>
    )
}

export default InternalServices