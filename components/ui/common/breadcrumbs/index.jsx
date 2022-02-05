export default function Breadcrumbs() {
  return (
    <div className="flex divide-x">
      <div className="pr-4">
        <a className="text-white text-xl" href="#">Buy</a>
      </div>
      <div className="px-4">
        <a className="text-white text-xl" href="#">My Orders</a>
      </div>
      <div className="pl-4">
        <a className="text-white text-xl" href="#">All Orders</a>
      </div>
    </div>
  )
}