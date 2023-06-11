import { supabaseClient } from "@/libs/supabaseClient";
import { useEffect, useState } from "react";

export type User = {
  avatar_url: string | null;
  cover_image: string | null;
  email: string | null;
  followingIds: string[] | null;
  id: string;
  name: string | null;
  username: string | null;
  bio: string | null;
};

export const useUser = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    if (userId) {
      supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .limit(1)
        .single()
        .then(({ data, error }) => {
          if (error) {
            setError(error);
          } else {
            setUser(data);
          }
        });
    }
  }, [userId]);
  return {
    user,
    error,
  };
};
