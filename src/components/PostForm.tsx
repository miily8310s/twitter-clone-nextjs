import { User } from "@/hooks/useUser";
import { Avatar } from "./Avatar";
import { FC, useState } from "react";
import { Button } from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";

type PostFormProps = {
  currentUser: User;
  placeholder: string;
  addCommentEvent?: (
    body: string,
    userId: string,
    postId: number
  ) => Promise<void>;
  addPostEvent?: (body: string, userId: string) => Promise<void>;
  postId?: number;
};

type FormValues = {
  tweet: string;
};

export const PostForm: FC<PostFormProps> = ({
  currentUser,
  placeholder,
  addCommentEvent,
  addPostEvent,
  postId,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);
      if (addPostEvent) {
        await addPostEvent(data.tweet, currentUser.id);
      } else {
        if (addCommentEvent && postId) {
          addCommentEvent(data.tweet, currentUser.id, postId);
        }
      }
    } catch (e) {
      console.error("Something wrong");
    } finally {
      data.tweet === "";
      setIsLoading(false);
    }
  };
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
          {...register("tweet", { required: true, maxLength: 140 })}
          placeholder={placeholder}
          disabled={isLoading}
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
        {errors.tweet && (
          <p style={{ color: "#bf1650" }}>{errors.tweet.message}</p>
        )}
        <div
          style={{
            marginTop: "1rem",
            display: "grid",
            placeItems: "flex-end",
          }}
        >
          <Button
            label="Tweet"
            disable={isLoading}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};
