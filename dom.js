/**
 * función para acceder a una lista de nodos específica del documento
 * @param  {string} e     	[selector para la búsqueda de nodos]
 * @param  {object} scope 	[limitador de ámbito de búsqueda]
 * @return {Array Object}   [nodos que concuerdan con la selección]
 */
/* jshint esversion: 6 */

const DOM=(e,scope=document)=>scope.querySelectorAll(e);
/**
 * Función para limitar la función DOM para devolver sólo el primer elemento 
 */
const _DOM=(e,scope=document)=>scope.querySelector(e); //función para acceder al primer nodo de la lista de nodos seleccionada