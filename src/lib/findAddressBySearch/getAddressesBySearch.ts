/**
 * Retorna lista de endereços a partir da pesquisa
 *
 * @param {string} uf - (Obrigatório) UF do estado. Por exemplo: 'CE'.
 * @param {string} city - (Obrigatório) Cidade. Por exemplo: 'Fortaleza'.
 * @param {string} street - (Obrigatório) Logradouro. Por exemplo: 'Rua Ana Bilhar'.
 */
async function getAddressesBySearch(uf: string, city: string, street?: string) {
    if (street && street?.length > 0 && street?.length < 3) {
        throw new Error('street deve conter pelo menos 3 caracteres.')
    }

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
        throw new Error('Erro na requisição ao ViaCEP')
    }
}

export default getAddressesBySearch
