const RESERVATION_CLASS = 'wm-pro-banner-reserved';

function setReservation(active: boolean): void {
  document.documentElement.classList.toggle(RESERVATION_CLASS, active);
}

export function showProBanner(_container: HTMLElement): void {
  setReservation(false);
}

export function hideProBanner(): void {
  setReservation(false);
}

export function syncProBanner(): void {
  setReservation(false);
}
