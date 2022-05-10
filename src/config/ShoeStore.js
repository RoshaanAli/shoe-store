import axios from "axios";
import config from "./config";
const ShoeStore = axios.create({
  baseURL: config.base_url,
});

export default ShoeStore;
