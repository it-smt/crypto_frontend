import { useEffect } from "react";

export function createClickHandler(classes, setActive) {
	return event => {
		if (!classes.some(className => event.target.closest(className))) {
			setActive(false);
		}
	};
}

export function useClickOutsideHandler(handler) {
	useEffect(() => {
		document.addEventListener("click", handler);

		return () => {
			document.removeEventListener("click", handler);
		};
	}, [handler]);
}
