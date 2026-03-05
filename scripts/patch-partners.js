const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "messages");

const partnersByLocale = {
  en: {
    partners: [
      {
        name: "State Farm",
        rating: "4.8/5",
        quote: "Like a good neighbor, State Farm is there.",
        color: "border-red-600",
        logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=100"
      },
      {
        name: "Progressive",
        rating: "4.7/5",
        quote: "Find the best rate with our Name Your Price tool.",
        color: "border-blue-700",
        logo: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=100"
      },
      {
        name: "Geico",
        rating: "4.9/5",
        quote: "15 minutes could save you 15% or more.",
        color: "border-blue-400",
        logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=100"
      }
    ]
  },
  fr: {
    partners: [
      {
        name: "State Farm",
        rating: "4.8/5",
        quote: "Comme un bon voisin, State Farm est là.",
        color: "border-red-600",
        logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=100"
      },
      {
        name: "Progressive",
        rating: "4.7/5",
        quote: "Trouvez le meilleur tarif avec notre outil Nommez Votre Prix.",
        color: "border-blue-700",
        logo: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=100"
      },
      {
        name: "Geico",
        rating: "4.9/5",
        quote: "15 minutes peuvent vous faire économiser 15% ou plus.",
        color: "border-blue-400",
        logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=100"
      }
    ]
  },
  de: {
    partners: [
      {
        name: "State Farm",
        rating: "4,8/5",
        quote: "Wie ein guter Nachbar, ist State Farm für Sie da.",
        color: "border-red-600",
        logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=100"
      },
      {
        name: "Progressive",
        rating: "4,7/5",
        quote: "Finden Sie den besten Tarif mit unserem Name-Your-Price-Tool.",
        color: "border-blue-700",
        logo: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=100"
      },
      {
        name: "Geico",
        rating: "4,9/5",
        quote: "15 Minuten könnten Ihnen 15% oder mehr sparen.",
        color: "border-blue-400",
        logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=100"
      }
    ]
  },
  it: {
    partners: [
      {
        name: "State Farm",
        rating: "4,8/5",
        quote: "Come un buon vicino, State Farm è lì.",
        color: "border-red-600",
        logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=100"
      },
      {
        name: "Progressive",
        rating: "4,7/5",
        quote: "Trova la tariffa migliore con il nostro strumento Nome Il Tuo Prezzo.",
        color: "border-blue-700",
        logo: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=100"
      },
      {
        name: "Geico",
        rating: "4,9/5",
        quote: "15 minuti potrebbero farti risparmiare il 15% o più.",
        color: "border-blue-400",
        logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=100"
      }
    ]
  }
};

["en", "fr", "de", "it"].forEach((locale) => {
  const filePath = path.join(dir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  if (!content.Calculator) content.Calculator = {};
  if (!content.Calculator.Section) content.Calculator.Section = {};
  content.Calculator.Section.partners = partnersByLocale[locale].partners;
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  console.log(`Updated ${locale}.json with partner translations`);
});
