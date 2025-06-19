'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.4%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
              <CheckCircle className="w-4 h-4 mr-2" />
              Professional & Reliable Service
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                {t('getStarted')}
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                {t('learnMore')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">{t('aboutCustomers')}</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">{t('aboutServices')}</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">{t('aboutExperience')}</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { color: 'blue', label: 'Government Services' },
                    { color: 'emerald', label: 'Educational Forms' },
                    { color: 'orange', label: 'Business Registration' },
                    { color: 'purple', label: 'Certificate Services' },
                  ].map(({ color, label }) => (
                    <div key={label} className={`bg-${color}-50 p-4 rounded-lg`}>
                      <div className={`w-8 h-8 bg-${color}-600 rounded-full mb-2`}></div>
                      <div className="text-sm font-medium text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">सेतु</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">One-Stop Solution</h3>
                  <p className="text-sm text-gray-600">All services under one roof</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-200 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-orange-200 rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
