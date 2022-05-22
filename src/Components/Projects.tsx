import images from '../assets/images'
import CardProject from './CardProject'

const Projects = () => {
    return (
        <section className="w-full min-h-screen p-5 lg:p-10 text-white flex flex-col justify-center items-center space-y-10 text-justify">
            <div className="w-full rounded-lg grid place-content-center grid-cols-1 gap-5 lg:grid-cols-3 text-center p-5 text-base lg:text-lg">

                <CardProject image={images.expenditure_recording} title="Expenditure recording app" description='App to keep a list of expenses. It is initialized with an initial balance, as expenses are added they are subtracted from that balance and the percentage spent is shown in the graph. You can delete, edit and filter by category each expense.' link="https://recording-expediture.netlify.app/" />

                <CardProject image={images.naruto_memory_game} title="Naruto memory app" description='Challenge placed in the community. It consists of solving a memory game, with the desired theme, in a set time.' link="https://amazing-naruto-memory-game.netlify.app/" />

                <CardProject image={images.weather_search} title="Weather search app" description='Consumption of a Rest API that returns weather data according to country and city selected.' link='https://weather-search-cities-app.netlify.app/' />

                <CardProject image={images.find_lyrics} title="Search songs lyrics" description='Search for song lyrics by artist and song name. A Rest API is consumed' link="https://find-lyrics-app.netlify.app/" />

            </div>
        </section>
    )
}

export default Projects