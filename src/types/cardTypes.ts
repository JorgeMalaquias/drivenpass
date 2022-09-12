

type cardType = 'credit' | 'debit' | 'dualFunction';
export interface ICardBody {
    title: string
    number: string
    name: string
    securityCode: string
    expirationDate: string
    password: string
    isVirtual: any
    type: cardType
    userId: number
}