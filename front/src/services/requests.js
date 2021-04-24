import axios from "axios";
import {SERVER_URL} from "../utils/constants";

export const addDepotCarRequest = (data) => axios.post(SERVER_URL, data);

export const removeDepotCarRequest = (id) => axios.delete(`${SERVER_URL}/${id}`);
