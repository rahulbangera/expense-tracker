import { db } from "~/server/db";

const getUserById = async (id: string) =>
  await db.user.findUnique({
    where: { id },
  });

export { getUserById };