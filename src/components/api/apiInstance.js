import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    //  Authorization: `<Your Auth Token>`,
    "Content-Type": "application/json",
    timeout: 1000
  }
  // .. other options
});

export default instance;
