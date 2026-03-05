// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const dir = path.join(__dirname, "..", "messages");

const termsByLocale = {
  en: {
    badge: "Legal Guidelines",
    title: "Terms of Service",
    effectiveDate: "Effective Date",
    sections: {
      intro: {
        heading: "1. Introduction",
        body: "By accessing and using {company}, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
      },
      nature: {
        heading: "2. Nature of Service",
        body: "Insurance Check provides algorithmic estimation tools designed to help Swiss residents analyze the potential profitability of their health insurance policies.",
        disclaimerTitle: "Important Disclaimer",
        disclaimerBody: "The results provided by our calculators are estimates based on the data you provide and historical market averages. They do NOT constitute binding financial advice, nor do they guarantee exact future savings. Always consult with a certified insurance broker before making final coverage changes."
      },
      conduct: {
        heading: "3. User Conduct",
        intro: "Users agree to use our platform strictly for personal, non-commercial purposes. You may not:",
        items: [
          "Attempt to reverse-engineer our proprietary calculation algorithms.",
          "Submit false or intentionally misleading data to manipulate system results.",
          "Use bots, scrapers, or other automated tools to extract data or pricing information from our site."
        ]
      },
      ip: {
        heading: "4. Intellectual Property",
        body: "The website and its original content, features, and functionality are owned by Insurance Check and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
      },
      liability: {
        heading: "5. Limitation of Liability",
        body: "Insurance Check, its directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of the Service."
      },
      changes: {
        heading: "6. Changes & Contact",
        body: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.",
        contactButton: "Contact Legal"
      }
    }
  },
  fr: {
    badge: "Directives Légales",
    title: "Conditions d'Utilisation",
    effectiveDate: "Date d'entrée en vigueur",
    sections: {
      intro: {
        heading: "1. Introduction",
        body: "En accédant et en utilisant {company}, vous acceptez d'être lié par les termes et dispositions de cet accord. De plus, lors de l'utilisation de ces services particuliers, vous serez soumis à toutes les directives ou règles applicables publiées pour ces services."
      },
      nature: {
        heading: "2. Nature du Service",
        body: "Insurance Check fournit des outils d'estimation algorithmique conçus pour aider les résidents suisses à analyser la rentabilité potentielle de leurs polices d'assurance maladie.",
        disclaimerTitle: "Avertissement Important",
        disclaimerBody: "Les résultats fournis par nos calculateurs sont des estimations basées sur les données que vous fournissez et les moyennes historiques du marché. Ils ne constituent PAS des conseils financiers contraignants et ne garantissent pas des économies futures exactes. Consultez toujours un courtier en assurances certifié avant de procéder à des modifications de couverture définitives."
      },
      conduct: {
        heading: "3. Conduite des Utilisateurs",
        intro: "Les utilisateurs acceptent d'utiliser notre plateforme strictement à des fins personnelles et non commerciales. Vous ne pouvez pas :",
        items: [
          "Tenter d'effectuer de la rétro-ingénierie sur nos algorithmes de calcul propriétaires.",
          "Soumettre des données fausses ou intentionnellement trompeuses pour manipuler les résultats du système.",
          "Utiliser des robots, des scrapers ou d'autres outils automatisés pour extraire des données ou des informations tarifaires de notre site."
        ]
      },
      ip: {
        heading: "4. Propriété Intellectuelle",
        body: "Le site web et son contenu original, ses fonctionnalités et ses caractéristiques sont la propriété d'Insurance Check et sont protégés par le droit international du droit d'auteur, des marques, des brevets, des secrets commerciaux et d'autres lois sur la propriété intellectuelle."
      },
      liability: {
        heading: "5. Limitation de Responsabilité",
        body: "Insurance Check, ses dirigeants, employés, partenaires et agents ne seront pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs résultant de votre accès ou de votre utilisation du Service."
      },
      changes: {
        heading: "6. Modifications & Contact",
        body: "Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. En continuant à accéder ou à utiliser notre Service après l'entrée en vigueur de ces révisions, vous acceptez d'être lié par les conditions révisées.",
        contactButton: "Contacter le Service Juridique"
      }
    }
  },
  de: {
    badge: "Rechtliche Richtlinien",
    title: "Nutzungsbedingungen",
    effectiveDate: "Gültigkeitsdatum",
    sections: {
      intro: {
        heading: "1. Einleitung",
        body: "Durch den Zugriff auf und die Nutzung von {company} erkennen Sie die Bedingungen und Bestimmungen dieser Vereinbarung an und stimmen zu, an diese gebunden zu sein. Außerdem unterliegen Sie bei der Nutzung dieser bestimmten Dienste etwaigen veröffentlichten Richtlinien oder Regeln, die für solche Dienste gelten."
      },
      nature: {
        heading: "2. Art des Dienstes",
        body: "Insurance Check bietet algorithmische Schätzungstools an, die Schweizer Einwohnern helfen sollen, die potenzielle Rentabilität ihrer Krankenversicherungspolicen zu analysieren.",
        disclaimerTitle: "Wichtiger Haftungsausschluss",
        disclaimerBody: "Die von unseren Rechnern gelieferten Ergebnisse sind Schätzungen, die auf den von Ihnen bereitgestellten Daten und historischen Marktdurchschnittswerten basieren. Sie stellen KEINE verbindliche Finanzberatung dar und garantieren keine exakten zukünftigen Einsparungen. Konsultieren Sie immer einen zertifizierten Versicherungsmakler, bevor Sie endgültige Versicherungsänderungen vornehmen."
      },
      conduct: {
        heading: "3. Nutzerverhalten",
        intro: "Benutzer stimmen zu, unsere Plattform ausschließlich für persönliche, nicht-kommerzielle Zwecke zu nutzen. Sie dürfen nicht:",
        items: [
          "Versuchen, unsere proprietären Berechnungsalgorithmen rückzuentwickeln.",
          "Falsche oder absichtlich irreführende Daten übermitteln, um Systemergebnisse zu manipulieren.",
          "Bots, Scraper oder andere automatisierte Tools verwenden, um Daten oder Preisinformationen von unserer Website zu extrahieren."
        ]
      },
      ip: {
        heading: "4. Geistiges Eigentum",
        body: "Die Website und ihre ursprünglichen Inhalte, Funktionen und Merkmale sind Eigentum von Insurance Check und durch internationale Urheberrechts-, Marken-, Patent-, Geschäftsgeheimnis- und andere Gesetze zum Schutz des geistigen Eigentums geschützt."
      },
      liability: {
        heading: "5. Haftungsbeschränkung",
        body: "Insurance Check, seine Direktoren, Mitarbeiter, Partner und Vertreter haften nicht für direkte, indirekte, zufällige, besondere, Folge- oder Strafschadenersatzansprüche, die aus Ihrem Zugriff auf oder Ihrer Nutzung des Dienstes resultieren."
      },
      changes: {
        heading: "6. Änderungen & Kontakt",
        body: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit nach eigenem Ermessen zu ändern oder zu ersetzen. Indem Sie nach Inkrafttreten dieser Änderungen weiterhin auf unseren Dienst zugreifen oder ihn nutzen, erklären Sie sich mit den überarbeiteten Bedingungen einverstanden.",
        contactButton: "Rechtsabteilung kontaktieren"
      }
    }
  },
  it: {
    badge: "Linee Guida Legali",
    title: "Termini di Servizio",
    effectiveDate: "Data di entrata in vigore",
    sections: {
      intro: {
        heading: "1. Introduzione",
        body: "Accedendo e utilizzando {company}, accetti e acconsenti a essere vincolato dai termini e dalle disposizioni di questo accordo. Inoltre, quando utilizzi questi particolari servizi, sarai soggetto a qualsiasi linea guida o regola applicabile pubblicata per tali servizi."
      },
      nature: {
        heading: "2. Natura del Servizio",
        body: "Insurance Check fornisce strumenti di stima algoritmica progettati per aiutare i residenti svizzeri ad analizzare la potenziale redditività delle loro polizze assicurative sanitarie.",
        disclaimerTitle: "Avvertenza Importante",
        disclaimerBody: "I risultati forniti dai nostri calcolatori sono stime basate sui dati che fornisci e sulle medie storiche di mercato. NON costituiscono consulenza finanziaria vincolante, né garantiscono risparmi futuri esatti. Consulta sempre un broker assicurativo certificato prima di apportare modifiche definitive alla copertura."
      },
      conduct: {
        heading: "3. Condotta degli Utenti",
        intro: "Gli utenti accettano di utilizzare la nostra piattaforma esclusivamente per scopi personali e non commerciali. Non puoi:",
        items: [
          "Tentare di fare reverse engineering dei nostri algoritmi di calcolo proprietari.",
          "Inviare dati falsi o intenzionalmente fuorvianti per manipolare i risultati del sistema.",
          "Utilizzare bot, scraper o altri strumenti automatizzati per estrarre dati o informazioni sui prezzi dal nostro sito."
        ]
      },
      ip: {
        heading: "4. Proprietà Intellettuale",
        body: "Il sito web e i suoi contenuti originali, funzionalità e caratteristiche sono di proprietà di Insurance Check e sono protetti da leggi internazionali sul diritto d'autore, marchi, brevetti, segreti commerciali e altri diritti di proprietà intellettuale."
      },
      liability: {
        heading: "5. Limitazione di Responsabilità",
        body: "Insurance Check, i suoi direttori, dipendenti, partner e agenti non saranno responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall'accesso o dall'utilizzo del Servizio."
      },
      changes: {
        heading: "6. Modifiche & Contatti",
        body: "Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi momento. Continuando ad accedere o utilizzare il nostro Servizio dopo che tali revisioni diventano effettive, accetti di essere vincolato dai termini rivisti.",
        contactButton: "Contatta il Servizio Legale"
      }
    }
  }
};

["en", "fr", "de", "it"].forEach((locale) => {
  const filePath = path.join(dir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  content.TermsOfService = termsByLocale[locale];
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  console.log(`Updated ${locale}.json with Terms of Service translations`);
});
