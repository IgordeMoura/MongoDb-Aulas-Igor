/* Define o Nome do Banco de Dados */
const database = 'libri-database';

/* Acessa o Banco de Dados Libri-Database */
use(database);

/* Seleciona Todos os Dados de Todos os Arquivos da Collection (como se fosse um Select * from tbl_teste) */
db['libri-collection'].find(); 


/* ________________________________________________________________________________________________________*/

/*                                            Clausula WHERE                                               */


/* Seleciona Dados Baseados em um Critério de Busca */
const database = 'libri-database';
use(database); 
db['libri-collection'].find({"categoria":"Ficção Científica"}); 



/* ________________________________________________________________________________________________________*/

/*                              Clausula WHERE Com Seleção de Campos Especificos                           */


/* Seleciona Dados Baseados em um Critério de Busca */
const database = 'libri-database';
use(database); 
db['libri-collection'].find({"categoria":"Ficção Científica"},{"_id":0, "codigo":0, "imagem":0});


/* Podemos utilizar a seleção de todos os campos com criterios da seguinte forma */
const database = 'libri-database';
use(database); 
db['libri-collection'].find({ },{"_id":0, "codigo":0, "imagem":0});



/* ________________________________________________________________________________________________________*/

/*                              Clausula WHERE Com Seleção de Campos Especificos                           */


/* Seleciona Dados Baseados em um Critério de Busca Por uma Parte de String de um Campo */
const database = 'libri-database';
use(database); 
db['libri-collection'].find({"titulo":/robôs/i},{"_id":0, "codigo":0, "imagem":0});


