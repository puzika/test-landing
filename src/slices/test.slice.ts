import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

type Test = {
  answers: { [key: string]: string },
}

const initialState: Test = {
  answers: {},
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addAnswer(state, action: PayloadAction<{ question: string, answer: string }>) {
      const { question, answer } = action.payload;
      state.answers[question] = answer;
    },

    removeAnswer(state, action: PayloadAction<string>) {
      const { payload } = action;
      delete state.answers[payload];
    },
  }
});

export const { addAnswer, removeAnswer } = testSlice.actions;

export const selectAnswers = (state: RootState) => state.test.answers;

export default testSlice.reducer;