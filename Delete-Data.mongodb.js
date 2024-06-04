/* Delete com MongoDb */

/* Acessa o Banco de Dados Libri-Database */
use('libri-database');

/* Delete em Apenas 1 Item com Where*/
db['libri-collection'].deleteOne(
    // Where
    {codigo: '4'}
);
    
    
    
/* Delete em Varios Itens com Where*/
db['libri-collection'].deleteMany(
    // Where
    {categoria: 'Ficção Científica'}
);


/* Delete em Varios Itens Exceto*/
db['libri-collection'].updateMany(
    // where com not equal -> igual negado
    {categoria: {$ne:'Ficção Científica'}}
);