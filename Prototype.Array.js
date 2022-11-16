/* jshint esversion:6 */
/* jshint -W033 */
/* jshint expr:true */

Array.prototype._maxItemCount=-1;
Array.prototype.empty=function(){this.length=0;return this}
Array.prototype.allTheSame=function(){return this.every((el,index,thisArray)=>el==thisArray[0])}

Array.prototype.hasMaxItemCount=function(){return this._maxItemCount>0}

Array.prototype.isFull=function(){return this._maxItemCount==this.length}
Array.prototype.maxItemCount=function(amount){if (amount!=undefined) this._maxItemCount=amount; else return this._maxItemCount}
Array.prototype.clearStoredValues=function (){this.length=0;if(this._maxItemCount>0) [..."0".repeat(this._maxItemCount).split('')].forEach(value=>this.push(+value));}
Array.prototype.softReverse=function(){return [...this].reverse();}
Array.prototype.storeValue=function (value){this.push(value),this._maxItemCount<this.length?this.splice(0,this.length-this._maxItemCount):!0;}
Array.prototype.setMaxItemCount=function(value){this._maxItemCount=value; return value>0};
Array.prototype.getDuplicatedValues = function() {return this.filter((item, index) => this.indexOf(item) !== index)};
Array.prototype.getFirstDuplicatedValue = function() {return this.getDuplicatedValues()[0]};
Array.prototype.XOR = function()
{//no se pueden usar funciones flecha en prototipos ya que this referencia a window en dichas funciones en lugar del objeto en sí
	if (toString.call(this) !== "[object Array]") return !1;
	let total = Number(this[0]); 
	for(let i=1;i<this.length;i++) if(!isNaN(this[i])) total ^= Number(this[i]); 
	return total; 
};
Array.prototype.max=function(){return Math.max(...this);}
Array.prototype.min=function(){return Math.min(...this);}
Array.prototype.sum=function(){return this.reduce((partialSum, a) => partialSum + a, 0)};

Array.prototype.swap=function(i,j){if (this[i]!=this[j]) [this[i],this[j]]=[this[j],this[i]]; return this;}
Array.prototype.shuffle = function(doShuffle=!0)
{
	if (doShuffle) for(let i =this.length-1 ; i>0 ;i--) this.swap(i,Math.floor(Math.random()*(i + 1))); //intercambiamos la posición actua con otra posición aleatoria restante
	return this;
}//declaramos la función shuffle en el prototipo de los arreglos

Array.prototype.softShuffle=function(doShuffle=!0){return [...this].shuffle(doShuffle);}