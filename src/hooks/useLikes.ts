import { supabaseClient } from "../libs/supabaseClient";
import { useEffect, useState } from "react";
import { Post } from "./usePosts";

export const getLike = async (userId: number) => {
  const { data } = await supabaseClient
    .from("likes")
    .select("post_id")
    .eq("user_id", userId);
  return data ?? [];
};

export const setLike = async (postId: number, userId: string) => {
  await supabaseClient.from("likes").insert([
    {
      id: Math.floor(Math.random() * 10000) + 1,
      post_id: postId,
      user_id: userId,
    },
  ]);
};

export const useLikes = (userId?: string) => {
  const [likes, setLikes] = useState<Post["id"][]>([]);
  useEffect(() => {
    if (userId) {
      supabaseClient
        .from("likes")
        .select("post_id")
        .eq("user_id", userId)
        .then(({ data }) => {
          const temp: any = !data ? [] : data.map((d) => d.post_id);
          setLikes(temp);
        });
    }
  }, [userId]);
  return {
    likes,
  };
};
