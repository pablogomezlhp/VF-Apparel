import Product from "../interfaces/Product";
import { RangeVariant } from "../types/types";
import { encryptStorage } from "./storage";

export const orderBy = (
    data: Product[],
    filterType: RangeVariant
  ): Product [] =>  {
    if (filterType === "Title - A to Z") {
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterType === "Title - Z to A") {
      return [...data].sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterType === "Highest Price") {
      return [...data].sort(
        (a, b) =>
          parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price)
      );
    } else if (filterType === "Lowest Price") {
      return [...data].sort(
        (a, b) =>
          parseFloat(a.variants[0].price) - parseFloat(b.variants[0].price)
      );
    } else {
      return data;
    }
  };

export function setEncryptedLocalStorage(key: string, value: any) {

    console.log("entrou aqui..")
    encryptStorage.setItem(key, value);

}
export function getEncryptedLocalStorage(key: string) {
    return encryptStorage.getItem(key);
}