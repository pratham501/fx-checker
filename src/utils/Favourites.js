import { getFavData } from "@/Services/FavouriteDataService";
import { calculatePercentage } from "./LiveRates";
import { useFavouriteStore } from "@/stores/FavouriteStore";
import { useValueStore } from "@/stores/ValueStore";

export const checkFavState = (pair) => {

  if (
    useFavouriteStore.getState().favData.length == 0 ||
    !useFavouriteStore.getState().favData
  ) {
    return false;
  }

  for (const obj of useFavouriteStore.getState().favData) {
    if (obj?.pair == pair) {
      return true;
    }
  }

  return false;
};


export function setFavouriteData() {
  const FavouritesData = localStorage.getItem("FavouritesData");
  const FavouriteDataList = JSON.parse(FavouritesData);

  if (!FavouriteDataList) return;

  useFavouriteStore.setState({ favData: FavouriteDataList });
}

export async function addToFavourites(pair) {
  const pairs = pair.split("/");

  if (pairs[0] == pairs[1]) return;

  const FavouritesData = localStorage.getItem("FavouritesData");
  let FavouritesDataList;
  if (FavouritesData) {
    FavouritesDataList = JSON.parse(FavouritesData);

    if (FavouritesDataList) {
      for (const obj of FavouritesDataList) {
        if (obj?.pair == pair) {
          return;
        }
      }
    }
  }

  const data = await createFavCardData(pair);

  if (!data) return;

  if (!FavouritesDataList) {
    let obj = [];
    obj.push(data);
    localStorage.setItem("FavouritesData", JSON.stringify(obj));
    useFavouriteStore.setState({ favData: obj });
    return;
  }

  const favDataObj = FavouritesDataList;
  favDataObj.push(data);
  localStorage.setItem("FavouritesData", JSON.stringify(favDataObj));
  useFavouriteStore.setState((state) => ({
    favData: [...state.favData, data],
  }));
}

export function removeFavouritePair(pair) {
  const FavouriteData = localStorage.getItem("FavouritesData");
  let FavouriteDataList;
  if (FavouriteData) {
    FavouriteDataList = JSON.parse(FavouriteData);

    if (!FavouriteDataList) {
      return;
    }
  }

  const newFavList = FavouriteDataList.filter((obj) => obj?.pair != pair);
  useFavouriteStore.setState({ favData: newFavList });
  // function removePair() {
  //   setTimeout(() => {}, 300);
  // }
  // removePair();
  localStorage.setItem("FavouritesData", JSON.stringify(newFavList));
}

export function toggleFavouritePair(pair) {
  const isFavourite = checkFavState(pair);

  if (isFavourite) {
    removeFavouritePair(pair);
    return;
  }

  addToFavourites(pair);
}


export async function createFavCardData(pair) {
  const pairs = pair.split("/");
  const data = await getFavData(pairs[0], pairs[1]);

  if (!data) {
    return;
  }

  let percentage;
  let rate;
  if (data && data.length < 2) {
    percentage = "0.00";
    rate = data[0].rate;
  } else {
    percentage = calculatePercentage(data[1].rate, data[0].rate);
    rate = data[1].rate;
  }

  return {
    pair: pair,
    rate: rate,
    percentage: percentage,
  };
}
