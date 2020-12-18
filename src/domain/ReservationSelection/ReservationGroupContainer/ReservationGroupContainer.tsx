import React, { useContext } from "react";
import ReservationGroup, {
  ReservationGroupProps,
} from "../ReservationGroup/ReservationGroup";
import { ReservationProps } from "./../Reservation/Reservation";
import ReservationSelectionContext from "./../ReservationSelectionContext/ReservationSelectionContext";

/* ==============================================
 * Types and Interfaces
 * ============================================== */
export type ReservationGroupContainerProps = {
  reservationGroups: ReservationGroupProps[];
  handleReservationClick: (props: ReservationProps) => void;
};

const ReservationGroupContainer: React.FunctionComponent<ReservationGroupContainerProps> = ({
  reservationGroups,
  handleReservationClick,
}) => {
  const selectedReservations = useContext(ReservationSelectionContext);

  const list = reservationGroups.map((item) => {
    const activeReservation = selectedReservations.filter((reservation) =>
      reservation.includes(item.headingText)
    );

    const reservationGroupProps = {
      key: item.id,
      id: item.id,
      headingText: item.headingText,
      timeSlots: item.timeSlots,
      handleReservationClick,
      ...(activeReservation[0] && {
        activeReservation: activeReservation[0],
      }),
    };

    return <ReservationGroup {...reservationGroupProps} />;
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default ReservationGroupContainer;
