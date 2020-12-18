import ReservationTimePickers from "../domain/ReservationSelection/ReservationTimePickers/ReservationTimePickers";
import ReservationConfirmation from "./../routes/Reservation/ReservationConfirmation";

/** ==============================================
 * Reservation Confirmation Routes
 * ============================================== */
export const routes = [
  {
    url: "/",
    text: "Home page link",
    component: ReservationTimePickers,
  },
  {
    url: "/reservation-confirmation",
    text: "Reserve a Reservation",
    component: ReservationConfirmation,
  },
];
