import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// interface Form {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string
//     msg: string;
// }

const ContactForm = () => {
    const [form, setForm] = useState({firstName:"",lastName:"", email:"",phone:"",msg:"",})
        
    emailjs.init(import.meta.env.EMAILJS_PUBLIC_KEY || "")

    const handleChange = (evt:any) => {
        setForm({ ...form, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt:any) => {
        evt.preventDefault();

        emailjs.send("service_jtjho7h","template_78utfvg",{
            from_name: form.firstName + " " + form.lastName,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            msg: form.msg,
            }, import.meta.env.EMAILJS_PUBLIC_KEY);
    }

    useEffect(() => {
        console.log(form)
    })

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl p-24">Contact Me!</h1>
            <form onSubmit={handleSubmit} className="w-1/2 grid gap-4 grid-rows-5 grid-cols-2"> 
                <input 
                name="firstName"
                type="text" placeholder="First Name" 
                value={form.firstName}
                onChange={handleChange}
                />
                <input 
                name="lastName"
                type="text" placeholder="Last Name" 
                value={form.lastName}
                onChange={handleChange}
                />
                <input className="col-span-2"
                name="email"
                type="text" placeholder="Email" 
                value={form.email}
                onChange={handleChange}
                />
                <input className="col-span-2"
                name="phone"
                type="text" placeholder="Phone Number" 
                value={form.phone}
                onChange={handleChange}
                />
                <input className="col-span-2 row-span-2"
                name="msg"
                type="text" placeholder="Message" 
                value={form.msg}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default ContactForm