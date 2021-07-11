//@ts-check
import { useCallback, useEffect, useState } from "react";
import requestHandler from "./functions";


export const useTheHack = (postOptions) => {
  const [posts, setPosts] = useState([])

  const memoizedGetContent = useCallback(
    () => requestHandler(postOptions),
    [postOptions]
  );

  useEffect(() => {

    memoizedGetContent().then(setPosts)

  }, [memoizedGetContent, setPosts]);

  if (!!postOptions.slug) {
    const [post = false] = Array.from(posts);

    return {
      post,
      refresh: memoizedGetContent
    }
  }

  return {
    posts,
    refresh: memoizedGetContent
  }
};
