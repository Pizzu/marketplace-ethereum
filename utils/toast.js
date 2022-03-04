import { toast } from "react-toastify";

export const withToast = (promise) => {
  toast.promise(
    promise,
    {
      pending: {
        render() {
          return (
            <div className="px-6 py-2">
              <p className="mb-2">Your transaction is being processed</p>
              <p>Hang tight... Just few more moments.</p>
            </div>
          )
        }
      },
      success: {
        render({data}){
          return (
            <div>
              <p className="font-bold">Tx: {data.transactionHash.slice(0, 20)}...</p>
              <p> Has been succesfuly processed.</p>
              <a href={`https://ropsten.etherscan.io/tx/${data.transactionHash}`} target="_blank" rel="noreferrer">
              <i className="text-green">See Tx Details</i>
              </a>
              <p className="mt-2 font-bold">Reload page to access the course</p>
            </div>
          )
        },
      },
      error: {
        render({data}){
          // When the promise reject, data will contains the error
          return <div>{data.message ?? "Transaction has failed"}</div>
        }
      }
    }
  )
}