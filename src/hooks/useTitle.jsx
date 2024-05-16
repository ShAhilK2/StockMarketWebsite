import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Stock Explorer`;
    }, [title]);

  return null;
}