import { useState, useEffect } from "react"
import { ListItems } from "../../UI/ListItems";
import { Timer } from "../../UI/Functions/functions";
import { AddItensModal } from "../../UI/AddItems";

import "../CSS/list.css"
export default function Disposables() {
    const [disposables, setDisposables] = useState(()=>JSON.parse(localStorage.getItem('descartaveis')) ||   []);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('descartaveis', JSON.stringify(disposables))
    }, [disposables])

    function AddDisposable() {
        if (!nome || !preco || !quantidade) {
            setError("Informe todos os campos");
            Timer(setError)
            return;
        }
        setSuccess(`${nome} adicionado(a) com sucesso`)
        Timer(setSuccess)
        setDisposables(prev => [...prev, {
            nome,
            preco,
            quantidade
        }])


        setNome('')
        setPreco('')
        setQuantidade('')
    }
    return (
        <>
            <div className="button-add">
                <button onClick={() => setShowModal(true)}>
                    <b>
                        Adicionar Descartável
                    </b>
                </button>
            </div>

            {showModal && (
                <AddItensModal
                    title={"Descartáveis"}
                    nome={nome}
                    setNome={setNome}
                    preco={preco}
                    setPreco={setPreco}
                    quantidade={quantidade}
                    setQuantidade={setQuantidade}
                    error={error}
                    success={success}
                    handleAdd={AddDisposable}
                    fechar={() => setShowModal(false)}
                />
            )}
            {<ListItems title={"Descartáveis"} data={disposables} setData={setDisposables} item={"descartaveis"} />}
        </>
    )
}