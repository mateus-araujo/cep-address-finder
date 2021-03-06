<h1 align="center">cep-address-finder</h1>

<p align="center">
  <a href="https://github.com/mateus-araujo/cep-address-finder/actions?workflow=CI">
    <img src="https://github.com/mateus-araujo/cep-address-finder/workflows/CI/badge.svg">
  </a>
  <a href="https://npm-stat.com/charts.html?package=cep-address-finder">
    <img src="https://img.shields.io/npm/dm/cep-address-finder.svg">
  </a>
  <a href='https://coveralls.io/github/mateus-araujo/cep-address-finder?branch=main'><img src='https://coveralls.io/repos/github/mateus-araujo/cep-address-finder/badge.svg?branch=main' alt='Coverage Status' /></a>
  <a href="https://www.npmjs.com/package/cep-address-finder">
    <img src="https://badge.fury.io/js/cep-address-finder.svg">
  </a>
  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
  <a href="https://snyk.io/test/github/mateus-araujo/cep-address-finder">
    <img src="https://snyk.io/test/github/mateus-araujo/cep-address-finder/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/mateus-araujo/cep-address-finder" style="max-width:100%;">
  </a>
</p>

Uma simples e poderosa biblioteca para pesquisa de endereços brasileiros.

✅ Consulta de CEP

✅ Busca de CEP a partir de um endereço sem CEP

✅ Retorna outras informações adicionais e úteis de um endereço além do CEP, como bairro, e ddd

✅ Utiliza base atualizada com requisições feitas a api ViaCEP

✅ Leve, utiliza `node-fetch` no lado servidor e `unfetch` no lado cliente para fazer as requisições

✅ Suporte Typescript

✅ Tratamento de erros


## Instalação

#### npm

```
$ npm install --save cep-address-finder
```

#### yarn

```
$ yarn add cep-address-finder
```


## Como utilizar

### Busca de CEP a partir de um endereço sem CEP

Com a função `findAddress` é possível retornar um endereço completo, apenas com algumas informações básicas, como `state`, `city`, `street` e `number`. Além de uma lista de endereços do logradouro, retornada pelo ViaCEP.

Apenas `state` e `city` são obrigatórias, bem útil quando uma cidade tem apenas uma faixa de CEP.

Ou apenas `state`, `city` e `neighborhood`, também útil para regiões que possuam poucas faixas de CEP.

Os atributos disponíveis no objeto enviado como parâmetro são: `state`, `city`, `street`, `number`, e `neighborhood`.

Quanto mais parâmetros melhor a precisão.

``` js
import { findAddress } from 'cep-address-finder'

// Colocar dentro de uma função assíncrona, ou usar findAddress({...}).then(...)
const { addresses, selectedAddress } = await findAddress({
    state: 'CE',
    city: 'Fortaleza',
    street: 'Pontes Vieira',
    number: '993',
})

// console.log({ addresses, selectedAddress })
//
// {
//     "addresses": [...], // Lista com endereços do logradouro
//     "selectedAddress": { // Endereço selecionado da lista
//         "cep": "60135-237",
//         "state": "CE",
//         "city": "Fortaleza",
//         "street": "Avenida Pontes Vieira",
//         "neighborhood": "Dionísio Torres",
//         "complement": "de 991 ao fim - lado ímpar",
//         "ddd": "85",
//         "gia": "",
//         "ibge": "2304400",
//         "siafi": "1389"
//     }
// }
```

No exemplo acima, foi encontrado o endereço com o CEP e complemento (`"complement": "de 991 ao fim - lado ímpar"`) correspondente ao número (`number: '993'`) que foi passado na função.

### Consulta de CEP

Além da busca da função acima, é possível realizar a consulta padrão por um CEP.

``` js
import { getAddressByCEP } from 'cep-address-finder'

// Colocar dentro de uma função assíncrona, ou usar getAddressByCEP(...).then(...)
const address = await getAddressByCEP('60160-110')

// console.log({ address })
//
// {
//     "address": {
//         "cep": "60160-110",
//         "state": "CE",
//         "city": "Fortaleza",
//         "street": "Rua Ana Bilhar"
//         "neighborhood": "Meireles",
//         "complement": "até 1298/1299",
//         "ddd": "85",
//         "gia": "",
//         "ibge": "2304400",
//         "siafi": "1389",
//     }
// }
```

## Como contribuir

O projeto está livre para abertura de PRs e issues.

Algumas **features** futuras:

    ✅ Suporte a NodeJS (implementado a partir da versão 1.3.0).
    ✅ Testes automatizados (implementados a partir da versão 1.3.3).

 * Integração a outros serviços de CEP, como Correios e WideNet.
 * Instalação com Bower.
 * Utilização no Browser usando CDN.
