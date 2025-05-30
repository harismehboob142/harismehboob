import Footer from "@/components/Footer";

export const metadata = {
  title: "Haris | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
