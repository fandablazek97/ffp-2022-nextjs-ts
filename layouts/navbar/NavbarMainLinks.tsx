import Link from "next/link";
import { mainRoutes } from "./routes";

type NavbarMainLinksOptions = {
  className?: string;
};

export default function NavbarMainLinks({
  className = "",
}: NavbarMainLinksOptions) {
  return (
    <ul
      className={`flex list-none space-x-5 xl:space-x-10 2xl:space-x-14 ${className}`}
    >
      {mainRoutes.map((route) => (
        <li key={route.label}>
          <Link href={route.path}>
            <a className="c-link-3-a text-sm font-medium text-muted lg:text-base">
              {route.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}