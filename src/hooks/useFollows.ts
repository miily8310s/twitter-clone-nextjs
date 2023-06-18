import { supabaseClient } from "@/libs/supabaseClient";
import { useEffect, useState } from "react";

export const setFollow = async (followId: string, followedId: string) => {
  await supabaseClient.from("follows").insert([
    {
      id: Math.floor(Math.random() * 10000) + 1,
      followId,
      followedId,
    },
  ]);
};

export const useFollows = (userId: string) => {
  const [followerUsers, setFollowerUsers] = useState<string[]>([]);
  useEffect(() => {
    if (userId) {
      supabaseClient
        .from("follows")
        .select("followId")
        .eq("followedId", userId)
        .then(({ data }) => {
          if (data) {
            const temp = data.map((d) => {
              if (d.followId) {
                return d.followId;
              }
            }) as string[];
            setFollowerUsers(temp);
          }
        });
    }
  }, [userId]);
  return {
    followerUsers,
    followerNum: followerUsers.length,
  };
};
