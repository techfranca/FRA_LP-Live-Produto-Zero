"use server";

/*
  Server action de captação de lead.
  Persiste na planilha via Google Apps Script.
  Tier 1 (LGPD): valida o envio no servidor e NÃO loga dado pessoal.
*/

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwm_K6TZhwMx6rz6mio0z90lWrJhQ3TtKX0-13UDdjolNmkTV0qwWjVH5njEWzxe9IlRg/exec";

const SPREADSHEET_ID = "1TBR2FHNpcWbl5IriHOaG-ye-IP9gbU0wBDSM2U8o6NE";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function saveLead(formData: FormData) {
  const nome = ((formData.get("nome") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim();
  const whatsapp = ((formData.get("whatsapp") as string) || "").trim();

  // Revalidação no servidor (o cliente também valida, mas não confiamos só nele)
  if (nome.length < 2 || !EMAIL_RE.test(email) || whatsapp.replace(/\D/g, "").length < 10) {
    return { success: false, error: "Dados inválidos. Confira os campos." };
  }

  const now = new Date();
  const data = now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "append_row",
        spreadsheetId: SPREADSHEET_ID,
        row: { Nome: nome, Email: email, WhatsApp: whatsapp, Data: data },
      }),
    });

    return { success: true };
  } catch {
    // Não logamos o payload (dado pessoal) — só devolvemos erro genérico.
    return { success: false, error: "Erro ao salvar. Tente novamente." };
  }
}
