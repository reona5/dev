type FormattedDateProps = { date: string };

export const FormattedDate = (({ date }) => {
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
}) satisfies React.FC<FormattedDateProps>;
