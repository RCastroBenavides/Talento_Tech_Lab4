import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore ({ 
   reducer: {
        holaApp: reducers
    }
});
export default store;