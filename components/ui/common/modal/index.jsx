export default function Modal({ isOpen, children }) {
  return (
    <section>
      <div className={`${!isOpen ? "hidden" : ""} fixed z-10 inset-0 overflow-y-auto"`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
          {isOpen &&
            <div className="fixed inset-0 bg-secondary-dark bg-opacity-80 transition-opacity" aria-hidden="true"></div>
          }
          <span className="hidden" aria-hidden="true">&#8203;</span>
          {children}
        </div>
      </div>
    </section>
  )
}