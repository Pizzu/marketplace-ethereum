import { Modal } from "@components/ui/common";
import { Button } from "@components/ui/common";
import { useEffect, useState } from "react";

export default function OrderModal({ course, onClose }) {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (course) {
      setIsOpen(true)
    } 
  }, [course])
  
  const closeModal = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen}>
      <div className="px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-black/20 rounded-md border-2 border-white/40 overflow-hidden transform transition-all">
        <div>
          <h3 className="text-3xl font-bold text-white mb-12" id="modal-title">
            { course && course.title }
          </h3>
          <form className="grid grid-flow-row gap-6">
            <div className="grid grid-flow-row gap-3">
              <label className="text-white/70 text-xl font-medium">Price Eth</label>
              <input className=" text-green rounded-sm border-2 border-white focus:ring-green focus:border-green" type="checkbox" />
              <input className="px-4 py-3 rounded-md w-full text-white bg-secondary-dark border-2  border-white focus:ring-green focus:border-green" type="text" />
              <p className="text-white/70 text-md font-medium">Price will be verified at the time of the order. If the price will be lower, order can be declined (+- 2% slipage is allowed)</p>
            </div>
            <div className="grid grid-flow-row gap-3">
              <label className="text-white/70 text-xl font-medium">Email</label>
              <input required className="px-4 py-3 rounded-md w-full text-white bg-secondary-dark border-2 border-white focus:ring-green focus:border-green focus:invalid:border-primary focus:invalid:ring-primary" type="email" />
              <p className="text-white/70 text-md font-medium">It is important to fill a correct email, otherwise the order cannot be verified. We are not storing your email anywhere</p>
            </div>
            <div className="grid grid-flow-row gap-3">
              <label className="text-white/70 text-xl font-medium">Repeat Email</label>
              <input required className="px-4 py-3 rounded-md w-full text-white bg-secondary-dark border-2 border-white focus:ring-green focus:border-green focus:invalid:border-primary focus:invalid:ring-primary" type="email" />
            </div>
            <div className="grid grid-flow-row gap-3">
              <p className="text-white/70 text-md font-medium">I accept the terms of service and I agree that my order can be rejected in the case data provided above are not correct</p>
              <input className=" text-green rounded-sm border-2 border-white focus:ring-green focus:border-green" type="checkbox" />
            </div>
          </form>
        </div>
        <div className="grid grid-flow-col gap-8 mt-10 md:grid-flow-row">
          <Button className={"bg-green text-white px-3 py-4"}>Submit</Button>
          <Button onClick={closeModal} className={"bg-primary text-white px-3 py-4"}>Cancel</Button>
        </div>
      </div>
    </Modal>
  )
}
