import { supabaseClient } from "@/libs/supabaseClient";
import { useEffect, useState } from "react";
import { User } from "./useUser";

export type Comment = {
  id: number;
  body: string | null;
  created_at: string | null;
  profiles: User;
};

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    if (postId) {
      supabaseClient
        .from("comments")
        .select(`id, body, created_at, profiles!inner(*)`)
        .eq("postId", postId)
        .returns<Comment[]>()
        .then(({ data }) => {
          setComments(data ? data.filter((yy) => yy.profiles !== null) : []);
        });
    }
  }, [postId]);
  return {
    comments,
  };
};

export const addComments = async (
  body: string,
  userId: string,
  postId: number
) => {
  await supabaseClient.from("comments").insert([
    {
      id: Math.floor(Math.random() * 10000) + 1,
      body,
      userId,
      postId,
      created_at: new Date(Date.now()).toISOString(),
    },
  ]);
};
