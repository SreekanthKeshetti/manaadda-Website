import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, CheckCircle2, Navigation } from "lucide-react";

// MASTER HYDERABAD 31 ADDAS DATA
const MASTER_ADDAS = [
  // 1. CENTRAL & WEST HYDERABAD
  {
    id: 1,
    name: "Jubilee Hills Check Post Adda",
    area: "Road No. 36, near Metro Station",
    region: "Central & West",
  },
  {
    id: 2,
    name: "Yousufguda Check Post Adda",
    area: "Main Road, Yousufguda Junction",
    region: "Central & West",
  },
  {
    id: 3,
    name: "Panjagutta X Roads Adda",
    area: "Near Central Mall Flyover",
    region: "Central & West",
  },
  {
    id: 4,
    name: "Ameerpet X Roads Adda",
    area: "Near Metro Station & Big Bazaar",
    region: "Central & West",
  },
  {
    id: 5,
    name: "Banjara Hills Road 12 Adda",
    area: "Road No. 12, near Minar Chaya",
    region: "Central & West",
  },
  {
    id: 6,
    name: "Tolichowki Flyover Adda",
    area: "Near Flyover & Galaxy Theatre",
    region: "Central & West",
  },
  {
    id: 7,
    name: "Mehdipatnam Bus Stop Adda",
    area: "Rethibowli Signal & Bus Stand",
    region: "Central & West",
  },

  // 2. CYBERABAD / IT CORRIDOR & NORTH-WEST
  {
    id: 8,
    name: "Gachibowli X Roads Adda",
    area: "Gachibowli Flyover Junction",
    region: "Cyberabad IT Corridor",
  },
  {
    id: 9,
    name: "Kondapur X Roads Adda",
    area: "Near Harsha Lines Junction",
    region: "Cyberabad IT Corridor",
  },
  {
    id: 10,
    name: "Chanda Nagar Gangaram Adda",
    area: "Main Road, near Gangaram",
    region: "Cyberabad IT Corridor",
  },
  {
    id: 11,
    name: "Lingampally Railway Junction Adda",
    area: "Station Road, Lingampally, BHEL",
    region: "Cyberabad IT Corridor",
  },
  {
    id: 12,
    name: "Miyapur X Roads Adda",
    area: "Miyapur Metro Station Junction",
    region: "Cyberabad IT Corridor",
  },
  {
    id: 13,
    name: "Kukatpally Y-Junction Adda",
    area: "Y-Junction, Kukatpally Bus Stop",
    region: "Cyberabad IT Corridor",
  },
  {
    id: 14,
    name: "Balanagar X Roads Adda",
    area: "Balanagar Industrial Area Junction",
    region: "Cyberabad IT Corridor",
  },

  // 3. SECUNDERABAD & NORTH HYDERABAD
  {
    id: 15,
    name: "Secunderabad Station Kummarguda Adda",
    area: "Near Gandhi Statue & Station Road",
    region: "Secunderabad Zone",
  },
  {
    id: 16,
    name: "Tarnaka X Roads Adda",
    area: "Tarnaka Metro Station Junction",
    region: "Secunderabad Zone",
  },
  {
    id: 17,
    name: "ECIL X Roads Adda",
    area: "ECIL Junction, Moula Ali Road",
    region: "Secunderabad Zone",
  },
  {
    id: 18,
    name: "Alwal X Roads Adda",
    area: "Main Road, Old Alwal",
    region: "Secunderabad Zone",
  },
  {
    id: 19,
    name: "Suchitra Junction Adda",
    area: "Kompally Highway Junction",
    region: "Secunderabad Zone",
  },
  {
    id: 20,
    name: "Chintal X Roads Adda",
    area: "Quthbullapur Road, Chintal",
    region: "Secunderabad Zone",
  },

  // 4. EAST & SOUTH-EAST HYDERABAD
  {
    id: 21,
    name: "LB Nagar Junction Adda",
    area: "LB Nagar Flyover Junction",
    region: "East & South-East",
  },
  {
    id: 22,
    name: "Dilsukhnagar Bus Stand Adda",
    area: "Near Main Bus Depot",
    region: "East & South-East",
  },
  {
    id: 23,
    name: "Uppal Ring Road Adda",
    area: "Uppal Metro Station & Ring Road",
    region: "East & South-East",
  },
  {
    id: 24,
    name: "Nagole X Roads Adda",
    area: "Nagole Metro Station Junction",
    region: "East & South-East",
  },
  {
    id: 25,
    name: "Ramanthapur Junction Adda",
    area: "Ramanthapur Main Road",
    region: "East & South-East",
  },
  {
    id: 26,
    name: "Hastinapuram Adda",
    area: "Main Road Junction",
    region: "East & South-East",
  },

  // 5. OLD CITY & SOUTH HYDERABAD
  {
    id: 27,
    name: "Koti Labour Adda",
    area: "Koti Women's College Road",
    region: "Old City & South",
  },
  {
    id: 28,
    name: "Charminar Gulzar Houz Adda",
    area: "Near Gulzar Houz, Old City",
    region: "Old City & South",
  },
  {
    id: 29,
    name: "Nampally Station Adda",
    area: "Opposite Nampally Railway Station",
    region: "Old City & South",
  },
  {
    id: 30,
    name: "Santosh Nagar Adda",
    area: "Main Junction, Santosh Nagar",
    region: "Old City & South",
  },
  {
    id: 31,
    name: "Attapur Pillar 120 Adda",
    area: "PVNR Expressway Pillar 120",
    region: "Old City & South",
  },
];

const REGIONAL_ZONES = [
  { id: "ALL", label: "All 31 Addas" },
  { id: "Central & West", label: "Central & West" },
  { id: "Cyberabad IT Corridor", label: "Cyberabad IT Corridor" },
  { id: "Secunderabad Zone", label: "Secunderabad Zone" },
  { id: "East & South-East", label: "East & South-East" },
  { id: "Old City & South", label: "Old City & South" },
];

export const AddaExplorer = () => {
  const [activeZone, setActiveZone] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAddas = useMemo(() => {
    return MASTER_ADDAS.filter((adda) => {
      const matchesZone = activeZone === "ALL" || adda.region === activeZone;
      const matchesSearch =
        adda.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        adda.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        adda.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesZone && matchesSearch;
    });
  }, [activeZone, searchQuery]);

  return (
    <section id="addas" className="py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">
            HYDERABAD MASTER NETWORK
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
            31 Active Addas Covered.
          </h3>
          <p className="text-base sm:text-lg text-warm-gray font-medium">
            Extensive physical coverage across central Hyderabad, Secunderabad,
            Cyberabad, and industrial corridors.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Smart Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray"
              size={18}
            />
            <input
              type="text"
              placeholder="Search Adda, area, or landmark (e.g. Jubilee, Metro, ECIL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-warm-border focus:border-brand-orange rounded-2xl pl-11 pr-4 py-3.5 text-xs font-bold text-warm-dark outline-none transition-all shadow-sm"
            />
          </div>

          {/* Region Filter Pills */}
          <div className="flex bg-white p-1.5 rounded-2xl border border-warm-border shadow-sm overflow-x-auto hide-scrollbar gap-1.5">
            {REGIONAL_ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                  activeZone === zone.id
                    ? "bg-warm-dark text-white shadow-md scale-[1.02]"
                    : "text-warm-gray hover:text-warm-dark hover:bg-warm-bg2"
                }`}
              >
                {zone.label}
              </button>
            ))}
          </div>
        </div>

        {/* Adda Cards Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[520px] overflow-y-auto p-1 pr-2">
          {filteredAddas.length === 0 ? (
            <div className="col-span-full text-center py-16 text-warm-gray font-bold text-sm bg-white border border-warm-border rounded-3xl">
              No Adda found matching "{searchQuery}".
            </div>
          ) : (
            filteredAddas.map((adda) => (
              <motion.div
                key={adda.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-white border border-warm-border shadow-sm flex items-center justify-between gap-3 hover:border-brand-orange/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 font-bold group-hover:scale-110 transition-transform">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-xs text-warm-dark truncate">
                      {adda.name}
                    </h4>
                    <p className="text-[10px] text-warm-gray font-semibold truncate mt-0.5">
                      {adda.area}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-lg shrink-0 flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-emerald-600" /> ACTIVE
                </span>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
