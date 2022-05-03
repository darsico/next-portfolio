export const getIconNameAndSource = (sourceArray, nameArray) => {
  if (!sourceArray) return "Falta elegir ícono";
  let finalArray = [];
  sourceArray.forEach((value, index) => {
    let obj = {};
    obj.source = value;
    obj.name = nameArray[index];
    finalArray.push(obj);
  });
  return finalArray;
};
