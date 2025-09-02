import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Blog", path: "/blog" },
    { name: "Blog Post", path: "/blog/abc" },
    { name: "Studio", path: "/studio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="p-4 text-white flex justify-between items-center">
      <Link href="/">CMS Blog</Link>
      <ul className="flex space-x-4">
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <div className="hover:bg-gray-700 cursor-pointer">
                <Link href={link.path}>{link.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
