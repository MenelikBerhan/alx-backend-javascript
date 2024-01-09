/*  a function that returns an updated map for all items with initial quantity at 1. */
export default function (groceries) {
  try {
    groceries.forEach((value, key) => {
      if (value === 1) groceries.set(key, 100);
    });
    return groceries;
  } catch (error) { throw new Error('Cannot process'); }
}
