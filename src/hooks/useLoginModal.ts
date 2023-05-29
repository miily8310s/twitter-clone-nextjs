import { RootState } from "../libs/store";
import { supabaseClient } from "../libs/supabaseClient";
import { onClose as onLoginClose } from "../slices/loginModalSlice";
import { onOpen as onRegisterOpen } from "../slices/registerModalSlice";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModalInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [_, setIsLoading] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (input) => {
    try {
      setIsLoading(true);
      const { email, password } = input;
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        // 未登録の場合はここで「invalid login credentials」というエラーが返る。
        throw error;
      }
      dispatch(onLoginClose());
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  });
  const onClose = () => {
    dispatch(onLoginClose());
  };
  const onSwitch = () => {
    dispatch(onLoginClose());
    dispatch(onRegisterOpen());
  };
  return {
    register,
    errors,
    onSubmit,
    onClose,
    onSwitch,
    isLoginOpen,
  };
};
