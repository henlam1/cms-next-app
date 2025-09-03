import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
          <h1 className="text-4xl font-bold mb-8">Contact Page</h1>
          <p>This is Henry's CMS powered blog app to help me learn Next.js</p>
          
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/blog"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            See Blogs →
          </a>
        </main>
  )
}
