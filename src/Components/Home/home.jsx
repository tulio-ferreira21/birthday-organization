import { Cousts, Quantity } from "../UI/Functions/functions";
import styles from "./home.module.css"
import { Link } from "react-router-dom";
export default function Home() {
    const convidadosData = localStorage.getItem('convidados');

    const convidadosQuantity = convidadosData ? JSON.parse(convidadosData) : []
    const qtd = Array.isArray(convidadosQuantity) ? convidadosQuantity.length : 0;

    return (
        <div className={styles.containerParent}>
            <div className={styles.containerWrapper}>
                <Link to="/list/convidados" className={styles.link}>
                    <div className={styles.card}>
                        <h4>Lista de Convidados</h4>
                        <Quantity num={qtd} />
                    </div>
                </Link>
                <div className={styles.containerList}>
                    <h1>Listas</h1>
                    <div className={styles.lists}>
                        <Link to="/list/comida" className={styles.link}>
                            <div className={styles.cardsList}>
                                <h4>Comida</h4>
                            </div>
                        </Link>
                        <Link to="/list/descartaveis" className={styles.link}>
                            <div className={styles.cardsList}>
                                <h4>Descartáveis</h4>
                            </div>
                        </Link>
                        <Link to="/list/decoracao" className={styles.link}>
                            <div className={styles.cardsList}>
                                <h4>Decoração</h4>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="/custos" className={styles.link}>
                    <div className={styles.card}>
                        <h3>Total de Custos</h3>
                        <Cousts dinheiro={0} />
                    </div>
                </Link>
            </div>
        </div>
    )

}