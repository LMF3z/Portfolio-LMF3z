import { useRef } from 'react'
import invImages from '../assets/images/invTattoo'

const ModalViewImagesProducts = () => {

    const sliderRef = useRef<HTMLDivElement | null>(null)
    const sliderIndividuar = useRef<HTMLImageElement | null>(null)

    const handleTranslate = (type: boolean) => {

        const width = sliderIndividuar.current!.clientWidth

        if (type) {
            sliderRef.current!.style.transition = "5s ease all"
            sliderRef.current!.scrollLeft += width
        }

        if (!type) {
            sliderRef.current!.scrollLeft -= width
        }
    }

    return (
        <div className="w-full h-full relative flex justify-center items-center">

            <span className="w-10 h-16 absolute md:top-1/2 left-0 md:left-3 text-5xl md:text-6xl text-red-600 cursor-pointer"
                onClick={() => handleTranslate(false)}
            >
                &lt;
            </span>
            <span className="w-10 h-16 absolute md:top-1/2 right-0 md:right-3 text-5xl md:text-6xl text-red-600 cursor-pointer text-right"
                onClick={() => handleTranslate(true)}
            >
                &gt;
            </span>

            <div ref={sliderRef} className='w-[90%] h-[80%] mx-auto overflow-x-hidden flex scroll-smooth'>
                {invImages.map((imgName, index) => (
                    <img ref={sliderIndividuar} key={index} src={imgName} alt="img-logo" className='w-full h-full shrink-0 rounded-lg' />
                ))}
            </div>
        </div>
    )
}

export default ModalViewImagesProducts