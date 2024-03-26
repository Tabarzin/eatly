import React from "react";
import st from "./user.module.css";

interface UserProps {
  user: {
    image: string;
    firstName: string;
    lastName: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={st.user}>
      <img
        className={st.user_image}
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div className={st.username_block}>
        <span className={st.written}>Written By</span>
        <span className={st.username}>
          {user.firstName} {user.lastName}
        </span>
      </div>
    </div>
  );
};

export default User;
