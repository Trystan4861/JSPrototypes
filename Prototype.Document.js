/**
 * Dependendias: dom.js
 */
/* jshint esversion: 6 */
/**
 * loadCSS: Permite la carga dinámica de una hoja de estilos css
 * @param  {string/url} href [la url de la hoja de estilos a cargar]
 */
Document.prototype.loadCSS=href=>_DOM("head").append(createNode('link',{rel:'stylesheet',type:'text/css',href}));
/**
 * reloadCSS: Permite la recarga de una hoja de estilos css
 * @param  {string/url} href [la url de la hoja de estilos a recargar]
 */
Document.prototype.reloadCSS=href=>_DOM(`link[href^="${href}"]`).attributes.href.value=`${href}?${new Date().getTime()}`;