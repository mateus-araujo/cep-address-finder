import { convertViaCEPAddress } from 'lib/helpers'

/**
 * Retorna endereço a partir do CEP
 *
 * @param {string} cep - CEP: Por exemplo: '60160-110' ou '60160110'
 */
async function getAddressByCEP(cep: string) {
    const cepRawValue = cep?.toString().replace(/\D+/g, '')

    if (cepRawValue?.length !== 8) {
        throw new Error('CEP deve conter exatamente 8 números.')
    }

    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${cepRawValue}/json`
        )

        const data = await response.json()

        if (data?.erro === true) {
            throw data
        }

        return convertViaCEPAddress(data)
    } catch (error) {
        if (error?.erro === true) {
            throw new Error('CEP não encontrado')
        }

        throw new Error('Erro na requisição ao ViaCEP')
    }
}

export default getAddressByCEP
