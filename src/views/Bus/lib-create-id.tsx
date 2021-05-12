let id: number;
id = 0;
const createId = () => {
  id += 1;
  return id
}

export { createId }