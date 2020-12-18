import React, { ReactElement } from "react";

/* ==============================================
 * Types and Interfaces
 * ============================================== */
export type ReservationProps = {
  id: number | null;
  weekday: string;
  start_time: string | null;
  end_time: string | null;
  handleReservationClick?: (id: number | null) => void;
  isDisabled: boolean;
  isReservationSelected?: boolean;
};

const Reservation: React.FunctionComponent<ReservationProps> = (
  props
): ReactElement => {
  const { handleReservationClick, ...clickProps } = props;
  const { weekday, start_time, end_time, isDisabled } = clickProps;

  const onReservationClick = () => {
    // Guard condition to ensure handleReservationClick is defined
    if (!handleReservationClick) return;
    handleReservationClick(clickProps.id);
  };

  return (
    <div>
      <button onClick={onReservationClick} disabled={isDisabled}>
        <span>{weekday}</span>
        <span>{start_time}</span>
        <span>to</span>
        <span>{end_time}</span>
      </button>
    </div>
  );
};

export default Reservation;
