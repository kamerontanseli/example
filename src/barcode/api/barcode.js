import { ajaxJSON } from "../../app/shared/utils/ajax";

export const getBarcode = id =>
  ajaxJSON(
    new Request(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
  );
