import { RootState } from "@/libs/store";
import { supabaseClient } from "@/libs/supabaseClient";
import { onClose as onRegisterClose } from "@/slices/registerModalSlice";
import { onOpen as onLoginOpen } from "@/slices/loginModalSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export type RegisterModalInputs = {
  email: string;
  name: string;
  username: string;
  password: string;
};

export const useRegisterModal = () => {
  const isRegisterOpen = useSelector(
    (state: RootState) => state.registerModal.isOpen
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModalInputs>({
    defaultValues: {
      email: "",
      name: "",
      username: "",
      password: "",
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (input) => {
    try {
      setIsLoading(true);
      const { username, name, email, password } = input;
      const { error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            name,
          },
        },
      });
      if (error) {
        throw error;
      }
      // 入力したメールアドレス宛に承認メールが届く。
      dispatch(onRegisterClose());
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  });
  const onClose = () => {
    dispatch(onRegisterClose());
  };
  const onSwitchLogin = () => {
    dispatch(onRegisterClose());
    dispatch(onLoginOpen());
  };
  return {
    register,
    errors,
    onSubmit,
    onClose,
    onSwitchLogin,
    isLoading,
    isRegisterOpen,
  };
};
