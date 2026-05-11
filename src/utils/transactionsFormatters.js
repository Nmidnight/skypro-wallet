export const categoryLabels = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};

export const categoryValues = Object.fromEntries(
  Object.entries(categoryLabels).map(([value, label]) => [label, value]),
);

export function formatTransactionDate(date) {
  if (typeof date === "string") {
    const [year, month, day] = date.slice(0, 10).split("-");

    if (year && month && day) {
      return `${day}.${month}.${year}`;
    }
  }

  const dateObj = new Date(date);

  if (Number.isNaN(dateObj.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ru-RU").format(dateObj);
}

export function formatRubles(sum) {
  return `${Number(sum).toLocaleString("ru-RU")} ₽`;
}

export function toApiDate(date) {
  const [day, month, year] = date.split(".");
  return `${year}-${month}-${day}`;
}
