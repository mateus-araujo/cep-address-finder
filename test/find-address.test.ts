import { findAddress } from 'lib/find-address'

test('find address must fail with a length error', async () => {
    await expect(findAddress({ state: 'CE', city: 'Fortaleza', street: 'Ab' })).rejects.toThrow(
        'street deve conter pelo menos 3 caracteres.'
    )
})

test('find address must fail with an empty array', async () => {
    await expect(findAddress({ state: 'CE', city: 'Fortaleza', street: 'Abcd' })).resolves.toEqual({
        addresses: [],
        selectedAddress: undefined,
    })

    await expect(findAddress({ state: 'ABC', city: 'São Paulo', street: 'Abcd' })).rejects.toThrow(
        'Erro na requisição ao ViaCEP'
    )
})

describe('find address should return an selected address', () => {
    it('tests with: CE, Fortaleza, Av. Pontes Vieira, 993', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'Av. Pontes Vieira',
                number: '993',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60135-237',
            city: 'Fortaleza',
            complement: 'de 991 ao fim - lado ímpar',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Dionisio Torres',
            siafi: '1389',
            state: 'CE',
            street: 'Avenida Pontes Vieira',
        })
    })

    it('tests with: CE, Fortaleza, Av. Pontes Vieira, 440', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'Av. Pontes Vieira',
                number: '440',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60130-240',
            city: 'Fortaleza',
            complement: 'até 1550 - lado par',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'São João do Tauape',
            siafi: '1389',
            state: 'CE',
            street: 'Avenida Pontes Vieira',
        })
    })

    it('tests with: CE, Fortaleza, Av. Pontes Vieira, 133', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'Av. Pontes Vieira',
                number: '133',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60130-973',
            city: 'Fortaleza',
            complement: '',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Joaquim Távora',
            siafi: '1389',
            state: 'CE',
            street: 'Avenida Pontes Vieira 133',
        })
    })

    it('tests with: CE, Fortaleza, Av. Santos Dumont, 5781', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'Av. Santos Dumont',
                number: '5781',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60175-053',
            city: 'Fortaleza',
            complement: 'de 5781 a 6869 - lado ímpar',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Papicu',
            siafi: '1389',
            state: 'CE',
            street: 'Avenida Santos Dumont',
        })
    })

    it('tests with: CE, Fortaleza, Avenida F, 499', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'Avenida F',
                number: '499',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60533-641',
            city: 'Fortaleza',
            complement: '(Cj Ceará) - até 499 - lado ímpar',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Conjunto Ceará I',
            siafi: '1389',
            state: 'CE',
            street: 'Avenida F',
        })
    })

    it('tests with: CE, Fortaleza, Rua Maria Tomásia, 768', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                number: '768',
                street: 'Rua Maria Tomásia',
                neighborhood: 'Aldeota',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60150-170',
            city: 'Fortaleza',
            complement: '',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Aldeota',
            siafi: '1389',
            state: 'CE',
            street: 'Rua Maria Tomásia',
        })
    })

    it('tests with: CE, Fortaleza, R. Osvaldo Cruz, 2133', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'R. Osvaldo Cruz',
                number: '2133',
                neighborhood: 'Estância (Dionísio Torres)',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60125-151',
            city: 'Fortaleza',
            complement: 'de 2071/2072 a 3198/3199',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Dionisio Torres',
            siafi: '1389',
            state: 'CE',
            street: 'Rua Osvaldo Cruz',
        })
    })

    it('tests with: CE, Fortaleza, R. Osvaldo Cruz, 3201', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'R. Osvaldo Cruz',
                number: '3201',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60120-325',
            city: 'Fortaleza',
            complement: 'de 3200/3201 ao fim',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'São João do Tauape',
            siafi: '1389',
            state: 'CE',
            street: 'Rua Osvaldo Cruz',
        })
    })

    it('tests with: CE, Fortaleza, R. Osvaldo Cruz, Conjunto Palmeiras', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'R. Osvaldo Cruz',
                neighborhood: 'Conjunto Palmeiras',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60870-205',
            city: 'Fortaleza',
            complement: '',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Conjunto Palmeiras',
            siafi: '1389',
            state: 'CE',
            street: 'Rua Osvaldo Cruz',
        })
    })

    it('tests with: CE, Fortaleza, R. Granja Castelo, 211, Messejana (Sede)', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Fortaleza',
                street: 'R. Granja Castelo',
                number: '211',
                neighborhood: 'Messejana (Sede)',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '60842-040',
            city: 'Fortaleza',
            complement: '',
            ddd: '85',
            gia: '',
            ibge: '2304400',
            neighborhood: 'Messejana',
            siafi: '1389',
            state: 'CE',
            street: 'Rua Granja Castelo',
        })
    })

    it('tests with: CE, Aracati', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Aracati',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '62800-000',
            city: 'Aracati',
            complement: '',
            ddd: '88',
            gia: '',
            ibge: '2301109',
            neighborhood: '',
            siafi: '1321',
            state: 'CE',
            street: '',
        })
    })

    it('tests with: CE, Bela Cruz', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Bela Cruz',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '62570-000',
            city: 'Bela Cruz',
            complement: '',
            ddd: '88',
            gia: '',
            ibge: '2302305',
            neighborhood: '',
            siafi: '1345',
            state: 'CE',
            street: '',
        })
    })

    it('tests with: CE, Bela Cruz, Centro', async () => {
        await expect(
            findAddress({
                state: 'CE',
                city: 'Bela Cruz',
                neighborhood: 'Centro',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '62570-000',
            city: 'Bela Cruz',
            complement: '',
            ddd: '88',
            gia: '',
            ibge: '2302305',
            neighborhood: '',
            siafi: '1345',
            state: 'CE',
            street: '',
        })
    })

    it('tests with: SP, São Paulo, R. Capote Valente, 39', async () => {
        await expect(
            findAddress({
                state: 'SP',
                city: 'São Paulo',
                street: 'R. Capote Valente',
                number: '39',
                neighborhood: '',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '05409-000',
            city: 'São Paulo',
            complement: 'até 325/326',
            ddd: '11',
            gia: '1004',
            ibge: '3550308',
            neighborhood: 'Pinheiros',
            siafi: '7107',
            state: 'SP',
            street: 'Rua Capote Valente',
        })
    })

    it('tests with: SP, São Paulo, R. Capote Valente, 327', async () => {
        await expect(
            findAddress({
                state: 'SP',
                city: 'São Paulo',
                street: 'Rua Capote Valente',
                number: '327',
                neighborhood: '',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '05409-001',
            city: 'São Paulo',
            complement: 'de 327/328 a 605/606',
            ddd: '11',
            gia: '1004',
            ibge: '3550308',
            neighborhood: 'Pinheiros',
            siafi: '7107',
            state: 'SP',
            street: 'Rua Capote Valente',
        })
    })

    it('tests with: SP, São Paulo, R. Capote Valente, 1024', async () => {
        await expect(
            findAddress({
                state: 'SP',
                city: 'São Paulo',
                street: 'Rua Capote Valente',
                number: '1024',
                neighborhood: '',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '05409-002',
            city: 'São Paulo',
            complement: 'de 607/608 a 1023/1024',
            ddd: '11',
            gia: '1004',
            ibge: '3550308',
            neighborhood: 'Pinheiros',
            siafi: '7107',
            state: 'SP',
            street: 'Rua Capote Valente',
        })
    })

    it('tests with: SP, São Paulo, R. Capote Valente, 1025', async () => {
        await expect(
            findAddress({
                state: 'SP',
                city: 'São Paulo',
                street: 'Rua Capote Valente',
                number: '1025',
                neighborhood: '',
            })
        ).resolves.toHaveProperty('selectedAddress', {
            cep: '05409-003',
            city: 'São Paulo',
            complement: 'de 1025/1026 ao fim',
            ddd: '11',
            gia: '1004',
            ibge: '3550308',
            neighborhood: 'Pinheiros',
            siafi: '7107',
            state: 'SP',
            street: 'Rua Capote Valente',
        })
    })
})
