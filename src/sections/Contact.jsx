import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, MapPinIcon, SendIcon } from '../components/Icons';
import TerminalWindow from '../components/TerminalWindow';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const SERVICE_ID = "service_f1s3cec";
    const TEMPLATE_ID = "template_68dxqfg";
    const PUBLIC_KEY = "e6_-vESlbnXiVc2Ky";

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setMessage("Message sent successfully!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setMessage("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setMessage(''), 5000);
            });
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold font-mono text-primary mb-8 text-center">get_in_touch<span className="animate-blink text-accent">_</span></h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold font-mono mb-6 text-primary">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-full"><MailIcon /></div>
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <a href={`mailto:${portfolioData.contact.email}`} className="text-foreground/80 hover:text-primary transition-colors">{portfolioData.contact.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-full"><PhoneIcon /></div>
                                    <div>
                                        <h4 className="font-bold">Phone</h4>
                                        <a href={`tel:${portfolioData.contact.phone.replace(/\D/g, '')}`} className="text-foreground/80 hover:text-primary transition-colors">{portfolioData.contact.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-full"><MapPinIcon /></div>
                                    <div>
                                        <h4 className="font-bold">Location</h4>
                                        <p className="text-foreground/80">Durham, NC, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold font-mono mb-6 text-primary">Connect With Me</h3>
                            <div className="flex items-center gap-4">
                                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"><LinkedinIcon /></a>
                                <a href={`https://www.${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"><GithubIcon /></a>
                            </div>
                        </div>
                    </div>

                    <TerminalWindow title="send_message.sh">
                        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-mono text-foreground/80 mb-1">_name:</label>
                                <input type="text" id="user_name" name="user_name" required className="w-full px-3 py-2 bg-foreground/5 border-2 border-primary/20 rounded-md focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-mono text-foreground/80 mb-1">_email:</label>
                                <input type="email" id="user_email" name="user_email" required className="w-full px-3 py-2 bg-foreground/5 border-2 border-primary/20 rounded-md focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-mono text-foreground/80 mb-1">_message:</label>
                                <textarea id="message" name="message" required rows="4" className="w-full px-3 py-2 bg-foreground/5 border-2 border-primary/20 rounded-md focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-2 border-2 border-accent text-accent font-mono rounded-md hover:bg-accent hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <SendIcon />
                            </button>
                            {message && <p className="text-sm text-accent font-mono mt-4 text-center">{message}</p>}
                        </form>
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};

export default Contact;