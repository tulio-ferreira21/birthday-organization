import PizzaComidas from "../../UI/Graphics/Components/charts/GraphComida";
import PizzaDecoracoes from "../../UI/Graphics/Components/charts/GraphDecoracao";
import PizzaDescartaveis from "../../UI/Graphics/Components/charts/GraphDescartavel";
import PizzaGeral from "../../UI/Graphics/Components/charts/GraphGeral";
import styles from "./cousts.module.css"
export default function Cousts() {
    const comidas = JSON.parse(localStorage.getItem('comidas')) || 0;
    const descartaveis = JSON.parse(localStorage.getItem('descartaveis')) || 0
    const decoracoes = JSON.parse(localStorage.getItem('decoracao')) || 0
    return (
        <div className="m-auto">
            <div className={styles.header}>
                <h3>Dashboard de Custos</h3>
            </div>
            <div className={styles.graphMain}>
                <h3>Custos Gerais</h3>
                <div className={styles.graph}>
                    {comidas.length > 0 || descartaveis.length > 0 || decoracoes.length > 0 ? <PizzaGeral comidas={comidas} descartaveis={descartaveis} decoracoes={decoracoes} />
                        :
                        <h4>Nenhum dos itens abaixo foi cadastrado</h4>
                    }
                </div>
            </div>
            <div className={styles.gridGraph}>
                <div className={styles.graphCard}>
                    <h3>Comidas</h3>
                    <div className={styles.pizzaGraph}>
                        {comidas.length > 0 ? <PizzaComidas comidas={comidas} /> : <h4>Nenhum item cadastrado</h4>}
                    </div>
                </div>

                <div className={styles.graphCard}>
                    <h3>Decorações</h3>
                    <div className={styles.pizzaGraph}>
                        {decoracoes.length > 0 ? <PizzaDecoracoes decoracoes={decoracoes} /> : <h4>Nenhum item cadastrado</h4>}
                    </div>
                </div>
                <div className={styles.graphCard}>
                    <h3>Descartáveis</h3>
                    <div className={styles.pizzaGraph}>
                        {descartaveis.length > 0 ? <PizzaDescartaveis descartaveis={descartaveis} /> : <h4>Nenhum item cadastrado</h4>}
                    </div>
                </div>
            </div>
        </div>
    )
}