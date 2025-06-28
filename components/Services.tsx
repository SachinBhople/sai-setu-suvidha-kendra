



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
  Tractor,
  UserRound,
  Store
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import adrak1 from '@/assests/mahadbt/adrak.jpg';
import kandachal from "@/assests/mahadbt/kanda chalnew.jpg";
import tractor from "@/assests/mahadbt/tractor.jpg"
import falbag from "@/assests/mahadbt/falbag.jpg"
import karip from "@/assests/pikvima/kharip.jpg"
import rabbi from "@/assests/pikvima/rabbi.jpg"
import kamgar from "@/assests/bandhkam/worker.jpg";
import renew from "@/assests/bandhkam/renew.jpg";
import scholarship from "@/assests/bandhkam/schlorship.jpg";
import bandhe from "@/assests/bandhkam/bhande.jpg"
export default function Services() {
  const { t } = useLanguage();

  const whatsappNumber = '919767684236';

  const services = [
    {
      icon: GraduationCap,
      title: t('setuSuvidhaForms'),
      description: [
        { label: t('setuSuvidhaDesc1'), whatsappText: 'राहिवास प्रमाणपत्र', img: '/icons/residence.png' },
        { label: t('setuSuvidhaDesc2'), whatsappText: 'उत्पन्नाचा दाखला', img: '/icons/income.png' },
        { label: t('setuSuvidhaDesc3'), whatsappText: 'जात प्रमाणपत्र', img: 'data:image/jpeg;base64,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' },
        { label: t('setuSuvidhaDesc4'), whatsappText: 'वय, राष्ट्रीयता आणि अधिवास प्रमाणपत्र', img: '/icons/nationality.png' },
        { label: t('setuSuvidhaDesc5'), whatsappText: 'इडब्ल्यूएस प्रमाणपत्र', img: '/icons/ews.png' },
      ],
      morwinfo: t('setuSuvidhaMoreInfo'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Tractor,
      title: t('mahadbtForms'),
      description: [
        {
          label: t('mahadbtdesc1'), whatsappText: 'आले पीकासाठी अनुदान',
          img: adrak1
        },
        {
          label: t('mahadbtdesc2'), whatsappText: 'कांदा चाळीसाठी अनुदान',
          img: kandachal
        },
        { label: t('mahadbtdesc3'), whatsappText: 'ट्रॅक्टर अनुदान', img: tractor },
        { label: t('mahadbtdesc4'), whatsappText: 'फळबाग लागवडीसाठी अनुदान', img: falbag },
      ],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Tractor,
      title: t('pikvimaform'),
      description: [
        { label: t('pikvimadesc1'), whatsappText: 'रब्बी हंगाम', img: rabbi },
        { label: t('pikvimadesc2'), whatsappText: 'खरीप हंगाम ', img: karip },
        { label: t('pikvimadesc3'), whatsappText: 'फळबाग पीकविमा ', img: falbag },
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },

    {
      icon: UserRound,
      title: t('bandkamkamgarform'),
      description: [
        { label: t('bandkamkamgardesc1'), whatsappText: 'बांधकाम कामगार नवीन नोंदणी', img: kamgar },
        { label: t('bandkamkamgardesc2'), whatsappText: 'बांधकाम कामगार नूतनीकरण फॉर्म ', img: renew },
        { label: t('bandkamkamgardesc3'), whatsappText: 'बांधकाम कामगारच्या मुलांसाठी शिष्यवृत्ती अर्ज ', img: scholarship },
        { label: t('bandkamkamgardesc4'), whatsappText: 'नोंदीत बांधकाम कामगारांना  मिळणाऱ्या भांडी संच साठी अर्ज ', img: bandhe },
      ],
      gradient: 'from-blue-500 to-blue-600'
    },

    {
      icon: UserRound,
      title: t('farmerIdform'),
      description: t('farmerIddesc'),
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
    // {
    //   icon: DollarSign,
    //   title: t('incomeCert'),
    //   description: t('incomeDesc'),
    //   gradient: 'from-purple-500 to-purple-600'
    // },
    // {
    //   icon: Home,
    //   title: t('residenceCert'),
    //   description: t('residenceDesc'),
    //   gradient: 'from-indigo-500 to-indigo-600'
    // },
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

    {
      icon: Store,
      title: t('shopact'),
      description: t('shopactDesc'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: UserRound,
      title: t('oldpeopleform'),
      description: t('oldpeopleformdesc'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: UserRound,
      title: t('sanjaygandhiFrom'),
      description: t('sanjaygandhidesc'),
      gradient: 'from-green-500 to-green-600'
    },
  ];

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
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {Array.isArray(service.description) ? (
                  <ol className="space-y-2 text-sm">
                    {service.description.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 group hover:text-blue-700 transition-colors duration-200"
                        >
                          {item.img && (
                            <img
                              src={typeof item.img === 'object' ? item.img.src : item.img}
                              alt={item.label}
                              className="w-14 h-14 rounded-full object-contain border border-gray-300 group-hover:scale-110 transition-transform duration-200"
                            />
                          )}
                          <span className='ms-6' >{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                )}

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
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
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
