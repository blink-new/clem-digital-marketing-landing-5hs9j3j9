import React, { useState } from 'react';
import { ChevronDown, Star, Users, TrendingUp, Award, CheckCircle, Phone, Mail, MapPin, Menu, X, ArrowRight, Play } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Stratégie marketing & audit",
      description: "Analyse approfondie et définition de stratégies sur-mesure",
      features: ["Audit complet", "Stratégie personnalisée", "Plan d'action détaillé", "Analyse concurrentielle"],
      price: "À partir de 2 500€",
      popular: false
    },
    {
      title: "Acquisition marketing",
      description: "Campagnes multi-canaux optimisées pour maximiser le ROI",
      features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "SEO/SEA", "Retargeting", "Analytics avancés"],
      price: "À partir de 1 800€/mois",
      popular: true
    },
    {
      title: "Marketing automation & CRM",
      description: "Systèmes automatisés pour le nurturing et la conversion",
      features: ["Setup CRM", "Email automation", "Lead scoring", "Workflows personnalisés", "Intégrations"],
      price: "À partir de 3 200€",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStart SAS",
      text: "Clem Digital a transformé notre approche marketing. +250% de leads qualifiés en 6 mois !",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Pierre Martin",
      company: "InnovCorp",
      text: "Une expertise remarquable et un accompagnement personnalisé. ROI multiplié par 3.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Sophie Laurent",
      company: "GrowthLab",
      text: "Stratégie sur-mesure et résultats concrets. Je recommande vivement !",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const faqs = [
    {
      question: "Quel est le niveau de connaissance de l'agence concernant mon secteur d'activité ?",
      answer: "Nous travaillons avec des entreprises de tous secteurs depuis 5+ ans. Notre approche commence toujours par une analyse approfondie de votre marché spécifique, vos concurrents et vos enjeux sectoriels pour adapter parfaitement nos stratégies."
    },
    {
      question: "Comment définissez-vous le public cible et les canaux à privilégier ?",
      answer: "Nous utilisons une méthodologie avancée incluant l'analyse comportementale par IA, le Customer Journey Mapping et la segmentation prédictive pour identifier précisément votre audience et optimiser vos investissements sur les bons canaux."
    },
    {
      question: "Quels résultats puis-je espérer et en combien de temps ?",
      answer: "Nos clients observent généralement +150% de conversions avec nos landing pages spécialisées et +89% de taux de conversion grâce aux optimisations. Les premiers résultats sont visibles dès 30-60 jours selon les actions mises en place."
    },
    {
      question: "Comment mesurez-vous la performance des campagnes ?",
      answer: "Nous utilisons des KPIs précis : ROI, coût d'acquisition client, taux de conversion, attribution multi-touch. Vous recevez des rapports détaillés avec analyse des performances et recommandations d'optimisation."
    },
    {
      question: "En quoi votre approche diffère-t-elle d'autres agences digitales ?",
      answer: "Notre différence : méthodologie marketing avancée (IA, attribution multi-touch, marketing prédictif), accompagnement personnalisé par la fondatrice, spécialisation B2B et focus ROI avec garantie de résultats mesurables."
    },
    {
      question: "L'accompagnement est-il ponctuel ou continu ?",
      answer: "Nous proposons les deux : missions ponctuelles (audit, stratégie) et accompagnement continu (gestion campagnes, optimisation). L'idéal est un suivi continu pour maximiser les performances sur le long terme."
    },
    {
      question: "Comment adaptez-vous vos stratégies selon mes résultats ?",
      answer: "Nous pratiquons l'optimisation continue avec A/B testing intégré, analyse des données en temps réel et ajustements stratégiques mensuels. Chaque euro investi est optimisé pour générer un retour mesurable."
    }
  ];

  const mediaPartners = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Partenaire Google Ads certifié"
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      description: "Meta Business Partner"
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      description: "LinkedIn Marketing Partner"
    },
    {
      name: "HubSpot",
      logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
      description: "HubSpot Solutions Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clem Digital
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#accueil" className="text-gray-900 hover:text-primary transition-colors">Accueil</a>
                <a href="#services" className="text-gray-900 hover:text-primary transition-colors">Services</a>
                <a href="#apropos" className="text-gray-900 hover:text-primary transition-colors">À propos</a>
                <a href="#temoignages" className="text-gray-900 hover:text-primary transition-colors">Témoignages</a>
                <a href="#contact" className="text-gray-900 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <a href="#contact" className="btn-primary">
                Consultation gratuite
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#accueil" className="block px-3 py-2 text-gray-900 hover:text-primary">Accueil</a>
              <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-primary">Services</a>
              <a href="#apropos" className="block px-3 py-2 text-gray-900 hover:text-primary">À propos</a>
              <a href="#temoignages" className="block px-3 py-2 text-gray-900 hover:text-primary">Témoignages</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-primary">Contact</a>
              <div className="px-3 py-2">
                <a href="#contact" className="btn-primary w-full text-center">
                  Consultation gratuite
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-16 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transformez votre 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> marketing digital</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stratégies marketing sur-mesure et acquisition client optimisée pour maximiser votre ROI. 
                  Spécialistes B2B basés à La Défense.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary text-lg px-8 py-4">
                  Analyse gratuite
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Voir nos résultats
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Clients accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">+250%</div>
                  <div className="text-sm text-gray-600">Leads générés</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <img 
                  src="/brand-image.png" 
                  alt="Clem Digital Marketing" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">ROI Moyen</div>
                    <div className="text-2xl font-bold text-primary">+300%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Partenaires Média</h2>
            <p className="text-lg text-gray-600">Certifiés et partenaires officiels des plus grandes plateformes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {mediaPartners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions marketing complètes pour accélérer votre croissance et maximiser votre retour sur investissement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                service.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200 hover:border-primary/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Plus populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  service.popular 
                    ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-primary hover:text-white'
                }`}>
                  Demander un devis
                </a>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Content Marketing</h4>
              <p className="text-gray-600 text-sm">Production de contenu à forte valeur ajoutée pour l'acquisition et la conversion</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Repositionnement & Messaging</h4>
              <p className="text-gray-600 text-sm">Différenciation concurrentielle et proposition de valeur unique</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Consulting Marketing</h4>
              <p className="text-gray-600 text-sm">Accompagnement des équipes internes et transfert de compétences</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Rencontrez Clem, votre experte marketing
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Fondatrice et CEO de Clem Digital Marketing Agency, j'ai créé cette agence avec la conviction 
                  que chaque marque mérite une stratégie digitale sur-mesure, créative et performante.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Forte de mon expérience et de ma passion pour le marketing, j'accompagne chaque client 
                  personnellement, de la stratégie à l'exécution, pour garantir des résultats concrets et mesurables.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Clients accompagnés</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Notre Spécialité</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={20} />
                    <span className="text-gray-700">Stratégie marketing et acquisition marketing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={20} />
                    <span className="text-gray-700">Entreprises de toutes tailles</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={20} />
                    <span className="text-gray-700">Stratégies orientées ROI</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={20} />
                    <span className="text-gray-700">Accompagnement personnalisé</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="text-primary mr-2" size={20} />
                  <span className="font-semibold text-gray-900">Basée à La Défense, Puteaux</span>
                </div>
                <p className="text-gray-600">
                  Notre agence intervient auprès d'entreprises de toutes tailles et tous secteurs, 
                  avec une spécialisation dans l'accompagnement des femmes entrepreneures.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <img 
                  src="/brand-image.png" 
                  alt="Clem - Fondatrice Clem Digital Marketing" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Spécialisation</div>
                    <div className="text-lg font-bold text-primary">B2B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Méthodologie Marketing Avancée</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre promesse : une approche scientifique et data-driven pour maximiser vos performances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Attribution multi-touch</h3>
              <p className="text-gray-600 text-sm">Analyse complète de vos canaux et points de contact, avec modélisation pour optimiser vos investissements</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Customer Journey Mapping</h3>
              <p className="text-gray-600 text-sm">Cartographie détaillée du parcours client, identification des points de friction et des leviers d'optimisation</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Segmentation par IA</h3>
              <p className="text-gray-600 text-sm">Analyse comportementale poussée grâce au machine learning pour des campagnes ultra-ciblées</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Marketing prédictif</h3>
              <p className="text-gray-600 text-sm">Anticipation des comportements d'achat & déclenchement automatisé de scénarios marketing</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Un accompagnement marketing sur-mesure, orienté ROI</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
                Nous croyons qu'une stratégie efficace commence toujours par une compréhension profonde de votre marché, 
                votre positionnement et vos objectifs business.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Audit & analyse stratégique approfondie</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Plan d'action personnalisé adapté à vos objectifs & budget</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Suivi et optimisation continue pour une performance maximale</h4>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-primary mt-6">
                👉 Objectif : que chaque euro investi en marketing génère un retour mesurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Des résultats concrets qui parlent d'eux-mêmes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">ROI Attendu avec nos optimisations</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">+150%</div>
                  <div className="text-sm opacity-90">Conversions avec landing pages spécialisées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">+89%</div>
                  <div className="text-sm opacity-90">Taux de conversion grâce aux optimisations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">+200%</div>
                  <div className="text-sm opacity-90">Efficacité du retargeting avec pixels avancés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">+67%</div>
                  <div className="text-sm opacity-90">Qualité des leads avec qualification progressive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Toutes les réponses à vos questions sur notre accompagnement</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt.e à transformer votre marketing ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Complétez notre formulaire d'analyse stratégique et bénéficiez d'un appel découverte offert.
            Nous vous proposerons un plan d'action personnalisé pour générer plus de clients qualifiés et structurer votre croissance.
          </p>
          <a href="#contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow">
            Remplir le formulaire maintenant
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600">Démarrons votre transformation digitale dès aujourd'hui</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parlons de votre projet</h3>
                <p className="text-gray-600 mb-8">
                  Contactez-nous pour un audit gratuit de votre stratégie marketing actuelle et découvrez 
                  comment nous pouvons vous aider à atteindre vos objectifs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">+33 1 XX XX XX XX</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@clemdigital.fr</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">La Défense, Puteaux<br />Paris, France</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">Horaires d'ouverture</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Prénom *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Nom *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Entreprise</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Service souhaité</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Sélectionnez un service</option>
                    <option>Stratégie marketing & audit</option>
                    <option>Acquisition marketing</option>
                    <option>Marketing automation & CRM</option>
                    <option>Content marketing</option>
                    <option>Consulting marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Décrivez votre projet et vos objectifs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Envoyer ma demande
                  <ArrowRight className="ml-2" size={20} />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clem Digital
              </div>
              <p className="text-gray-400">
                Agence de marketing digital spécialisée en stratégie marketing et acquisition client B2B.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Stratégie marketing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Acquisition marketing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Marketing automation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Content marketing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nos clients</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Témoignages</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>La Défense, Puteaux</li>
                <li>Paris, France</li>
                <li>+33 1 XX XX XX XX</li>
                <li>contact@clemdigital.fr</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Clem Digital Marketing Agency. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;