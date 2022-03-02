import { Breadcrumbs } from "@components/ui/common"

const LINKS = [
  {
    href: "/marketplace",
    value: "Buy"
  },
  {
    href: "/marketplace/courses/owned",
    value: "My Orders"
  }
]

export default function Navigation() {
  return (
    <div className="flex justify-end mb-24">
      <Breadcrumbs items={LINKS} />
    </div>
  )
} 