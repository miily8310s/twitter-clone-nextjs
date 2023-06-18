import { supabaseClient } from "@/libs/supabaseClient";
import { Database } from "../../types/supabase";
import { useEffect, useState } from "react";

export type User = Database["public"]["Tables"]["profiles"]["Row"];

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
