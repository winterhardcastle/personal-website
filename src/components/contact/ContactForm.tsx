import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

// interface Form {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string
//     msg: string;
// }

const ContactForm = () => {
    const [form, setForm] = useState({firstName:"",lastName:"", email:"",phone:"",msg:"",})
        
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
            }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }

    return (
        <div id="contact" className="flex flex-col items-center">
            <h1 className="text-5xl p-24">Contact Me!</h1>
            <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
                <div className="flex gap-4 justify-between">
                    <input 
                    name="firstName"
                    type="text" placeholder="First Name" 
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-1/2 bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input 
                    name="lastName"
                    type="text" placeholder="Last Name" 
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-1/2 bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <input className="col-span-2 w-fullshadow bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="text" placeholder="Email" 
                value={form.email}
                onChange={handleChange}
                />
                <input className="col-span-2 w-fullshadow bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone"
                type="text" placeholder="Phone Number" 
                value={form.phone}
                onChange={handleChange}
                />
                <textarea rows={6} className="col-span-2 row-span-auto w-fullshadow bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Message"
                value={form.msg}
                onChange={handleChange}
                /> 
                <a className="p-8 pb-24">
                    <Button onClick={handleSubmit} color="inherit" sx={{fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<SendIcon />}>Send Message</Button>
                </a>
            </form>
        </div>
    )
}

export default ContactForm