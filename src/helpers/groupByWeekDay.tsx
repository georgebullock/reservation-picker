export const groupByWeekday = (data: any) => {
  return data.reduce((acc: any, curr: any, index: any) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Format start time. Pad times with 0 minutes
    const startTime = new Date(curr.start_time);
    const paddedStartTimeMinutes = startTime
      .getMinutes()
      .toString()
      .padEnd(2, "0");

    // Format end time. Pad times with 0 minutes
    const endTime = new Date(curr.end_time);
    const paddedEndTimeMinutes = endTime.getMinutes().toString().padEnd(2, "0");

    // Get end times day of the week as string e.g. "Monday"
    const weekday = days[endTime.getDay()];

    if (!acc[weekday]) {
      acc[weekday] = [];
    }

    acc[weekday].push({
      id: index,
      weekday,
      start_time: `${startTime.getHours()}:${paddedStartTimeMinutes}`,
      end_time: `${endTime.getHours()}:${paddedEndTimeMinutes}`,
    });

    return acc;
  }, {});
};
