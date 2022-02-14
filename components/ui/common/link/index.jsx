import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export default function ActiveLink({ children, ...props }) {
  const { pathname } = useRouter()
  let className = children.props.className || ""
  
  if (pathname === props.href) {
    className = `${className} text-white font-bold`
  }

  return (
    <Link {...props} passHref>
      {
        React.cloneElement(children, { className })
      }
    </Link>
  )
}