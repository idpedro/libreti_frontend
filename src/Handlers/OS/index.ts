import { OSCardInterface } from '../../Pages/OS/OsCard';

const sortById = (a: OSCardInterface, b: OSCardInterface) => {
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
  return 0;
};

const sortAlphaByName = (a: OSCardInterface, b: OSCardInterface) => {
  return a.client.localeCompare(b.client as string);
};

const sortByPriority = (a: OSCardInterface, b: OSCardInterface) => {
  if (
    (a.priority === 'high' && b.priority === 'medium') ||
    (a.priority === 'high' && b.priority === 'normal') ||
    (a.priority === 'medium' && b.priority === 'normal')
  ) {
    return -1;
  }
  if (
    (b.priority === 'high' && a.priority === 'medium') ||
    (b.priority === 'high' && a.priority === 'normal') ||
    (b.priority === 'medium' && a.priority === 'normal')
  ) {
    return 1;
  }
  return 0;
};

const SortOptions=["prioridade","nome","id"]
const Sort={
  prioridade:sortByPriority,
  nome:sortAlphaByName,
  id:sortById
}
export {Sort , SortOptions};
