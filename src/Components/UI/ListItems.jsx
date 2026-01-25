import { ConfirmDialog } from "./ConfirmDialog";
import styles from "./css/listitems.module.css"
import { useState } from "react";
export function ListItems({ item, title, data, setData }) {
    const [confirmDialog, setConfirmDialog] = useState(false)

    const [index, setIndex] = ([]);
    const [nameItem, setNameItem] = ('')
    function ClearTable() {
        localStorage.removeItem(item)
        setData([])
    }
    function removeItem(index) {
        const newArray = data.filter((_, i) => i !== index);
        setData(newArray);
        localStorage.setItem(item, JSON.stringify(newArray));
        setConfirmDialog(false)
    }

    return (
        <div className={styles.wrapper}>
            {confirmDialog && (
                <ConfirmDialog
                    nomeItem={nameItem}
                    nomeLista={title}
                    confirmar={() => removeItem(index)}
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
                    {data.length > 0 ? data.map((i, index) => (
                        <tr className={styles.tr} key={index}>
                            <td className={styles.td}>{i.nome}</td>
                            <td className={styles.td}>{i.quantidade}</td>
                            <td className={styles.td}>R${i.preco}</td>
                            <td className={styles.td}>R${(i.preco * i.quantidade).toFixed(2)}</td>
                            <td className={styles.td}>
                                <button className="btn btn-danger" onClick={() => {
                                    setIndex(index)
                                    setNameItem(i.nome)
                                    setConfirmDialog(true)
                                }}
                                >Remover</button>
                            </td>
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
                        <td><strong>Custos Totais: </strong> R${data.reduce((total, food) => {
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