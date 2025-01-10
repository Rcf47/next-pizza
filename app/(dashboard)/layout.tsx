export const metadata = {
  title: "Next pizza",
  description: "My educational project next pizza",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p>DASHBOARD LAYOUT</p>
        {children}
      </body>
    </html>
  );
}
