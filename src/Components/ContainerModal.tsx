import { ReactNode, useRef } from "react"
import CloseIcon from "../assets/icons/CloseIcon"

interface Props {
  children?: ReactNode
  idModal?: string
}

const ContainerModal = ({ children, idModal = "modal" }: Props) => {

  const modalRef = useRef<HTMLDivElement | null>(null)

  const closeModal = () => {
    modalRef.current?.classList.add("animate-fadeOut")
    modalRef.current?.addEventListener("animationend", e => {
      document?.querySelector(`#${idModal}`)?.remove();
    })
  }

  return (
    <div ref={modalRef} className="w-full h-screen fixed top-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
      <CloseIcon classes="w-10 h-10 cursor-pointer absolute top-5 right-5" color="#fff" handleClick={closeModal} />
      <div className="w-full lg:w-4/5 h-[30vh] md:h-[50vh] lg:h-[75vh] rounded-lg animate-fadeIn border border-white">
        {children}
      </div>
    </div>
  )
}

export default ContainerModal