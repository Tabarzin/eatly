import st from "./commentinput.module.css";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

interface CommentInputProps {
  postId: number;
  userId: number;
  onCommentChange: (commentText: string) => void;
  onCommentSubmit: (body: string, postId: number, userId: number) => void;
  newComment: string;
}

const CommentInput: React.FC<CommentInputProps> = ({
  postId,
  userId,
  onCommentChange,
  onCommentSubmit,
  newComment,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onCommentChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCommentSubmit(newComment, postId, userId);
  };

  return (
    <div className={st.add_comment}>
      <Text type="h3" className={st.h3}>
        Add <span className={st.highlight}>comment</span>
      </Text>
      <form className={st.add_comment_form} onSubmit={handleSubmit}>
        <textarea
          className={st.add_comment_input}
          value={newComment}
          onChange={handleInputChange}
          placeholder="Add your comment"
        />
        <Button type="primary">Send</Button>
      </form>
    </div>
  );
};

export default CommentInput;
