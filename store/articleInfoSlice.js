import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'articleInfo',
  initialState: {
    articleInfo: {},
      // articleInfoオブジェクトの構造
      // articleInfo = {
      //   記事名⓵:{
      //     title:       記事のタイトル
      //     topImgPass:　トップ画像のパス
      //     intro: 　　　 記事のイントロ
      //   }
      //   ・・・
      // }
  },
  reducers: {
    increment: state => {
      
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer