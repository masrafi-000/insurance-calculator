"use client";

import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  email: string;
  canton: string;
  prime: string;
  franchise: string;
  frais: string;
  quoteMax: string;
}

interface Results {
  primeAnn: number;
  participation: number;
  remboursement: number;
  resultat: number;
  ratio: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CANTONS = [
  { value: "AG", label: "Argovie (AG)" },
  { value: "AI", label: "Appenzell Rhodes-Int. (AI)" },
  { value: "AR", label: "Appenzell Rhodes-Ext. (AR)" },
  { value: "BE", label: "Berne (BE)" },
  { value: "BL", label: "Bâle-Campagne (BL)" },
  { value: "BS", label: "Bâle-Ville (BS)" },
  { value: "FR", label: "Fribourg (FR)" },
  { value: "GE", label: "Genève (GE)" },
  { value: "GL", label: "Glaris (GL)" },
  { value: "GR", label: "Grisons (GR)" },
  { value: "JU", label: "Jura (JU)" },
  { value: "LU", label: "Lucerne (LU)" },
  { value: "NE", label: "Neuchâtel (NE)" },
  { value: "NW", label: "Nidwald (NW)" },
  { value: "OW", label: "Obwald (OW)" },
  { value: "SG", label: "St-Gall (SG)" },
  { value: "SH", label: "Schaffhouse (SH)" },
  { value: "SO", label: "Soleure (SO)" },
  { value: "SZ", label: "Schwyz (SZ)" },
  { value: "TG", label: "Thurgovie (TG)" },
  { value: "TI", label: "Tessin (TI)" },
  { value: "UR", label: "Uri (UR)" },
  { value: "VD", label: "Vaud (VD)" },
  { value: "VS", label: "Valais (VS)" },
  { value: "ZG", label: "Zoug (ZG)" },
  { value: "ZH", label: "Zurich (ZH)" },
];

const FRANCHISES = [
  { value: "300", label: "300" },
  { value: "500", label: "500" },
  { value: "1000", label: "1'000" },
  { value: "1500", label: "1'500" },
  { value: "2000", label: "2'000" },
  { value: "2500", label: "2'500" },
];

const DEFAULT_FORM: FormData = {
  email: "",
  canton: "",
  prime: "",
  franchise: "2500",
  frais: "",
  quoteMax: "700",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatCHF(value: number): string {
  return value.toLocaleString("fr-CH", { style: "currency", currency: "CHF" });
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function participationCalc(
  frais: number,
  franchise: number,
  quoteMax: number,
): number {
  if (frais <= franchise) return frais;
  const supplement = (frais - franchise) * 0.1;
  return franchise + Math.min(supplement, quoteMax);
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex items-center justify-center w-[18px] h-[18px] rounded-full cursor-pointer text-[11px] font-black text-blue-500 bg-blue-50 border border-blue-200 flex-shrink-0 select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      aria-label={text}
    >
      ?
      {open && (
        <span className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-64 bg-slate-900/95 text-white text-xs font-normal leading-relaxed px-3 py-2.5 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md pointer-events-none z-[9999] text-left whitespace-normal after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[7px] after:border-transparent after:border-t-slate-900/95">
          {text}
        </span>
      )}
    </span>
  );
}

// ─── Field ────────────────────────────────────────────────────────────────────
function Field({
  label,
  tooltip,
  hint,
  children,
}: {
  label: string;
  tooltip: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/60 border border-slate-200/70 rounded-2xl p-3.5 shadow-sm backdrop-blur-sm transition-all duration-200 focus-within:-translate-y-px focus-within:border-blue-400/50 focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.1),0_8px_20px_rgba(0,0,0,0.07)]">
      <label className="flex items-center gap-1.5 text-[12.5px] font-bold text-slate-700 mb-2">
        {label}
        <Tooltip text={tooltip} />
      </label>
      {children}
      {hint && (
        <p className="mt-2 text-[11.5px] text-slate-400 leading-snug">{hint}</p>
      )}
    </div>
  );
}

// shared input/select class
const inputCls =
  "w-full px-3 py-2.5 rounded-xl border border-slate-200/60 bg-white/80 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-150 focus:border-blue-400 focus:ring-[3px] focus:ring-blue-200/60 appearance-none";

// ─── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({
  label,
  value,
  tooltip,
  variant = "neutral",
}: {
  label: string;
  value: string;
  tooltip: string;
  variant?: "good" | "bad" | "neutral";
}) {
  const accent =
    variant === "good"
      ? "border-l-emerald-500"
      : variant === "bad"
        ? "border-l-rose-500"
        : "border-l-blue-400";

  return (
    <div
      className={`relative overflow-hidden bg-white/65 border border-slate-200/70 border-l-4 ${accent} rounded-2xl p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      <div className="relative flex items-center gap-1.5 text-[12.5px] font-bold text-slate-400">
        {label}
        <Tooltip text={tooltip} />
      </div>
      <div className="relative mt-1.5 text-[22px] font-extrabold tracking-tight text-slate-800 leading-none">
        {value}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PrimeCalculator() {
  const [form, setForm] = useState<FormData>(DEFAULT_FORM);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState(false);
  const [notice, setNotice] = useState(false);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  function setField(key: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function runCalc(data: FormData) {
    setError(false);
    setNotice(false);

    const p = parseFloat(data.prime);
    const fr = parseFloat(data.franchise);
    const f = parseFloat(data.frais);
    const qm = parseFloat(data.quoteMax);

    if (
      !validateEmail(data.email) ||
      !data.canton ||
      [p, fr, f, qm].some(isNaN)
    ) {
      setError(true);
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 380));

    const primeAnn = p * 12;
    const participation = participationCalc(f, fr, qm);
    const remboursement = Math.max(0, f - participation);
    const resultat = primeAnn - remboursement;
    const ratio = remboursement / primeAnn;

    setResults({ primeAnn, participation, remboursement, resultat, ratio });
    setNotice(true);
    setLoading(false);

    const payload = {
      email: data.email,
      canton: data.canton,
      inputs: {
        prime_mensuelle: p,
        franchise: fr,
        frais_annuels: f,
        quote_part_plafond: qm,
      },
      results: {
        prime_annuelle: primeAnn,
        participation_totale: participation,
        remboursement,
        resultat_assureur: resultat,
        ratio_remboursement_sur_prime: ratio,
      },
      meta: {
        created_at: new Date().toISOString(),
        source: "prime-vs-rentabilite-tailwind-v1",
      },
    };
    console.log("EMAIL PAYLOAD:", payload);
    // TODO: await fetch("/api/send-result", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(payload) });

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  }

  function handleCalculate() {
    runCalc(form);
  }

  function handleExample() {
    const ex: FormData = {
      email: "test@email.ch",
      canton: "JU",
      prime: "380",
      franchise: "2500",
      frais: "1200",
      quoteMax: "700",
    };
    setForm(ex);
    setTimeout(() => runCalc(ex), 50);
  }

  function handleReset() {
    setForm(DEFAULT_FORM);
    setResults(null);
    setError(false);
    setNotice(false);
  }

  const assureurGagne = results && results.resultat > 0;

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[400px] rounded-full bg-blue-300/10 blur-[90px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-200/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[960px] mx-auto px-5 py-12">
        <div className="bg-white/60 border border-white/70 rounded-[26px] p-8 shadow-[0_20px_50px_rgba(59,130,246,0.12)] backdrop-blur-2xl">
          {/* ── Header ── */}
          <div className="flex items-start justify-between gap-4 mb-7">
            <div>
              <h1 className="text-[clamp(18px,3vw,24px)] font-extrabold tracking-tight leading-tight">
                Calculateur « Prime vs Rentabilité »
              </h1>
              <p className="mt-2 text-[13.5px] text-slate-500 leading-relaxed">
                Tu reçois aussi le résultat par email, et il s&apos;affiche
                immédiatement ici.
              </p>
            </div>
            <div className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/70 border border-blue-100/80 shadow-sm text-xs font-bold text-slate-700 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.2)] animate-pulse" />
              Leads + Résultats
            </div>
          </div>

          {/* ── Section 1 ── */}
          <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-3.5">
            1) Infos pour recevoir le résultat par email
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field
              label="Email *"
              tooltip="On t'envoie ton résultat et un récapitulatif. Aucune donnée sensible n'est demandée."
            >
              <input
                className={inputCls}
                type="email"
                placeholder="ex: eliot@email.ch"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
              />
            </Field>

            <Field
              label="Canton *"
              tooltip="Permet d'adapter les offres et comparatifs (les primes varient par canton)."
            >
              <div className="relative">
                <select
                  className={inputCls + " cursor-pointer pr-8"}
                  value={form.canton}
                  onChange={(e) => setField("canton", e.target.value)}
                >
                  <option value="">Sélectionner</option>
                  {CANTONS.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                  ▼
                </span>
              </div>
            </Field>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

          {/* ── Section 2 ── */}
          <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-3.5">
            2) Tes chiffres (calcul immédiat + envoi email)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field
              label="Prime mensuelle (CHF)"
              tooltip="Le montant que tu paies chaque mois à ta caisse maladie (LAMal). Tu le trouves sur ta police ou ton avis de prime."
            >
              <input
                className={inputCls}
                type="number"
                inputMode="decimal"
                placeholder="ex: 380"
                value={form.prime}
                onChange={(e) => setField("prime", e.target.value)}
              />
            </Field>

            <Field
              label="Franchise (CHF)"
              tooltip="Montant annuel que tu paies de ta poche avant que l'assurance commence à rembourser (ex: 300, 2'500)."
            >
              <div className="relative">
                <select
                  className={inputCls + " cursor-pointer pr-8"}
                  value={form.franchise}
                  onChange={(e) => setField("franchise", e.target.value)}
                >
                  {FRANCHISES.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                  ▼
                </span>
              </div>
            </Field>

            <Field
              label="Total frais médicaux annuels (CHF)"
              tooltip="Total des factures de santé sur l'année (médecin, médicaments, analyses, etc.). Tu peux le retrouver sur : 1) l'espace client de ta caisse, 2) le récapitulatif annuel, 3) la somme de tes factures."
            >
              <input
                className={inputCls}
                type="number"
                inputMode="decimal"
                placeholder="ex: 1200"
                value={form.frais}
                onChange={(e) => setField("frais", e.target.value)}
              />
            </Field>

            <Field
              label="Plafond quote-part (CHF)"
              tooltip="Après la franchise, tu paies en général 10% des frais (quote-part), plafonnée (souvent 700 CHF/an pour un adulte). Laisse 700 si tu n'es pas sûr."
              hint="Astuce : laisse 700 si tu n'es pas sûr (adulte)."
            >
              <input
                className={inputCls}
                type="number"
                inputMode="numeric"
                value={form.quoteMax}
                onChange={(e) => setField("quoteMax", e.target.value)}
              />
            </Field>
          </div>

          {/* ── Buttons ── */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            <button
              onClick={handleCalculate}
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700/40 text-white text-sm font-bold shadow-[0_8px_24px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-150 hover:-translate-y-px hover:brightness-105 active:translate-y-0 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading && (
                <svg
                  className="w-3.5 h-3.5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Calcul…" : "Calculer + Envoyer"}
            </button>

            <button
              onClick={handleExample}
              className="px-5 py-3 rounded-xl bg-white/60 border border-slate-200/70 text-slate-700 text-sm font-bold shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-white/80 active:scale-[0.99]"
            >
              Exemple
            </button>

            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl bg-white/60 border border-slate-200/70 text-slate-700 text-sm font-bold shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-white/80 active:scale-[0.99]"
            >
              Reset
            </button>
          </div>

          {/* ── Error ── */}
          {error && (
            <div className="mt-3.5 px-4 py-3 rounded-xl bg-rose-50 border border-rose-200/60 text-rose-700 text-[13px]">
              ⚠️ Merci de remplir <strong>Email</strong> +{" "}
              <strong>Canton</strong> + les champs de calcul.
            </div>
          )}

          {/* ── Notice ── */}
          {notice && (
            <div className="mt-3.5 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200/50 text-blue-800 text-[13px]">
              ✅ <strong>Résultat affiché</strong> et demande d&apos;envoi
              préparée. (Branche un service d&apos;email pour l&apos;envoi
              réel.)
            </div>
          )}

          {/* ── Results ── */}
          {results && (
            <div ref={resultsRef}>
              {/* Results header */}
              <div className="mt-7 flex items-center gap-3">
                <p className="text-[11px] font-black uppercase tracking-widest text-blue-400">
                  Résultats
                </p>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-100 to-transparent" />
              </div>

              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <KpiCard
                  label="Prime annuelle"
                  value={formatCHF(results.primeAnn)}
                  tooltip="Total des primes payées sur 12 mois."
                />
                <KpiCard
                  label="Participation totale"
                  value={formatCHF(results.participation)}
                  tooltip="Montant payé par vous : franchise + 10% des frais (max 700 CHF)."
                />
                <KpiCard
                  label="Remboursement"
                  value={formatCHF(results.remboursement)}
                  tooltip="Montant estimé remboursé par l'assurance après participation."
                />
                <KpiCard
                  label="Résultat assureur"
                  value={formatCHF(results.resultat)}
                  tooltip="Prime annuelle moins remboursement. Positif = l'assureur gagne."
                  variant={assureurGagne ? "bad" : "good"}
                />
                <KpiCard
                  label="Ratio remboursement / prime"
                  value={(results.ratio * 100).toFixed(1) + "%"}
                  tooltip="Pourcentage de ta prime réellement récupéré via remboursements."
                />
              </div>

              {/* ── Offer ── */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white/60 border border-blue-100/60 shadow-sm">
                <h3 className="text-[15px] font-extrabold tracking-tight text-slate-800">
                  Aller plus loin
                </h3>
                <p className="mt-1.5 text-[13px] text-slate-500 leading-relaxed">
                  Recevoir une comparaison plus avancée (franchise optimale +
                  pistes d&apos;économie) et être mis en relation avec un
                  partenaire si tu veux.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-4">
                  <button
                    onClick={() =>
                      alert(
                        "À brancher: Stripe / page premium / prise de contact",
                      )
                    }
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700/40 text-white text-[13.5px] font-bold shadow-[0_6px_18px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-px hover:brightness-105 active:scale-[0.99]"
                  >
                    Voir l&apos;offre Premium
                  </button>
                  <button
                    onClick={() =>
                      alert("À brancher: prise de rendez-vous / formulaire")
                    }
                    className="px-5 py-2.5 rounded-xl bg-white/70 border border-slate-200/70 text-slate-700 text-[13.5px] font-bold shadow-sm transition-all hover:-translate-y-px hover:bg-white active:scale-[0.99]"
                  >
                    Parler à un conseiller
                  </button>
                </div>
                <p className="mt-3 text-[11.5px] text-slate-400">
                  Les boutons sont des placeholders à connecter à tes offres.
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Outil informatif – ne constitue pas un conseil en assurance.
          </p>
        </div>
      </div>
    </div>
  );
}
