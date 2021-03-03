# CEP Address Finder

Uma simples e poderosa biblioteca para pesquisa de endereços brasileiros.

✅ Consulta de CEP

✅ Busca de CEP a partir de um endereço sem CEP

✅ Retorna outras informações adicionais e úteis de um endereço além do CEP, como bairro, e ddd

✅ Utiliza base atualizada com requisições feitas a api ViaCEP

✅ Zero dependências (utiliza `fetch` do próprio Javascript)

✅ Suporte Typescript

✅ Tratamento de erros


## Como utilizar

### Busca de CEP a partir de um endereço sem CEP

Por ser multifornecedor, a biblioteca irá resolver a Promise com o fornecedor que **mais rápido** lhe responder.

Com a função `findAddress` é possível retornar um endereço completo, apenas com algumas informações básicas, como `state`, `city`, `street` e `number`. Além de uma lista de endereços do logradouro, retornada pelo ViaCEP.

Apenas `state` e `city` são obrigatórias, bem útil quando uma cidade tem apenas uma faixa de CEP. Ou apenas `state`, `city` e `neighborhood`, também útil para regiões que possuam poucas faixas de CEP.

Os parâmetros disponíveis são: `state`, `city`, `street`, `number`, e `neighborhood`.

Quanto mais parâmetros melhor a precisão.

``` js
import { findAddress } from 'cep-address-finder'

// Colocar dentro de uma função assíncrona, ou usar `findAddress({...}).then(...)`
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
//     "selectedAddress": {
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

No exemplo acima, foi encontrado o endereço com o CEP correspondente ao `"complement": "de 991 ao fim - lado ímpar"` e ao `number: '993'` que foi passado na função.

### Consulta de CEP

Além da busca função acima, é possível realizar a consulta por um CEP.

``` js
import { getAddressByCEP } from 'cep-address-finder'

// Colocar dentro de uma função assíncrona, ou usar `getAddressByCEP(...).then(...)`
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

### Instalação

#### npm

```
$ npm install --save cep-address-finder
```

#### yarn

```
$ yarn add cep-address-finder
```

