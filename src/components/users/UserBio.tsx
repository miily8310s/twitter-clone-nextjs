import { FC, MouseEventHandler } from "react";
import { Button } from "../Button";
import { BiCalendar } from "react-icons/bi";

type UserBioPros = {
  isMine: boolean;
  name: string;
  username: string;
  bio: string;
  createdAt: string;
  isFollowing: boolean;
  followingLength: number;
  followersCount: number;
  onClickEvent: MouseEventHandler<HTMLButtonElement>;
};

export const UserBio: FC<UserBioPros> = (props) => {
  return (
    <div style={{ border: "1px solid #333333", paddingBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0.5rem",
        }}
      >
        {props.isMine ? (
          <Button blacked label="Edit" onClick={props.onClickEvent} />
        ) : (
          <Button
            blacked
            label={props.isFollowing ? "UnFollowing" : "Follow"}
            onClick={props.onClickEvent}
          />
        )}
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: 600 }}>
            {props.name}
          </p>
          <p style={{ color: "rgb(115 115 115)" }}>@{props.username}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <p style={{ color: "#ffffff" }}>{props.bio}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
              color: "rgb(115 115 115)",
            }}
          >
            <BiCalendar size={24} />
            <p>Joined {props.createdAt.substring(0, 10)}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          gap: "1.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <p style={{ color: "#ffffff" }}>{props.followingLength}</p>
          <p style={{ color: "rgb(115 115 115)" }}>Following</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <p style={{ color: "#ffffff" }}>{props.followersCount}</p>
          <p style={{ color: "rgb(115 115 115)" }}>Followers</p>
        </div>
      </div>
    </div>
  );
};
