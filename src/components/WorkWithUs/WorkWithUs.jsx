import React from 'react';
import './WorkWithUs.css';
import parceriaImg from '../../assets/parceria.png';

const WorkWithUs = () => {
    return (
        <section className="work-section" id="trabalhe-conosco">
            <div className="work-container">
                <div className="work-image-side">
                    <img src={parceriaImg} alt="Parceria Profissional" className="work-img" />
                </div>

                <div className="work-content-side">
                    <span className="work-tag">Parceria de Sucesso</span>
                    <h2 className="work-title">Venha trabalhar conosco</h2>
                    <p className="work-text">
                        Temos uma linha de produtos <strong>exclusiva</strong> para o fornecimento em salões de beleza.
                        Desenvolvida para profissionais que não abrem mão da qualidade e performance de alto nível,
                        nossa linha profissional entrega resultados surpreendentes que fidelizam clientes e elevam o
                        padrão do seu serviço.
                    </p>

                    <div className="work-actions">
                        <a href="https://wa.me/5598982954970" className="btn-work whatsapp" target="_blank" rel="noopener noreferrer">
                            Falar pelo WhatsApp
                        </a>
                        <a href="mailto:contato@kcosmeticos.com" className="btn-work email">
                            Enviar um E-mail
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;
