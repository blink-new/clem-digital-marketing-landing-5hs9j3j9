import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { TrendingUp, Users, Target, Award, BarChart3, Zap } from 'lucide-react'

interface PortfolioPageProps {
  onPageChange: (page: string) => void
}

export function PortfolioPage({ onPageChange }: PortfolioPageProps) {
  const caseStudies = [
    {
      category: "SaaS B2B",
      title: "Transformation Digitale - Plateforme SaaS Enterprise",
      duration: "18 mois",
      budget: "€150K",
      description: "Plateforme de gestion documentaire IA. Startup française, 25 personnes, Series A €3.2M levés. Marché B2B SaaS - Document Management (TAM €2.8B). Cible: Entreprises 100-2000 employés, secteurs finance/legal.",
      challenges: [
        "Marché ultra-concurrentiel avec 500+ acteurs (Box, Dropbox, etc.)",
        "CAC élevé €485 vs benchmark secteur €180",
        "Cycle de vente long (8-12 mois) sans nurturing structuré",
        "Conversion trial → payant faible (12% vs 25% marché)",
        "Positionnement flou face aux giants technologiques"
      ],
      strategy: [
        "Phase 1: Repositionnement (Mois 1-3) - Audit concurrentiel 200+ outils, redéfinition ICP avec jobs-to-be-done",
        "Phase 2: Inbound Marketing (Mois 2-8) - 48 articles techniques SEO optimisés, 12 ebooks sectoriels",
        "Phase 3: ABM + Automation (Mois 6-18) - ABM sur 150 comptes stratégiques, 15 séquences automation comportementales"
      ],
      results: [
        { metric: "+280%", label: "Trafic Qualifié", detail: "35K → 133K visiteurs/mois" },
        { metric: "2,847", label: "Leads SQL Générés", detail: "+450% vs objectif initial" },
        { metric: "28%", label: "Conversion Trial → Paid", detail: "vs 12% benchmark secteur" },
        { metric: "-72%", label: "CAC Optimisé", detail: "€485 → €135" }
      ],
      finalROI: "+485% ROAS",
      finalRevenue: "€2.8M ARR Généré"
    },
    {
      category: "E-commerce",
      title: "Scale International - Marketplace Premium Fashion",
      duration: "24 mois",
      budget: "€280K",
      description: "Scale-up française spécialisée dans la mode premium. Expansion sur 4 marchés européens avec défis multi-culturels. Gestion de 15+ devises avec optimisation forex automatisée.",
      challenges: [
        "Adaptation culturelle des campagnes par marché (langues, habitudes)",
        "Gestion de 15+ devises avec optimisation forex automatisée",
        "Compliance RGPD différentielle selon les pays",
        "Concurrence locale forte (Zalando, ASOS, H&M)",
        "Supply chain internationale et gestion des stocks"
      ],
      strategy: [
        "AI-Powered Personalization - Algorithm propriétaire avec 47% CTR (+285% vs standard)",
        "Dynamic Pricing - Optimisation prix en temps réel selon demande/stock",
        "Marketing Automation 360° - 25+ scénarios automatisés selon comportement client",
        "Predictive Inventory - Machine learning pour prédire les tendances mode"
      ],
      results: [
        { metric: "+420%", label: "Revenue International", detail: "€2.1M → €11.2M ARR" },
        { metric: "€127", label: "Panier Moyen", detail: "vs €78 baseline (+63%)" },
        { metric: "4.8%", label: "Conversion Rate", detail: "vs 1.9% marché (+150%)" },
        { metric: "685%", label: "ROAS Blended", detail: "Toutes campagnes confondues" }
      ],
      markets: [
        { country: "🇩🇪 Allemagne", revenue: "€3.2M ARR" },
        { country: "🇬🇧 Royaume-Uni", revenue: "€2.8M ARR" },
        { country: "🇮🇹 Italie", revenue: "€2.1M ARR" },
        { country: "🇪🇸 Espagne", revenue: "€1.6M ARR" }
      ],
      finalROI: "685% ROAS",
      finalRevenue: "€11.2M ARR Total"
    },
    {
      category: "B2B Industriel",
      title: "Transformation Digitale - Leader Équipements Industriels",
      duration: "30 mois",
      budget: "€185K",
      description: "Entreprise familiale de 45 ans d'expertise, équipements robotique & automatisation. Marché: Équipements industriels France + DACH (TAM €180M). Ticket Moyen: €165K (cycles 9-18 mois) - Décideurs multiples.",
      challenges: [
        "90% acquisition via salons industriels (coût élevé, ROI difficile à mesurer)",
        "Équipe commerciale senior réticente aux outils digitaux",
        "Cycles de vente complexes avec 5-8 décideurs par projet",
        "Absence totale de nurturing - prospects perdus entre les étapes",
        "Concurrence internationale agressive (Siemens, ABB, etc.)"
      ],
      strategy: [
        "ABM Strategy - Tier 1: Strategic Accounts (25) - Entreprises €500M+ CA (Renault, Airbus, Thales)",
        "Sales Enablement - ROI Calculator Industrie 4.0, Battle Cards Compétiteurs, CRM Automation Avancée",
        "Digital Factory Tours - Visites virtuelles interactives 3D des équipements",
        "Account Penetration - Progression ABM sur comptes stratégiques"
      ],
      results: [
        { metric: "1,247", label: "Leads SQL Qualifiés", detail: "+650% vs période N-1" },
        { metric: "€95", label: "CPL Moyen", detail: "vs €380 benchmark B2B" },
        { metric: "38%", label: "Conversion SQL → Opportunité", detail: "vs 18% marché industriel" },
        { metric: "€8.4M", label: "Pipeline Généré", detail: "Opportunités qualifiées" }
      ],
      salesMetrics: [
        { metric: "12 → 28", label: "Calls qualifiés/vendeur/semaine", change: "+133%" },
        { metric: "15% → 38%", label: "Taux qualification opportunities", change: "+153%" },
        { metric: "14m → 9m", label: "Cycle de vente moyen", change: "-36%" },
        { metric: "22% → 41%", label: "Win rate compétitif", change: "+86%" }
      ],
      finalROI: "+580% ROI",
      finalRevenue: "€12.8M CA Additionnel"
    }
  ]

  const globalStats = [
    { metric: "250+", label: "Clients Accompagnés", detail: "7 ans d'expertise" },
    { metric: "+485%", label: "ROI Moyen Portfolio", detail: "Tous secteurs confondus" },
    { metric: "€35M", label: "CA Clients Généré", detail: "Croissance additionnelle" },
    { metric: "97%", label: "Taux Satisfaction", detail: "NPS Score +68" }
  ]

  return (
    <div className="min-h-screen bg-animated text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40 animate-pulse mb-6">
              <Award className="w-4 h-4 mr-2" />
              Expertise Avancée & Analyses Stratégiques Approfondies
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Portfolio Marketing
              <span className="gradient-text block">Digital</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nous avons transformé le marketing de nos clients avec des résultats mesurables et des stratégies innovantes
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {globalStats.map((stat, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.metric}</div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-xl border-primary/20 overflow-hidden hover-lift hover-glow">
                <div className="grid lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">{study.category}</Badge>
                      <Badge variant="outline" className="border-accent/40 text-accent">{study.duration}</Badge>
                      <Badge variant="outline" className="border-accent/40 text-accent">{study.budget} budget</Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white">{study.title}</h3>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Défis identifiés :</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          {study.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Stratégie déployée :</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          {study.strategy.map((strategy, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                              {strategy}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12">
                    <h4 className="text-2xl font-bold mb-6 gradient-text">Résultats obtenus</h4>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center hover-lift">
                          <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                          <div className="text-sm text-gray-300 font-medium">{result.label}</div>
                          <div className="text-xs text-gray-400">{result.detail}</div>
                        </div>
                      ))}
                    </div>

                    {/* Markets for e-commerce case */}
                    {study.markets && (
                      <div className="mb-8">
                        <h5 className="font-semibold mb-4 text-accent">Expansion par marché :</h5>
                        <div className="space-y-2">
                          {study.markets.map((market, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span>{market.country}</span>
                              <span className="font-semibold text-primary">{market.revenue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sales metrics for B2B case */}
                    {study.salesMetrics && (
                      <div className="mb-8">
                        <h5 className="font-semibold mb-4 text-accent">Performance équipe commerciale :</h5>
                        <div className="grid grid-cols-1 gap-3">
                          {study.salesMetrics.map((metric, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                              <span className="text-gray-300">{metric.label}</span>
                              <div className="text-right">
                                <div className="font-semibold text-white">{metric.metric}</div>
                                <div className="text-xs text-accent">{metric.change}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-4 bg-black/40 rounded-lg animate-glow">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">{study.finalROI}</div>
                        <div className="text-sm text-gray-300">{study.finalRevenue}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">Méthodologie Marketing Avancée</h2>
            <p className="text-xl text-gray-300">Notre approche technique pour maximiser vos performances</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Attribution Multi-Touch",
                description: "Modélisation attribution avancée avec mix média optimization"
              },
              {
                icon: Target,
                title: "Customer Journey",
                description: "Mapping détaillé et optimisation des parcours clients"
              },
              {
                icon: Users,
                title: "Segmentation IA",
                description: "Segmentation comportementale avec machine learning"
              },
              {
                icon: Zap,
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Prêt à obtenir des résultats similaires ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Découvrez comment nous pouvons transformer votre marketing avec une analyse stratégique gratuite
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 animate-glow"
            onClick={() => onPageChange('contact')}
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Obtenir mon analyse gratuite
          </Button>
        </div>
      </section>
    </div>
  )
}