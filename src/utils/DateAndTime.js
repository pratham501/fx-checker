import { useHistoryStore } from "@/stores/HistoryStore";
import moment from "moment";

export const getYesterdayDate = () => {
  const yesterdayDate = new moment().subtract(1, "days").format("YYYY-MM-D");
  return yesterdayDate;
};

export function getOneMonthDate() {
  const oneMonthDate = new moment().subtract(1, "months").format("YYYY-MM-D");

  console.log("1m date-", oneMonthDate);

  return oneMonthDate;
}

export function getThreeMonthDate() {
  const threeMonthDate = new moment().subtract(3, "months").format("YYYY-MM-D");

  return threeMonthDate;
}

export function getOneYearDate() {
  const oneYearDate = new moment().subtract(1, "years").format("YYYY-MM-D");

  console.log("sub 1 yr- ", oneYearDate);

  return oneYearDate;
}

export function getOneMonth() {
  const oneMonthDate = new moment().subtract(1, "months");

  console.log("1m date-", oneMonthDate);

  return oneMonthDate;
}

export function getThreeMonth() {
  const threeMonthDate = new moment().subtract(3, "months");

  return threeMonthDate;
}

export function getOneYear() {
  const oneYearDate = new moment().subtract(1, "years");

  console.log("sub 1 yr- ", oneYearDate);

  return oneYearDate;
}

export function getGraphTimeLabels() {
  let startDate;
  switch (useHistoryStore.getState().timelineValue) {
    case "1m":
      startDate = new moment(getOneMonth());
      break;

    case "3m":
      startDate = new moment(getThreeMonth());
      break;

    case "1y":
      startDate = new moment(getOneYear());
      break;
  }

  const endDate = new moment();
  let dates = [];

  while (startDate <= endDate) {
    if (useHistoryStore.getState().timelineValue == "1y") {
      dates.push(startDate.format("MMM D YYYY"));
    } else {
      dates.push(startDate.format("MMM D"));
    }

    startDate.add(1, "days");
  }

  return dates;
}
