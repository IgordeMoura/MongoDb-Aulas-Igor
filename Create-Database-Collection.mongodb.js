/* Define o Nome do Banco de Dados */
const database = 'libri-database';

/* Define o Nome da Collection */
const collection = 'libri-collection';

/* Acessa o Banco de Dados Libri-Database */
use(database);

/* Cria a Collection Libri-collection */
db.createCollection(collection);