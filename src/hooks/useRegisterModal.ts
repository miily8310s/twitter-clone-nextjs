import { RootState } from "@/libs/store";
import { onClose as onRegisterClose } from "@/slices/registerModalSlice";
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
  const { register, handleSubmit } = useForm<RegisterModalInputs>({
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
      dispatch(onRegisterClose());
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  });
  const onClose = () => {
    dispatch(onRegisterClose());
  };
  return { register, onSubmit, onClose, isLoading, isRegisterOpen };
};
