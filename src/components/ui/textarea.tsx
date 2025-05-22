export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      style={{
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: 4,
        width: '100%',
        minHeight: 80,
        ...props.style,
      }}
    />
  );
}