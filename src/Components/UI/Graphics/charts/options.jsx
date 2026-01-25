export const defaultPieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 14,
        padding: 15
      }
    },
    tooltip: {
      callbacks: {
        label: (context) =>
          `${context.label}: R$ ${context.parsed}`
      }
    }
  }
};
