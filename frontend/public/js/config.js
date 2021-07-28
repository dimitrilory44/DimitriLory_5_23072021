import {getParameters} from '../js/utils/functions';

export const id = getParameters();

export const apiURL = 
    location.hostname === 'localhost' || location.hostname === '127.0.0.1' 
    ? 'http://localhost:3000' 
    : 'https://oc-devweb-p5-api.herokuapp.com'
;