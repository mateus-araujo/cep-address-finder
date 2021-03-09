import normalizeString from './normalizeString'

export default function compareStrings(text: string, compareText: string): boolean {
    const textNormalized = normalizeString(text)
    const compareTextNormalized = normalizeString(compareText)

    return (
        textNormalized === compareTextNormalized ||
        textNormalized.includes(compareTextNormalized) ||
        compareTextNormalized.includes(text)
    )
}
