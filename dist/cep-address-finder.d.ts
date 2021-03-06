interface Address {
    cep: string;
    street: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
}

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
declare function findAddress({ state, city, street, number, neighborhood }: {
    state: string;
    city: string;
    street?: string;
    number?: string;
    neighborhood?: string;
}): Promise<{
    addresses: Address[];
    selectedAddress: Address | undefined;
}>;

/**
 * Retorna lista de endereços a partir da pesquisa
 *
 * @param {string} state - (Obrigatório) UF do estado. Por exemplo: 'CE'.
 * @param {string} city - (Obrigatório) Cidade. Por exemplo: 'Fortaleza'.
 * @param {string} street - (Obrigatório) Logradouro. Por exemplo: 'Rua Ana Bilhar'.
 */
declare function getAddressesBySearch(state: string, city: string, street?: string): Promise<Address[]>;

/**
 * Retorna endereço a partir do CEP
 *
 * @param {string} cep - CEP: Por exemplo: '60160-110' ou '60160110'
 */
declare function getAddressByCEP(cep: string): Promise<Address>;

declare const _default: {
    findAddress: typeof findAddress;
    getAddressByCEP: typeof getAddressByCEP;
    getAddressesBySearch: typeof getAddressesBySearch;
};

export default _default;
export { findAddress, getAddressByCEP, getAddressesBySearch };
