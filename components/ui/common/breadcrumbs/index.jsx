import { ActiveLink } from "@components/ui/common"

export default function Breadcrumbs({ items }) {
  return (
    <div className="grid grid-flow-col divide-x mr-[-1rem]">
      {items.map((navLink, index) => (
        <div key={index} className="px-4">
          <ActiveLink href={navLink.href}>
            <a>{navLink.value}</a>
          </ActiveLink>
        </div>
      ))
      }
    </div>
  )
}