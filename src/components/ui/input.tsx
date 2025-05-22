export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: 4,
        width: '100%',
        ...props.style,
      }}
    />
  );
}