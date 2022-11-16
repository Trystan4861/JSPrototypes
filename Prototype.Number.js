/* jshint esversion:6 */
/**
 * [between: comprueba si el valor de número se encuentra entre a y b]
 * @param  {[int]} a  [límite inferior]
 * @param  {[int]} b  [límite superior]
 * @return {[bool]}   [true si está entre los límites, false en caso contrario]
 * 
 */
Number.prototype.between = function(a, b) {return (this >= Math.min(a, b)) && (this <= Math.max(a, b));};
/**
 * [changeBase: cambia la base del número]
 * @param  {[int]} to   [base a la que se pasará el número]
 * @param  {[int]} from [base desde la que se pasará  el númer]
 * @return {[int]}      [el valor pasadao a la base to desde la base from]
 */
Number.prototype.changeBase= function(to,from=10) {return parseInt(this,from).toString(to);};
/**
 * [bin2dec: cambia la base del número desde binario a decimal]
 * @return {[int]}      [el valor en decimal del número en binario]
 */
Number.prototype.bin2dec=function(){return this.changeBase(10,2);};
/**
 * [dec2bin:  cambia la base del número desde decimal a binario]
 * @return {[int]}      [el valor en binario del número en decimal]
 */
Number.prototype.dec2bin=function(){return this.changeBase(2);};
