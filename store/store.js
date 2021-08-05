// Reduxのメインファイル　設定はこのファイルに書く

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import articleInfoReducer from './articleInfoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    articleInfo: articleInfoReducer,
  }
})