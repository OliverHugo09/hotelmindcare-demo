export interface EstresLaboralData {
  id: string;
  title: string;
  description: string;
  img: string;
}

const images = {
    exa1: require('../assets/images/exa1.jpg'),
    exa2: require('../assets/images/exa2.jpg'),
    exa3: require('../assets/images/exa3.jpg'),
    exa4: require('../assets/images/exa4.jpg'),
    exa5: require('../assets/images/exa5.jpg'),
  };

export const estreslabolarData: EstresLaboralData[] = [
  { id: '1', title: 'Estrés laboral', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', img: images.exa1 },
  { id: '2', title: 'Que es el burtout', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', img: images.exa2 },
  { id: '3', title: 'Meditación', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', img: images.exa3},
  { id: '4', title: 'Sueño reparador', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', img: images.exa4},
  { id: '5', title: 'Autoestima', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', img: images.exa5},
];
