import press from 'data/press/press';

import fair from 'data/fair/fair';

import accesories from 'data/accesories/accesories';

import postbride from 'data/posts/bride/post';
import postextras from 'data/posts/extras/post';

import postchurch from 'data/posts/church/post';
import travel from 'data/travel/travel';
import dress from 'data/dress/dress';

import dekoracje from 'data/company/dekoracje';
import atrakcje from 'data/company/atrakcje';
import foto from 'data/company/foto';
import lokale from 'data/company/lokale';
import moda from 'data/company/moda';
import pozostale from 'data/company/pozostale';
import zespoly from 'data/company/zespoly';

const initialState = {
  postchurch,
  postextras,
  postbride,   
  accesories,
  travel,
  dress,
  pozostale,
  lokale,
  foto,
  zespoly,
  moda,
  atrakcje,
  dekoracje,
  fair,
  press
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
