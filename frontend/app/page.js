import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 h-dvh">
        <a href="https://www.google.com" className="text-2xl font-bold">
          Welcome to Sian Skin Clinic
        </a>
      </div>
    </div>
  );
}
