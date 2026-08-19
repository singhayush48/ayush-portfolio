export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");
// Accept either https://your-api.onrender.com or the older
// https://your-api.onrender.com/api setting. This keeps requests on /api.
const API_BASE = configuredApiBase
  ? configuredApiBase.endsWith("/api")
    ? configuredApiBase
    : `${configuredApiBase}/api`
  : "/api";

export async function sendContactMessage(payload: ContactPayload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.error ?? "Something went wrong. Please try again.");
  }

  return data;
}
