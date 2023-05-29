import { act, renderHook } from "@testing-library/react";
import { useLoginModal } from "./useLoginModal";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginModalReducer from "../slices/loginModalSlice";
import registerModalReducer from "../slices/registerModalSlice";
import { ReactNode } from "react";

const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    registerModal: registerModalReducer,
  },
});
const MockWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

jest.mock("../libs/supabaseClient", () => {});

describe("useLoginModal", () => {
  test("should first", async () => {
    const { result } = renderHook(() => useLoginModal(), {
      wrapper: MockWrapper,
    });
    expect(result.current.isLoginOpen).toBe(false);
  });
  // test("onSubmit", async () => {
  //   const MockWrapper = ({ children }: { children: ReactNode }) => {
  //     return <Provider store={store}>{children}</Provider>;
  //   };
  //   const { result } = renderHook(() => useLoginModal(), {
  //     wrapper: MockWrapper,
  //   });
  //   act(() => {
  //     result.current.onSubmit();
  //   });
  //   expect(result.current.isLoginOpen).toBe(false);
  // });
  test("onClose", async () => {
    const { result } = renderHook(() => useLoginModal(), {
      wrapper: MockWrapper,
    });
    act(() => {
      result.current.onClose();
    });
    expect(result.current.isLoginOpen).toBe(false);
  });
  test("onSwitch", async () => {
    const { result } = renderHook(() => useLoginModal(), {
      wrapper: MockWrapper,
    });
    act(() => {
      result.current.onSwitch();
    });
    expect(result.current.isLoginOpen).toBe(false);
  });
});
