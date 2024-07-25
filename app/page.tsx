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
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-500">
      <div className="bg-white py-24 sm:32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-500">
              Not Your Average PDF Reader
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-800 sm:text-1xl">
              Understand your PDFs in a better way using PDFai
            </p>
            <p className="mt-10 text-4xl font-bold tracking-wide sm:text-5xl">
              Introducing{" "}
              <span className="font-bold text-blue-500">
                PDF<span className="text-slate-600">ai</span>
              </span>
            </p>
            <p>
              <br />
              <br />
              PDFai is a tool that helps you{" "}
              <span className="text-blue-500">summarize PDFs</span>. using AI.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
