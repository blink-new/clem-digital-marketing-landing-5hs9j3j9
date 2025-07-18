import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import { blink } from '../blink/client';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Envoyer l'email avec Blink
      const result = await blink.notifications.email({
        to: 'clem.digital.marketing@outlook.com',
        subject: `Nouvelle demande de contact - ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #8B5CF6, #A855F7); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle demande de contact</h1>
            </div>
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #333; margin-bottom: 20px;">Informations du prospect :</h2>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="color: #8B5CF6;">Nom :</strong> ${formData.name}
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="color: #8B5CF6;">Email :</strong> ${formData.email}
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="color: #8B5CF6;">Entreprise :</strong> ${formData.company}
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="color: #8B5CF6;">Téléphone :</strong> ${formData.phone}
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="color: #8B5CF6;">Budget :</strong> ${formData.budget}
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="color: #8B5CF6;">Message :</strong><br>
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background: #8B5CF6; padding: 20px; text-align: center;">
              <p style="color: white; margin: 0;">Répondez rapidement pour maximiser vos chances de conversion !</p>
            </div>
          </div>
        `,
        text: `
Nouvelle demande de contact

Nom: ${formData.name}
Email: ${formData.email}
Entreprise: ${formData.company}
Téléphone: ${formData.phone}
Budget: ${formData.budget}

Message:
${formData.message}
        `
      });

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          budget: ''
        });
        
        // Redirection vers Calendly après 2 secondes
        setTimeout(() => {
          window.open('https://calendly.com/clem-digital-marketing', '_blank');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      
      // Fallback vers Calendly même en cas d'erreur
      setTimeout(() => {
        window.open('https://calendly.com/clem-digital-marketing', '_blank');
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      title: "Stratégie Marketing & Audit",
      description: "Analyse approfondie et définition de stratégies sur-mesure",
      price: "À partir de 2 500€",
      features: [
        "Audit complet de votre présence digitale",
        "Analyse concurrentielle approfondie",
        "Définition des buyer personas",
        "Stratégie marketing personnalisée",
        "Plan d'action détaillé sur 12 mois"
      ],
      popular: false
    },
    {
      title: "Acquisition Marketing",
      description: "Campagnes multi-canaux optimisées pour maximiser le ROI",
      price: "À partir de 3 500€/mois",
      features: [
        "Google Ads & SEA optimisés",
        "Campagnes Facebook & LinkedIn",
        "Email marketing automation",
        "Retargeting avancé",
        "Reporting détaillé mensuel"
      ],
      popular: true
    },
    {
      title: "Content Marketing",
      description: "Production de contenu à forte valeur ajoutée",
      price: "À partir de 2 000€/mois",
      features: [
        "Stratégie de contenu personnalisée",
        "Création d'articles de blog SEO",
        "Contenus réseaux sociaux",
        "Livres blancs et études de cas",
        "Calendrier éditorial complet"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Quel est le niveau de connaissance de l'agence concernant mon secteur d'activité ?",
      answer: "Nous travaillons avec des entreprises de tous secteurs depuis plus de 5 ans. Notre approche consiste à faire un audit approfondi de votre marché et de vos concurrents avant de proposer toute stratégie. Nous nous adaptons rapidement aux spécificités de chaque secteur."
    },
    {
      question: "Quelles sont les étapes proposées lors d'un accompagnement digital ?",
      answer: "Notre méthodologie en 4 étapes : 1) Audit & analyse stratégique (2 semaines), 2) Définition de la stratégie et du plan d'action (1 semaine), 3) Mise en œuvre des campagnes (en continu), 4) Suivi et optimisation mensuelle avec reporting détaillé."
    },
    {
      question: "Quels résultats puis-je espérer et en combien de temps ?",
      answer: "Les premiers résultats sont visibles dès 30 jours pour les campagnes payantes. Pour le SEO et le content marketing, comptez 3-6 mois pour des résultats significatifs. Nous garantissons une amélioration de 150% de vos conversions dans les 6 premiers mois."
    },
    {
      question: "Comment mesurez-vous la performance des campagnes ?",
      answer: "Nous utilisons des KPIs précis : taux de conversion, coût d'acquisition client (CAC), retour sur investissement (ROI), trafic qualifié, et leads générés. Vous recevez un dashboard en temps réel et un rapport mensuel détaillé."
    },
    {
      question: "En quoi votre approche diffère-t-elle d'autres agences digitales ?",
      answer: "Notre différence : accompagnement 100% personnalisé, méthodologie marketing avancée (IA, attribution multi-touch), spécialisation B2B, et garantie de résultats. Chaque client bénéficie d'un suivi direct avec moi, Clémance, fondatrice de l'agence."
    },
    {
      question: "L'offre est-elle personnalisable selon mes objectifs et mon budget ?",
      answer: "Absolument ! Nous proposons des packages modulaires adaptés à chaque budget (de 2 000€ à 10 000€/mois). Chaque stratégie est construite sur-mesure selon vos objectifs business, votre secteur et vos contraintes."
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStart SaaS",
      text: "Grâce à Clem Digital, nous avons multiplié par 3 nos leads qualifiés en 4 mois. L'approche data-driven et l'accompagnement personnalisé font toute la différence.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      company: "Consulting Pro",
      text: "ROI exceptionnel sur nos campagnes Google Ads. L'équipe maîtrise parfaitement les enjeux B2B et livre des résultats concrets rapidement.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "E-commerce Plus",
      text: "Stratégie marketing complète qui a transformé notre business. Professionnalisme, expertise et résultats au rendez-vous. Je recommande vivement !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gradient">
                Clem Digital
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#accueil" className="text-gray-700 hover:text-purple-600 transition-colors">Accueil</a>
                <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
                <a href="#apropos" className="text-gray-700 hover:text-purple-600 transition-colors">À propos</a>
                <a href="#temoignages" className="text-gray-700 hover:text-purple-600 transition-colors">Témoignages</a>
                <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
                <a href="#contact" className="btn-primary">
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-purple-100">
              <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Accueil</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
              <a href="#apropos" className="block px-3 py-2 text-gray-700 hover:text-purple-600">À propos</a>
              <a href="#temoignages" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Témoignages</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-purple-600">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-purple-600 font-semibold">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transformez votre 
                <span className="text-gradient"> marketing digital</span> 
                en machine à leads
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stratégies marketing sur-mesure, acquisition multi-canaux et automation avancée pour maximiser votre ROI et générer plus de clients qualifiés.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="btn-primary text-center">
                  Analyse gratuite
                  <ArrowRight size={20} />
                </a>
                <a href="#services" className="btn-secondary text-center">
                  Découvrir nos services
                </a>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Audit gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>ROI garanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Résultats en 30 jours</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Résultats garantis</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Leads générés</span>
                      <span className="text-2xl font-bold text-purple-600">+150%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ROI moyen</span>
                      <span className="text-2xl font-bold text-purple-600">+300%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Clients satisfaits</span>
                      <span className="text-2xl font-bold text-purple-600">50+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services <span className="text-gradient">Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour transformer votre marketing digital en véritable levier de croissance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`card hover-lift ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Plus populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-purple-600">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={service.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                  Choisir ce package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="section-padding bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl transform -rotate-6"></div>
                <img 
                  src="/clemance-photo.jpeg" 
                  alt="Clémance - Fondatrice Clem Digital Marketing" 
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 fill-current" size={20} />
                    <span className="font-bold text-gray-900">5.0</span>
                    <span className="text-gray-600 text-sm">(50+ avis)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Rencontrez <span className="text-gradient">Clémance</span>, votre experte marketing
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fondatrice et CEO de Clem Digital Marketing Agency, j'ai créé cette agence avec la conviction que chaque marque mérite une stratégie digitale sur-mesure, créative et performante.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Forte de mon expérience et de ma passion pour le marketing, j'accompagne chaque client personnellement, de la stratégie à l'exécution, pour garantir des résultats concrets et mesurables.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Clients accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">La Défense</div>
                  <div className="text-gray-600">Basée à Puteaux</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">B2B</div>
                  <div className="text-gray-600">Spécialisation</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                <h3 className="font-bold text-gray-900 mb-3">Notre Spécialité</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Stratégie marketing et acquisition marketing</li>
                  <li>• Entreprises de toutes tailles</li>
                  <li>• Stratégies orientées ROI</li>
                  <li>• Accompagnement personnalisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos <span className="text-gradient">clients</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets qui parlent d'eux-mêmes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card hover-lift">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions <span className="text-gradient">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Toutes les réponses à vos questions sur nos services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-purple-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-purple-600 flex-shrink-0" size={24} />
                  )}
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

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prêt.e à transformer votre <span className="text-gradient">marketing</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complétez notre formulaire d'analyse stratégique et bénéficiez d'un appel découverte offert. 
              Nous vous proposerons un plan d'action personnalisé pour générer plus de clients qualifiés.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Contactez-nous directement</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="opacity-90">clem.digital.marketing@outlook.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Téléphone</div>
                      <div className="opacity-90">07 52 76 84 04</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Localisation</div>
                      <div className="opacity-90">La Défense / Puteaux (Paris)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-2xl">
                  <h4 className="font-bold mb-3">Notre promesse</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>🧠 Méthodologie marketing avancée</li>
                    <li>📊 Attribution multi-touch</li>
                    <li>🤖 Segmentation par IA</li>
                    <li>📈 Marketing prédictif</li>
                    <li>💰 ROI garanti</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget mensuel envisagé
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    <option value="2000-5000€">2 000€ - 5 000€</option>
                    <option value="5000-10000€">5 000€ - 10 000€</option>
                    <option value="10000€+">Plus de 10 000€</option>
                    <option value="À discuter">À discuter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    placeholder="Parlez-nous de vos objectifs, défis actuels et attentes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Obtenir mon analyse gratuite
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">✅ Message envoyé avec succès !</p>
                    <p className="text-green-700 text-sm mt-1">
                      Vous allez être redirigé vers notre calendrier pour planifier votre appel découverte gratuit.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">❌ Erreur lors de l'envoi</p>
                    <p className="text-red-700 text-sm mt-1">
                      Vous allez être redirigé vers notre calendrier pour planifier directement votre appel.
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-600 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour discuter de votre projet.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-gradient">
                Clem Digital
              </div>
              <p className="text-gray-400 mb-4">
                Votre agence marketing digital spécialisée en stratégie et acquisition B2B.
              </p>
              <div className="text-sm text-gray-400">
                <p>La Défense / Puteaux</p>
                <p>Paris, France</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Stratégie Marketing</li>
                <li>Acquisition Marketing</li>
                <li>Content Marketing</li>
                <li>Marketing Automation</li>
                <li>Analyse & Optimisation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li>À propos</li>
                <li>Nos méthodes</li>
                <li>Témoignages</li>
                <li>Blog</li>
                <li>Carrières</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>clem.digital.marketing@outlook.com</li>
                <li>07 52 76 84 04</li>
                <li>Consultation gratuite</li>
                <li>Devis personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Clem Digital Marketing Agency. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;