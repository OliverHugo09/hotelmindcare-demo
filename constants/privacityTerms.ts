export interface PrivacyUseData {
    id: string;
    title: string;
    description: string;
  }
  
  export const privacyUseData: PrivacyUseData[] = [
    { id: '1', title: '1. Recopilación de Datos:', description:'La app recopila ciertos datos personales necesarios para brindar el servicio de terapia psicológica. Entre los datos recopilados se encuentran: -Datos Personales Básicos: Nombre, correo electrónico, y datos de contacto. Datos Relacionados con el Bienestar Laboral: Evaluaciones generales de factores psicosociales (de manera anónima) conforme a la NOM-035-STPS-2018, sin implicar acceso a información sensible específica ni evaluaciones detalladas que puedan comprometer la privacidad del colaborador.'},
    { id: '2', title: '2. Uso de Datos Personales:', description:'Los datos recopilados se utilizan únicamente para: •	Gestionar citas y comunicaciones entre usuarios y psicólogos. •	Elaborar informes estadísticos anónimos que contribuyan a la identificación y mitigación de factores de riesgo psicosocial, en línea con la NOM-035-STPS-2018. - Monitorear y mejorar la experiencia del usuario en la app.' },
    { id: '3', title: '3. Confidencialidad de las Sesiones:', description:'Todas las sesiones de terapia son privadas y confidenciales. El contenido de las sesiones no será grabado, almacenado ni compartido con la empresa hotelera ni con terceros, y se encuentra protegido conforme a la normativa vigente sobre protección de datos personales y confidencialidad terapéutica.'},
    { id: '4', title: '4. Evaluaciones Psicosociales:', description:'La app puede realizar encuestas o evaluaciones generales para medir el bienestar psicosocial en el ambiente laboral, conforme a la NOM-035-STPS-2018. Estas evaluaciones se realizan de forma anónima y voluntaria, con el fin de diseñar estrategias de mejora y prevención de riesgos psicosociales.'},
    { id: '5', title: '5. Seguridad de la Información:', description:'La app implementa medidas de seguridad avanzadas, como encriptación de extremo a extremo, para proteger los datos personales de los usuarios frente a accesos no autorizados.'},
    { id: '6', title: '6. Derechos de los Usuarios:', description:'Los usuarios tienen derecho a: -  Acceder, rectificar, cancelar o eliminar sus datos personales (conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares). -   Retirar su consentimiento para el tratamiento de datos personales en cualquier momento. -   Recibir notificaciones claras sobre cualquier cambio en la política de privacidad.'},
    { id: '7', title: '7. Cookies y Datos Técnicos:', description:'La app puede recopilar datos técnicos, como cookies o direcciones IP, para optimizar la experiencia del usuario. Estos datos se procesan de forma anónima y no permiten la identificación directa del usuario.'},
    { id: '8', title: '8. Cumplimiento con la NOM-035-STPS-2018:', description:'La app y sus servicios se alinean con la NOM-035-STPS-2018, que busca promover un entorno organizacional favorable y prevenir factores de riesgo psicosocial en el ámbito laboral.'},
    { id: '9', title: '9. Modificaciones en la Política:', description:'La política de privacidad podrá ser actualizada para reflejar mejoras en la app, nuevas normativas o requisitos legales. Los usuarios serán notificados sobre cualquier cambio significativo mediante la app.'}
  ];
  