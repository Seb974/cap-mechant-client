// import api from 'src/config/api';
import axios from 'axios';

function findAll() {
    return axios
        .get('http://localhost:8000/api/catalogs')
        .then(response => response.data['hydra:member'].sort((a, b) => (a.name > b.name) ? -1 : 1));
}

function deleteCatalog(id) {
    return axios.delete('/api/catalogs/' + id);
}

function find(id) {
    return axios
        .get('/api/catalogs/' + id)
        .then(response => response.data);
}

function update(id, catalog) {
    return axios.put('/api/catalogs/' + id, {...catalog});
}

function create(catalog) {
    return axios.post('/api/catalogs', {...catalog});
}

export default {
    findAll,
    delete: deleteCatalog,
    find,
    update,
    create
}