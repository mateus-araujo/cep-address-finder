import { getAddressByCEP } from 'lib/get-address-by-cep'

test('get address by cep must return an address', async () => {
    await expect(getAddressByCEP('60160-110')).resolves.toEqual({
        cep: '60160-110',
        city: 'Fortaleza',
        complement: 'até 1298/1299',
        ddd: '85',
        gia: '',
        ibge: '2304400',
        neighborhood: 'Meireles',
        siafi: '1389',
        state: 'CE',
        street: 'Rua Ana Bilhar',
    })
})

test('get address by cep must return an empty address when cep doesn\'t exist', async () => {
    await expect(getAddressByCEP('60160-666')).resolves.toEqual({ "cep": undefined, "city": undefined, "complement": undefined, "ddd": undefined, "gia": undefined, "ibge": undefined, "neighborhood": undefined, "siafi": undefined, "state": undefined, "street": undefined })
})

test('get address by cep must fail with a length error', async () => {
    await expect(getAddressByCEP('60160-11')).rejects.toThrow('CEP deve conter exatamente 8 números.')
})


