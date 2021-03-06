import images from "../assets/images"

const AboutMe = () => {
    return (
        <section className="w-full h-screen p-10 text-white flex flex-col justify-center items-center space-y-10 text-justify">
            <img src={images.profile} alt="profile-icon" className="w-28 h-28" />
            <h1 className="text-violet text-4xl lg:text-6xl" >How define myself</h1>
            <p className="text-2xl text-justify">I am an enthusiastic self - taught person, eager to keep learning and growing day by day.I am eager to gain more experience in the field that I am passionate about, such as web development.I have always said that: if I don't have the answer to a question, I will investigate and search until I get it.</p>
        </section>
    )
}

export default AboutMe