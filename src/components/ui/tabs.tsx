export function Tabs({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>{children}</div>;
}

export function TabsTrigger({ children, value }: { children: React.ReactNode; value: string }) {
  return <button style={{ padding: '6px 12px', borderRadius: 4 }}>{children}</button>;
}

export function TabsContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
