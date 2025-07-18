import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { MapPin, Target, Users, Award, TrendingUp, Brain } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-animated text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40 animate-pulse mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Fondatrice & CEO
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Rencontrez 
              <span className="gradient-text block">Clémance, votre experte marketing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Fondatrice et CEO de Clem Digital Marketing Agency
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo and Stats */}
            <div className="relative">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-primary/20 hover-glow">
                <div className="w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden animate-glow border-4 border-gradient-to-r from-primary to-accent">
                  <img 
                    src="/clemance-photo.jpeg" 
                    alt="Clémance - Fondatrice Clem Digital Marketing Agency"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold gradient-text">Clémance</h2>
                  <p className="text-gray-300 text-xl">Fondatrice et CEO</p>
                  <p className="text-gray-300">Clem Digital Marketing Agency</p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary/20">
                    <div className="text-center hover-lift">
                      <div className="text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-gray-400">Années d'expérience</div>
                    </div>
                    <div className="text-center hover-lift">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-gray-400">Clients accompagnés</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div className="text-center hover-lift">
                      <div className="text-2xl font-bold text-accent">La Défense</div>
                      <div className="text-xs text-gray-400">Basée à Puteaux</div>
                    </div>
                    <div className="text-center hover-lift">
                      <div className="text-2xl font-bold text-accent">B2B</div>
                      <div className="text-xs text-gray-400">Spécialisation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Ma Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  J'ai fondé Clem Digital Marketing Agency avec une conviction profonde: les marques ont besoin de plus qu'une simple présence en ligne. Elles ont besoin de stratégies marketing qui soient non seulement créatives et percutantes, mais aussi parfaitement alignées avec leurs objectifs et leur vision à long terme.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Fort de mon expérience dans le secteur et de ma passion pour le marketing, j'ai créé cette agence pour offrir des solutions sur-mesure qui allient performance, impact et excellence. Mon ambition est de donner aux entreprises, quelle que soit leur taille, les outils et les stratégies nécessaires pour se démarquer dans un monde digital en constante évolution.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Chez Clem Digital Marketing Agency, chaque action marketing est dirigée par moi-même, garantissant que chaque projet bénéficie d'une vision stratégique claire et d'une exécution impeccable. Mon rôle est de guider chaque étape, de la création de contenu à l'optimisation de la présence en ligne de nos clients, afin qu'ils puissent atteindre leurs objectifs et se distinguer sur le marché.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-primary">Notre Spécialité</h4>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Stratégie marketing et acquisition marketing</div>
                      <div className="text-sm text-gray-400">Approche data-driven et orientée ROI</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Entreprises de toutes tailles</div>
                      <div className="text-sm text-gray-400">De la startup à l'entreprise établie</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Stratégies orientées ROI</div>
                      <div className="text-sm text-gray-400">Chaque euro investi doit générer un retour mesurable</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Accompagnement personnalisé</div>
                      <div className="text-sm text-gray-400">Suivi direct par la fondatrice</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text mb-6">Nos Résultats</h3>
            <p className="text-xl text-gray-300">Performance globale de notre portfolio</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold gradient-text mb-2">+485%</div>
                <div className="text-gray-300 font-medium">ROI Moyen Portfolio</div>
                <div className="text-sm text-gray-400 mt-1">Tous secteurs confondus</div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-300 font-medium">Clients Accompagnés</div>
                <div className="text-sm text-gray-400 mt-1">5+ ans d'expertise</div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold gradient-text mb-2">€35M</div>
                <div className="text-gray-300 font-medium">CA Clients Généré</div>
                <div className="text-sm text-gray-400 mt-1">Croissance additionnelle</div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold gradient-text mb-2">97%</div>
                <div className="text-gray-300 font-medium">Taux Satisfaction</div>
                <div className="text-sm text-gray-400 mt-1">NPS Score +68</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold gradient-text mb-8">Contactez-moi</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-gray-300">
            <div className="flex items-center space-x-3 hover-lift">
              <MapPin className="h-5 w-5 text-primary" />
              <span>La Défense, Puteaux (Paris)</span>
            </div>
            <div className="flex items-center space-x-3 hover-lift">
              <Target className="h-5 w-5 text-primary" />
              <span>Spécialisation B2B & Acquisition Marketing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}