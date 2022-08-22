interface PropsItemCardGrid {
    imageSource: string
    title: string
    description: string
    link: string
}

const CardProject = ({ imageSource, title, description, link }: PropsItemCardGrid) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="w-full h-[70vh] flex justify-center items-center">
                <div className="card">
                    <div className="card2 rounded-lg p-5 flex flex-col justify-start items-center space-y-10 lg:space-y-5">
                        <img src={imageSource} alt="project-icon" className="rounded-lg w-auto max-h-[50%]" />
                        <div className="h-full grid gap-y-5">
                            <label className="text-violet text-2xl md:text-3xl">
                                {title}
                            </label>
                            <p className="text-base lg:text-lg">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CardProject