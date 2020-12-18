import { sortByEndTime } from "./sortByEndTime";
import { groupByWeekday } from "./groupByWeekDay";
import { formatReservationGroups } from "./formatReservationGroups";

export const createTimePickerData = (data: any) => {
  return data.default.map((item: any, index: any) => {
    const obj = {} as any;

    obj["id"] = item.id;
    obj["company"] = item.name;

    // Generate reservation groups sorted by weekday and reservation end time
    const sortedEndTimes = sortByEndTime(data.default[index].time_slots);
    const groupedReservations = groupByWeekday(sortedEndTimes);
    const formattedGroups = formatReservationGroups(groupedReservations);
    obj["groups"] = formattedGroups;

    return obj;
  });
};
