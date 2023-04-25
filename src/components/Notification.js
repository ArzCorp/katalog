import { useState } from 'react'
import { EMPTY_STRING } from '@/utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Notification({
	children,
	success = true,
	error,
	warning,
	onCloseNotification = () => {},
}) {
	const [animarion, setAnimation] = useState('animate-show-alert')
	const successStyles = success ? 'bg-green-300 text-green-950' : EMPTY_STRING
	const errorStyles = error ? 'bg-red-300 text-red-950' : EMPTY_STRING
	const warningStyles = warning ? 'bg-yellow-200 text-yellow-950' : EMPTY_STRING

	const closeNotification = () => {
		setAnimation('animate-hidden-alert')
		onCloseNotification()
	}

	return (
		<div
			className={`max-w-[200px] absolute z-50 top-4 right-5 px-3 p-2 rounded-md min-w-[160px] text-center text-xs font-bold ${animarion} ${successStyles} ${errorStyles} ${warningStyles}`}
		>
			<h2>{children}</h2>
			<button
				className="hover:bg-opacity-75 absolute -top-[6px] -right-[6px] bg-white rounded-[50%] py-[1px] px-1 border border-black"
				onClick={closeNotification}
			>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	)
}
