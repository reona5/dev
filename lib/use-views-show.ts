import { useEffect, useState } from "react";
import BLOG from "../blog.config";

const host = "https://views.show/json";
const getViews = async (key: string, readOnly: boolean) => {
  let url = `${host}?key=${key}`;
  if (readOnly) {
    url += "&readonly=1";
  }
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) return { count: 0 };
    return response.json();
  } catch (e) {
    return { count: 0 };
  }
};

const useViewsShow = (
  key: string,
  { readOnly = false, enableViews = BLOG.enableViews } = {}
) => {
  const [count, setCount] = useState(0);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    let unmount = false;
    if (!enableViews) return;
    (async () => {
      const res = await getViews(key, readOnly);
      if (unmount) return;
      setCount(res.count);
      setUpdated(true);
    })();
    return () => {
      unmount = true;
    };
  }, []);

  return [count, updated];
};

export default useViewsShow;
