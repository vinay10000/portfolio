import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section id='contact' classemail={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" id="name" name='name' placeholder='Name' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" id="email" email='email' placeholder='Email' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea id="message" message='message' placeholder='Message' required></textarea>
            </div>
            <input type="submit" className='hover btn' value="Submit" />
        </form>
    </section>
  )
}

export default Contact