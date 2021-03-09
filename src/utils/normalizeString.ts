export default function normalizeString(text: string | undefined): string {
    if (!text) return ''

    return (
        text
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
            .split(' ')
            .join(' ')
            .trim() || ''
    )
}
