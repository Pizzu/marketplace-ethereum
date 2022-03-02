import { useEthPrice } from "@components/hooks/useEthPrice";
import { Modal } from "@components/ui/common";
import { Button } from "@components/ui/common";
import { useEffect, useState } from "react";
import { useForm, useFormState } from "react-hook-form"

export default function OrderModal({ course, purchaseCourse, resetCourse }) {

  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, formState: { errors }, control } = useForm({mode: "onSubmit"})
  const { isDirty } = useFormState({ control })

  const { eth } = useEthPrice()

  useEffect(() => {
    if (course) {
      setIsOpen(true)
    }
  }, [course])

  const closeModal = () => {
    setIsOpen(false)
    resetCourse()
  }

  const createCourseOrder = ({ hasAgreed }) => {
    if (hasAgreed === true) {
      closeModal()
      purchaseCourse({course, price: eth.perCourse})
    } 
  }

  return (
    <Modal isOpen={isOpen}>
      <div className="px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-black/20 rounded-md border-2 border-white/40 overflow-hidden transform transition-all">
        <div>
          <h2 className="text-3xl font-bold text-white mb-12" id="modal-title">
            {course && course.title}
          </h2>
          <h3 className="text-white text-2xl font-medium mb-2">Course Price in Ether</h3>
          <p className="text-white text-xl font-bold">{eth.perCourse} ETH</p>
          <p className="text-white/70 text-md font-medium">Price will be verified at the time of the order.</p>
          <form onSubmit={handleSubmit(createCourseOrder)} className="grid grid-flow-row gap-6 mt-8">
            <div className="grid grid-flow-row gap-3">
              <p className="text-white/70 text-md font-medium">I accept the terms of service and I agree that my order can be rejected in the case data provided above are not correct</p>
              <input
                {...register("hasAgreed", {required: "You must agree to the terms of service"})}
                className="text-green rounded-sm border-2 border-white focus:ring-green focus:border-green"
                type="checkbox"
              />
              { errors.hasAgreed && <p className="text-primary text-xl">{errors.hasAgreed.message}</p>}
            </div>
            <div className="grid grid-flow-col gap-8 mt-10 md:grid-flow-row">
              <Button isDisabled= {!isDirty} className={"bg-green text-white px-3 py-4"} type="submit">Submit</Button>
              <Button onClick={closeModal} className={"bg-primary text-white px-3 py-4"} type="button">Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
