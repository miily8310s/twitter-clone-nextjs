import { RootState } from "@/libs/store";
import {
  // onOpen as onLoginOpen,
  onClose as onLoginClose,
} from "@/slices/loginModalSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export type LoginModalInputs = {
  email: string;
  password: string;
};

export const useLoginModal = () => {
  const isLoginOpen = useSelector(
    (state: RootState) => state.loginModal.isOpen
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<LoginModalInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (input) => {
    try {
      console.log("input", input);
      setIsLoading(true);
      dispatch(onLoginClose());
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  });
  return { register, onSubmit, isLoading, isLoginOpen, onLoginClose };
};
