import { createContext, useReducer } from "react";

const PostListProvider = ({ childern }) => {
  return (
    <PostList.Provider value={[]}>{childern}</PostList.Provider>
  )
}

export default PostListProvider;