'use client';

import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">सेतु</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('heroTitle')}</h3>
                <p className="text-gray-400 text-sm">Professional Service Center</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footerDesc')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Dongaron Kawad, Tq Phulambri, Dist Chhatrapati Sambhajinagar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+91 9767684236</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">info@saisetusuvidha.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">College Admissions</span></li>
              <li><span className="text-gray-300">Income Certificate</span></li>
              <li><span className="text-gray-300">Caste Certificate</span></li>
              <li><span className="text-gray-300">Business Registration</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sai Setu Suvidha Kendra. {t('allRights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}