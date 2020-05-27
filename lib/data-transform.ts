import ms from "ms";
import BLOG from "../blog.config";

export const msToString = (time: number) => {
  const str = ms(time, { long: true });
  if (!BLOG.cn) return `${str} ago`;
  return (
    str
      .replace("days", "天")
      .replace("day", "天")
      .replace("minutes", "分钟")
      .replace("minute", "分钟")
      .replace("hours", "小时")
      .replace("hour", "小时")
      .replace("seconds", "秒") + "之前"
  );
};

export const getDNSPrefetchValue = (domain: string) => {
  if (!domain) return null;
  if (domain.startsWith("http")) return domain.replace(/https?:/, "");
  if (domain.startsWith("//")) return domain;
  return `//${domain}`;
};
