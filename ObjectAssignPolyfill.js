(function(O){
	if(typeof O.assign!=='function'){
		O.assign=function(a){//target, ...sources
			var p,e,o=a,i=0,m=arguments,l=m.length,f=this.prototype.hasOwnProperty;
			while(++i<l){e=m[i];for(p in e){if(f.call(e,p)){o[p]=e[p]}}};
			return o;
		}
	}
})(Object);

/*
console.log(Object.assign({},{ a: 1, b: 1, c: 1 },{ b: 2, c: 2 },{ c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(Object.assign({a:[3]},{ a: 1, b: 1, c: 1 },{ b: 2, c: 2 },{ c: 3,a:'x' })); // { a: 'x', b: 2, c: 3 }
console.log(Object.assign({},'abc', null, true, undefined, 10)); // { "0": "a", "1": "b", "2": "c" }
*/
