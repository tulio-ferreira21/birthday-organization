import styles from "./css/listitems.module.css"
import { ConfirmDialog } from "./ConfirmDialog";
import { useState } from "react"
export function ListConvidados({ title, data, setData }) {
    const [confirmDialog, setConfirmDialog] = useState(false)
    const [index, setIndex] = useState([]);
    const [nomeConvidado, setNomeConvidado] = useState('')
    const [action, setAction] = useState('')
    function ClearTable() {
        localStorage.removeItem('convidados')
        setData([])
    }
    function removeItem(index) {
        const newArray = data.filter((_, i) => i !== index);
        setData(newArray);
        localStorage.setItem("convidados", JSON.stringify(newArray));
        setConfirmDialog(false)
    }

    return (
        <div className={styles.wrapper}>
            {confirmDialog && (
                <ConfirmDialog
                    nomeItem={nomeConvidado}
                    nomeLista={title}
                    confirmar={() => {
                        if (action === 'all') {
                            ClearTable()
                        } else if (action === "one") {
                            removeItem(index)
                        }
                    }}
                    fechar={() => setConfirmDialog(false)}
                />
            )}
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
                                    <div className="d-flex gap-1">
                                        <button className="btn btn-success">
                                            <i className='bi bi-pencil'></i>
                                        </button>
                                        <button className="btn btn-danger" onClick={() => {
                                            setAction("one")
                                            setNomeConvidado(i.nomeConvidado)
                                            setIndex(index)
                                            setConfirmDialog(true)
                                        }}>
                                            <i className="bi bi-trash"></i>
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
                        <button className="btn btn-warning" onClick={() => {
                            setAction('all')
                            setNomeConvidado('Todos os convidados')
                            setConfirmDialog(true)
                        }}>
                            Remover {data.length} convidado(s)
                        </button>
                    </div>
                )}
            </table>
        </div>

    )
}