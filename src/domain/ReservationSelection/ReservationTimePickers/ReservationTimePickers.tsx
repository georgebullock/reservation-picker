import React, { useEffect, useState, useCallback } from "react";
import ReservationTimePicker from "./../ReservationTimePicker/ReservationTimePicker";
import Grid from "../../../shared/components/Grid/Grid";
import { createTimePickerData } from "../../../helpers/createTimerPickerData";
import ReservationSelectionContext from "./../ReservationSelectionContext/ReservationSelectionContext";
import { Link } from "react-router-dom";
import * as db from "./../../../database/data.json";

const ReservationTimePickers: React.FunctionComponent = () => {
  const [data, setData] = useState([]);
  const [activeReservations, setActiveReservations] = useState<string[]>([]);

  useEffect(() => {
    const getResults = async () => {
      // Resolve JSON from db.json
      // In production this would be a network request via fetch or axios
      const res = await Promise.resolve(db);

      // Format data to match ReservationTimePicker props
      const formattedData = await createTimePickerData(res);

      setData(formattedData);
    };

    getResults();
  }, []);

  const handleActiveReservation = useCallback(
    (timeslot: string) => {
      setActiveReservations([...activeReservations, timeslot]);
    },
    [activeReservations]
  );

  const reservationTimePickers = data.map((item: any) => {
    return (
      <Grid key={item.id} row={false} sm={12} md={4}>
        <ReservationTimePicker
          id={item.id}
          headingText={item.company}
          groups={item.groups}
          onReservationSelect={handleActiveReservation}
        />
      </Grid>
    );
  });

  return (
    <ReservationSelectionContext.Provider value={activeReservations}>
      <Grid row={true}>{reservationTimePickers}</Grid>
      <div>
        <Link to="/reservation-confirmation">Confirm Reservations</Link>
      </div>
    </ReservationSelectionContext.Provider>
  );
};

export default ReservationTimePickers;
