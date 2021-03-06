import { Address } from 'types'
import { compareStrings } from 'utils'

import isNumberAtComplementPattern from './isNumberAtComplementPattern'

function findAddressByNeighborhoodOrCity(addresses: Address[], neighborhood?: string, city?: string) {
    return neighborhood
        ? addresses.find(address => compareStrings(address.neighborhood, neighborhood))
        : city && addresses.some(address => address.city === city)
        ? addresses.find(address => compareStrings(address.city, city))
        : undefined
}

function selectAddressFromList(
    addresses: Address[],
    number?: string,
    neighborhood?: string,
    city?: string
): {
    addresses: Address[]
    selectedAddress: Address | undefined
} {
    const addressesList = neighborhood
        ? addresses.filter(address => compareStrings(address.neighborhood, neighborhood))
        : addresses

    const selectedAddress = number
        ? /**
           * Havendo número definido, pesquisa-se pelo número no logradouro.
           * Por exemplo: { "street": "Rua Osvaldo Cruz 2321" }
           */
          addressesList.some(address => address.street.includes(number))
            ? addressesList.find(address => address.street.includes(number))
            : /**
             * Pesquisa se existe alguma referência a "lado" na listagem
             * Por exemplo: { "complement": "até 989 - lado ímpar" }
             */
            addressesList.some(address => address.complement.includes('lado'))
            ? // Verifica se o número é par ou ímpar
              Number(number) % 2 === 0
                ? // Se o número é par, pesquisa apenas pelos complementos que possuem a palavra "par"
                  addressesList
                      .filter(address => address.complement.includes('lado par'))
                      // Pesquisa por padrões no complemento
                      .find(address => isNumberAtComplementPattern(address.complement, Number(number)))
                : // Se o número não é par, pesquisa apenas pelos complementos que possuem a palavra "ímpar"
                  addressesList
                      .filter(address => address.complement.includes('lado ímpar'))
                      // Pesquisa por padrões no complemento
                      .find(address => isNumberAtComplementPattern(address.complement, Number(number)))
            : // Não havendo nenhuma referência a lado, verifica se algum complemento se encaixa em algum padrão
            addressesList.some(address => isNumberAtComplementPattern(address.complement, Number(number)))
            ? // Havendo algum complemento em algum padrão, procura e retorna o endereço que se encaixa no padrão
              addressesList.find(address => isNumberAtComplementPattern(address.complement, Number(number)))
            : // Não encontrado nada nos últimos passos, pesquisa-se apenas pelo bairro ou cidade
              findAddressByNeighborhoodOrCity(addresses, neighborhood, city)
        : // Sem número definido, pesquisa-se apenas pelo bairro ou cidade
          findAddressByNeighborhoodOrCity(addresses, neighborhood, city)

    return { addresses, selectedAddress }
}

export default selectAddressFromList
