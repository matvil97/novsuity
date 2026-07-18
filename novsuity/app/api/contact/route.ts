export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      { error: "Le formulaire n'est pas encore connecté. Merci de réessayer plus tard." },
      { status: 503 },
    );
  }

  const body = await request.json();
  const { nom, email, telephone, commentaire } = body ?? {};

  if (typeof nom !== "string" || !nom.trim() || typeof email !== "string" || !email.trim()) {
    return Response.json({ error: "Le nom et l'e-mail sont requis." }, { status: 400 });
  }

  const scriptResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nom,
      email,
      telephone: typeof telephone === "string" ? telephone : "",
      commentaire: typeof commentaire === "string" ? commentaire : "",
      date: new Date().toISOString(),
    }),
  });

  if (!scriptResponse.ok) {
    return Response.json(
      { error: "L'envoi a échoué. Merci de réessayer plus tard." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
