import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import homeReducer from "./slices/homeSlice";
import objectivesReducer from "./slices/coreobjectiveSlice";
import programsHomeReducer from "./slices/programsHomeSlice";
import whoWeAreReducer from "./slices/whoWeAreSlice";
import newsReducer from "./slices/newsSlice";
import impactReducer from "./slices/impactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    home: homeReducer,
    objectives: objectivesReducer,
    programsHome: programsHomeReducer,
    whoWeAre: whoWeAreReducer,
    news: newsReducer,
    impact: impactReducer,
  },
});

export default store;
