import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Brain,
  Search,
  MessageSquare,
  Settings,
  Eye,
  Sparkles
} from 'lucide-react'

interface ServicesPageProps {
  onPageChange: (page: string) => void
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const services = [
    {
      icon: BarChart3,
      title: "Stratégie Marketing & Audit",
      description: "Analyse approfondie et définition de stratégies sur-mesure",
      features: [
        "Audit compétitif 360°",
        "Attribution multi-touch", 
        "Roadmap personnalisée"
      ],
      details: [
        "Analyse complète de vos canaux et points de contact",
        "Modélisation pour optimiser vos investissements",
        "Identification des leviers de croissance prioritaires",
        "Benchmark concurrentiel approfondi"
      ]
    },
    {
      icon: Target,
      title: "Repositionnement & Messaging",
      description: "Différenciation concurrentielle et proposition de valeur unique",
      features: [
        "Positionnement différenciant",
        "Messaging framework",
        "Tests A/B messaging"
      ],
      details: [
        "Définition de votre positionnement unique sur le marché",
        "Création d'un framework de communication cohérent",
        "Tests et optimisation de vos messages clés",
        "Adaptation aux différents segments de clientèle"
      ]
    },
    {
      icon: Users,
      title: "Content Marketing",
      description: "Production de contenu à forte valeur ajoutée pour l'acquisition",
      features: [
        "Stratégie éditoriale SEO",
        "Content clusters",
        "Lead magnets"
      ],
      details: [
        "Stratégie de contenu alignée sur le parcours client",
        "Optimisation SEO pour maximiser la visibilité",
        "Création de contenus premium pour la génération de leads",
        "Distribution multi-canal optimisée"
      ]
    },
    {
      icon: TrendingUp,
      title: "Acquisition Marketing",
      description: "Campagnes multi-canaux optimisées pour maximiser le ROI",
      features: [
        "Google Ads & LinkedIn",
        "Retargeting avancé",
        "Optimisation ROAS"
      ],
      details: [
        "Campagnes publicitaires sur les canaux les plus performants",
        "Stratégies de retargeting sophistiquées",
        "Optimisation continue du retour sur investissement publicitaire",
        "Attribution multi-touch pour mesurer l'impact réel"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation & CRM",
      description: "Systèmes automatisés pour le nurturing et la conversion",
      features: [
        "Lead scoring IA",
        "Séquences automation",
        "CRM intégration"
      ],
      details: [
        "Scoring automatique des prospects avec intelligence artificielle",
        "Séquences de nurturing personnalisées",
        "Intégration complète avec vos outils CRM",
        "Workflows automatisés pour optimiser les conversions"
      ]
    },
    {
      icon: Eye,
      title: "Analyse & Optimisation",
      description: "Monitoring en temps réel et ajustements stratégiques",
      features: [
        "Dashboards temps réel",
        "Analyses prédictives",
        "Optimisation continue"
      ],
      details: [
        "Tableaux de bord personnalisés avec KPIs en temps réel",
        "Analyses prédictives pour anticiper les tendances",
        "Optimisation continue basée sur les données",
        "Reporting détaillé avec recommandations d'actions"
      ]
    }
  ]

  const packages = [
    {
      name: "Starter",
      description: "Pour les PME qui démarrent leur transformation digitale",
      price: "Sur devis",
      features: [
        "Audit marketing complet",
        "Stratégie sur-mesure",
        "2 canaux d'acquisition",
        "Reporting mensuel",
        "Support email"
      ],
      popular: false
    },
    {
      name: "Growth",
      description: "Pour les entreprises en croissance qui veulent accélérer",
      price: "Sur devis",
      features: [
        "Tout du package Starter",
        "Marketing automation",
        "Attribution multi-touch",
        "ABM stratégique",
        "Support prioritaire",
        "Optimisation ROAS"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Pour les grandes entreprises avec des besoins complexes",
      price: "Sur mesure",
      features: [
        "Solution 100% personnalisée",
        "IA prédictive avancée",
        "Équipe dédiée",
        "Intégrations custom",
        "Support 24/7",
        "Consulting stratégique"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-animated text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40 animate-pulse mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Expertise Marketing Avancée
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Nos Services
              <span className="gradient-text block">Marketing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Un accompagnement marketing sur-mesure, orienté ROI pour transformer votre stratégie digitale et maximiser vos conversions B2B
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                <CardContent className="space-y-6">
                  {/* Features principales */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Fonctionnalités clés :</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Détails */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Ce que nous faisons :</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">Nos Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choisissez la formule qui correspond à vos besoins et à votre niveau de maturité marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`bg-black/40 backdrop-blur-xl hover-lift hover-glow relative ${
                pkg.popular ? 'border-primary shadow-lg' : 'border-primary/20'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white animate-pulse">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Plus Populaire
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-300 min-h-[3rem]">
                    {pkg.description}
                  </CardDescription>
                  <div className="text-3xl font-bold gradient-text">{pkg.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/80 animate-glow' 
                        : 'bg-primary/20 hover:bg-primary/40 border border-primary/40'
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() => onPageChange('contact')}
                  >
                    {pkg.popular ? 'Demander un devis' : 'Nous contacter'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">Notre Méthodologie</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche structurée et éprouvée pour maximiser vos résultats marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Attribution Multi-Touch",
                description: "Modélisation attribution avancée avec mix média optimization"
              },
              {
                icon: Target,
                title: "Customer Journey",
                description: "Mapping détaillé et optimisation des parcours clients"
              },
              {
                icon: Brain,
                title: "Segmentation IA",
                description: "Segmentation comportementale avec machine learning"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Marketing prédictif et optimisation automatisée"
              }
            ].map((method, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Prêt à transformer votre marketing ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discutons de vos défis et objectifs pour créer une stratégie sur-mesure
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 animate-glow"
            onClick={() => onPageChange('contact')}
          >
            <Brain className="mr-2 h-5 w-5" />
            Obtenir une analyse gratuite
          </Button>
        </div>
      </section>
    </div>
  )
}