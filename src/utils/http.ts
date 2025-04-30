import axios from 'axios'

const http = axios.create({
    baseURL:process.env.BASE_URL!,
    timeout: 30000,
    headers: {
      Accept: "application/json",
      "Content-Type": "*",
      "Access-Control-Allow-Origin": "*"
    }
  });

  export default http