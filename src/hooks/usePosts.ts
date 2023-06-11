import { supabaseClient } from "@/libs/supabaseClient";
import { useEffect, useState } from "react";
import { User } from "./useUser";

export type Post = {
  id: number;
  body: string | null;
  created_at: string | null;
  profiles: User;
};

export const usePosts = (userId?: string) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    if (!userId) {
      supabaseClient
        .from("posts")
        .select(`id, body, created_at, profiles!inner(*)`)
        .returns<Post[]>()
        .then(({ data, error }) => {
          if (error) {
            setError(error);
          } else {
            setPosts(data.filter((yy) => yy.profiles !== null));
          }
        });
    } else {
      supabaseClient
        .from("posts")
        .select(`id, body, created_at, profiles!inner (*)`)
        .eq("userId", userId)
        .returns<Post[]>()
        .then(({ data, error }) => {
          if (error) {
            setError(error);
          } else {
            setPosts(data);
          }
        });
    }
  }, [userId]);
  return {
    posts,
    error,
  };
};
