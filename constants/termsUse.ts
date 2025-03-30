export interface TermsUseData {
    id: string;
    title: string;
    description: string;
  }
  
  export const termsUseData: TermsUseData[] = [
    { id: '1', title: '1. Propósito de la App:', description:'Esta aplicación está diseñada para ofrecer un servicio de apoyo psicológico a los colaboradores de la empresa hotelera, en cumplimiento de la NOM-035-STPS-2018, que establece la necesidad de identificar, prevenir y manejar los factores de riesgo psicosocial en los centros de trabajo.'},
    { id: '2', title: '2. Uso Personal y Exclusivo:', description:'El acceso y uso de la app son estrictamente personales y limitados a los colaboradores autorizados por la empresa. La aplicación no debe utilizarse con fines distintos a los establecidos (por ejemplo, no está permitida la transmisión de contenido ofensivo o inapropiado).' },
    { id: '3', title: '3. Confidencialidad y Bienestar Emocional:', description:'La app se compromete a garantizar que el acceso a servicios psicológicos sea privado, seguro y confidencial, fomentando el bienestar emocional de los colaboradores conforme a las disposiciones de la NOM-035-STPS-2018.'}
  ];
  