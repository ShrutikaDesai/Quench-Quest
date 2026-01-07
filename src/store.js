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
import programReducer from "./slices/programSlice";
import programCardsReducer from "./slices/programCardsSlice";
import programSliderReducer from "./slices/programSliderSlice";
import programMissionReducer from "./slices/programMissionSlice";
import contactHeaderReducer from "./slices/contactHeaderSlice";
import contactCardReducer from "./slices/contactCardSlice";
import contactDetailReducer from "./slices/contactDetailSlice";
import contactFAQSlice from "./slices/contactFAQSlice"; 

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
    program: programReducer,
    programCards: programCardsReducer,
    programSlider: programSliderReducer,
    programMission: programMissionReducer,
    contactHeader: contactHeaderReducer,
    contactCards: contactCardReducer,
    contactDetail: contactDetailReducer,
    faq: contactFAQSlice,
    

  },
});

export default store;
