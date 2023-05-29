import reducer, { onCurrentUser, resetCurrentUser } from "./currentUserSlice";

const mockLoginUser = {
  id: "test_id",
  app_metadata: { id: "app_id" },
  user_metadata: { user_meta: "test" },
  aud: "test_aud",
  created_at: "hoge_date",
};

describe("currentUserSlice", () => {
  test("initial state", () => {
    expect(reducer(undefined, { type: undefined })).toStrictEqual({
      currentUser: null,
      isLoading: false,
    });
  });
  test("set login user to current", () => {
    expect(
      reducer({ currentUser: null, isLoading: false }, onCurrentUser(null))
    ).toStrictEqual({
      currentUser: null,
      isLoading: false,
    });
    expect(
      reducer(
        { currentUser: null, isLoading: false },
        onCurrentUser(mockLoginUser)
      )
    ).toStrictEqual({
      currentUser: mockLoginUser,
      isLoading: true,
    });
  });
  test("reset current user", () => {
    expect(
      reducer({ currentUser: null, isLoading: false }, resetCurrentUser())
    ).toStrictEqual({
      currentUser: null,
      isLoading: false,
    });
    expect(
      reducer(
        { currentUser: mockLoginUser, isLoading: true },
        resetCurrentUser()
      )
    ).toStrictEqual({
      currentUser: null,
      isLoading: false,
    });
  });
});
