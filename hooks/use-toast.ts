type ToastVariant = "default" | "destructive";

type ToastOptions = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
};

const TOAST_CONTAINER_ID = "nexuscore-toast-container";

const containerStyles = `
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 9999;
  max-width: calc(100vw - 2rem);
`; 

function ensureToastContainer() {
  if (typeof window === "undefined") return null;
  let container = document.getElementById(TOAST_CONTAINER_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = TOAST_CONTAINER_ID;
    container.style.cssText = containerStyles;
    document.body.appendChild(container);
  }
  return container;
}

function createToastElement({ title, description, variant }: ToastOptions) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    min-width: 280px;
    max-width: 380px;
    padding: 1rem 1.1rem;
    border-radius: 1rem;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.2);
    color: white;
    background: ${variant === "destructive" ? "#dc2626" : "#2563eb"};
    border: 1px solid rgba(255, 255, 255, 0.12);
    opacity: 0;
    transform: translateX(12px);
    transition: opacity 200ms ease, transform 200ms ease;
    overflow-wrap: anywhere;
  `;

  const titleElem = document.createElement("div");
  titleElem.style.fontWeight = "700";
  titleElem.style.marginBottom = description ? "0.5rem" : "0";
  titleElem.textContent = title;

  toast.appendChild(titleElem);

  if (description) {
    const descElem = document.createElement("div");
    descElem.style.fontSize = "0.95rem";
    descElem.style.lineHeight = "1.5";
    descElem.style.opacity = "0.95";
    descElem.textContent = description;
    toast.appendChild(descElem);
  }

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";
  });

  return toast;
}

function showToast(options: ToastOptions) {
  if (typeof window === "undefined") return;
  const container = ensureToastContainer();
  if (!container) return;

  const toast = createToastElement(options);
  container.appendChild(toast);

  const duration = options.duration ?? 5000;
  const timeout = window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(12px)";
    window.setTimeout(() => toast.remove(), 200);
  }, duration);

  toast.addEventListener("click", () => {
    window.clearTimeout(timeout);
    toast.remove();
  });
}

export function useToast() {
  const toast = (options: ToastOptions) => showToast(options);
  return { toast };
}
