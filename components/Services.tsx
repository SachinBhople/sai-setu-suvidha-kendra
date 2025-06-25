

'use client';

import React from 'react';
import {
  GraduationCap,
  Award,
  FileText,
  DollarSign,
  Home,
  Users,
  AlignCenterVertical as Certificate,
  CheckSquare,
  Building2,
  CreditCard,
  UserCheck,
  BookOpen,
  Tractor
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: GraduationCap,
      title: t('setuSuvidhaForms'),
      description: [
        { label: t('setuSuvidhaDesc1'), whatsappText: 'राहिवास प्रमाणपत्र' },
        { label: t('setuSuvidhaDesc2'), whatsappText: 'उत्पन्नाचा दाखला' },
        { label: t('setuSuvidhaDesc3'), whatsappText: 'जात प्रमाणपत्र' },
        { label: t('setuSuvidhaDesc4'), whatsappText: 'वय, राष्ट्रीयता आणि अधिवास प्रमाणपत्र' },
        { label: t('setuSuvidhaDesc5'), whatsappText: 'इडब्ल्यूएस प्रमाणपत्र' },
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Tractor,
      title: t('mahadbtForms'),
      description: [
        { label: t('mahadbtdesc1'), whatsappText: 'आले पीकासाठी अनुदान' },
        { label: t('mahadbtdesc2'), whatsappText: 'कांदा चाळीसाठी अनुदान' },
        { label: t('mahadbtdesc3'), whatsappText: 'ट्रॅक्टर अनुदान' },
        { label: t('mahadbtdesc4'), whatsappText: 'फळबाग लागवडीसाठी अनुदान' },
        { label: t('mahadbtdesc5'), whatsappText: 'ठिबक सिंचनासाठी अनुदान' },
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Tractor,
      title: t('pikvimaform'),
      description: [
        { label: t('pikvimadesc1'), whatsappText: 'रब्बी हंगाम ' },
        { label: t('pikvimadesc2'), whatsappText: 'खरीप हंगाम' },


      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: t('admissionForms'),
      description: t('admissionDesc'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: t('scholarshipForms'),
      description: t('scholarshipDesc'),
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FileText,
      title: t('govExamForms'),
      description: t('govExamDesc'),
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: t('incomeCert'),
      description: t('incomeDesc'),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Home,
      title: t('residenceCert'),
      description: t('residenceDesc'),
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: t('ewsCert'),
      description: t('ewsDesc'),
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Certificate,
      title: t('casteCert'),
      description: t('casteDesc'),
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: CheckSquare,
      title: t('casteValidity'),
      description: t('casteValidityDesc'),
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Building2,
      title: t('udyogAadhar'),
      description: t('udyogDesc'),
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: BookOpen,
      title: t('annasahebPatil'),
      description: t('annasahebDesc'),
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      icon: CreditCard,
      title: t('panCard'),
      description: t('panDesc'),
      gradient: 'from-violet-500 to-violet-600'
    },
    {
      icon: UserCheck,
      title: t('aadhaar'),
      description: t('aadhaarDesc'),
      gradient: 'from-green-500 to-green-600'
    },
  ];

  const whatsappNumber = '919767684236'; // Replace with your actual WhatsApp number

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {Array.isArray(service.description) ? (
                  <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1">
                    {service.description.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                )}

                {/* <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    Learn More →
                  </button>
                </div> */}

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I want help with: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors inline-block"
                  >
                    Learn More →
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with Any Service?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experienced team is ready to assist you with all your government and educational service needs. Get professional guidance and guaranteed results.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
