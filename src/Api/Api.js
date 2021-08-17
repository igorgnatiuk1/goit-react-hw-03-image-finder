import axios from "axios";

const PAGE = 12;
const KEY = '21950649-7cbe36f37fba3febe32b90827';

axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}&per_page=12`;

const fetchImg = ({ currentPage, searchQuery}) => {
    const fetchString = `https://pixabay.com/api/?key=${KEY}&per_page=${PAGE}&q=${searchQuery}&page=${currentPage}`;
    return axios
        .get(fetchString)
        .then(response => response.data)
        .catch(console.error);
};

export default fetchImg;

