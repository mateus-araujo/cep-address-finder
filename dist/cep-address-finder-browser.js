/*
 *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
'use strict';Object.defineProperty(exports,"__esModule",{value:!0});function __awaiter(b,d,a,f){function c(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,g){function e(b){try{l(f.next(b))}catch(m){g(m)}}function h(b){try{l(f["throw"](b))}catch(m){g(m)}}function l(b){b.done?a(b.value):c(b.value).then(e,h)}l((f=f.apply(b,d||[])).next())})}
function __generator(b,d){function a(b){return function(a){return f([b,a])}}function f(a){if(h)throw new TypeError("Generator is already executing.");for(;c;)try{if(h=1,g&&(e=a[0]&2?g["return"]:a[0]?g["throw"]||((e=g["return"])&&e.call(g),0):g.next)&&!(e=e.call(g,a[1])).done)return e;if(g=0,e)a=[a[0]&2,e.value];switch(a[0]){case 0:case 1:e=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;g=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();continue;default:if(!(e=c.trys,e=
0<e.length&&e[e.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3]))c.label=a[1];else if(6===a[0]&&c.label<e[1])c.label=e[1],e=a;else if(e&&c.label<e[2])c.label=e[2],c.ops.push(a);else{e[2]&&c.ops.pop();c.trys.pop();continue}}a=d.call(b,c)}catch(n){a=[6,n],g=0}finally{h=e=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},h,g,e,k;return k={next:a(0),"throw":a(1),"return":a(2)},
"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k}var nonDigits=/\D/g;
function isNumberAtComplementPattern(b,d){if(b.match(/at\u00e9 \d*\/\d*/g)){var a=b.replace("at\u00e9 ","").split("/")[1];if(d<=Number(a))return!0}if(b.match(/at\u00e9 \d*/g)&&!b.includes("/")&&(a=b.replace(nonDigits,""),d<=Number(a)))return!0;if(b.match(/de \d* a \d*/g)&&!b.includes("/")){a=b.replace("de ","").replace("a ","").split(" ");var f=a[0];a=a[1];if(d>=Number(f)&&d<=Number(a))return!0}return b.match(/de \d*\/\d* a \d*\/\d*/g)&&(a=b.replace("de ","").replace("a ","").split(" "),f=a[0],a=
a[1],f=f.split("/")[0],a=a.split("/")[1],d>=Number(f)&&d<=Number(a))||b.match(/de \d* ao fim/g)&&!b.includes("/")&&(f=b.replace(nonDigits,""),d>=Number(f))||b.match(/de \d*\/\d* ao fim/g)&&(f=b.replace("de ","").replace(" ao fim","").split("/")[0],d>=Number(f))?!0:!1}
function findAddressByNeighborhoodOrCity(b,d,a){return d?b.find(function(a){return a.neighborhood===d})||b.find(function(a){return a.neighborhood.includes(d)}):a?b.find(function(b){return b.city===a})||b.find(function(b){return b.city.includes(a)}):void 0}
function selectAddressFromList(b,d,a,f){try{var c=a?b.filter(function(b){return b.neighborhood===a||b.neighborhood.includes(a)}):b,h=d?c.some(function(a){return a.street.includes(d)})?c.find(function(a){return a.street.includes(d)}):c.some(function(a){return a.complement.includes("lado")})?0===Number(d)%2?c.filter(function(a){return a.complement.includes("lado par")}).find(function(a){return isNumberAtComplementPattern(a.complement,Number(d))}):c.filter(function(a){return a.complement.includes("lado \u00edmpar")}).find(function(a){return isNumberAtComplementPattern(a.complement,
Number(d))}):c.some(function(a){return isNumberAtComplementPattern(a.complement,Number(d))})?c.find(function(a){return isNumberAtComplementPattern(a.complement,Number(d))}):findAddressByNeighborhoodOrCity(b,a,f):findAddressByNeighborhoodOrCity(b,a,f);return{addresses:b,selectedAddress:h}}catch(g){console.error({error:g})}}
function fetch(b,d){return d=d||{},new Promise(function(a,f){var c=new XMLHttpRequest,h=[],g=[],e={},k=function(){return{ok:2==(c.status/100|0),statusText:c.statusText,status:c.status,url:c.responseURL,text:function(){return Promise.resolve(c.responseText)},json:function(){return Promise.resolve(c.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([c.response]))},clone:k,headers:{keys:function(){return h},entries:function(){return g},get:function(a){return e[a.toLowerCase()]},
has:function(a){return a.toLowerCase()in e}}}},l;for(l in c.open(d.method||"get",b,!0),c.onload=function(){c.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,b,c){h.push(b=b.toLowerCase());g.push([b,c]);e[b]=e[b]?e[b]+","+c:c});a(k())},c.onerror=f,c.withCredentials="include"==d.credentials,d.headers)c.setRequestHeader(l,d.headers[l]);c.send(d.body||null)})}
function convertViaCEPAddress(b){return{cep:b.cep,street:b.logradouro,complement:b.complemento,neighborhood:b.bairro,city:b.localidade,state:b.uf,ibge:b.ibge,gia:b.gia,ddd:b.ddd,siafi:b.siafi}}
function getAddressesBySearch(b,d,a){var f,c,h;return __awaiter(this,void 0,void 0,function(){var g,e;return __generator(this,function(k){switch(k.label){case 0:if(a&&0<(null===a||void 0===a?void 0:a.length)&&3>(null===a||void 0===a?void 0:a.length))throw Error("street deve conter pelo menos 3 caracteres.");k.label=1;case 1:return k.trys.push([1,4,,5]),[4,fetch("https://viacep.com.br/ws/"+b+"/"+d+"/"+(null===(h=null===(c=null===(f=null===a||void 0===a?void 0:a.replace("Av",""))||void 0===f?void 0:
f.replace(".",""))||void 0===c?void 0:c.normalize("NFD").replace(/[\u0300-\u036f]/g,""))||void 0===h?void 0:h.trim())+"/json"||"")];case 2:return g=k.sent(),[4,g.json()];case 3:e=k.sent();if(!Array.isArray(e))throw Error("Nenhum endere\u00e7o encontrado");return[2,e.map(function(a){return convertViaCEPAddress(a)})];case 4:throw k.sent(),Error("Erro na requisi\u00e7\u00e3o ao ViaCEP");case 5:return[2]}})})}
function findAddress(b){var d=b.state,a=b.city,f=b.street,c=b.number,h=b.neighborhood;return __awaiter(this,void 0,void 0,function(){var b,e,k,l,n,m;return __generator(this,function(g){switch(g.label){case 0:return g.trys.push([0,2,,3]),[4,getAddressesBySearch(d,a,f)];case 1:e=b=g.sent();k=selectAddressFromList(e,c,h,a);if(!k)return[2,{addresses:[],selectedAddress:void 0}];l=k.addresses;n=k.selectedAddress;return[2,{addresses:l,selectedAddress:n}];case 2:throw m=g.sent(),m;case 3:return[2]}})})}
function getAddressByCEP(b){return __awaiter(this,void 0,void 0,function(){var d,a,f,c;return __generator(this,function(h){switch(h.label){case 0:d=null===b||void 0===b?void 0:b.toString().replace(/\D+/g,"");if(8!==(null===d||void 0===d?void 0:d.length))throw Error("CEP deve conter exatamente 8 n\u00fameros.");h.label=1;case 1:return h.trys.push([1,4,,5]),[4,fetch("https://viacep.com.br/ws/"+d+"/json")];case 2:return a=h.sent(),[4,a.json()];case 3:f=h.sent();if(!0===(null===f||void 0===f?void 0:f.erro))throw f;
return[2,convertViaCEPAddress(f)];case 4:c=h.sent();if(!0===(null===c||void 0===c?void 0:c.erro))throw Error("CEP n\u00e3o encontrado");throw Error("Erro na requisi\u00e7\u00e3o ao ViaCEP");case 5:return[2]}})})}var index={findAddress,getAddressByCEP,getAddressesBySearch};exports.default=index;exports.findAddress=findAddress;exports.getAddressByCEP=getAddressByCEP;exports.getAddressesBySearch=getAddressesBySearch
