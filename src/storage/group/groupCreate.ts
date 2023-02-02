import { COLLECTION } from "@storage/storageConfig";
import { Storage } from "@storage/storage";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await Storage.getItem(COLLECTION.GROUP);

    const storage = JSON.stringify([...storedGroups, newGroup]);

    if (storage) {
      await Storage.setItem(COLLECTION.GROUP, storage);
    }
  } catch (error) {
    throw error;
  }
}
