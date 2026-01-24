export function Quantity({ num }) {
    return (
        <p>Quantidade: {num ? `${num} Convidados` : "Nenhum Item Adicionado"}</p>
    )
}

export function Cousts({dinheiro}){
    return(
        <span>{dinheiro ? dinheiro : "Nenhum valor cadastrado"}</span>
    )
}