export default function createIteratorObject(report) {
  const names = Object.values(report.allEmployees);
  const allNames = [];
  for (const list of names) {
    allNames.push(...list);
  }
  return (allNames);
}
