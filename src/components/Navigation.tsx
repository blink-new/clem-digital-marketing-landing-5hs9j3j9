import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="relative z-50 border-b border-primary/20 bg-black/50 backdrop-blur-xl sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => onPageChange('home')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Clem Digital
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`transition-all duration-300 hover:scale-105 ${
                  currentPage === item.id 
                    ? 'text-primary font-semibold' 
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden md:block bg-primary hover:bg-primary/80 animate-glow" 
            onClick={() => onPageChange('contact')}
          >
            Analyse Gratuite
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-primary/20">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full text-left py-2 transition-colors ${
                    currentPage === item.id 
                      ? 'text-primary font-semibold' 
                      : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full mt-4 bg-primary hover:bg-primary/80" 
                onClick={() => {
                  onPageChange('contact')
                  setIsMenuOpen(false)
                }}
              >
                Analyse Gratuite
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}