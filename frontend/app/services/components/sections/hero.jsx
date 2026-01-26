import { ShieldCheck, Sparkles, Scissors } from "lucide-react";
import Link from "next/link";

function CategoryCard({ Icon, CategoryName, MembersList }) {
  return (
    <div className="flex flex-col h-fit grow p-6 py-8 gap-4 bg-white shadow-lg rounded-lg">
      <div className="border-b-2 border-b-gray-300 gap-2 pb-2 grow flex flex-col items-center justify-center text-2xl text-impBlue font-bold">
        {Icon}
        <div>{CategoryName}</div>
      </div>
      <ul className="flex flex-col gap-4 items-center justify-center text-md tracking-normal text-gray-800">
        {MembersList.map((member, idx) => (
          <li key={idx} className="hover:text-goldAcc">
            <Link
              href={
                "/service/" +
                member
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "")
              }
            >
              {member}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="w-full hero-pattern-2 gap-4 py-8 px-4 flex flex-col items-center scroll-mt-16 md:scroll-mt-18">
      <h1 className="text-4xl tracking-tight font-bold text-impBlue">
        Our Services
      </h1>
      <h2 className="text-lg text-gray-800 text-center">
        We offer the following categories of services.
      </h2>
      <div className="w-full flex flex-wrap gap-4 p-4">
        <CategoryCard
          Icon={<ShieldCheck className="text-blue-900" size={32} />}
          CategoryName="Skin Health"
          MembersList={[
            "Pimple Treatment",
            "Pigmentation Treatment",
            "Fungal Infection Treatment",
            "Warts Removal",
            "Corn Removal",
            "Foot Crack Treatment",
          ]}
        />
        <CategoryCard
          Icon={<Sparkles className="text-yellow-500" size={32} />}
          CategoryName="Glow & Rejuvenation"
          MembersList={[
            "Anti-Aging Treatment",
            "Skin Tightening",
            "Dark Circles Treatment",
            "Skin Glow Treatment",
            "Customised Medi Facial",
            "Hydra Facial",
            "BB Glow / CC Glow",
          ]}
        />
        <CategoryCard
          Icon={<Scissors className="text-blue-900" size={32} />}
          CategoryName="Hair & Laser"
          MembersList={[
            "Dandruff Treatment",
            "Hair Fall Treatment",
            "Laser Hair Removal Treatment",
            "Tattoo Removal",
            "Permanent Eyebrow",
            "Lip Blushes",
            "Dark Lips Treatment",
          ]}
        />
      </div>
    </div>
  );
}
