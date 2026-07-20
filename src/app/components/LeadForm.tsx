'use client'

import { useState } from 'react'
import { saveLead } from '../actions'

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const result = await saveLead(formData)

    if (result.success) {
      setStatus('success')
    } else {
      setErrorMsg(result.error || 'Erro inesperado')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold text-brand-green mb-2">
          Inscrição confirmada!
        </h3>
        <p className="text-gray-300 mb-6">
          Você vai receber o link da live no seu WhatsApp.
        </p>
        <a
          href="https://youtube.com/@SEUCANAL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-green text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-brand-green-dark transition-colors"
        >
          Ir para o canal no YouTube
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
        />
      </div>
      <div>
        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp (ex: 21991097451)"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-green text-brand-blue font-bold py-4 rounded-lg text-lg hover:bg-brand-green-dark transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-wait"
      >
        {status === 'loading' ? 'Enviando...' : 'QUERO PARTICIPAR DA LIVE'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  )
}
