import { useState } from "react"

interface Form {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string
    msg?: string;
}

const ContactForm = () => {
    const [form, setForm] = useState<Form>()
    
    return (
        <div>
            <h1 className="text-5xl p-8 ">Contact Me!</h1>
            <form className="grid gap-4 grid-rows-4 grid-cols-2"> 
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
                <input className="col-span-2"
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