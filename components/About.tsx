'use client';

import React from 'react';
import { MapPin, Phone, Clock, Star, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    'Professional Service',
    'Quick Processing',
    'Guaranteed Results',
    'Expert Guidance',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted Service Provider
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutDesc')}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">{t('aboutOwner')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-medium text-gray-900">Dongaron Kawad</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <div>
                    <div className="text-sm text-gray-600">Experience</div>
                    <div className="font-medium text-gray-900">10+ Years</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="text-sm text-gray-600">Customers</div>
                    <div className="font-medium text-gray-900">500+ Happy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-100">{t('aboutExperience')}</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">35+</div>
                <div className="text-emerald-100">{t('aboutServices')}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-orange-100">{t('aboutCustomers')}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-purple-100">Success Rate</div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">सेतु</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sai Setu Suvidha Kendra</h3>
              <p className="text-gray-600 mb-4">Your Bridge to Government Services</p>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Rated 5/5 by customers</p>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-200 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}