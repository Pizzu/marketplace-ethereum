import Link from "next/link"
import { useRouter } from "next/router"

export default function CustomLink({ children, ...props }) {
  const { pathname } = useRouter()
  let className = ""

  if (pathname === props.href) {
    className = `${className} text-white font-bold text-xl`
  } else {
    className = `${className} text-white/70 text-xl`
  }

  return (
    <Link {...props} passHref>
      <a className={className}>
        { children }
      </a>
    </Link>
  )
}