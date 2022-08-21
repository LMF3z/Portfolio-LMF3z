interface PropsItemCardGrid {
    imageSource: string
    title: string
    description: string
    handleClick: () => void
}

const CardProjectWithoutRedirect = ({ imageSource, title, description, handleClick }: PropsItemCardGrid) => {
    return (
        <section className="w-full h-90 lg:h-80vh max-h-[90vh] flex justify-center items-center">
            <div className="card">
                <div className="card2 rounded-lg p-5 flex flex-col justify-start items-center space-y-10 lg:space-y-5">
                    <img src={imageSource} alt="project-icon" className="rounded-lg w-auto max-h-[50%]" />
                    <div className="h-full grid gap-y-5">
                        <label onClick={handleClick} className="text-violet text-2xl md:text-3xl cursor-pointer">
                            {title}
                        </label>
                        <p className="text-base lg:text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardProjectWithoutRedirect