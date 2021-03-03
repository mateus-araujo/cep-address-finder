import { Address, ViaCEPAddress } from 'types'

export default function convertViaCEPAddress(address: ViaCEPAddress): Address {
    return {
        cep: address.cep,
        street: address.logradouro,
        complement: address.complemento,
        neighborhood: address.bairro,
        city: address.localidade,
        state: address.uf,
        ibge: address.ibge,
        gia: address.gia,
        ddd: address.ddd,
        siafi: address.siafi,
    }
}
