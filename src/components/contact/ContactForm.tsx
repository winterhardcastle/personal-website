import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser';

interface Form {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string
    msg?: string;
}

const ContactForm = () => {
    const [form, setForm] = useState<Form>()
        
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY)

    const handleSubmit = (evt:any) => {
        evt.preventDefault();

        emailjs.send("service_jtjho7h","template_78utfvg",{
            from_name: form.firstName + " " + form.lastName,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            msg: form.msg,
            }, process.env.EMAILJS_PUBLIC_KEY);
    }
    useEffect(() => {
        console.log(form)
    })

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl p-24">Contact Me!</h1>
            <form onSubmit={handleSubmit} className="w-1/2 grid gap-4 grid-rows-5 grid-cols-2"> 
                <input 
                name="firstname"
                type="text" placeholder="First Name" 
                value={form?.firstName}
                onChange={(e) => setForm({firstName: e.target.value})}
                />
                <input 
                name="lastname"
                type="text" placeholder="Last Name" 
                value={form?.lastName}
                onChange={(e) => setForm({lastName: e.target.value})}
                />
                <input className="col-span-2"
                name="email"
                type="text" placeholder="Email" 
                value={form?.email}
                onChange={(e) => setForm({email: e.target.value})}
                />
                <input className="col-span-2"
                name="phone"
                type="text" placeholder="Phone Number" 
                value={form?.phone}
                onChange={(e) => setForm({phone: e.target.value})}
                />
                <input className="col-span-2 row-span-2"
                name="message"
                type="text" placeholder="Message" 
                value={form?.msg}
                onChange={(e) => setForm({msg: e.target.value})}
                />
            </form>
        </div>
    )
}

export default ContactForm