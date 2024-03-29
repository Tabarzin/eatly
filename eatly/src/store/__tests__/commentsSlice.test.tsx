import commentsReducer, {
  fetchComments,
  CommentsState,
} from "../commentsSlice";

describe("commentsSlice", () => {
  const initialState: CommentsState = {
    comments: [],
    status: "idle",
    error: null,
  };

  it("should return the initial state", () => {
    expect(commentsReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle fetchComments.pending", () => {
    const action = { type: fetchComments.pending.type };
    const expectedState = { ...initialState, status: "loading" };
    expect(commentsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle fetchComments.fulfilled", () => {
    const mockComments = [
      {
        user: { username: "user1" },
        body: "This is a comment",
      },
    ];
    const action = {
      type: fetchComments.fulfilled.type,
      payload: mockComments,
    };
    const expectedState = {
      ...initialState,
      status: "succeeded",
      comments: mockComments,
    };
    expect(commentsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle fetchComments.rejected", () => {
    const errorMessage = "Failed to fetch comments";
    const action = {
      type: fetchComments.rejected.type,
      payload: errorMessage,
    };
    const expectedState = {
      ...initialState,
      status: "failed",
      error: errorMessage,
    };
    expect(commentsReducer(initialState, action)).toEqual(expectedState);
  });
});
