import style from './ContactPage.module.css';

function ContactPage() {
    return ( 
        <div className={style.main}>
            <h1 className={style.title}>Contact us</h1>
            <p className={style.text}>Thanks for reaching out to Bookshop. In order to ensure you receive a quick reply, please fill out our Contact Us form.</p>
            <p className={style.text}>For partnerships, promotional opportunities, and advertising inquiries, please email us at:
example@book.org</p>
            
            <p className={style.text}>Interested in joining our team? Email us at jobs@bookshop.org</p>
          </div>
     );
}

export default ContactPage;