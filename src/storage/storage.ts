import AsyncStorage from "@react-native-async-storage/async-storage";

// import { COLLECTION } from "./storageConfig";
// type Item = valueof typeof COLLECTION;
// type Item = Partial<Record<COLLECTION, any>>;

export class Storage {
  static async getItem(item: string): Promise<string[] | string> {
    const storage = await AsyncStorage.getItem(item);

    try {
      if (Array.isArray(storage)) {
        const items: string[] = storage ? JSON.parse(storage) : [];
        return items;
      } else {
        return storage ? JSON.parse(storage) : "";
      }
    } catch (error) {
      throw error;
    }
  }

  static async setItem(item: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(item, value);
    } catch (error) {
      throw error;
    }
  }

  static async removeItem(item: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(item);
    } catch (error) {
      throw error;
    }
  }
}
