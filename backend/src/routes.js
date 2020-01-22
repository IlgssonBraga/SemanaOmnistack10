const {Router} = require('express')
const devController = require('./controllers/devController')
const SearchController = require('./controllers/SearchController')


const routes = Router()

routes.get('/devs', devController.index)
routes.post('/devs', devController.store)
routes.get('/search', SearchController.index)

module.exports = routes


/*
get, post, put, delete são os principais métodos que usaremos na aplicação
get para buscar uma informação; post para adicionar uma informação, put para editar e delete
para deletar. São métodos HTTP.
*/

/*
Tipos de parâmetros:
1. query params: São usados na maioria das vezes com o método GET. (Filtros, ordenação, paginação)
request.query.
2. route params: São usados com put e delete. request.params (identificar um recurso na alteração ou 
remoção).
3. body: request.body (dados para criação ou alteração de um registro).
*/

/*
MongoDB: Banco de Dados não relacional.
*/