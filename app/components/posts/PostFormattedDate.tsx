type PostFormattedDateProps = { date: string };

export const PostFormattedDate = (({ date }) => {
  const formattedDate = new Date(date).toLocaleString("ja-jp", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <time dateTime={date} className="text-sm">
      {formattedDate}
    </time>
  );
}) satisfies React.FC<PostFormattedDateProps>;
