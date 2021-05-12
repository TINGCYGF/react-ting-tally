let id: number;
const createId = () => {
  id = parseInt(window.localStorage.getItem('idMax') || '0')
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id))
  return id
}

export { createId }