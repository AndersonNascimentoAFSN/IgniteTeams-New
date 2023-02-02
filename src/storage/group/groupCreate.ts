import { COLLECTION } from "@storage/storageConfig";
import { Storage } from "@storage/storage";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await Storage.getItem(COLLECTION.GROUP);

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError(
        `Já existe um grupo cadastrado com o nome ${newGroup}.`
      );
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    if (storage) {
      await Storage.setItem(COLLECTION.GROUP, storage);
    }
  } catch (error) {
    throw error;
  }
}
