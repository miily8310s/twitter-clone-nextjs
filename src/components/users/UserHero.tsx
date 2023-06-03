import Image from "next/image";
import { FC } from "react";
import { Avatar } from "../Avatar";

type UserHeroProps = {
  coverImage?: string;
  profileImage?: string;
};

export const UserHero: FC<UserHeroProps> = ({ coverImage, profileImage }) => {
  return (
    <div
      style={{
        height: "11rem",
        position: "relative",
        backgroundColor: "rgb(64 64 64)",
      }}
    >
      {coverImage && (
        <Image
          src={coverImage}
          fill
          alt="User Cover Image"
          style={{ objectFit: "cover" }}
        />
      )}
      <div style={{ position: "absolute", bottom: "-16px", left: "4px" }}>
        <Avatar isLarge={true} hasBorder={true} imageUrl={profileImage} />
      </div>
    </div>
  );
};
