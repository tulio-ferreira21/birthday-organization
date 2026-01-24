import styles from "./css/listitems.module.css"
export function ListItems({ item, title, data, setData }) {
    function ClearTable() {
        localStorage.removeItem(item)
        setData([])
    }
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th colSpan="3" className={styles.th}>
                            <h2>
                                Lista de {title || undefined}
                            </h2>
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {data.length > 0 ? data.map(i => (
                        <tr className={styles.tr}>
                            <td className={styles.td}>{i.nome}</td>
                            <td className={styles.td}>{i.quantidade}</td>
                            <td className={styles.td}>R${i.preco}</td>
                            <td className={styles.td}>Total: R${(i.preco * i.quantidade).toFixed(2)}</td>
                        </tr>


                    ))
                        :
                        <tr>
                            <td>
                                Nenhum(a) Item Cadastrado
                            </td>
                        </tr>
                    }
                    <tr>
                        <td><strong>Total: </strong> R${data.reduce((total, food)=>{
                            return (total + food.preco * food.quantidade)
                        }, 0).toLocaleString()}</td>
                    </tr>
                </tbody>
                {data.length > 0 && (
                    <div className={styles.removeAll}>
                        <button className="btn btn-warning" onClick={ClearTable}>
                            Remover {data.length} Alimento(s)
                        </button>
                    </div>
                )}
            </table>
        </div >

    )
}