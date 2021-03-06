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
'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var fetch=require("node-fetch");function _interopDefaultLegacy(b){return b&&"object"===typeof b&&"default"in b?b:{"default":b}}var fetch__default=_interopDefaultLegacy(fetch);
function __awaiter(b,c,a,d){function e(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,g){function f(b){try{l(d.next(b))}catch(n){g(n)}}function h(b){try{l(d["throw"](b))}catch(n){g(n)}}function l(b){b.done?a(b.value):e(b.value).then(f,h)}l((d=d.apply(b,c||[])).next())})}
function __generator(b,c){function a(b){return function(a){return d([b,a])}}function d(a){if(h)throw new TypeError("Generator is already executing.");for(;e;)try{if(h=1,g&&(f=a[0]&2?g["return"]:a[0]?g["throw"]||((f=g["return"])&&f.call(g),0):g.next)&&!(f=f.call(g,a[1])).done)return f;if(g=0,f)a=[a[0]&2,f.value];switch(a[0]){case 0:case 1:f=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++;g=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(f=e.trys,f=
0<f.length&&f[f.length-1])&&(6===a[0]||2===a[0])){e=0;continue}if(3===a[0]&&(!f||a[1]>f[0]&&a[1]<f[3]))e.label=a[1];else if(6===a[0]&&e.label<f[1])e.label=f[1],f=a;else if(f&&e.label<f[2])e.label=f[2],e.ops.push(a);else{f[2]&&e.ops.pop();e.trys.pop();continue}}a=c.call(b,e)}catch(m){a=[6,m],g=0}finally{h=f=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var e={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},h,g,f,k;return k={next:a(0),"throw":a(1),"return":a(2)},
"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k}function convertViaCEPAddress(b){return{cep:b.cep,street:b.logradouro,complement:b.complemento,neighborhood:b.bairro,city:b.localidade,state:b.uf,ibge:b.ibge,gia:b.gia,ddd:b.ddd,siafi:b.siafi}}
function getAddressesBySearch(b,c,a){return __awaiter(this,void 0,void 0,function(){var d,e,h;return __generator(this,function(g){switch(g.label){case 0:if(a&&0<(null===a||void 0===a?void 0:a.length)&&3>(null===a||void 0===a?void 0:a.length))throw Error("street deve conter pelo menos 3 caracteres.");g.label=1;case 1:return g.trys.push([1,4,,5]),d=function(a){var b,d,h,c;return(null===(c=null===(h=null===(d=null===(b=null===a||void 0===a?void 0:a.normalize("NFD"))||void 0===b?void 0:b.replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g,
""))||void 0===d?void 0:d.split(" "))||void 0===h?void 0:h.join(" "))||void 0===c?void 0:c.trim())||""},[4,fetch__default["default"]("https://viacep.com.br/ws/"+b+"/"+d(c)+"/"+d(null===a||void 0===a?void 0:a.replace("Av.","Avenida").replace("R.","Rua"))+"/json")];case 2:return e=g.sent(),[4,e.json()];case 3:h=g.sent();if(!Array.isArray(h))throw Error("Nenhum endere\u00e7o encontrado");return[2,h.map(function(a){return convertViaCEPAddress(a)})];case 4:throw g.sent(),Error("Erro na requisi\u00e7\u00e3o ao ViaCEP");
case 5:return[2]}})})}var nonDigits=/\D/g;
function isNumberAtComplementPattern(b,c){if(b.match(/at\u00e9 \d*\/\d*/g)){var a=b.replace("at\u00e9 ","").split("/")[1];if(c<=Number(a))return!0}if(b.match(/at\u00e9 \d*/g)&&!b.includes("/")&&(a=b.replace(nonDigits,""),c<=Number(a)))return!0;if(b.match(/de \d* a \d*/g)&&!b.includes("/")){a=b.replace("de ","").replace("a ","").split(" ");var d=a[0];a=a[1];if(c>=Number(d)&&c<=Number(a))return!0}return b.match(/de \d*\/\d* a \d*\/\d*/g)&&(a=b.replace("de ","").replace("a ","").split(" "),d=a[0],a=
a[1],d=d.split("/")[0],a=a.split("/")[1],c>=Number(d)&&c<=Number(a))||b.match(/de \d* ao fim/g)&&!b.includes("/")&&(d=b.replace(nonDigits,""),c>=Number(d))||b.match(/de \d*\/\d* ao fim/g)&&(d=b.replace("de ","").replace(" ao fim","").split("/")[0],c>=Number(d))?!0:!1}
function findAddressByNeighborhoodOrCity(b,c,a){return c?b.find(function(a){return a.neighborhood===c||a.neighborhood.includes(c)||c.includes(a.neighborhood)}):a&&b.some(function(b){return b.city===a})?b.find(function(b){return b.city===a}):void 0}
function selectAddressFromList(b,c,a,d){var e=a?b.filter(function(b){return b.neighborhood===a||b.neighborhood.includes(a)||a.includes(b.neighborhood)}):b;d=c?e.some(function(a){return a.street.includes(c)})?e.find(function(a){return a.street.includes(c)}):e.some(function(a){return a.complement.includes("lado")})?0===Number(c)%2?e.filter(function(a){return a.complement.includes("lado par")}).find(function(a){return isNumberAtComplementPattern(a.complement,Number(c))}):e.filter(function(a){return a.complement.includes("lado \u00edmpar")}).find(function(a){return isNumberAtComplementPattern(a.complement,
Number(c))}):e.some(function(a){return isNumberAtComplementPattern(a.complement,Number(c))})?e.find(function(a){return isNumberAtComplementPattern(a.complement,Number(c))}):findAddressByNeighborhoodOrCity(b,a,d):findAddressByNeighborhoodOrCity(b,a,d);return{addresses:b,selectedAddress:d}}
function findAddress(b){var c=b.state,a=b.city,d=b.street,e=b.number,h=b.neighborhood;return __awaiter(this,void 0,void 0,function(){var b,f,k,l,m;return __generator(this,function(g){switch(g.label){case 0:return[4,getAddressesBySearch(c,a,d)];case 1:return f=b=g.sent(),k=selectAddressFromList(f,e,h,a),l=k.addresses,m=k.selectedAddress,[2,{addresses:l,selectedAddress:m}]}})})}
function getAddressByCEP(b){return __awaiter(this,void 0,void 0,function(){var c,a,d,e;return __generator(this,function(h){switch(h.label){case 0:c=null===b||void 0===b?void 0:b.toString().replace(/\D+/g,"");if(8!==(null===c||void 0===c?void 0:c.length))throw Error("CEP deve conter exatamente 8 n\u00fameros.");h.label=1;case 1:return h.trys.push([1,4,,5]),[4,fetch__default["default"]("https://viacep.com.br/ws/"+c+"/json")];case 2:return a=h.sent(),[4,a.json()];case 3:d=h.sent();if(!0===(null===d||
void 0===d?void 0:d.erro))throw d;return[2,convertViaCEPAddress(d)];case 4:e=h.sent();if(!0===(null===e||void 0===e?void 0:e.erro))throw Error("CEP n\u00e3o encontrado");throw Error("Erro na requisi\u00e7\u00e3o ao ViaCEP");case 5:return[2]}})})}var index={findAddress,getAddressByCEP,getAddressesBySearch};exports.default=index;exports.findAddress=findAddress;exports.getAddressByCEP=getAddressByCEP;exports.getAddressesBySearch=getAddressesBySearch
