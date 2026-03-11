import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MessageCircle, Send, User, Mail, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            
            setMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formRef.current.reset();
        } catch (error) {
            console.error('Erro ao enviar:', error);
            setMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section" id="contato">
            <div className="contact-container">
                <div className="contact-whatsapp">
                    <span className="contact-tag">Fale Conosco</span>
                    <h2 className="contact-title">Atendimento Imediato via WhatsApp</h2>
                    <p className="contact-text">
                        Prefere uma conversa rápida? Nossa equipe está pronta para te atender,
                        tirar dúvidas sobre produtos ou auxiliar em sua compra agora mesmo.
                    </p>
                    <a
                        href="https://wa.me/5598982954970"
                        className="btn-whatsapp-large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle size={24} />
                        Iniciar Conversa no WhatsApp
                    </a>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label><User size={16} /> Nome Completo</label>
                            <input type="text" name="user_name" placeholder="Seu nome" required />
                        </div>
                        <div className="form-group">
                            <label><Mail size={16} /> E-mail</label>
                            <input type="email" name="user_email" placeholder="seu@email.com" required />
                        </div>
                        <div className="form-group">
                            <label><MessageSquare size={16} /> Mensagem</label>
                            <textarea name="message" placeholder="Como podemos te ajudar?" rows="5" required></textarea>
                        </div>
                        {message && (
                            <div className={`form-message ${message.includes('sucesso') ? 'success' : 'error'}`}>
                                {message}
                            </div>
                        )}
                        <button type="submit" className="btn-send-form" disabled={loading}>
                            <Send size={18} />
                            {loading ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
