import React from "react";
import Headline, {
  HeadlineProps,
} from "../../../shared/components/Headline/Headline";
import Reservation from "../Reservation/Reservation";

/* ==============================================
 * Types and Interfaces
 * ============================================== */
type CompanyReservationProps = HeadlineProps & {
  isReservationSelected: boolean;
  selectedReservation: any;
};

const CompanyReservation: React.FunctionComponent<CompanyReservationProps> = ({
  headingLevel,
  headingText,
  isReservationSelected,
  selectedReservation,
}) => {
  const { day } = selectedReservation;
  return (
    <>
      <Headline headingLevel={headingLevel} headingText={headingText} />
      <div>
        {isReservationSelected ? (
          <Reservation
            {...selectedReservation}
            weekday={day}
            isReservationSelected={isReservationSelected}
            isDisabled={false}
          />
        ) : (
          <div style={{ padding: "2rem", height: "82px" }}>
            Select a reservation from the list below
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyReservation;
