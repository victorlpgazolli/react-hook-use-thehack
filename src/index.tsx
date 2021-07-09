//@ts-check
import { useCallback, useEffect, useState } from "react";
import requestHandler from "./functions";
import { theHackConfiguration, theHackPost } from "./types";


export const useTheHack = (postOptions: theHackConfiguration = {}) => {
  const [posts, setPosts] = useState<Array<theHackPost> | boolean>(false)

  const memoizedGetContent = useCallback(
    () => requestHandler(postOptions),
    [postOptions]
  );

  useEffect(() => {

    memoizedGetContent().then(setPosts)

  }, [memoizedGetContent, setPosts]);

  return {
    posts,
    refresh: memoizedGetContent
  }
};
