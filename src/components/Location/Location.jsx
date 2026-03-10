import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import './Location.css';

const Location = () => {
    return (
        <section className="location-section" id="localizacao">
            <div className="location-container">
                <div className="location-info">
                    <span className="location-tag">Onde Estamos</span>
                    <h2 className="location-title">Nossa Localização</h2>

                    <div className="info-group">
                        <h3><MapPin className="info-icon" size={20} /> Endereço</h3>
                        <p>Av. Dr. Afonso Bacelar</p>
                        <p>Coelho Neto - MA, 65620-000</p>
                    </div>

                    <div className="info-group">
                        <h3><Clock className="info-icon" size={20} /> Horário de Funcionamento</h3>
                        <p><strong>Segunda a Sexta:</strong> 08:00 às 18:00</p>
                        <p><strong>Sábado:</strong> 08:00 às 11:00</p>
                        <p><strong>Domingo:</strong> Fechado</p>
                    </div>

                    <div className="info-group">
                        <h3><Phone className="info-icon" size={20} /> Contato</h3>
                        <p>(98) 98295-4970</p>
                        <p><Mail className="info-icon-small" size={14} /> kcosmeticos390@gmail.com</p>
                    </div>
                </div>

                <div className="location-map">
                    <div className="map-placeholder">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.2!2d-43.0!3d-4.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTUnMDAuMCJTIDQzwrAwMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1625585000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps - K-Cosméticos"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
