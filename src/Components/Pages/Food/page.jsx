import { useState, useEffect } from "react"
import { ListItems } from "../../UI/ListItems";
import { Timer } from "../../UI/Functions/functions";
import { AddItensModal } from "../../UI/AddItems";

import "../CSS/list.css"
export default function Foods() {
    const [foods, setFoods] = useState(()=>JSON.parse(localStorage.getItem('comidas')) ||   []);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('comidas', JSON.stringify(foods))
    }, [foods])

    function AddFood() {
        if (!nome || !preco || !quantidade) {
            setError("Informe todos os campos");
            Timer(setError)
            return;
        }
        setSuccess(`${nome} adicionado(a) com sucesso`)
        Timer(setSuccess)
        setFoods(prev => [...prev, {
            nome,
            preco,
            quantidade
        }])
    }
    return (
        <>
            <div className="button-add">
                <button onClick={() => setShowModal(true)}>
                    <b>
                        Adicionar Comida
                    </b>
                </button>
            </div>

            {showModal && (
                <AddItensModal
                    title={"Comida"}
                    nome={nome}
                    setNome={setNome}
                    preco={preco}
                    setPreco={setPreco}
                    quantidade={quantidade}
                    setQuantidade={setQuantidade}
                    error={error}
                    success={success}
                    handleAdd={AddFood}
                    fechar={() => setShowModal(false)}
                />
            )}
            {<ListItems title={"Comidas"} data={foods} setData={setFoods} item={"comidas"} />}
        </>
    )
}