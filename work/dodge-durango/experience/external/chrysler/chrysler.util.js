chryslerUtil=function(){this.formatCurrency=function(f,d,e){f=f.toString().replace(/\$|\,/g,"");if(isNaN(f)){f="0";}var b=(f==(f=Math.abs(f)));f=Math.floor(f*100+0.50000000001);if(d){var a=f%100;if(a<10){a="0"+a;}}f=Math.floor(f/100).toString();for(var c=0;c<Math.floor((f.length-(1+c))/3);c++){f=f.substring(0,f.length-(4*c+3))+","+f.substring(f.length-(4*c+3));}return(((b)?"":"-")+((e)?"$":"")+f+((d)?"."+a:""));};this.isArray=function(a){if(a){return(a.constructor==Array);}return false;};this.addEventListener=function(d,a,c,e,f){var b=c;if(e){b=function(g){if(f){if(f[f.length-1].type){f[f.length-1]=g;}else{f.push(g);}}else{f=[g];}c.apply(e,f);};}if(d.addEventListener){d.addEventListener(a,b,false);}else{if(d.attachEvent){d.attachEvent("on"+a,b);}}};this.removeEventListener=function(b,a,c){if(b.removeEventListener){b.removeEventListener(a,c,false);}else{if(b.detachEvent){b.detachEvent("on"+a,c);}}};this.getUrlParams=function(){var a={},b={};a.query=document.location.href.split("?");if(a.query[1]){a.vars=a.query[1].split("&");for(a.i=0;a.i<a.vars.length;a.i++){a._this=a.vars[a.i].split("=");b[a._this[0]]=a._this[1];}}return b;};this.toString=function(){return"[object chryslerUtil]";};};if(chrysler){chrysler.util=new chryslerUtil();}if(!Array.prototype.filter){Array.prototype.filter=function(b){if(!this){throw new TypeError();}var f=Object(this);var a=f.length>>>0;if(typeof b!=="function"){throw new TypeError();}var e=[];var d=arguments[1];for(var c in f){if(f.hasOwnProperty(c)){if(b.call(d,f[c],c,f)){e.push(f[c]);}}}return e;};}Array.prototype.contains=function(b){var a=this.length;while(a--){if(this[a]===b){return true;}}return false;};Array.prototype.indexOf=function(b){for(var a=0;a<this.length;a++){if(this[a]==b){return a;}}return -1;};Array.prototype.remove=function(a){this.removeAt(this.indexOf(a));};Array.prototype.removeAt=function(a){this.splice(a,1);};String.format=function(){var b=arguments[0];for(var a=0;a<=arguments.length-1;a++){b=b.replace(new RegExp("\\{"+a+"\\}","gm"),arguments[a+1]);}return b;};String.isNullOrWhiteSpace=function(a){return !a||!/\S/.test(a);};String.prototype.trim=function(){var a=this.replace(/^\s\s*/,"");var b=a.length;while((/\s/).test(a.charAt(--b))){}return a.slice(0,b+1);};