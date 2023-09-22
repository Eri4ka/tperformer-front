export const addMonths = (count: number): Date => {
  const date = new Date();
  date.setMonth(date.getMonth() + count);

  return date;
};
export const date=new Date().toLocaleDateString()
