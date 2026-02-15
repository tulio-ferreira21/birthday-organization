import { useState, useEffect } from "react"
import { ListConvidados } from "../../UI/ListConvidados";
import { AddConvidadoModal } from "../../UI/AddConvidado";
import { Timer } from '../../UI/Functions/functions'
import "../CSS/list.css"
export default function Invites() {
    const [nomeConvidado, setConvidadoNome] = useState('')
    const [convidados, setConvidados] = useState(() => JSON.parse(localStorage.getItem('convidados')) ||
        []);
    const [error, setError] = useState('');
    const [success, setSucess] = useState('');
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        localStorage.setItem('convidados', JSON.stringify(convidados))
    }, [convidados])

    function handleAdd() {
        if (!nomeConvidado) {
            setError("Informe o nome do convidado");
            Timer(setError)
            return;
        }
        setSucess(`Convidado ${nomeConvidado} adicionado`);
        Timer(setSucess)
        setConvidados(prev => [...prev, { nomeConvidado }])
        setConvidadoNome('')
    }

    return (
        <>
            <div className="button-add">
                <button onClick={() => setShowModal(true)}>
                    <b>
                        Adicionar Convidado
                    </b>
                </button>
            </div>

            {showModal && (
                <AddConvidadoModal
                    nomeConvidado={nomeConvidado}
                    setConvidadoNome={setConvidadoNome}
                    error={error}
                    success={success}
                    handleAdd={handleAdd}
                    fechar={() => setShowModal(false)}
                />
            )}

            {<ListConvidados title={"Convidados"} data={convidados} setData={setConvidados} />}
        </>
    )
}
