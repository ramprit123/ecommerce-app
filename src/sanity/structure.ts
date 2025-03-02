import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("product").title("Product"),
      S.documentTypeListItem("order").title("Order"),
      S.documentTypeListItem("sale").title("Sale"),
      S.documentTypeListItem("category").title("Categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["category"].includes(item.getId()!) &&
          !["product"].includes(item.getId()!) &&
          !["order"].includes(item.getId()!) &&
          !["sale"].includes(item.getId()!)
      ),
    ]);
