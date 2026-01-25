import styles from "./css/listitems.module.css"
export function ListConvidados({ title, data, setData }) {
    function ClearTable() {
        localStorage.removeItem('convidados')
        setData([])
    }
    function removeItem(index) {
        const newArray = data.filter((_, i) => i !== index);
        setData(newArray);
        localStorage.setItem("convidados", JSON.stringify(newArray));
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
                    {data.length > 0 ? (
                        data.map((i, index) => (
                            <tr key={index} className={styles.tr}>
                                <td className={styles.td}>
                                    {i.nomeConvidado}
                                </td>
                                <td>
                                    <div className="btns">
                                        <button className="btn btn-danger" onClick={() => removeItem(index)}>
                                            <b>Remover</b>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">
                                Nenhum convidado adicionado
                            </td>
                        </tr>
                    )}

                </tbody>
                {data.length > 0 && (
                    <div className={styles.removeAll}>
                        <button className="btn btn-warning" onClick={ClearTable}>
                            Remover {data.length} convidado(s)
                        </button>
                    </div>
                )}
            </table>
        </div>

    )
}