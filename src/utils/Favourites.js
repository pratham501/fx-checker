import { getFavData } from "@/Services/FavouriteDataService";
import { calculatePercentage } from "./LiveRates";
import { useFavouriteStore } from "@/stores/FavouriteStore";
import { useValueStore } from "@/stores/ValueStore";

export const checkFavState = (pair) => {
  // const currPair = `${useValueStore.getState().sendCurrency}/${
  //   useValueStore.getState().receiveCurrency
  // }`;

  // const favData = getFavouritesData();

  // if (!favData) {
  //   return false;
  // }

  // for (const obj of favData) {
  //   if (obj.pair == currPair) {
  //     return true;
  //   }
  // }

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

// export const getFavouriteList = () => {
//   const Favourite = localStorage.getItem("Favourite");
//   const FavouriteObj = JSON.parse(Favourite);

//   if (!Favourite) {
//     return [];
//   }

//   console.log("favObj -", FavouriteObj);
//   return FavouriteObj;
// };

// export function getFavouritesData() {
//   const FavouritesData = localStorage.getItem("FavouritesData");
//   const FavouriteDataList = JSON.parse(FavouritesData);

//   if (!FavouriteDataList) return;

//   useFavouriteStore.setState({ favData: FavouriteDataList });
//   return FavouriteDataList;
// }

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
  console.log("this is data in add to fav pairs- ", data);

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

// export async function createFavCardData() {
//   const favCardData = [];
//   const fav = getFavouriteList();

//   if (fav.length == 0) {
//     return;
//   }

//   for (const p of fav) {
//     const pairs = p.split("/");
//     const data = await getFavData(pairs[0], pairs[1]);
//     let percentage;
//     let rate;
//     if (data && data.length < 2) {
//       percentage = "0.00";
//       rate = data[0].rate;
//     } else {
//       percentage = calculatePercentage(data[1].rate, data[0].rate);
//       rate = data[1].rate;
//     }

//     favCardData.push({
//       quote: pairs[1],
//       base: pairs[0],
//       rate: rate,
//       percentage: percentage,
//     });
//   }

//   console.log("fav card data- ", favCardData);
//   useFavouriteStore.setState((state) => {
//     favData: [...state.favData, favCardData];
//   });
// }

export async function createFavCardData(pair) {
  const pairs = pair.split("/");
  const data = await getFavData(pairs[0], pairs[1]);

  if (!data) {
    console.log("This is the data for createFavCard - ", data);
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
