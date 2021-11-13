import allData from "./data";
export default class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(allData);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null;
    }
    const entry = allData[id];
    await randomDelay();
    return entry;
  }
}

const randomDelay = () => {
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(resolve, delay);
  });
};

/* 
getById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const avocade = Object.values(allData).find(
          (avocade) => avocade.id === id
        )
        await randomDelay()
        resolve(avocade)
      } catch (error) {
        reject(error)
      }
    })
  }
 */
