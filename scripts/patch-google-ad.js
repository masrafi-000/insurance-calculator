const fs = require("fs");
const path = require("path");

const locales = ["en", "fr", "de", "it"];
const dir = path.join(__dirname, "..", "messages");

const googleAdTranslations = {
  en: {
    advertisement: "Advertisement",
    adBadge: "Ad",
    adCta: "Click here to discover our exclusive partner offers and save on your insurance today.",
    adFallback: "Custom Advertisement"
  },
  fr: {
    advertisement: "Publicité",
    adBadge: "Pub",
    adCta: "Cliquez ici pour découvrir nos offres partenaires exclusives et économiser sur votre assurance aujourd'hui.",
    adFallback: "Publicité Personnalisée"
  },
  de: {
    advertisement: "Werbung",
    adBadge: "Anz.",
    adCta: "Klicken Sie hier, um unsere exklusiven Partnerangebote zu entdecken und heute bei Ihrer Versicherung zu sparen.",
    adFallback: "Benutzerdefinierte Werbung"
  },
  it: {
    advertisement: "Pubblicità",
    adBadge: "Ann.",
    adCta: "Clicca qui per scoprire le nostre offerte partner esclusive e risparmiare sulla tua assicurazione oggi.",
    adFallback: "Pubblicità Personalizzata"
  }
};

locales.forEach((locale) => {
  const filePath = path.join(dir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  if (!content.UI) content.UI = {};
  content.UI.GoogleAd = googleAdTranslations[locale];
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  console.log(`Updated ${locale}.json`);
});
