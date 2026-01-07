import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import homeReducer from "./slices/homeSlice";
import aboutReducer from "./slices/aboutSlice";
import aboutWhoReducer from "./slices/aboutWhoSlice";
import missionVisionReducer from "./slices/missionVisionSlice";
import objectivesReducer from "./slices/coreobjectiveSlice";
import programsHomeReducer from "./slices/programsHomeSlice";
import whoWeAreReducer from "./slices/whoWeAreSlice";
import newsReducer from "./slices/newsSlice";
import impactReducer from "./slices/impactSlice";
import awardsReducer from "./slices/awardsSlice";
import partnersReducer from "./slices/partnersSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    home: homeReducer,
    about: aboutReducer,
    aboutWho: aboutWhoReducer,
    missionVision: missionVisionReducer,
    objectives: objectivesReducer,
    programsHome: programsHomeReducer,
    whoWeAre: whoWeAreReducer,
    news: newsReducer,
    impact: impactReducer,
    awards: awardsReducer,
    partners: partnersReducer,

  },
});

export default store;
