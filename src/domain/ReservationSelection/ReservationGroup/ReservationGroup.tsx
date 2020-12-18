import React from "react";
import Headline from "../../../shared/components/Headline/Headline";
import Reservation, { ReservationProps } from "../Reservation/Reservation";

/* ==============================================
 * Types and Interfaces
 * ============================================== */
export type ReservationGroupProps = {
  id: number;
  headingText: string;
  timeSlots: ReservationProps[];
  handleReservationClick: (props: any) => void;
  activeReservation?: string;
};

const ReservationGroup: React.FunctionComponent<ReservationGroupProps> = ({
  headingText,
  timeSlots,
  handleReservationClick,
  activeReservation,
}) => {
  const activeReservationValues = activeReservation
    ? activeReservation.split("-")
    : [];

  console.log({ activeReservationValues });

  const isDisabled = (item: ReservationProps) => {
    if (
      activeReservationValues[0] === item.start_time &&
      activeReservationValues[1] === item.end_time
    ) {
      return true;
    }

    return false;
  };

  const reservationDataProvider = (id: number | null) => {
    const filteredItem = timeSlots.filter((item) => item.id === id)[0];

    console.log({ filteredItem });

    handleReservationClick({
      id,
      start_time: filteredItem.start_time,
      end_time: filteredItem.end_time,
      day: headingText,
    });
  };

  const list = timeSlots.map((item) => {
    console.log({ item });
    return (
      <li key={item.id}>
        <Reservation
          id={item.id}
          weekday={item.weekday}
          start_time={item.start_time}
          end_time={item.end_time}
          handleReservationClick={reservationDataProvider}
          isDisabled={isDisabled(item)}
        />
      </li>
    );
  });

  return (
    <li>
      <Headline headingLevel="h3" headingText={headingText} />
      <ul>{list}</ul>
    </li>
  );
};

export default ReservationGroup;
