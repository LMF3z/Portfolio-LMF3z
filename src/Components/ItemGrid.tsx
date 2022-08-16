interface Props {
    title: string
    icon: string
}


const ItemGrid = ({ title, icon }: Props) => {
    return (
        <article className="w-full h-full flex flex-col justify-center items-center space-y-5 rounded-lg p-3 border border-[#3178c6]">
            <h2 className="text-sm md:text-2xl">{title}</h2>
            <img src={icon} alt="icon-skills" className="w-12 h-12 lg:w-20 lg:h-20" />
        </article>
    )
}

export default ItemGrid