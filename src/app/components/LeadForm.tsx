"use client";

import { useState } from "react";
import { saveLead } from "../actions";
import { CANAL_URL } from "../lib/config";
import { IconArrowRight, IconCheck, IconBroadcast } from "./icons";

/*
  Formulário de captação (Tier 1 — LGPD):
  - validação inline em tempo real (nome/email/WhatsApp)
  - consentimento explícito + link de política de privacidade
  - estados claros: idle / loading / success / error
  - botão desabilita ao enviar
  A persistência (Apps Script) fica na server action saveLead.
*/

type Status = "idle" | "loading" | "success" | "error";
type Campos = { nome: string; email: string; whatsapp: string };
type Erros = Partial<Record<keyof Campos | "consent", string>>;

/** Validações simples do lado do cliente (o servidor revalida) */
function validar(valores: Campos, consent: boolean): Erros {
  const erros: Erros = {};
  if (valores.nome.trim().length < 2) erros.nome = "Digite seu nome completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email))
    erros.email = "Digite um e-mail válido.";
  if (valores.whatsapp.replace(/\D/g, "").length < 10)
    erros.whatsapp = "Digite um WhatsApp com DDD.";
  if (!consent) erros.consent = "Precisamos do seu aceite para enviar o link.";
  return erros;
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [valores, setValores] = useState<Campos>({ nome: "", email: "", whatsapp: "" });
  const [consent, setConsent] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [erroEnvio, setErroEnvio] = useState("");

  function atualizar(campo: keyof Campos, valor: string) {
    setValores((v) => ({ ...v, [campo]: valor }));
    // limpa o erro do campo assim que o usuário corrige
    if (erros[campo]) setErros((e) => ({ ...e, [campo]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novosErros = validar(valores, consent);
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setStatus("loading");
    setErroEnvio("");

    const formData = new FormData();
    formData.set("nome", valores.nome);
    formData.set("email", valores.email);
    formData.set("whatsapp", valores.whatsapp);

    const result = await saveLead(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setErroEnvio(result.error || "Erro inesperado. Tente novamente.");
      setStatus("error");
    }
  }

  /* Estado de sucesso — confirmação + próximo passo */
  if (status === "success") {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green">
          <IconCheck size={30} />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">Vaga confirmada</h3>
        <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-white/60">
          Você vai receber o link da live direto no seu WhatsApp, todo dia antes
          de começar.
        </p>
        <a
          href={CANAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-green px-6 py-3 font-semibold text-navy transition-colors hover:bg-green-hover"
        >
          <IconBroadcast size={18} />
          Conhecer o canal da série
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
      <Campo
        label="Nome"
        name="nome"
        type="text"
        placeholder="Seu nome completo"
        value={valores.nome}
        onChange={(v) => atualizar("nome", v)}
        erro={erros.nome}
        autoComplete="name"
      />
      <Campo
        label="E-mail"
        name="email"
        type="email"
        placeholder="Seu melhor e-mail"
        value={valores.email}
        onChange={(v) => atualizar("email", v)}
        erro={erros.email}
        autoComplete="email"
      />
      <Campo
        label="WhatsApp"
        name="whatsapp"
        type="tel"
        placeholder="DDD + número (ex: 21 99109-7451)"
        value={valores.whatsapp}
        onChange={(v) => atualizar("whatsapp", v)}
        erro={erros.whatsapp}
        autoComplete="tel"
      />

      {/* Consentimento LGPD */}
      <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-left">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (erros.consent) setErros((er) => ({ ...er, consent: undefined }));
          }}
          className="mt-0.5 h-4 w-4 shrink-0 accent-green"
        />
        <span className="text-xs leading-relaxed text-white/55">
          Aceito receber o link da live e comunicações da Franca. Consulte a{" "}
          <a
            href="/privacidade"
            className="text-green-tint underline underline-offset-2 hover:text-green"
          >
            política de privacidade
          </a>
          .
        </span>
      </label>
      {erros.consent && <p className="text-xs text-red-300">{erros.consent}</p>}

      {/* Erro de envio (servidor) */}
      {status === "error" && (
        <p className="rounded-lg bg-red-400/10 px-3 py-2 text-center text-sm text-red-300">
          {erroEnvio}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green px-6 py-4 text-base font-bold text-navy shadow-[0_10px_30px_-10px_rgba(125,224,141,0.6)] transition-all hover:bg-green-hover disabled:cursor-wait disabled:opacity-60"
      >
        {status === "loading" ? (
          "Enviando..."
        ) : (
          <>
            Quero acompanhar ao vivo
            <IconArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-white/40">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  );
}

/*
  Campo de input reutilizável com label acessível (associada via id),
  estado de erro e aria-invalid. Mantém o form legível e consistente.
*/
type CampoProps = {
  label: string;
  name: keyof Campos;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  erro?: string;
  autoComplete?: string;
};

function Campo({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  erro,
  autoComplete,
}: CampoProps) {
  const id = `campo-${name}`;
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={!!erro}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-white transition-colors focus:outline-none focus:ring-1 ${
          erro
            ? "border-red-400/60 focus:border-red-400 focus:ring-red-400"
            : "border-white/10 focus:border-green focus:ring-green"
        }`}
      />
      {erro && (
        <p id={`${id}-erro`} className="mt-1.5 text-xs text-red-300">
          {erro}
        </p>
      )}
    </div>
  );
}
