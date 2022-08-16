import images from '../assets/images'
import CardProject from './CardProject'

const Projects = () => {
    return (
        <section className="w-full min-h-screen text-white flex flex-col justify-center items-center space-y-10 text-justify">

            <img src={images.clipboardIcon} alt="profile-icon" className="w-16 lg:w-20 h-16 lg:h-20" />
            <h1 className="text-violet">Projects</h1>

            <div className="w-full rounded-lg grid place-content-center gap-y-5 lg:gap-5 grid-cols-1 lg:grid-cols-3 text-center text-base lg:text-lg">

                <CardProject imageSource={images.expenditure_recording} title="Expenditure recording app" description='App to keep a list of expenses. It is initialized with an initial balance, as expenses are added they are subtracted from that balance and the percentage spent is shown in the graph. You can delete, edit and filter by category each expense.' link="https://recording-expediture.netlify.app/" />

                <CardProject imageSource={images.naruto_memory_game} title="Naruto memory app" description='Challenge placed in the community. It consists of solving a memory game, with the desired theme, in a set time.' link="https://amazing-naruto-memory-game.netlify.app/" />

                <CardProject imageSource={images.weather_search} title="Weather search app" description='Consumption of a Rest API that returns weather data according to country and city selected.' link='https://weather-search-cities-app.netlify.app/' />

                <CardProject imageSource={images.find_lyrics} title="Search songs lyrics" description='Search for song lyrics by artist and song name. A Rest API is consumed.' link="https://find-lyrics-app.netlify.app/" />
            </div>

            <img src={images.pritingSoftIcon} alt="profile-icon" className="w-16 lg:w-20 h-16 lg:h-20" />
            <h1 className="text-violet">Products</h1>

            <div className="w-full rounded-lg grid place-content-center gap-y-5 lg:gap-5 grid-cols-1 lg:grid-cols-3 text-center text-base lg:text-lg">

                <CardProject imageSource={images.feeseAppIcon} title="Feese App" description='PWA for keeping records of production and payment of hair removal employees.' link="https://drive.google.com/file/d/1YRZDUmrLc9gtrEPJ_H5i4-Fl7Y1EpZo5/view?usp=sharing" />
            </div>

        </section>
    )
}

export default Projects