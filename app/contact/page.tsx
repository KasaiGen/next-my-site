'use client';

import { useState,useEffect, FC } from "react";
import { metadata } from "./components/metadata";

interface FormProps {
    name: string;
    mail: string;
    message: string;
}

const Contact: FC<FormProps> = () => {
    useEffect(()=>{
        document.title = metadata.title;
    })
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        message: "",
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // フォームのリロードをなし
        alert("送信しました");
        console.log(formData);
    }
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Contact Page</h1>
                    <p>Mail: gen.gen.ta0218@gmail.com</p>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={onChange} required />
                        <label htmlFor="email">Mail</label>
                        <input type="email" name="mail" id="email" value={formData.mail} onChange={onChange} required />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="10" id="textarea" value={formData.message} onChange={onChange} required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;