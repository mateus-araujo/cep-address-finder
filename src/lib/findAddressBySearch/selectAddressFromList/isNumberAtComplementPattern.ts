const nonDigits = /\D/g

function isNumberAtComplementPattern(complemento: string, number: number) {
    if (complemento.match(/até \d*\/\d*/g)) {
        const [, max] = complemento.replace('até ', '').split('/')

        if (number <= Number(max)) {
            return true
        }
    }

    if (complemento.match(/até \d*/g) && !complemento.includes('/')) {
        const max = complemento.replace(nonDigits, '')

        if (number <= Number(max)) {
            return true
        }
    }

    if (complemento.match(/de \d* a \d*/g) && !complemento.includes('/')) {
        const [min, max] = complemento.replace('de ', '').replace('a ', '').split(' ')

        if (number >= Number(min) && number <= Number(max)) {
            return true
        }
    }

    if (complemento.match(/de \d*\/\d* a \d*\/\d*/g)) {
        const [min, max] = complemento.replace('de ', '').replace('a ', '').split(' ')
        const [minNumber] = min.split('/')
        const [, maxNumber] = max.split('/')

        if (number >= Number(minNumber) && number <= Number(maxNumber)) {
            return true
        }
    }

    if (complemento.match(/de \d* ao fim/g) && !complemento.includes('/')) {
        const min = complemento.replace(nonDigits, '')

        if (number >= Number(min)) {
            return true
        }
    }

    if (complemento.match(/de \d*\/\d* ao fim/g)) {
        const [min] = complemento.replace('de ', '').replace(' ao fim', '').split('/')

        if (number >= Number(min)) {
            return true
        }
    }

    return false
}

export default isNumberAtComplementPattern
