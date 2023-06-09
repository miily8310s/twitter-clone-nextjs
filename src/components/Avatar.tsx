import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import styles from "../styles/components/Avatar.module.css";

type AvatarProps = {
  onClick?: MouseEventHandler<HTMLImageElement>;
  imageUrl: string | undefined;
  hasBorder?: boolean;
  isLarge?: boolean;
};

export const Avatar: FC<AvatarProps> = ({
  isLarge,
  hasBorder,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className={`${styles.avatar}  ${hasBorder && styles.border} ${
        isLarge && styles.large
      }`}
    >
      <Image
        style={{ objectFit: "cover", borderRadius: "100%" }}
        src={imageUrl || "/images/default-profile.png"}
        fill
        sizes="3rem, 3rem"
        alt="Avatar image"
        onClick={onClick}
      />
    </div>
  );
};
