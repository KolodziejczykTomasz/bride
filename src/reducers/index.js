import press from 'data/press/press';

import fair from 'data/fair/fair';

import accesories from 'data/accesories/accesories';

import postbride from 'data/posts/bride/post';
import postextras from 'data/posts/extras/post';

import postchurch from 'data/posts/church/post';
import travel from 'data/travel/travel';
import dress from 'data/dress/dress';

import company from 'data/company/company';


const initialState = {
  postchurch,
  postextras,
  postbride,   
  accesories,
  travel,
  dress,
  company,
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
