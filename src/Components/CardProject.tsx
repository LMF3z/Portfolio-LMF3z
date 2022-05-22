interface PropsItemCardGrid {
    image: string
    title: string
    description: string
    link: string
}

const CardProject = ({ image, title, description, link }: PropsItemCardGrid) => {
    return (
        <section className="w-full h-90 lg:h-80vh flex justify-center items-center">
            <div className="card">
                <div className="card2 rounded-lg p-5 flex flex-col justify-between items-center space-y-10 lg:space-y-0">
                    <img src={image} alt="naruto-memoty-game-icon" className="rounded-lg" />
                    <label className="text-lg sm:text-2xl lg:text-3xl text-violet">
                        <a href={link} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                    </label>
                    <p className="text-base sm:text-lg lg:text-2xl">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default CardProject