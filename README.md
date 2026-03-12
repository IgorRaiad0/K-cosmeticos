# 💄 K-Cosméticos

<div align="center">
  <img src="./src/assets/logo.png" alt="K-Cosméticos Logo" width="200"/>
  
  ### Plataforma Premium de Cosméticos e Acessórios
  
  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
</div>

---

##  Sobre o Projeto

**K-Cosméticos** é uma landing page premium desenvolvida para uma loja de cosméticos e acessórios localizada em Coelho Neto - MA. O projeto combina design luxuoso, animações suaves e alta performance para proporcionar uma experiência de usuário excepcional.

###  Destaques

- 🎨 Design premium com glassmorphism e gradientes dourados
- ⚡ Performance otimizada com lazy loading e code splitting
- 📱 100% responsivo para todos os dispositivos
- 🛒 Carrinho de compras integrado com WhatsApp
- 📧 Formulário de contato funcional com EmailJS
- 🗺️ Localização integrada com Google Maps
- 🎬 Animações profissionais com GSAP
- 📊 Gestão dinâmica de produtos via Google Sheets

---

##  Tecnologias

- **React 19.2.0** - Interface moderna e reativa
- **Vite 7.3.1** - Build tool ultra-rápido
- **GSAP 3.x** - Animações profissionais
- **React Router DOM** - Navegação SPA
- **EmailJS** - Envio de emails
- **Lucide React** - Ícones modernos
- **Google Sheets API** - Gestão de produtos
- **Context API** - Gerenciamento de estado

---

##  Funcionalidades

### E-commerce
- Catálogo de produtos dinâmico
- Carrinho de compras com persistência
- Finalização via WhatsApp
- Botão flutuante inteligente

### Experiência do Usuário
- Preloader animado
- Navegação suave entre seções
- Animações GSAP com ScrollTrigger
- Menu mobile responsivo
- Lazy loading de imagens

### Comunicação
- Formulário de contato funcional
- Integração com EmailJS
- Link direto para WhatsApp

### Localização
- Google Maps integrado
- Horários de funcionamento
- Informações de contato



**Documentação completa:** Consulte `DOCUMENTACAO.txt` para detalhes técnicos.

---

##  Estrutura do Projeto

```
k-cosmeticos/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/             # Imagens e vídeos
│   ├── components/         # Componentes React
│   ├── context/            # Context API
│   ├── hooks/              # Custom Hooks
│   ├── utils/              # Utilitários (GSAP)
│   └── main.jsx            # Entry point
├── .env                     # Variáveis de ambiente
├── DOCUMENTACAO.txt        # Documentação técnica
├── OTIMIZACOES.md          # Otimizações realizadas
└── package.json
```

---

## ⚡ Performance

- **Bundle Principal**: 267 kB (88 kB gzipped)
- **GSAP Chunk**: 114 kB (45 kB gzipped)
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: 95+

### Otimizações
- Lazy loading de imagens
- Code splitting automático
- Cache inteligente
- Timeout control (10s)

---

