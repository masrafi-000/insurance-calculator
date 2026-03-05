const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "messages");

const privacyByLocale = {
  en: {
    badge: "Swiss Privacy Standards",
    title: "Privacy Policy",
    effectiveDate: "Effective Date",
    sections: {
      intro: {
        heading: "1. Introduction",
        body: "At {company}, we take your privacy extremely seriously. We operate under strict Swiss data protection laws to ensure that the information you provide while using our premium calculation algorithms remains secure, confidential, and completely under your control."
      },
      dataCollect: {
        heading: "2. Data We Collect",
        intro: "When you use our estimation tool, we collect only the necessary information to provide you with accurate insurance profitability results:",
        items: [
          { label: "Form Data:", text: "Canton, monthly premium, franchise, estimated medical expenses, and quote-part ceiling." },
          { label: "Contact Information:", text: "Your email address, used strictly to send you your requested detailed PDF analysis." },
          { label: "Usage Data:", text: "Anonymous analytical data on how our website is navigated to improve our services." }
        ]
      },
      dataUse: {
        heading: "3. How We Use Your Data",
        intro: "Your data is exclusively used to:",
        items: [
          "Perform real-time calculations against our profitability matrix.",
          "Deliver your personalized results directly to your inbox.",
          "Enhance the accuracy and efficiency of our insurance comparison algorithms."
        ],
        noSell: "We do NOT sell your data to third parties.",
        noSellNote: "Your email will only be shared with our trusted carrier partners if you explicitly request to connect with them for a final binding quote."
      },
      security: {
        heading: "4. Security",
        body: "All data transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS protocols. Our databases are secured within highly regulated, Swiss-domiciled server environments."
      },
      rights: {
        heading: "5. Your Rights",
        body: "You have the full right to request access to, correction of, or deletion of any personal data we hold about you."
      }
    }
  },
  fr: {
    badge: "Normes de Confidentialité Suisses",
    title: "Politique de Confidentialité",
    effectiveDate: "Date d'entrée en vigueur",
    sections: {
      intro: {
        heading: "1. Introduction",
        body: "Chez {company}, nous prenons votre vie privée très au sérieux. Nous opérons sous les strictes lois suisses de protection des données pour garantir que les informations que vous fournissez lors de l'utilisation de nos algorithmes de calcul de primes restent sécurisées, confidentielles et entièrement sous votre contrôle."
      },
      dataCollect: {
        heading: "2. Données Que Nous Collectons",
        intro: "Lorsque vous utilisez notre outil d'estimation, nous collectons uniquement les informations nécessaires pour vous fournir des résultats précis sur la rentabilité de votre assurance :",
        items: [
          { label: "Données du formulaire :", text: "Canton, prime mensuelle, franchise, frais médicaux estimés et plafond de la quote-part." },
          { label: "Informations de contact :", text: "Votre adresse e-mail, utilisée uniquement pour vous envoyer l'analyse PDF détaillée que vous avez demandée." },
          { label: "Données d'utilisation :", text: "Données analytiques anonymes sur la navigation sur notre site pour améliorer nos services." }
        ]
      },
      dataUse: {
        heading: "3. Comment Nous Utilisons Vos Données",
        intro: "Vos données sont exclusivement utilisées pour :",
        items: [
          "Effectuer des calculs en temps réel par rapport à notre matrice de rentabilité.",
          "Vous livrer vos résultats personnalisés directement dans votre boîte de réception.",
          "Améliorer la précision et l'efficacité de nos algorithmes de comparaison d'assurances."
        ],
        noSell: "Nous ne vendons PAS vos données à des tiers.",
        noSellNote: "Votre e-mail ne sera partagé avec nos partenaires de confiance que si vous demandez explicitement à entrer en contact avec eux pour un devis final."
      },
      security: {
        heading: "4. Sécurité",
        body: "Toutes les données transmises entre votre navigateur et nos serveurs sont chiffrées à l'aide de protocoles SSL/TLS standard. Nos bases de données sont sécurisées dans des environnements serveurs suisses hautement réglementés."
      },
      rights: {
        heading: "5. Vos Droits",
        body: "Vous avez le droit de demander l'accès, la correction ou la suppression de toutes les données personnelles que nous détenons à votre sujet."
      }
    }
  },
  de: {
    badge: "Schweizer Datenschutzstandards",
    title: "Datenschutzrichtlinie",
    effectiveDate: "Gültigkeitsdatum",
    sections: {
      intro: {
        heading: "1. Einleitung",
        body: "Bei {company} nehmen wir Ihren Datenschutz äußerst ernst. Wir arbeiten nach den strengen Schweizer Datenschutzgesetzen, um sicherzustellen, dass die Informationen, die Sie bei der Nutzung unserer Prämienberechnungsalgorithmen bereitstellen, sicher, vertraulich und vollständig unter Ihrer Kontrolle bleiben."
      },
      dataCollect: {
        heading: "2. Daten, die wir erheben",
        intro: "Bei der Nutzung unseres Schätzungstools erheben wir nur die notwendigen Informationen, um Ihnen genaue Versicherungsrentabilitätsergebnisse zu liefern:",
        items: [
          { label: "Formulardaten:", text: "Kanton, monatliche Prämie, Franchise, geschätzte Arztkosten und Selbstbehalt-Obergrenze." },
          { label: "Kontaktinformationen:", text: "Ihre E-Mail-Adresse, ausschließlich verwendet, um Ihnen Ihre angeforderte detaillierte PDF-Analyse zu senden." },
          { label: "Nutzungsdaten:", text: "Anonyme Analysedaten zur Navigation auf unserer Website zur Verbesserung unserer Dienste." }
        ]
      },
      dataUse: {
        heading: "3. Verwendung Ihrer Daten",
        intro: "Ihre Daten werden ausschließlich verwendet für:",
        items: [
          "Echtzeit-Berechnungen anhand unserer Rentabilitätsmatrix durchzuführen.",
          "Ihre personalisierten Ergebnisse direkt in Ihr Postfach zu liefern.",
          "Die Genauigkeit und Effizienz unserer Versicherungsvergleichsalgorithmen zu verbessern."
        ],
        noSell: "Wir verkaufen Ihre Daten NICHT an Dritte.",
        noSellNote: "Ihre E-Mail-Adresse wird nur mit unseren vertrauenswürdigen Versicherungspartnern geteilt, wenn Sie ausdrücklich wünschen, für ein endgültiges verbindliches Angebot kontaktiert zu werden."
      },
      security: {
        heading: "4. Sicherheit",
        body: "Alle zwischen Ihrem Browser und unseren Servern übertragenen Daten werden mit branchenüblichen SSL/TLS-Protokollen verschlüsselt. Unsere Datenbanken sind in hochregulierten, schweizansässigen Serverumgebungen gesichert."
      },
      rights: {
        heading: "5. Ihre Rechte",
        body: "Sie haben das volle Recht, Zugang zu, Berichtigung von oder Löschung aller personenbezogenen Daten zu beantragen, die wir über Sie gespeichert haben."
      }
    }
  },
  it: {
    badge: "Standard di Privacy Svizzeri",
    title: "Informativa sulla Privacy",
    effectiveDate: "Data di entrata in vigore",
    sections: {
      intro: {
        heading: "1. Introduzione",
        body: "Da {company}, prendiamo la tua privacy molto sul serio. Operiamo sotto le rigide leggi svizzere sulla protezione dei dati per garantire che le informazioni che fornisci durante l'utilizzo dei nostri algoritmi di calcolo del premio rimangano sicure, riservate e completamente sotto il tuo controllo."
      },
      dataCollect: {
        heading: "2. Dati Che Raccogliamo",
        intro: "Quando utilizzi il nostro strumento di stima, raccogliamo solo le informazioni necessarie per fornirti risultati accurati sulla redditività assicurativa:",
        items: [
          { label: "Dati del modulo:", text: "Cantone, premio mensile, franchigia, spese mediche stimate e limite di partecipazione." },
          { label: "Informazioni di contatto:", text: "Il tuo indirizzo email, utilizzato esclusivamente per inviarti la dettagliata analisi PDF richiesta." },
          { label: "Dati di utilizzo:", text: "Dati analitici anonimi su come viene navigato il nostro sito per migliorare i nostri servizi." }
        ]
      },
      dataUse: {
        heading: "3. Come Utilizziamo i Tuoi Dati",
        intro: "I tuoi dati vengono utilizzati esclusivamente per:",
        items: [
          "Eseguire calcoli in tempo reale rispetto alla nostra matrice di redditività.",
          "Recapitare i tuoi risultati personalizzati direttamente nella tua casella di posta.",
          "Migliorare la precisione e l'efficienza dei nostri algoritmi di confronto assicurativo."
        ],
        noSell: "NON vendiamo i tuoi dati a terzi.",
        noSellNote: "La tua email sarà condivisa con i nostri partner fiduciari solo se richiedi esplicitamente di essere contattato per un preventivo finale vincolante."
      },
      security: {
        heading: "4. Sicurezza",
        body: "Tutti i dati trasmessi tra il tuo browser e i nostri server sono crittografati utilizzando protocolli SSL/TLS standard del settore. I nostri database sono protetti in ambienti server altamente regolamentati e domiciliati in Svizzera."
      },
      rights: {
        heading: "5. I Tuoi Diritti",
        body: "Hai il pieno diritto di richiedere l'accesso, la correzione o la cancellazione di qualsiasi dato personale che deteniamo su di te."
      }
    }
  }
};

["en", "fr", "de", "it"].forEach((locale) => {
  const filePath = path.join(dir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  content.PrivacyPolicy = privacyByLocale[locale];
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  console.log(`Updated ${locale}.json with Privacy Policy translations`);
});
