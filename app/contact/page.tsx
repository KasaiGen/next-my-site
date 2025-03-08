"use client";

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
    });
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        message: "",
    });
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // フォームのリロードをなし
        setLoading(true);
        setSuccess(false);
        setError("");
        console.log(formData);
        try{
            const res = await fetch("/api/contact",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            if(res.ok){
                setSuccess(true);
                console.log("Success",success);
                setFormData({name: "",mail: "",message: ""});
            }else{
                throw new Error("送信に失敗しました");
            }
        }catch(err){
            setError("エラーが発生しました。もう一度試してください。");
        }finally{
            setLoading(false);
        }
    }
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Contact Page</h1>
                    {success && <p style={{color: "green"}}>送信されました！</p>}
                    {error && <p style={{color: "red"}}>{error}</p>}
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={onChange} required />
                        <label htmlFor="email">Mail</label>
                        <input type="email" name="mail" id="email" value={formData.mail} onChange={onChange} required />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="10" id="textarea" value={formData.message} onChange={onChange} required />
                        <button type="submit" disabled={loading}>{loading ? "送信中..." : "Submit"}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;