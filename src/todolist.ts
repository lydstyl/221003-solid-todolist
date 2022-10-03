interface todoItem {
    name: string
    link?: string
    scheduledDate?: Date
    importance: number // 1 2 3
    colorLabels?: ColorLabel[]
}
interface ColorLabel {
    name: string
    color: string
}

const todolist: todoItem[] = [
    {
        name: "Payer Leduc.",
        link: "https://trello.com/c/nig3oUMi/7218-payer-leduc",
        scheduledDate: new Date(),
        importance: 2,
    },
    {
        name: "Acheter gants wingfoil.",
        link: "https://www.decathlon.fr/p/gants-surf-eau-froide-neoprene-3-mm/_/R-p-1183?mc=8158443&c=NOIR",
        scheduledDate: new Date(),
        importance: 1,
    },
    {
        name: "Proposer apéro voisin.",
        link: "https://trello.com/c/FEhJXEvQ/6706-ap%C3%A9ro-voisin-barbecue",
        scheduledDate: new Date(),
        importance: 1,
    },
]

export default todolist
