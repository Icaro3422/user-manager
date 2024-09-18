import { User } from "@/interfaces/user.interface";

const USERS_ENDPOINT = "http://localhost:3333/users";

export const postUser = async (user: User) => {
  const users = await fetch(USERS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(user),
  });

  return users.json();
};
