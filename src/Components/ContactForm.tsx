import { useRef } from 'react'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import validations from '../validations/index'
import SendIcon from "../assets/icons/SendIcon";

type FormData = {
    name: string
    email: string
    message: string
}

const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validations)
    });

    const handleSend = (data: FormData) => {
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("message", data.message)

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData.toString()),
        }).then(() => {
            toast.success("Your message was send successfully");
        }).catch(error => {
            console.log("error al enviar correo", error);
            toast.error("Error to send your message, sorry. Try later");
        })
    };

    return (
        <section className="w-full h-screen p-10 text-white flex flex-col justify-center items-center space-y-10 text-justify">
            <form ref={formRef} onSubmit={handleSubmit(handleSend)} className="w-full lg:w-3/5 min-h-4/5 max-h-screen rounded-lg grid grid-cols-1 grid-rows-6 gap-5 text-center p-5 lg:p-10 text-base lg:text-lg border border-[#3178c6]">
                <h1 className="text-violet text-4xl lg:text-6xl" >Contact me</h1>
                <input type="hidden" name="form-name" value="contact" />
                <div className="w-full h-full">
                    <input className="input w-full" type="text" placeholder="Name and last name" {...register("name")} />
                    {errors?.name?.message && <span className="text-red-600">{errors.name.message}</span>}
                </div>

                <div className="w-full h-full">
                    <input className="input w-full" type="email" placeholder="Contact Email" {...register("email")} />
                    {errors?.email?.message && <span className="text-red-600">{errors.email.message}</span>}
                </div>

                <div className="w-full h-full row-span-2">
                    <textarea maxLength={400} className="input w-full h-32 resize-none" placeholder="Message" {...register("message")} ></textarea>
                    {errors?.message?.message && <span className="text-red-600">{errors.message.message}</span>}
                </div>
                {/* <button className="button" type="submit">Send</button> */}
                <button className="button">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <SendIcon color="#fff" />
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </form >
        </section >
    )
}

export default ContactForm