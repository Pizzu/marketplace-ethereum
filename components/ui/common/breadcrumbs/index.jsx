import Link from "next/link"

export default function Breadcrumbs({ items }) {
  console.log(items)
  return (
    <div className="grid grid-flow-col divide-x mr-[-1rem]">
      {items.map((navLink, index) => (
        <div key={index} className="px-4">
          <Link href={navLink.href} passHref>
            <a className="text-white text-xl">{navLink.value}</a>
          </Link>
        </div>
      ))
      }
    </div>
  )
}