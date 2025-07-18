import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3, Zap, Star, Brain, Eye, Sparkles, Rocket } from 'lucide-react'

interface HomePageProps {
  onPageChange: (page: string) => void
}

export function HomePage({ onPageChange }: HomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-animated text-white overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-4 h-4 bg-primary/20 rounded-full animate-float"
          style={{ 
            left: mousePosition.x * 0.1 + 100, 
            top: mousePosition.y * 0.1 + 100,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-6 h-6 bg-accent/20 rounded-full animate-float"
          style={{ 
            left: mousePosition.x * 0.05 + 200, 
            top: mousePosition.y * 0.05 + 200,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-primary/30 rounded-full animate-float"
          style={{ 
            left: mousePosition.x * 0.15 + 300, 
            top: mousePosition.y * 0.15 + 150,
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40 animate-pulse">
                  <Brain className="w-4 h-4 mr-2" />
                  Méthodologie Marketing Avancée
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Transformez votre marketing en 
                  <span className="gradient-text block"> machine à leads</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Stratégies marketing sur-mesure, orientées ROI. Attribution multi-touch, IA prédictive et automation avancée pour maximiser vos conversions B2B.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 hover-lift animate-glow"
                  onClick={() => onPageChange('contact')}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Analyse Stratégique Gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-primary/40 text-primary hover:bg-primary/10 hover-lift"
                  onClick={() => onPageChange('portfolio')}
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Voir nos résultats
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
                <div className="text-center hover-lift">
                  <div className="text-4xl font-bold gradient-text">+485%</div>
                  <div className="text-sm text-gray-400">ROI Moyen</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-4xl font-bold gradient-text">250+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-4xl font-bold gradient-text">€35M</div>
                  <div className="text-sm text-gray-400">CA Généré</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-primary/20 hover-glow">
                <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Méthodologie Avancée</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium text-lg">Attribution Multi-Touch</span>
                  </div>
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-medium text-lg">Customer Journey Mapping</span>
                  </div>
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium text-lg">Segmentation IA</span>
                  </div>
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-medium text-lg">Marketing Prédictif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Nos Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un accompagnement marketing sur-mesure, orienté ROI pour transformer votre stratégie digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: BarChart3,
                title: "Stratégie Marketing & Audit",
                description: "Analyse approfondie et définition de stratégies sur-mesure"
              },
              {
                icon: Target,
                title: "Repositionnement & Messaging",
                description: "Différenciation concurrentielle et proposition de valeur unique"
              },
              {
                icon: Users,
                title: "Content Marketing",
                description: "Production de contenu à forte valeur ajoutée pour l'acquisition"
              },
              {
                icon: TrendingUp,
                title: "Acquisition Marketing",
                description: "Campagnes multi-canaux optimisées pour maximiser le ROI"
              },
              {
                icon: Zap,
                title: "Marketing Automation & CRM",
                description: "Systèmes automatisés pour le nurturing et la conversion"
              },
              {
                icon: BarChart3,
                title: "Analyse & Optimisation",
                description: "Monitoring en temps réel et ajustements stratégiques"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow transition-all duration-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 animate-glow"
              onClick={() => onPageChange('services')}
            >
              Découvrir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold gradient-text">Rencontrez Clémance, votre experte marketing</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Fondatrice et CEO de Clem Digital Marketing Agency, j'ai créé cette agence avec la conviction que chaque marque mérite une stratégie digitale sur-mesure, créative et performante.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Forte de mon expérience et de ma passion pour le marketing, j'accompagne chaque client personnellement, de la stratégie à l'exécution, pour garantir des résultats concrets et mesurables.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center hover-lift">
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-400">Années d'expérience</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-400">Clients accompagnés</div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 animate-glow"
                onClick={() => onPageChange('about')}
              >
                En savoir plus sur Clémance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-primary/20 hover-glow">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden animate-glow bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text">C</div>
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold gradient-text">Clémance</h3>
                  <p className="text-gray-300 text-lg">Fondatrice & CEO</p>
                  <div className="flex justify-center space-x-8 pt-4">
                    <div className="text-center hover-lift">
                      <div className="text-2xl font-bold text-primary">97%</div>
                      <div className="text-xs text-gray-400">Satisfaction</div>
                    </div>
                    <div className="text-center hover-lift">
                      <div className="text-2xl font-bold text-accent">+68</div>
                      <div className="text-xs text-gray-400">NPS Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-gray-300">Réponses aux questions que se posent nos futurs clients</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Quel est le niveau de connaissance de l'agence concernant mon secteur d'activité ?",
                answer: "Nous avons accompagné plus de 250 clients dans des secteurs variés (SaaS, e-commerce, industrie, services B2B). Notre méthodologie s'adapte à chaque marché spécifique grâce à un audit approfondi de votre écosystème concurrentiel et de vos buyer personas."
              },
              {
                question: "Quels résultats puis-je espérer et en combien de temps ?",
                answer: "Nos clients observent généralement les premiers résultats dès le 2ème mois (amélioration du trafic qualifié), avec des résultats significatifs à partir du 6ème mois. Notre ROI moyen portfolio est de +485% sur 18 mois. Chaque projet inclut des objectifs SMART et un suivi mensuel détaillé."
              },
              {
                question: "Comment mesurez-vous la performance des campagnes ?",
                answer: "Nous utilisons un modèle d'attribution multi-touch propriétaire, des dashboards temps réel, et un suivi de +20 KPIs selon votre secteur : CAC, LTV, ROAS, taux de conversion, pipeline généré, etc. Reporting mensuel avec recommandations d'optimisation."
              },
              {
                question: "En quoi votre approche diffère-t-elle d'autres agences digitales ?",
                answer: "Notre différenciation : méthodologie marketing avancée (IA prédictive, attribution multi-touch), accompagnement personnalisé par la fondatrice, focus ROI avec garantie de performance, et spécialisation B2B avec compréhension des cycles de vente longs."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-black/40 backdrop-blur-xl rounded-lg px-6 border border-primary/20">
                <AccordionTrigger className="text-left text-white hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Prêt.e à transformer votre marketing ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complétez notre formulaire d'analyse stratégique et bénéficiez d'un appel découverte offert. 
            Nous vous proposerons un plan d'action personnalisé pour générer plus de clients qualifiés.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 animate-glow"
            onClick={() => onPageChange('contact')}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Obtenir mon analyse gratuite
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}