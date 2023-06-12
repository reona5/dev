export const FormattedDate = (({ date }) => {
  const formattedDate = new Date(date).toLocaleString("ja-jp", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return <time dateTime={date}>{formattedDate}</time>;
}) satisfies React.FC<{ date: string }>;
