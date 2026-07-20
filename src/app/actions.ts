'use server'

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwm_K6TZhwMx6rz6mio0z90lWrJhQ3TtKX0-13UDdjolNmkTV0qwWjVH5njEWzxe9IlRg/exec'

const SPREADSHEET_ID = '1TBR2FHNpcWbl5IriHOaG-ye-IP9gbU0wBDSM2U8o6NE'

export async function saveLead(formData: FormData) {
  const nome = formData.get('nome') as string
  const email = formData.get('email') as string
  const whatsapp = formData.get('whatsapp') as string

  if (!nome || !email || !whatsapp) {
    return { success: false, error: 'Preencha todos os campos' }
  }

  const now = new Date()
  const data = now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'append_row',
        spreadsheetId: SPREADSHEET_ID,
        row: { Nome: nome, Email: email, WhatsApp: whatsapp, Data: data },
      }),
    })

    return { success: true }
  } catch {
    return { success: false, error: 'Erro ao salvar. Tente novamente.' }
  }
}
