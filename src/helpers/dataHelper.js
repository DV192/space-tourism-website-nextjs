export function addIsActiveField(data) {
  const newData = data.map(item => ({
    ...item,
    isActive: false,
  }));

  newData[0].isActive = true;

  return newData
}