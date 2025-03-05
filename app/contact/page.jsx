const Contact = () => {
    return (
        <>
        <div>
            <div>
                <h1>Contact page.</h1>
                <p>Mail: gen.gen.ta0218@gmail.com</p>
                <form >
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Mail</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="10" id="textarea" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact;