import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Page</h1>
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:henry.lam.7369@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span>henry.lam.7369@gmail.com</span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/henlam1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/github-mark-white.png"}
            alt="Github Logo"
            width={24}
            height={24}
          />
          <span>henlam1</span>
        </a>
      </div>
    </main>
  );
}
