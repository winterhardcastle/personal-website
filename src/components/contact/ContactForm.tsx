import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from "@mui/lab/LoadingButton";
import { hackerText } from "../../utils/functions";

// interface Form {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string
//     msg: string;
// }

const ContactForm = () => {
    const [form, setForm] = useState({firstName:"",lastName:"", email:"",phone:"",msg:"",})
    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState()

    const handleChange = (evt:any) => {
        setForm({ ...form, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async(evt:any) => {
        evt.preventDefault();

        setIsLoading(true);

        console.log(process.env.VITE_EMAILJS_PUBLIC_KEY)
        await emailjs.send("service_jtjho7h","template_78utfvg",{
            from_name: form.firstName + " " + form.lastName,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            msg: form.msg,
            }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        
        setIsLoading(false);    
        setForm({firstName:"",lastName:"", email:"",phone:"",msg:"",})
    }

    return (
        <div id="contact" className="px-4 flex flex-col items-center">
            <h1 onMouseEnter={hackerText} data-value="CONTACT ME!" className="font-bold md:text-5xl text-3xl pb-4 md:p-24">Contact Me!</h1>
            <form onSubmit={handleSubmit} className="md:px-8 md:w-1/2 flex flex-col gap-4">
                <div className="flex gap-4 justify-between">
                    <input 
                    name="firstName"
                    type="text" placeholder="First Name *" 
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-1/2 bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                    <input 
                    name="lastName"
                    type="text" placeholder="Last Name *" 
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-1/2 bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                </div>
                <input className="col-span-2 w-fullshadow bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="text" placeholder="Email *" 
                value={form.email}
                onChange={handleChange}
                required
                />
                <input className="col-span-2 w-fullshadow bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone"
                type="text" placeholder="Phone Number" 
                value={form.phone}
                onChange={handleChange}
                />
                <textarea rows={6} className="col-span-2 row-span-auto w-fullshadow bg-white font-bold appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="msg"
                placeholder="Message"
                value={form.msg}
                onChange={handleChange}
                /> 
                <a className="pb-24">
                <LoadingButton
                type="submit"
                variant="outlined"
                color="inherit"
                sx={{fontFamily: "monospace", width: "175px",fontWeight:"bold", cursor:"crosshair", "&.Mui-disabled": {
                    color: "#c0c0c0"
                  }}}
                loading={isLoading}
                disabled={isDisabled}
                endIcon={<SendIcon />}
                loadingPosition="end"
                >   
                Send Message
                </LoadingButton>
                </a>
            </form>
        </div>
    )
}

export default ContactForm