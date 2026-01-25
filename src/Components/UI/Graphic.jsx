import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraficoPizzaComidas({ comidas }) {

  const data = {
    labels: comidas.map(item => item.nome),
    datasets: [
      {
        data: comidas.map(item => Number(item.preco)),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8BC34A",
          "#FF9800"
        ]
      }
    ]
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: R$ ${context.parsed}`;
          }
        }
      },
      legend: {
        position: "bottom"
      }
    }
  };

  return <Pie data={data} options={options} />;
}
