import reducer, { onOpen, onClose } from "./editModalSlice";

describe("editModalSlice", () => {
  test("initial state", () => {
    expect(reducer(undefined, { type: undefined })).toStrictEqual({
      isOpen: false,
    });
  });
  test("modal open", () => {
    expect(reducer({ isOpen: true }, onOpen())).toStrictEqual({
      isOpen: true,
    });
    expect(reducer({ isOpen: false }, onOpen())).toStrictEqual({
      isOpen: true,
    });
  });
  test("modal open", () => {
    expect(reducer({ isOpen: true }, onClose())).toStrictEqual({
      isOpen: false,
    });
    expect(reducer({ isOpen: false }, onClose())).toStrictEqual({
      isOpen: false,
    });
  });
});
