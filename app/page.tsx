import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuresDetails = [
  {
    name: "Feature 1",
    description: "Upload and store all your PDFs in one place",
    icon: GlobeIcon,
  },
  {
    name: "Feature 2",
    description: "Easily summarize your PDFs",
    icon: GlobeIcon,
  },
  {
    name: "Feature 3",
    description: "Enjoy a clean and simple interface",
    icon: GlobeIcon,
  },
  {
    name: "Feature 4",
    description: "Customize your reading experience",
    icon: GlobeIcon,
  },
  {
    name: "Feature 5",
    description: "Share your PDFs with friends",
    icon: GlobeIcon,
  },
  {
    name: "Feature 6",
    description: "And more...",
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
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>

          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-1 lg:px-10">
              <Image
                alt="PDFai screenshot"
                src="https://i.imgur.com/jOiN7vR.png"
                width={2432}
                height={1442}
                className="mb-[-0%] rounded-xl shadow-1xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>

          <div className="mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:max-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {featuresDetails.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-blue-500"
                    />
                  </dt>
                  <dd>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
