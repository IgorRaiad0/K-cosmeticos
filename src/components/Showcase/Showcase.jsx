import React, { useEffect, useRef } from 'react';
import './Showcase.css';
import cosmeticos from '../../assets/cosmeticos.jpeg';
import acessorios from '../../assets/assesorios.png';

const Showcase = () => {
    const row1ImgRef = useRef(null);
    const row1TextRef = useRef(null);
    const row2ImgRef = useRef(null);
    const row2TextRef = useRef(null);

    useEffect(() => {
        const loadAnimations = async () => {
            const { slideInLeft, slideInRight } = await import('../../utils/gsapAnimations');
            if (row1ImgRef.current) slideInLeft(row1ImgRef.current);
            if (row1TextRef.current) slideInRight(row1TextRef.current, 0.2);
            if (row2ImgRef.current) slideInRight(row2ImgRef.current);
            if (row2TextRef.current) slideInLeft(row2TextRef.current, 0.2);
        };
        loadAnimations();
    }, []);

    return (
        <section className="showcase-section">
            <div className="showcase-container">

                {/* Primeira Linha: Cosméticos */}
                <div className="showcase-row">
                    <div className="showcase-image-container" ref={row1ImgRef}>
                        <img src={cosmeticos} alt="Cosméticos Premium" className="showcase-img" loading="lazy" />
                    </div>
                    <div className="showcase-text-container" ref={row1TextRef}>
                        <span className="showcase-tag">Cuidados & Beleza</span>
                        <h2 className="showcase-title">A Ciência da Beleza</h2>
                        <p className="showcase-description">
                            Nossa seleção de cosméticos reúne o que há de mais moderno em tecnologia estética.
                            Trabalhamos com marcas que priorizam ingredientes naturais e resultados comprovados,
                            garantindo que sua pele receba o cuidado que merece. Descubra texturas luxuosas e
                            fragrâncias envolventes que transformam sua rotina diária em um momento de puro prazer.
                        </p>
                    </div>
                </div>

                {/* Segunda Linha: Variedades (Acessórios) */}
                <div className="showcase-row reverse">
                    <div className="showcase-image-container" ref={row2ImgRef}>
                        <img src={acessorios} alt="Acessórios e Variedades" className="showcase-img" loading="lazy" />
                    </div>
                    <div className="showcase-text-container" ref={row2TextRef}>
                        <span className="showcase-tag">Variedades & Estilo</span>
                        <h2 className="showcase-title">Acessórios Indispensáveis</h2>
                        <p className="showcase-description">
                            Além de cosméticos de alta performance, oferecemos uma linha completa de acessórios
                            essenciais. Explore nossa variedade de piranhas, escovas de cabelo ergonômicas e
                            itens que facilitam seu dia a dia. Combinamos funcionalidade e estilo para que você
                            esteja sempre pronta, realçando seu visual com praticidade e elegância.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showcase;
