export async function politeFetch(url: string) {
  // small delay to be polite to the original server
  await new Promise(r => setTimeout(r, 400));
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${url}`);
  return res.text();
}

