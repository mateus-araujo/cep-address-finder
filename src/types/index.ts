export interface Address {
    cep: string
    street: string
    complement: string
    neighborhood: string
    city: string
    state: string
    ibge?: string
    gia?: string
    ddd?: string
    siafi?: string
}

export interface ViaCEPAddress {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}
