import { expect, test } from "@playwright/test";
import { allPosts } from "contentlayer/generated";

allPosts.forEach((post) => {
  test(post.slug, async ({ page }) => {
    await page.goto(`https://reona.dev${post.slug}`);
    await expect(page).toHaveScreenshot({
      fullPage: true,
      animations: "disabled",
      // NOTE: gif 画像の screenshot が合致しないため除外する
      mask: [page.locator("img[src='/2020-09-08-20-36-00.gif']")],
    });
  });
});
