import { Storage } from "@storage/storage";
import { COLLECTION } from "@storage/storageConfig";

export async function groupGetAll() {
  try {
    const groups = await Storage.getItem(COLLECTION.GROUP);
    return groups;
  } catch (error) {
    throw error;
  }
}
