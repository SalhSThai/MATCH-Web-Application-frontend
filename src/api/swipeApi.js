import axios from '../config/axios';

export const getAllSwipedMe = () => axios.get('/swipe/'); //get all the user that swipe me
export const getAllMySwipe = () => axios.get('/swipe/myswipe'); //get all the user that i swipe
export const createSwipe = (id) => axios.post('/swipe/', id); //create swipe if other also swipe you , create match pair. pass the id of other user.
