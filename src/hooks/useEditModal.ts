import { RootState } from "../libs/store";
import { supabaseClient } from "../libs/supabaseClient";
import { onClose as onEditClose } from "../slices/editModalSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export type EditModalInputs = {
  name: string;
  username: string;
  bio: string;
};

export const useEditModal = (userId: string | undefined) => {
  const isEditOpen = useSelector((state: RootState) => state.editModal.isOpen);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditModalInputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (input) => {
    try {
      setIsLoading(true);
      if (userId) {
        const { username, name, bio } = input;
        const { error } = await supabaseClient
          .from("profiles")
          .update({
            username,
            name,
            bio,
          })
          .eq("id", userId);
        if (error) {
          throw error;
        }
        dispatch(onEditClose());
      }
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  });
  const onClose = () => {
    dispatch(onEditClose());
  };
  return {
    register,
    errors,
    onSubmit,
    onClose,
    isLoading,
    isEditOpen,
  };
};
