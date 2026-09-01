import { getTodayDate } from "./DateAndTime";

export function getItemData(key) {
  const todayDate = getTodayDate();

  const item = localStorage.getItem(key);

  if (item) {
    const itemObj = JSON.parse(item);
    if (itemObj.date != todayDate) {
      return;
    }

    return itemObj.data;
  }

  return;
}

export function setItemData(key, val) {
  let obj = {};
  obj["data"] = val;
  obj["date"] = getTodayDate();

  localStorage.setItem(key, JSON.stringify(obj));
}
