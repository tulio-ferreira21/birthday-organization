import { useState } from 'react'
export default function EditItem({ action, title, item, fechar, handleAdd }) {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [nome, setNome] = useState(item?.nome || "")
    const [preco, setPreco] = useState(item?.preco || "")
    const [quantidade, setQuantidade] = useState(item?.quantidade || "")

    const [nomeConvidado, setConvidadoNome] = useState(item?.nomeConvidado || "")

    function editar() {
        if (action === "item") {
            if (!nome || !preco || !quantidade) {
                setError("Preencha todos os campos");
                return;
            }

            handleAdd({
                ...item,
                nome,
                preco: Number(preco),
                quantidade: Number(quantidade),
            });
            fechar()
        }

        if (action === "convidados") {
            if (!nomeConvidado) {
                setError("Informe o nome do convidado");
                return;
            }

            handleAdd({
                ...item,
                nomeConvidado,
            });
            setSuccess('')
            fechar();
        }
    }

    return (
        <>
            {action === "item" &&
                <div className="overlay" onClick={fechar}>
                    <div
                        className="add"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Editar {nome} - {title}</h2>

                        {error && (
                            <div className="alert alert-danger w-75">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="alert alert-success w-75">
                                {success}
                            </div>
                        )}
                        <label htmlFor="" className="">
                            <strong>Nome</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <label htmlFor="" className="">
                            <strong>Preço p/ unidade(em R$)</strong>
                        </label>
                        <input
                            type="text"
                            inputMode="decimal"
                            placeholder="Preço p/ unidade"
                            value={preco}
                            onChange={(e) => {
                                const value = e.target.value.replace(",", ".");
                                if (/^\d*\.?\d*$/.test(value)) {
                                    setPreco(value);
                                }
                            }}
                        />
                        <label htmlFor="" className="">
                            <strong>Quantidade</strong>
                        </label>
                        <input type="number"
                            placeholder="Quantidade de itens"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <div className="btns">
                            <button id="add" onClick={editar}>
                                <b>Editar</b>
                            </button>

                            <button id="cancel" onClick={fechar}>
                                <b>Cancelar</b>
                            </button>
                        </div>
                    </div>
                </div>
            }
            {action === "convidados" &&
                <div className="overlay" onClick={fechar}>
                    <div
                        className="add"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Editar Convidado</h2>

                        {error && (
                            <div className="alert alert-danger w-75">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="alert alert-success w-75">
                                {success}
                            </div>
                        )}

                        <input
                            type="text"
                            placeholder="Nome do convidado"
                            value={nomeConvidado}
                            onChange={(e) => setConvidadoNome(e.target.value)}
                        />

                        <div className="btns">
                            <button id="add" onClick={editar}>
                                <b>Editar</b>
                            </button>

                            <button id="cancel" onClick={fechar}>
                                <b>Cancelar</b>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}