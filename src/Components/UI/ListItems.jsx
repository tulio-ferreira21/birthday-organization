import { ConfirmDialog } from "./ConfirmDialog";
import styles from "./css/listitems.module.css"
import { useState } from "react";
import EditItem from "./Functions/DialogEdit";
export function ListItems({ item, title, data, setData }) {
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [edit, setEdit] = useState(false)
    const [itemEdit, setItemEdit] = useState(null)
    const [index, setIndex] = useState(null);
    const [nameItem, setNameItem] = useState('')
    const [action, setAction] = useState('')
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
    function handleEdit(itemEditado){
        const novaLista =  [...data];
        novaLista[index] = itemEditado;

        setData(novaLista)
        localStorage.setItem(item, JSON.stringify(novaLista))
    }
    return (
        <div className={styles.wrapper}>
            {confirmDialog && (
                <ConfirmDialog
                    nomeItem={nameItem}
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
            {edit &&
                <EditItem action={action} title={title} item={itemEdit} index={index} handleAdd={handleEdit} fechar={() => {
                    setEdit(false)
                    setIndex(null)
                    setItemEdit(null)
                }} />
            }
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
                            <td className={`${styles.td} d-flex gap-1`}>
                                <button className="btn btn-success" onClick={() => {
                                    setAction("item")
                                    setEdit(true)
                                    setItemEdit(i)
                                    setIndex(index)
                                }}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-danger" onClick={() => {
                                    setAction('one')
                                    setIndex(index)
                                    setNameItem(i.nome)
                                    setConfirmDialog(true)
                                }}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
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
                        <button className="btn btn-warning" onClick={() => {
                            setAction("all")
                            setNameItem("Todos itens")
                            setConfirmDialog(true)
                        }}>
                            Remover {data.length} {data.length > 1 ? "itens" : "item"}
                        </button>
                    </div>
                )}
            </table>
        </div >

    )
}