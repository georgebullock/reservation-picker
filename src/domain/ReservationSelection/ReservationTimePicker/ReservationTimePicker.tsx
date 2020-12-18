import React, { ReactElement, useCallback, useState } from "react";
import ReservationGroupContainer from "../ReservationGroupContainer/ReservationGroupContainer";
import { ReservationGroupProps } from "../ReservationGroup/ReservationGroup";
import CompanyReservation from "../CompanyReservation/CompanyReservation";

/* ==============================================
 * Types and Interfaces
 * ============================================== */
export type ReservationTimePickerProps = {
  id: number;
  headingText: string;
  groups: ReservationGroupProps[];
  onReservationSelect: (timeslot: string) => void;
};

const ReservationTimePicker: React.FunctionComponent<ReservationTimePickerProps> = ({
  headingText,
  groups,
  onReservationSelect,
}): ReactElement => {
  const [selectedReservation, setReservation] = useState({
    id: null,
    start_time: null,
    end_time: null,
  });

  const [isReservationSelected, setIsReservationSelected] = useState(false);

  const handleReservationClick = useCallback(
    (props) => {
      setIsReservationSelected(true);

      setReservation({ ...selectedReservation, ...props });
      onReservationSelect(`${props.start_time}-${props.end_time}-${props.day}`);
    },
    [onReservationSelect, selectedReservation]
  );

  return (
    <section>
      <CompanyReservation
        headingLevel="h2"
        headingText={headingText}
        selectedReservation={selectedReservation}
        isReservationSelected={isReservationSelected}
      />
      <ReservationGroupContainer
        reservationGroups={groups}
        handleReservationClick={handleReservationClick}
      />
    </section>
  );
};

export default ReservationTimePicker;
