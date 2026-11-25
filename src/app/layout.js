import "./globals.css";

export const metadata = {
  title: "Day Well",
  description: "One simple daily plan for your health routine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
