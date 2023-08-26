export default function TextInput({
  label,
  password,
  name,
  full,
  error,
  ...props
}) {
  const inputType = password ? 'password' : 'text'
  const widthStyle = full ? 'w-full' : 'max-w-[300px]'
  const borderStyle = error
    ? 'border-[3px] border-red-500 border-red-500 focus:outline-red-500'
    : 'focus:outline-indigo-800 border-indigo-900'

  return (
    <label className={`${widthStyle} flex flex-col`} htmlFor={name}>
      <span className="text-sm text-slate-800 mb-1 font-semibold">{label}</span>
      <input
        name={name}
        id={name}
        className={`text-sm text-indigo-900 border font-semibold w-full px-2 py-[5px] bg-slate-200 ${borderStyle} transition-all duration-500 rounded-[14px] outline-none`}
        type={inputType}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-500 font-medium mt-1">{error}</p>
      ) : null}
    </label>
  )
}
