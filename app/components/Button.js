import { EMPTY_STRING } from '../utils/constants/values'

export default function Button({ full, loading, disabled, ...props }) {
  const loadingStyles = loading ? 'animate-pulse bg-opacity-75' : EMPTY_STRING
  const widthStyles = full ? 'w-full' : 'min-w-[150px] max-w-min'
  const disabledStyles = disabled
    ? 'bg-stone-600'
    : 'bg-indigo-600 hover:bg-indigo-800'

  return (
    <button
      className={`py-2 px-3 rounded-2xl text-sm ${widthStyles} ${loadingStyles} ${disabledStyles} transition-all outline-indigo-600 duration-500 text-white font-extrabold`}
      disabled={loading || disabled}
      {...props}
    />
  )
}
