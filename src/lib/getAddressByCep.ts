/**
 * Retorna endereço a partir do CEP
 *
 * @param {string} cep - CEP: Por exemplo: '60160-110' ou '60160110'
 */
async function getAddressByCEP(cep: string) {
    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${cep}/json`
        )

        const data = await response.json()

        return data
    } catch (error) {
        return {
            message: 'Erro na requisição ao ViaCEP'
        }
    }
}

export default getAddressByCEP
