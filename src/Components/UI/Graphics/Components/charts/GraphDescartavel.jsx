import { Pie } from "react-chartjs-2";
import { chartColors } from "../../charts/colors";
import { defaultPieOptions } from "../../charts/options";   
export default function PizzaDescartaveis({ descartaveis }) {

    const data = {
        labels: descartaveis.map(i => i.nome),
        datasets: [
            {
                data: descartaveis.map(i => Number(i.preco)* Number(i.quantidade)),
                backgroundColor: chartColors
            }
        ]
    };

    return <Pie data={data} options={defaultPieOptions} />;
}
