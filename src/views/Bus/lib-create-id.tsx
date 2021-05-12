let id: number;
id = parseInt(window.localStorage.getItem('inMax') || '0')
const createId = () => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id))
  return id
}

export { createId }