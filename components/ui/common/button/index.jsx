export default function Button({ children, onClick, isDisabled=false, className, ...rest }) {
  return (
    <button { ...rest } onClick={onClick} disabled={ isDisabled } className={`font-bold h-full px-6 py-4 rounded-md disabled:cursor-not-allowed ${ className }`}>
      { children }
    </button>      
  )
}