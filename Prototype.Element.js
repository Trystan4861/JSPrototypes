/**
 * appendBefore: Añade un elemento delante del elemento actual al mismo nivel
 * @param  {element} element  [elemento a añadir]
 * @return {element}          [retorno que permite la concatenación de funciones]
 */
Element.prototype.appendBefore = function (element) {element.parentNode.insertBefore(this, element); return this;};
/**
 * appendAfter: Añade un elemento detrás del elemento actual al mismo nivel
 * @param  {element} element  [elemento a añadir]
 * @return {element}          [retorno que permite la concatenación de funciones]
 */
Element.prototype.appendAfter = function (element) {element.parentNode.insertBefore(this, element.nextSibling); return this;};
/**
 * removeChilds: elimina los elementos contenidos dentro del elemento actual
 * @return {element}          [retorno que permite la concatenación de funciones]
 */
Element.prototype.removeChilds = function (){while (this.firstChild) this.removeChild(this.firstChild); return this;};
/**
 * addClass: Añade la clase indicada a la lista de clases del elemento actual
 * @param {string} clase 	  [la clase a añadir]
 * @return {element}          [retorno que permite la concatenación de funciones]
 */
Element.prototype.addClass = function(clase){this.classList.add(clase); return this;};
/**
 * removeClass: Elimina la clase indicada de la lista de clases del elemento actual
 * @param {string} clase 	  [la clase a eliminar]
 * @return {element}          [retorno que permite la concatenación de funciones]
 */
Element.prototype.removeClass = function(clase){this.classList.remove(clase); return this;};