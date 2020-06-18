import press1 from '../assets/images/press/mp_01_2020.jpg';
import press2 from '../assets/images/press/bc_2_2019.jpg';
import press3 from '../assets/images/press/w_2_2019.jpg';
import press4 from '../assets/images/press/u_1112_2019.jpg';
import press5 from '../assets/images/press/pm_01_2018.jpg';

import TargiKraków from '../assets/images/fair/ice-krakow.png';
import TargiKatowice from '../assets/images/fair/katowice-mck.png';
import TargiKielce from '../assets/images/fair/kielce.png';
import TargiKrakówArena from '../assets/images/fair/krakow-tauron-arena.png';
import TargiLodz from '../assets/images/fair/lodz-expo.png';
import TargiRybnik from '../assets/images/fair/rybnik-zseu.png';
import TargiHalaOrbita from '../assets/images/fair/spartan-hala-orbita.png';

const initialState = {
  mlodapara: [
    {
      id: 1,
      url: press1,
      title: 'Młoda Para Od A-Z',
      number: '1/2020 (259)',
    },
  ],
  pannamloda: [
    {
      id: 1,
      url: press5,
      title: 'PANNA MŁODA',
      number: '1/2018 (48)',
    },
  ],
  uroczystosc: [
    {
      id: 1,
      url: press4,
      title: 'Uroczystość',
      number: '11-12/2019 (88)',
    },
  ],
  wedding: [
    {
      id: 1,
      url: press3,
      title: 'Wedding',
      number: '2/2019 (24)',
    },
  ],
  omsvadba: [
    {
      id: 1,
      url: press2,
      title: 'Twój ślub',
      number: '2/2019 (40)',
    },
  ],
  targikrakow: [
    {
      id: 1,
      url: TargiKraków,
      city: 'Kraków',
      street: 'ul. Stanisława Lema 7',
      place: 'Tauron Arena Kraków',
      data: '11.10.2020',
    },
  ],
  targikatowice: [
    {
      id: 1,
      url: TargiKatowice,
      city: 'Katowice',
      street: 'plac Sławika i Antalla 1',
      place: 'MCK Międzynarodowe Centrum Kongresowe',
      data: '29.11.2020',
    },
  ],
  targikielce: [
    {
      id: 1,
      url: TargiKielce,
      city: 'Kielce',
      street: 'ul. Zakładowa 1',
      place: 'Targi Kielce exhibition & congress centre',
      data: '6.12.2020',
    },
  ],
  targikrakowarena: [
    {
      id: 1,
      url: TargiKrakówArena,
      city: 'Kraków',
      street: 'ul. Stanisława Lema 7',
      place: 'Tauron Arena Kraków',
      data: '11.10.2020',
    },
  ],
  targilodz: [
    {
      id: 1,
      url: TargiLodz,
      city: 'Łódź',
      street: 'al. Politechniki 4',
      place: 'expo Łódź',
      data: '18.10.2020',
    },
  ],
  targirybnik: [
    {
      id: 1,
      url: TargiRybnik,
      city: 'Rybnik',
      street: 'ul. Św. Józefa 30',
      place: 'ZSEU Rybnik',
      data: '15.11.2020',
    },
  ],
  targihalaorbita: [
    {
      id: 1,
      url: TargiHalaOrbita,
      city: '',
      street: '',
      place: '',
      data: '',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
