import GithubIcon from "../assets/icons/GithubIcon"
import LinkedinIcon from "../assets/icons/LinkedinIcon"
import images from "../assets/images"
import LinksComponent from "./LinksComponent"

const Header = () => {
    return (
        <header className="w-full min-h-screen bg-bg_header bg-cover bg-center bg-no-repeat relative">
            <article className="w-full h-full bg-bg_header_shadow flex">
                <section className="w-full lg:w-1/5 h-screen text-white flex flex-col justify-evenly lg:py-10 items-center space-y-5">
                    <div className="text-center grid place-items-center relative">
                        <img src={images.cover_photo} alt="profile" className="w-32 h-42 clip_path_image mx-auto" />
                        <span className="text-3xl absolute bottom-1">LMF3z</span>
                    </div>

                    <div className="lg:hidden text-center grid place-content-center gap-5">
                        <p className="text-4xl">Hi, I´am</p>
                        <p className="text-4xl">Lennon Sánchez</p>
                        <h1 className="text-5xl">Web developer</h1>
                    </div>

                    <div className="w-full pl-10">

                        <LinksComponent classes="flex justify-start items-center space-x-5 mb-5" icon={<GithubIcon classes="w-11 h-11" color="#ccc" />} link="https://github.com/LMF3z" label="Github link" />

                        <LinksComponent classes="flex justify-start items-center space-x-5 mb-5" icon={<LinkedinIcon classes="w-11 h-11" color="#0076b6" />} link="https://www.linkedin.com/in/lennon-s%C3%A1nchez-freites-a677431bb/" label="Linkedin link" />

                        <LinksComponent classes="flex justify-start items-center space-x-5" icon={<img src={images.curriculum} alt="curriculum-img" className="w-5 h-5" />} link="https://drive.google.com/file/d/1IGlU50RUo2wa-4Jb3MLIC2c5J8-tuWWW/view?usp=sharing" label="resume" />

                    </div>

                </section>
                <section className="hidden lg:w-4/5 h-screen text-white text-center lg:grid lg:place-content-center lg:gap-5">
                    <p className="text-4xl lg:text-5xl">Hi, I´am</p>
                    <p className="text-4xl lg:text-5xl">Lennon Sánchez</p>
                    <h1 className="text-5xl lg:text-7xl">Web developer</h1>
                </section>
            </article>
        </header>

    )
}

export default Header