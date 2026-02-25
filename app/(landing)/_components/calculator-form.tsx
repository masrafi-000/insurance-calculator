import React from "react";
import Image from "next/image";
import InsuranceClaculator from "./insurance-claculator";

// Types for our data structures
interface AdContent {
  title: string;
  desc?: string;
  price?: string;
  img: string;
}

interface CompanyContent {
  name: string;
  rating: string;
  quote: string;
  color: string;
  logo: string;
}

const FormSection: React.FC = () => {
  // Realistic Sidebar Data
  const sidebarAds: AdContent[] = [
    {
      title: "Term Life Insurance",
      price: "Starts $10/mo",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    },
    {
      title: "Pet Health Plans",
      price: "Top Rated 2026",
      img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    },
    {
      title: "Travel Protection",
      price: "Global Coverage",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2",
    },
    {
      title: "Business Liability",
      price: "Instant Quotes",
      img: "https://images.unsplash.com/photo-1454165833767-027ff33027ef",
    },
    {
      title: "Renters Insurance",
      price: "$5/mo Special",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
    {
      title: "Boat & Marine",
      price: "Bundle & Save",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    },
    {
      title: "Cyber Liability",
      price: "For Small Biz",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
      title: "Classic Car Cover",
      price: "Agreed Value",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    },
  ];

  const partners: CompanyContent[] = [
    {
      name: "State Farm",
      rating: "4.8/5",
      quote: "Like a good neighbor, State Farm is there.",
      color: "border-red-600",
      logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=100",
    },
    {
      name: "Progressive",
      rating: "4.7/5",
      quote: "Find the best rate with our Name Your Price tool.",
      color: "border-blue-700",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=100",
    },
    {
      name: "Geico",
      rating: "4.9/5",
      quote: "15 minutes could save you 15% or more.",
      color: "border-blue-400",
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=100",
    },
  ];

  return (
    <section className="bg-[#f4f7fa] min-h-screen py-10 px-4">
      <div className="max-w-[1500px] mx-auto">
        {/* TOP SECTION: 2 Advertisement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <TopAdCard
            title="Premium Auto Savings"
            desc="Drivers who switch to our partners save an average of $744/year."
            img="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
          />
          <TopAdCard
            title="Homeowners Special"
            desc="Exclusive 2026 rates for new homeowners. Check eligibility."
            img="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* LEFT SIDEBAR: 8 Advertisement Cards */}
          <aside className="xl:w-[320px] flex flex-col gap-4 shrink-0">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">
              Sponsored Picks
            </h3>
            {sidebarAds.map((ad, idx) => (
              <SideAdCard key={idx} {...ad} />
            ))}
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-grow">
            <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <header className="mb-10 border-b border-gray-100 pb-8 text-center md:text-left">
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    Insurance Estimation Tool
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Get accurate, real-time quotes based on current 2026 market
                    data.
                  </p>
                </header>

                <div className="">
                  <InsuranceClaculator />
                </div>

                {/* BOTTOM SECTION: Company Cards with Images */}
                <div className="mt-16">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Partner Carriers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {partners.map((company, idx) => (
                      <CompanyCard key={idx} {...company} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Optimized Sub-Components --- */

const TopAdCard: React.FC<AdContent> = ({ title, desc, img }) => (
  <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
    <Image
      src={`${img}?auto=format&fit=crop&q=80&w=800`}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-8">
      <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">
        Featured Ad
      </span>
      <h4 className="text-white text-xl font-bold">{title}</h4>
      <p className="text-gray-300 text-sm max-w-[280px] mt-1">{desc}</p>
    </div>
  </div>
);

const SideAdCard: React.FC<AdContent> = ({ title, price, img }) => (
  <div className="bg-white p-2 rounded-xl border border-gray-100 flex items-center gap-3 hover:border-blue-400 transition-all cursor-pointer shadow-sm group">
    <div className="relative w-14 h-14 shrink-0">
      <Image
        src={`${img}?auto=format&fit=crop&q=60&w=200`}
        alt={title}
        fill
        className="rounded-lg object-cover"
      />
    </div>
    <div className="overflow-hidden">
      <h5 className="text-[13px] font-bold text-gray-800 group-hover:text-blue-600 truncate transition-colors">
        {title}
      </h5>
      <p className="text-[11px] text-gray-500">{price}</p>
      <span className="text-[8px] text-blue-500 font-bold uppercase">
        Sponsored
      </span>
    </div>
  </div>
);

const CompanyCard: React.FC<CompanyContent> = ({
  name,
  rating,
  quote,
  color,
  logo,
}) => (
  <div
    className={`p-6 bg-slate-50 rounded-2xl border-t-4 ${color} shadow-sm transition-transform hover:-translate-y-1`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-200 bg-white">
        <Image src={logo} alt={name} fill className="object-contain p-1" />
      </div>
      <div className="text-right">
        <p className="text-xs font-bold text-gray-900">{name}</p>
        <p className="text-[10px] text-blue-600 font-bold">{rating} ⭐</p>
      </div>
    </div>
    <p className="text-xs text-gray-500 italic leading-relaxed">{quote}</p>
    <button className="w-full mt-4 py-2 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-700 hover:bg-gray-100 transition-colors">
      View Policy Details
    </button>
  </div>
);

export default FormSection;