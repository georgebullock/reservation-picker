import React from "react";
import Grid from "../../shared/components/Grid/Grid";
import CompanyReservation from "./../../domain/ReservationSelection/CompanyReservation/CompanyReservation";
import Headline from "./../../shared/components/Headline/Headline";

const ReservationConfirmation: React.FunctionComponent = () => {
  return (
    <div>
      <div></div>
      <main>
        <Grid row={true}>
          <Grid row={false} sm={12} md={4}>
            <SelectedReservations />
          </Grid>
          <Grid row={false} sm={12} md={4}>
            <ReservationForm />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

const ReservationForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submission handled");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" />

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" type="text" />

        <label htmlFor="email">Email</label>
        <input name="email" type="text" />

        <label htmlFor="phoneNumber">Phone Number</label>

        <input name="phoneNumber" type="text" />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

const SelectedReservations = () => {
  return (
    <div>
      <Headline headingLevel="h2" headingText="Selected Appointments" />
      <CompanyReservation
        headingLevel="h3"
        headingText="Company 1"
        selectedReservation={{ id: 0, start_time: "8:00", end_time: "9:30" }}
        isReservationSelected={true}
      />
      <CompanyReservation
        headingLevel="h3"
        headingText="Company 2"
        selectedReservation={{ id: 0, start_time: "10:00", end_time: "10:30" }}
        isReservationSelected={true}
      />
      <CompanyReservation
        headingLevel="h3"
        headingText="Company 3"
        selectedReservation={{ id: 0, start_time: "12:00", end_time: "1:30" }}
        isReservationSelected={true}
      />
    </div>
  );
};

export default ReservationConfirmation;
