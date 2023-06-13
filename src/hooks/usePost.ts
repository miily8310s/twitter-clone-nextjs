import { supabaseClient } from "@/libs/supabaseClient";
import { useEffect, useState } from "react";
import { User } from "./useUser";

export type Post = {
  id: number;
  body: string | null;
  created_at: string | null;
  profiles: User;
};

export const usePost = (postId: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    if (postId) {
      supabaseClient
        .from("posts")
        .select(`id, body, created_at, profiles!inner(*)`)
        .eq("id", postId)
        .limit(1)
        .returns<Post>()
        .single()
        .then(({ data, error }) => {
          if (error) {
            setError(error);
          } else {
            setPost(data);
          }
        });
    }
  }, [postId]);
  return {
    post,
    error,
  };
};
