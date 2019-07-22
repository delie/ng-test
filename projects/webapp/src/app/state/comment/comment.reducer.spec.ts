import { commentReducer, initialCommentState } from './comment.reducer';

describe('Comment Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = commentReducer(initialCommentState, action);

      expect(result).toBe(initialCommentState);
    });
  });
});
