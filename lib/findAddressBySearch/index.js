const getAddressesBySearch = require('./getAddressesBySearch')
const selectAddressFromList = require('./selectAddressFromList')

/**
 * Retorna Promise com a lista de endereços a partir da pesquisa e
 * o endereço selecionado de acordo com o número e/ou bairro.
 *
 * @param {Object} address
 * @param {string} address.uf - (Obrigatório) UF do estado. Por exemplo: 'CE'.
 * @param {string} address.city - (Obrigatório) Cidade. Por exemplo: 'Fortaleza'.
 * @param {string} address.street - (Obrigatório) Logradouro. Por exemplo: 'Rua Ana Bilhar'.
 * @param {number} address.number - Número. Por exemplo: 987.
 * @param {string} address.neighborhood - Bairro. Por exemplo: 'Meireles'.
 */
async function findAddressBySearch({ uf, city, street, number, neighborhood }) {
    try {
        const data = await getAddressesBySearch(uf, city, street)

        if (!Array.isArray(data)) {
            throw data
        }

        const addressesList = data
        const { addresses, selectedAddress } = selectAddressFromList(addressesList, number, neighborhood, city)

        return { addresses, selectedAddress }
    } catch (error) {
        return error
    }
}

module.exports = findAddressBySearch
