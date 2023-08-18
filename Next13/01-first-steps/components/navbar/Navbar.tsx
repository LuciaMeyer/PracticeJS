import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <Link className="mr-2" href="about">About</Link>
      <Link className="mr-2" href="contact">Contact</Link>
      <Link className="mr-2" href="pricing">Pricing</Link>
    </nav>
  )
};
