import images from "../assets/images"
import ItemGrid from "./ItemGrid"

const GridSkills = () => {
    return (
        <section className="w-full min-h-screen text-white flex flex-col justify-center items-center space-y-10 text-justify">
            <img src={images.skills} alt="profile-icon" className="w-16 lg:w-20 h-16 lg:h-20" />
            <h1 className="text-violet">Skills</h1>
            <div className="w-full grid grid-cols-3 grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-2">
                <ItemGrid title="HTML5" icon={images.html5} />
                <ItemGrid title="CSS3" icon={images.css} />
                <ItemGrid title="Tailwind.css" icon={images.tailwindcss} />
                <ItemGrid title="Bootstrap" icon={images.bootstrap} />
                <ItemGrid title="JavaScript" icon={images.JavaScript} />
                <ItemGrid title="typescript" icon={images.typescript} />
                <ItemGrid title="React" icon={images.react} />
                <ItemGrid title="Express" icon={images.expressjs} />
                <ItemGrid title="MySql" icon={images.mysql} />
                <ItemGrid title="MongoDB" icon={images.mongodb} />
                <ItemGrid title="git" icon={images.git} />
            </div>
        </section>
    )
}

export default GridSkills