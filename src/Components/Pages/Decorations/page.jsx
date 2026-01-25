import { useState, useEffect } from "react"
import { ListItems } from "../../UI/ListItems";
import { Timer } from "../../UI/Functions/functions";
import { AddItensModal } from "../../UI/AddItems";

import "../CSS/list.css"
export default function Decorations() {
    const [decorations, setDecorations] = useState(()=>JSON.parse(localStorage.getItem('decoracao')) ||   []);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('decoracao', JSON.stringify(decorations))
    }, [decorations])

    function AddDecorations() {
        if (!nome || !preco || !quantidade) {
            setError("Informe todos os campos");
            Timer(setError)
            return;
        }
        setSuccess(`${nome} adicionado(a) com sucesso`)
        Timer(setSuccess)
        setDecorations(prev => [...prev, {
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
                        Adicionar Decoração
                    </b>
                </button>
            </div>

            {showModal && (
                <AddItensModal
                    title={"Decorações"}
                    nome={nome}
                    setNome={setNome}
                    preco={preco}
                    setPreco={setPreco}
                    quantidade={quantidade}
                    setQuantidade={setQuantidade}
                    error={error}
                    success={success}
                    handleAdd={AddDecorations}
                    fechar={() => setShowModal(false)}
                />
            )}
            {<ListItems title={"Decorações"} data={decorations} setData={setDecorations} item={"decoracao"} />}
        </>
    )
}