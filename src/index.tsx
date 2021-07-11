//@ts-check
import { useCallback, useEffect, useState } from "react";
import requestHandler from "./functions";
import { theHackConfiguration, theHackPost } from "./types";


export const useTheHack = (postOptions: theHackConfiguration = {}) => {
  const [posts, setPosts] = useState<Array<theHackPost>>([])

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
