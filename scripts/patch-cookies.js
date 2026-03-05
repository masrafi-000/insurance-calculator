// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const dir = path.join(__dirname, "..", "messages");

const cookieByLocale = {
  en: {
    badge: "Cookie Usage",
    title: "Cookie Policy",
    effectiveDate: "Effective Date",
    sections: {
      whatAreCookies: {
        heading: "1. What Are Cookies?",
        body: "Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information to the site owners."
      },
      howWeUse: {
        heading: "2. How We Use Cookies",
        intro: "At {company}, we use cookies primarily to ensure our proprietary calculator functions smoothly and securely. Here is a breakdown of the types of cookies we utilize:",
        types: [
          {
            name: "Essential Cookies (Strictly Necessary)",
            body: "These cookies are required for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling out the calculation forms."
          },
          {
            name: "Performance & Analytics Cookies",
            body: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular. All information these cookies collect is aggregated and therefore completely anonymous."
          },
          {
            name: "Functional Cookies",
            body: "These cookies enable the website to provide enhanced functionality and personalization, such as remembering your selected Canton (region) so you do not have to re-enter it if you revisit the calculator."
          }
        ]
      },
      thirdParty: {
        heading: "3. Third-Party Cookies",
        body: "In some special cases, we also use cookies provided by trusted third parties. For example, our site utilizes Google Analytics to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site."
      },
      managing: {
        heading: "4. Managing Preferences",
        body: "You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this website, usually disabling certain interactive features of the calculator."
      },
      contact: {
        heading: "5. Contact Us",
        body: "If you have any questions regarding our Cookie Policy, please contact our data team at"
      }
    }
  },
  fr: {
    badge: "Utilisation des Cookies",
    title: "Politique en matière de Cookies",
    effectiveDate: "Date d'entrée en vigueur",
    sections: {
      whatAreCookies: {
        heading: "1. Que sont les Cookies ?",
        body: "Les cookies sont de petits fichiers texte placés sur votre ordinateur ou appareil mobile par les sites web que vous visitez. Ils sont largement utilisés pour faire fonctionner les sites web, ou les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport aux propriétaires du site."
      },
      howWeUse: {
        heading: "2. Comment Nous Utilisons les Cookies",
        intro: "Chez {company}, nous utilisons les cookies principalement pour assurer que notre calculateur propriétaire fonctionne de manière fluide et sécurisée. Voici une description des types de cookies que nous utilisons :",
        types: [
          {
            name: "Cookies Essentiels (Strictement Nécessaires)",
            body: "Ces cookies sont nécessaires au bon fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes. Ils sont généralement uniquement définis en réponse à des actions effectuées par vous, comme la définition de vos préférences de confidentialité, la connexion ou le remplissage des formulaires de calcul."
          },
          {
            name: "Cookies de Performance & Analytiques",
            body: "Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires. Toutes les informations collectées par ces cookies sont agrégées et donc totalement anonymes."
          },
          {
            name: "Cookies Fonctionnels",
            body: "Ces cookies permettent au site de fournir des fonctionnalités améliorées et une personnalisation, comme la mémorisation de votre Canton (région) sélectionné afin que vous n'ayez pas à le saisir à nouveau si vous revenez sur le calculateur."
          }
        ]
      },
      thirdParty: {
        heading: "3. Cookies Tiers",
        body: "Dans certains cas particuliers, nous utilisons également des cookies fournis par des tiers de confiance. Par exemple, notre site utilise Google Analytics pour nous aider à comprendre comment vous utilisez le site et les moyens d'améliorer votre expérience. Ces cookies peuvent suivre des éléments tels que le temps que vous passez sur le site."
      },
      managing: {
        heading: "4. Gestion des Préférences",
        body: "Vous pouvez empêcher la définition de cookies en ajustant les paramètres de votre navigateur. Sachez que la désactivation des cookies affectera les fonctionnalités de ce site, désactivant généralement certaines fonctionnalités interactives du calculateur."
      },
      contact: {
        heading: "5. Contactez-nous",
        body: "Si vous avez des questions concernant notre Politique en matière de Cookies, veuillez contacter notre équipe de données à"
      }
    }
  },
  de: {
    badge: "Cookie-Verwendung",
    title: "Cookie-Richtlinie",
    effectiveDate: "Gültigkeitsdatum",
    sections: {
      whatAreCookies: {
        heading: "1. Was sind Cookies?",
        body: "Cookies sind kleine Textdateien, die von Websites, die Sie besuchen, auf Ihrem Computer oder Mobilgerät platziert werden. Sie werden häufig verwendet, damit Websites funktionieren oder effizienter funktionieren, sowie um den Websitebetreibern Berichtsinformationen zu liefern."
      },
      howWeUse: {
        heading: "2. Wie Wir Cookies Verwenden",
        intro: "Bei {company} verwenden wir Cookies hauptsächlich, um sicherzustellen, dass unser proprietärer Rechner reibungslos und sicher funktioniert. Hier ist eine Übersicht der von uns verwendeten Cookie-Typen:",
        types: [
          {
            name: "Essentielle Cookies (Unbedingt Erforderlich)",
            body: "Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, wie das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Berechnungsformularen."
          },
          {
            name: "Leistungs- & Analyse-Cookies",
            body: "Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am beliebtesten und am wenigsten beliebt sind. Alle Informationen, die diese Cookies sammeln, werden aggregiert und sind daher vollständig anonym."
          },
          {
            name: "Funktionale Cookies",
            body: "Diese Cookies ermöglichen es der Website, erweiterte Funktionen und Personalisierung bereitzustellen, wie etwa das Speichern Ihres ausgewählten Kantons (Region), damit Sie ihn nicht erneut eingeben müssen, wenn Sie den Rechner erneut besuchen."
          }
        ]
      },
      thirdParty: {
        heading: "3. Drittanbieter-Cookies",
        body: "In einigen Sonderfällen verwenden wir auch Cookies, die von vertrauenswürdigen Drittanbietern bereitgestellt werden. Zum Beispiel nutzt unsere Website Google Analytics, um uns zu helfen zu verstehen, wie Sie die Website nutzen und wie wir Ihre Erfahrung verbessern können. Diese Cookies können Dinge verfolgen, wie z.B. wie lange Sie auf der Website verbringen."
      },
      managing: {
        heading: "4. Präferenzen Verwalten",
        body: "Sie können das Setzen von Cookies verhindern, indem Sie die Einstellungen Ihres Browsers anpassen. Beachten Sie, dass die Deaktivierung von Cookies die Funktionalität dieser Website beeinträchtigt und in der Regel bestimmte interaktive Funktionen des Rechners deaktiviert."
      },
      contact: {
        heading: "5. Kontaktieren Sie Uns",
        body: "Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, wenden Sie sich bitte an unser Datenteam unter"
      }
    }
  },
  it: {
    badge: "Utilizzo dei Cookie",
    title: "Politica sui Cookie",
    effectiveDate: "Data di entrata in vigore",
    sections: {
      whatAreCookies: {
        heading: "1. Cosa sono i Cookie?",
        body: "I cookie sono piccoli file di testo che vengono collocati sul tuo computer o dispositivo mobile dai siti web che visiti. Sono ampiamente utilizzati per far funzionare i siti web, o farli funzionare in modo più efficiente, nonché per fornire informazioni di reportistica ai proprietari del sito."
      },
      howWeUse: {
        heading: "2. Come Utilizziamo i Cookie",
        intro: "Da {company}, utilizziamo i cookie principalmente per garantire che il nostro calcolatore proprietario funzioni in modo fluido e sicuro. Ecco una panoramica dei tipi di cookie che utilizziamo:",
        types: [
          {
            name: "Cookie Essenziali (Strettamente Necessari)",
            body: "Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni eseguite da te, come l'impostazione delle tue preferenze sulla privacy, l'accesso o la compilazione dei moduli di calcolo."
          },
          {
            name: "Cookie di Prestazione e Analisi",
            body: "Questi cookie ci consentono di contare le visite e le fonti di traffico per misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono le più e le meno popolari. Tutte le informazioni che questi cookie raccolgono sono aggregate e quindi completamente anonime."
          },
          {
            name: "Cookie Funzionali",
            body: "Questi cookie consentono al sito di fornire funzionalità migliorate e personalizzazione, come ricordare il tuo Cantone (regione) selezionato in modo che tu non debba reinserirlo se visiti di nuovo il calcolatore."
          }
        ]
      },
      thirdParty: {
        heading: "3. Cookie di Terze Parti",
        body: "In alcuni casi speciali, utilizziamo anche cookie forniti da terze parti affidabili. Ad esempio, il nostro sito utilizza Google Analytics per aiutarci a capire come utilizzi il sito e i modi in cui possiamo migliorare la tua esperienza. Questi cookie possono tracciare cose come quanto tempo trascorri sul sito."
      },
      managing: {
        heading: "4. Gestione delle Preferenze",
        body: "Puoi impedire l'impostazione dei cookie regolando le impostazioni del tuo browser. Tieni presente che la disabilitazione dei cookie influirà sulla funzionalità di questo sito, disabilitando di solito alcune funzionalità interattive del calcolatore."
      },
      contact: {
        heading: "5. Contattaci",
        body: "Se hai domande riguardanti la nostra Politica sui Cookie, contatta il nostro team di dati a"
      }
    }
  }
};

["en", "fr", "de", "it"].forEach((locale) => {
  const filePath = path.join(dir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  content.CookiePolicy = cookieByLocale[locale];
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  console.log(`Updated ${locale}.json with Cookie Policy translations`);
});
