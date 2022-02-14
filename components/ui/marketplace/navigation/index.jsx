import { Breadcrumbs } from "@components/ui/common"

const LINKS = [
  {
    href: "/marketplace",
    value: "Buy"
  },
  {
    href: "/marketplace/courses/owned",
    value: "My Courses"
  },
  {
    href: "/marketplace/courses/managed",
    value: "Manage Courses",
    requireAdmin: true
  }
]

export default function Navigation() {
  return (
    <div className="flex justify-end mb-24">
      <Breadcrumbs items={LINKS} />
    </div>
  )
} 