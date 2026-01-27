export function Quantity({ QuantidadeConvidados }) {
    return (
        <p>Quantidade: {QuantidadeConvidados ?
            `${QuantidadeConvidados} ${QuantidadeConvidados > 1 ? "convidados" : "convidado"}`
            :
            "Nenhum convidado adicionado"}</p>
    )
}

export function Cousts({ food, decoration, disposable }) {
    const total = food + decoration + disposable;
    return (
        <span>{total === 0 ? total : "Nenhum valor informado"}</span>
    )
}

export function Timer(setState) {
    setTimeout(() => {
        setState('');
    }, 3000)
}
export function calculateTotal(key) {
    const data = JSON.parse(localStorage.getItem(key)) || []

    return data.reduce((total, item) => {
        return total + item.preco * item.quantidade
    }, 0)
} 