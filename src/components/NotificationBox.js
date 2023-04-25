import Notification from './Notification'

export default function NotificationBox({
	error,
	success,
	onCloseNotification,
}) {
	return error || success ? (
		<Notification
			error={error}
			success={success}
			onCloseNotification={onCloseNotification}
		>
			{error || success}
		</Notification>
	) : null
}
