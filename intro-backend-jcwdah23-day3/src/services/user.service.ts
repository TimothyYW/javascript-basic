import { ApiError } from "../utils/api-error";
import { User } from "../types/user";
import { db } from "../config/db";


export const getUsersService = async () => {
  const querry = 'select * from users';
  const {rows} = await db.query(querry);
  return rows;
};

export const getUserService = async (id: number) => {
  const query = `select * from users where id = ${id}`;
  const {rows} = await db.query<user>(query);

  if (rows.length === 0) {
    throw new ApiError("user not found", 404);
  }

  return rows[0];
};

export const createUserService = async (body: { name: string }) => {
  const querry = 'insert into users (name) values ($1)';

  await db.query(querry, [body.name]);

  return { message: "create user success" };
};

export const updateUserService = async (
  id: number,
  body: Partial<{ name: string }>
) => {
  const existignUser = await getUserService(id);

  const updatedName = body.name ?? existignUser.name;

  const query = `update users set name = $1 where id = $2`;

  await db.query(query, [updatedName, id]);

  return { message: "update user success" };
};

export const deleteUserService = async (id: number) => {
  await getUserService(id);

  const query = `delete from users where id = $1`;

  await db.query(query, [id]);

  return { message: "delete user success" };
};
