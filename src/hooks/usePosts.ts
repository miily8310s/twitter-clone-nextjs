import { supabaseClient } from "@/libs/supabaseClient";
import { useEffect, useState } from "react";

type Post = {
  body: string | null;
  created_at: string | null;
  id: number;
  userId: string | null;
};

export const usePosts = (userId?: string) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    if (!userId) {
      return;
    } else {
      supabaseClient
        .from("posts")
        .select("*")
        .eq("userId", userId)
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
