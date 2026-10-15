/* =================================================================
   ALL YOUR CONTENT LIVES HERE.
   To add an item, copy an existing { ... } block, paste it after a
   comma, and change the text. Save, and the page updates.
   ================================================================= */

const PROFILE = {
  name: "Aszad Hossain Akib",
  initials: "AA",
  tagline: "Food & Materials Researcher",
  roles: ["Food Engineer", "Materials Researcher"],
  university: "CVASU (M.Sc. Computational Food Engineering)",
  email: "aszad.akib@gmail.com",
  phone: "+8801841870123",          // set to "" to hide your phone number
  location: "South Khulshi, Chattogram, Bangladesh",
  photo: "assets/profile.jpg",
  cv: "assets/Aszad_Hossain_Akib_CV.pdf",

  // Paste your profile URLs. Empty ones are hidden automatically.
  links: {
    linkedin: "https://www.linkedin.com/in/aszad-hossain-akib-90036a202",
    github: "https://github.com/aszad-akib",
    webofscience: "https://www.webofscience.com/wos/author/record/NRX-8824-2025",
    researchgate: "https://www.researchgate.net/profile/Aszad-Hossain-Akib",
    orcid: "https://orcid.org/0009-0007-4941-8888",
    scholar: "https://scholar.google.com/citations?user=2CVQ1zQAAAAJ&hl=en"
  }
};

/* ---------------- HOME ----------------
   The spec sheet at the top of the home page. Each row is [label, value]. */
const HOME = {
  label: "Researcher profile · Food & materials science",
  nameLines: ["Aszad", "Hossain Akib"],
  spec: [
    ["Role", "Food & Materials Researcher: thin films, sensors and food science"],
    ["Training", "M.Sc. Computational Food Engineering, CVASU · CGPA 3.83 · Jul 2026 (expected)"],
    ["Focus", "Metal-doped TiO₂ thin films · Gas sensing · Antibacterial surfaces · Water purification"],
    ["Funding", "NST Fellowship 2026 · UGC Research Grant 2025"],
    ["Research at", "CVASU · ABCD Laboratory · BCSIR · BIIHR"],
    ["Location", "Chattogram, Bangladesh"]
  ],
  status: "Open to fully funded Master's & Ph.D. positions",
  photo: "assets/profile-ifst.jpg",
  photoAlt: "Aszad Hossain Akib outside the Institute of Food Science & Technology (IFST)"
};

/* ---------------- RESEARCH ---------------- */
const RESEARCH = {
  manuscripts: [
    {
      title: "Synthesis of metal-doped TiO₂ nanostructured thin film for glucose and gas sensing applications",
      authors: "<b>Akib AH</b>, Saha I.",
      tag: "IN PREPARATION",
      area: "Materials Science · Sensors"
    },
    {
      title: "Parthenolide: A Review of Sources, Pharmacology, Pharmacokinetics and Toxicity",
      authors: "<b>Akib AH</b>, Junaid M.",
      tag: "IN PREPARATION",
      area: "Review · Drug Discovery"
    }
  ],
  grants: [
    { title: "NST Fellowship", tag: "FELLOWSHIP", org: "Ministry of Science and Technology, Bangladesh · 2026",
      prize: "Research grant: $450", text: "Awarded for a research proposal on sustainable gas sensors." },
    { title: "UGC Research Grant", tag: "RESEARCH GRANT", org: "University Grants Commission, Bangladesh · 2025",
      prize: "Research grant: $350", text: "Awarded for a research proposal on thin-film materials for antibacterial surfaces." }
  ]
};

/* ---------------- HONORS & AWARDS ---------------- */
const HONORS = {
  featured: {
    badgeTitle: "NST Fellowship",
    badgeSub: "MINISTRY OF S&T",
    logo: "assets/most-bangladesh-seal.png", logoAlt: "Seal of the Government of Bangladesh, Ministry of Science and Technology",
    date: "MARCH 2026",
    statLabel: "RESEARCH GRANT",
    statValue: "$450",
    org: "MINISTRY OF SCIENCE AND TECHNOLOGY",
    tags: ["FELLOWSHIP", "NATIONAL", "RESEARCH GRANT", "GAS SENSORS"],
    title: "National Science and Technology (NST) Fellowship",
    meta: ["Government of Bangladesh", "Sustainable Gas Sensors"],
    text: "Offered the prestigious NST Fellowship by the Ministry of Science and Technology for a research proposal on sustainable gas sensors.",
    highlights: [
      "Awarded by the Ministry of Science and Technology, Bangladesh",
      "Research grant of $450 for graduate research",
      "Proposal topic: sustainable gas sensors"
    ]
  },
  /* Each award is shown in the same layout as the featured fellowship:
     short  = name on the left panel · orgShort = small caps under it · mini = dark chip before the org line
     statLabel/statValue = the box on the left · labels = teal tags · meta = two icon lines under the title
     logo (round) or logoWide (rectangle) or photo = the picture on the left */
  awards: [
    { title: "University Grants Commission (UGC) Research Grant", short: "UGC Research Grant", orgShort: "UGC BANGLADESH",
      mini: "UGC", org: "University Grants Commission of Bangladesh", date: "March 2025", icon: "award",
      logo: "assets/logo-ugc-bangladesh.png", logoAlt: "University Grants Commission of Bangladesh logo",
      statLabel: "RESEARCH GRANT", statValue: "$350",
      labels: ["RESEARCH GRANT", "NATIONAL", "THIN FILMS", "ANTIBACTERIAL SURFACES"],
      meta: ["Government of Bangladesh", "Thin-film antibacterial surfaces"],
      text: "Awarded by the University Grants Commission of Bangladesh for a research proposal on thin-film materials for antibacterial surfaces.",
      highlights: [
        "Awarded by the University Grants Commission of Bangladesh",
        "Research grant of $350",
        "Proposal topic: thin-film materials for antibacterial surfaces"
      ] },
    { title: "Beihang International Summer School 2026", short: "Beihang Summer School", orgShort: "BEIHANG UNIVERSITY",
      mini: "BEIHANG", org: "Beihang University, Hangzhou International Campus, China", date: "July 2026", icon: "globe",
      logo: "assets/logo-beihang.webp", logoAlt: "Beihang University seal",
      statLabel: "FUNDING", statValue: "Partial",
      labels: ["SUMMER SCHOOL", "INTERNATIONAL", "PARTIALLY FUNDED", "ATTENDED IN PERSON"],
      meta: ["Hangzhou International Campus, China", "Nature-Inspired Materials and Chemistry"],
      text: "Offered free registration, accommodation and meals, plus partial travel expense coverage, to attend the Nature-Inspired Materials and Chemistry program in person at the Hangzhou International Campus.",
      highlights: [
        "Free registration, accommodation and meals",
        "Partial travel expense coverage",
        "Attended in person, 13 – 27 July 2026"
      ],
      gallery: [
        { src: "assets/beihang-banner-2026.jpg", caption: "At the Beihang International Summer School 2026",
          alt: "Aszad Hossain Akib in front of the Beihang International Summer School 2026 banner at the auditorium" },
        { src: "assets/beihang-lab-class-2026.jpg", caption: "Class at the State Key Laboratory of Bioinspired Interfacial Materials Science",
          alt: "Summer school participants in a lecture hall behind a Beihang University State Key Laboratory banner" },
        { src: "assets/beihang-aerospace-2026.jpg", caption: "With spacecraft and spacesuit models at an aerospace exhibition",
          alt: "Aszad Hossain Akib standing between a spacecraft model and a spacesuit" },
        { src: "assets/beihang-football-2026.jpg", caption: "Football match with fellow summer school participants",
          alt: "Summer school participants posing together on a football pitch at night" }
      ] },
    { title: "Bronze Award of Excellence, New Product Development", short: "UMT Bronze Award", orgShort: "UNIVERSITI MALAYSIA TERENGGANU",
      mini: "UMT", org: "UMT Mobility Program, Universiti Malaysia Terengganu", date: "August 2024", icon: "trophy",
      logo: "assets/logo-umt.png", logoAlt: "Universiti Malaysia Terengganu logo",
      statLabel: "AMONG 8 TEAMS", statValue: "Bronze",
      labels: ["COMPETITION", "INTERNATIONAL", "PRODUCT DEVELOPMENT", "FOOD INNOVATION"],
      meta: ["Universiti Malaysia Terengganu, Malaysia", "Product: Econuggs"],
      text: "Awarded bronze at the UMT Food Products Innovation for the product Econuggs (team Revita Ltd.), and praised on launch day for a unique waste-utilization idea.",
      highlights: [
        "Bronze among 8 teams · Award of Excellence",
        "Product Econuggs, developed by team Revita Ltd.",
        "Praised on launch day for a unique waste-utilization idea"
      ],
      gallery: [
        { src: "assets/umt-bronze-2024.jpg", caption: "Holding the Award of Excellence (Bronze) for Econuggs, FPSM, UMT",
          alt: "Aszad Hossain Akib holding the framed UMT Award of Excellence bronze certificate for Econuggs" },
        { src: "assets/umt-certificate-2024.jpg", caption: "Receiving the UMT mobility program certificate",
          alt: "Aszad Hossain Akib holding his UMT certificate with two faculty members in front of the UMT–CVASU program banner" },
        { src: "assets/umt-kaprima-dairy-2024.jpg", caption: "Visit to Kaprima Dairy Farm, a UHT goat-milk processing plant in Marang, Terengganu",
          alt: "Aszad Hossain Akib standing beside the Kaprima Dairy Farm sign" },
        { src: "assets/umt-farewell-2024.jpg", caption: "Thank-you gift at the end of the program, UMT",
          alt: "Aszad Hossain Akib receiving a thank-you gift from a UMT faculty member" },
        { src: "assets/umt-malaysia-coast-2024.jpg", caption: "On the Malaysian coast during the mobility program",
          alt: "Aszad Hossain Akib standing on a coastal cliff beside the Malaysian flag" }
      ] },
    { title: "CVASU Internship Grant", short: "Internship Grant", orgShort: "CVASU",
      mini: "CVASU", org: "Chattogram Veterinary and Animal Sciences University", date: "June 2024", icon: "award",
      logo: "assets/logo-cvasu.jpg", logoAlt: "Chattogram Veterinary and Animal Sciences University crest",
      statLabel: "GRANT", statValue: "$500",
      labels: ["GRANT", "INSTITUTIONAL", "INTERNSHIP", "INTERNATIONAL MOBILITY"],
      meta: ["Chattogram Veterinary and Animal Sciences University", "Internships & UMT externship"],
      text: "Awarded to complete all internships along with the externship at Universiti Malaysia Terengganu.",
      highlights: [
        "Awarded by Chattogram Veterinary and Animal Sciences University",
        "Grant of $500",
        "Covered all internships and the externship at Universiti Malaysia Terengganu"
      ] },
    { title: "MemrisTec Summer School 2026", short: "MemrisTec Summer School", orgShort: "ONLINE · MEMRISTEC",
      mini: "MEMRISTEC", org: "MemrisTec Summer School (Online)", date: "August 2026", icon: "sparkles",
      logo: "assets/logo-memristec.jpg", logoAlt: "MemrisTec logo", logoWide: true,
      statLabel: "FULL FEE WAIVER", statValue: "€150",
      labels: ["FEE WAIVER", "INTERNATIONAL", "ONLINE", "MEMRISTORS"],
      meta: ["MemrisTec Summer School (Online)", "Article for Leon Chua's 90th birthday"],
      text: "Granted a full fee waiver for writing an article for the 90th birthday of Leon Chua.",
      highlights: [
        "Full fee waiver worth €150 (EUR)",
        "Granted for an article written for the 90th birthday of Leon Chua",
        "Online program, August 2026"
      ] }
  ]
};

/* ---------------- EXPERIENCE ---------------- */
const EXPERIENCE = [
  {
    org: "Chattogram Veterinary and Animal Sciences University",
    place: "Dept. of Physical and Mathematical Sciences, Chattogram",
    icon: "flask",
    roles: [
      {
        title: "Research Assistant (Volunteer)",
        present: true, dates: "2025 – Present",
        points: [
          "Research Assistant to Prof. Dr. Indrajit Saha, an expert in semiconductor spintronics.",
          "Developed thin films using spray pyrolysis and spin coating to study glucose sensing and gas sensing for food spoilage.",
          "Current project: assessing the antibacterial, water-purification and gas-sensing properties of metal-doped TiO₂, ZnO and Co₃O₄."
        ]
      }
    ]
  },
  {
    org: "ABCD Laboratory, Bangladesh",
    place: "Advanced Bioinformatics, Computational Biology & Data Science Laboratory",
    icon: "cpu",
    roles: [
      {
        title: "Research Member",
        present: true, dates: "Jul 2025 – Present",
        points: [
          "Working on computational research projects under the supervision of Md. Junaid, Founder and Principal Investigator.",
          "Writing a review on parthenolide covering sources, pharmacology, pharmacokinetics and toxicity.",
          "Completed 50+ hours of training in computer-aided drug design: docking, quantum chemistry, ADMET and molecular dynamics."
        ]
      }
    ]
  },
  {
    org: "Bangladesh Council of Scientific and Industrial Research (BCSIR)",
    place: "Chattogram, Bangladesh",
    icon: "microscope",
    roles: [
      {
        title: "Research Assistant (Volunteer)",
        present: false, dates: "Oct 2025 – Jan 2026",
        points: [
          "Determined the antioxidant properties of lactic acid bacteria (LAB).",
          "Isolated bacteriophages from different samples."
        ]
      }
    ]
  },
  {
    org: "Bangladesh Institute of Innovative Health Research (BIIHR)",
    place: "Department of Health Sciences and Informatics",
    icon: "heart",
    roles: [
      {
        title: "Junior Research Assistant (Volunteer)",
        present: false, dates: "Jul 2024 – Jul 2025",
        points: [
          "Worked on research projects under the Department of Health Sciences and Informatics."
        ]
      }
    ]
  }
];

/* ---------------- EDUCATION ---------------- */
const EDUCATION = [
  {
    degree: "Master of Science in Computational Food Engineering",
    school: "Chattogram Veterinary and Animal Sciences University",
    meta: "Chattogram, Bangladesh • Jul 2025 – Jul 2026 (Expected)",
    rows: [
      ["CGPA", "3.83 out of 4.00 (first semester)"],
      ["Type", "Thesis-based"],
      ["Thesis", "Fabrication of dye-sensitized TiO₂ sensors for gas sensing application"],
      ["Department", "Physical and Mathematical Sciences"]
    ],
    chips: ["Thin Films", "Gas Sensors", "Nanomaterials", "Computational Modelling"]
  },
  {
    degree: "Bachelor of Science in Food Science and Technology",
    school: "Chattogram Veterinary and Animal Sciences University",
    meta: "Chattogram, Bangladesh • Jan 2020 – May 2025",
    rows: [
      ["CGPA", "3.46 out of 4.00"],
      ["Final year", "3.60 out of 4.00"],
      ["Externship", "UMT Mobility Program, Malaysia (Bronze in New Product Development)"]
    ],
    chips: ["Food Chemistry", "Food Microbiology", "Food Safety", "Product Development", "Food Analysis"]
  }
];

const TRAINING = [
  { title: "Computer-Aided Drug Design: Desktop to Publication", org: "ABCD Laboratory, Bangladesh (Online)",
    date: "9 – 30 May 2025", hours: "50+ hours", certificate: "assets/certificates/training-cadd-2025.pdf",
    points: [
      "Module A: Target, ligand and gate-keeper residue research, databases, ML for small molecules, chemical identifiers and fingerprints",
      "Module B: Classical mechanics, quantum chemistry, force fields, small-molecule optimization with Gaussian, publication-quality figures",
      "Module C: Protein structures, choosing targets, AI in drug design, UniProt and the Protein Data Bank",
      "Module D: Molecular docking, virtual screening and visualization with Chimera, PyMOL and Discovery Studio",
      "Module E: Drug-likeness and ADME/T analysis with online and offline tools",
      "Module F: Molecular dynamics simulation with NAMD and VMD"
    ] },
  { title: "Quality Control and Unit Operation in Food Industry", org: "TICI, ACES Department",
    date: "5 Nov – 4 Dec 2024", hours: "110+ hours", certificate: "assets/certificates/training-qc-unit-operation-2024.pdf",
    points: [
      "Analytical chemistry and environmental sciences (76 hours): QC and QA, oil viscosity, industrial water analysis and nanotechnology in water treatment",
      "Food quality tests: antioxidants, ascorbic acid, pectin, fat, preservatives, adulteration, polyphenols, peroxide value, caffeine, total sugar",
      "Spectrometry: UV-Vis, flame photometry, ICP-OES, EDXRF, FTIR, vitamin A estimation",
      "Chromatography: GC, GC-MS and HPLC; pollution control with DO, BOD and COD",
      "Operation and process technology (18 hours), instrumentation and control (4 hours), industrial safety and health (6 hours)"
    ] },
  { title: "GMP and HACCP-Based Food Safety Management Systems", org: "Alcumus Bangladesh Ltd.", logo: "assets/logo-alcumus.svg",
    date: "10 – 12 Jan 2025", hours: "20+ hours", certificate: "assets/certificates/training-gmp-haccp-2025.pdf",
    points: [
      "Codex Alimentarius Commission, IPPC, OIE, ISO, FSSC, IFS, GAA and GFSI",
      "Food Safety Act, rules and regulations",
      "Putting HACCP steps and principles into action; PRP, OPRP and CCP",
      "ISO/TS 22002-1 to 22002-6 and Principles of Food Hygiene CAC/RCP 1-1969 (Rev. 2022)",
      "Food safety audit methodology, reporting, and the auditor's code of conduct"
    ] },
  { title: "Agro-Processing, Preservation and Marketing", org: "Rural Development Academy, Bogura",
    date: "29 Dec 2024 – 2 Jan 2025", hours: "40+ hours", certificate: "assets/certificates/training-agro-processing-2025.pdf",
    points: [
      "Yogurt production by fermenting milk with lactic acid bacteria",
      "Rajmohon sweets, savory patties, mixed fruit chutney and doughnuts",
      "Packaging of ghee, olive pickles and yogurt"
    ] }
];

const COURSES = [
  { title: "IBM Data Science Professional Certificate", org: "IBM", logo: "assets/logo-ibm.svg",
    detail: "12 courses covering SQL, Python, exploratory data analysis, machine learning, applied data science and generative AI.",
    url: "https://www.coursera.org/account/accomplishments/specialization/DQSZH8GHD71C" },
  { title: "Data Science Fundamentals with Python and SQL", org: "IBM", logo: "assets/logo-ibm.svg",
    detail: "5-course specialization covering data science tools (Jupyter, GitHub, Watson Studio), Python for data science and APIs, a hands-on Python project, statistics with Python, and relational databases and SQL for data analysis.",
    url: "https://www.coursera.org/account/accomplishments/specialization/RPENAO365SDQ" },
  { title: "Data Science & Machine Learning with Python for Beginners", org: "Ostad", logo: "assets/logo-ostad.png",
    detail: "20 modules, 60 hours of video, assignments, quizzes and live coding tests on visualization, EDA, logistic regression, KNN, decision trees, SVM, K-means and time series. Certificate ID: C30230.",
    url: "https://ostad.app/share/certificate/c30230-aszad-hossain-akib",
    certificate: "assets/certificates/course-ostad-data-science-ml.pdf" },
  { title: "SQL for Data Science", org: "University of California, Davis", logo: "assets/logo-ucdavis.svg",
    detail: "Filtering, sorting and summarizing data with SQL; subqueries and joins across multiple tables; string, date and numeric functions for data wrangling and descriptive analytics on relational databases. Completed March 2025.",
    url: "https://www.coursera.org/account/accomplishments/verify/A9Q0427TMNKJ" },
  { title: "Python Programming Fundamentals", org: "Microsoft", logo: "assets/logo-microsoft.svg",
    detail: "Core Python programming, data structures and algorithms, debugging and unit testing, scripting in Jupyter, and version control with Git and GitHub. Completed March 2025.",
    url: "https://www.coursera.org/account/accomplishments/verify/S0G7X1W717ZE" }
];

const TUTORIALS = [
  "Statistics 787, Statistics 726 and Statistics 120 (Ross Ihaka)",
  { text: "AlphaFold: A Practical Guide (EMBL-EBI)", url: "https://www.ebi.ac.uk/training/online/courses/alphafold/", logo: "assets/logo-embl-ebi.svg" },
  { text: "A Guide to UniProt for Students (EMBL-EBI)", url: "https://www.ebi.ac.uk/training/events/guide-uniprot-students/", logo: "assets/logo-embl-ebi.svg" },
  "Radiation Safety (Gennadiy Nikolaevich Timoshenko, JINR)"
];

const MEMBERSHIPS = [
  { name: "American Physical Society", role: "Graduate Student Member · Full Plan", since: "Sep 2026", logo: "assets/logo-aps.jpg",
    certificate: "assets/certificates/membership-aps-2026.pdf", url: "https://www.aps.org/" },
  { name: "Materials Research Society", role: "Student Member", since: "Dec 2025", logo: "assets/logo-mrs.svg",
    certificate: "assets/certificates/membership-mrs-2026.pdf", url: "https://www.mrs.org/" },
  { name: "Royal Microscopical Society", role: "Member", since: "Feb 2026", logo: "assets/logo-rms.jpg",
    certificate: "assets/certificates/membership-rms-2026.pdf", url: "https://www.rms.org.uk/" },
  { name: "American Society for Microbiology", role: "Global Outreach – Student Member", since: "Nov 2025", logo: "assets/logo-asm.svg",
    certificate: "assets/certificates/membership-asm-2026.pdf", url: "https://asm.org/" },
  { name: "Institute of Food Science and Technology", role: "Associate Member (Student) · ID 204551", since: "Dec 2025", logo: "assets/logo-ifst.png",
    certificate: "assets/certificates/membership-ifst-2025.pdf", url: "https://www.ifst.org/education-careers" }
];

/* ---------------- ACTIVITIES (like a blog grid) ----------------
   type is shown as the grey pill; icon: globe | microscope | flask | cpu | users | bookOpen | sparkles | droplet */
const ACTIVITIES = [
  { type: "Summer School", icon: "globe", title: "Beihang International Summer School",
    text: "Nature-Inspired Materials and Chemistry, completed in person at Beihang's Hangzhou International Campus, with free registration, accommodation and meals.",
    tags: ["Materials", "Chemistry", "China"], date: "13 – 27 Jul 2026",
    certificate: "assets/certificates/beihang-2026.pdf",
    photo: "assets/beihang-2026.jpg", photoAlt: "Aszad at the Beihang International Summer School 2026" },
  { type: "Summer School", icon: "cpu", title: "2nd International Hangzhou Nanoelectronics Summer School",
    text: "Organized by the State Key Laboratory of Spintronics, Beihang University, in Hangzhou, China.",
    tags: ["Nanoelectronics"], date: "21 – 23 Jul 2026",
    photos: [
      { src: "assets/hangzhou-certificate-ceremony-2026.jpg", focus: "72% 50%", caption: "Certificate ceremony",
        alt: "Aszad Hossain Akib with fellow participants at the Hangzhou Nanoelectronics Summer School certificate ceremony" },
      { src: "assets/hangzhou-lecture-2026.jpg", focus: "65% 50%", caption: "In a lecture session",
        alt: "Aszad Hossain Akib attending a lecture at the Hangzhou Nanoelectronics Summer School" }
    ],
    certificate: "assets/certificates/hangzhou-nanoelectronics-2026.pdf" },
  { type: "Summer School", icon: "microscope", title: "4th ML/AI for Electron Microscopy School",
    text: "University of Tennessee, Knoxville (online). Project: a Python toolkit that analyzes CBED diffraction patterns to identify anatase and rutile phases in nanostructured TiO₂ films.",
    tags: ["Machine Learning", "TEM", "CBED"], date: "22 – 26 Jun 2026",
    certificate: "assets/certificates/ml-ai-electron-microscopy-2026.pdf",
    project: "https://github.com/aszad-akib/CBED-Analysis_TiO2-Nanostructures" },
  { type: "Summer School", icon: "droplet", title: "InPlasTwin Summer School 2026",
    text: "Jožef Stefan Institute (online). Project: analytical approaches for detecting micro- and nanoplastics in the environment and food.",
    tags: ["Microplastics", "Food Safety"], date: "15 – 19 Jun 2026",
    certificate: "assets/certificates/inplastwin-2026.pdf" },
  { type: "Short Course", icon: "flask", title: "Experimental Microfluidics",
    text: "ETH Zurich virtual summer school: 16 hours on the fundamentals of microfluidics and its applications in microbiology and chemistry.",
    tags: ["Microfluidics", "ETH Zurich"], date: "15 – 18 Jun 2026",
    certificate: "assets/certificates/eth-microfluidics-2026.pdf" },
  { type: "Summer School", icon: "sparkles", title: "SWEB Hybrid Summer School",
    text: "University of Latvia (online). Functional coatings and X-chromic materials.",
    tags: ["Coatings", "Smart Materials"], date: "18 – 19 Jun 2026",
    certificate: "assets/certificates/sweb-2026.pdf" },
  { type: "Summer School", icon: "globe", title: "ReMag Summer School",
    text: "National Institute of Chemistry, Slovenia (online), supported by EIT RawMaterials. Recycling of permanent magnets and critical raw materials.",
    tags: ["Recycling", "Raw Materials"], date: "6 May 2026",
    certificate: "assets/certificates/remag-2026.pdf" },
  { type: "Summer School", icon: "cpu", title: "MemrisTec Summer School 2026",
    text: "Online, with a full fee waiver for an article written for Leon Chua's 90th birthday.",
    tags: ["Memristors", "Electronics"], date: "30 Aug – 7 Sep 2026",
    certificate: "pending",
    project: "pending" },
  { type: "Summit", icon: "users", title: "Nano Summit Berlin",
    text: "Nanotechnology summit organized by Cassyni, connecting science, publishing and innovation.",
    tags: ["Nanotechnology"], date: "20 May 2026",
    certificate: "assets/certificates/nano-summit-berlin-2026.pdf" },
  { type: "Workshop", icon: "bookOpen", title: "Visualizing Data for Scientific Discovery",
    text: "Royal Society of Chemistry (RSC) workshop. Day 1: foundations of visual analytics. Day 2: exploring high-dimensional data.",
    tags: ["Data Visualization", "RSC"], date: "28 – 29 Apr 2026",
    certificate: "assets/certificates/rsc-visualising-data-2026.pdf" },
  { type: "Workshop", icon: "atom", title: "Computer Simulation and Theory of Macromolecules 2026",
    text: "Hünfeld, Germany (online). Organized by Prof. Volkhard Helms (Saarland University) and Prof. Helmut Grubmüller.",
    tags: ["Simulation", "Macromolecules"], date: "24 – 25 Apr 2026",
    certificate: "assets/certificates/macromolecules-hunfeld-2026.pdf" },
  { type: "Virtual Internship", icon: "sparkles", title: "Advanced Functional Materials & 3D Printing for Sustainability",
    text: "Virtual internship capsule on combining functional materials with 3D printing.",
    tags: ["3D Printing", "Sustainability"], date: "Started 10 Sep 2026",
    status: "Ongoing" },
  { type: "Webinar", icon: "droplet", title: "Scaling Water Resilience and Circular Water Solutions",
    text: "Joint event of EU Mission Adaptation and GD-SO on EU water-resilience projects.",
    tags: ["Water", "Climate Adaptation"], date: "3 Sep 2026" },
  { type: "Symposium", icon: "atom", title: "DrugSpace 2025 Symposium",
    text: "BioSolveIT (online). Small-molecule discovery, lead optimization, ultra-large screening and AI methods.",
    tags: ["Drug Discovery", "AI"], date: "2025" },
  { type: "Symposium", icon: "cpu", title: "Machine Learning in Drug Discovery Symposium",
    text: "Broad Institute of MIT and Harvard (online). AI-driven drug discovery and foundation models.",
    tags: ["Machine Learning", "Drug Discovery"], date: "Online" },
  { type: "Webinar", icon: "bookOpen", title: "Methods in Bioinformatics",
    text: "EMBL (recorded). Gene ontology, proteomics, bioimage analysis, variant calling and biological networks.",
    tags: ["Bioinformatics", "EMBL"], date: "Recorded" },
  { type: "Upcoming", icon: "microscope", title: "Third Machine Learning for Microscopy Hackathon",
    text: "University of Tennessee, Knoxville (online).",
    tags: ["Hackathon", "Microscopy"], date: "15 – 17 Dec 2026" },
  { type: "Upcoming", icon: "atom", title: "13th Virtual Winter School on Computational Chemistry",
    text: "Registered to attend.",
    tags: ["Computational Chemistry"], date: "Upcoming" }
];

/* ---------------- ABOUT ---------------- */
const ABOUT = {
  subtitle: "M.Sc. Researcher | Thin Films & Nanomaterials | Food Science | Computational Chemistry",
  heading: "Meet Aszad",
  paragraphs: [
    "I'm a <b>materials researcher</b> who builds sustainable thin films for sensing and functional surfaces. I bring a food scientist's precision to the work.",
    "Food Science taught me to measure what matters, using HPLC, UV-Vis and microbiology. My <b>M.Sc.</b> applied those skills to materials science. I synthesize metal-doped TiO₂, ZnO and Co₃O₄ thin films by spray pyrolysis for gas sensing, antibacterial surfaces and self-cleaning coatings.",
    "I also have hands-on experience in computational drug discovery (molecular docking, molecular dynamics and Gaussian). I use it to predict how molecules interact with surfaces, which guides my experiments. Building on my work with metal oxides, I'm keen to move into organic materials, where designing molecule by molecule would make my computational background especially useful. Next, I want to combine these simulations with AI and machine learning to screen candidate materials faster and cut down on wasteful trial-and-error synthesis.",
    "To me, this is a natural progression. Both fields ask the same questions: Is it safe? Can we detect it? Can we make it greener? Now I answer them by designing the material itself, and increasingly with help from data.",
    '<b>Recognition:</b> <b>NST Fellowship</b> (Ministry of Science and Technology), <b>UGC Research Grant</b>, and a <b>Bronze Award</b> in New Product Development at Universiti Malaysia Terengganu.',
    '<b>Core Expertise:</b> Spray-pyrolysis thin films and metal-oxide doping; optical characterization and band-gap analysis; sensing, antibacterial and self-cleaning surface testing; computational modelling (DFT, docking, MD); HPLC. Currently learning AI/ML for materials discovery.',
    '<b>Goal:</b> A fully funded Masters or PhD in materials science, developing sustainable metal-oxide and organic materials for sensing and functional surfaces.'
  ]
};


/* ---------------- INTERNSHIPS ---------------- */
const INTERNSHIPS = [
  {
    title: "UMT Mobility Program: New Product Development",
    org: "Universiti Malaysia Terengganu, Malaysia",
    date: "10 Aug – 9 Sep 2024", hours: "150+ hours", badge: "BRONZE AWARD",
    supervisor: "Supervised by Dr. Asma' Binti Ali",
    points: [
      "150+ hours of theoretical classwork and practical lab work on new product development.",
      "Formulated multiple prototypes and conducted sensory evaluation (preference test).",
      "Proximate analysis: moisture (oven drying), ash (ashing), crude protein (Kjeldahl), crude fat (Soxhlet) and crude fibre (gravimetric).",
      "Designed convenient packaging and led the marketing effort.",
      "Secured bronze for our product Econuggs on launch day and was praised for a unique waste-utilization idea."
    ],
    tags: ["Product Development", "Sensory Evaluation", "Proximate Analysis", "Packaging"],
    photos: [
      { src: "assets/umt-banana-peel-2024.jpg", caption: "Blanching banana peels for the Econuggs formulation",
        alt: "Banana peel strips being blanched in a pot on a lab stove" },
      { src: "assets/umt-ingredients-2024.jpg", caption: "Ingredients weighed out for a prototype batch",
        alt: "Bowls of weighed ingredients on a steel tray, including chopped banana peel, flour, breadcrumbs and spices" },
      { src: "assets/umt-team-lab-2024.jpg", caption: "Preparing prototypes with team Revita Ltd. in the UMT food lab",
        alt: "Aszad Hossain Akib and teammates in lab coats and hairnets coating and frying prototypes" },
      { src: "assets/umt-prototypes-2024.jpg", caption: "A tray of Econuggs prototypes ready for testing", pos: "50% 62%",
        alt: "Aszad Hossain Akib in a lab coat and hairnet holding a tray of Econuggs prototypes" },
      { src: "assets/umt-sensory-2024.jpg", caption: "Sensory evaluation booths set up for the preference test",
        alt: "Sensory evaluation room with numbered booths and sample trays laid out" }
    ]
  },
  {
    title: "Food Toxicology Research Section",
    org: "Institute of Food Science and Technology, BCSIR",
    date: "16 Jan – 15 Feb", hours: "160+ hours", badge: "LAB INTERNSHIP",
    supervisor: "",
    points: [
      "160+ hours of lab work in the Food Toxicology Research Section.",
      "Prepared mobile phases for caffeine and aflatoxin detection.",
      "Extracted aflatoxin using the QuEChERS method.",
      "Collected coffee and cola samples for caffeine, and corn, maize and chanachur for aflatoxin.",
      "Analyzed caffeine by HPLC with a UV-Vis detector and aflatoxin by HPLC with a fluorescence detector (FLD)."
    ],
    tags: ["HPLC", "QuEChERS", "Aflatoxin", "Caffeine"],
    photos: [
      { src: "assets/bcsir-lab-bench-2025.jpg", caption: "Working with extracted samples at the bench",
        alt: "Aszad Hossain Akib in a lab coat and safety glasses examining a sample tube" },
      { src: "assets/bcsir-pipetting-2025.jpg", caption: "Pipetting samples for analysis",
        alt: "Aszad Hossain Akib pipetting a sample into a vial in the Food Toxicology laboratory" },
      { src: "assets/bcsir-centrifuge-2025.jpg", caption: "Centrifuging sample extracts (5000 rpm, 5 min)",
        alt: "Loading capped sample tubes into a centrifuge set to 5000 rpm for 5 minutes" },
      { src: "assets/bcsir-gcms-2025.jpg", caption: "At the GC-MS autosampler (Shimadzu AOC-20i)",
        alt: "Aszad Hossain Akib operating the AOC-20i autosampler on a GC-MS instrument" },
      { src: "assets/bcsir-lab-team-2025.jpg", caption: "In the Food Toxicology lab, IFST, BCSIR",
        alt: "Aszad Hossain Akib with two colleagues in lab coats in the Food Toxicology laboratory" },
      { src: "assets/bcsir-certificate-ceremony-2025.jpg", caption: "Internship certificate ceremony at IFST, BCSIR",
        alt: "Interns holding their completion certificates at IFST, BCSIR" }
    ]
  }
];

/* ---------------- TEACHING & MENTORING ---------------- */
const TEACHING = {
  stats: [
    { value: "20", label: "People mentored" },
    { value: "10", label: "SSC/HSC students taught" },
    { value: "5.00", label: "GPA achieved by students" },
    { value: "3+", label: "Years of teaching" }
  ],
  roles: [
    { title: "Introductory Research Advisor", date: "2022 – 2025", icon: "users",
      points: [
        "Guided and mentored 20 individuals across different projects, introducing research methodology and basic descriptive statistics.",
        "Held meetings and feedback sessions and delivered teaching materials that helped team members progress through their research projects."
      ],
      tags: ["Research Methodology", "Descriptive Statistics", "Mentoring"] },
    { title: "Science Tutor (Private)", date: "2022 – 2025", icon: "bookOpen",
      points: [
        "Taught 10 SSC/HSC students in mathematics, biology, chemistry and physics, covering theory and practical lab work.",
        "Helped the students achieve a GPA of 5.00 out of 5.00."
      ],
      tags: ["Mathematics", "Biology", "Chemistry", "Physics"] }
  ]
};

/* ---------------- PROJECTS ----------------
   link: which page the "Learn more" button opens */
const PROJECTS = [
  { title: "Hg Adsorption on Gold Surfaces with Machine-Learned Interatomic Potentials",
    type: "Computational Chemistry · Python / ASE", status: "Completed",
    url: "https://github.com/aszad-akib/hg-on-gold-mlip",
    report: "assets/reports/hg-on-gold-mlip-github.pdf", reportLabel: "GitHub Summary (PDF)",
    galleryCols: 1,
    photos: [
      { src: "assets/hg-on-gold-eads.png", chart: true,
        caption: "Hg adsorption energy on all 11 sites of Au(111), Au(100) and Au(110) with MACE-MP-0 and CHGNet, against the Hg/Au (−98 kJ/mol) and Cn/Au (−52 kJ/mol) experimental values",
        alt: "Bar chart of Hg adsorption energies by site and facet for two machine-learned potentials, and a scatter plot of binding versus number of Au neighbours" }
    ],
    context: "Superheavy-element chemistry on gold thermochromatography detectors (FLNR, JINR, Dubna) · Built on the ASE demos in miroi/open-collection · Python, ASE, MACE-MP-0, CHGNet · Linux (WSL2 Ubuntu) · 2026",
    text: "Hg adsorption on 11 sites of three gold facets with two universal machine-learned potentials, as a benchmark for copernicium (Cn, Z = 112) on gold detectors.",
    summary: [
      "Gold is the detector surface in single-atom thermochromatography of superheavy elements. Mercury is the lighter homolog of copernicium (Cn, Z = 112), so Hg on gold is the benchmark system. I extended the baseline ASE scripts into a production workflow that computes Hg adsorption energies on all 11 high-symmetry sites of Au(111), Au(100) and Au(110) with two universal machine-learned interatomic potentials, MACE-MP-0 and CHGNet, and checks convergence in slab thickness, cell size, vacuum and lattice constant.",
      "Site preference is robust: both models rank ontop < bridge < hollow on every facet, and binding grows with the number of Au neighbours. The open Au(100) and Au(110) facets bind Hg 14–22 kJ/mol more strongly than close-packed Au(111), so a rough or polycrystalline detector holds Hg more strongly than an ideal (111) surface.",
      "The choice of potential matters as much as the facet: the two models differ by 9–23 kJ/mol. CHGNet (−91.5 to −113.7 kJ/mol at the best sites) brackets the experimental value of about −98 kJ/mol, while MACE-MP-0 underbinds every site. Both models bind Hg much more strongly than Cn (52 kJ/mol), as in experiment.",
      "I also traced two problems in the baseline set-up: the demo slab is built at a = 4.08 Å instead of each model's own lattice constant, which puts it under about 2% strain and underbinds by about 5 kJ/mol, and ASE's default LennardJones() parameters (σ = 1 Å, ε = 1 eV) give a meaningless −0.01 eV."
    ],
    keywords: {
      materials: ["Surface adsorption", "Au(111), Au(100), Au(110) facets", "Superheavy elements (Cn)", "Thermochromatography detectors", "Coordination and binding", "Lattice strain"],
      computational: ["Atomic Simulation Environment (ASE)", "Machine-learned interatomic potentials", "MACE-MP-0", "CHGNet", "Geometry optimization", "Convergence testing"]
    },
    skills: [
      ["Slab models and adsorption-site screening in ASE", "Computational", "Intermediate", "Hands-on", "11 high-symmetry sites on 3 gold facets"],
      ["Universal machine-learned potentials (MACE-MP-0, CHGNet)", "Computational", "Beginner", "Hands-on", "Compared two models site by site"],
      ["Convergence testing", "Computational", "Intermediate", "Hands-on", "Layers, cell size, vacuum and lattice constant"],
      ["Benchmarking against experiment", "Analysis", "Intermediate", "Hands-on", "Hg/Au ≈ −98 kJ/mol, Cn/Au 52 kJ/mol"],
      ["Debugging a baseline workflow", "Analysis", "Intermediate", "Hands-on", "Found 2% lattice strain and default LJ parameters"],
      ["Python scripting and plotting (NumPy, Matplotlib)", "Programming", "Intermediate", "Hands-on", "Production, convergence and plotting scripts"],
      ["Linux terminal and Git/GitHub", "Programming", "Intermediate", "Hands-on", "Run in WSL2 Ubuntu; public repository"]
    ],
    tags: ["ASE", "MACE-MP-0", "CHGNet", "Hg on Au", "Superheavy Elements"] },
  { title: "Pd Adsorption on Gold Surfaces: Benchmarking Six Interatomic Potentials",
    type: "Computational Chemistry · Python / ASE", status: "Completed",
    url: "https://github.com/aszad-akib/pd-on-gold-potentials",
    report: "assets/reports/pd-on-gold-potentials-github.pdf", reportLabel: "GitHub Summary (PDF)",
    galleryCols: 1,
    photos: [
      { src: "assets/pd-on-gold-eads-ladder.png", chart: true,
        caption: "Pd adsorption energy on gold for six potentials, from Lennard-Jones to machine-learned models, compared with DFT",
        alt: "Chart comparing Pd adsorption energies on gold sites for six interatomic potentials and DFT" },
      { src: "assets/pd-on-gold-alloying.png", chart: true,
        caption: "Pd on top of the surface versus swapped into the gold layers: five of six potentials find that Pd alloys into the surface",
        alt: "Chart of the energy of Pd in different gold layers relative to the adatom for six potentials" }
    ],
    context: "Superheavy-element chemistry on gold thermochromatography detectors (FLNR, JINR, Dubna) · Built on the Pt_on_gold ASE demos in miroi/open-collection · Python, ASE, EAM, MACE, CHGNet · Linux (WSL2 Ubuntu) · 2026",
    text: "Six interatomic potentials benchmarked against DFT for Pd on 11 sites of three gold facets, as a model for darmstadtium (Ds, Z = 110) on gold detectors.",
    summary: [
      "Palladium is the lighter homolog of darmstadtium (Ds, Z = 110). I screened Pd adsorption on all 11 high-symmetry sites of Au(111), Au(100) and Au(110) with a ladder of six interatomic potentials: Lennard-Jones, EMT, the Zhou–Johnson–Wadley EAM alloy potential, MACE-MP-0, MACE-MPA-0 and CHGNet, and checked them against DFT (Gotsis et al. 2007).",
      "The choice of potential changes the adsorption energy more than the choice of site: on Au(111) fcc the six potentials span −1.20 to −3.27 eV against a DFT value of −2.56 eV. The EAM alloy potential is the most accurate here, within 0.11 eV of DFT on average and with the DFT site order, ahead of MACE-MPA-0 (0.18 eV), MACE-MP-0 (0.24 eV) and CHGNet (0.28 eV). EMT overbinds by about 0.7 eV and Lennard-Jones underbinds by half, because a pair potential has no many-body term.",
      "Pd does not stay on top of Au(111): five of the six potentials find that swapping Pd into the top layer is downhill by 0.14–0.71 eV, and all six prefer Pd below the surface, in line with Au surface segregation in Au–Pd alloys. For a detector this means a group-10 atom may alloy into the gold, so a single adsorption energy may not describe its deposition.",
      "I also found that the baseline relaxed demo double-counts surface relaxation by subtracting an unrelaxed clean slab, adding about −0.42 eV; with consistent energy references the two demos agree."
    ],
    keywords: {
      materials: ["Surface adsorption", "Au–Pd alloying and segregation", "Superheavy elements (Ds)", "Thermochromatography detectors", "Many-body metallic bonding", "Energy references"],
      computational: ["Atomic Simulation Environment (ASE)", "Lennard-Jones and EMT", "EAM alloy potential", "MACE-MP-0 / MACE-MPA-0", "CHGNet", "Benchmarking against DFT"]
    },
    skills: [
      ["Comparing classical and machine-learned potentials in ASE", "Computational", "Intermediate", "Hands-on", "LJ, EMT, EAM, MACE-MP-0, MACE-MPA-0, CHGNet"],
      ["EAM alloy potential set-up", "Computational", "Beginner", "Hands-on", "Zhou–Johnson–Wadley Au–Pd potential"],
      ["Adsorption-site screening and relaxation", "Computational", "Intermediate", "Hands-on", "11 sites on 3 gold facets"],
      ["Substitution and subsurface energetics", "Computational", "Beginner", "Hands-on", "Pd adatom vs layers 1–3"],
      ["Benchmarking against DFT", "Analysis", "Intermediate", "Hands-on", "Mean deviation per potential over 6 sites"],
      ["Debugging energy references", "Analysis", "Intermediate", "Hands-on", "Fixed a double-counted slab relaxation in the demo"],
      ["Python scripting and plotting (NumPy, Matplotlib)", "Programming", "Intermediate", "Hands-on", "Production, alloying and plotting scripts"],
      ["Linux terminal and Git/GitHub", "Programming", "Intermediate", "Hands-on", "Run in WSL2 Ubuntu; public repository"]
    ],
    tags: ["ASE", "EAM", "MACE", "CHGNet", "Pd on Au", "Superheavy Elements"] },
  { title: "CBED Pattern Analysis for TiO₂ Nanostructures", type: "Python · Electron Microscopy", status: "Completed",
    text: "Python toolkit for Convergent Beam Electron Diffraction (CBED) patterns: peak detection, FFT reciprocal-space analysis and anatase/rutile phase identification in TiO₂ films for antibacterial applications. Built at the ML/AI for Electron Microscopy School 2026.",
    tags: ["Python", "CBED", "TEM", "TiO₂", "NumPy / SciPy"], link: "activities",
    url: "https://github.com/aszad-akib/CBED-Analysis_TiO2-Nanostructures" },
  { title: "Metal-Doped TiO₂ Thin Films for Glucose & Gas Sensing", type: "Materials Research", status: "Ongoing",
    text: "Nanostructured TiO₂ thin films developed by spray pyrolysis and spin coating to sense glucose and the gases released by spoiling food. Manuscript in preparation.",
    tags: ["TiO₂", "Spray Pyrolysis", "Gas Sensing", "Glucose Sensing"], link: "publications" },
  { title: "Multifunctional TiO₂, ZnO and Co₃O₄ Films", type: "Materials Research", status: "Ongoing",
    text: "Assessing the antibacterial, water-purification and gas-sensing properties of metal-doped oxide thin films.",
    tags: ["ZnO", "Co₃O₄", "Antibacterial", "Water Purification"], link: "experience" },
  { title: "Dye-Sensitized TiO₂ Gas Sensors", type: "M.Sc. Thesis", status: "Ongoing",
    text: "Fabrication of dye-sensitized TiO₂ sensors for gas sensing applications, supervised by Prof. Dr. Indrajit Saha.",
    tags: ["Thesis", "Dye Sensitization", "Sensors"], link: "education" },
  { title: "Thin-Film Antibacterial Surfaces", type: "Funded Proposal", status: "Ongoing",
    text: "Research proposal on thin-film materials for antibacterial surfaces, funded by the University Grants Commission, Bangladesh.",
    tags: ["Thin Films", "Antibacterial", "ISO 22196"], link: "honors" },
  { title: "Parthenolide: Sources, Pharmacology & Toxicity", type: "Review Article", status: "Ongoing",
    text: "A review of the sources, pharmacology, pharmacokinetics and toxicity of parthenolide, with Md. Junaid at ABCD Laboratory.",
    tags: ["Review", "Pharmacology", "Drug Discovery"], link: "publications" },
  { title: "EcoNuggs: Upcycling Banana Peel into a Plant-Based Nugget with Biodegradable Packaging",
    type: "Product Development", status: "Bronze Award", link: "internships",
    report: "assets/reports/econuggs-product-development-report.pdf",
    photos: [
      { src: "assets/econuggs-presentation-2024.jpg", caption: "Presenting EcoNuggs at the Faculty of Fisheries & Food Science, UMT",
        alt: "Aszad Hossain Akib presenting the EcoNuggs packaging design from the FPSM UMT podium" },
      { src: "assets/econuggs-packaging-2024.jpg", caption: "Final EcoNuggs packaging (Revita, 240 g family pack)", pos: "0% 50%",
        alt: "EcoNuggs banana peel nuggets box by Revita, family pack, net weight 240 g" },
      { src: "assets/econuggs-coated-2024.jpg", caption: "Breadcrumb-coated nuggets before par-frying",
        alt: "Tray of breadcrumb-coated EcoNuggs laid out in rows before frying" },
      { src: "assets/econuggs-lab-2024.jpg", caption: "Preparing EcoNuggs in the food processing lab",
        alt: "Aszad Hossain Akib preparing banana-peel nuggets with teammates in the UMT food processing lab" }
    ],
    context: "Food Product Development, Universiti Malaysia Terengganu (UMT), Malaysia · Group project (8 members) · Supervisor: Assoc. Prof. Dr. Asma' binti Ali · August 2024",
    text: "Plant-based nugget engineered from banana peel waste, with TVP and starch binders, sensory testing, proximate analysis and biodegradable PLA packaging.",
    summary: [
      "As part of an eight-member team at Universiti Malaysia Terengganu, I engineered a plant-based nugget as a soft composite material built from banana peel (Pisang Berangan), a fibre-rich waste biomass. In the design, peel fibre acts as the reinforcing phase: it bulks the structure and holds water. Textured vegetable protein (TVP), an extruded fibrous protein network, and starch-based binders form the continuous matrix. We varied the matrix fraction by testing TVP at 50, 60 and 70% of banana-peel weight.",
      "Processing shaped the final structure in stages: blanching, blending and forming built the core, and a breadcrumb coating with par-frying created a crisp outer crust. Freezing at −18 °C then preserved the product.",
      "Because this was a product development project, we judged texture and other properties through sensory testing: 20 panellists per formulation used a 7-point hedonic scale, and we analysed the scores with one-way ANOVA. Acceptability did not differ significantly across the three formulations (p > 0.05), so the lowest protein fraction (50% TVP, 5.35/7) gave comparable performance.",
      "Compositional analysis showed 24.1% crude fibre, 8.5% protein, 10.5% fat and 49.3% moisture, with a water activity of 0.94 and pH 5.38, which define how water is bound in the structure and how stable it is.",
      "For packaging, we chose a biodegradable polylactic acid (PLA) film with paperboard secondary packaging, which taught me that a sustainable material is not automatically the right one: PLA's moderate moisture barrier and its brittleness below its glass transition make it a trade-off for frozen storage."
    ],
    keywords: {
      materials: ["Biomass valorization & waste upcycling", "Biodegradable polymers (PLA)", "Packaging barrier properties", "Textured protein networks", "Fibre water-holding capacity", "Starch-based binders", "Water activity & moisture–structure relationships"],
      analytical: ["Proximate analysis", "Kjeldahl protein", "Soxhlet extraction", "Gravimetric fibre analysis", "Sensory evaluation", "One-way ANOVA"]
    },
    skills: [
      ["Formulation with structural ingredients (TVP, fibre, starch binders)", "Materials", "Intermediate", "Hands-on", "Varied TVP at 50/60/70% of banana-peel weight"],
      ["Biodegradable packaging selection (PLA film, paperboard)", "Materials", "Beginner", "Theoretical", "Selected materials; barrier performance not tested"],
      ["Water activity & pH measurement", "Materials", "Beginner", "Hands-on", "a<sub>w</sub> 0.94, pH 5.38"],
      ["Moisture & ash determination", "Analytical", "Intermediate", "Hands-on", "Oven drying (105 °C), muffle furnace (550–600 °C)"],
      ["Soxhlet crude fat extraction", "Analytical", "Beginner", "Hands-on", "FOSS LabTec ST310, petroleum ether"],
      ["Kjeldahl protein analysis", "Analytical", "Beginner", "Hands-on", "FOSS Digestor 2006 and Kjeltec 2100"],
      ["Crude fibre analysis", "Analytical", "Beginner", "Hands-on", "Acid/alkali digestion, gravimetric"],
      ["Sensory evaluation", "Analytical", "Intermediate", "Hands-on", "7-point hedonic scale, 20 panellists, 3-digit coded samples"],
      ["One-way ANOVA (Minitab)", "Analytical", "Intermediate", "Hands-on", "Compared 3 formulations across 6 sensory attributes"],
      ["Product costing & pricing", "Product development", "Beginner", "Hands-on", "Markup pricing: RM 8.00 per 240 g box"]
    ],
    tags: ["Banana Peel", "TVP", "PLA Packaging", "Sensory Evaluation"] },
  { title: "Caffeine & Aflatoxin Detection by HPLC",
    type: "Food Toxicology", status: "Completed", link: "internships",
    report: "assets/reports/caffeine-aflatoxin-hplc-report.pdf",
    photos: [
      { src: "assets/bcsir-food-toxicology-lab.jpg", caption: "Food Toxicology Research Laboratory, IFST, BCSIR, Dhaka",
        alt: "Aszad Hossain Akib outside the Food Toxicology Research Laboratory, IFST, BCSIR, Dhaka" },
      { src: "assets/bcsir-pipetting-2025.jpg", caption: "Pipetting sample extracts for HPLC analysis",
        alt: "Aszad Hossain Akib pipetting a sample into a vial in the Food Toxicology laboratory" }
    ],
    reportTitle: "Extraction and Analysis of Caffeine and Aflatoxins in Food Matrices Using HPLC and Observational Study of GC-MS",
    context: "Industrial placement · Food Toxicology Research Section, Institute of Food Science and Technology (IFST), BCSIR · Supervisor: Prof. Dr. Indrajit Saha (CVASU) · Co-supervisor: Mohammad Tariqul Hasan, Principal Scientific Officer (BCSIR) · Report: February 2025",
    text: "QuEChERS extraction and HPLC analysis of aflatoxins in spices, chanachur and cereals, and caffeine in coffee and soft drinks.",
    summary: [
      "Applied QuEChERS extraction to spices, chanachur and cereal-based products for aflatoxin analysis by HPLC with fluorescence detection. The cleanup step used functionalized silica sorbents (PSA and C18), which remove matrix interferences through selective surface adsorption.",
      "Developed a sonication-based caffeine extraction and quantified caffeine by HPLC-PDA with a linear calibration (20–200 ppm): 29.1 mg/g in coffee powder and 104 mg/L in a soft drink.",
      "The project gave hands-on experience with how sorbent and stationary-phase materials, including their surface chemistry, particle size and pore structure, determine extraction and separation performance. It also included observational training on a Shimadzu GC-MS-QP2010 Plus."
    ],
    keywords: {
      materials: ["Surface-functionalized silica sorbents", "Porous materials & pore structure", "Adsorption & sorbent selectivity", "Bonded stationary phases (C18)", "Hygroscopic salts & salting-out", "Membrane filtration", "Polymer stationary phases (GC)"],
      analytical: ["Chromatography", "Sample preparation", "Dispersive solid-phase extraction", "Calibration & quantification"]
    },
    skills: [
      ["Sorbent-based cleanup (PSA, C18)", "Materials", "Intermediate", "Hands-on", "Used PSA and C18 for dSPE cleanup of spice and snack extracts"],
      ["Salting-out phase separation (MgSO₄, NaCl)", "Materials", "Intermediate", "Hands-on", "QuEChERS partitioning step"],
      ["Membrane filtration (0.22 / 0.45 µm nylon)", "Materials", "Beginner", "Hands-on", "Sample filtration before HPLC"],
      ["Stationary phase design (particle size, pore size, bonded phase)", "Materials", "Intermediate", "Theoretical", "Interpreted column specs (C18, 5 µm, 300 Å)"],
      ["QuEChERS extraction", "Analytical", "Intermediate", "Hands-on", "Aflatoxin extraction from spices, chanachur, cereals"],
      ["HPLC-PDA", "Analytical", "Intermediate", "Hands-on", "Caffeine calibration and quantification"],
      ["HPLC-FLD", "Analytical", "Beginner", "Hands-on", "Aflatoxin analysis"],
      ["Ultrasonic extraction", "Analytical", "Intermediate", "Hands-on", "Caffeine extraction from coffee and soft drinks"],
      ["GC-MS", "Analytical", "Beginner", "Observational", "Shimadzu GC-MS-QP2010 Plus"],
      ["Chromatogram interpretation", "Analytical", "Intermediate", "Hands-on", "Retention time, peak area, calibration curves"]
    ],
    tags: ["HPLC", "QuEChERS", "Aflatoxin", "Caffeine", "GC-MS"] },
  { title: "Antioxidant LAB & Bacteriophage Isolation", type: "Microbiology", status: "Completed",
    text: "Determined antioxidant properties of lactic acid bacteria and isolated bacteriophages from different samples at BCSIR, Chattogram.",
    tags: ["LAB", "Antioxidants", "Bacteriophage"], link: "experience",
    photos: [
      { src: "assets/lab-streak-plate.jpg", caption: "Streak plate of an isolate",
        alt: "Agar plate with streaked bacterial growth, labelled by Akib" },
      { src: "assets/lab-colonies-plate.jpg", caption: "Colonies on an agar plate",
        alt: "Agar plate with scattered round bacterial colonies" },
      { src: "assets/lab-reagent-vial.jpg", caption: "Cell-culture-grade reagent (stored at 5–8 °C)",
        alt: "Small reagent vial with a cold-storage label, held in the lab" }
    ] }
];

/* ---------------- LEADERSHIP & COMMUNITY ---------------- */
/* "Beyond the Lab": a short personal note at the end of Leadership & Community */
const BEYOND_LAB = {
  title: "Beyond the Lab",
  photos: [
    { src: "assets/beyond-lab-cat.jpg", alt: "Aszad Hossain Akib holding a ginger cat by the sea",
      caption: "Making a new friend by the sea" },
    { src: "assets/beyond-lab-cat-2.jpg", alt: "Aszad Hossain Akib holding a tabby cat on the rocks by the shore",
      caption: "Another friend on the rocks by the shore" }
  ],
  paragraphs: [
    "Outside the lab, I'm a devoted cat person. I rarely walk past one without stopping to say hello.",
    "Looking after animals has taught me patience and gentle, careful handling, and both carry over into my research, where good results often depend on slow, repeated and attentive work."
  ]
};

const LEADERSHIP = [
  { icon: "heart", title: "Badhon (CVASU Unit)", role: "Member",
    text: "Donated blood 10 times and helped manage blood for 5 emergency patients.", tags: ["Blood Donation", "Volunteering"] },
  { icon: "zap", title: "Fitness Instructor", role: "Coach",
    text: "Personalized coaching on effective fat-loss strategies and muscle gain, tailored to individual goals and needs.", tags: ["Coaching", "Health"] },
  { icon: "users", title: "Introductory Research Advisor", role: "Mentor",
    text: "Mentored 20 early researchers in research methodology and statistics.", tags: ["Mentoring"] }
];

const LANGUAGES = [
  { name: "Bengali", level: "Native", detail: "" },
  { name: "English", level: "Proficient (C1)", detail: "Listening C1 · Spoken production C1 · Spoken interaction C1 · Reading B2 · Writing B2" }
];
