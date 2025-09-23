export async function getProgress(email, language) {
  const res = await fetch(`/api/progress?email=${encodeURIComponent(email)}&language=${language}`);
  return res.json(); // { step: number }
}

export async function saveProgress(email, language, step) {
  const res = await fetch("/api/progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, language, step }),
  });
  return res.json(); // { ok: true, step }
}
