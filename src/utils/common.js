export const getMenuUsingSubArray = (sideMenuData, selectedSubmenu = []) => {
  return sideMenuData
    .filter((menu) => menu.submenu.some((sub) => selectedSubmenu.includes(sub)))
    .map((menu) => menu.title);
};

export const priceRange = (price) => {
  if (price < 350) {
    return "Under $350";
  }
  if (price >= 350 && price <= 600) {
    return "$350 - $600";
  }
  if (price > 601) {
    return "Over $601";
  }
};

export const sideBarFilter = (
  data = [],
  selectedItem = [],
  sideMenuData = []
) => {
  if (selectedItem?.includes("All") || selectedItem?.length === 0) {
    return data;
  }
  const selectedTitle = getMenuUsingSubArray(sideMenuData, selectedItem);
  let filteredVal = data;
  if (selectedTitle?.includes("Category")) {
    filteredVal = filteredVal.filter(({ category = [] }) =>
      category.some((cat) => selectedItem.includes(cat))
    );
  }
  if (selectedTitle?.includes("Brand")) {
    filteredVal = filteredVal.filter(({ brand = "" }) =>
      selectedItem.includes(brand)
    );
  }
  if (selectedTitle?.includes("Price")) {
    filteredVal = filteredVal.filter(({ price }) =>
      selectedItem.includes(priceRange(price))
    );
  }
  return filteredVal;
};
