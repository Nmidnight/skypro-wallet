const categoryMap = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жильё",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};

const colors = {
  food: "#d9b6ff",
  transport: "#ffb53d",
  housing: "#6ee4fe",
  joy: "#b0aeff",
  education: "#bcec30",
  others: "#ffb9b8",
};

export const transformTransactions = (transactions) => {
  const sums = {};

  transactions.forEach((t) => {
    if (!sums[t.category]) {
      sums[t.category] = 0;
    }
    sums[t.category] += t.sum;
  });

  return Object.keys(categoryMap).map((key) => ({
    name: categoryMap[key],
    value: sums[key] || 0,
    color: colors[key],
  }));
};