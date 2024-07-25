import { GlobeIcon } from "lucide-react";

const featuresDetails = [
  {
    name: "Feature 1",
    description: "Feature 1 description",
    icon: GlobeIcon,
  },
  {
    name: "Feature 2",
    description: "Feature 2 description",
    icon: GlobeIcon,
  },
  {
    name: "Feature 3",
    description: "Feature 3 description",
    icon: GlobeIcon,
  },
  {
    name: "Feature 4",
    description: "Feature 4 description",
    icon: GlobeIcon,
  },
  {
    name: "Feature 5",
    description: "Feature 5 description",
    icon: GlobeIcon,
  },
  {
    name: "Feature 6",
    description: "Feature 6 description",
    icon: GlobeIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-blue-900 to-black">
      <div className="bg-black py-24 sm:32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1>PDFai</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
