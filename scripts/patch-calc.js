const fs = require("fs");
const path = require("path");

const locales = ["en", "fr", "de", "it"];
const dir = path.join(__dirname, "..", "messages");

const calculatorTranslations = {
  en: {
    Section: {
      badge: "Interactive Tool",
      title: "Estimation & Analysis",
      description: "Test your current insurance costs against our profitability algorithms and see instant, real-time results.",
      partnersTitle: "Partner Carriers",
      viewDetails: "View Details",
      adsFeatured: "Featured Ad"
    },
    Ads: [
      {
        title: "Premium Auto Savings",
        desc: "Drivers who switch to our partners save an average of $744/year.",
        price: "Up to 30% Off"
      },
      {
        title: "Homeowners Special",
        desc: "Exclusive 2026 rates for new homeowners. Complete coverage.",
        price: "From $49/mo"
      },
      {
        title: "Life Insurance Plus",
        desc: "Secure your family's future with our top-rated term life policies.",
        price: "Instant Approval"
      }
    ],
    GoogleAds: {
      ad1: "Local Family Plans",
      ad2: "Travel Protection",
      ad3: "Dental & Vision Care",
      ad4: "Exclusive Health Benefits"
    },
    Form: {
      title: "Premium vs. Profitability Calculator",
      subtitle: "You will receive the result by email, and it will also appear immediately here.",
      badge: "Leads + Results",
      section1Title: "1) Info to receive your results via email",
      fields: {
        firstName: { label: "First Name *", placeholder: "John", tooltip: "Just for personalized summary." },
        lastName: { label: "Last Name *", placeholder: "Doe", tooltip: "Just for personalized summary" },
        email: { label: "Email *", placeholder: "test@email.ch", tooltip: "We need your email to send your customized calculation results." },
        phoneNumber: { label: "Phone Number *", placeholder: "123456789", tooltip: "Just for personalized summary." },
        dateOfBirth: { label: "Date of Birth *", placeholder: "Pick a date", tooltip: "Your birth date helps estimate age-related premiums." }
      },
      section2Title: "2) Your numbers (instant calculation + email)",
      fields2: {
        canton: { label: "Canton *", placeholder: "Jura (JU)", tooltip: "Allows for customization of offers and comparisons (premiums vary by canton)." },
        monthlyPremium: { label: "Monthly Payment (CHF)", placeholder: "380", tooltip: "Your current health insurance monthly base premium." },
        deductible: { label: "Annual Deductible (CHF)", placeholder: "2'500", tooltip: "The amount you pay out-of-pocket before insurance starts covering costs." },
        medicalExpenses: { label: "Total Medical Expenses (CHF)", placeholder: "1200", tooltip: "Estimate your total yearly doctor visits, medications, and treatments." },
        copayCap: { label: "Co-insurance (CHF)", placeholder: "700", tooltip: "The maximum 10% co-pay you pay per year (usually capped at 700 CHF for adults)." },
        model: { label: "Insurance Model *", placeholder: "Standard", tooltip: "Choose your preferred consultation method (Standard, Telmed, HMO, etc.) to apply discounts.", options: ["Standard", "Family Doctor", "Telmod", "HMO/Network"] },
        adults: { label: "Number of Adults (18+) *", placeholder: "1", tooltip: "Number of people aged 18 and older under this policy block." },
        children: { label: "Number of Children (0-18) *", placeholder: "0", tooltip: "Number of dependents under the age of 18 (applies child discount factors)." },
        accident: { label: "Include Accident Coverage?", tooltip: "Accident coverage adds around 7% to your premium. Select No if covered by an employer.", description: "Usually covered by employer if you work more than 8h/week." }
      },
      buttons: {
        calculate: "Calculate + Send",
        example: "Example",
        reset: "Reset"
      }
    },
    EmptyResponse: {
      title: "No results yet",
      description: "Fill out the form above and click \"Calculate + Send\" to discover your profitability and see the detailed analysis."
    },
    Result: {
      badge: "Calculation Complete",
      title: "Your Profitability Setup",
      subtitle: "Based on the information provided, here is your breakdown.",
      verdictLose: "You Lose",
      verdictGain: "You Gain",
      simulatedPremium: "Simulated Premium",
      simulatedTooltip: "The estimated optimal premium based on your selected canton and model.",
      cheaper: "Cheaper",
      moreExpensive: "More Expensive",
      savePerYear: "You could save {amount} CHF per year",
      costPerYear: "{amount} CHF/year",
      perMonth: "CHF/month",
      annualPremium: "Annual Premium",
      annualTooltip: "Total premiums paid over 12 months.",
      totalParticipation: "Total participation",
      participationTooltip: "Amount paid by you: deductible + 10% of the costs (max 700 CHF).",
      refund: "Refund",
      refundTooltip: "Rebustment Amount by the insurance after participation",
      ratio: "Reimbursement/premium ratio",
      ratioTooltip: "Percentage of your bonus actually recovered through refunds"
    }
  },
  de: {
    Section: {
      badge: "Interaktives Tool",
      title: "Schätzung & Analyse",
      description: "Testen Sie Ihre aktuellen Versicherungskosten anhand unserer Rentabilitätsalgorithmen und sehen Sie sofortige Ergebnisse in Echtzeit.",
      partnersTitle: "Partnergesellschaften",
      viewDetails: "Details ansehen",
      adsFeatured: "Hervorgehobene Anzeige"
    },
    Ads: [
      {
        title: "Premium Auto Einsparungen",
        desc: "Fahrer, die zu unseren Partnern wechseln, sparen im Durchschnitt 744 $/Jahr.",
        price: "Bis zu 30% Rabatt"
      },
      {
        title: "Spezialangebot für Hausbesitzer",
        desc: "Exklusive Tarife 2026 für neue Hausbesitzer. Komplette Abdeckung.",
        price: "Ab 49 $/Monat"
      },
      {
        title: "Lebensversicherung Plus",
        desc: "Sichern Sie die Zukunft Ihrer Familie mit unseren erstklassigen Risikolebensversicherungen.",
        price: "Sofortige Zulassung"
      }
    ],
    GoogleAds: {
      ad1: "Lokale Familienpläne",
      ad2: "Reiseschutz",
      ad3: "Zahn- & Augenpflege",
      ad4: "Exklusive Gesundheitsvorteile"
    },
    Form: {
      title: "Prämie vs. Rentabilitätsrechner",
      subtitle: "Sie erhalten das Ergebnis per E-Mail und es erscheint auch sofort hier.",
      badge: "Leads + Ergebnisse",
      section1Title: "1) Infos, um Ihre Ergebnisse per E-Mail zu erhalten",
      fields: {
        firstName: { label: "Vorname *", placeholder: "John", tooltip: "Nur für die personalisierte Zusammenfassung." },
        lastName: { label: "Nachname *", placeholder: "Doe", tooltip: "Nur für die personalisierte Zusammenfassung." },
        email: { label: "E-Mail *", placeholder: "test@email.ch", tooltip: "Wir benötigen Ihre E-Mail, um Ihre individuellen Berechnungsergebnisse zu senden." },
        phoneNumber: { label: "Telefonnummer *", placeholder: "123456789", tooltip: "Nur für die personalisierte Zusammenfassung." },
        dateOfBirth: { label: "Geburtsdatum *", placeholder: "Datum wählen", tooltip: "Ihr Geburtsdatum hilft bei der Schätzung altersbedingter Prämien." }
      },
      section2Title: "2) Ihre Zahlen (Sofortberechnung + E-Mail)",
      fields2: {
        canton: { label: "Kanton *", placeholder: "Jura (JU)", tooltip: "Ermöglicht die Anpassung von Angeboten und Vergleichen (Prämien variieren je nach Kanton)." },
        monthlyPremium: { label: "Monatliche Zahlung (CHF)", placeholder: "380", tooltip: "Ihre aktuelle monatliche Grundprämie der Krankenversicherung." },
        deductible: { label: "Jährliche Franchise (CHF)", placeholder: "2'500", tooltip: "Der Betrag, den Sie aus eigener Tasche zahlen, bevor die Versicherung die Kosten übernimmt." },
        medicalExpenses: { label: "Gesamte medizinische Kosten (CHF)", placeholder: "1200", tooltip: "Schätzen Sie Ihre gesamten Arztbesuche, Medikamente und Behandlungen pro Jahr." },
        copayCap: { label: "Mitversicherung (CHF)", placeholder: "700", tooltip: "Die maximalen 10% Zuzahlung pro Jahr (normalerweise bei 700 CHF für Erwachsene begrenzt)." },
        model: { label: "Versicherungsmodell *", placeholder: "Standard", tooltip: "Wählen Sie Ihre bevorzugte Konsultationsmethode (Standard, Telmed, HMO etc.), um Rabatte anzuwenden.", options: ["Standard", "Hausarzt", "Telmed", "HMO/Netzwerk"] },
        adults: { label: "Anzahl Erwachsene (18+) *", placeholder: "1", tooltip: "Anzahl der Personen ab 18 Jahren unter diesem Policenblock." },
        children: { label: "Anzahl Kinder (0-18) *", placeholder: "0", tooltip: "Anzahl der unterhaltsberechtigten Personen unter 18 Jahren (wendet Kinderrabattfaktoren an)." },
        accident: { label: "Unfalldeckung einschließen?", tooltip: "Die Unfalldeckung erhöht Ihre Prämie um etwa 7%. Wählen Sie Nein, wenn sie vom Arbeitgeber gedeckt ist.", description: "Wird normalerweise vom Arbeitgeber übernommen, wenn Sie mehr als 8h/Woche arbeiten." }
      },
      buttons: {
        calculate: "Berechnen + Senden",
        example: "Beispiel",
        reset: "Zurücksetzen"
      }
    },
    EmptyResponse: {
      title: "Noch keine Ergebnisse",
      description: "Füllen Sie das obige Formular aus und klicken Sie auf \"Berechnen + Senden\", um Ihre Rentabilität zu entdecken und die detaillierte Analyse zu sehen."
    },
    Result: {
      badge: "Berechnung abgeschlossen",
      title: "Ihr Rentabilitäts-Setup",
      subtitle: "Basierend auf den bereitgestellten Informationen, hier ist Ihre Aufschlüsselung.",
      verdictLose: "Sie Verlieren",
      verdictGain: "Sie Gewinnen",
      simulatedPremium: "Simulierte Prämie",
      simulatedTooltip: "Die geschätzte optimale Prämie basierend auf Ihrem ausgewählten Kanton und Modell.",
      cheaper: "Günstiger",
      moreExpensive: "Teurer",
      savePerYear: "Sie könnten {amount} CHF pro Jahr sparen",
      costPerYear: "{amount} CHF/Jahr",
      perMonth: "CHF/Monat",
      annualPremium: "Jahresprämie",
      annualTooltip: "Über 12 Monate gezahlte Gesamtprämien.",
      totalParticipation: "Gesamtbeteiligung",
      participationTooltip: "Von Ihnen gezahlter Betrag: Franchise + 10% der Kosten (max 700 CHF).",
      refund: "Rückerstattung",
      refundTooltip: "Rückerstattungsbetrag durch die Versicherung nach Beteiligung",
      ratio: "Rückerstattungs-/Prämienverhältnis",
      ratioTooltip: "Prozentsatz Ihres Bonus, der tatsächlich durch Rückerstattungen zurückgewonnen wird"
    }
  },
  fr: {
    Section: {
      badge: "Outil Interactif",
      title: "Estimation & Analyse",
      description: "Testez vos coûts d'assurance actuels par rapport à nos algorithmes de rentabilité et voyez les résultats instantanés en temps réel.",
      partnersTitle: "Entreprises Partenaires",
      viewDetails: "Voir les détails",
      adsFeatured: "Annonce en vedette"
    },
    Ads: [
      {
        title: "Économies sur l'Assurance Auto Premium",
        desc: "Les conducteurs qui passent à nos partenaires économisent en moyenne 744 $/an.",
        price: "Jusqu'à 30% de réduction"
      },
      {
        title: "Spécial Propriétaires",
        desc: "Tarifs exclusifs 2026 pour les nouveaux propriétaires. Couverture complète.",
        price: "Dès 49 $/mois"
      },
      {
        title: "Assurance Vie Plus",
        desc: "Assurez l'avenir de votre famille avec nos meilleures polices d'assurance vie temporaire.",
        price: "Approbation Instantanée"
      }
    ],
    GoogleAds: {
      ad1: "Plans Familiaux Locaux",
      ad2: "Protection de Voyage",
      ad3: "Soins Dentaires & Visuels",
      ad4: "Avantages Santé Exclusifs"
    },
    Form: {
      title: "Calculateur Prime vs. Rentabilité",
      subtitle: "Vous recevrez le résultat par email, et il apparaîtra également immédiatement ici.",
      badge: "Leads + Résultats",
      section1Title: "1) Informations pour recevoir vos résultats par email",
      fields: {
        firstName: { label: "Prénom *", placeholder: "John", tooltip: "Juste pour un résumé personnalisé." },
        lastName: { label: "Nom de famille *", placeholder: "Doe", tooltip: "Juste pour un résumé personnalisé." },
        email: { label: "Email *", placeholder: "test@email.ch", tooltip: "Nous avons besoin de votre email pour envoyer vos résultats de calcul personnalisés." },
        phoneNumber: { label: "Numéro de téléphone *", placeholder: "123456789", tooltip: "Juste pour un résumé personnalisé." },
        dateOfBirth: { label: "Date de naissance *", placeholder: "Choisir une date", tooltip: "Votre date de naissance aide à estimer les primes liées à l'âge." }
      },
      section2Title: "2) Vos chiffres (calcul instantané + email)",
      fields2: {
        canton: { label: "Canton *", placeholder: "Jura (JU)", tooltip: "Permet de personnaliser les offres et les comparaisons (les primes varient selon le canton)." },
        monthlyPremium: { label: "Paiement Mensuel (CHF)", placeholder: "380", tooltip: "Votre prime de base mensuelle d'assurance maladie actuelle." },
        deductible: { label: "Franchise Annuelle (CHF)", placeholder: "2'500", tooltip: "Le montant que vous payez de votre poche avant que l'assurance ne commence à couvrir les coûts." },
        medicalExpenses: { label: "Frais Médicaux Totaux (CHF)", placeholder: "1200", tooltip: "Estimez le total de vos visites chez le médecin, médicaments et traitements annuels." },
        copayCap: { label: "Coassurance (CHF)", placeholder: "700", tooltip: "La quote-part maximale de 10% que vous payez par an (généralement plafonnée à 700 CHF pour les adultes)." },
        model: { label: "Modèle d'Assurance *", placeholder: "Standard", tooltip: "Choisissez votre méthode de consultation préférée (Standard, Telmed, HMO, etc.) pour appliquer les réductions.", options: ["Standard", "Médecin de Famille", "Telmed", "HMO/Réseau"] },
        adults: { label: "Nombre d'Adultes (18+) *", placeholder: "1", tooltip: "Nombre de personnes âgées de 18 ans et plus sous ce bloc de police." },
        children: { label: "Nombre d'Enfants (0-18) *", placeholder: "0", tooltip: "Nombre de personnes à charge de moins de 18 ans (applique les facteurs de réduction pour enfants)." },
        accident: { label: "Inclure la couverture accident?", tooltip: "La couverture accident ajoute environ 7% à votre prime. Sélectionnez Non si couvert par un employeur.", description: "Généralement couvert par l'employeur si vous travaillez plus de 8h/semaine." }
      },
      buttons: {
        calculate: "Calculer + Envoyer",
        example: "Exemple",
        reset: "Réinitialiser"
      }
    },
    EmptyResponse: {
      title: "Aucun résultat pour le moment",
      description: "Remplissez le formulaire ci-dessus et cliquez sur \"Calculer + Envoyer\" pour découvrir votre rentabilité et voir l'analyse détaillée."
    },
    Result: {
      badge: "Calcul Terminé",
      title: "Votre Configuration de Rentabilité",
      subtitle: "Sur la base des informations fournies, voici votre analyse.",
      verdictLose: "Vous Perdez",
      verdictGain: "Vous Gagnez",
      simulatedPremium: "Prime Simulée",
      simulatedTooltip: "La prime optimale estimée en fonction de votre canton et modèle sélectionnés.",
      cheaper: "Moins Cher",
      moreExpensive: "Plus Cher",
      savePerYear: "Vous pourriez économiser {amount} CHF par an",
      costPerYear: "{amount} CHF/an",
      perMonth: "CHF/mois",
      annualPremium: "Prime Annuelle",
      annualTooltip: "Total des primes payées sur 18 mois.",
      totalParticipation: "Participation totale",
      participationTooltip: "Montant payé par vous : franchise + 10% des coûts (max 700 CHF).",
      refund: "Remboursement",
      refundTooltip: "Montant de remboursement par l'assurance après participation",
      ratio: "Ratio remboursement/prime",
      ratioTooltip: "Pourcentage de votre bonus réellement récupéré grâce aux remboursements"
    }
  },
  it: {
    Section: {
      badge: "Strumento Interattivo",
      title: "Stima & Analisi",
      description: "Metti alla prova i tuoi attuali costi assicurativi contro i nostri algoritmi di redditività e vedi risultati istantanei in tempo reale.",
      partnersTitle: "Compagnie Partner",
      viewDetails: "Vedi Dettagli",
      adsFeatured: "Annuncio in Primo Piano"
    },
    Ads: [
      {
        title: "Risparmio Assicurazione Auto Premium",
        desc: "I conducenti che passano ai nostri partner risparmiano in media 744 $/anno.",
        price: "Fino al 30% di Sconto"
      },
      {
        title: "Speciale Proprietari di Casa",
        desc: "Tariffe esclusive 2026 per nuovi proprietari di casa. Copertura completa.",
        price: "Da 49 $/mese"
      },
      {
        title: "Assicurazione Vita Plus",
        desc: "Assicura il futuro della tua famiglia con le nostre migliori polizze vita temporanee.",
        price: "Approvazione Istantanea"
      }
    ],
    GoogleAds: {
      ad1: "Piani Familiari Locali",
      ad2: "Protezione Viaggio",
      ad3: "Cure Dentali e Visive",
      ad4: "Vantaggi Sanitari Esclusivi"
    },
    Form: {
      title: "Calcolatore Premio vs Redditività",
      subtitle: "Riceverai il risultato via email, e apparirà anche immediatamente qui.",
      badge: "Contatti + Risultati",
      section1Title: "1) Informazioni per ricevere i tuoi risultati via email",
      fields: {
        firstName: { label: "Nome *", placeholder: "John", tooltip: "Solo per un riepilogo personalizzato." },
        lastName: { label: "Cognome *", placeholder: "Doe", tooltip: "Solo per un riepilogo personalizzato." },
        email: { label: "Email *", placeholder: "test@email.ch", tooltip: "Abbiamo bisogno della tua email per inviare i tuoi risultati di calcolo personalizzati." },
        phoneNumber: { label: "Numero di Telefono *", placeholder: "123456789", tooltip: "Solo per un riepilogo personalizzato." },
        dateOfBirth: { label: "Data di Nascita *", placeholder: "Scegli una data", tooltip: "La tua data di nascita aiuta a stimare i premi legati all'età." }
      },
      section2Title: "2) I tuoi numeri (calcolo istantaneo + email)",
      fields2: {
        canton: { label: "Cantone *", placeholder: "Giura (JU)", tooltip: "Consente la personalizzazione di offerte e confronti (i premi variano in base al cantone)." },
        monthlyPremium: { label: "Pagamento Mensile (CHF)", placeholder: "380", tooltip: "Il tuo attuale premio base mensile per l'assicurazione sanitaria." },
        deductible: { label: "Franchigia Annuale (CHF)", placeholder: "2'500", tooltip: "L'importo che paghi di tasca tua prima che l'assicurazione inizi a coprire i costi." },
        medicalExpenses: { label: "Spese Mediche Totali (CHF)", placeholder: "1200", tooltip: "Stima le tue visite mediche, farmaci e trattamenti totali annuali." },
        copayCap: { label: "Coassicurazione (CHF)", placeholder: "700", tooltip: "La quota massima del 10% che paghi all'anno (di solito limitata a 700 CHF per gli adulti)." },
        model: { label: "Modello Assicurativo *", placeholder: "Standard", tooltip: "Scegli il tuo metodo di consultazione preferito (Standard, Telmed, HMO, ecc.) per applicare sconti.", options: ["Standard", "Medico di Famiglia", "Telmed", "HMO/Rete"] },
        adults: { label: "Numero di Adulti (18+) *", placeholder: "1", tooltip: "Numero di persone dai 18 anni in su coperte da questo blocco di polizza." },
        children: { label: "Numero di Bambini (0-18) *", placeholder: "0", tooltip: "Numero di persone a carico di età inferiore a 18 anni (applica i fattori di sconto per bambini)." },
        accident: { label: "Includere Copertura Infortuni?", tooltip: "La copertura infortuni aggiunge circa il 7% al tuo premio. Seleziona No se coperto da un datore di lavoro.", description: "Solitamente coperto dal datore di lavoro se lavori più di 8 ore a settimana." }
      },
      buttons: {
        calculate: "Calcola + Invia",
        example: "Esempio",
        reset: "Reset"
      }
    },
    EmptyResponse: {
      title: "Nessun risultato ancora",
      description: "Compila il modulo qui sopra e fai clic su \"Calcola + Invia\" per scoprire la tua redditività e vedere l'analisi dettagliata."
    },
    Result: {
      badge: "Calcolo Completato",
      title: "La Tua Configurazione di Redditività",
      subtitle: "Sulla base delle informazioni fornite, ecco la tua analisi.",
      verdictLose: "Tu Perdi",
      verdictGain: "Tu Guadagni",
      simulatedPremium: "Premio Simulato",
      simulatedTooltip: "Il premio ottimale stimato in base al cantone e al modello selezionati.",
      cheaper: "Più Economico",
      moreExpensive: "Più Costoso",
      savePerYear: "Potresti risparmiare {amount} CHF all'anno",
      costPerYear: "{amount} CHF/anno",
      perMonth: "CHF/mese",
      annualPremium: "Premio Annuale",
      annualTooltip: "Premi totali pagati su 12 mesi.",
      totalParticipation: "Partecipazione Totale",
      participationTooltip: "Importo pagato da te: franchigia + 10% dei costi (max 700 CHF).",
      refund: "Rimborso",
      refundTooltip: "Importo del rimborso da parte dell'assicurazione dopo la partecipazione",
      ratio: "Rapporto rimborso/premio",
      ratioTooltip: "Percentuale del tuo bonus effettivamente recuperata tramite i rimborsi"
    }
  }
};

locales.forEach((locale) => {
  const filePath = path.join(dir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  content.Calculator = calculatorTranslations[locale];
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  console.log(`Updated ${locale}.json`);
});
