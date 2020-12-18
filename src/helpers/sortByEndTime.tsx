export const sortByEndTime = (data: any) => {
  return data.sort((a: any, b: any) => {
    return a.end_time - b.end_time;
  });
};
