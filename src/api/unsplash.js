import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 0XmsP-gQwg3WMlQKPjDHPYXyPr_gkCJc5Lst7C92LH8",
  },
});
