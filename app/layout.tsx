import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "Tuboload",
  description: "Download anything simple & easy way",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gridLayout bg-[#f6f1ee] text-[#ededed] h-screen">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
