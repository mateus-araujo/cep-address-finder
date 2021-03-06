const nonDigits = /\D/g

function isNumberAtComplementPattern(complement: string, number: number): boolean {
    if (complement.match(/até \d*\/\d*/g)) {
        const [, max] = complement.replace('até ', '').split('/')

        if (number <= Number(max)) {
            return true
        }
    }

    if (complement.match(/até \d*/g) && !complement.includes('/')) {
        const max = complement.replace(nonDigits, '')

        if (number <= Number(max)) {
            return true
        }
    }

    if (complement.match(/de \d* a \d*/g) && !complement.includes('/')) {
        const [min, max] = complement.replace('de ', '').replace('a ', '').split(' ')

        if (number >= Number(min) && number <= Number(max)) {
            return true
        }
    }

    if (complement.match(/de \d*\/\d* a \d*\/\d*/g)) {
        const [min, max] = complement.replace('de ', '').replace('a ', '').split(' ')
        const [minNumber] = min.split('/')
        const [, maxNumber] = max.split('/')

        if (number >= Number(minNumber) && number <= Number(maxNumber)) {
            return true
        }
    }

    if (complement.match(/de \d* ao fim/g) && !complement.includes('/')) {
        const min = complement.replace(nonDigits, '')

        if (number >= Number(min)) {
            return true
        }
    }

    if (complement.match(/de \d*\/\d* ao fim/g)) {
        const [min] = complement.replace('de ', '').replace(' ao fim', '').split('/')

        if (number >= Number(min)) {
            return true
        }
    }

    return false
}

export default isNumberAtComplementPattern
