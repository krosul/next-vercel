import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";


interface links {
  text: string;
  href: string;
}
const ActiveLink: FC<links> = ({ text, href }) => {
  const router = useRouter();
  const style:CSSProperties = {
    color: router.asPath === href ? "#0070f3" : "white",
    textDecoration: "underline",
  };

  return (
    <Link href={href} legacyBehavior>
      <a style={style}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
