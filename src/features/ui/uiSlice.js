import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeMode: 'dark',
  sectionsLoaded: {},
  activeSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setThemeMode(state, action) {
      state.themeMode = action.payload;
    },
    toggleThemeMode(state) {
      state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark';
    },
    markSectionLoaded(state, action) {
      const sectionKey = action.payload;
      state.sectionsLoaded[sectionKey] = true;
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const { setThemeMode, toggleThemeMode, markSectionLoaded, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;


