import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContactForm from '../components/contactForm';

const ContactPage = () => {
    
    // Ajpout de la classe "contact-page" au body pour le style
    React.useEffect(() => {
        document.body.classList.add("contact-page");
        return () => {
            document.body.classList.remove("contact-page"); // Nettoyage de la classe
        };
    })
    return (
        <Layout>
            <Seo title="Contact" />
            <ContactForm />
        </Layout>
    )
}

export default ContactPage