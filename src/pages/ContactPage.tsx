import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Badge } from '../components/ui/badge'
import { Rocket, ArrowRight, Mail, Phone, MapPin, CheckCircle, Brain } from 'lucide-react'
import { blink } from '../blink/client'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    revenue: '',
    budget: '',
    challenge: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email notification to Clémance
      await blink.notifications.email({
        to: 'clem.digital.marketing@outlook.com',
        subject: `Nouvelle demande d'analyse stratégique - ${formData.company}`,
        html: `
          <h2>Nouvelle demande d'analyse stratégique</h2>
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Entreprise:</strong> ${formData.company}</p>
          <p><strong>Téléphone:</strong> ${formData.phone || 'Non renseigné'}</p>
          <p><strong>Chiffre d'affaires:</strong> ${formData.revenue || 'Non renseigné'}</p>
          <p><strong>Budget marketing:</strong> ${formData.budget || 'Non renseigné'}</p>
          <p><strong>Principal défi marketing:</strong></p>
          <p>${formData.challenge}</p>
          <hr>
          <p><em>Formulaire soumis le ${new Date().toLocaleString('fr-FR')}</em></p>
        `,
        text: `
          Nouvelle demande d'analyse stratégique
          
          Nom: ${formData.name}
          Email: ${formData.email}
          Entreprise: ${formData.company}
          Téléphone: ${formData.phone || 'Non renseigné'}
          Chiffre d'affaires: ${formData.revenue || 'Non renseigné'}
          Budget marketing: ${formData.budget || 'Non renseigné'}
          
          Principal défi marketing:
          ${formData.challenge}
          
          Formulaire soumis le ${new Date().toLocaleString('fr-FR')}
        `
      })

      // Redirect to Calendly
      window.open('https://calendly.com/clemdigitalmarketing/30min?month=2025-07', '_blank')
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      // Still redirect to Calendly even if email fails
      window.open('https://calendly.com/clemdigitalmarketing/30min?month=2025-07', '_blank')
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-animated text-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-xl p-12 border border-primary/20 hover-glow">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
            <h2 className="text-4xl font-bold gradient-text mb-6">Merci pour votre demande !</h2>
            <p className="text-xl text-gray-300 mb-8">
              Votre formulaire a été envoyé avec succès. Une nouvelle fenêtre s'est ouverte pour planifier votre appel découverte gratuit.
            </p>
            <p className="text-gray-400 mb-8">
              Si la fenêtre ne s'est pas ouverte, vous pouvez accéder directement à notre calendrier :
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 animate-glow"
              onClick={() => window.open('https://calendly.com/clemdigitalmarketing/30min?month=2025-07', '_blank')}
            >
              Planifier mon appel découverte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-animated text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40 animate-pulse mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Analyse Stratégique Gratuite
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Prêt à Transformer
              <span className="gradient-text block">Votre Marketing ?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Complétez notre formulaire d'analyse stratégique et bénéficiez d'un appel découverte offert. 
              Nous vous proposerons un plan d'action personnalisé pour générer plus de clients qualifiés et structurer votre croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-black/40 backdrop-blur-xl border-primary/20 hover-glow">
            <CardHeader>
              <CardTitle className="text-3xl text-center gradient-text">Formulaire d'Analyse Stratégique</CardTitle>
              <CardDescription className="text-center text-gray-300 text-lg">
                Obtenez votre diagnostic marketing personnalisé et planifiez votre appel découverte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nom & Prénom *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      className="bg-black/20 border-primary/40 text-white placeholder-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Professionnel *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vous@entreprise.com"
                      className="bg-black/20 border-primary/40 text-white placeholder-gray-400 h-12"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Entreprise *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nom de votre entreprise"
                      className="bg-black/20 border-primary/40 text-white placeholder-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+33 6 XX XX XX XX"
                      className="bg-black/20 border-primary/40 text-white placeholder-gray-400 h-12"
                    />
                  </div>
                </div>

                {/* Informations business */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Chiffre d'affaires annuel
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('revenue', value)}>
                      <SelectTrigger className="bg-black/20 border-primary/40 text-white h-12">
                        <SelectValue placeholder="Sélectionnez votre CA" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-primary/40">
                        <SelectItem value="moins-500k">Moins de 500K €</SelectItem>
                        <SelectItem value="500k-2m">500K - 2M €</SelectItem>
                        <SelectItem value="2m-10m">2M - 10M €</SelectItem>
                        <SelectItem value="10m-50m">10M - 50M €</SelectItem>
                        <SelectItem value="plus-50m">Plus de 50M €</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Marketing Mensuel
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                      <SelectTrigger className="bg-black/20 border-primary/40 text-white h-12">
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-primary/40">
                        <SelectItem value="moins-5k">Moins de 5K €</SelectItem>
                        <SelectItem value="5k-15k">5K - 15K €</SelectItem>
                        <SelectItem value="15k-50k">15K - 50K €</SelectItem>
                        <SelectItem value="50k-100k">50K - 100K €</SelectItem>
                        <SelectItem value="plus-100k">Plus de 100K €</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Défi marketing */}
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-2">
                    Principal Défi Marketing *
                  </label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={4}
                    value={formData.challenge}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre principal défi marketing : manque de leads qualifiés, CAC trop élevé, difficultés à mesurer le ROI, problèmes de conversion, etc."
                    className="bg-black/20 border-primary/40 text-white placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/80 animate-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 h-5 w-5" />
                      Obtenir mon analyse gratuite
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                  Après validation, vous serez redirigé vers notre calendrier pour planifier votre appel découverte gratuit.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">Ce que vous obtiendrez</h2>
            <p className="text-xl text-gray-300">Votre analyse stratégique gratuite comprend</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Audit 360°</h3>
                <p className="text-gray-300 text-sm">Analyse complète de votre écosystème digital et identification des quick wins</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Stratégie Data-Driven</h3>
                <p className="text-gray-300 text-sm">Roadmap personnalisée avec KPIs, budgets et timeline détaillés</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border-primary/20 hover-lift hover-glow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Plan d'Action</h3>
                <p className="text-gray-300 text-sm">Recommandations concrètes pour maximiser votre ROI marketing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold gradient-text mb-8">Besoin d'aide ?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-gray-300">
            <div className="flex items-center space-x-3 hover-lift">
              <Mail className="h-5 w-5 text-primary" />
              <span>clem.digital.marketing@outlook.com</span>
            </div>
            <div className="flex items-center space-x-3 hover-lift">
              <Phone className="h-5 w-5 text-primary" />
              <span>07 52 76 84 04</span>
            </div>
            <div className="flex items-center space-x-3 hover-lift">
              <MapPin className="h-5 w-5 text-primary" />
              <span>La Défense, Puteaux</span>
            </div>
          </div>
          <p className="text-gray-400 mt-8">
            Réponse garantie sous 24h • Appel découverte offert • ROI garanti ou remboursé*
          </p>
        </div>
      </section>
    </div>
  )
}