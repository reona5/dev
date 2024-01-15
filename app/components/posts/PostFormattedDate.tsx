type PostFormattedDateProps = { date: string };

export const PostFormattedDate = (({ date }) => {
  const formattedDate = new Date(date).toLocaleString("ja-jp", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
});

  return (
    <time dateTime={date} className="text-sm">
      {formattedDate}
    </time>
  );
}) satisfies React.FC<PostFormattedDateProps>;
