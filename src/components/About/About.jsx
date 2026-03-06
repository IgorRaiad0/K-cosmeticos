import React from 'react';
import './About.css';
import sobreImg from '../../assets/sobre.jpeg';

const About = () => {
    return (
        <section className="about-section" id="sobre">
            <div className="about-container">
                <div className="about-content">
                    <span className="about-tag">Nossa História</span>
                    <h2 className="about-title">Beleza com Propósito</h2>
                    <p className="about-description">
                        Fundada com a missão de democratizar o acesso a cosméticos de alta performance,
                        a K-Cosméticos nasceu da paixão por realçar a beleza única de cada pessoa.
                        Desde o nosso primeiro dia, focamos em curar os melhores produtos, unindo
                        tecnologia avançada e ingredientes naturais.
                    </p>
                    <div className="about-goals">
                        <div className="goal-item">
                            <h3>Nossa Meta</h3>
                            <p>Ser a principal referência em cuidados pessoais, oferecendo uma experiência de compra personalizada e luxuosa.</p>
                        </div>
                        <div className="goal-item">
                            <h3>Objetivos</h3>
                            <p>Expandir nossa linha profissional para salões e continuar inovando na seleção de produtos sustentáveis e eficazes.</p>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <div className="image-wrapper">
                        <img src={sobreImg} alt="K-Cosméticos História" className="about-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
