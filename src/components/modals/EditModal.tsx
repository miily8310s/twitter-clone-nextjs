import { FC, ReactElement } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { EditModalInputs } from "../../hooks/useEditModal";
import { useEditModal } from "@/hooks/useEditModal";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export const EditModal: FC = () => {
  const { currentUser } = useCurrentUser();
  const { register, errors, onSubmit, onClose, isEditOpen } = useEditModal(
    currentUser ? currentUser.id : undefined
  );

  const bodyContent = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Input<EditModalInputs>
        register={register}
        type="text"
        placeholder="Name"
        disabled={false}
        regLabel="name"
      />
      {errors.name && (
        <p style={{ color: "#bf1650" }}>*This field is required</p>
      )}
      <Input<EditModalInputs>
        register={register}
        type="text"
        placeholder="Username"
        disabled={false}
        regLabel="username"
      />
      {errors.username && (
        <p style={{ color: "#bf1650" }}>*This field is required</p>
      )}
      <Input<EditModalInputs>
        register={register}
        type="text"
        placeholder="Bio"
        disabled={false}
        regLabel="bio"
      />
      {errors.username && (
        <p style={{ color: "#bf1650" }}>*This field is required</p>
      )}
    </div>
  ) satisfies ReactElement;

  return (
    <Modal
      isOpen={isEditOpen}
      title="Edit your profile"
      actionLabel="Save"
      body={bodyContent}
      onSubmit={onSubmit}
      onClose={onClose}
    />
  );
};
