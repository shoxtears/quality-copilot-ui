export function Select({ children, ...props }: any) {
  return <select {...props} style={{ padding: '8px', borderRadius: 4 }}>{children}</select>;
}

export function SelectItem({ children, ...props }: any) {
  return <option {...props}>{children}</option>;
}

export const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;