
export const Loader = ({message}) => {
  return (
    <div className="text-center text-xl mt-[50px]">
    <div className="spinner my-0 mx-auto w-[50px] h-[50px] border-4 border-grey-400 border-t-blue-600 rounded-full animate-spin"></div>
    <p>{message}</p>
  </div>
  )
}
