import { createContext } from "react";

const PostList = createContext({});

const PostListProvider = ({ childern }) => {
  return (
    <PostList.Provider value={[]}>{childern}</PostList.Provider>
  )
}

export default PostListProvider;