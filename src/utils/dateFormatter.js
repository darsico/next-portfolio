export const dateFormatter = (dateToFormat) => {
  const date = new Date(dateToFormat);
  const month = date.toLocaleDateString("default", { month: "long" }).toUpperCase().substring(0, 3);
  const formattedDate = month + " " + date.getFullYear();

  return formattedDate;
};
