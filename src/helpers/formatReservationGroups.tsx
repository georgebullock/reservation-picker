export const formatReservationGroups = (data: any) => {
  const groups = [];
  const days = Object.keys(data);

  for (let i = 0; i < days.length; i++) {
    if (data[days[i]]) {
      const obj = {} as any;

      obj["id"] = i;
      obj["headingText"] = days[i];
      obj["timeSlots"] = data[days[i]];

      groups.push(obj);
    }
  }

  return groups;
};
