export function AddConvidadoModal({
    nomeConvidado,
    setConvidadoNome,
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
                <h2>Adicionar Convidado</h2>

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
