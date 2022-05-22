interface Props {
    images: string
    title: string
    description: string
}

const Sections = ({ images, title, description }: Props) => {
    return (
        <article className="w-full min-h-50vh h-50vh p-10 text-white flex flex-col justify-center items-center space-y-5 text-justify">
            <img src={images} alt="profile-icon" className="w-28 h-28" />
            <h1 className="text-blue text-6xl" >{title}</h1>
            <p className="text-2xl text-justify">{description}</p>
        </article>
    )
}

export default Sections