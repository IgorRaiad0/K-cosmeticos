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
                        <p>Rua Exemplo de Cosméticos, 123 - Centro</p>
                        <p>São Paulo - SP, 01234-567</p>
                    </div>

                    <div className="info-group">
                        <h3><Clock className="info-icon" size={20} /> Horário de Funcionamento</h3>
                        <p><strong>Segunda a Sexta:</strong> 09:00 às 19:00</p>
                        <p><strong>Sábado:</strong> 09:00 às 14:00</p>
                        <p><strong>Domingo:</strong> Fechado</p>
                    </div>

                    <div className="info-group">
                        <h3><Phone className="info-icon" size={20} /> Contato</h3>
                        <p>(11) 99999-9999</p>
                        <p><Mail className="info-icon-small" size={14} /> contato@kcosmeticos.com.br</p>
                    </div>
                </div>

                <div className="location-map">
                    <div className="map-placeholder">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870672323!2d-46.65451768502224!3d-23.56134968468203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da5aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625585000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
