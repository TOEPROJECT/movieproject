import axios from "axios";

async function newsAPI() {
    const data = await axios({
        url: "http://localhost:8080/news",
        method: "get",
    });
    return data.data;
}

export default newsAPI;