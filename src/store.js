import { createStore } from 'redux' ;

const estadoIni = {
    cont: 0,
    epsdios: [],
    infoper: ""
};
const reducer = (state = estadoIni,action) => {
    switch( action.type) {
        case 'INCREMENTAR':
            return {... state, cont: state.cont+action.inc}; 
        case 'EPISODIO':
            return {... state, epsdios: action.epis };
        case 'INFOPER':
            return {... state, infoper: action.ip };
        default:
            return state;
    }
};
const store = createStore( reducer) ;

export default store;