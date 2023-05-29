import { FC, useCallback } from "react";
import { SidebarLogo } from "./SidebarLogo";
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";
import { SidebarTweetButton } from "./SidebarTweetButton";
import styles from "../styles/components/Sidebar.module.css";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { onOpen as onLoginOpen } from "../slices/loginModalSlice";

export const Sidebar: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser, onSignOut } = useCurrentUser();
  const items = [
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

  const onTweetClick = useCallback(() => {
    if (!currentUser) {
      dispatch(onLoginOpen());
    }
    router.push("/");
  }, [currentUser, dispatch, router]);

  return (
    <div className={styles.wrapper}>
      <SidebarLogo />
      {items.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          onClick={() => router.push(item.href || "/")}
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
