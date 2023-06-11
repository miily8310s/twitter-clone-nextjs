import { FC, useCallback } from "react";
import { SidebarLogo } from "./SidebarLogo";
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import type { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";
import { SidebarTweetButton } from "./SidebarTweetButton";
import styles from "../styles/components/Sidebar.module.css";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { onOpen as onLoginOpen } from "../slices/loginModalSlice";

type Item = {
  icon: IconType;
  label: string;
  href: string;
  auth?: boolean;
};

export const Sidebar: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser, onSignOut } = useCurrentUser();
  const items: Item[] = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: FaUser,
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ];

  const onItemClick = useCallback(
    (item: Item) => {
      if (item.auth && !currentUser) {
        dispatch(onLoginOpen());
      } else {
        router.push(item.href);
      }
    },
    [currentUser, dispatch, router]
  );

  const onTweetClick = useCallback(() => {
    if (!currentUser) {
      dispatch(onLoginOpen());
    } else {
      router.push("/");
    }
  }, [currentUser, dispatch, router]);

  return (
    <div className={styles.wrapper}>
      <SidebarLogo />
      {items.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          onClick={() => onItemClick(item)}
          auth={item.auth}
          label={item.label}
        />
      ))}
      {currentUser && (
        <SidebarItem
          onClick={() => onSignOut()}
          icon={BiLogOut}
          label="Logout"
        />
      )}
      <SidebarTweetButton onClick={onTweetClick} />
    </div>
  );
};
