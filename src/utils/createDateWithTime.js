const createDataWithTime = (sampleData) => {
  let object = {};
  const length = sampleData.length;
  const dataSize = parseInt(length / 48);

  for (let i = 0; i <= 48; i++) {
    const objKey = i / 2;
    let objValue;
    if (i === 0) {
      objValue = sampleData.slice(0, parseInt(dataSize / 2));
    } else {
      objValue = sampleData.slice(0, i * dataSize);
    }

    object = { ...object, [objKey]: objValue };
  }
  return object;
};

export default createDataWithTime;
