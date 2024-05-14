/* Seleciona Livros Com Valor Maior de 100 Reais ($gt) */
use('libri-database');
db['libri-collection'].find({valor:{$gt:100}}); 

/* Seleciona Livros Com Valor Menor que 100 Reais ($lt)*/
use('libri-database');
db['libri-collection'].find({valor:{$lt:100}}); 


/* Seleciona Livros Com Valor Maior ou Igual a 100 Reais ($gte)*/
use('libri-database');
db['libri-collection'].find({valor:{$gte:100}}); 


/* Seleciona Livros Com Valor Menor ou Igual a 100 Reais ($lte)*/
use('libri-database');
db['libri-collection'].find({valor:{$lte:100}}); 

/* Seleciona Livros Entre um Intervalo de Valores de 100 até 150 ($lte) e ($gte)*/
use('libri-database');
db['libri-collection'].find({valor:{$gte:100, $lte:150}}); 

/* Seleciona Livros Entre um Intervalo de Valores de 100 até 150 ($lte) e ($gte) - Ordenação Ascendente*/
use('libri-database');
db['libri-collection'].find({valor:{$gte:100, $lte:150}}).sort({valor:1});

/* Seleciona Livros Entre um Intervalo de Valores de 100 até 150 ($lte) e ($gte) - Ordenação Descendente*/
use('libri-database');
db['libri-collection'].find({valor:{$gte:100, $lte:150}}).sort({valor:-1}); 

/* Seleciona Livros Entre um Intervalo de Valores de 100 até 150 ($lte) e ($gte) - Ordenação Descendente*/
use('libri-database');
db['libri-collection'].find({valor:{$gte:100, $lte:150}}, {'_id': 0, 'codigo':0}).sort({valor:-1}); 