import { Pie } from "react-chartjs-2";
import { chartColors } from "../../charts/colors";
import { defaultPieOptions } from "../../charts/options";

export default function PizzaGeral({
    comidas,
    decoracoes,
    descartaveis
}) {

    const totalComidas = comidas.reduce(
        (s, i) => s + Number(i.preco) * Number(i.quantidade), 0
    );

    const totalDecoracoes = decoracoes.reduce(
        (s, i) => s + Number(i.preco) * Number(i.quantidade), 0
    );

    const totalDescartaveis = descartaveis.reduce(
        (s, i) => s + Number(i.preco)* Number(i.quantidade), 0
    );

    const data = {
        labels: ["Comidas", "Decorações", "Descartáveis"],
        datasets: [
            {
                data: [
                    totalComidas,
                    totalDecoracoes,
                    totalDescartaveis
                ],
                backgroundColor: chartColors
            }
        ]
    };

    return <Pie data={data} options={defaultPieOptions} />;
}
