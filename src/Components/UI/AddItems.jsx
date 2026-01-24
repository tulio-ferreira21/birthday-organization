// AddConvidadoModal.jsx
export function AddItensModal({
        title,
        nome,
        setNome,
        preco,
        setPreco,
        quantidade,
        setQuantidade,
        error,
        success,
        handleAdd,
        fechar
}) {
    return (
        <div className="overlay" onClick={fechar}>
            <div
                className="add"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Adicionar {title}</h2>

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
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
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
                <input type="number"
                    placeholder="Quantidade de itens"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                />
                <div className="btns">
                    <button id="add" onClick={handleAdd}>
                        <b>Adicionar</b>
                    </button>

                    <button id="cancel" onClick={fechar}>
                        <b>Cancelar</b>
                    </button>
                </div>
            </div>
        </div>
    )
}
