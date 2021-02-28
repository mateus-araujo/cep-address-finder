const isNumberAtComplementPattern = require('./isNumberAtComplementPattern')

function findByNeighborhoodOrCity(addresses, neighborhood, city) {
    return neighborhood ? (
        addresses.find(address => address.bairro === neighborhood) ||
        addresses.find(address => address.bairro.includes(neighborhood))
    ) : city ? (
        addresses.find(address => address.localidade === city) ||
        addresses.find(address => address.localidade.includes(city))
    ) : undefined
}

function selectAddressFromList(addresses, number, neighborhood, city) {
    try {
        const selectedAddress = number
            /**
             * Havendo número definido, pesquisa-se pelo número no logradouro.
             * Por exemplo: { "logradouro": "Rua Osvaldo Cruz 2321" }
             */
            ? addresses.find(address => address.logradouro.includes(number)) ||
                /**
                 * Pesquisa se existe alguma referência a "lado" na listagem
                 * Por exemplo: { "complemento": "até 989 - lado ímpar" }
                 */
                addresses.some(address => address.complemento.includes('lado'))
                    // Verifica se o número é par ou ímpar
                    ? (Number(number) % 2  === 0)
                        // Se o número é par, pesquisa apenas pelos complementos que possuem a palavra "par"
                        ? addresses
                            .filter(address => address.complemento.includes('par'))
                            // Pesquisa por padrões no complemento
                            .find(address => isNumberAtComplementPattern(address.complemento, number))
                        // Se o número não é par, pesquisa apenas pelos complementos que possuem a palavra "ímpar"
                        : addresses
                            .filter(address => address.complemento.includes('ímpar'))
                            // Pesquisa por padrões no complemento
                            .find(address => isNumberAtComplementPattern(address.complemento, number))
                    // Não havendo nenhuma referência a lado, realiza pesquisa geral pelos padrões
                    : addresses.find(address => isNumberAtComplementPattern(address.complemento, number)) ||
                        // Não encontrado nada nos últimos passos, pesquisa-se apenas pelo bairro ou cidade
                        findByNeighborhoodOrCity(addresses, neighborhood, city)
            // Sem número definido, pesquisa-se apenas pelo bairro ou cidade
            : findByNeighborhoodOrCity(addresses, neighborhood, city)

        return { addresses, selectedAddress }
    } catch (error) {
        console.error({ error })
    }
}

module.exports = selectAddressFromList
