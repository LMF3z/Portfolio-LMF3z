import images from '../assets/images'
import CardProject from './CardProject'

const Projects = () => {
    return (
        <section className="w-full min-h-screen text-white flex flex-col justify-center items-center space-y-10 text-justify">

            <img src={images.clipboardIcon} alt="profile-icon" className="w-16 lg:w-20 h-16 lg:h-20" />
            <h1 className="text-violet">Projects</h1>

            <div className="w-full rounded-lg grid place-items-center gap-y-5 lg:gap-5 grid-cols-1 lg:grid-cols-3 text-center text-base lg:text-lg">

                <CardProject imageSource={images.expenditure_recording} title="Expenditure recording app" description='App to keep a list of expenses. It is initialized with an initial balance, as expenses are added they are subtracted from that balance and the percentage spent is shown in the graph. You can delete, edit and filter by category each expense.' link="https://recording-expediture.netlify.app/" />

                <CardProject imageSource={images.naruto_memory_game} title="Naruto memory app" description='Challenge placed in the community. It consists of solving a memory game, with the desired theme, in a set time.' link="https://amazing-naruto-memory-game.netlify.app/" />

                <CardProject imageSource={images.weather_search} title="Weather search app" description='Consumption of a Rest API that returns weather data according to country and city selected.' link='https://weather-search-cities-app.netlify.app/' />

                <CardProject imageSource={images.find_lyrics} title="Search songs lyrics" description='Search for song lyrics by artist and song name. A Rest API is consumed.' link="https://find-lyrics-app.netlify.app/" />

                <CardProject imageSource={images.favoritesAlbumes} title="Save Favorites Albums" description="App to save and delete favorite albums, consuming Spotify's Rest API. Login, verification with Spotify, refresh token and logout.
                React with TypeScript, react-router-dom, React-icons and Tailwind.css were used." link="https://drive.google.com/file/d/1HZ7gLIQbnORbLGHTktrAWYHA7K5UQk8k/view?usp=sharing" />

            </div>
        </section>
    )
}

export default Projects