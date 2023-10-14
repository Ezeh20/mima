import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "MimaBooking",
  description: "Book your next destination in an instant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Container>
          <div className="layout">
            <Sidebar />
            <div className="">
              <Navbar />
              {children}
            </div>
          </div>
        </Container>
      </body>
    </html>
  );
}
