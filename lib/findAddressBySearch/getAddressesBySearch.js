const fetch = require('node-fetch')

/**
 * Retorna lista de endereços a partir da pesquisa
 *
 * @param {string} uf - (Obrigatório) UF do estado. Por exemplo: 'CE'.
 * @param {string} city - (Obrigatório) Cidade. Por exemplo: 'Fortaleza'.
 * @param {string} street - (Obrigatório) Logradouro. Por exemplo: 'Rua Ana Bilhar'.
 */
async function getAddressesBySearch(uf, city, street) {
    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${uf}/${city}/${
                street
                    ?.replace('Av', '')
                    ?.replace('.', '')
                    ?.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                    ?.trim()}/json` || ''
        )

        const data = await response.json()

        return data
    } catch (error) {
        return {
            message: 'Erro na requisição ao ViaCEP'
        }
    }
}

module.exports = getAddressesBySearch
