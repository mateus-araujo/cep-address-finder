import { findAddress, getAddressesBySearch } from './find-address'
import { getAddressByCEP } from './get-address-by-cep'

export {
    findAddress,
    getAddressByCEP,
    getAddressesBySearch,
}

const cepAddressFinder = {
    findAddress,
    getAddressByCEP,
    getAddressesBySearch,
}

export default cepAddressFinder
