import { User } from "@/hooks/useUser";
import { Avatar } from "./Avatar";
import { FC } from "react";
import { Button } from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";

type PostFormProps = {
  currentUser: User;
  placeholder: string;
};

type FormValues = {
  tweet: string;
};

export const PostForm: FC<PostFormProps> = ({ currentUser, placeholder }) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "1rem",
      }}
    >
      <div>
        <Avatar imageUrl={currentUser.avatar_url ?? ""} />
      </div>
      <div role="group" style={{ flexGrow: 1 }}>
        <textarea
          {...register("tweet")}
          placeholder={placeholder}
          style={{
            resize: "none",
            fontSize: "1rem",
            color: "#ffffff",
            marginTop: "1rem",
            backgroundColor: "#000000",
            outline: "unset",
            width: "100%",
          }}
        />
        <div
          style={{
            marginTop: "1rem",
            display: "grid",
            placeItems: "flex-end",
          }}
        >
          <Button label="Tweet" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};
