import navigationData from "@/services/mockData/navigationItems.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const navigationService = {
  async getAll() {
    await delay(200);
    return [...navigationData];
  },

  async getById(id) {
    await delay(200);
    const item = navigationData.find(item => item.Id === parseInt(id));
    if (!item) {
      throw new Error("Navigation item not found");
    }
    return { ...item };
  }
};