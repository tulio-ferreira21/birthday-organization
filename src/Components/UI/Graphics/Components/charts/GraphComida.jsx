import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { chartColors } from "../../charts/colors";
import { defaultPieOptions } from "../../charts/options";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PizzaComidas({ comidas }) {

    const data = {
        labels: comidas.map(i => i.nome),
        datasets: [
            {
                data: comidas.map(i => Number(i.preco) * Number(i.quantidade)),
                backgroundColor: chartColors
            }
        ]
    };

    return <Pie data={data} options={defaultPieOptions} />;
}
