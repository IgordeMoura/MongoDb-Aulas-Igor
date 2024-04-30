/* Define o Nome do Banco de Dados */
const database = 'libri-database';

/* Define o Nome da Collection */
const collection = 'libri-collection';

/* Acessa o Banco de Dados Libri-Database */
use(database);

/* Insere um Documento de Dados de Livro na Collection */
db['libri-collection'].insertOne(
    {
      "codigo":"1",
      "titulo": "As Cavernas de Aço",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "imagem":"/livros/cavernas_aco.jpg"
    }
);