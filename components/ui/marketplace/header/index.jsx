import { Breadcrumbs } from "@components/ui/common"

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-24">
      <h2 className="text-white font-bold text-5xl">Available courses</h2>
      <Breadcrumbs />
    </div>
  )
} 