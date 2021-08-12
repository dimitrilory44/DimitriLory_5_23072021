export const apiURL = 
    location.hostname === 'localhost' || location.hostname === '127.0.0.1' 
    ? 'http://localhost:3000' 
    : 'https://api-p5-openclassroom.herokuapp.com'
;