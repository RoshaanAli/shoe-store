import axios from "axios";
import config from "./config";
const ShoeStore = axios.create({
  baseURL: config.base_url,
});
ShoeStore.defaults.headers.common['X-RapidAPI-Key'] = "e8bc8288efmsh12c4c9e02d7efe3p150cffjsne8db7f6472db";

export default ShoeStore;
