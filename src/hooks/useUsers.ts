import { User } from "@/interfaces/user.interface";
import { useEffect, useState } from "react";

const USERS_ENDPOINT = "http://localhost:3333/users";

export const useUsers = () => {
  const [users, setUsers] = useState<User | null>(null);
  useEffect(() => {
    fetch(USERS_ENDPOINT)
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }, []);

  return {
    users,
  };
};
