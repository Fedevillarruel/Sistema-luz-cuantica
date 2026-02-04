export type Language = 'es' | 'en' | 'pt';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    ctaEvaluation: string;
    ctaVideo: string;
    scrollLabel: string;
  };
  header: {
    services: string;
    pricing: string;
    protocol: string;
    faq: string;
    contact: string;
    requestEvaluation: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    sectionDescription: string;
    priceConfirmEvaluation: string;
    priceConfirmWhatsApp: string;
    featured: string;
    viewDetails: string;
    accessNote: string;
    amount: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    intro: string;
    paymentMethods: string;
    importantNotes: string;
    note1: string;
    note2: string;
    note3: string;
    viewPaymentMethods: string;
    paymentsModalTitle: string;
    noMethodsAvailable: string;
    paymentNotice: string;
  };
  protocol: {
    title: string;
    subtitle: string;
    readProtocol: string;
    viewSummary: string;
    description: string;
    beforeSubmit: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  footer: {
    brand: string;
    brandSubtitle: string;
    legal: string;
    contact: string;
    terms: string;
    privacy: string;
    cookies: string;
    disclaimer: string;
    refunds: string;
    cookieSettings: string;
    email: string;
    whatsapp: string;
    copyright: string;
  };
  common: {
    learnMore: string;
    close: string;
    accept: string;
    reject: string;
    configure: string;
    copy: string;
    copied: string;
    loading: string;
    error: string;
    success: string;
    back: string;
    save: string;
    send: string;
    sending: string;
    cancel: string;
    confirm: string;
  };
  forms: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    acceptProtocol: string;
    required: string;
    emailInvalid: string;
    nameMinLength: string;
    countryMinLength: string;
    whatsappMinLength: string;
    messageMinLength: string;
    mustAcceptProtocol: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
    whatsappNote: string;
  };
  bioLinkAnimal: {
    responsibleName: string;
    responsibleEmail: string;
    responsibleWhatsApp: string;
    animalName: string;
    animalNamePlaceholder: string;
    species: string;
    speciesPlaceholder: string;
    age: string;
    agePlaceholder: string;
    veterinaryStatus: string;
    veterinaryYes: string;
    veterinaryNo: string;
    context: string;
    contextPlaceholder: string;
    acceptProtocol: string;
    acceptDisclaimer: string;
    protocolText: string;
    disclaimerText: string;
    sendButton: string;
    sendingButton: string;
    successMessage: string;
    contextMinLength: string;
  };
  bioLinkHabitat: {
    company: string;
    companyPlaceholder: string;
    taxId: string;
    taxIdPlaceholder: string;
    contactName: string;
    contactRole: string;
    rolePlaceholder: string;
    contactEmail: string;
    contactWhatsApp: string;
    assetType: string;
    assetTypeSpace: string;
    assetTypeVehicle: string;
    assetTypeMachinery: string;
    assetTypeOther: string;
    assetLocation: string;
    assetLocationPlaceholder: string;
    objective: string;
    objectivePlaceholder: string;
    acceptProtocol: string;
    acceptNoGuarantees: string;
    protocolText: string;
    noGuaranteesText: string;
    sendButton: string;
    sendingButton: string;
    successMessage: string;
    objectiveMinLength: string;
  };
  cookies: {
    bannerTitle: string;
    bannerDescription: string;
    moreInfo: string;
    necessary: string;
    necessaryDescription: string;
    alwaysActive: string;
    analytics: string;
    analyticsDescription: string;
    marketing: string;
    marketingDescription: string;
    allow: string;
    active: string;
    acceptAll: string;
    rejectAll: string;
    configure: string;
    save: string;
    back: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    hero: {
      title: 'Descubrí el Poder del Sistema de Luz Cuántica ©',
      subtitle: 'Estructura técnica de transformación consciente. Arquitectura matriz cerrada, protocolos definidos, límites claros.',
      ctaEvaluation: 'Solicitar Evaluación Energética',
      ctaVideo: 'Ver Presentación',
      scrollLabel: 'Explorar',
    },
    header: {
      services: 'Servicios',
      pricing: 'Precios',
      protocol: 'Protocolo',
      faq: 'FAQ',
      contact: 'Contacto',
      requestEvaluation: 'Solicitar Evaluación',
    },
    services: {
      sectionTitle: 'Un catálogo de intervención con criterios de acceso.',
      sectionSubtitle: 'Servicios del sistema',
      sectionDescription: 'La Evaluación Energética es el punto de partida para determinar compatibilidad y trazar el protocolo coherente. La única excepción de compra directa es Reiki Energy Quantum.',
      priceConfirmEvaluation: 'Precio a confirmar tras evaluación',
      priceConfirmWhatsApp: 'Precio a confirmar por WhatsApp',
      featured: 'Destacado',
      viewDetails: 'Ver detalle',
      accessNote: 'Acceso sujeto a Evaluación previa y derecho de admisión. No hay garantías.',
      amount: 'Monto',
    },
    pricing: {
      title: 'Estructura de Inversión',
      subtitle: 'Información de pagos y medios habilitados',
      intro: 'El monto y medio de pago se confirma por WhatsApp tras completar el formulario correspondiente. Consulta por región y disponibilidad.',
      paymentMethods: 'Medios de Pago Habilitados',
      importantNotes: 'Notas Importantes',
      note1: 'Reiki Energy Quantum es la única reserva directa (sin evaluación previa obligatoria).',
      note2: 'El resto de servicios requieren Evaluación Energética y están sujetos a derecho de admisión.',
      note3: 'Todos los pagos son NO reembolsables. Al solicitar aceptás el Protocolo de Ingreso.',
      viewPaymentMethods: 'Ver Medios de Pago',
      paymentsModalTitle: 'Medios de pago',
      noMethodsAvailable: 'No hay métodos configurados para esta región todavía.',
      paymentNotice: 'Pagos: definitivos y no reembolsables. El envío de comprobante es requerido para confirmar agenda.',
    },
    protocol: {
      title: 'Protocolo de Ingreso',
      subtitle: 'Estructura operativa y condiciones de acceso',
      readProtocol: 'Leer Protocolo Completo',
      viewSummary: 'Ver Resumen',
      description: 'Un marco explícito para evitar confusiones: límites, criterios, conducta y condiciones. Se debe aceptar antes de iniciar cualquier proceso.',
      beforeSubmit: 'Antes de enviar cualquier formulario se solicita aceptación explícita del protocolo. Podés leerlo completo aquí.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las consultas más comunes',
    },
    footer: {
      brand: 'Sistema Luz Cuántica',
      brandSubtitle: 'S.L.C.',
      legal: 'Legal',
      contact: 'Contacto',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies',
      disclaimer: 'Disclaimer',
      refunds: 'Política de Reembolsos',
      cookieSettings: 'Configuración de Cookies',
      email: 'Email',
      whatsapp: 'WhatsApp',
      copyright: 'Todos los derechos reservados.',
    },
    common: {
      learnMore: 'Más información',
      close: 'Cerrar',
      accept: 'Aceptar',
      reject: 'Rechazar',
      configure: 'Configurar',
      copy: 'Copiar',
      copied: 'Copiado',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      back: 'Volver',
      save: 'Guardar',
      send: 'Enviar',
      sending: 'Enviando...',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
    },
    forms: {
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Juan Pérez',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      countryLabel: 'País',
      countryPlaceholder: 'Argentina',
      whatsappLabel: 'WhatsApp',
      whatsappPlaceholder: '+54 9 11 1234-5678',
      messageLabel: 'Mensaje / Motivo',
      messagePlaceholder: 'Contanos por qué querés solicitar una evaluación...',
      acceptProtocol: 'Acepto el Protocolo de Ingreso',
      required: '*',
      emailInvalid: 'Email inválido',
      nameMinLength: 'Nombre requerido (mínimo 2 caracteres)',
      countryMinLength: 'País requerido',
      whatsappMinLength: 'WhatsApp requerido',
      messageMinLength: 'Por favor describe tu motivo (mínimo 20 caracteres)',
      mustAcceptProtocol: 'Debes aceptar el protocolo',
      submitButton: 'Enviar Solicitud',
      submittingButton: 'Enviando...',
      successTitle: 'Listo. Abrimos WhatsApp con tu solicitud',
      successDescription: 'Revisá el mensaje y enviá para confirmar.',
      errorTitle: 'No pudimos abrir WhatsApp',
      errorDescription: 'Por favor, intentá nuevamente o desactivá el bloqueador de popups.',
      whatsappNote: 'Al enviar, se abrirá WhatsApp con el mensaje listo para confirmar.',
    },
    bioLinkAnimal: {
      responsibleName: 'Nombre y apellido (responsable)',
      responsibleEmail: 'Email (responsable)',
      responsibleWhatsApp: 'WhatsApp (responsable)',
      animalName: 'Nombre del animal',
      animalNamePlaceholder: 'Nombre',
      species: 'Especie',
      speciesPlaceholder: 'Perro, gato, caballo...',
      age: 'Edad',
      agePlaceholder: '2 años',
      veterinaryStatus: 'Supervisión veterinaria activa',
      veterinaryYes: 'Sí',
      veterinaryNo: 'No',
      context: 'Contexto / Motivo',
      contextPlaceholder: 'Contá la situación del animal...',
      acceptProtocol: 'Acepto el Protocolo de Ingreso',
      acceptDisclaimer: 'Acepto el Disclaimer',
      protocolText: 'Acepto el Protocolo de Ingreso y confirmo que BioLink Animal no reemplaza veterinaria.',
      disclaimerText: 'Entiendo que BioLink Animal no reemplaza el cuidado veterinario profesional.',
      sendButton: 'Enviar por WhatsApp',
      sendingButton: 'Preparando WhatsApp…',
      successMessage: 'Listo. Abrimos WhatsApp con tu solicitud.',
      contextMinLength: 'Contá el contexto (mín. 30 caracteres)',
    },
    bioLinkHabitat: {
      company: 'Empresa',
      companyPlaceholder: 'Nombre legal',
      taxId: 'ID fiscal / CUIT',
      taxIdPlaceholder: 'CUIT / VAT / TAX ID',
      contactName: 'Nombre de contacto',
      contactRole: 'Rol',
      rolePlaceholder: 'Gerente, Director...',
      contactEmail: 'Email de contacto',
      contactWhatsApp: 'WhatsApp de contacto',
      assetType: 'Tipo de activo',
      assetTypeSpace: 'Espacio',
      assetTypeVehicle: 'Vehículo',
      assetTypeMachinery: 'Maquinaria',
      assetTypeOther: 'Otro',
      assetLocation: 'Ubicación',
      assetLocationPlaceholder: 'Ciudad, dirección...',
      objective: 'Objetivo / Contexto',
      objectivePlaceholder: 'Describí qué buscás...',
      acceptProtocol: 'Acepto el Protocolo de Ingreso',
      acceptNoGuarantees: 'Acepto la cláusula de no garantías',
      protocolText: 'Acepto el Protocolo de Ingreso.',
      noGuaranteesText: 'Entiendo que no reemplaza ingeniería/arquitectura/mecánica ni mantenimiento. Entiendo que no hay garantías de resultados económicos u operativos.',
      sendButton: 'Enviar por WhatsApp',
      sendingButton: 'Preparando WhatsApp…',
      successMessage: 'Listo. Abrimos WhatsApp con tu solicitud.',
      objectiveMinLength: 'Objetivo/contexto (mín. 30 caracteres)',
    },
    cookies: {
      bannerTitle: 'Uso de Cookies',
      bannerDescription: 'Utilizamos cookies necesarias para el funcionamiento del sitio. También usamos cookies opcionales para analíticas y marketing que solo se activarán con tu consentimiento.',
      moreInfo: 'Más información',
      necessary: 'Necesarias',
      necessaryDescription: 'Siempre activas',
      alwaysActive: 'Activas',
      analytics: 'Analíticas',
      analyticsDescription: 'Medición anónima',
      marketing: 'Marketing',
      marketingDescription: 'Preferencias/remarketing',
      allow: 'Permitir',
      active: 'Activas',
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar',
      configure: 'Configurar',
      save: 'Guardar',
      back: 'Volver',
    },
  },
  en: {
    hero: {
      title: 'Discover the Power of the Quantum Light System',
      subtitle: 'Technical structure of conscious transformation. Closed matrix architecture, defined protocols, clear boundaries.',
      ctaEvaluation: 'Request Energy Evaluation',
      ctaVideo: 'Watch Presentation',
      scrollLabel: 'Explore',
    },
    header: {
      services: 'Services',
      pricing: 'Pricing',
      protocol: 'Protocol',
      faq: 'FAQ',
      contact: 'Contact',
      requestEvaluation: 'Request Evaluation',
    },
    services: {
      sectionTitle: 'An intervention catalog with access criteria.',
      sectionSubtitle: 'System services',
      sectionDescription: 'Energy Evaluation is the starting point to determine compatibility and outline the coherent protocol. The only direct purchase exception is Reiki Energy Quantum.',
      priceConfirmEvaluation: 'Price to be confirmed after evaluation',
      priceConfirmWhatsApp: 'Price to be confirmed via WhatsApp',
      featured: 'Featured',
      viewDetails: 'View details',
      accessNote: 'Access subject to prior Evaluation and right of admission. No guarantees.',
      amount: 'Amount',
    },
    pricing: {
      title: 'Investment Structure',
      subtitle: 'Payment information and enabled methods',
      intro: 'The amount and payment method are confirmed via WhatsApp after completing the corresponding form. Inquire by region and availability.',
      paymentMethods: 'Enabled Payment Methods',
      importantNotes: 'Important Notes',
      note1: 'Reiki Energy Quantum is the only direct booking (no mandatory prior evaluation).',
      note2: 'All other services require Energy Evaluation and are subject to right of admission.',
      note3: 'All payments are NON-refundable. By requesting, you accept the Entry Protocol.',
      viewPaymentMethods: 'View Payment Methods',
      paymentsModalTitle: 'Payment methods',
      noMethodsAvailable: 'No methods configured for this region yet.',
      paymentNotice: 'Payments: final and non-refundable. Receipt submission required to confirm schedule.',
    },
    protocol: {
      title: 'Entry Protocol',
      subtitle: 'Operational structure and access conditions',
      readProtocol: 'Read Full Protocol',
      viewSummary: 'View Summary',
      description: 'An explicit framework to avoid confusion: limits, criteria, conduct and conditions. Must be accepted before starting any process.',
      beforeSubmit: 'Before submitting any form, explicit acceptance of the protocol is required. You can read it in full here.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions',
    },
    footer: {
      brand: 'Quantum Light System',
      brandSubtitle: 'Q.L.S.',
      legal: 'Legal',
      contact: 'Contact',
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      disclaimer: 'Disclaimer',
      refunds: 'Refund Policy',
      cookieSettings: 'Cookie Settings',
      email: 'Email',
      whatsapp: 'WhatsApp',
      copyright: 'All rights reserved.',
    },
    common: {
      learnMore: 'Learn more',
      close: 'Close',
      accept: 'Accept',
      reject: 'Reject',
      configure: 'Configure',
      copy: 'Copy',
      copied: 'Copied',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      back: 'Back',
      save: 'Save',
      send: 'Send',
      sending: 'Sending...',
      cancel: 'Cancel',
      confirm: 'Confirm',
    },
    forms: {
      nameLabel: 'Full name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      countryLabel: 'Country',
      countryPlaceholder: 'United States',
      whatsappLabel: 'WhatsApp',
      whatsappPlaceholder: '+1 555 123-4567',
      messageLabel: 'Message / Reason',
      messagePlaceholder: 'Tell us why you want to request an evaluation...',
      acceptProtocol: 'I accept the Entry Protocol',
      required: '*',
      emailInvalid: 'Invalid email',
      nameMinLength: 'Name required (minimum 2 characters)',
      countryMinLength: 'Country required',
      whatsappMinLength: 'WhatsApp required',
      messageMinLength: 'Please describe your reason (minimum 20 characters)',
      mustAcceptProtocol: 'You must accept the protocol',
      submitButton: 'Submit Request',
      submittingButton: 'Sending...',
      successTitle: 'Done. Opening WhatsApp with your request',
      successDescription: 'Review the message and send to confirm.',
      errorTitle: 'Could not open WhatsApp',
      errorDescription: 'Please try again or disable popup blocker.',
      whatsappNote: 'When submitting, WhatsApp will open with the message ready to confirm.',
    },
    bioLinkAnimal: {
      responsibleName: 'Name and surname (responsible)',
      responsibleEmail: 'Email (responsible)',
      responsibleWhatsApp: 'WhatsApp (responsible)',
      animalName: 'Animal name',
      animalNamePlaceholder: 'Name',
      species: 'Species',
      speciesPlaceholder: 'Dog, cat, horse...',
      age: 'Age',
      agePlaceholder: '2 years',
      veterinaryStatus: 'Active veterinary supervision',
      veterinaryYes: 'Yes',
      veterinaryNo: 'No',
      context: 'Context / Reason',
      contextPlaceholder: 'Tell us about the animal situation...',
      acceptProtocol: 'I accept the Entry Protocol',
      acceptDisclaimer: 'I accept the Disclaimer',
      protocolText: 'I accept the Entry Protocol and confirm that BioLink Animal does not replace veterinary care.',
      disclaimerText: 'I understand that BioLink Animal does not replace professional veterinary care.',
      sendButton: 'Send via WhatsApp',
      sendingButton: 'Preparing WhatsApp…',
      successMessage: 'Done. Opening WhatsApp with your request.',
      contextMinLength: 'Tell us the context (min. 30 characters)',
    },
    bioLinkHabitat: {
      company: 'Company',
      companyPlaceholder: 'Legal name',
      taxId: 'Tax ID / VAT',
      taxIdPlaceholder: 'VAT / TAX ID / EIN',
      contactName: 'Contact name',
      contactRole: 'Role',
      rolePlaceholder: 'Manager, Director...',
      contactEmail: 'Contact email',
      contactWhatsApp: 'Contact WhatsApp',
      assetType: 'Asset type',
      assetTypeSpace: 'Space',
      assetTypeVehicle: 'Vehicle',
      assetTypeMachinery: 'Machinery',
      assetTypeOther: 'Other',
      assetLocation: 'Location',
      assetLocationPlaceholder: 'City, address...',
      objective: 'Objective / Context',
      objectivePlaceholder: 'Describe what you are looking for...',
      acceptProtocol: 'I accept the Entry Protocol',
      acceptNoGuarantees: 'I accept the no guarantees clause',
      protocolText: 'I accept the Entry Protocol.',
      noGuaranteesText: 'I understand that it does not replace engineering/architecture/mechanics or maintenance. I understand there are no guarantees of economic or operational results.',
      sendButton: 'Send via WhatsApp',
      sendingButton: 'Preparing WhatsApp…',
      successMessage: 'Done. Opening WhatsApp with your request.',
      objectiveMinLength: 'Objective/context (min. 30 characters)',
    },
    cookies: {
      bannerTitle: 'Cookie Usage',
      bannerDescription: 'We use necessary cookies for site functionality. We also use optional cookies for analytics and marketing that will only be activated with your consent.',
      moreInfo: 'More information',
      necessary: 'Necessary',
      necessaryDescription: 'Always active',
      alwaysActive: 'Active',
      analytics: 'Analytics',
      analyticsDescription: 'Anonymous measurement',
      marketing: 'Marketing',
      marketingDescription: 'Preferences/remarketing',
      allow: 'Allow',
      active: 'Active',
      acceptAll: 'Accept all',
      rejectAll: 'Reject',
      configure: 'Configure',
      save: 'Save',
      back: 'Back',
    },
  },
  pt: {
    hero: {
      title: 'Descubra o Poder do Sistema de Luz Quântica',
      subtitle: 'Estrutura técnica de transformação consciente. Arquitetura matricial fechada, protocolos definidos, limites claros.',
      ctaEvaluation: 'Solicitar Avaliação Energética',
      ctaVideo: 'Ver Apresentação',
      scrollLabel: 'Explorar',
    },
    header: {
      services: 'Serviços',
      pricing: 'Preços',
      protocol: 'Protocolo',
      faq: 'FAQ',
      contact: 'Contato',
      requestEvaluation: 'Solicitar Avaliação',
    },
    services: {
      sectionTitle: 'Um catálogo de intervenção com critérios de acesso.',
      sectionSubtitle: 'Serviços do sistema',
      sectionDescription: 'A Avaliação Energética é o ponto de partida para determinar compatibilidade e traçar o protocolo coerente. A única exceção de compra direta é Reiki Energy Quantum.',
      priceConfirmEvaluation: 'Preço a confirmar após avaliação',
      priceConfirmWhatsApp: 'Preço a confirmar via WhatsApp',
      featured: 'Destaque',
      viewDetails: 'Ver detalhes',
      accessNote: 'Acesso sujeito a Avaliação prévia e direito de admissão. Sem garantias.',
      amount: 'Valor',
    },
    pricing: {
      title: 'Estrutura de Investimento',
      subtitle: 'Informação de pagamentos e métodos habilitados',
      intro: 'O valor e método de pagamento são confirmados via WhatsApp após completar o formulário correspondente. Consulte por região e disponibilidade.',
      paymentMethods: 'Métodos de Pagamento Habilitados',
      importantNotes: 'Notas Importantes',
      note1: 'Reiki Energy Quantum é a única reserva direta (sem avaliação prévia obrigatória).',
      note2: 'Os demais serviços requerem Avaliação Energética e estão sujeitos ao direito de admissão.',
      note3: 'Todos os pagamentos são NÃO reembolsáveis. Ao solicitar, você aceita o Protocolo de Ingresso.',
      viewPaymentMethods: 'Ver Métodos de Pagamento',
      paymentsModalTitle: 'Métodos de pagamento',
      noMethodsAvailable: 'Nenhum método configurado para esta região ainda.',
      paymentNotice: 'Pagamentos: definitivos e não reembolsáveis. O envio do comprovante é necessário para confirmar a agenda.',
    },
    protocol: {
      title: 'Protocolo de Ingresso',
      subtitle: 'Estrutura operacional e condições de acesso',
      readProtocol: 'Ler Protocolo Completo',
      viewSummary: 'Ver Resumo',
      description: 'Um marco explícito para evitar confusões: limites, critérios, conduta e condições. Deve ser aceito antes de iniciar qualquer processo.',
      beforeSubmit: 'Antes de enviar qualquer formulário, a aceitação explícita do protocolo é solicitada. Você pode lê-lo completo aqui.',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Respostas às perguntas mais comuns',
    },
    footer: {
      brand: 'Sistema Luz Quântica',
      brandSubtitle: 'S.L.Q.',
      legal: 'Legal',
      contact: 'Contato',
      terms: 'Termos e Condições',
      privacy: 'Política de Privacidade',
      cookies: 'Política de Cookies',
      disclaimer: 'Aviso Legal',
      refunds: 'Política de Reembolsos',
      cookieSettings: 'Configurações de Cookies',
      email: 'Email',
      whatsapp: 'WhatsApp',
      copyright: 'Todos os direitos reservados.',
    },
    common: {
      learnMore: 'Saiba mais',
      close: 'Fechar',
      accept: 'Aceitar',
      reject: 'Rejeitar',
      configure: 'Configurar',
      copy: 'Copiar',
      copied: 'Copiado',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      back: 'Voltar',
      save: 'Salvar',
      send: 'Enviar',
      sending: 'Enviando...',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
    },
    forms: {
      nameLabel: 'Nome completo',
      namePlaceholder: 'João Silva',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      countryLabel: 'País',
      countryPlaceholder: 'Brasil',
      whatsappLabel: 'WhatsApp',
      whatsappPlaceholder: '+55 11 91234-5678',
      messageLabel: 'Mensagem / Motivo',
      messagePlaceholder: 'Conte-nos por que você quer solicitar uma avaliação...',
      acceptProtocol: 'Aceito o Protocolo de Ingresso',
      required: '*',
      emailInvalid: 'Email inválido',
      nameMinLength: 'Nome necessário (mínimo 2 caracteres)',
      countryMinLength: 'País necessário',
      whatsappMinLength: 'WhatsApp necessário',
      messageMinLength: 'Por favor, descreva seu motivo (mínimo 20 caracteres)',
      mustAcceptProtocol: 'Você deve aceitar o protocolo',
      submitButton: 'Enviar Solicitação',
      submittingButton: 'Enviando...',
      successTitle: 'Pronto. Abrindo WhatsApp com sua solicitação',
      successDescription: 'Revise a mensagem e envie para confirmar.',
      errorTitle: 'Não foi possível abrir o WhatsApp',
      errorDescription: 'Por favor, tente novamente ou desative o bloqueador de popups.',
      whatsappNote: 'Ao enviar, o WhatsApp será aberto com a mensagem pronta para confirmar.',
    },
    bioLinkAnimal: {
      responsibleName: 'Nome e sobrenome (responsável)',
      responsibleEmail: 'Email (responsável)',
      responsibleWhatsApp: 'WhatsApp (responsável)',
      animalName: 'Nome do animal',
      animalNamePlaceholder: 'Nome',
      species: 'Espécie',
      speciesPlaceholder: 'Cachorro, gato, cavalo...',
      age: 'Idade',
      agePlaceholder: '2 anos',
      veterinaryStatus: 'Supervisão veterinária ativa',
      veterinaryYes: 'Sim',
      veterinaryNo: 'Não',
      context: 'Contexto / Motivo',
      contextPlaceholder: 'Conte sobre a situação do animal...',
      acceptProtocol: 'Aceito o Protocolo de Ingresso',
      acceptDisclaimer: 'Aceito o Aviso Legal',
      protocolText: 'Aceito o Protocolo de Ingresso e confirmo que o BioLink Animal não substitui cuidados veterinários.',
      disclaimerText: 'Entendo que o BioLink Animal não substitui cuidados veterinários profissionais.',
      sendButton: 'Enviar via WhatsApp',
      sendingButton: 'Preparando WhatsApp…',
      successMessage: 'Pronto. Abrindo WhatsApp com sua solicitação.',
      contextMinLength: 'Conte o contexto (mín. 30 caracteres)',
    },
    bioLinkHabitat: {
      company: 'Empresa',
      companyPlaceholder: 'Nome legal',
      taxId: 'ID fiscal / CNPJ',
      taxIdPlaceholder: 'CNPJ / VAT / TAX ID',
      contactName: 'Nome de contato',
      contactRole: 'Função',
      rolePlaceholder: 'Gerente, Diretor...',
      contactEmail: 'Email de contato',
      contactWhatsApp: 'WhatsApp de contato',
      assetType: 'Tipo de ativo',
      assetTypeSpace: 'Espaço',
      assetTypeVehicle: 'Veículo',
      assetTypeMachinery: 'Maquinário',
      assetTypeOther: 'Outro',
      assetLocation: 'Localização',
      assetLocationPlaceholder: 'Cidade, endereço...',
      objective: 'Objetivo / Contexto',
      objectivePlaceholder: 'Descreva o que você procura...',
      acceptProtocol: 'Aceito o Protocolo de Ingresso',
      acceptNoGuarantees: 'Aceito a cláusula de não garantias',
      protocolText: 'Aceito o Protocolo de Ingresso.',
      noGuaranteesText: 'Entendo que não substitui engenharia/arquitetura/mecânica ou manutenção. Entendo que não há garantias de resultados econômicos ou operacionais.',
      sendButton: 'Enviar via WhatsApp',
      sendingButton: 'Preparando WhatsApp…',
      successMessage: 'Pronto. Abrindo WhatsApp com sua solicitação.',
      objectiveMinLength: 'Objetivo/contexto (mín. 30 caracteres)',
    },
    cookies: {
      bannerTitle: 'Uso de Cookies',
      bannerDescription: 'Utilizamos cookies necessários para o funcionamento do site. Também usamos cookies opcionais para análises e marketing que só serão ativados com seu consentimento.',
      moreInfo: 'Mais informações',
      necessary: 'Necessários',
      necessaryDescription: 'Sempre ativos',
      alwaysActive: 'Ativos',
      analytics: 'Análises',
      analyticsDescription: 'Medição anônima',
      marketing: 'Marketing',
      marketingDescription: 'Preferências/remarketing',
      allow: 'Permitir',
      active: 'Ativos',
      acceptAll: 'Aceitar tudo',
      rejectAll: 'Rejeitar',
      configure: 'Configurar',
      save: 'Salvar',
      back: 'Voltar',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.es;
}
