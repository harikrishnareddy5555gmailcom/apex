export interface ProductVariant {
  id: string;
  name: string;
  volume: string;
  tagline: string;
  description: string;
  image: string;
  labelArtwork: string;
  bestFor: string;
  dimensionsNote: string;
  highlights: string[];
}

export interface BrandConfig {
  brandName: string;
  brandTagline: string;
  subTagline: string;
  officialDomain: string;
  canonicalUrl: string;
  fssaiLicenseNumber: string;
  manufacturer: {
    companyName: string;
    address: string;
    fullAddressString: string;
    countryOfOrigin: string;
  };
  contact: {
    primaryPhone: string;
    displayPhone: string;
    whatsappNumber: string;
    primaryEmail: string;
    supportEmail: string;
  };
  commitment: {
    percentage: string;
    recipient: string;
    primaryMessage: string;
    supportingMessage: string;
    transparencyNote: string;
  };
  waterTreatmentStages: {
    step: number;
    title: string;
    shortDesc: string;
    detailedDesc: string;
    icon: string;
  }[];
  minerals: {
    name: string;
    benefit: string;
  }[];
  storageInstructions: string[];
  productVariants: ProductVariant[];
  ownerVerificationChecklist: {
    category: string;
    item: string;
    status: 'Verified from Label' | 'Pending Owner Confirmation';
    notes: string;
  }[];
}

export const brandConfig: BrandConfig = {
  brandName: "APEX",
  brandTagline: "Pure Water, Stronger India.",
  subTagline: "Perfect Quality in Every Drop.",
  officialDomain: "apexpremiumwater.com",
  canonicalUrl: "https://apexpremiumwater.com/",
  fssaiLicenseNumber: "2362603301661",
  
  manufacturer: {
    companyName: "apecstransit",
    address: "# 2-108, Uppal, Medchal Malkajgiri, Hyderabad, Telangana - 500098",
    fullAddressString: "# 2-108, Uppal, Medchal Malkajgiri, Hyderabad, Telangana, PIN: 500098, India",
    countryOfOrigin: "A Product of India"
  },

  contact: {
    primaryPhone: "+919550457896",
    displayPhone: "+91 95504 57896",
    whatsappNumber: "919550457896",
    primaryEmail: "nani@apexpremiumwater.com",
    supportEmail: "nani@apexpremiumwater.com"
  },

  commitment: {
    percentage: "5%",
    recipient: "Indian Army",
    primaryMessage: "5% of our income is dedicated to supporting the Indian Army.",
    supportingMessage: "Your choice helps our brave soldiers. Drink Pure. Support a Stronger India.",
    transparencyNote: "As declared on our official bottle packaging, APEX dedicates 5% of its operating income towards supporting Indian Army welfare initiatives."
  },

  waterTreatmentStages: [
    {
      step: 1,
      title: "Sand Filtration",
      shortDesc: "Initial physical filtration",
      detailedDesc: "Removes particulate matter, suspended solids, and initial turbidity to ensure clear inlet feed water.",
      icon: "Layers"
    },
    {
      step: 2,
      title: "Activated Carbon Filtration",
      shortDesc: "Adsorption & deodorization",
      detailedDesc: "High-grade activated carbon adsorbs residual chlorine, organic impurities, and odour-causing compounds, refining taste.",
      icon: "Filter"
    },
    {
      step: 3,
      title: "Ultra Filtration (UF)",
      shortDesc: "Micro-porous membrane barrier",
      detailedDesc: "Hollow-fiber membrane technology that screens out microscopic colloids and macromolecules without compromising essential water characteristics.",
      icon: "ShieldAlert"
    },
    {
      step: 4,
      title: "Reverse Osmosis (RO)",
      shortDesc: "High-pressure molecular purification",
      detailedDesc: "Semi-permeable membrane purification balancing total dissolved solids (TDS) and eliminating dissolved chemical contaminants.",
      icon: "Activity"
    },
    {
      step: 5,
      title: "Ozonation",
      shortDesc: "Microbial sterilization & freshness",
      detailedDesc: "Active oxygen disinfection providing clean antimicrobial protection and oxygen-enriched clarity with zero chemical residues.",
      icon: "Sparkles"
    }
  ],

  minerals: [
    {
      name: "Calcium (Ca)",
      benefit: "Fortifies bone density and structural cellular vitality."
    },
    {
      name: "Magnesium (Mg)",
      benefit: "Aids electrolyte replenishment and smooth cardiovascular hydration."
    }
  ],

  storageInstructions: [
    "Serve chilled for optimal refreshment.",
    "Avoid direct sunlight.",
    "Store in a cool, clean, and hygienic place.",
    "Do not accept the product if the seal is broken or tampered with.",
    "Best before 6 months from the date of packing.",
    "Crush the bottle after use to assist recycling."
  ],

  productVariants: [
    {
      id: "500ml",
      name: "APEX 500ml Compact",
      volume: "500 ml",
      tagline: "Active Hydration On-the-Go",
      description: "Ergonomically contoured for travel, corporate conferences, fitness routines, and daily commuting. Sealed with a tamper-evident cap.",
      image: "/assets/apex_bottle_500ml.jpg",
      labelArtwork: "/assets/APEX_Label_500ml_High_Quality.pdf",
      bestFor: "Travel, meetings, gyms, personal daily commute",
      dimensionsNote: "Convenient pocket & cup-holder friendly form factor",
      highlights: [
        "Infused with Calcium & Magnesium",
        "5-Stage Purification (RO + Ozonated)",
        "Tamper-Evident Safety Cap",
        "100% Recyclable Food-Grade PET",
        "Best before 6 months"
      ]
    },
    {
      id: "1liter",
      name: "APEX 1 Liter Standard",
      volume: "1 Liter",
      tagline: "Everyday Table & Family Hydration",
      description: "The quintessential premium hydration bottle designed for family dining, hospitality tables, workstations, and enduring daily vitality.",
      image: "/assets/apex_bottle_1liter.jpg",
      labelArtwork: "/assets/APEX_Label_1_Liter_High_Quality.pdf",
      bestFor: "Dining tables, executive offices, hospitality, households",
      dimensionsNote: "Generous capacity for sustained hydration",
      highlights: [
        "Optimal Mineral Balance (Ca & Mg)",
        "5-Stage Multi-Barrier Purification",
        "Rigid ergonomic grip profile",
        "Eco-friendly crushable design",
        "Strict batch tracking on neck/cap"
      ]
    }
  ],

  ownerVerificationChecklist: [
    {
      category: "Licensing & Regulatory",
      item: "FSSAI License Registration",
      status: "Verified from Label",
      notes: "License No. 2362603301661 is printed on the label and verified on physical artwork."
    },
    {
      category: "Licensing & Regulatory",
      item: "BIS / ISI Certification Number (IS 14543)",
      status: "Pending Owner Confirmation",
      notes: "The ISI mark and CM/L number are standard for packaged drinking water in India. Confirm if ISI CM/L code should be listed on the web portal."
    },
    {
      category: "Brand Social Commitment",
      item: "5% Indian Army Income Contribution",
      status: "Verified from Label",
      notes: "Quoted verbatim from official bottle label. Ensure owner provides designated foundation or welfare fund name (e.g. Armed Forces Flag Day Fund or Army Central Welfare Fund) if public receipt links are needed."
    },
    {
      category: "Contact & Distribution",
      item: "Official Contact Number & Email",
      status: "Verified from Label",
      notes: "+91 95504 57896 and nani@apexpremiumwater.com verified from bottle label artwork."
    },
    {
      category: "Manufacturing Address",
      item: "apecstransit Uppal Facility",
      status: "Verified from Label",
      notes: "# 2-108, Uppal, Medchal Malkajgiri, Hyderabad, Telangana - 500098 verified from label artwork."
    },
    {
      category: "Commercial Pricing & Minimum Order Quantity",
      item: "Distributor Wholesale Rates & MOQ",
      status: "Pending Owner Confirmation",
      notes: "Wholesale crates, carton sizes (e.g. 24x500ml, 12x1L), and distributor margin terms can be added once approved by brand management."
    }
  ]
};
