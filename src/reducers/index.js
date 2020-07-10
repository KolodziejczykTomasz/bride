import mlodapara from 'data/press/mlodapara';
import pannamloda from 'data/press/pannamloda';
import uroczystosc from 'data/press/uroczystosc';
import wedding from 'data/press/wedding';
import omsvadba from 'data/press/omsvadba';

import targikrakow from 'data/fair/targikrakow';
import targikatowice from 'data/fair/targikatowice';
import targikielce from 'data/fair/targikielce';
import targikrakowarena from 'data/fair/targikrakowarena';
import targilodz from 'data/fair/targilodz';
import targirybnik from 'data/fair/targirybnik';
import targihalaorbita from 'data/fair/targihalaorbita';

import accesories from 'data/accesories/accesories';

import postbride from 'data/posts/bride/post';
import postextras from 'data/posts/extras/post';

import postchurch from 'data/posts/church/post';
import travel from 'data/travel/travel';

const initialState = {
  postchurch,
  postextras,
  postbride,
  mlodapara,
  pannamloda,
  uroczystosc,
  wedding,
  omsvadba,
  targikrakow,
  targikatowice,
  targikielce,
  targikrakowarena,
  targilodz,
  targirybnik,
  targihalaorbita,
  accesories,
  travel
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
