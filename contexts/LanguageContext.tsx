'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Sai Setu Suvidha Kendra',
    address: 'Dongargaon Kawad, Tq Phulambri, Dist Chhatrapati Sambhajinagar',
    heroSubtitle: 'Your Trusted Partner for Government Services & Educational Applications',
    ctaButton: 'Get Started',
    heroDescription: 'Complete assistance for certificates, admissions, scholarships, and business registrations. Professional service with guaranteed results.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',

    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Complete range of government and educational services',

    // Service Items
    setuSuvidhaForms: 'Setu  Suvidha',
    setuSuvidhaDesc1: 'Residence Certificate,  ',
    setuSuvidhaDesc2: ' Income Certificate  ',
    setuSuvidhaDesc3: 'Caste Certificate ',
    setuSuvidhaDesc4: 'Age, Nationality and Domicile Certificate ',
    setuSuvidhaDesc5: 'Ews Certificate ',


    mahadbtForms: 'Mahadbt Schemes',
    mahadbtdesc1: 'Subsidy for ginger crop,  ',
    mahadbtdesc2: ' onion paddy  ',
    mahadbtdesc3: 'tractor subsidy ',
    mahadbtdesc4: 'orchard cultivation ',
    mahadbtdesc5: 'drip irrigation ',

    pikvimaform: 'Crop Insurance Schemes',
    pikvimadesc1: 'Rabbi Season ',
    pikvimadesc2: 'Kharif Season ',
    pikvimadesc3: 'Orchard crop insurance ',


    bandkamkamgarform: 'Construction Worker Form',
    bandkamkamgardesc1: 'Construction Worker Registration',
    bandkamkamgardesc2: 'Construction Worker Renewal Form',
    bandkamkamgardesc3: 'Scholarship Application for Children of Construction Workers',
    bandkamkamgardesc4: 'Utensil Set Application for Registered Construction Workers',

    farmerIdform: 'Farmer ID Application',
    farmerIddesc: 'To receive the ₹2000 installment under PM-Kisan, obtaining a Farmer ID is mandatory.',

    admissionForms: 'College Admission Forms',
    admissionDesc: 'Assistance with admission applications for all colleges and universities',

    scholarshipForms: 'Scholarship Applications',
    scholarshipDesc: 'Help with various scholarship applications and documentation',

    govExamForms: 'Government Exam Forms',
    govExamDesc: 'Registration for competitive exams and government job applications',
    incomeCert: 'Income Certificate',
    incomeDesc: 'Apply for income certificate with proper documentation',
    residenceCert: 'Residence Certificate',
    residenceDesc: 'Get your residence certificate processed quickly',
    ewsCert: 'EWS Certificate',
    ewsDesc: 'Economically Weaker Section certificate application',
    casteCert: 'Caste Certificate',
    casteDesc: 'Caste certificate and validity certificate services',
    casteValidity: 'Caste Validity Certificate',
    casteValidityDesc: 'Caste validity verification and certificate',
    udyogAadhar: 'Udyog Aadhaar Registration',
    udyogDesc: 'Business registration and Udyog Aadhaar application',
    annasahebPatil: 'Annasaheb Patil Application',
    annasahebDesc: 'Assistance with Annasaheb Patil scheme applications',
    panCard: 'PAN Card Services',
    panDesc: 'New PAN card application and corrections',
    aadhaar: 'Aadhaar Services',
    aadhaarDesc: 'Aadhaar enrollment, updates, and corrections',
    shopact: 'Shop Act Registration',
    shopactDesc: 'We help you with new Shop Act registration and renewal quickly and hassle-free.',
    oldpeopleform: 'Senior Artist Pension Scheme',
    oldpeopleformdesc: 'You can avail the benefits by filling the Senior Artist Pension Scheme form.',
    sanjaygandhiFrom: 'Sanjay Gandhi Niradhar and Shravan Bal Scheme',
    sanjaygandhidesc: 'You can avail the benefits of the Sanjay Gandhi Niradhar and Shravan Bal Scheme by submitting the application form.',

    // About
    aboutTitle: 'About Sai Setu Suvidha Kendra',
    aboutDesc: 'Located in Dongargaon Kawad, Tq Phulambri, Dist Chhatrapati Sambhajinagar, we have been serving the community with reliable government and educational services. Our experienced team ensures hassle-free processing of all your important documents.',
    aboutOwner: 'Proprietor: Raju Bodke',
    aboutExperience: 'Years of Experience',
    aboutServices: 'Services Offered',
    aboutCustomers: 'Happy Customers',

    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch for any assistance',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactHours: 'Working Hours',
    contactHoursTime: 'Mon - Sat: 9:00 AM - 7:00 PM',

    // Form
    inquiryForm: 'Send Inquiry',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    service: 'Select Service',
    message: 'Message',
    submit: 'Submit Inquiry',

    // Footer
    footerDesc: 'Your trusted partner for all government services and educational assistance.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRights: 'All rights reserved.',
  },
  hi: {
    // Header
    home: 'होम',
    services: 'सेवाएं',
    about: 'हमारे बारे में',
    contact: 'संपर्क',

    // Hero Section
    heroTitle: 'साई डिजिटल ऑनलाईन सेवा केंद्र ',
    address: 'डोंगरगाव  कवाड, तालुका फुलंब्री, जिल्हा छत्रपती संभाजीनगर',
    heroSubtitle: 'सरकारी सेवाओं और शैक्षणिक आवेदनों के लिए आपका विश्वसनीय साझेदार',
    ctaButton: 'शुरू करें',
    heroDescription: 'प्रमाणपत्र, प्रवेश, छात्रवृत्ति और व्यापार पंजीकरण के लिए पूर्ण सहायता। गारंटीशुदा परिणाम के साथ पेशेवर सेवा।',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',

    // Services
    servicesTitle: 'हमारी सेवाएं',
    servicesSubtitle: 'सरकारी और शैक्षणिक सेवाओं की पूरी श्रृंखला',

    // Service Items
    setuSuvidhaForms: ' सेतु सुविधा',
    setuSuvidhaDesc1: 'निवास प्रमाण पत्र,  ',
    setuSuvidhaDesc2: ' आय प्रमाण पत्र  ',
    setuSuvidhaDesc3: 'जाति प्रमाण पत्र ',
    setuSuvidhaDesc4: 'आयु, राष्ट्रीयता और निवास प्रमाणपत्र',
    setuSuvidhaDesc5: 'ईडब्ल्यूएस प्रमाणपत्र',

    mahadbtForms: 'महाडीबीटी योजनाएँ',
    mahadbtdesc1: 'अदरक फसल के लिए सब्सिडी',
    mahadbtdesc2: 'प्याज और धान के लिए सब्सिडी',
    mahadbtdesc3: 'ट्रैक्टर सब्सिडी',
    mahadbtdesc4: 'बागवानी के लिए सब्सिडी',
    mahadbtdesc5: 'ड्रिप सिंचाई के लिए सब्सिडी',

    pikvimaform: 'फसल बीमा योजनाएँ',
    pikvimadesc1: 'रबी मौसम ',
    pikvimadesc2: 'खरीफ मौसम ',
    pikvimadesc3: 'बाग़ फसल बीमा ',


    bandkamkamgarform: 'बांधकाम कामगार फॉर्म',
    bandkamkamgardesc1: 'बांधकाम श्रमिक पंजीकरण',
    bandkamkamgardesc2: 'बांधकाम श्रमिक नवीनीकरण फॉर्म',
    bandkamkamgardesc3: 'बांधकाम श्रमिकों के बच्चों के लिए छात्रवृत्ति आवेदन',
    bandkamkamgardesc4: 'पंजीकृत श्रमिकों को मिलने वाले बर्तन सेट के लिए आवेदन फॉर्म',


    farmerIdform: 'किसान आईडी आवेदन',
    farmerIddesc: 'पीएम किसान की ₹2000 किस्त प्राप्त करने के लिए किसान आईडी बनवाना आवश्यक है।',

    admissionForms: 'कॉलेज प्रवेश फॉर्म',
    admissionDesc: 'सभी कॉलेजों और विश्वविद्यालयों के लिए प्रवेश आवेदन में सहायता',
    scholarshipForms: 'छात्रवृत्ति आवेदन',
    scholarshipDesc: 'विभिन्न छात्रवृत्ति आवेदन और दस्तावेजीकरण में सहायता',
    govExamForms: 'सरकारी परीक्षा फॉर्म',
    govExamDesc: 'प्रतियोगी परीक्षाओं और सरकारी नौकरी आवेदनों के लिए पंजीकरण',
    incomeCert: 'आय प्रमाणपत्र',
    incomeDesc: 'उचित दस्तावेजीकरण के साथ आय प्रमाणपत्र के लिए आवेदन',
    residenceCert: 'निवास प्रमाणपत्र',
    residenceDesc: 'अपना निवास प्रमाणपत्र जल्दी प्रोसेस कराएं',
    ewsCert: 'ईडब्ल्यूएस प्रमाणपत्र',
    ewsDesc: 'आर्थिक रूप से कमजोर वर्ग प्रमाणपत्र आवेदन',
    casteCert: 'जाति प्रमाणपत्र',
    casteDesc: 'जाति प्रमाणपत्र और वैधता प्रमाणपत्र सेवाएं',
    casteValidity: 'जाति वैधता प्रमाणपत्र',
    casteValidityDesc: 'जाति वैधता सत्यापन और प्रमाणपत्र',
    udyogAadhar: 'उद्योग आधार पंजीकरण',
    udyogDesc: 'व्यापार पंजीकरण और उद्योग आधार आवेदन',
    annasahebPatil: 'अन्नासाहेब पाटिल आवेदन',
    annasahebDesc: 'अन्नासाहेब पाटिल योजना आवेदनों में सहायता',
    panCard: 'पैन कार्ड सेवाएं',
    panDesc: 'नया पैन कार्ड आवेदन और सुधार',
    aadhaar: 'आधार सेवाएं',
    aadhaarDesc: 'आधार नामांकन, अपडेट और सुधार',
    shopact: 'दुकान अधिनियम पंजीकरण',
    shopactDesc: 'हम आपकी नई दुकान अधिनियम पंजीकरण और नवीनीकरण की प्रक्रिया आसान और जल्दी पूरी करते हैं।',
    oldpeopleform: 'वरिष्ठ कलाकार मानधन योजना',
    oldpeopleformdesc: 'वरिष्ठ कलाकार मानधन योजना का फॉर्म भरकर लाभ प्राप्त किया जा सकता है।',
    sanjaygandhiFrom: 'संजय गांधी निराश्रित एवं श्रावण बाल योजना',
    sanjaygandhidesc: 'संजय गांधी निराश्रित एवं श्रावण बाल योजना का लाभ आवेदन करके प्राप्त किया जा सकता है।',

    // About
    aboutTitle: 'साई डिजिटल ऑनलाईन सेवा केंद्र  के बारे में',
    aboutDesc: 'डोंगरगाव  कवाड़, तहसील फुलंब्री, जिला छत्रपति संभाजीनगर में स्थित, हम विश्वसनीय सरकारी और शैक्षणिक सेवाओं के साथ समुदाय की सेवा कर रहे हैं। हमारी अनुभवी टीम आपके सभी महत्वपूर्ण दस्तावेजों की परेशानी-मुक्त प्रक्रिया सुनिश्चित करती है।',
    aboutOwner: 'मालिक: राजू बोडके',
    aboutExperience: 'वर्षों का अनुभव',
    aboutServices: 'सेवाएं उपलब्ध',
    aboutCustomers: 'खुश ग्राहक',

    // Contact
    contactTitle: 'संपर्क करें',
    contactSubtitle: 'किसी भी सहायता के लिए संपर्क करें',
    contactAddress: 'पता',
    contactPhone: 'फोन',
    contactEmail: 'ईमेल',
    contactHours: 'कार्य समय',
    contactHoursTime: 'सोम - शनि: सुबह 9:00 - शाम 7:00',

    // Form
    inquiryForm: 'पूछताछ भेजें',
    name: 'पूरा नाम',
    email: 'ईमेल पता',
    phone: 'फोन नंबर',
    service: 'सेवा चुनें',
    message: 'संदेश',
    submit: 'पूछताछ भेजें',

    // Footer
    footerDesc: 'सभी सरकारी सेवाओं और शैक्षणिक सहायता के लिए आपका विश्वसनीय साझेदार।',
    quickLinks: 'त्वरित लिंक',
    followUs: 'हमें फॉलो करें',
    allRights: 'सभी अधिकार सुरक्षित।',
  },
  mr: {
    // Header
    home: 'मुख्यपृष्ठ',
    services: 'सेवा',
    about: 'आमच्याबद्दल',
    contact: 'संपर्क',

    // Hero Section
    heroTitle: 'साई डिजिटल ऑनलाईन सेवा केंद्र ',
    address: 'डोंगरगाव  कवाड, तालुका फुलंब्री, जिल्हा छत्रपती संभाजीनगर',
    heroSubtitle: 'सरकारी सेवा आणि शैक्षणिक अर्जांसाठी तुमचा विश्वासार्ह भागीदार',
    ctaButton: 'सुरुवात करा',
    heroDescription: 'प्रमाणपत्रे, प्रवेश, शिष्यवृत्ती आणि व्यवसाय नोंदणीसाठी संपूर्ण सहाय्य। हमीशुदा परिणामासह व्यावसायिक सेवा.',
    getStarted: 'सुरुवात करा',
    learnMore: 'अधिक जाणून घ्या',

    // Services
    servicesTitle: 'आमच्या सेवा',
    servicesSubtitle: 'सरकारी आणि शैक्षणिक सेवांची संपूर्ण श्रेणी',

    // Service Items
    setuSuvidhaForms: 'सेतु सुविधा',
    setuSuvidhaDesc1: 'रहिवासी,  ',
    setuSuvidhaDesc2: ' उत्त्पन्न दाखला  ',
    setuSuvidhaDesc3: 'जात प्रमाणपत्र ',
    setuSuvidhaDesc4: 'वय, राष्ट्रीयता आणि अधिवास प्रमाणपत्र',
    setuSuvidhaDesc5: 'इडब्ल्यूएस प्रमाणपत्र',


    mahadbtForms: 'महाडीबीटी योजना',
    mahadbtdesc1: 'आले पीकासाठी अनुदान',
    mahadbtdesc2: 'कांदा चाळीसाठी अनुदान',
    mahadbtdesc3: 'ट्रॅक्टर अनुदान',
    mahadbtdesc4: 'फळबाग लागवडीसाठी अनुदान',
    mahadbtdesc5: 'ठिबक सिंचनासाठी अनुदान',

    pikvimaform: 'पीक विमा योजना',
    pikvimadesc1: 'रब्बी हंगाम ',
    pikvimadesc2: 'खरीप हंगाम ',
    pikvimadesc3: 'फळबाग पीकविमा  ',


    bandkamkamgarform: 'बांधकाम कामगार फॉर्म',
    bandkamkamgardesc1: 'बांधकाम कामगार नवीन नोंदणी',
    bandkamkamgardesc2: 'बांधकाम कामगार नूतनीकरण फॉर्म',
    bandkamkamgardesc3: 'बांधकाम कामगारच्या मुलांसाठी शिष्यवृत्ती अर्ज',
    bandkamkamgardesc4: 'नोंदीत बांधकाम कामगारांना  मिळणाऱ्या भांडी संच साठी अर्ज ',



    admissionForms: 'महाविद्यालयीन प्रवेश फॉर्म',
    admissionDesc: 'सर्व महाविद्यालये आणि विद्यापीठांसाठी प्रवेश अर्जामध्ये सहाय्य',


    farmerIdform: 'फार्मर आयडी  अर्ज',
    farmerIddesc: 'यानंतर पीएम किसान चे २००० पाहिजे असेल तर फार्मर आयडी काढणे आवश्यक आहे ',


    scholarshipForms: 'शिष्यवृत्ती अर्ज',
    scholarshipDesc: 'विविध शिष्यवृत्ती अर्ज आणि कागदपत्रांमध्ये मदत',
    govExamForms: 'शासकीय परीक्षा फॉर्म',
    govExamDesc: 'स्पर्धा परीक्षा आणि शासकीय नोकरी अर्जांसाठी नोंदणी',
    incomeCert: 'उत्पन्न प्रमाणपत्र',
    incomeDesc: 'योग्य कागदपत्रांसह उत्पन्न प्रमाणपत्रासाठी अर्ज',
    residenceCert: 'निवास प्रमाणपत्र',
    residenceDesc: 'तुमचे निवास प्रमाणपत्र लवकर प्रक्रिया करा',
    ewsCert: 'EWS प्रमाणपत्र',
    ewsDesc: 'आर्थिकदृष्ट्या कमकुवत घटक प्रमाणपत्र अर्ज',
    casteCert: 'जात प्रमाणपत्र',
    casteDesc: 'जात प्रमाणपत्र आणि वैधता प्रमाणपत्र सेवा',
    casteValidity: 'जात वैधता प्रमाणपत्र',
    casteValidityDesc: 'जात वैधता पडताळणी आणि प्रमाणपत्र',
    udyogAadhar: 'उद्योग आधार नोंदणी',
    udyogDesc: 'व्यवसाय नोंदणी आणि उद्योग आधार अर्ज',
    annasahebPatil: 'अण्णासाहेब पाटील अर्ज',
    annasahebDesc: 'अण्णासाहेब पाटील योजना अर्जांमध्ये सहाय्य',
    panCard: 'पॅन कार्ड सेवा',
    panDesc: 'नवीन पॅन कार्ड अर्ज आणि सुधारणा',
    aadhaar: 'आधार सेवा',
    aadhaarDesc: 'आधार नावनोंदणी, अपडेट आणि सुधारणा',

    shopact: 'Shop Act नोंदणी',
    shopactDesc: 'आम्ही नवीन Shop Act नोंदणी आणि नूतनीकरण जलद व सोप्या पद्धतीने करून देतो.',

    oldpeopleform: 'वयोवृद्ध कलावंत मानधन योजना ',
    oldpeopleformdesc: 'वयोवृद्ध कलावंत मानधन योजना फॉर्म भरून मिळेल .',

    sanjaygandhiFrom: 'संजय गांधी निराधार व श्रावण बाळ योजना  ',
    sanjaygandhidesc: 'संजय गांधी निराधार व श्रावण बाळ योजना अर्ज करून मिळेल  .',


    // About
    aboutTitle: 'साई डिजिटल ऑनलाईन सेवा केंद्राबद्दल',
    aboutDesc: ' डोंगरगाव कवाड, तालुका फुलंब्री, जिल्हा छत्रपती संभाजीनगर येथे स्थित, आम्ही विश्वसनीय सरकारी आणि शैक्षणिक सेवांसह समुदायाची सेवा करत आहोत. आमची अनुभवी टीम तुमच्या सर्व महत्त्वाच्या कागदपत्रांची त्रासरहित प्रक्रिया सुनिश्चित करते.',
    aboutOwner: 'मालक: राजू बोडके',
    aboutExperience: 'वर्षांचा अनुभव',
    aboutServices: 'सेवा उपलब्ध',
    aboutCustomers: 'समाधानी ग्राहक',

    // Contact
    contactTitle: 'संपर्क साधा',
    contactSubtitle: 'कोणत्याही सहाय्यासाठी संपर्क साधा',
    contactAddress: 'पत्ता',
    contactPhone: 'फोन',
    contactEmail: 'ईमेल',
    contactHours: 'कामाचे तास',
    contactHoursTime: 'सोम - शनि: सकाळी 9:00 - संध्याकाळी 7:00',

    // Form
    inquiryForm: 'चौकशी पाठवा',
    name: 'पूर्ण नाव',
    email: 'ईमेल पत्ता',
    phone: 'फोन नंबर',
    service: 'सेवा निवडा',
    message: 'संदेश',
    submit: 'चौकशी सबमिट करा',

    // Footer
    footerDesc: 'सर्व सरकारी सेवा आणि शैक्षणिक सहाय्यासाठी तुमचा विश्वसनीय भागीदार.',
    quickLinks: 'द्रुत दुवे',
    followUs: 'आमचे अनुसरण करा',
    allRights: 'सर्व हक्क राखीव.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('mr'); // Default to Marathi

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}