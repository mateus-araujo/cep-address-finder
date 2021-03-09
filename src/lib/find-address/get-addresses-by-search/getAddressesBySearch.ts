import fetch from 'node-fetch'

import { Address } from 'types'
import { convertViaCEPAddress, normalizeString } from 'utils'

/**
 * Retorna lista de endereços a partir da pesquisa
 *
 * @param {string} state - (Obrigatório) UF do estado. Por exemplo: 'CE'.
 * @param {string} city - (Obrigatório) Cidade. Por exemplo: 'Fortaleza'.
 * @param {string} street - (Obrigatório) Logradouro. Por exemplo: 'Rua Ana Bilhar'.
 */
async function getAddressesBySearch(state: string, city: string, street?: string): Promise<Address[]> {
    if (street && street?.length > 0 && street?.length < 3) {
        throw new Error('street deve conter pelo menos 3 caracteres.')
    }

    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${state}/${normalizeString(city)}/${normalizeString(
                street?.replace('Av.', 'Avenida').replace('R.', 'Rua')
            )}/json`
        )

        const data = await response.json()

        if (!Array.isArray(data)) {
            throw new Error('Nenhum endereço encontrado')
        }

        return data.map(address => convertViaCEPAddress(address))
    } catch (error) {
        throw new Error('Erro na requisição ao ViaCEP')
    }
}

export default getAddressesBySearch
