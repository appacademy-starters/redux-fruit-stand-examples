
export const getFruitIDs = ({ fruit }) => (
  fruit.map((f) => f.id)
);

export const getFruitNames = ({ fruit }) => (
  fruit.map((f) => f.name)
);

export const getDistinctFruitNames = ({ fruit }) => {
  const fruitNames = fruit.map((f) => f.name);
  const distinctFruitNames = Array.from(new Set(fruitNames)).sort();
  return distinctFruitNames;
};
