import styles from "./css/listitems.module.css"
export function ListItems({ title, data }) {
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
                {data ? data.map(i => (
                    <tbody className={styles.tbody}>
                        <tr className={styles.tr}>
                            <td className={styles.td}>{i.name}</td>
                            <td className={styles.td}>{i.qtd}</td>
                            <td className={styles.td}>{i.price}</td>
                        </tr>
                    </tbody>


                ))
                    :
                    "Nenhum item cadastrado"
                }
            </table>
        </div>

    )
}