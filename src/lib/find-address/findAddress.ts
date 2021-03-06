import { Address } from 'types'

import getAddressesBySearch from './get-addresses-by-search'
import selectAddressFromList from './select-address-from-list'

/**
 * Retorna Promise com a lista de endereços a partir da pesquisa e
 * o endereço selecionado de acordo com o número e/ou bairro.
 *
 * @param {Object} address
 * @param {string} address.state - (Obrigatório) UF do estado. Por exemplo: 'CE'.
 * @param {string} address.city - (Obrigatório) Cidade. Por exemplo: 'Fortaleza'.
 * @param {string} address.street - (Obrigatório) Logradouro. Por exemplo: 'Rua Ana Bilhar'.
 * @param {number} address.number - Número. Por exemplo: 987.
 * @param {string} address.neighborhood - Bairro. Por exemplo: 'Meireles'.
 */
async function findAddress({
    state,
    city,
    street,
    number,
    neighborhood,
}: {
    state: string
    city: string
    street?: string
    number?: string
    neighborhood?: string
}): Promise<{ addresses: Address[]; selectedAddress: Address | undefined }> {
    const data = await getAddressesBySearch(state, city, street)

    const addressesList = data
    const { addresses, selectedAddress } = selectAddressFromList(addressesList, number, neighborhood, city)

    return { addresses, selectedAddress }
}

export default findAddress
