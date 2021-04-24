import axios from 'axios';
import {SERVER_URL} from '../utils/constants';

export const fetchInitialData = () => axios.get(SERVER_URL);
