/* Update com MongoDb */

/* Acessa o Banco de Dados Libri-Database */
use('libri-database');

/* Update em Apenas 1 Item */
// UpdateONE -> Caso o Campo não exista ele irá criar um novo e caso tenha 2 campos iguais, nenhum será alterado
db['libri-collection'].updateOne(
    // Where
    {codigo: '4'},
    {
        $set: {valor:100}
    }
);
    
    
    
/* Update em Varios Itens com Criterio (Where)*/
// UpdateMany -> Caso o Campo não exista ele irá criar um novo e caso tenha 2 campos iguais, ambos serão alterados
db['libri-collection'].updateMany(
    // Where
    {categoria: 'Ficção Científica'},
    {
        $set: {valor:100}
    }
);


/* Update Geral (Sem Where)*/
// Irá dar um update geral no banco
db['libri-collection'].updateMany(
    {},
    {
        $set: {valor:100}
    }
);




