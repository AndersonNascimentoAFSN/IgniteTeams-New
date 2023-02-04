import { COLLECTION } from "@storage/storageConfig";
import { Storage } from "@storage/storage";
import { AppError } from "@utils/AppError";

export async function groupRemove(groupName: string) {
  try {
    const storedGroups = await Storage.getItem(COLLECTION.GROUP);

    if (Array.isArray(storedGroups)) {
      const groupFind = storedGroups.findIndex((group) => group === groupName);

      if (groupFind !== -1) {
        storedGroups.splice(groupFind, 1);
      }

      const storage = JSON.stringify(storedGroups);

      if (storage) {
        await Storage.setItem(COLLECTION.GROUP, storage);
      }
    }
  } catch (error) {
    throw error;
  }
}
