export default function Footer() {
  return (
    <footer>
      <div className="container py-10">
        <div className="grid auto-rows-max gap-3 border-t-2 pt-4">
          <div>
            <p className="text-white text-xl font-bold">Marketplace ETH</p>
          </div>
          <div>
            <p className="text-white/80 text-sm max-w-[18rem]">
              © {new Date().getFullYear()} All right reserved – Lo Forte Coding
              P.iva 03776400123
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}