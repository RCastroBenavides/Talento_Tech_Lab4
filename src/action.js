import { type } from "@testing-library/user-event/dist/type"

export const setInc = (val) => {
return {
    type: 'INCREMENTAR',
    inc: val
}
}
export const setEps = (eps) => {
return {
    type: 'EPISODIO',
    epis:  eps

}
}
export const setIP = (infper) => {
    return {
        type: 'INFOPER',
        ip:     infper
    
    }
}