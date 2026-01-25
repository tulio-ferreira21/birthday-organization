export function ConfirmDialog({
    confirmar,
    nomeItem,
    nomeLista,
    fechar
}) {
    return (
        <div className="overlay" onClick={fechar}>
            <div
                className="add"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Deseja Continuar?</h2>

                <div className="text-center">
                    Deseja remover <strong>{nomeItem}</strong> da lista de {nomeLista}
                </div>
                <div className="btns">
                    <button className="btn btn-danger" onClick={confirmar}>Confirmar</button>
                    <button className="btn btn-warning" onClick={fechar}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
