const TICKERS = [
  {
    "ticker": "A",
    "organization": "Agilent Technologies",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "47.19B"
  },
  {
    "ticker": "AA",
    "organization": "Alcoa",
    "industry": "Metals & Mining",
    "marketCap": "9.12B"
  },
  {
    "ticker": "AAC",
    "organization": "Ares Acquisition",
    "industry": "Shell Companies",
    "marketCap": "1.22B"
  },
  {
    "ticker": "AACG",
    "organization": "ATA Creativity Global",
    "industry": "Diversified Consumer Services",
    "marketCap": "76.08M"
  },
  {
    "ticker": "AADI",
    "organization": "Aadi Bioscience",
    "industry": "Biotechnology",
    "marketCap": "611.52M"
  },
  {
    "ticker": "AAIC",
    "organization": "Arlington Asset Investment",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "120.60M"
  },
  {
    "ticker": "AAL",
    "organization": "American Airlines",
    "industry": "Airlines",
    "marketCap": "13.63B"
  },
  {
    "ticker": "AAMC",
    "organization": "Altisource Asset Management",
    "industry": "Real Estate Management & Development",
    "marketCap": "45.70M"
  },
  {
    "ticker": "AAME",
    "organization": "Atlantic American",
    "industry": "Insurance",
    "marketCap": "84.17M"
  },
  {
    "ticker": "AAN",
    "organization": "The Aaron's Company",
    "industry": "Specialty Retail",
    "marketCap": "918.10M"
  },
  {
    "ticker": "AAOI",
    "organization": "Applied Optoelectronics",
    "industry": "Communications Equipment",
    "marketCap": "196.01M"
  },
  {
    "ticker": "AAON",
    "organization": "AAON",
    "industry": " Inc.",
    "marketCap": "Building Products"
  },
  {
    "ticker": "AAP",
    "organization": "Advance Auto Parts",
    "industry": "Specialty Retail",
    "marketCap": "13.20B"
  },
  {
    "ticker": "AAPL",
    "organization": "Apple",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "AAQC",
    "organization": "Accelerate Acquisition",
    "industry": "Shell Companies",
    "marketCap": "485.00M"
  },
  {
    "ticker": "AAT",
    "organization": "American Assets Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.31B"
  },
  {
    "ticker": "AATC",
    "organization": "Autoscope Technologies",
    "industry": "Scientific & Technical Instruments",
    "marketCap": "39.23M"
  },
  {
    "ticker": "AAU",
    "organization": "Almaden Minerals",
    "industry": "Metals & Mining",
    "marketCap": "53.68M"
  },
  {
    "ticker": "AAWW",
    "organization": "Atlas Air Worldwide Holdings",
    "industry": "Air Freight & Logistics",
    "marketCap": "2.37B"
  },
  {
    "ticker": "AB",
    "organization": "AllianceBernstein",
    "industry": "Capital Markets",
    "marketCap": "5.07B"
  },
  {
    "ticker": "ABB",
    "organization": "ABB Ltd.",
    "industry": "Electrical Equipment",
    "marketCap": "67.16B"
  },
  {
    "ticker": "ABBV",
    "organization": "AbbVie",
    "industry": "Biotechnology",
    "marketCap": "192.78B"
  },
  {
    "ticker": "ABC",
    "organization": "AmerisourceBergen",
    "industry": "Health Care Providers & Services",
    "marketCap": "24.89B"
  },
  {
    "ticker": "ABCB",
    "organization": "Ameris Bancorp",
    "industry": "Banks",
    "marketCap": "3.69B"
  },
  {
    "ticker": "ABCL",
    "organization": "AbCellera Biologics",
    "industry": "Biotechnology",
    "marketCap": "4.76B"
  },
  {
    "ticker": "ABCM",
    "organization": "Abcam PLC",
    "industry": "Biotechnology",
    "marketCap": "4.66B"
  },
  {
    "ticker": "ABEO",
    "organization": "Abeona Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "113.37M"
  },
  {
    "ticker": "ABEV",
    "organization": "Ambev",
    "industry": "Beverages",
    "marketCap": "44.77B"
  },
  {
    "ticker": "ABG",
    "organization": "Asbury Automotive Group",
    "industry": "Specialty Retail",
    "marketCap": "3.83B"
  },
  {
    "ticker": "ABGI",
    "organization": "ABG Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "188.11M"
  },
  {
    "ticker": "ABIO",
    "organization": "ARCA biopharma",
    "industry": "Biotechnology",
    "marketCap": "42.65M"
  },
  {
    "ticker": "ABM",
    "organization": "ABM Industries",
    "industry": "Commercial Services & Supplies",
    "marketCap": "3.09B"
  },
  {
    "ticker": "ABMD",
    "organization": "Abiomed",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "14.67B"
  },
  {
    "ticker": "ABNB",
    "organization": "Airbnb",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "ABOS",
    "organization": "Acumen Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "590.21M"
  },
  {
    "ticker": "ABR",
    "organization": "Arbor Realty Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "2.68B"
  },
  {
    "ticker": "ABSI",
    "organization": "Absci",
    "industry": "Biotechnology",
    "marketCap": "1.12B"
  },
  {
    "ticker": "ABST",
    "organization": "Absolute Software",
    "industry": "Software-Application",
    "marketCap": "548.11M"
  },
  {
    "ticker": "ABT",
    "organization": "Abbott Laboratories",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "206.68B"
  },
  {
    "ticker": "ABTX",
    "organization": "Allegiance Bancshares",
    "industry": "Banks",
    "marketCap": "781.30M"
  },
  {
    "ticker": "ABUS",
    "organization": "Arbutus Biopharma",
    "industry": "Biotechnology",
    "marketCap": "416.65M"
  },
  {
    "ticker": "ABVC",
    "organization": "ABVC BioPharma",
    "industry": "Biotechnology",
    "marketCap": "61.37M"
  },
  {
    "ticker": "AC",
    "organization": "Associated Capital Group",
    "industry": "Capital Markets",
    "marketCap": "1.54B"
  },
  {
    "ticker": "ACA",
    "organization": "Arcosa",
    "industry": "Construction & Engineering",
    "marketCap": "2.49B"
  },
  {
    "ticker": "ACAD",
    "organization": "ACADIA Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.79B"
  },
  {
    "ticker": "ACAH",
    "organization": "Atlantic Coastal Acquisition",
    "industry": "Shell Companies",
    "marketCap": "420.04M"
  },
  {
    "ticker": "ACB",
    "organization": "Aurora Cannabis",
    "industry": "Pharmaceuticals",
    "marketCap": "1.40B"
  },
  {
    "ticker": "ACBA",
    "organization": "Ace Global Business Acquisition",
    "industry": "Shell Companies",
    "marketCap": "53.64M"
  },
  {
    "ticker": "ACBI",
    "organization": "Atlantic Capital Bancshares",
    "industry": "Banks",
    "marketCap": "544.12M"
  },
  {
    "ticker": "ACC",
    "organization": "American Campus Communities",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.70B"
  },
  {
    "ticker": "ACCD",
    "organization": "Accolade",
    "industry": "Health Care Technology",
    "marketCap": "2.82B"
  },
  {
    "ticker": "ACCO",
    "organization": "ACCO Brands",
    "industry": "Commercial Services & Supplies",
    "marketCap": "855.56M"
  },
  {
    "ticker": "ACEL",
    "organization": "Accel Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "ACER",
    "organization": "Acer Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "36.63M"
  },
  {
    "ticker": "ACET",
    "organization": "Adicet Bio",
    "industry": "Health Care Providers & Services",
    "marketCap": "256.65M"
  },
  {
    "ticker": "ACEV",
    "organization": "ACE Convergence Acquisition",
    "industry": "Shell Companies",
    "marketCap": "284.91M"
  },
  {
    "ticker": "ACGL",
    "organization": "Arch Capital Group",
    "industry": "Insurance",
    "marketCap": "15.12B"
  },
  {
    "ticker": "ACH",
    "organization": "Aluminum Corporation of China",
    "industry": "Metals & Mining",
    "marketCap": "18.58B"
  },
  {
    "ticker": "ACHC",
    "organization": "Acadia Healthcare Company",
    "industry": "Health Care Providers & Services",
    "marketCap": "5.73B"
  },
  {
    "ticker": "ACHL",
    "organization": "Achilles Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "315.49M"
  },
  {
    "ticker": "ACHR",
    "organization": "Archer Aviation",
    "industry": "Aerospace & Defense",
    "marketCap": "2.01B"
  },
  {
    "ticker": "ACHV",
    "organization": "Achieve Life Sciences",
    "industry": "Biotechnology",
    "marketCap": "78.67M"
  },
  {
    "ticker": "ACI",
    "organization": "Albertsons Companies",
    "industry": "Grocery Stores",
    "marketCap": "14.11B"
  },
  {
    "ticker": "ACII",
    "organization": "Atlas Crest Investment II",
    "industry": "Shell Companies",
    "marketCap": "421.40M"
  },
  {
    "ticker": "ACIU",
    "organization": "AC Immune",
    "industry": "Biotechnology",
    "marketCap": "483.87M"
  },
  {
    "ticker": "ACIW",
    "organization": "ACI Worldwide",
    "industry": "Software",
    "marketCap": "3.68B"
  },
  {
    "ticker": "ACKIT",
    "organization": "Ackrell SPAC Partners I",
    "industry": "Shell Companies",
    "marketCap": "144.11M"
  },
  {
    "ticker": "ACLS",
    "organization": "Axcelis Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.59B"
  },
  {
    "ticker": "ACM",
    "organization": "Aecom",
    "industry": "Construction & Engineering",
    "marketCap": "9.53B"
  },
  {
    "ticker": "ACMR",
    "organization": "ACM Research",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.06B"
  },
  {
    "ticker": "ACN",
    "organization": "Accenture",
    "industry": "IT Services",
    "marketCap": "202.37B"
  },
  {
    "ticker": "ACNB",
    "organization": "ACNB Corporation",
    "industry": "Banks",
    "marketCap": "245.33M"
  },
  {
    "ticker": "ACOR",
    "organization": "Acorda Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "51.62M"
  },
  {
    "ticker": "ACQR",
    "organization": "Independence Holdings",
    "industry": "Shell Companies",
    "marketCap": "605.45M"
  },
  {
    "ticker": "ACR",
    "organization": "ACRES Commercial Realty",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "152.38M"
  },
  {
    "ticker": "ACRE",
    "organization": "Ares Commercial Real Estate",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "721.48M"
  },
  {
    "ticker": "ACRO",
    "organization": "Acropolis Infrastructure Acquisition",
    "industry": "Shell Companies",
    "marketCap": "363.75M"
  },
  {
    "ticker": "ACRS",
    "organization": "Aclaris Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "1.09B"
  },
  {
    "ticker": "ACRX",
    "organization": "AcelRx Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "120.97M"
  },
  {
    "ticker": "ACST",
    "organization": "Acasti Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "91.25M"
  },
  {
    "ticker": "ACT",
    "organization": "Enact Holdings",
    "industry": "Insurance-Specialty",
    "marketCap": "3.55B"
  },
  {
    "ticker": "ACTD",
    "organization": "Arclight Clean Transition II",
    "industry": "Shell Companies",
    "marketCap": "380.01M"
  },
  {
    "ticker": "ACTG",
    "organization": "Acacia Research",
    "industry": "Professional Services",
    "marketCap": "339.32M"
  },
  {
    "ticker": "ACU",
    "organization": "Acme United",
    "industry": "Commercial Services & Supplies",
    "marketCap": "116.88M"
  },
  {
    "ticker": "ACVA",
    "organization": "ACV Auctions",
    "industry": "Software-Application",
    "marketCap": "2.77B"
  },
  {
    "ticker": "ACXP",
    "organization": "Acurx Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "53.43M"
  },
  {
    "ticker": "ACY",
    "organization": "AeroCentury",
    "industry": "Trading Companies & Distributors",
    "marketCap": "79.88M"
  },
  {
    "ticker": "ADAG",
    "organization": "Adagene",
    "industry": "Biotechnology",
    "marketCap": "610.95M"
  },
  {
    "ticker": "ADAP",
    "organization": "Adaptimmune Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "820.24M"
  },
  {
    "ticker": "ADBE",
    "organization": "Adobe",
    "industry": "Software",
    "marketCap": "274.28B"
  },
  {
    "ticker": "ADC",
    "organization": "Agree Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.56B"
  },
  {
    "ticker": "ADCT",
    "organization": "ADC Therapeutics SA",
    "industry": "Communications Equipment",
    "marketCap": "2.07B"
  },
  {
    "ticker": "ADER",
    "organization": "26 Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "334.68M"
  },
  {
    "ticker": "ADES",
    "organization": "Advanced Emissions Solutions",
    "industry": "Chemicals",
    "marketCap": "120.47M"
  },
  {
    "ticker": "ADEX",
    "organization": "Adit EdTech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "136.78M"
  },
  {
    "ticker": "ADF",
    "organization": "Aldel Financial",
    "industry": "Shell Companies",
    "marketCap": "131.67M"
  },
  {
    "ticker": "ADGI",
    "organization": "Adagio Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.04B"
  },
  {
    "ticker": "ADI",
    "organization": "Analog Devices",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "89.95B"
  },
  {
    "ticker": "ADIL",
    "organization": "Adial Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "87.72M"
  },
  {
    "ticker": "ADM",
    "organization": "Archer Daniels Midland",
    "industry": "Food Products",
    "marketCap": "34.00B"
  },
  {
    "ticker": "ADMA",
    "organization": "ADMA Biologics",
    "industry": "Biotechnology",
    "marketCap": "150.03M"
  },
  {
    "ticker": "ADMP",
    "organization": "Adamis Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "150.37M"
  },
  {
    "ticker": "ADMS",
    "organization": "Adamas Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "223.88M"
  },
  {
    "ticker": "ADN",
    "organization": "Advent Technologies",
    "industry": "Utilities-Renewable",
    "marketCap": "443.34M"
  },
  {
    "ticker": "ADNT",
    "organization": "Adient",
    "industry": "Auto Components",
    "marketCap": "3.87B"
  },
  {
    "ticker": "ADOC",
    "organization": "Edoc Acquisition",
    "industry": "Shell Companies",
    "marketCap": "119.69M"
  },
  {
    "ticker": "ADP",
    "organization": "Automatic Data Processing",
    "industry": "IT Services",
    "marketCap": "85.39B"
  },
  {
    "ticker": "ADPT",
    "organization": "Adaptive Biotechnologies",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "4.69B"
  },
  {
    "ticker": "ADRA",
    "organization": "Adara Acquisition",
    "industry": "n/a",
    "marketCap": "112.58M"
  },
  {
    "ticker": "ADS",
    "organization": "Alliance Data Systems",
    "industry": "IT Services",
    "marketCap": "5.02B"
  },
  {
    "ticker": "ADSK",
    "organization": "Autodesk",
    "industry": "Software",
    "marketCap": "62.39B"
  },
  {
    "ticker": "ADT",
    "organization": "ADT Inc.",
    "industry": "Commercial Services & Supplies",
    "marketCap": "6.67B"
  },
  {
    "ticker": "ADTN",
    "organization": "ADTRAN",
    "industry": " Inc.",
    "marketCap": "Communications Equipment"
  },
  {
    "ticker": "ADTX",
    "organization": "Aditx Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "35.64M"
  },
  {
    "ticker": "ADUS",
    "organization": "Addus HomeCare",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.22B"
  },
  {
    "ticker": "ADV",
    "organization": "Advantage Solutions",
    "industry": "Advertising Agencies",
    "marketCap": "2.73B"
  },
  {
    "ticker": "ADVM",
    "organization": "Adverum Biotechnologies",
    "industry": "Biotechnology",
    "marketCap": "210.17M"
  },
  {
    "ticker": "ADXN",
    "organization": "Addex Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "53.18M"
  },
  {
    "ticker": "ADXS",
    "organization": "Advaxis",
    "industry": "Biotechnology",
    "marketCap": "75.95M"
  },
  {
    "ticker": "AE",
    "organization": "Adams Resources & Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "AEAC",
    "organization": "Authentic Equity Acquisition",
    "industry": "Shell Companies",
    "marketCap": "292.50M"
  },
  {
    "ticker": "AEE",
    "organization": "Ameren",
    "industry": "Multi-Utilities",
    "marketCap": "20.84B"
  },
  {
    "ticker": "AEG",
    "organization": "Aegon",
    "industry": "Insurance",
    "marketCap": "10.46B"
  },
  {
    "ticker": "AEHL",
    "organization": "Antelope Enterprise Holdings",
    "industry": "Building Products & Equipment",
    "marketCap": "16.36M"
  },
  {
    "ticker": "AEHR",
    "organization": "Aehr Test Systems",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "309.95M"
  },
  {
    "ticker": "AEI",
    "organization": "Alset Ehome International",
    "industry": "Real Estate-Development",
    "marketCap": "95.15M"
  },
  {
    "ticker": "AEIS",
    "organization": "Advanced Energy Industries",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.41B"
  },
  {
    "ticker": "AEL",
    "organization": "American Equity Investment Life",
    "industry": "Insurance",
    "marketCap": "2.74B"
  },
  {
    "ticker": "AEM",
    "organization": "Agnico Eagle Mines",
    "industry": "Metals & Mining",
    "marketCap": "12.43B"
  },
  {
    "ticker": "AEMD",
    "organization": "Aethlon Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "57.08M"
  },
  {
    "ticker": "AENZ",
    "organization": "Aenza",
    "industry": "Engineering & Construction",
    "marketCap": "324.20M"
  },
  {
    "ticker": "AEO",
    "organization": "American Eagle Outfitters",
    "industry": "Specialty Retail",
    "marketCap": "4.41B"
  },
  {
    "ticker": "AEP",
    "organization": "American Electric Power",
    "industry": "Electric Utilities",
    "marketCap": "40.71B"
  },
  {
    "ticker": "AER",
    "organization": "AerCap Holdings",
    "industry": "Trading Companies & Distributors",
    "marketCap": "7.71B"
  },
  {
    "ticker": "AERI",
    "organization": "Aerie Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "538.46M"
  },
  {
    "ticker": "AES",
    "organization": "AES Corporation",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "15.28B"
  },
  {
    "ticker": "AESE",
    "organization": "Allied Esports Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "AEVA",
    "organization": "Aeva Technologies",
    "industry": "Auto Parts",
    "marketCap": "1.66B"
  },
  {
    "ticker": "AEY",
    "organization": "ADDvantage Technologies Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "AEYE",
    "organization": "AudioEye",
    "industry": "Software",
    "marketCap": "127.82M"
  },
  {
    "ticker": "AEZS",
    "organization": "AEterna Zentaris",
    "industry": "Biotechnology",
    "marketCap": "97.08M"
  },
  {
    "ticker": "AFAQ",
    "organization": "AF Acquisition",
    "industry": "Shell Companies",
    "marketCap": "272.44M"
  },
  {
    "ticker": "AFBI",
    "organization": "Affinity Bancshares",
    "industry": "Banks",
    "marketCap": "95.60M"
  },
  {
    "ticker": "AFCG",
    "organization": "AFC Gamma",
    "industry": "REIT-Specialty",
    "marketCap": "353.37M"
  },
  {
    "ticker": "AFG",
    "organization": "American Financial Group",
    "industry": "Insurance",
    "marketCap": "10.83B"
  },
  {
    "ticker": "AFI",
    "organization": "Armstrong Flooring",
    "industry": "Building Products",
    "marketCap": "67.88M"
  },
  {
    "ticker": "AFIB",
    "organization": "Acutus Medical",
    "industry": "Medical Devices",
    "marketCap": "247.01M"
  },
  {
    "ticker": "AFIN",
    "organization": "American Finance Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "983.80M"
  },
  {
    "ticker": "AFL",
    "organization": "Aflac",
    "industry": "Insurance",
    "marketCap": "35.51B"
  },
  {
    "ticker": "AFMD",
    "organization": "Affimed N.V.",
    "industry": "Biotechnology",
    "marketCap": "737.55M"
  },
  {
    "ticker": "AFRM",
    "organization": "Affirm Holdings",
    "industry": "IT Services",
    "marketCap": "31.44B"
  },
  {
    "ticker": "AFYA",
    "organization": "Afya",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.81B"
  },
  {
    "ticker": "AG",
    "organization": "First Majestic Silver",
    "industry": "Metals & Mining",
    "marketCap": "2.91B"
  },
  {
    "ticker": "AGAC",
    "organization": "African Gold Acquisition",
    "industry": "Shell Companies",
    "marketCap": "503.01M"
  },
  {
    "ticker": "AGBA",
    "organization": "AGBA Acquisition",
    "industry": "Shell Companies",
    "marketCap": "58.08M"
  },
  {
    "ticker": "AGC",
    "organization": "Altimeter Growth Corp.",
    "industry": "Shell Companies",
    "marketCap": "640.00M"
  },
  {
    "ticker": "AGCB",
    "organization": "Altimeter Growth 2",
    "industry": "Shell Companies",
    "marketCap": "576.32M"
  },
  {
    "ticker": "AGCO",
    "organization": "AGCO Corporation",
    "industry": "Machinery",
    "marketCap": "9.25B"
  },
  {
    "ticker": "AGE",
    "organization": "AgeX Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "34.94M"
  },
  {
    "ticker": "AGEN",
    "organization": "Agenus",
    "industry": "Biotechnology",
    "marketCap": "1.24B"
  },
  {
    "ticker": "AGFS",
    "organization": "AgroFresh Solutions",
    "industry": "Chemicals",
    "marketCap": "112.63M"
  },
  {
    "ticker": "AGFY",
    "organization": "Agrify",
    "industry": "Machinery",
    "marketCap": "389.58M"
  },
  {
    "ticker": "AGGR",
    "organization": "Agile Growth",
    "industry": "Shell Companies",
    "marketCap": "375.49M"
  },
  {
    "ticker": "AGI",
    "organization": "Alamos Gold",
    "industry": "Metals & Mining",
    "marketCap": "2.84B"
  },
  {
    "ticker": "AGIL",
    "organization": "AgileThought",
    "industry": "Software-Application",
    "marketCap": "4.55M"
  },
  {
    "ticker": "AGIO",
    "organization": "Agios Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.74B"
  },
  {
    "ticker": "AGL",
    "organization": "Agilon Health",
    "industry": "Medical Care Facilities",
    "marketCap": "10.01B"
  },
  {
    "ticker": "AGLE",
    "organization": "Aeglea Biotherapeutics",
    "industry": "Biotechnology",
    "marketCap": "389.57M"
  },
  {
    "ticker": "AGM",
    "organization": "Federal Agricultural Mortgage",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.21B"
  },
  {
    "ticker": "AGM.A",
    "organization": "Federal Agricultural Mortgage",
    "industry": "Credit Services",
    "marketCap": "1.16B"
  },
  {
    "ticker": "AGMH",
    "organization": "AGM Group Holdings",
    "industry": "Capital Markets",
    "marketCap": "197.76M"
  },
  {
    "ticker": "AGNC",
    "organization": "AGNC Investment",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "8.28B"
  },
  {
    "ticker": "AGO",
    "organization": "Assured Guaranty",
    "industry": "Insurance",
    "marketCap": "3.43B"
  },
  {
    "ticker": "AGR",
    "organization": "Avangrid",
    "industry": "Electric Utilities",
    "marketCap": "18.95B"
  },
  {
    "ticker": "AGRI",
    "organization": "AgriFORCE Growing Systems",
    "industry": "Farm Products",
    "marketCap": "32.17M"
  },
  {
    "ticker": "AGRO",
    "organization": "Adecoagro",
    "industry": "Food Products",
    "marketCap": "1.04B"
  },
  {
    "ticker": "AGRX",
    "organization": "Agile Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "92.07M"
  },
  {
    "ticker": "AGS",
    "organization": "PlayAGS",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "AGTC",
    "organization": "Applied Genetic Technologies",
    "industry": "Biotechnology",
    "marketCap": "125.92M"
  },
  {
    "ticker": "AGTI",
    "organization": "Agiliti",
    "industry": "Health Information Services",
    "marketCap": "2.48B"
  },
  {
    "ticker": "AGX",
    "organization": "Argan",
    "industry": "Construction & Engineering",
    "marketCap": "697.87M"
  },
  {
    "ticker": "AGYS",
    "organization": "Agilysys",
    "industry": "Software",
    "marketCap": "1.36B"
  },
  {
    "ticker": "AHCO",
    "organization": "AdaptHealth",
    "industry": "Health Care Providers & Services",
    "marketCap": "3.09B"
  },
  {
    "ticker": "AHH",
    "organization": "Armada Hoffler Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "825.82M"
  },
  {
    "ticker": "AHPA",
    "organization": "Avista Public Acquisition II",
    "industry": "Blank Checks / SPAC",
    "marketCap": "250.00M"
  },
  {
    "ticker": "AHPI",
    "organization": "Allied Healthcare Products",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "27.57M"
  },
  {
    "ticker": "AHT",
    "organization": "Ashford Hospitality Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "477.17M"
  },
  {
    "ticker": "AI",
    "organization": "C3.ai",
    "industry": "Software",
    "marketCap": "4.70B"
  },
  {
    "ticker": "AIG",
    "organization": "American International Group",
    "industry": "Insurance",
    "marketCap": "47.45B"
  },
  {
    "ticker": "AIH",
    "organization": "Aesthetic Medical International",
    "industry": "Health Care Providers & Services",
    "marketCap": "97.22M"
  },
  {
    "ticker": "AIHS",
    "organization": "Senmiao Technology",
    "industry": "Consumer Finance",
    "marketCap": "34.35M"
  },
  {
    "ticker": "AIKI",
    "organization": "AIkido Pharma",
    "industry": "Biotechnology",
    "marketCap": "73.90M"
  },
  {
    "ticker": "AIM",
    "organization": "AIM ImmunoTech",
    "industry": "Biotechnology",
    "marketCap": "93.78M"
  },
  {
    "ticker": "AIMC",
    "organization": "Altra Industrial Motion",
    "industry": "Machinery",
    "marketCap": "3.57B"
  },
  {
    "ticker": "AIN",
    "organization": "Albany International",
    "industry": "Machinery",
    "marketCap": "2.57B"
  },
  {
    "ticker": "AINC",
    "organization": "Ashford",
    "industry": "Capital Markets",
    "marketCap": "47.22M"
  },
  {
    "ticker": "AINV",
    "organization": "Apollo Investment",
    "industry": "Capital Markets",
    "marketCap": "853.06M"
  },
  {
    "ticker": "AIR",
    "organization": "AAR Corp.",
    "industry": "Aerospace & Defense",
    "marketCap": "1.20B"
  },
  {
    "ticker": "AIRC",
    "organization": "Apartment Income REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "7.75B"
  },
  {
    "ticker": "AIRG",
    "organization": "Airgain",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "AIRI",
    "organization": "Air Industries Group",
    "industry": "Aerospace & Defense",
    "marketCap": "33.68M"
  },
  {
    "ticker": "AIRT",
    "organization": "Air T",
    "industry": "Air Freight & Logistics",
    "marketCap": "80.84M"
  },
  {
    "ticker": "AIT",
    "organization": "Applied Industrial Technologies",
    "industry": "Trading Companies & Distributors",
    "marketCap": "3.54B"
  },
  {
    "ticker": "AIV",
    "organization": "Aimco",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.08B"
  },
  {
    "ticker": "AIZ",
    "organization": "Assurant",
    "industry": "Insurance",
    "marketCap": "9.35B"
  },
  {
    "ticker": "AJG",
    "organization": "Arthur J. Gallagher",
    "industry": "Insurance",
    "marketCap": "30.86B"
  },
  {
    "ticker": "AJRD",
    "organization": "Aerojet Rocketdyne",
    "industry": "Aerospace & Defense",
    "marketCap": "3.52B"
  },
  {
    "ticker": "AJX",
    "organization": "Great Ajax",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "313.35M"
  },
  {
    "ticker": "AKA",
    "organization": "a.k.a. Brands",
    "industry": "Internet Retail",
    "marketCap": "1.09B"
  },
  {
    "ticker": "AKAM",
    "organization": "Akamai Technologies",
    "industry": "IT Services",
    "marketCap": "17.25B"
  },
  {
    "ticker": "AKBA",
    "organization": "Akebia Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "493.94M"
  },
  {
    "ticker": "AKIC",
    "organization": "Sports Ventures Acquisition",
    "industry": "Shell Companies",
    "marketCap": "286.16M"
  },
  {
    "ticker": "AKO.A",
    "organization": "Embotelladora Andina",
    "industry": "Beverages-Non-Alcoholic",
    "marketCap": "1.72B"
  },
  {
    "ticker": "AKO.B",
    "organization": "Embotelladora Andina",
    "industry": "Beverages-Non-Alcoholic",
    "marketCap": "2.11B"
  },
  {
    "ticker": "AKR",
    "organization": "Acadia Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.88B"
  },
  {
    "ticker": "AKRO",
    "organization": "Akero Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "772.89M"
  },
  {
    "ticker": "AKTS",
    "organization": "Akoustis Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "AKTX",
    "organization": "Akari Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "79.96M"
  },
  {
    "ticker": "AKU",
    "organization": "Akumin",
    "industry": "Diagnostics & Research",
    "marketCap": "220.79M"
  },
  {
    "ticker": "AKUS",
    "organization": "Akouos",
    "industry": "Biotechnology",
    "marketCap": "400.32M"
  },
  {
    "ticker": "AKYA",
    "organization": "Akoya Biosciences",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "514.09M"
  },
  {
    "ticker": "AL",
    "organization": "Air Lease Corporation",
    "industry": "Trading Companies & Distributors",
    "marketCap": "4.77B"
  },
  {
    "ticker": "ALAC",
    "organization": "Alberton Acquisition",
    "industry": "Shell Companies",
    "marketCap": "50.76M"
  },
  {
    "ticker": "ALB",
    "organization": "Albemarle",
    "industry": "Chemicals",
    "marketCap": "25.52B"
  },
  {
    "ticker": "ALBO",
    "organization": "Albireo Pharma",
    "industry": "Biotechnology",
    "marketCap": "592.69M"
  },
  {
    "ticker": "ALC",
    "organization": "Alcon",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "39.23B"
  },
  {
    "ticker": "ALCC",
    "organization": "AltC Acquisition",
    "industry": "Shell Companies",
    "marketCap": "553.50M"
  },
  {
    "ticker": "ALCO",
    "organization": "Alico",
    "industry": " Inc.",
    "marketCap": "Food Products"
  },
  {
    "ticker": "ALDX",
    "organization": "Aldeyra Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "513.25M"
  },
  {
    "ticker": "ALE",
    "organization": "ALLETE",
    "industry": " Inc.",
    "marketCap": "Electric Utilities"
  },
  {
    "ticker": "ALEC",
    "organization": "Alector",
    "industry": "Biotechnology",
    "marketCap": "1.92B"
  },
  {
    "ticker": "ALEX",
    "organization": "Alexander & Baldwin",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.75B"
  },
  {
    "ticker": "ALF",
    "organization": "ALFI",
    "industry": "Software-Infrastructure",
    "marketCap": "102.22M"
  },
  {
    "ticker": "ALG",
    "organization": "Alamo Group",
    "industry": "Machinery",
    "marketCap": "1.67B"
  },
  {
    "ticker": "ALGM",
    "organization": "Allegro MicroSystems",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "5.99B"
  },
  {
    "ticker": "ALGN",
    "organization": "Align Technology",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "52.26B"
  },
  {
    "ticker": "ALGS",
    "organization": "Aligos Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "660.86M"
  },
  {
    "ticker": "ALGT",
    "organization": "Allegiant Travel",
    "industry": "Airlines",
    "marketCap": "3.63B"
  },
  {
    "ticker": "ALHC",
    "organization": "Alignment Healthcare",
    "industry": "Health Care Providers & Services",
    "marketCap": "3.07B"
  },
  {
    "ticker": "ALIM",
    "organization": "Alimera Sciences",
    "industry": "Pharmaceuticals",
    "marketCap": "29.50M"
  },
  {
    "ticker": "ALIT",
    "organization": "Alight",
    "industry": "Software-Application",
    "marketCap": "5.17B"
  },
  {
    "ticker": "ALJJ",
    "organization": "ALJ Regional Holdings",
    "industry": "IT Services",
    "marketCap": "44.86M"
  },
  {
    "ticker": "ALK",
    "organization": "Alaska Air Group",
    "industry": "Airlines",
    "marketCap": "7.67B"
  },
  {
    "ticker": "ALKS",
    "organization": "Alkermes",
    "industry": "Biotechnology",
    "marketCap": "4.94B"
  },
  {
    "ticker": "ALKT",
    "organization": "Alkami Technology",
    "industry": "Software-Application",
    "marketCap": "2.23B"
  },
  {
    "ticker": "ALL",
    "organization": "Allstate",
    "industry": "Insurance",
    "marketCap": "37.64B"
  },
  {
    "ticker": "ALLE",
    "organization": "Allegion",
    "industry": "Building Products",
    "marketCap": "11.88B"
  },
  {
    "ticker": "ALLK",
    "organization": "Allakos",
    "industry": "Biotechnology",
    "marketCap": "5.76B"
  },
  {
    "ticker": "ALLO",
    "organization": "Allogene Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.49B"
  },
  {
    "ticker": "ALLT",
    "organization": "Allot Ltd.",
    "industry": "Software",
    "marketCap": "540.83M"
  },
  {
    "ticker": "ALLY",
    "organization": "Ally Financial",
    "industry": "Consumer Finance",
    "marketCap": "18.72B"
  },
  {
    "ticker": "ALNA",
    "organization": "Allena Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "73.04M"
  },
  {
    "ticker": "ALNY",
    "organization": "Alnylam Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "22.90B"
  },
  {
    "ticker": "ALOT",
    "organization": "AstroNova",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "ALPA",
    "organization": "Alpha Healthcare Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "185.43M"
  },
  {
    "ticker": "ALPN",
    "organization": "Alpine Immune Sciences",
    "industry": "Biotechnology",
    "marketCap": "306.64M"
  },
  {
    "ticker": "ALRM",
    "organization": "Alarm.com",
    "industry": "Software",
    "marketCap": "3.92B"
  },
  {
    "ticker": "ALRN",
    "organization": "Aileron Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "92.36M"
  },
  {
    "ticker": "ALRS",
    "organization": "Alerus Financial",
    "industry": "Diversified Financial Services",
    "marketCap": "514.54M"
  },
  {
    "ticker": "ALSN",
    "organization": "Allison Transmission Holdings",
    "industry": "Machinery",
    "marketCap": "3.74B"
  },
  {
    "ticker": "ALT",
    "organization": "Altimmune",
    "industry": "Biotechnology",
    "marketCap": "456.83M"
  },
  {
    "ticker": "ALTG",
    "organization": "Alta Equipment Group",
    "industry": "Trading Companies & Distributors",
    "marketCap": "445.64M"
  },
  {
    "ticker": "ALTM",
    "organization": "Altus Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ALTO",
    "organization": "Alto Ingredients",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ALTR",
    "organization": "Altair Engineering",
    "industry": "Software",
    "marketCap": "5.43B"
  },
  {
    "ticker": "ALTU",
    "organization": "Altitude Acquisition",
    "industry": "Shell Companies",
    "marketCap": "369.00M"
  },
  {
    "ticker": "ALV",
    "organization": "Autoliv",
    "industry": "Auto Components",
    "marketCap": "7.43B"
  },
  {
    "ticker": "ALVR",
    "organization": "AlloVir",
    "industry": "Biotechnology",
    "marketCap": "1.63B"
  },
  {
    "ticker": "ALX",
    "organization": "Alexander's",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.33B"
  },
  {
    "ticker": "ALXO",
    "organization": "ALX Oncology Holdings",
    "industry": "Biotechnology",
    "marketCap": "2.98B"
  },
  {
    "ticker": "ALYA",
    "organization": "Alithya Group",
    "industry": "IT Services",
    "marketCap": "215.57M"
  },
  {
    "ticker": "ALZN",
    "organization": "Alzamend Neuro",
    "industry": "Biotechnology",
    "marketCap": "237.97M"
  },
  {
    "ticker": "AM",
    "organization": "Antero Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "AMAL",
    "organization": "Amalgamated Bank",
    "industry": "Banks",
    "marketCap": "498.46M"
  },
  {
    "ticker": "AMAM",
    "organization": "Ambrx Biopharma",
    "industry": "Biotechnology",
    "marketCap": "513.06M"
  },
  {
    "ticker": "AMAO",
    "organization": "American Acquisition Opportunity",
    "industry": "Shell Companies",
    "marketCap": "133.19M"
  },
  {
    "ticker": "AMAT",
    "organization": "Applied Materials",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "114.92B"
  },
  {
    "ticker": "AMBA",
    "organization": "Ambarella",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "5.64B"
  },
  {
    "ticker": "AMBC",
    "organization": "Ambac Financial Group",
    "industry": "Insurance",
    "marketCap": "677.54M"
  },
  {
    "ticker": "AMBO",
    "organization": "Ambow Education Holding",
    "industry": "Diversified Consumer Services",
    "marketCap": "34.29M"
  },
  {
    "ticker": "AMBP",
    "organization": "Ardagh MP USA",
    "industry": "Packaging & Containers",
    "marketCap": "5.98B"
  },
  {
    "ticker": "AMC",
    "organization": "AMC Entertainment",
    "industry": "Entertainment",
    "marketCap": "19.84B"
  },
  {
    "ticker": "AMCI",
    "organization": "AMCI Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "181.50M"
  },
  {
    "ticker": "AMCR",
    "organization": "Amcor",
    "industry": "Containers & Packaging",
    "marketCap": "17.94B"
  },
  {
    "ticker": "AMCX",
    "organization": "AMC Networks",
    "industry": "Media",
    "marketCap": "1.96B"
  },
  {
    "ticker": "AMD",
    "organization": "Advanced Micro Devices",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "124.27B"
  },
  {
    "ticker": "AME",
    "organization": "AMETEK",
    "industry": " Inc.",
    "marketCap": "Electrical Equipment"
  },
  {
    "ticker": "AMED",
    "organization": "Amedisys",
    "industry": "Health Care Providers & Services",
    "marketCap": "4.74B"
  },
  {
    "ticker": "AMEH",
    "organization": "Apollo Medical Holdings",
    "industry": "Health Care Providers & Services",
    "marketCap": "3.89B"
  },
  {
    "ticker": "AMG",
    "organization": "Affiliated Managers Group",
    "industry": "Capital Markets",
    "marketCap": "6.32B"
  },
  {
    "ticker": "AMGN",
    "organization": "Amgen",
    "industry": "Biotechnology",
    "marketCap": "121.47B"
  },
  {
    "ticker": "AMH",
    "organization": "American Homes 4 Rent",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "12.46B"
  },
  {
    "ticker": "AMK",
    "organization": "AssetMark Financial",
    "industry": "Capital Markets",
    "marketCap": "1.84B"
  },
  {
    "ticker": "AMKR",
    "organization": "Amkor Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "6.10B"
  },
  {
    "ticker": "AMN",
    "organization": "AMN Healthcare Services",
    "industry": "Health Care Providers & Services",
    "marketCap": "5.34B"
  },
  {
    "ticker": "AMNB",
    "organization": "American National Bankshares",
    "industry": "Banks",
    "marketCap": "367.27M"
  },
  {
    "ticker": "AMOT",
    "organization": "Allied Motion Technologies",
    "industry": "Electrical Equipment",
    "marketCap": "463.52M"
  },
  {
    "ticker": "AMOV",
    "organization": "America Movil",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "59.49B"
  },
  {
    "ticker": "AMP",
    "organization": "Ameriprise Financial",
    "industry": "Capital Markets",
    "marketCap": "30.04B"
  },
  {
    "ticker": "AMPE",
    "organization": "Ampio Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "324.74M"
  },
  {
    "ticker": "AMPG",
    "organization": "AmpliTech Group",
    "industry": "Communication Equipment",
    "marketCap": "33.19M"
  },
  {
    "ticker": "AMPH",
    "organization": "Amphastar Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "929.41M"
  },
  {
    "ticker": "AMPI",
    "organization": "Advanced Merger Partners",
    "industry": "Shell Companies",
    "marketCap": "349.31M"
  },
  {
    "ticker": "AMPL",
    "organization": "Amplitude",
    "industry": "Software-Application",
    "marketCap": "5.58B"
  },
  {
    "ticker": "AMPY",
    "organization": "Amplify Energy",
    "industry": "Oil & Gas E&P",
    "marketCap": "213.52M"
  },
  {
    "ticker": "AMR",
    "organization": "Alpha Metallurgical Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "AMRC",
    "organization": "Ameresco",
    "industry": "Construction & Engineering",
    "marketCap": "3.13B"
  },
  {
    "ticker": "AMRK",
    "organization": "A-Mark Precious Metals",
    "industry": "Diversified Financial Services",
    "marketCap": "710.44M"
  },
  {
    "ticker": "AMRN",
    "organization": "Amarin",
    "industry": "Biotechnology",
    "marketCap": "2.02B"
  },
  {
    "ticker": "AMRS",
    "organization": "Amyris",
    "industry": "Chemicals",
    "marketCap": "4.23B"
  },
  {
    "ticker": "AMRX",
    "organization": "Amneal Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "827.00M"
  },
  {
    "ticker": "AMS",
    "organization": "American Shared Hospital Services",
    "industry": "Health Care Providers & Services",
    "marketCap": "16.20M"
  },
  {
    "ticker": "AMSC",
    "organization": "American Superconductor",
    "industry": "Electrical Equipment",
    "marketCap": "415.29M"
  },
  {
    "ticker": "AMSF",
    "organization": "AMERISAFE",
    "industry": " Inc.",
    "marketCap": "Insurance"
  },
  {
    "ticker": "AMST",
    "organization": "Amesite",
    "industry": "Software-Application",
    "marketCap": "39.78M"
  },
  {
    "ticker": "AMSWA",
    "organization": "American Software",
    "industry": "Software",
    "marketCap": "808.24M"
  },
  {
    "ticker": "AMT",
    "organization": "American Tower",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "120.80B"
  },
  {
    "ticker": "AMTB",
    "organization": "Amerant Bancorp",
    "industry": "Banks",
    "marketCap": "941.94M"
  },
  {
    "ticker": "AMTBB",
    "organization": "Amerant Bancorp",
    "industry": "Banks",
    "marketCap": "932.69M"
  },
  {
    "ticker": "AMTI",
    "organization": "Applied Molecular Transport",
    "industry": "Biotechnology",
    "marketCap": "994.05M"
  },
  {
    "ticker": "AMTX",
    "organization": "Aemetis",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "AMWD",
    "organization": "American Woodmark",
    "industry": "Building Products",
    "marketCap": "1.11B"
  },
  {
    "ticker": "AMWL",
    "organization": "Amwell",
    "industry": "Health Information Services",
    "marketCap": "2.21B"
  },
  {
    "ticker": "AMX",
    "organization": "America Movil",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "58.36B"
  },
  {
    "ticker": "AMYT",
    "organization": "Amryt Pharma",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "762.44M"
  },
  {
    "ticker": "AMZN",
    "organization": "Amazon",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1"
  },
  {
    "ticker": "AN",
    "organization": "AutoNation",
    "industry": "Specialty Retail",
    "marketCap": "8.72B"
  },
  {
    "ticker": "ANAB",
    "organization": "AnaptysBio",
    "industry": "Biotechnology",
    "marketCap": "735.76M"
  },
  {
    "ticker": "ANAC",
    "organization": "Arctos NorthStar Acquisition",
    "industry": "Biotechnology",
    "marketCap": "308.98M"
  },
  {
    "ticker": "ANAT",
    "organization": "American National Insurance",
    "industry": "Insurance",
    "marketCap": "5.10B"
  },
  {
    "ticker": "ANDE",
    "organization": "Andersons",
    "industry": "Food & Staples Retailing",
    "marketCap": "1.04B"
  },
  {
    "ticker": "ANEB",
    "organization": "Anebulo Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "158.43M"
  },
  {
    "ticker": "ANET",
    "organization": "Arista Networks",
    "industry": "Communications Equipment",
    "marketCap": "26.89B"
  },
  {
    "ticker": "ANF",
    "organization": "Abercrombie & Fitch",
    "industry": "Specialty Retail",
    "marketCap": "2.29B"
  },
  {
    "ticker": "ANGI",
    "organization": "ANGI Homeservices",
    "industry": "Interactive Media & Services",
    "marketCap": "6.22B"
  },
  {
    "ticker": "ANGN",
    "organization": "Angion Biomedica",
    "industry": "Biotechnology",
    "marketCap": "289.94M"
  },
  {
    "ticker": "ANGO",
    "organization": "AngioDynamics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.00B"
  },
  {
    "ticker": "ANIK",
    "organization": "Anika Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "602.95M"
  },
  {
    "ticker": "ANIP",
    "organization": "ANI Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "418.86M"
  },
  {
    "ticker": "ANIX",
    "organization": "Anixa Biosciences",
    "industry": "Biotechnology",
    "marketCap": "142.26M"
  },
  {
    "ticker": "ANNX",
    "organization": "Annexon Biosciences",
    "industry": "Biotechnology",
    "marketCap": "713.36M"
  },
  {
    "ticker": "ANPC",
    "organization": "AnPac Bio-Medical Science",
    "industry": "Biotechnology",
    "marketCap": "42.34M"
  },
  {
    "ticker": "ANSS",
    "organization": "ANSYS",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "ANTE",
    "organization": "AirNet Technology",
    "industry": "Media",
    "marketCap": "45.56M"
  },
  {
    "ticker": "ANTM",
    "organization": "Anthem",
    "industry": "Health Care Providers & Services",
    "marketCap": "91.66B"
  },
  {
    "ticker": "ANVS",
    "organization": "Annovis Bio",
    "industry": "Biotechnology",
    "marketCap": "249.22M"
  },
  {
    "ticker": "ANY",
    "organization": "Sphere 3D",
    "industry": "Software",
    "marketCap": "351.09M"
  },
  {
    "ticker": "ANZU",
    "organization": "Anzu Special Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "515.31M"
  },
  {
    "ticker": "AOMR",
    "organization": "Angel Oak Mortgage",
    "industry": "REIT-Mortgage",
    "marketCap": "433.04M"
  },
  {
    "ticker": "AON",
    "organization": "Aon plc",
    "industry": "Insurance",
    "marketCap": "65.20B"
  },
  {
    "ticker": "AOS",
    "organization": "A. O. Smith",
    "industry": "Building Products",
    "marketCap": "9.67B"
  },
  {
    "ticker": "AOSL",
    "organization": "Alpha & Omega Semiconductor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "840.40M"
  },
  {
    "ticker": "AOUT",
    "organization": "American Outdoor Brands",
    "industry": "Leisure Products",
    "marketCap": "346.40M"
  },
  {
    "ticker": "AP",
    "organization": "Ampco-Pittsburgh",
    "industry": "Metals & Mining",
    "marketCap": "89.74M"
  },
  {
    "ticker": "APA",
    "organization": "Apache",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "APAC",
    "organization": "Stonebridge Acquisition",
    "industry": "Shell Companies",
    "marketCap": "246.50M"
  },
  {
    "ticker": "APAM",
    "organization": "Artisan Partners Asset Management",
    "industry": "Capital Markets",
    "marketCap": "3.95B"
  },
  {
    "ticker": "APD",
    "organization": "Air Products & Chemicals",
    "industry": "Chemicals",
    "marketCap": "56.69B"
  },
  {
    "ticker": "APDN",
    "organization": "Applied DNA Sciences",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "APEI",
    "organization": "American Public Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "488.67M"
  },
  {
    "ticker": "APEN",
    "organization": "Apollo Endosurgery",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "266.08M"
  },
  {
    "ticker": "APG",
    "organization": "APi Group",
    "industry": "Construction & Engineering",
    "marketCap": "4.57B"
  },
  {
    "ticker": "APGB",
    "organization": "Apollo Strategic Growth Capital II",
    "industry": "Shell Companies",
    "marketCap": "842.66M"
  },
  {
    "ticker": "APH",
    "organization": "Amphenol",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "API",
    "organization": "Agora",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "APLE",
    "organization": "Apple Hospitality REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.68B"
  },
  {
    "ticker": "APLS",
    "organization": "Apellis Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.93B"
  },
  {
    "ticker": "APLT",
    "organization": "Applied Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "459.94M"
  },
  {
    "ticker": "APM",
    "organization": "Aptorum Group",
    "industry": "Biotechnology",
    "marketCap": "91.16M"
  },
  {
    "ticker": "APO",
    "organization": "Apollo Global Management",
    "industry": "Capital Markets",
    "marketCap": "26.78B"
  },
  {
    "ticker": "APOG",
    "organization": "Apogee Enterprises",
    "industry": "Building Products",
    "marketCap": "963.89M"
  },
  {
    "ticker": "APOP",
    "organization": "Cellect Biotechnology",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "17.92M"
  },
  {
    "ticker": "APP",
    "organization": "Applovin",
    "industry": "Software-Application",
    "marketCap": "27.40B"
  },
  {
    "ticker": "APPF",
    "organization": "AppFolio",
    "industry": "Software",
    "marketCap": "4.15B"
  },
  {
    "ticker": "APPH",
    "organization": "AppHarvest",
    "industry": "Farm Products",
    "marketCap": "638.80M"
  },
  {
    "ticker": "APPN",
    "organization": "Appian Corporation",
    "industry": "Software",
    "marketCap": "6.39B"
  },
  {
    "ticker": "APPS",
    "organization": "Digital Turbine",
    "industry": "Software",
    "marketCap": "6.60B"
  },
  {
    "ticker": "APR",
    "organization": "Apria",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "1.25B"
  },
  {
    "ticker": "APRE",
    "organization": "Aprea Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "103.39M"
  },
  {
    "ticker": "APRN",
    "organization": "Blue Apron",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "190.51M"
  },
  {
    "ticker": "APSG",
    "organization": "Apollo Strategic Growth Capital",
    "industry": "Shell Companies",
    "marketCap": "997.02M"
  },
  {
    "ticker": "APT",
    "organization": "Alpha Pro Tech",
    "industry": "Building Products",
    "marketCap": "88.56M"
  },
  {
    "ticker": "APTM",
    "organization": "Alpha Partners Technology Merger",
    "industry": "Shell Companies",
    "marketCap": "310.24M"
  },
  {
    "ticker": "APTO",
    "organization": "Aptose Biosciences",
    "industry": "Biotechnology",
    "marketCap": "201.02M"
  },
  {
    "ticker": "APTS",
    "organization": "Preferred Apartment Communities",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "642.65M"
  },
  {
    "ticker": "APTV",
    "organization": "Aptiv",
    "industry": "Auto Components",
    "marketCap": "41.09B"
  },
  {
    "ticker": "APTX",
    "organization": "Aptinyx",
    "industry": "Biotechnology",
    "marketCap": "156.42M"
  },
  {
    "ticker": "APVO",
    "organization": "Aptevo Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "76.02M"
  },
  {
    "ticker": "APWC",
    "organization": "Asia Pacific Wire & Cable",
    "industry": "Electrical Equipment",
    "marketCap": "43.67M"
  },
  {
    "ticker": "APYX",
    "organization": "Apyx Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "473.31M"
  },
  {
    "ticker": "AQB",
    "organization": "AquaBounty Technologies",
    "industry": "Biotechnology",
    "marketCap": "283.39M"
  },
  {
    "ticker": "AQMS",
    "organization": "Aqua Metals",
    "industry": "Commercial Services & Supplies",
    "marketCap": "143.08M"
  },
  {
    "ticker": "AQN",
    "organization": "Algonquin Power & Utilities",
    "industry": "Multi-Utilities",
    "marketCap": "9.12B"
  },
  {
    "ticker": "AQST",
    "organization": "Aquestive Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "166.05M"
  },
  {
    "ticker": "AQUA",
    "organization": "Evoqua Water Technologies",
    "industry": "Machinery",
    "marketCap": "4.59B"
  },
  {
    "ticker": "AR",
    "organization": "Antero Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ARAV",
    "organization": "Aravive",
    "industry": "Biotechnology",
    "marketCap": "76.23M"
  },
  {
    "ticker": "ARAY",
    "organization": "Accuray",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "359.68M"
  },
  {
    "ticker": "ARBG",
    "organization": "Aequi Acquisition",
    "industry": "Shell Companies",
    "marketCap": "281.03M"
  },
  {
    "ticker": "ARBK",
    "organization": "Argo Blockchain",
    "industry": "Capital Markets",
    "marketCap": "753.32M"
  },
  {
    "ticker": "ARC",
    "organization": "ARC Document Solutions",
    "industry": "Commercial Services & Supplies",
    "marketCap": "128.68M"
  },
  {
    "ticker": "ARCB",
    "organization": "ArcBest",
    "industry": "Road & Rail",
    "marketCap": "2.16B"
  },
  {
    "ticker": "ARCC",
    "organization": "Ares Capital",
    "industry": "Capital Markets",
    "marketCap": "9.44B"
  },
  {
    "ticker": "ARCE",
    "organization": "Arco Platform",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.24B"
  },
  {
    "ticker": "ARCH",
    "organization": "Arch Coal",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ARCO",
    "organization": "Arcos Dorados Holdings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "ARCT",
    "organization": "Arcturus Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.14B"
  },
  {
    "ticker": "ARD",
    "organization": "Ardagh Group SA",
    "industry": "Containers & Packaging",
    "marketCap": "5.82B"
  },
  {
    "ticker": "ARDS",
    "organization": "Aridis Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "52.88M"
  },
  {
    "ticker": "ARDX",
    "organization": "Ardelyx",
    "industry": "Biotechnology",
    "marketCap": "134.05M"
  },
  {
    "ticker": "ARE",
    "organization": "Alexandria Real Estate Equities",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "29.11B"
  },
  {
    "ticker": "AREC",
    "organization": "American Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ARES",
    "organization": "Ares Management",
    "industry": "Capital Markets",
    "marketCap": "12.17B"
  },
  {
    "ticker": "ARGO",
    "organization": "Argo Group International",
    "industry": "Insurance",
    "marketCap": "1.84B"
  },
  {
    "ticker": "ARGX",
    "organization": "Argenx SE",
    "industry": "Biotechnology",
    "marketCap": "15.49B"
  },
  {
    "ticker": "ARI",
    "organization": "Apollo Commercial Real Estate Finance",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "2.09B"
  },
  {
    "ticker": "ARKO",
    "organization": "ARKO",
    "industry": "Grocery Stores",
    "marketCap": "1.27B"
  },
  {
    "ticker": "ARKR",
    "organization": "Ark Restaurants",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "ARL",
    "organization": "American Realty Investors",
    "industry": "Real Estate Management & Development",
    "marketCap": "211.75M"
  },
  {
    "ticker": "ARLO",
    "organization": "Arlo Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ARLP",
    "organization": "Alliance Resource Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ARMK",
    "organization": "Aramark",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "ARMP",
    "organization": "Armata Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "90.27M"
  },
  {
    "ticker": "ARNA",
    "organization": "Arena Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "3.63B"
  },
  {
    "ticker": "ARNC",
    "organization": "Arconic",
    "industry": "Aerospace & Defense",
    "marketCap": "3.48B"
  },
  {
    "ticker": "AROC",
    "organization": "Archrock",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.28B"
  },
  {
    "ticker": "AROW",
    "organization": "Arrow Financial",
    "industry": "Banks",
    "marketCap": "569.36M"
  },
  {
    "ticker": "ARQQ",
    "organization": "Arqit Quantum",
    "industry": "Software-Infrastructure",
    "marketCap": "1.98B"
  },
  {
    "ticker": "ARQT",
    "organization": "Arcutis Biotherapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.27B"
  },
  {
    "ticker": "ARR",
    "organization": "ARMOUR Residential REIT",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "907.85M"
  },
  {
    "ticker": "ARRW",
    "organization": "Arrowroot Acquisition",
    "industry": "Shell Companies",
    "marketCap": "347.52M"
  },
  {
    "ticker": "ARRY",
    "organization": "Array Technologies",
    "industry": "Solar",
    "marketCap": "2.35B"
  },
  {
    "ticker": "ARTA",
    "organization": "Artisan Acquisition",
    "industry": "Shell Companies",
    "marketCap": "387.27M"
  },
  {
    "ticker": "ARTL",
    "organization": "Artelo Biosciences",
    "industry": "Pharmaceuticals",
    "marketCap": "19.11M"
  },
  {
    "ticker": "ARTNA",
    "organization": "Artesian Resources",
    "industry": "Water Utilities",
    "marketCap": "357.57M"
  },
  {
    "ticker": "ARTW",
    "organization": "Art's-Way Manufacturing",
    "industry": "Machinery",
    "marketCap": "16.15M"
  },
  {
    "ticker": "ARVL",
    "organization": "Arrival",
    "industry": "Auto Manufacturers",
    "marketCap": "8.20B"
  },
  {
    "ticker": "ARVN",
    "organization": "Arvinas",
    "industry": "Pharmaceuticals",
    "marketCap": "4.49B"
  },
  {
    "ticker": "ARW",
    "organization": "Arrow Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ARWR",
    "organization": "Arrowhead Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "6.40B"
  },
  {
    "ticker": "ARYD",
    "organization": "ARYA Sciences Acquisition IV",
    "industry": "Shell Companies",
    "marketCap": "197.05M"
  },
  {
    "ticker": "ARYE",
    "organization": "Arya Sciences Acquisition V",
    "industry": "Shell Companies",
    "marketCap": "164.93M"
  },
  {
    "ticker": "ASA",
    "organization": "ASA Gold And Precious Metals",
    "industry": "Capital Markets",
    "marketCap": "364.19M"
  },
  {
    "ticker": "ASAI",
    "organization": "Sendas Distribuidora",
    "industry": "Food & Staples Retailing",
    "marketCap": "9.81B"
  },
  {
    "ticker": "ASAN",
    "organization": "Asana",
    "industry": "Software",
    "marketCap": "19.10B"
  },
  {
    "ticker": "ASAQ",
    "organization": "Atlantic Street Acquisition",
    "industry": "Shell Companies",
    "marketCap": "306.25M"
  },
  {
    "ticker": "ASAX",
    "organization": "Astrea Acquisition",
    "industry": "Shell Companies",
    "marketCap": "218.28M"
  },
  {
    "ticker": "ASB",
    "organization": "Associated Banc-Corp",
    "industry": "Banks",
    "marketCap": "3.31B"
  },
  {
    "ticker": "ASC",
    "organization": "Ardmore Shipping",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ASGN",
    "organization": "ASGN Incorporated",
    "industry": "Professional Services",
    "marketCap": "6.06B"
  },
  {
    "ticker": "ASH",
    "organization": "Ashland",
    "industry": "Chemicals",
    "marketCap": "5.54B"
  },
  {
    "ticker": "ASIX",
    "organization": "AdvanSix",
    "industry": "Chemicals",
    "marketCap": "1.15B"
  },
  {
    "ticker": "ASLE",
    "organization": "AerSale",
    "industry": "Airports & Air Services",
    "marketCap": "731.86M"
  },
  {
    "ticker": "ASLN",
    "organization": "ASLAN Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "123.22M"
  },
  {
    "ticker": "ASM",
    "organization": "Avino Silver & Gold Mines",
    "industry": "Metals & Mining",
    "marketCap": "84.37M"
  },
  {
    "ticker": "ASMB",
    "organization": "Assembly Biosciences",
    "industry": "Biotechnology",
    "marketCap": "154.03M"
  },
  {
    "ticker": "ASML",
    "organization": "ASML Holding",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "308.29B"
  },
  {
    "ticker": "ASND",
    "organization": "Ascendis Pharma A/S",
    "industry": "Biotechnology",
    "marketCap": "9.14B"
  },
  {
    "ticker": "ASO",
    "organization": "Academy Sports and Outdoors",
    "industry": "Specialty Retail",
    "marketCap": "3.58B"
  },
  {
    "ticker": "ASPA",
    "organization": "Abri SPAC I",
    "industry": "Shell Companies",
    "marketCap": "64.22M"
  },
  {
    "ticker": "ASPC",
    "organization": "Alpha Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "279.45M"
  },
  {
    "ticker": "ASPN",
    "organization": "Aspen Aerogels",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.57B"
  },
  {
    "ticker": "ASPS",
    "organization": "Altisource Portfolio Solutions",
    "industry": "Real Estate Management & Development",
    "marketCap": "159.60M"
  },
  {
    "ticker": "ASPU",
    "organization": "Aspen Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "137.37M"
  },
  {
    "ticker": "ASR",
    "organization": "Grupo Aeroportuario del Sureste",
    "industry": "Transportation Infrastructure",
    "marketCap": "5.71B"
  },
  {
    "ticker": "ASRT",
    "organization": "Assertio Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "39.36M"
  },
  {
    "ticker": "ASRV",
    "organization": "AmeriServ Financial",
    "industry": "Banks",
    "marketCap": "66.25M"
  },
  {
    "ticker": "ASTC",
    "organization": "Astrotech",
    "industry": "Aerospace & Defense",
    "marketCap": "51.92M"
  },
  {
    "ticker": "ASTE",
    "organization": "Astec Industries",
    "industry": "Machinery",
    "marketCap": "1.25B"
  },
  {
    "ticker": "ASTR",
    "organization": "Astra Space",
    "industry": "Aerospace & Defense",
    "marketCap": "2.20B"
  },
  {
    "ticker": "ASTS",
    "organization": "AST SpaceMobile",
    "industry": "Telecom Services",
    "marketCap": "548.33M"
  },
  {
    "ticker": "ASUR",
    "organization": "Asure Software",
    "industry": "Software",
    "marketCap": "171.18M"
  },
  {
    "ticker": "ASX",
    "organization": "ASE Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "17.00B"
  },
  {
    "ticker": "ASXC",
    "organization": "Asensus Surgical",
    "industry": "Medical Devices",
    "marketCap": "419.74M"
  },
  {
    "ticker": "ASYS",
    "organization": "Amtech Systems",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "163.92M"
  },
  {
    "ticker": "ASZ",
    "organization": "Austerlitz Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "1.92B"
  },
  {
    "ticker": "ATA",
    "organization": "Americas Technology Acquisition",
    "industry": "Shell Companies",
    "marketCap": "145.73M"
  },
  {
    "ticker": "ATAI",
    "organization": "ATAI Life Sciences",
    "industry": "Biotechnology",
    "marketCap": "2.15B"
  },
  {
    "ticker": "ATAQ",
    "organization": "Altimar Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "189.02M"
  },
  {
    "ticker": "ATAX",
    "organization": "America First Multifamily Investors",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "398.88M"
  },
  {
    "ticker": "ATC",
    "organization": "Atotech",
    "industry": "Electronic Components",
    "marketCap": "4.69B"
  },
  {
    "ticker": "ATCO",
    "organization": "Atlas Corp.",
    "industry": "Marine",
    "marketCap": "3.76B"
  },
  {
    "ticker": "ATCX",
    "organization": "Atlas Technical Consultants",
    "industry": "Engineering & Construction",
    "marketCap": "335.58M"
  },
  {
    "ticker": "ATEC",
    "organization": "Alphatec Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.26B"
  },
  {
    "ticker": "ATEN",
    "organization": "A10 Networks",
    "industry": "Software",
    "marketCap": "1.04B"
  },
  {
    "ticker": "ATER",
    "organization": "Aterian",
    "industry": "Consumer Electronics",
    "marketCap": "518.90M"
  },
  {
    "ticker": "ATEX",
    "organization": "Anterix",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "1.14B"
  },
  {
    "ticker": "ATGE",
    "organization": "Adtalem Global Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.86B"
  },
  {
    "ticker": "ATH",
    "organization": "Athene Holding",
    "industry": "Insurance",
    "marketCap": "13.24B"
  },
  {
    "ticker": "ATHA",
    "organization": "Athira Pharma",
    "industry": "Biotechnology",
    "marketCap": "349.84M"
  },
  {
    "ticker": "ATHE",
    "organization": "Alterity Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "53.86M"
  },
  {
    "ticker": "ATHM",
    "organization": "Autohome",
    "industry": "Interactive Media & Services",
    "marketCap": "5.90B"
  },
  {
    "ticker": "ATHN",
    "organization": "Athena Technology Acquisition",
    "industry": "Health Care Technology",
    "marketCap": "5.56B"
  },
  {
    "ticker": "ATHX",
    "organization": "Athersys",
    "industry": "Biotechnology",
    "marketCap": "303.11M"
  },
  {
    "ticker": "ATI",
    "organization": "Allegheny Technologies",
    "industry": "Metals & Mining",
    "marketCap": "2.21B"
  },
  {
    "ticker": "ATIF",
    "organization": "ATIF Holdings",
    "industry": "Professional Services",
    "marketCap": "38.29M"
  },
  {
    "ticker": "ATIP",
    "organization": "ATI Physical Therapy",
    "industry": "Medical Care Facilities",
    "marketCap": "747.24M"
  },
  {
    "ticker": "ATKR",
    "organization": "Atkore International Group",
    "industry": "Electrical Equipment",
    "marketCap": "4.00B"
  },
  {
    "ticker": "ATLC",
    "organization": "Atlanticus Holdings",
    "industry": "Consumer Finance",
    "marketCap": "877.82M"
  },
  {
    "ticker": "ATLO",
    "organization": "Ames National",
    "industry": "Banks",
    "marketCap": "212.47M"
  },
  {
    "ticker": "ATMR",
    "organization": "Altimar Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "426.08M"
  },
  {
    "ticker": "ATNF",
    "organization": "180 Life Sciences",
    "industry": "Biotechnology",
    "marketCap": "178.63M"
  },
  {
    "ticker": "ATNI",
    "organization": "ATN International",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "729.91M"
  },
  {
    "ticker": "ATNM",
    "organization": "Actinium Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "187.34M"
  },
  {
    "ticker": "ATNX",
    "organization": "Athenex",
    "industry": "Biotechnology",
    "marketCap": "318.09M"
  },
  {
    "ticker": "ATO",
    "organization": "Atmos Energy",
    "industry": "Gas Utilities",
    "marketCap": "11.61B"
  },
  {
    "ticker": "ATOM",
    "organization": "Atomera",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "528.21M"
  },
  {
    "ticker": "ATOS",
    "organization": "Atossa Therapeutics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "403.93M"
  },
  {
    "ticker": "ATR",
    "organization": "AptarGroup",
    "industry": "Containers & Packaging",
    "marketCap": "8.01B"
  },
  {
    "ticker": "ATRA",
    "organization": "Atara Biotherapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.48B"
  },
  {
    "ticker": "ATRC",
    "organization": "AtriCure",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.19B"
  },
  {
    "ticker": "ATRI",
    "organization": "Atrion Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.26B"
  },
  {
    "ticker": "ATRO",
    "organization": "Astronics Corporation",
    "industry": "Aerospace & Defense",
    "marketCap": "459.89M"
  },
  {
    "ticker": "ATRS",
    "organization": "Antares Pharma",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "618.68M"
  },
  {
    "ticker": "ATSG",
    "organization": "Air Transport Services Group",
    "industry": "Air Freight & Logistics",
    "marketCap": "1.92B"
  },
  {
    "ticker": "ATTO",
    "organization": "Atento",
    "industry": "Commercial Services & Supplies",
    "marketCap": "423.90M"
  },
  {
    "ticker": "ATUS",
    "organization": "Altice USA",
    "industry": "Media",
    "marketCap": "9.64B"
  },
  {
    "ticker": "ATVC",
    "organization": "Tribe Capital Growth I",
    "industry": "Shell Companies",
    "marketCap": "335.00M"
  },
  {
    "ticker": "ATVI",
    "organization": "Activision Blizzard",
    "industry": "Entertainment",
    "marketCap": "60.62B"
  },
  {
    "ticker": "ATXI",
    "organization": "Avenue Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "24.95M"
  },
  {
    "ticker": "ATXS",
    "organization": "Astria Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "111.06M"
  },
  {
    "ticker": "ATY",
    "organization": "AcuityAds",
    "industry": "Interactive Media & Services",
    "marketCap": "398.36M"
  },
  {
    "ticker": "AU",
    "organization": "AngloGold Ashanti",
    "industry": "Metals & Mining",
    "marketCap": "6.77B"
  },
  {
    "ticker": "AUB",
    "organization": "Atlantic Union Bankshares",
    "industry": "Banks",
    "marketCap": "2.91B"
  },
  {
    "ticker": "AUBN",
    "organization": "Auburn National Bancorporation",
    "industry": "Banks",
    "marketCap": "119.74M"
  },
  {
    "ticker": "AUD",
    "organization": "Audacy",
    "industry": "Media",
    "marketCap": "554.42M"
  },
  {
    "ticker": "AUDC",
    "organization": "AudioCodes",
    "industry": "Communications Equipment",
    "marketCap": "1.08B"
  },
  {
    "ticker": "AUID",
    "organization": "Ipsidy",
    "industry": "Software-Infrastructure",
    "marketCap": "276.35M"
  },
  {
    "ticker": "AUMN",
    "organization": "Golden Minerals",
    "industry": "Metals & Mining",
    "marketCap": "70.32M"
  },
  {
    "ticker": "AUPH",
    "organization": "Aurinia Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.78B"
  },
  {
    "ticker": "AURC",
    "organization": "Aurora Acquisition",
    "industry": "Shell Companies",
    "marketCap": "345.42M"
  },
  {
    "ticker": "AUS",
    "organization": "Austerlitz Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "983.74M"
  },
  {
    "ticker": "AUTL",
    "organization": "Autolus Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "487.38M"
  },
  {
    "ticker": "AUTO",
    "organization": "AutoWeb",
    "industry": "Interactive Media & Services",
    "marketCap": "36.63M"
  },
  {
    "ticker": "AUUD",
    "organization": "Auddia",
    "industry": "Software-Application",
    "marketCap": "29.34M"
  },
  {
    "ticker": "AUVI",
    "organization": "Applied UV",
    "industry": "Building Products",
    "marketCap": "66.85M"
  },
  {
    "ticker": "AUY",
    "organization": "Yamana Gold",
    "industry": "Metals & Mining",
    "marketCap": "3.75B"
  },
  {
    "ticker": "AVA",
    "organization": "Avista",
    "industry": "Multi-Utilities",
    "marketCap": "2.74B"
  },
  {
    "ticker": "AVAH",
    "organization": "Aveanna Healthcare Holdings",
    "industry": "Medical Care Facilities",
    "marketCap": "1.47B"
  },
  {
    "ticker": "AVAL",
    "organization": "Grupo Aval Acciones y Valores",
    "industry": "Banks",
    "marketCap": "6.54B"
  },
  {
    "ticker": "AVAN",
    "organization": "Avanti Acquisition",
    "industry": "Shell Companies",
    "marketCap": "733.73M"
  },
  {
    "ticker": "AVAV",
    "organization": "AeroVironment",
    "industry": "Aerospace & Defense",
    "marketCap": "2.14B"
  },
  {
    "ticker": "AVB",
    "organization": "AvalonBay Communities",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "31.18B"
  },
  {
    "ticker": "AVCO",
    "organization": "Avalon GloboCare",
    "industry": "Health Care Providers & Services",
    "marketCap": "77.29M"
  },
  {
    "ticker": "AVCT",
    "organization": "American Virtual Cloud Technologies",
    "industry": "IT Services",
    "marketCap": "161.72M"
  },
  {
    "ticker": "AVD",
    "organization": "American Vanguard",
    "industry": "Chemicals",
    "marketCap": "476.45M"
  },
  {
    "ticker": "AVDL",
    "organization": "Avadel Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "571.90M"
  },
  {
    "ticker": "AVEO",
    "organization": "AVEO Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "212.43M"
  },
  {
    "ticker": "AVGO",
    "organization": "Broadcom",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "199.60B"
  },
  {
    "ticker": "AVGR",
    "organization": "Avinger",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "70.56M"
  },
  {
    "ticker": "AVID",
    "organization": "Avid Technology",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "AVIR",
    "organization": "Atea Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "3.50B"
  },
  {
    "ticker": "AVLR",
    "organization": "Avalara",
    "industry": "Software",
    "marketCap": "15.24B"
  },
  {
    "ticker": "AVNS",
    "organization": "Avanos Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.51B"
  },
  {
    "ticker": "AVNT",
    "organization": "Avient",
    "industry": "Chemicals",
    "marketCap": "4.23B"
  },
  {
    "ticker": "AVNW",
    "organization": "Aviat Networks",
    "industry": "Communications Equipment",
    "marketCap": "375.89M"
  },
  {
    "ticker": "AVO",
    "organization": "Mission Produce",
    "industry": "Farm Products",
    "marketCap": "1.31B"
  },
  {
    "ticker": "AVPT",
    "organization": "AvePoint",
    "industry": "Software-Infrastructure",
    "marketCap": "1.47B"
  },
  {
    "ticker": "AVRO",
    "organization": "Avrobio",
    "industry": "Biotechnology",
    "marketCap": "246.03M"
  },
  {
    "ticker": "AVT",
    "organization": "Avnet",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "AVTE",
    "organization": "Aerovate Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "461.47M"
  },
  {
    "ticker": "AVTR",
    "organization": "Avantor",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "25.26B"
  },
  {
    "ticker": "AVTX",
    "organization": "Avalo Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "255.52M"
  },
  {
    "ticker": "AVXL",
    "organization": "Anavex Life Sciences",
    "industry": "Biotechnology",
    "marketCap": "1.36B"
  },
  {
    "ticker": "AVY",
    "organization": "Avery Dennison",
    "industry": "Containers & Packaging",
    "marketCap": "16.99B"
  },
  {
    "ticker": "AVYA",
    "organization": "Avaya Holdings",
    "industry": "Software",
    "marketCap": "1.73B"
  },
  {
    "ticker": "AWH",
    "organization": "Aspira Women's Health",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "357.49M"
  },
  {
    "ticker": "AWI",
    "organization": "Armstrong World Industries",
    "industry": "Building Products",
    "marketCap": "4.62B"
  },
  {
    "ticker": "AWK",
    "organization": "American Water Works",
    "industry": "Water Utilities",
    "marketCap": "30.79B"
  },
  {
    "ticker": "AWR",
    "organization": "American States Water",
    "industry": "Water Utilities",
    "marketCap": "3.16B"
  },
  {
    "ticker": "AWRE",
    "organization": "Aware",
    "industry": "Software",
    "marketCap": "87.19M"
  },
  {
    "ticker": "AWX",
    "organization": "Avalon Holdings",
    "industry": "Commercial Services & Supplies",
    "marketCap": "15.17M"
  },
  {
    "ticker": "AX",
    "organization": "Axos Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "3.13B"
  },
  {
    "ticker": "AXDX",
    "organization": "Accelerate Diagnostics",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "358.54M"
  },
  {
    "ticker": "AXGN",
    "organization": "Axogen",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "654.07M"
  },
  {
    "ticker": "AXL",
    "organization": "American Axle & Manufacturing",
    "industry": "Auto Components",
    "marketCap": "1.02B"
  },
  {
    "ticker": "AXLA",
    "organization": "Axcella Health",
    "industry": "Biotechnology",
    "marketCap": "114.53M"
  },
  {
    "ticker": "AXNX",
    "organization": "Axonics Modulation Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.08B"
  },
  {
    "ticker": "AXON",
    "organization": "Axon Enterprise",
    "industry": "Aerospace & Defense",
    "marketCap": "11.44B"
  },
  {
    "ticker": "AXP",
    "organization": "American Express",
    "industry": "Consumer Finance",
    "marketCap": "138.31B"
  },
  {
    "ticker": "AXR",
    "organization": "AMREP Corporation",
    "industry": "Commercial Services & Supplies",
    "marketCap": "115.18M"
  },
  {
    "ticker": "AXS",
    "organization": "AXIS Capital Holdings",
    "industry": "Insurance",
    "marketCap": "3.86B"
  },
  {
    "ticker": "AXSM",
    "organization": "Axsome Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "1.22B"
  },
  {
    "ticker": "AXTA",
    "organization": "Axalta Coating Systems",
    "industry": "Chemicals",
    "marketCap": "6.73B"
  },
  {
    "ticker": "AXTI",
    "organization": "AXT Inc.",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "349.83M"
  },
  {
    "ticker": "AXU",
    "organization": "Alexco Resource",
    "industry": "Commercial Services & Supplies",
    "marketCap": "228.88M"
  },
  {
    "ticker": "AY",
    "organization": "Atlantica Sustainable Infrastructure",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "3.81B"
  },
  {
    "ticker": "AYI",
    "organization": "Acuity Brands",
    "industry": "Electrical Equipment",
    "marketCap": "6.15B"
  },
  {
    "ticker": "AYLA",
    "organization": "Ayala Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "150.17M"
  },
  {
    "ticker": "AYRO",
    "organization": "AYRO",
    "industry": " Inc.",
    "marketCap": "Auto Manufacturers"
  },
  {
    "ticker": "AYTU",
    "organization": "Aytu BioScience",
    "industry": "Pharmaceuticals",
    "marketCap": "79.36M"
  },
  {
    "ticker": "AYX",
    "organization": "Alteryx",
    "industry": "Software",
    "marketCap": "4.98B"
  },
  {
    "ticker": "AZEK",
    "organization": "AZEK Company",
    "industry": "Building Products",
    "marketCap": "5.66B"
  },
  {
    "ticker": "AZN",
    "organization": "AstraZeneca",
    "industry": "Pharmaceuticals",
    "marketCap": "185.15B"
  },
  {
    "ticker": "AZO",
    "organization": "AutoZone",
    "industry": "Specialty Retail",
    "marketCap": "35.82B"
  },
  {
    "ticker": "AZPN",
    "organization": "Aspen Technology",
    "industry": "Software",
    "marketCap": "8.28B"
  },
  {
    "ticker": "AZRE",
    "organization": "Azure Power Global",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "1.12B"
  },
  {
    "ticker": "AZUL",
    "organization": "Azul S.A.",
    "industry": "Airlines",
    "marketCap": "2.46B"
  },
  {
    "ticker": "AZYO",
    "organization": "Aziyo Biologics",
    "industry": "Medical Devices",
    "marketCap": "71.50M"
  },
  {
    "ticker": "AZZ",
    "organization": "AZZ Inc.",
    "industry": "Electrical Equipment",
    "marketCap": "1.34B"
  },
  {
    "ticker": "B",
    "organization": "Barnes Group",
    "industry": "Machinery",
    "marketCap": "2.11B"
  },
  {
    "ticker": "BA",
    "organization": "Boeing",
    "industry": "Aerospace & Defense",
    "marketCap": "130.97B"
  },
  {
    "ticker": "BABA",
    "organization": "Alibaba Group",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "390.91B"
  },
  {
    "ticker": "BAC",
    "organization": "Bank of America",
    "industry": "Banks",
    "marketCap": "362.18B"
  },
  {
    "ticker": "BAH",
    "organization": "Booz Allen Hamilton",
    "industry": "IT Services",
    "marketCap": "10.84B"
  },
  {
    "ticker": "BAK",
    "organization": "Braskem",
    "industry": "Chemicals",
    "marketCap": "8.82B"
  },
  {
    "ticker": "BALY",
    "organization": "Bally's Corporation",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BAM",
    "organization": "Brookfield Asset Management",
    "industry": "Capital Markets",
    "marketCap": "83.91B"
  },
  {
    "ticker": "BANC",
    "organization": "Banc of California",
    "industry": "Banks",
    "marketCap": "976.29M"
  },
  {
    "ticker": "BAND",
    "organization": "Bandwidth",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "2.20B"
  },
  {
    "ticker": "BANF",
    "organization": "BancFirst Corporation",
    "industry": "Banks",
    "marketCap": "1.99B"
  },
  {
    "ticker": "BANR",
    "organization": "Banner Corporation",
    "industry": "Banks",
    "marketCap": "1.92B"
  },
  {
    "ticker": "BANX",
    "organization": "StoneCastle Financial",
    "industry": "Capital Markets",
    "marketCap": "155.83M"
  },
  {
    "ticker": "BAOS",
    "organization": "Baosheng Media Group",
    "industry": "Advertising Agencies",
    "marketCap": "50.07M"
  },
  {
    "ticker": "BAP",
    "organization": "Credicorp",
    "industry": "Banks",
    "marketCap": "9.04B"
  },
  {
    "ticker": "BARK",
    "organization": "The Original BARK Company",
    "industry": "Specialty Retail",
    "marketCap": "1.15B"
  },
  {
    "ticker": "BASE",
    "organization": "Couchbase",
    "industry": "Software-Infrastructure",
    "marketCap": "1.31B"
  },
  {
    "ticker": "BATL",
    "organization": "Battalion Oil",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BAX",
    "organization": "Baxter International",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "40.62B"
  },
  {
    "ticker": "BB",
    "organization": "BlackBerry",
    "industry": "Software",
    "marketCap": "5.50B"
  },
  {
    "ticker": "BBAR",
    "organization": "Banco BBVA Argentina",
    "industry": "Banks",
    "marketCap": "788.35M"
  },
  {
    "ticker": "BBBY",
    "organization": "Bed Bath & Beyond",
    "industry": "Specialty Retail",
    "marketCap": "1.74B"
  },
  {
    "ticker": "BBCP",
    "organization": "Concrete Pumping Holdings",
    "industry": "Construction & Engineering",
    "marketCap": "490.67M"
  },
  {
    "ticker": "BBD",
    "organization": "Banco Bradesco",
    "industry": "Banks",
    "marketCap": "38.67B"
  },
  {
    "ticker": "BBDC",
    "organization": "Barings BDC",
    "industry": "Capital Markets",
    "marketCap": "725.01M"
  },
  {
    "ticker": "BBGI",
    "organization": "Beasley Broadcast Group",
    "industry": "Media",
    "marketCap": "78.14M"
  },
  {
    "ticker": "BBI",
    "organization": "Brickell Biotech",
    "industry": "Biotechnology",
    "marketCap": "61.01M"
  },
  {
    "ticker": "BBIG",
    "organization": "Vinco Ventures",
    "industry": "Leisure",
    "marketCap": "596.80M"
  },
  {
    "ticker": "BBIO",
    "organization": "BridgeBio Pharma",
    "industry": "Biotechnology",
    "marketCap": "7.15B"
  },
  {
    "ticker": "BBL",
    "organization": "BHP Group",
    "industry": "Metals & Mining",
    "marketCap": "127.32B"
  },
  {
    "ticker": "BBQ",
    "organization": "BBQ Holdings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BBSI",
    "organization": "Barrett Business Services",
    "industry": "Professional Services",
    "marketCap": "575.41M"
  },
  {
    "ticker": "BBU",
    "organization": "Brookfield Business Partners",
    "industry": "Construction & Engineering",
    "marketCap": "3.61B"
  },
  {
    "ticker": "BBVA",
    "organization": "Banco Bilbao Vizcaya Argentaria",
    "industry": "Banks",
    "marketCap": "43.95B"
  },
  {
    "ticker": "BBW",
    "organization": "Build-A-Bear Workshop",
    "industry": "Specialty Retail",
    "marketCap": "277.68M"
  },
  {
    "ticker": "BBWI",
    "organization": "Bath & Body Works",
    "industry": "Specialty Retail",
    "marketCap": "16.97B"
  },
  {
    "ticker": "BBY",
    "organization": "Best Buy",
    "industry": "Specialty Retail",
    "marketCap": "25.81B"
  },
  {
    "ticker": "BC",
    "organization": "Brunswick",
    "industry": "Leisure Products",
    "marketCap": "7.45B"
  },
  {
    "ticker": "BCAB",
    "organization": "BioAtla",
    "industry": "Biotechnology",
    "marketCap": "1.04B"
  },
  {
    "ticker": "BCAC",
    "organization": "Brookline Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "73.97M"
  },
  {
    "ticker": "BCBP",
    "organization": "BCB Bancorp",
    "industry": "Banks",
    "marketCap": "253.34M"
  },
  {
    "ticker": "BCC",
    "organization": "Boise Cascade",
    "industry": "Paper & Forest Products",
    "marketCap": "2.17B"
  },
  {
    "ticker": "BCDA",
    "organization": "BioCardia",
    "industry": "Biotechnology",
    "marketCap": "51.63M"
  },
  {
    "ticker": "BCE",
    "organization": "BCE",
    "industry": " Inc.",
    "marketCap": "Diversified Telecommunication Services"
  },
  {
    "ticker": "BCEI",
    "organization": "Bonanza Creek Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BCEL",
    "organization": "Atreca",
    "industry": "Biotechnology",
    "marketCap": "225.79M"
  },
  {
    "ticker": "BCH",
    "organization": "Banco de Chile SA",
    "industry": "Banks",
    "marketCap": "9.37B"
  },
  {
    "ticker": "BCLI",
    "organization": "Brainstorm Cell Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "117.31M"
  },
  {
    "ticker": "BCML",
    "organization": "BayCom",
    "industry": "Banks",
    "marketCap": "198.26M"
  },
  {
    "ticker": "BCO",
    "organization": "Brink's Company",
    "industry": "Commercial Services & Supplies",
    "marketCap": "3.17B"
  },
  {
    "ticker": "BCOR",
    "organization": "Blucora",
    "industry": "Capital Markets",
    "marketCap": "758.78M"
  },
  {
    "ticker": "BCOV",
    "organization": "Brightcove",
    "industry": "IT Services",
    "marketCap": "468.53M"
  },
  {
    "ticker": "BCOW",
    "organization": "1895 Bancorp of Wisconsin",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "69.88M"
  },
  {
    "ticker": "BCPC",
    "organization": "Balchem Corporation",
    "industry": "Chemicals",
    "marketCap": "4.83B"
  },
  {
    "ticker": "BCRX",
    "organization": "BioCryst Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.51B"
  },
  {
    "ticker": "BCS",
    "organization": "Barclays",
    "industry": "Banks",
    "marketCap": "43.94B"
  },
  {
    "ticker": "BCSF",
    "organization": "Bain Capital",
    "industry": "Capital Markets",
    "marketCap": "959.40M"
  },
  {
    "ticker": "BCTX",
    "organization": "BriaCell Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "115.70M"
  },
  {
    "ticker": "BCYC",
    "organization": "Bicycle Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.14B"
  },
  {
    "ticker": "BCYP",
    "organization": "Big Cypress Acquisition",
    "industry": "Shell Companies",
    "marketCap": "149.11M"
  },
  {
    "ticker": "BDC",
    "organization": "Belden",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "BDL",
    "organization": "Flanigan's Enterprises",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BDN",
    "organization": "Brandywine Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.32B"
  },
  {
    "ticker": "BDR",
    "organization": "Blonder Tongue Laboratories",
    "industry": "Communications Equipment",
    "marketCap": "13.72M"
  },
  {
    "ticker": "BDSI",
    "organization": "BioDelivery Sciences",
    "industry": "Pharmaceuticals",
    "marketCap": "364.81M"
  },
  {
    "ticker": "BDSX",
    "organization": "Biodesix",
    "industry": "Diagnostics & Research",
    "marketCap": "221.70M"
  },
  {
    "ticker": "BDTX",
    "organization": "Black Diamond Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "307.09M"
  },
  {
    "ticker": "BDX",
    "organization": "Becton",
    "industry": " Dickinson",
    "marketCap": "Health Care Equipment & Supplies"
  },
  {
    "ticker": "BE",
    "organization": "Bloom Energy",
    "industry": "Electrical Equipment",
    "marketCap": "3.25B"
  },
  {
    "ticker": "BEAM",
    "organization": "Beam Therapeutics",
    "industry": "Beverages",
    "marketCap": "5.77B"
  },
  {
    "ticker": "BECN",
    "organization": "Beacon Roofing Supply",
    "industry": "Trading Companies & Distributors",
    "marketCap": "3.43B"
  },
  {
    "ticker": "BEDU",
    "organization": "Bright Scholar Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "327.97M"
  },
  {
    "ticker": "BEEM",
    "organization": "Beam Global",
    "industry": "Electrical Equipment",
    "marketCap": "244.46M"
  },
  {
    "ticker": "BEKE",
    "organization": "KE Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "21.75B"
  },
  {
    "ticker": "BELFA",
    "organization": "Bel Fuse",
    "industry": "Electronic Components",
    "marketCap": "158.76M"
  },
  {
    "ticker": "BELFB",
    "organization": "Bel Fuse",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "BEN",
    "organization": "Franklin Resources",
    "industry": "Capital Markets",
    "marketCap": "14.94B"
  },
  {
    "ticker": "BENE",
    "organization": "Benessere Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "150.13M"
  },
  {
    "ticker": "BEP",
    "organization": "Brookfield Renewable Partners",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "10.10B"
  },
  {
    "ticker": "BEPC",
    "organization": "Brookfield Renewable Corporation",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "6.68B"
  },
  {
    "ticker": "BERY",
    "organization": "Berry Global Group",
    "industry": "Containers & Packaging",
    "marketCap": "8.29B"
  },
  {
    "ticker": "BEST",
    "organization": "BEST Inc.",
    "industry": "Air Freight & Logistics",
    "marketCap": "648.96M"
  },
  {
    "ticker": "BF.A",
    "organization": "Brown-Forman",
    "industry": "Beverages",
    "marketCap": "31.76B"
  },
  {
    "ticker": "BF.B",
    "organization": "Brown-Forman",
    "industry": "Beverages",
    "marketCap": "31.43B"
  },
  {
    "ticker": "BFAM",
    "organization": "Bright Horizons Family Solutions",
    "industry": "Diversified Consumer Services",
    "marketCap": "8.45B"
  },
  {
    "ticker": "BFC",
    "organization": "Bank First",
    "industry": "Banks",
    "marketCap": "552.09M"
  },
  {
    "ticker": "BFI",
    "organization": "BurgerFi International",
    "industry": "Restaurants",
    "marketCap": "155.85M"
  },
  {
    "ticker": "BFIN",
    "organization": "BankFinancial Corporation",
    "industry": "Banks",
    "marketCap": "160.06M"
  },
  {
    "ticker": "BFLY",
    "organization": "Butterfly Network",
    "industry": "Medical Devices",
    "marketCap": "2.10B"
  },
  {
    "ticker": "BFRA",
    "organization": "Biofrontera AG",
    "industry": "Biotechnology",
    "marketCap": "160.84M"
  },
  {
    "ticker": "BFS",
    "organization": "Saul Centers",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.05B"
  },
  {
    "ticker": "BFST",
    "organization": "Business First Bancshares",
    "industry": "Banks",
    "marketCap": "484.80M"
  },
  {
    "ticker": "BG",
    "organization": "Bunge",
    "industry": "Food Products",
    "marketCap": "11.69B"
  },
  {
    "ticker": "BGCP",
    "organization": "BGC Partners",
    "industry": "Capital Markets",
    "marketCap": "2.06B"
  },
  {
    "ticker": "BGFV",
    "organization": "Big 5 Sporting Goods",
    "industry": "Specialty Retail",
    "marketCap": "526.20M"
  },
  {
    "ticker": "BGI",
    "organization": "Birks Group",
    "industry": "Specialty Retail",
    "marketCap": "52.24M"
  },
  {
    "ticker": "BGNE",
    "organization": "BeiGene",
    "industry": "Biotechnology",
    "marketCap": "33.63B"
  },
  {
    "ticker": "BGRY",
    "organization": "Berkshire Grey",
    "industry": "Specialty Industrial Machinery",
    "marketCap": "1.55B"
  },
  {
    "ticker": "BGS",
    "organization": "B&G Foods",
    "industry": "Food Products",
    "marketCap": "1.95B"
  },
  {
    "ticker": "BGSF",
    "organization": "BG Staffing",
    "industry": "Professional Services",
    "marketCap": "130.53M"
  },
  {
    "ticker": "BGSX",
    "organization": "Build Acquisition",
    "industry": "Shell Companies",
    "marketCap": "242.25M"
  },
  {
    "ticker": "BH",
    "organization": "Biglari Holdings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BH.A",
    "organization": "Biglari Holdings",
    "industry": "Restaurants",
    "marketCap": "530.52M"
  },
  {
    "ticker": "BHAT",
    "organization": "Blue Hat Interactive",
    "industry": "Entertainment",
    "marketCap": "33.45M"
  },
  {
    "ticker": "BHB",
    "organization": "Bar Harbor Bankshares",
    "industry": "Banks",
    "marketCap": "424.15M"
  },
  {
    "ticker": "BHC",
    "organization": "Bausch Health Companies",
    "industry": "Pharmaceuticals",
    "marketCap": "10.26B"
  },
  {
    "ticker": "BHE",
    "organization": "Benchmark Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "BHF",
    "organization": "Brighthouse Financial",
    "industry": "Insurance",
    "marketCap": "3.78B"
  },
  {
    "ticker": "BHG",
    "organization": "Bright Health Group",
    "industry": "Healthcare Plans",
    "marketCap": "5.08B"
  },
  {
    "ticker": "BHIL",
    "organization": "Benson Hill",
    "industry": "Shell Companies",
    "marketCap": "496.58M"
  },
  {
    "ticker": "BHLB",
    "organization": "Berkshire Hills Bancorp",
    "industry": "Banks",
    "marketCap": "1.33B"
  },
  {
    "ticker": "BHP",
    "organization": "BHP Group",
    "industry": "Metals & Mining",
    "marketCap": "137.09B"
  },
  {
    "ticker": "BHR",
    "organization": "Braemar Hotels & Resorts",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "301.22M"
  },
  {
    "ticker": "BHSE",
    "organization": "Bull Horn Holdings",
    "industry": "Shell Companies",
    "marketCap": "93.28M"
  },
  {
    "ticker": "BHTG",
    "organization": "BioHiTech Global",
    "industry": "Commercial Services & Supplies",
    "marketCap": "40.74M"
  },
  {
    "ticker": "BHVN",
    "organization": "Biohaven Pharmaceutical",
    "industry": "Biotechnology",
    "marketCap": "9.08B"
  },
  {
    "ticker": "BIDU",
    "organization": "Baidu",
    "industry": " Inc",
    "marketCap": "Interactive Media & Services"
  },
  {
    "ticker": "BIG",
    "organization": "Big Lots",
    "industry": "Multiline Retail",
    "marketCap": "1.39B"
  },
  {
    "ticker": "BIGC",
    "organization": "BigCommerce",
    "industry": "IT Services",
    "marketCap": "3.70B"
  },
  {
    "ticker": "BIIB",
    "organization": "Biogen",
    "industry": "Biotechnology",
    "marketCap": "42.25B"
  },
  {
    "ticker": "BILI",
    "organization": "Bilibili",
    "industry": "Entertainment",
    "marketCap": "24.84B"
  },
  {
    "ticker": "BILL",
    "organization": "Bill.com",
    "industry": "Software",
    "marketCap": "28.23B"
  },
  {
    "ticker": "BIMI",
    "organization": "BIMI International Medical",
    "industry": "Machinery",
    "marketCap": "16.83M"
  },
  {
    "ticker": "BIO",
    "organization": "Bio-Rad Laboratories",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "21.60B"
  },
  {
    "ticker": "BIOC",
    "organization": "Biocept",
    "industry": "Biotechnology",
    "marketCap": "58.89M"
  },
  {
    "ticker": "BIOL",
    "organization": "BIOLASE",
    "industry": " Inc.",
    "marketCap": "Health Care Equipment & Supplies"
  },
  {
    "ticker": "BIOT",
    "organization": "Biotech Acquisition",
    "industry": "n/a",
    "marketCap": "224.48M"
  },
  {
    "ticker": "BIOX",
    "organization": "Bioceres Crop Solutions",
    "industry": "Food Products",
    "marketCap": "544.82M"
  },
  {
    "ticker": "BIP",
    "organization": "Brookfield Infrastructure Partners",
    "industry": "Multi-Utilities",
    "marketCap": "16.76B"
  },
  {
    "ticker": "BIPC",
    "organization": "Brookfield Infrastructure",
    "industry": "Gas Utilities",
    "marketCap": "2.68B"
  },
  {
    "ticker": "BITE",
    "organization": "Bite Acquisition",
    "industry": "n/a",
    "marketCap": "249.99M"
  },
  {
    "ticker": "BITF",
    "organization": "Bitfarms",
    "industry": "Capital Markets",
    "marketCap": "823.30M"
  },
  {
    "ticker": "BIVI",
    "organization": "BioVie",
    "industry": "Biotechnology",
    "marketCap": "166.13M"
  },
  {
    "ticker": "BJ",
    "organization": "BJ's Wholesale Club",
    "industry": "Food & Staples Retailing",
    "marketCap": "7.28B"
  },
  {
    "ticker": "BJRI",
    "organization": "BJ's Restaurants",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BK",
    "organization": "Bank of New York Mellon",
    "industry": "Capital Markets",
    "marketCap": "45.68B"
  },
  {
    "ticker": "BKCC",
    "organization": "BlackRock Capital Investment",
    "industry": "Capital Markets",
    "marketCap": "288.26M"
  },
  {
    "ticker": "BKD",
    "organization": "Brookdale Senior Living",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.20B"
  },
  {
    "ticker": "BKE",
    "organization": "The Buckle",
    "industry": "Specialty Retail",
    "marketCap": "2.12B"
  },
  {
    "ticker": "BKEP",
    "organization": "BlueKnight Energy Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BKH",
    "organization": "Black Hills",
    "industry": "Multi-Utilities",
    "marketCap": "4.01B"
  },
  {
    "ticker": "BKI",
    "organization": "Black Knight",
    "industry": "IT Services",
    "marketCap": "11.24B"
  },
  {
    "ticker": "BKNG",
    "organization": "Booking Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "100.84B"
  },
  {
    "ticker": "BKR",
    "organization": "Baker Hughes",
    "industry": "Energy Equipment & Services",
    "marketCap": "20.86B"
  },
  {
    "ticker": "BKSC",
    "organization": "Bank of South Carolina",
    "industry": "Banks",
    "marketCap": "113.75M"
  },
  {
    "ticker": "BKSY",
    "organization": "BlackSky Technology",
    "industry": "Scientific & Technical Instruments",
    "marketCap": "1.16B"
  },
  {
    "ticker": "BKTI",
    "organization": "BK Technologies",
    "industry": "Communications Equipment",
    "marketCap": "49.18M"
  },
  {
    "ticker": "BKU",
    "organization": "BankUnited",
    "industry": "Banks",
    "marketCap": "3.98B"
  },
  {
    "ticker": "BKYI",
    "organization": "BIO-key International",
    "industry": "Software",
    "marketCap": "28.56M"
  },
  {
    "ticker": "BL",
    "organization": "BlackLine",
    "industry": "Software",
    "marketCap": "6.83B"
  },
  {
    "ticker": "BLBD",
    "organization": "Blue Bird",
    "industry": "Machinery",
    "marketCap": "577.55M"
  },
  {
    "ticker": "BLCM",
    "organization": "Bellicum Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "24.52M"
  },
  {
    "ticker": "BLCT",
    "organization": "BlueCity Holdings",
    "industry": "Internet Content & Information",
    "marketCap": "110.66M"
  },
  {
    "ticker": "BLD",
    "organization": "TopBuild",
    "industry": "Household Durables",
    "marketCap": "6.79B"
  },
  {
    "ticker": "BLDE",
    "organization": "Blade Air Mobility",
    "industry": "Airports & Air Services",
    "marketCap": "742.88M"
  },
  {
    "ticker": "BLDP",
    "organization": "Ballard Power Systems",
    "industry": "Electrical Equipment",
    "marketCap": "4.12B"
  },
  {
    "ticker": "BLDR",
    "organization": "Builders FirstSource",
    "industry": "Building Products",
    "marketCap": "10.75B"
  },
  {
    "ticker": "BLFS",
    "organization": "BioLife Solutions",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.76B"
  },
  {
    "ticker": "BLFY",
    "organization": "Blue Foundry Bancorp",
    "industry": "Banks-Regional",
    "marketCap": "395.32M"
  },
  {
    "ticker": "BLI",
    "organization": "Berkeley Lights",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "1.31B"
  },
  {
    "ticker": "BLIN",
    "organization": "Bridgeline Digital",
    "industry": "Software",
    "marketCap": "31.84M"
  },
  {
    "ticker": "BLK",
    "organization": "BlackRock",
    "industry": "Capital Markets",
    "marketCap": "128.18B"
  },
  {
    "ticker": "BLKB",
    "organization": "Blackbaud",
    "industry": "Software",
    "marketCap": "3.56B"
  },
  {
    "ticker": "BLL",
    "organization": "Ball Corporation",
    "industry": "Containers & Packaging",
    "marketCap": "29.35B"
  },
  {
    "ticker": "BLMN",
    "organization": "Bloomin' Brands",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BLND",
    "organization": "Blend Labs",
    "industry": "Software-Application",
    "marketCap": "3.03B"
  },
  {
    "ticker": "BLNG",
    "organization": "Belong Acquisition",
    "industry": "Blank Checks / SPAC",
    "marketCap": "188.54M"
  },
  {
    "ticker": "BLNK",
    "organization": "Blink Charging",
    "industry": "Specialty Retail",
    "marketCap": "1.19B"
  },
  {
    "ticker": "BLPH",
    "organization": "Bellerophon Therapeutics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "36.69M"
  },
  {
    "ticker": "BLRX",
    "organization": "BioLineRx",
    "industry": "Biotechnology",
    "marketCap": "131.90M"
  },
  {
    "ticker": "BLSA",
    "organization": "BCLS Acquisition",
    "industry": "Shell Companies",
    "marketCap": "189.44M"
  },
  {
    "ticker": "BLTS",
    "organization": "Bright Lights Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.60M"
  },
  {
    "ticker": "BLU",
    "organization": "BELLUS Health",
    "industry": "Biotechnology",
    "marketCap": "469.24M"
  },
  {
    "ticker": "BLUA",
    "organization": "BlueRiver Acquisition",
    "industry": "Shell Companies",
    "marketCap": "259.59M"
  },
  {
    "ticker": "BLUE",
    "organization": "Bluebird Bio",
    "industry": "Biotechnology",
    "marketCap": "1.28B"
  },
  {
    "ticker": "BLX",
    "organization": "Banco Latinoamericano",
    "industry": "Diversified Financial Services",
    "marketCap": "710.23M"
  },
  {
    "ticker": "BMA",
    "organization": "Banco Macro",
    "industry": "Banks",
    "marketCap": "1.11B"
  },
  {
    "ticker": "BMBL",
    "organization": "Bumble",
    "industry": "Software-Application",
    "marketCap": "9.30B"
  },
  {
    "ticker": "BMEA",
    "organization": "Biomea Fusion",
    "industry": "Biotechnology",
    "marketCap": "340.73M"
  },
  {
    "ticker": "BMI",
    "organization": "Badger Meter",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "BMO",
    "organization": "Bank of Montreal",
    "industry": "Banks",
    "marketCap": "64.75B"
  },
  {
    "ticker": "BMRA",
    "organization": "Biomerica",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "56.30M"
  },
  {
    "ticker": "BMRC",
    "organization": "Bank of Marin Bancorp",
    "industry": "Banks",
    "marketCap": "619.91M"
  },
  {
    "ticker": "BMRN",
    "organization": "BioMarin Pharmaceutical",
    "industry": "Biotechnology",
    "marketCap": "14.15B"
  },
  {
    "ticker": "BMTC",
    "organization": "Bryn Mawr Bank",
    "industry": "Banks",
    "marketCap": "925.52M"
  },
  {
    "ticker": "BMTX",
    "organization": "BM Technologies",
    "industry": "Software-Application",
    "marketCap": "106.51M"
  },
  {
    "ticker": "BMY",
    "organization": "Bristol-Myers Squibb",
    "industry": "Pharmaceuticals",
    "marketCap": "131.48B"
  },
  {
    "ticker": "BNED",
    "organization": "Barnes & Noble Education",
    "industry": "Specialty Retail",
    "marketCap": "522.06M"
  },
  {
    "ticker": "BNFT",
    "organization": "Benefitfocus",
    "industry": "Software",
    "marketCap": "370.51M"
  },
  {
    "ticker": "BNGO",
    "organization": "BioNano Genomics",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "1.46B"
  },
  {
    "ticker": "BNL",
    "organization": "Broadstone Net Lease",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.94B"
  },
  {
    "ticker": "BNR",
    "organization": "Burning Rock Biotech",
    "industry": "Diagnostics & Research",
    "marketCap": "1.87B"
  },
  {
    "ticker": "BNS",
    "organization": "Bank of Nova Scotia",
    "industry": "Banks",
    "marketCap": "74.24B"
  },
  {
    "ticker": "BNSO",
    "organization": "Bonso Electronics International",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "BNTC",
    "organization": "Benitec Biopharma",
    "industry": "Biotechnology",
    "marketCap": "30.15M"
  },
  {
    "ticker": "BNTX",
    "organization": "BioNTech SE",
    "industry": "Biotechnology",
    "marketCap": "61.79B"
  },
  {
    "ticker": "BOAC",
    "organization": "Bluescape Opportunities Acquisition",
    "industry": "Shell Companies",
    "marketCap": "745.33M"
  },
  {
    "ticker": "BOAS",
    "organization": "BOA Acquisition",
    "industry": "Shell Companies",
    "marketCap": "279.45M"
  },
  {
    "ticker": "BODY",
    "organization": "Beachbody",
    "industry": "Internet Content & Information",
    "marketCap": "1.71B"
  },
  {
    "ticker": "BOH",
    "organization": "Bank of Hawaii",
    "industry": "Banks",
    "marketCap": "3.37B"
  },
  {
    "ticker": "BOKF",
    "organization": "BOK Financial",
    "industry": "Banks",
    "marketCap": "6.28B"
  },
  {
    "ticker": "BOLT",
    "organization": "Bolt Biotherapeutics",
    "industry": "Biotechnology",
    "marketCap": "482.69M"
  },
  {
    "ticker": "BOMN",
    "organization": "Boston Omaha",
    "industry": "Media",
    "marketCap": "1.17B"
  },
  {
    "ticker": "BON",
    "organization": "Bon Natural Life",
    "industry": "Packaged Foods",
    "marketCap": "62.32M"
  },
  {
    "ticker": "BOOM",
    "organization": "DMC Global",
    "industry": "Energy Equipment & Services",
    "marketCap": "704.16M"
  },
  {
    "ticker": "BOOT",
    "organization": "Boot Barn Holdings",
    "industry": "Specialty Retail",
    "marketCap": "2.68B"
  },
  {
    "ticker": "BORR",
    "organization": "Borr Drilling",
    "industry": "Oil & Gas Drilling",
    "marketCap": "257.20M"
  },
  {
    "ticker": "BOSC",
    "organization": "BOS Better Online Solutions",
    "industry": "Communications Equipment",
    "marketCap": "18.43M"
  },
  {
    "ticker": "BOTJ",
    "organization": "Bank of the James Financial",
    "industry": "Banks",
    "marketCap": "68.27M"
  },
  {
    "ticker": "BOWX",
    "organization": "BowX Acquisition",
    "industry": "Shell Companies",
    "marketCap": "603.75M"
  },
  {
    "ticker": "BOX",
    "organization": "Box",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "BOXL",
    "organization": "Boxlight",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "BP",
    "organization": "BP plc",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BPMC",
    "organization": "Blueprint Medicines",
    "industry": "Biotechnology",
    "marketCap": "5.97B"
  },
  {
    "ticker": "BPMP",
    "organization": "BP Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BPOP",
    "organization": "Popular",
    "industry": "Banks",
    "marketCap": "6.36B"
  },
  {
    "ticker": "BPRN",
    "organization": "Bank of Princeton",
    "industry": "Banks",
    "marketCap": "198.59M"
  },
  {
    "ticker": "BPT",
    "organization": "BP Prudhoe Bay Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BPTH",
    "organization": "Bio-Path Holdings",
    "industry": "Biotechnology",
    "marketCap": "35.84M"
  },
  {
    "ticker": "BPTS",
    "organization": "Biophytis",
    "industry": "Biotechnology",
    "marketCap": "105.21M"
  },
  {
    "ticker": "BQ",
    "organization": "Boqii Holding",
    "industry": "Specialty Retail",
    "marketCap": "208.19M"
  },
  {
    "ticker": "BR",
    "organization": "Broadridge Financial Solutions",
    "industry": "IT Services",
    "marketCap": "19.29B"
  },
  {
    "ticker": "BRAG",
    "organization": "Bragg Gaming Group",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "200.15M"
  },
  {
    "ticker": "BRBR",
    "organization": "Bellring Brands",
    "industry": "Personal Products",
    "marketCap": "1.23B"
  },
  {
    "ticker": "BRBS",
    "organization": "Blue Ridge Bankshares",
    "industry": "Banks",
    "marketCap": "335.18M"
  },
  {
    "ticker": "BRC",
    "organization": "Brady Corporation",
    "industry": "Commercial Services & Supplies",
    "marketCap": "2.64B"
  },
  {
    "ticker": "BRCN",
    "organization": "Burcon NutraScience",
    "industry": "Packaged Foods",
    "marketCap": "171.38M"
  },
  {
    "ticker": "BRDG",
    "organization": "Bridge Investment Group",
    "industry": "REIT-Diversified",
    "marketCap": "1.88B"
  },
  {
    "ticker": "BREZ",
    "organization": "Breeze Holdings Acquisition",
    "industry": "Shell Companies",
    "marketCap": "147.86M"
  },
  {
    "ticker": "BRFS",
    "organization": "BRF S.A.",
    "industry": "Food Products",
    "marketCap": "4.14B"
  },
  {
    "ticker": "BRG",
    "organization": "Bluerock Residential Growth REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "337.32M"
  },
  {
    "ticker": "BRID",
    "organization": "Bridgford Foods",
    "industry": "Food Products",
    "marketCap": "111.46M"
  },
  {
    "ticker": "BRIV",
    "organization": "B. Riley Principal 250 Merger",
    "industry": "Shell Companies",
    "marketCap": "186.49M"
  },
  {
    "ticker": "BRK.A",
    "organization": "Berkshire Hathaway",
    "industry": "Diversified Financial Services",
    "marketCap": "623.49B"
  },
  {
    "ticker": "BRK.B",
    "organization": "Berkshire Hathaway",
    "industry": "Diversified Financial Services",
    "marketCap": "624.50B"
  },
  {
    "ticker": "BRKL",
    "organization": "Brookline Bancorp",
    "industry": "Banks",
    "marketCap": "1.21B"
  },
  {
    "ticker": "BRKR",
    "organization": "Bruker",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "11.81B"
  },
  {
    "ticker": "BRKS",
    "organization": "Brooks Automation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "7.62B"
  },
  {
    "ticker": "BRLI",
    "organization": "Brilliant Acquisition",
    "industry": "Shell Companies",
    "marketCap": "62.21M"
  },
  {
    "ticker": "BRLT",
    "organization": "Brilliant Earth Group",
    "industry": "Luxury Goods",
    "marketCap": "1.17B"
  },
  {
    "ticker": "BRMK",
    "organization": "Broadmark Realty Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.33B"
  },
  {
    "ticker": "BRN",
    "organization": "Barnwell Industries",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BRO",
    "organization": "Brown & Brown",
    "industry": "Insurance",
    "marketCap": "15.98B"
  },
  {
    "ticker": "BROG",
    "organization": "Brooge Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BROS",
    "organization": "Dutch Bros",
    "industry": "Restaurants",
    "marketCap": "7.61B"
  },
  {
    "ticker": "BRP",
    "organization": "BRP Group",
    "industry": "Insurance",
    "marketCap": "3.66B"
  },
  {
    "ticker": "BRPM",
    "organization": "B. Riley Principal 150 Merger",
    "industry": "Shell Companies",
    "marketCap": "209.37M"
  },
  {
    "ticker": "BRQS",
    "organization": "Borqs Technologies",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "BRSP",
    "organization": "BrightSpire Capital",
    "industry": "REIT-Diversified",
    "marketCap": "1.25B"
  },
  {
    "ticker": "BRT",
    "organization": "BRT Apartments",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "353.93M"
  },
  {
    "ticker": "BRX",
    "organization": "Brixmor Property Group",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.85B"
  },
  {
    "ticker": "BRY",
    "organization": "Berry Corporation",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BSAC",
    "organization": "Banco Santander-Chile",
    "industry": "Banks",
    "marketCap": "9.42B"
  },
  {
    "ticker": "BSAQ",
    "organization": "Black Spade Acquisition",
    "industry": "Shell Companies",
    "marketCap": "181.31M"
  },
  {
    "ticker": "BSBK",
    "organization": "Bogota Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "149.45M"
  },
  {
    "ticker": "BSBR",
    "organization": "Banco Santander Brasil",
    "industry": "Banks",
    "marketCap": "51.06B"
  },
  {
    "ticker": "BSET",
    "organization": "Bassett Furniture Industries",
    "industry": "Household Durables",
    "marketCap": "180.29M"
  },
  {
    "ticker": "BSGA",
    "organization": "Blue Safari Group Acquisition",
    "industry": "Shell Companies",
    "marketCap": "70.26M"
  },
  {
    "ticker": "BSGM",
    "organization": "BioSig Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "98.45M"
  },
  {
    "ticker": "BSIG",
    "organization": "BrightSphere Investment Group",
    "industry": "Capital Markets",
    "marketCap": "2.07B"
  },
  {
    "ticker": "BSKY",
    "organization": "Big Sky Growth Partners",
    "industry": "Shell Companies",
    "marketCap": "367.12M"
  },
  {
    "ticker": "BSM",
    "organization": "Black Stone Minerals",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BSMX",
    "organization": "Banco Santander Mexico",
    "industry": "Banks",
    "marketCap": "7.75B"
  },
  {
    "ticker": "BSN",
    "organization": "Broadstone Acquisition",
    "industry": "Shell Companies",
    "marketCap": "379.72M"
  },
  {
    "ticker": "BSQR",
    "organization": "Bsquare Corporation",
    "industry": "Software",
    "marketCap": "47.97M"
  },
  {
    "ticker": "BSRR",
    "organization": "Sierra Bancorp",
    "industry": "Banks",
    "marketCap": "377.49M"
  },
  {
    "ticker": "BSVN",
    "organization": "Bank7 Corp.",
    "industry": "Banks",
    "marketCap": "190.24M"
  },
  {
    "ticker": "BSX",
    "organization": "Boston Scientific",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "62.54B"
  },
  {
    "ticker": "BSY",
    "organization": "Bentley Systems",
    "industry": "Software-Application",
    "marketCap": "17.00B"
  },
  {
    "ticker": "BTAI",
    "organization": "BioXcel Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "858.93M"
  },
  {
    "ticker": "BTAQ",
    "organization": "Burgundy Technology Acquisition",
    "industry": "Shell Companies",
    "marketCap": "440.55M"
  },
  {
    "ticker": "BTB",
    "organization": "Bit Brother",
    "industry": "Restaurants",
    "marketCap": "32.91M"
  },
  {
    "ticker": "BTBT",
    "organization": "Bit Digital",
    "industry": "Software",
    "marketCap": "433.33M"
  },
  {
    "ticker": "BTCM",
    "organization": "BIT Mining",
    "industry": "Information Technology Services",
    "marketCap": "609.91M"
  },
  {
    "ticker": "BTCS",
    "organization": "BTCS",
    "industry": "Capital Markets",
    "marketCap": "58.97M"
  },
  {
    "ticker": "BTCY",
    "organization": "Biotricity",
    "industry": "Medical Devices",
    "marketCap": "133.92M"
  },
  {
    "ticker": "BTG",
    "organization": "B2Gold",
    "industry": "Metals & Mining",
    "marketCap": "3.57B"
  },
  {
    "ticker": "BTI",
    "organization": "British American Tobacco",
    "industry": "Tobacco",
    "marketCap": "80.06B"
  },
  {
    "ticker": "BTN",
    "organization": "Ballantyne Strong",
    "industry": "Entertainment",
    "marketCap": "59.17M"
  },
  {
    "ticker": "BTNB",
    "organization": "Bridgetown 2 Holdings",
    "industry": "Shell Companies",
    "marketCap": "370.01M"
  },
  {
    "ticker": "BTRS",
    "organization": "BTRS Holdings",
    "industry": "Software-Application",
    "marketCap": "1.70B"
  },
  {
    "ticker": "BTTR",
    "organization": "Better Choice Company",
    "industry": "Packaged Foods",
    "marketCap": "110.06M"
  },
  {
    "ticker": "BTU",
    "organization": "Peabody Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "BTWN",
    "organization": "Bridgetown Holdings",
    "industry": "Shell Companies",
    "marketCap": "731.10M"
  },
  {
    "ticker": "BTX",
    "organization": "Brooklyn ImmunoTherapeutics",
    "industry": "Biotechnology",
    "marketCap": "472.81M"
  },
  {
    "ticker": "BUD",
    "organization": "Anheuser-Busch InBev",
    "industry": "Beverages",
    "marketCap": "113.09B"
  },
  {
    "ticker": "BUR",
    "organization": "Burford Capital",
    "industry": "Asset Management",
    "marketCap": "2.39B"
  },
  {
    "ticker": "BURL",
    "organization": "Burlington Stores",
    "industry": "Specialty Retail",
    "marketCap": "18.90B"
  },
  {
    "ticker": "BUSE",
    "organization": "First Busey",
    "industry": "Banks",
    "marketCap": "1.39B"
  },
  {
    "ticker": "BV",
    "organization": "BrightView Holdings",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.59B"
  },
  {
    "ticker": "BVH",
    "organization": "Bluegreen Vacations",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BVN",
    "organization": "Compania de Minas Buenaventura",
    "industry": "Metals & Mining",
    "marketCap": "1.76B"
  },
  {
    "ticker": "BVS",
    "organization": "Bioventus",
    "industry": "Diagnostics & Research",
    "marketCap": "815.22M"
  },
  {
    "ticker": "BVXV",
    "organization": "BiondVax Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "31.24M"
  },
  {
    "ticker": "BW",
    "organization": "Babcock & Wilcox Enterprises",
    "industry": "Electrical Equipment",
    "marketCap": "568.13M"
  },
  {
    "ticker": "BWA",
    "organization": "BorgWarner",
    "industry": "Auto Components",
    "marketCap": "10.36B"
  },
  {
    "ticker": "BWAC",
    "organization": "Better World Acquisition",
    "industry": "Shell Companies",
    "marketCap": "162.02M"
  },
  {
    "ticker": "BWAY",
    "organization": "Brainsway",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "135.70M"
  },
  {
    "ticker": "BWB",
    "organization": "Bridgewater Bancshares",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "501.98M"
  },
  {
    "ticker": "BWEN",
    "organization": "Broadwind Energy",
    "industry": "Electrical Equipment",
    "marketCap": "56.99M"
  },
  {
    "ticker": "BWFG",
    "organization": "Bankwell Financial Group",
    "industry": "Banks",
    "marketCap": "229.87M"
  },
  {
    "ticker": "BWMN",
    "organization": "Bowman Consulting Group",
    "industry": "Consulting Services",
    "marketCap": "152.91M"
  },
  {
    "ticker": "BWMX",
    "organization": "Betterware de Mexico",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.28B"
  },
  {
    "ticker": "BWXT",
    "organization": "BWX Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "5.13B"
  },
  {
    "ticker": "BX",
    "organization": "Blackstone Group",
    "industry": "Capital Markets",
    "marketCap": "82.80B"
  },
  {
    "ticker": "BXC",
    "organization": "BlueLinx Holdings",
    "industry": "Trading Companies & Distributors",
    "marketCap": "485.60M"
  },
  {
    "ticker": "BXMT",
    "organization": "Blackstone Mortgage Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "4.88B"
  },
  {
    "ticker": "BXP",
    "organization": "Boston Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "17.46B"
  },
  {
    "ticker": "BXRX",
    "organization": "Baudax Bio",
    "industry": "Biotechnology",
    "marketCap": "47.60M"
  },
  {
    "ticker": "BXS",
    "organization": "BancorpSouth Bank",
    "industry": "Banks",
    "marketCap": "3.34B"
  },
  {
    "ticker": "BY",
    "organization": "Byline Bancorp",
    "industry": "Banks",
    "marketCap": "933.15M"
  },
  {
    "ticker": "BYD",
    "organization": "Boyd Gaming",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "BYFC",
    "organization": "Broadway Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "241.86M"
  },
  {
    "ticker": "BYND",
    "organization": "Beyond Meat",
    "industry": "Food Products",
    "marketCap": "6.65B"
  },
  {
    "ticker": "BYRN",
    "organization": "Byrna Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "523.45M"
  },
  {
    "ticker": "BYSI",
    "organization": "BeyondSpring",
    "industry": "Biotechnology",
    "marketCap": "592.20M"
  },
  {
    "ticker": "BYTS",
    "organization": "BYTE Acquisition",
    "industry": "Shell Companies",
    "marketCap": "402.47M"
  },
  {
    "ticker": "BZ",
    "organization": "Kanzhun",
    "industry": "Staffing & Employment Services",
    "marketCap": "15.06B"
  },
  {
    "ticker": "BZH",
    "organization": "Beazer Homes USA",
    "industry": "Household Durables",
    "marketCap": "555.15M"
  },
  {
    "ticker": "BZUN",
    "organization": "Baozun",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.35B"
  },
  {
    "ticker": "C",
    "organization": "Citigroup",
    "industry": "Banks",
    "marketCap": "145.18B"
  },
  {
    "ticker": "CAAP",
    "organization": "Corporacion America Airports",
    "industry": "Transportation Infrastructure",
    "marketCap": "910.67M"
  },
  {
    "ticker": "CAAS",
    "organization": "China Automotive Systems",
    "industry": "Auto Components",
    "marketCap": "96.87M"
  },
  {
    "ticker": "CABA",
    "organization": "Cabaletta Bio",
    "industry": "Biotechnology",
    "marketCap": "296.68M"
  },
  {
    "ticker": "CABO",
    "organization": "Cable One",
    "industry": "Media",
    "marketCap": "10.95B"
  },
  {
    "ticker": "CAC",
    "organization": "Camden National",
    "industry": "Banks",
    "marketCap": "727.82M"
  },
  {
    "ticker": "CACC",
    "organization": "Credit Acceptance",
    "industry": "Consumer Finance",
    "marketCap": "9.13B"
  },
  {
    "ticker": "CACI",
    "organization": "CACI International",
    "industry": "IT Services",
    "marketCap": "6.27B"
  },
  {
    "ticker": "CADE",
    "organization": "Cadence Bancorporation",
    "industry": "Banks",
    "marketCap": "2.77B"
  },
  {
    "ticker": "CADL",
    "organization": "Candel Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "291.88M"
  },
  {
    "ticker": "CAE",
    "organization": "CAE Inc.",
    "industry": "Aerospace & Defense",
    "marketCap": "9.52B"
  },
  {
    "ticker": "CAG",
    "organization": "Conagra Brands",
    "industry": "Food Products",
    "marketCap": "16.20B"
  },
  {
    "ticker": "CAH",
    "organization": "Cardinal Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "14.12B"
  },
  {
    "ticker": "CAI",
    "organization": "CAI International",
    "industry": "Trading Companies & Distributors",
    "marketCap": "970.46M"
  },
  {
    "ticker": "CAJ",
    "organization": "Canon",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "CAKE",
    "organization": "Cheesecake Factory",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CAL",
    "organization": "Caleres",
    "industry": "Specialty Retail",
    "marketCap": "854.14M"
  },
  {
    "ticker": "CALA",
    "organization": "Calithera Biosciences",
    "industry": "Biotechnology",
    "marketCap": "152.68M"
  },
  {
    "ticker": "CALB",
    "organization": "California BanCorp",
    "industry": "Banks",
    "marketCap": "143.52M"
  },
  {
    "ticker": "CALM",
    "organization": "Cal-Maine Foods",
    "industry": "Food Products",
    "marketCap": "1.74B"
  },
  {
    "ticker": "CALT",
    "organization": "Calliditas Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "576.54M"
  },
  {
    "ticker": "CALX",
    "organization": "Calix",
    "industry": " Inc.",
    "marketCap": "Communications Equipment"
  },
  {
    "ticker": "CAMP",
    "organization": "CalAmp",
    "industry": "Communications Equipment",
    "marketCap": "357.02M"
  },
  {
    "ticker": "CAMT",
    "organization": "Camtek",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.75B"
  },
  {
    "ticker": "CAN",
    "organization": "Canaan",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "CANF",
    "organization": "Can-Fite BioPharma",
    "industry": "Biotechnology",
    "marketCap": "32.15M"
  },
  {
    "ticker": "CANG",
    "organization": "Cango Inc.",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "586.74M"
  },
  {
    "ticker": "CANO",
    "organization": "Cano Health",
    "industry": "Diversified Financial Services",
    "marketCap": "1.27B"
  },
  {
    "ticker": "CAPL",
    "organization": "CrossAmerica Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CAPR",
    "organization": "Capricor Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "91.86M"
  },
  {
    "ticker": "CAR",
    "organization": "Avis Budget Group",
    "industry": "Road & Rail",
    "marketCap": "8.08B"
  },
  {
    "ticker": "CARA",
    "organization": "Cara Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "763.87M"
  },
  {
    "ticker": "CARE",
    "organization": "Carter Bankshares",
    "industry": "Banks",
    "marketCap": "375.83M"
  },
  {
    "ticker": "CARG",
    "organization": "Cargurus",
    "industry": "Interactive Media & Services",
    "marketCap": "3.83B"
  },
  {
    "ticker": "CARR",
    "organization": "Carrier Global",
    "industry": "Building Products",
    "marketCap": "45.52B"
  },
  {
    "ticker": "CARS",
    "organization": "Cars.com",
    "industry": "Interactive Media & Services",
    "marketCap": "875.85M"
  },
  {
    "ticker": "CARV",
    "organization": "Carver Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "59.78M"
  },
  {
    "ticker": "CAS",
    "organization": "Cascade Acquisition",
    "industry": "Shell Companies",
    "marketCap": "286.93M"
  },
  {
    "ticker": "CASA",
    "organization": "Casa Systems",
    "industry": "Communications Equipment",
    "marketCap": "591.85M"
  },
  {
    "ticker": "CASH",
    "organization": "Meta Financial Group",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.73B"
  },
  {
    "ticker": "CASI",
    "organization": "CASI Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "170.55M"
  },
  {
    "ticker": "CASS",
    "organization": "Cass Information Systems",
    "industry": "IT Services",
    "marketCap": "604.95M"
  },
  {
    "ticker": "CASY",
    "organization": "Casey's General Stores",
    "industry": "Food & Staples Retailing",
    "marketCap": "6.95B"
  },
  {
    "ticker": "CAT",
    "organization": "Caterpillar",
    "industry": "Machinery",
    "marketCap": "106.92B"
  },
  {
    "ticker": "CATC",
    "organization": "Cambridge Bancorp",
    "industry": "Banks",
    "marketCap": "612.97M"
  },
  {
    "ticker": "CATO",
    "organization": "Cato Corporation",
    "industry": "Specialty Retail",
    "marketCap": "372.81M"
  },
  {
    "ticker": "CATY",
    "organization": "Cathay General Bancorp",
    "industry": "Banks",
    "marketCap": "3.29B"
  },
  {
    "ticker": "CB",
    "organization": "Chubb",
    "industry": "Insurance",
    "marketCap": "74.79B"
  },
  {
    "ticker": "CBAH",
    "organization": "CBRE Acquisition",
    "industry": "Shell Companies",
    "marketCap": "420.72M"
  },
  {
    "ticker": "CBAN",
    "organization": "Colony Bankcorp",
    "industry": "Banks",
    "marketCap": "261.79M"
  },
  {
    "ticker": "CBAT",
    "organization": "CBAK Energy Technology",
    "industry": "Electrical Equipment",
    "marketCap": "206.00M"
  },
  {
    "ticker": "CBAY",
    "organization": "CymaBay Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "255.98M"
  },
  {
    "ticker": "CBD",
    "organization": "Companhia Brasileira de Distribuicao",
    "industry": "Food & Staples Retailing",
    "marketCap": "1.27B"
  },
  {
    "ticker": "CBFV",
    "organization": "CB Financial Services",
    "industry": "Banks",
    "marketCap": "124.82M"
  },
  {
    "ticker": "CBIO",
    "organization": "Catalyst Biosciences",
    "industry": "Biotechnology",
    "marketCap": "128.40M"
  },
  {
    "ticker": "CBMB",
    "organization": "CBM Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "55.86M"
  },
  {
    "ticker": "CBNK",
    "organization": "Capital Bancorp",
    "industry": "Banks",
    "marketCap": "324.75M"
  },
  {
    "ticker": "CBOE",
    "organization": "Cboe Global Markets",
    "industry": "Capital Markets",
    "marketCap": "13.21B"
  },
  {
    "ticker": "CBRE",
    "organization": "CBRE Group",
    "industry": "Real Estate Management & Development",
    "marketCap": "33.07B"
  },
  {
    "ticker": "CBRL",
    "organization": "Cracker Barrel",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CBSH",
    "organization": "Commerce Bancshares",
    "industry": "Banks",
    "marketCap": "8.28B"
  },
  {
    "ticker": "CBT",
    "organization": "Cabot Corporation",
    "industry": "Chemicals",
    "marketCap": "2.84B"
  },
  {
    "ticker": "CBTX",
    "organization": "CBTX",
    "industry": " Inc.",
    "marketCap": "Banks"
  },
  {
    "ticker": "CBU",
    "organization": "Community Bank System",
    "industry": "Banks",
    "marketCap": "3.77B"
  },
  {
    "ticker": "CBZ",
    "organization": "CBIZ",
    "industry": " Inc.",
    "marketCap": "Professional Services"
  },
  {
    "ticker": "CC",
    "organization": "Chemours Company",
    "industry": "Chemicals",
    "marketCap": "4.85B"
  },
  {
    "ticker": "CCAC",
    "organization": "CITIC Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "344.48M"
  },
  {
    "ticker": "CCAP",
    "organization": "Crescent Capital BDC",
    "industry": "Asset Management",
    "marketCap": "546.45M"
  },
  {
    "ticker": "CCB",
    "organization": "Coastal Financial",
    "industry": "Banks",
    "marketCap": "377.86M"
  },
  {
    "ticker": "CCBG",
    "organization": "Capital City Bank Group",
    "industry": "Banks",
    "marketCap": "427.76M"
  },
  {
    "ticker": "CCCC",
    "organization": "C4 Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.22B"
  },
  {
    "ticker": "CCCS",
    "organization": "CCC Intelligent Solutions",
    "industry": "Software-Infrastructure",
    "marketCap": "6.34B"
  },
  {
    "ticker": "CCEL",
    "organization": "Cryo-Cell International",
    "industry": "Health Care Providers & Services",
    "marketCap": "102.27M"
  },
  {
    "ticker": "CCEP",
    "organization": "Coca-Cola European Partners",
    "industry": "Beverages",
    "marketCap": "25.60B"
  },
  {
    "ticker": "CCF",
    "organization": "Chase Corporation",
    "industry": "Chemicals",
    "marketCap": "965.24M"
  },
  {
    "ticker": "CCI",
    "organization": "Crown Castle",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "74.97B"
  },
  {
    "ticker": "CCJ",
    "organization": "Cameco",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CCK",
    "organization": "Crown Holdings",
    "industry": "Containers & Packaging",
    "marketCap": "13.20B"
  },
  {
    "ticker": "CCL",
    "organization": "Carnival",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CCLP",
    "organization": "CSI Compressco",
    "industry": "Energy Equipment & Services",
    "marketCap": "85.87M"
  },
  {
    "ticker": "CCM",
    "organization": "Concord Medical Services",
    "industry": "Health Care Providers & Services",
    "marketCap": "135.45M"
  },
  {
    "ticker": "CCMP",
    "organization": "CMC Materials",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.61B"
  },
  {
    "ticker": "CCNC",
    "organization": "Code Chain New Continent",
    "industry": "Coking Coal",
    "marketCap": "49.57M"
  },
  {
    "ticker": "CCNE",
    "organization": "CNB Financial",
    "industry": "Banks",
    "marketCap": "410.97M"
  },
  {
    "ticker": "CCO",
    "organization": "Clear Channel Outdoor",
    "industry": "Media",
    "marketCap": "1.35B"
  },
  {
    "ticker": "CCOI",
    "organization": "Cogent Communications Holdings",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "3.38B"
  },
  {
    "ticker": "CCRN",
    "organization": "Cross Country Healthcare",
    "industry": "Health Care Providers & Services",
    "marketCap": "774.35M"
  },
  {
    "ticker": "CCS",
    "organization": "Century Communities",
    "industry": "Household Durables",
    "marketCap": "2.11B"
  },
  {
    "ticker": "CCU",
    "organization": "Cia Cervecerias Unidas",
    "industry": "Beverages",
    "marketCap": "3.22B"
  },
  {
    "ticker": "CCV",
    "organization": "Churchill Capital V",
    "industry": "Shell Companies",
    "marketCap": "1.12B"
  },
  {
    "ticker": "CCVI",
    "organization": "Churchill Capital VI",
    "industry": "Shell Companies",
    "marketCap": "675.51M"
  },
  {
    "ticker": "CCXI",
    "organization": "ChemoCentryx",
    "industry": "Biotechnology",
    "marketCap": "1.23B"
  },
  {
    "ticker": "CD",
    "organization": "Chindata Group",
    "industry": "Information Technology Services",
    "marketCap": "3.05B"
  },
  {
    "ticker": "CDAK",
    "organization": "Codiak BioSciences",
    "industry": "Biotechnology",
    "marketCap": "363.55M"
  },
  {
    "ticker": "CDAY",
    "organization": "Ceridian HCM Holding",
    "industry": "Software",
    "marketCap": "17.17B"
  },
  {
    "ticker": "CDE",
    "organization": "Coeur Mining",
    "industry": "Metals & Mining",
    "marketCap": "1.60B"
  },
  {
    "ticker": "CDEV",
    "organization": "Centennial Resource Development",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CDK",
    "organization": "CDK Global",
    "industry": "Software",
    "marketCap": "5.24B"
  },
  {
    "ticker": "CDLX",
    "organization": "Cardlytics",
    "industry": "Media",
    "marketCap": "2.79B"
  },
  {
    "ticker": "CDMO",
    "organization": "Avid Bioservices",
    "industry": "Biotechnology",
    "marketCap": "1.29B"
  },
  {
    "ticker": "CDNA",
    "organization": "CareDx",
    "industry": "Biotechnology",
    "marketCap": "3.27B"
  },
  {
    "ticker": "CDNS",
    "organization": "Cadence Design Systems",
    "industry": "Software",
    "marketCap": "42.22B"
  },
  {
    "ticker": "CDOR",
    "organization": "Condor Hospitality Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "102.59M"
  },
  {
    "ticker": "CDR",
    "organization": "Cedar Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "296.97M"
  },
  {
    "ticker": "CDTX",
    "organization": "Cidara Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "108.91M"
  },
  {
    "ticker": "CDW",
    "organization": "CDW Corporation",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CDXC",
    "organization": "ChromaDex",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "417.36M"
  },
  {
    "ticker": "CDXS",
    "organization": "Codexis",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "1.65B"
  },
  {
    "ticker": "CDZI",
    "organization": "Cadiz",
    "industry": " Inc.",
    "marketCap": "Water Utilities"
  },
  {
    "ticker": "CE",
    "organization": "Celanese",
    "industry": "Chemicals",
    "marketCap": "16.78B"
  },
  {
    "ticker": "CEA",
    "organization": "China Eastern Airlines",
    "industry": "Airlines",
    "marketCap": "10.21B"
  },
  {
    "ticker": "CECE",
    "organization": "CECO Environmental",
    "industry": "Commercial Services & Supplies",
    "marketCap": "259.70M"
  },
  {
    "ticker": "CEI",
    "organization": "Camber Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CEIX",
    "organization": "CONSOL Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CELC",
    "organization": "Celcuity",
    "industry": "Biotechnology",
    "marketCap": "264.34M"
  },
  {
    "ticker": "CELH",
    "organization": "Celsius Holdings",
    "industry": "Beverages",
    "marketCap": "7.05B"
  },
  {
    "ticker": "CELP",
    "organization": "Cypress Environmental Partners",
    "industry": "Energy Equipment & Services",
    "marketCap": "20.48M"
  },
  {
    "ticker": "CELU",
    "organization": "Celularity",
    "industry": "Biotechnology",
    "marketCap": "874.25M"
  },
  {
    "ticker": "CEMI",
    "organization": "Chembio Diagnostics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "70.47M"
  },
  {
    "ticker": "CENT",
    "organization": "Central Garden & Pet",
    "industry": "Household Products",
    "marketCap": "2.43B"
  },
  {
    "ticker": "CENTA",
    "organization": "Central Garden & Pet",
    "industry": "Household Products",
    "marketCap": "2.46B"
  },
  {
    "ticker": "CENX",
    "organization": "Century Aluminum",
    "industry": "Metals & Mining",
    "marketCap": "1.23B"
  },
  {
    "ticker": "CEPU",
    "organization": "Central Puerto",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "468.10M"
  },
  {
    "ticker": "CEQP",
    "organization": "Crestwood Equity Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CERE",
    "organization": "Cerevel Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "4.43B"
  },
  {
    "ticker": "CERN",
    "organization": "Cerner",
    "industry": "Health Care Technology",
    "marketCap": "20.91B"
  },
  {
    "ticker": "CERS",
    "organization": "Cerus",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.06B"
  },
  {
    "ticker": "CERT",
    "organization": "Certara",
    "industry": "Biotechnology",
    "marketCap": "5.26B"
  },
  {
    "ticker": "CET",
    "organization": "Central Securities",
    "industry": "Asset Management",
    "marketCap": "1.13B"
  },
  {
    "ticker": "CETX",
    "organization": "Cemtrex",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CEVA",
    "organization": "CEVA",
    "industry": " Inc.",
    "marketCap": "Semiconductors & Semiconductor Equipment"
  },
  {
    "ticker": "CF",
    "organization": "CF Industries",
    "industry": "Chemicals",
    "marketCap": "12.73B"
  },
  {
    "ticker": "CFB",
    "organization": "CrossFirst Bankshares",
    "industry": "Banks",
    "marketCap": "684.77M"
  },
  {
    "ticker": "CFBK",
    "organization": "CF Bankshares",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "133.34M"
  },
  {
    "ticker": "CFFE",
    "organization": "CF Acquisition VIII",
    "industry": "Shell Companies",
    "marketCap": "316.31M"
  },
  {
    "ticker": "CFFI",
    "organization": "C&F Financial",
    "industry": "Banks",
    "marketCap": "188.64M"
  },
  {
    "ticker": "CFFN",
    "organization": "Capitol Federal Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.60B"
  },
  {
    "ticker": "CFG",
    "organization": "Citizens Financial Group",
    "industry": "Banks",
    "marketCap": "20.57B"
  },
  {
    "ticker": "CFIV",
    "organization": "CF Acquisition IV",
    "industry": "Shell Companies",
    "marketCap": "617.85M"
  },
  {
    "ticker": "CFLT",
    "organization": "Confluent",
    "industry": "Software-Infrastructure",
    "marketCap": "15.98B"
  },
  {
    "ticker": "CFMS",
    "organization": "Conformis",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "241.75M"
  },
  {
    "ticker": "CFR",
    "organization": "Cullen/Frost Bankers",
    "industry": "Banks",
    "marketCap": "7.77B"
  },
  {
    "ticker": "CFRX",
    "organization": "ContraFect",
    "industry": "Biotechnology",
    "marketCap": "157.33M"
  },
  {
    "ticker": "CFV",
    "organization": "CF Acquisition V",
    "industry": "Shell Companies",
    "marketCap": "315.31M"
  },
  {
    "ticker": "CFVI",
    "organization": "CF Acquisition VI",
    "industry": "Shell Companies",
    "marketCap": "372.07M"
  },
  {
    "ticker": "CFX",
    "organization": "Colfax Corporation",
    "industry": "Machinery",
    "marketCap": "7.01B"
  },
  {
    "ticker": "CG",
    "organization": "The Carlyle Group",
    "industry": "Capital Markets",
    "marketCap": "17.10B"
  },
  {
    "ticker": "CGA",
    "organization": "China Green Agriculture",
    "industry": "Chemicals",
    "marketCap": "77.07M"
  },
  {
    "ticker": "CGAU",
    "organization": "Centerra Gold",
    "industry": "Gold",
    "marketCap": "2.05B"
  },
  {
    "ticker": "CGBD",
    "organization": "TCG BDC",
    "industry": " Inc.",
    "marketCap": "Capital Markets"
  },
  {
    "ticker": "CGC",
    "organization": "Canopy Growth",
    "industry": "Pharmaceuticals",
    "marketCap": "5.45B"
  },
  {
    "ticker": "CGEM",
    "organization": "Cullinan Management",
    "industry": "Biotechnology",
    "marketCap": "1.02B"
  },
  {
    "ticker": "CGEN",
    "organization": "Compugen",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "508.30M"
  },
  {
    "ticker": "CGNT",
    "organization": "Cognyte Software",
    "industry": "Software-Infrastructure",
    "marketCap": "1.37B"
  },
  {
    "ticker": "CGNX",
    "organization": "Cognex",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CGRN",
    "organization": "Capstone Green Energy",
    "industry": "Specialty Industrial Machinery",
    "marketCap": "73.23M"
  },
  {
    "ticker": "CHA",
    "organization": "China Telecom",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "20.46B"
  },
  {
    "ticker": "CHAA",
    "organization": "Catcha Investment",
    "industry": "Shell Companies",
    "marketCap": "364.87M"
  },
  {
    "ticker": "CHCI",
    "organization": "Comstock Holding Companies",
    "industry": "Household Durables",
    "marketCap": "39.09M"
  },
  {
    "ticker": "CHCO",
    "organization": "City Holding Company",
    "industry": "Banks",
    "marketCap": "1.21B"
  },
  {
    "ticker": "CHCT",
    "organization": "Community Healthcare Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.12B"
  },
  {
    "ticker": "CHD",
    "organization": "Church & Dwight",
    "industry": "Household Products",
    "marketCap": "20.24B"
  },
  {
    "ticker": "CHDN",
    "organization": "Churchill Downs",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CHE",
    "organization": "Chemed",
    "industry": "Health Care Providers & Services",
    "marketCap": "7.23B"
  },
  {
    "ticker": "CHEF",
    "organization": "The Chefs' Warehouse",
    "industry": "Food & Staples Retailing",
    "marketCap": "1.28B"
  },
  {
    "ticker": "CHEK",
    "organization": "Check-Cap",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "83.86M"
  },
  {
    "ticker": "CHGG",
    "organization": "Chegg",
    "industry": " Inc.",
    "marketCap": "Diversified Consumer Services"
  },
  {
    "ticker": "CHH",
    "organization": "Choice Hotels International",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CHK",
    "organization": "Chesapeake Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CHKP",
    "organization": "Check Point Software",
    "industry": "Software",
    "marketCap": "15.13B"
  },
  {
    "ticker": "CHL",
    "organization": "China Mobile",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "109.59B"
  },
  {
    "ticker": "CHMG",
    "organization": "Chemung Financial",
    "industry": "Banks",
    "marketCap": "211.21M"
  },
  {
    "ticker": "CHMI",
    "organization": "Cherry Hill Mortgage Investment",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "151.80M"
  },
  {
    "ticker": "CHNG",
    "organization": "Change Healthcare",
    "industry": "Health Care Technology",
    "marketCap": "6.57B"
  },
  {
    "ticker": "CHNR",
    "organization": "China Natural Resources",
    "industry": "Metals & Mining",
    "marketCap": "49.55M"
  },
  {
    "ticker": "CHPM",
    "organization": "CHP Merger",
    "industry": "Shell Companies",
    "marketCap": "375.75M"
  },
  {
    "ticker": "CHPT",
    "organization": "ChargePoint",
    "industry": "Specialty Retail",
    "marketCap": "6.15B"
  },
  {
    "ticker": "CHRA",
    "organization": "Charah Solutions",
    "industry": "Commercial Services & Supplies",
    "marketCap": "154.68M"
  },
  {
    "ticker": "CHRS",
    "organization": "Coherus BioSciences",
    "industry": "Biotechnology",
    "marketCap": "1.26B"
  },
  {
    "ticker": "CHRW",
    "organization": "C.H. Robinson",
    "industry": "Air Freight & Logistics",
    "marketCap": "11.39B"
  },
  {
    "ticker": "CHS",
    "organization": "Chico's FAS",
    "industry": "Specialty Retail",
    "marketCap": "549.87M"
  },
  {
    "ticker": "CHT",
    "organization": "Chunghwa Telecom",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "31.09B"
  },
  {
    "ticker": "CHTR",
    "organization": "Charter Communications",
    "industry": "Media",
    "marketCap": "133.74B"
  },
  {
    "ticker": "CHU",
    "organization": "China Unicom",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "17.40B"
  },
  {
    "ticker": "CHUY",
    "organization": "Chuy's Holdings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CHWY",
    "organization": "Chewy",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "28.15B"
  },
  {
    "ticker": "CHX",
    "organization": "ChampionX",
    "industry": "Energy Equipment & Services",
    "marketCap": "4.51B"
  },
  {
    "ticker": "CI",
    "organization": "Cigna",
    "industry": "Health Care Providers & Services",
    "marketCap": "68.91B"
  },
  {
    "ticker": "CIA",
    "organization": "Citizens",
    "industry": "Insurance",
    "marketCap": "314.42M"
  },
  {
    "ticker": "CIB",
    "organization": "Bancolombia",
    "industry": "Banks",
    "marketCap": "8.41B"
  },
  {
    "ticker": "CIDM",
    "organization": "Cinedigm",
    "industry": "Entertainment",
    "marketCap": "436.63M"
  },
  {
    "ticker": "CIEN",
    "organization": "Ciena Corporation",
    "industry": "Communications Equipment",
    "marketCap": "8.09B"
  },
  {
    "ticker": "CIFR",
    "organization": "Cipher Mining",
    "industry": "Capital Markets",
    "marketCap": "2.55B"
  },
  {
    "ticker": "CIG",
    "organization": "Companhia Energetica de Minas Gerais",
    "industry": "Electric Utilities",
    "marketCap": "4.83B"
  },
  {
    "ticker": "CIGI",
    "organization": "Colliers International Group",
    "industry": "Real Estate Management & Development",
    "marketCap": "5.58B"
  },
  {
    "ticker": "CIH",
    "organization": "China Index Holdings",
    "industry": "Professional Services",
    "marketCap": "130.57M"
  },
  {
    "ticker": "CIM",
    "organization": "Chimera Investment",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "3.50B"
  },
  {
    "ticker": "CINF",
    "organization": "Cincinnati Financial",
    "industry": "Insurance",
    "marketCap": "18.50B"
  },
  {
    "ticker": "CINR",
    "organization": "Ciner Resources",
    "industry": "Chemicals",
    "marketCap": "310.20M"
  },
  {
    "ticker": "CIO",
    "organization": "City Office REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "796.17M"
  },
  {
    "ticker": "CIR",
    "organization": "CIRCOR International",
    "industry": "Machinery",
    "marketCap": "675.63M"
  },
  {
    "ticker": "CIT",
    "organization": "CIT Group",
    "industry": "Banks",
    "marketCap": "5.29B"
  },
  {
    "ticker": "CIVB",
    "organization": "Civista Bancshares",
    "industry": "Banks",
    "marketCap": "352.43M"
  },
  {
    "ticker": "CIX",
    "organization": "CompX International",
    "industry": "Commercial Services & Supplies",
    "marketCap": "268.46M"
  },
  {
    "ticker": "CIXX",
    "organization": "CI Financial",
    "industry": "Asset Management",
    "marketCap": "4.08B"
  },
  {
    "ticker": "CIZN",
    "organization": "Citizens Holding Company",
    "industry": "Banks",
    "marketCap": "104.63M"
  },
  {
    "ticker": "CJJD",
    "organization": "China Jo-Jo Drugstores",
    "industry": "Food & Staples Retailing",
    "marketCap": "27.76M"
  },
  {
    "ticker": "CKPT",
    "organization": "Checkpoint Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "270.43M"
  },
  {
    "ticker": "CKX",
    "organization": "CKX Lands",
    "industry": "Real Estate Management & Development",
    "marketCap": "21.91M"
  },
  {
    "ticker": "CL",
    "organization": "Colgate-Palmolive",
    "industry": "Household Products",
    "marketCap": "64.04B"
  },
  {
    "ticker": "CLAA",
    "organization": "Colonnade Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "402.19M"
  },
  {
    "ticker": "CLAQ",
    "organization": "CleanTech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "193.64M"
  },
  {
    "ticker": "CLAR",
    "organization": "Clarus Corporation",
    "industry": "Leisure Products",
    "marketCap": "862.48M"
  },
  {
    "ticker": "CLAS",
    "organization": "Class Acceleration",
    "industry": "Shell Companies",
    "marketCap": "87.93M"
  },
  {
    "ticker": "CLAY",
    "organization": "Chavant Capital Acquisition",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "103.43M"
  },
  {
    "ticker": "CLB",
    "organization": "Core Laboratories",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.33B"
  },
  {
    "ticker": "CLBK",
    "organization": "Columbia Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "2.00B"
  },
  {
    "ticker": "CLBR",
    "organization": "Colombier Acquisition",
    "industry": "Shell Companies",
    "marketCap": "181.31M"
  },
  {
    "ticker": "CLBS",
    "organization": "Caladrius Biosciences",
    "industry": "Biotechnology",
    "marketCap": "71.47M"
  },
  {
    "ticker": "CLBT",
    "organization": "Cellebrite",
    "industry": "Software-Infrastructure",
    "marketCap": "1.72B"
  },
  {
    "ticker": "CLDB",
    "organization": "Cortland Bancorp",
    "industry": "Banks",
    "marketCap": "118.32M"
  },
  {
    "ticker": "CLDR",
    "organization": "Cloudera",
    "industry": "Software",
    "marketCap": "4.73B"
  },
  {
    "ticker": "CLDT",
    "organization": "Chatham Lodging Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "602.64M"
  },
  {
    "ticker": "CLDX",
    "organization": "Celldex Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.63B"
  },
  {
    "ticker": "CLEU",
    "organization": "China Liberal Education Holdings",
    "industry": "Education & Training Services",
    "marketCap": "26.52M"
  },
  {
    "ticker": "CLF",
    "organization": "Cleveland-Cliffs",
    "industry": "Metals & Mining",
    "marketCap": "9.82B"
  },
  {
    "ticker": "CLFD",
    "organization": "Clearfield",
    "industry": "Communications Equipment",
    "marketCap": "619.51M"
  },
  {
    "ticker": "CLGN",
    "organization": "CollPlant Biotechnologies",
    "industry": "Biotechnology",
    "marketCap": "168.85M"
  },
  {
    "ticker": "CLH",
    "organization": "Clean Harbors",
    "industry": "Commercial Services & Supplies",
    "marketCap": "5.66B"
  },
  {
    "ticker": "CLI",
    "organization": "Mack-Cali Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.57B"
  },
  {
    "ticker": "CLIM",
    "organization": "Climate Real Impact Solutions II",
    "industry": "Shell Companies",
    "marketCap": "295.23M"
  },
  {
    "ticker": "CLIR",
    "organization": "ClearSign Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CLLS",
    "organization": "Cellectis",
    "industry": "Biotechnology",
    "marketCap": "586.01M"
  },
  {
    "ticker": "CLMT",
    "organization": "Calumet Specialty Products",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CLNE",
    "organization": "Clean Energy Fuels",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CLNN",
    "organization": "Clene",
    "industry": "Biotechnology",
    "marketCap": "402.77M"
  },
  {
    "ticker": "CLOE",
    "organization": "Clover Leaf Capital",
    "industry": "Shell Companies",
    "marketCap": "162.97M"
  },
  {
    "ticker": "CLOV",
    "organization": "Clover Health",
    "industry": "Healthcare Plans",
    "marketCap": "3.20B"
  },
  {
    "ticker": "CLPR",
    "organization": "Clipper Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "260.22M"
  },
  {
    "ticker": "CLPS",
    "organization": "CLPS Inc.",
    "industry": "IT Services",
    "marketCap": "58.41M"
  },
  {
    "ticker": "CLPT",
    "organization": "ClearPoint Neuro",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "400.14M"
  },
  {
    "ticker": "CLR",
    "organization": "Continental Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CLRB",
    "organization": "Cellectar BioSciences",
    "industry": "Biotechnology",
    "marketCap": "55.00M"
  },
  {
    "ticker": "CLRM",
    "organization": "Clarim Acquisition",
    "industry": "Shell Companies",
    "marketCap": "352.01M"
  },
  {
    "ticker": "CLRO",
    "organization": "ClearOne",
    "industry": "Communications Equipment",
    "marketCap": "43.94M"
  },
  {
    "ticker": "CLS",
    "organization": "Celestica",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CLSD",
    "organization": "Clearside Biomedical",
    "industry": "Pharmaceuticals",
    "marketCap": "352.10M"
  },
  {
    "ticker": "CLSK",
    "organization": "Cleanspark",
    "industry": "Software",
    "marketCap": "437.45M"
  },
  {
    "ticker": "CLSN",
    "organization": "Celsion",
    "industry": "Biotechnology",
    "marketCap": "79.85M"
  },
  {
    "ticker": "CLVR",
    "organization": "Clever Leaves",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "201.22M"
  },
  {
    "ticker": "CLVS",
    "organization": "Clovis Oncology",
    "industry": "Biotechnology",
    "marketCap": "529.29M"
  },
  {
    "ticker": "CLVT",
    "organization": "Clarivate",
    "industry": "Professional Services",
    "marketCap": "13.74B"
  },
  {
    "ticker": "CLW",
    "organization": "Clearwater Paper",
    "industry": "Paper & Forest Products",
    "marketCap": "640.46M"
  },
  {
    "ticker": "CLWT",
    "organization": "Euro Tech Holdings",
    "industry": "Trading Companies & Distributors",
    "marketCap": "16.86M"
  },
  {
    "ticker": "CLX",
    "organization": "Clorox",
    "industry": "Household Products",
    "marketCap": "20.15B"
  },
  {
    "ticker": "CLXT",
    "organization": "Calyxt",
    "industry": "Biotechnology",
    "marketCap": "121.50M"
  },
  {
    "ticker": "CM",
    "organization": "Canadian Imperial Bank of Commerce",
    "industry": "Banks",
    "marketCap": "50.75B"
  },
  {
    "ticker": "CMA",
    "organization": "Comerica",
    "industry": "Banks",
    "marketCap": "10.97B"
  },
  {
    "ticker": "CMAX",
    "organization": "CareMax",
    "industry": "Health Information Services",
    "marketCap": "867.26M"
  },
  {
    "ticker": "CMBM",
    "organization": "Cambium Networks",
    "industry": "Communications Equipment",
    "marketCap": "997.00M"
  },
  {
    "ticker": "CMC",
    "organization": "Commercial Metals Company",
    "industry": "Metals & Mining",
    "marketCap": "3.66B"
  },
  {
    "ticker": "CMCL",
    "organization": "Caledonia Mining",
    "industry": "Metals & Mining",
    "marketCap": "147.38M"
  },
  {
    "ticker": "CMCM",
    "organization": "Cheetah Mobile",
    "industry": "Software",
    "marketCap": "228.70M"
  },
  {
    "ticker": "CMCO",
    "organization": "Columbus McKinnon",
    "industry": "Machinery",
    "marketCap": "1.37B"
  },
  {
    "ticker": "CMCSA",
    "organization": "Comcast",
    "industry": "Media",
    "marketCap": "262.58B"
  },
  {
    "ticker": "CMCT",
    "organization": "CIM Commercial Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "194.67M"
  },
  {
    "ticker": "CME",
    "organization": "CME Group",
    "industry": "Capital Markets",
    "marketCap": "69.50B"
  },
  {
    "ticker": "CMG",
    "organization": "Chipotle Mexican Grill",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CMI",
    "organization": "Cummins",
    "industry": "Machinery",
    "marketCap": "32.74B"
  },
  {
    "ticker": "CMLS",
    "organization": "Cumulus Media",
    "industry": "Media",
    "marketCap": "264.68M"
  },
  {
    "ticker": "CMLT",
    "organization": "CM Life Sciences III",
    "industry": "Shell Companies",
    "marketCap": "575.36M"
  },
  {
    "ticker": "CMMB",
    "organization": "Chemomab Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "128.34M"
  },
  {
    "ticker": "CMO",
    "organization": "Capstead Mortgage",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "648.10M"
  },
  {
    "ticker": "CMP",
    "organization": "Compass Minerals",
    "industry": "Metals & Mining",
    "marketCap": "2.19B"
  },
  {
    "ticker": "CMPI",
    "organization": "Checkmate Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "85.85M"
  },
  {
    "ticker": "CMPR",
    "organization": "Cimpress",
    "industry": "Commercial Services & Supplies",
    "marketCap": "2.27B"
  },
  {
    "ticker": "CMPS",
    "organization": "COMPASS Pathways",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.27B"
  },
  {
    "ticker": "CMRE",
    "organization": "Costamare",
    "industry": "Marine",
    "marketCap": "1.95B"
  },
  {
    "ticker": "CMRX",
    "organization": "Chimerix",
    "industry": "Biotechnology",
    "marketCap": "539.49M"
  },
  {
    "ticker": "CMS",
    "organization": "CMS Energy",
    "industry": "Multi-Utilities",
    "marketCap": "17.30B"
  },
  {
    "ticker": "CMT",
    "organization": "Core Molding Technologies",
    "industry": "Chemicals",
    "marketCap": "97.66M"
  },
  {
    "ticker": "CMTL",
    "organization": "Comtech Telecommunications",
    "industry": "Communications Equipment",
    "marketCap": "670.49M"
  },
  {
    "ticker": "CNA",
    "organization": "CNA Financial",
    "industry": "Insurance",
    "marketCap": "11.49B"
  },
  {
    "ticker": "CNBKA",
    "organization": "Century Bancorp",
    "industry": "Banks",
    "marketCap": "511.53M"
  },
  {
    "ticker": "CNC",
    "organization": "Centene",
    "industry": "Health Care Providers & Services",
    "marketCap": "36.33B"
  },
  {
    "ticker": "CNCE",
    "organization": "Concert Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "103.60M"
  },
  {
    "ticker": "CND",
    "organization": "Concord Acquisition",
    "industry": "Shell Companies",
    "marketCap": "359.22M"
  },
  {
    "ticker": "CNDT",
    "organization": "Conduent",
    "industry": "IT Services",
    "marketCap": "1.44B"
  },
  {
    "ticker": "CNET",
    "organization": "ZW Data Action Technologies",
    "industry": "Media",
    "marketCap": "42.93M"
  },
  {
    "ticker": "CNEY",
    "organization": "CN Energy Group",
    "industry": "Specialty Chemicals",
    "marketCap": "119.68M"
  },
  {
    "ticker": "CNF",
    "organization": "CNFinance Holdings",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "390.92M"
  },
  {
    "ticker": "CNFR",
    "organization": "Conifer Holdings",
    "industry": "Insurance",
    "marketCap": "28.00M"
  },
  {
    "ticker": "CNHI",
    "organization": "CNH Industrial",
    "industry": "Machinery",
    "marketCap": "22.47B"
  },
  {
    "ticker": "CNI",
    "organization": "Canadian National Railway",
    "industry": "Road & Rail",
    "marketCap": "82.84B"
  },
  {
    "ticker": "CNK",
    "organization": "Cinemark Holdings",
    "industry": "Entertainment",
    "marketCap": "2.39B"
  },
  {
    "ticker": "CNM",
    "organization": "Core & Main",
    "industry": "Industrial Distribution",
    "marketCap": "6.81B"
  },
  {
    "ticker": "CNMD",
    "organization": "CONMED Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.82B"
  },
  {
    "ticker": "CNNB",
    "organization": "Cincinnati Bancorp",
    "industry": "Banks-Regional",
    "marketCap": "43.77M"
  },
  {
    "ticker": "CNNE",
    "organization": "Cannae Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "2.81B"
  },
  {
    "ticker": "CNO",
    "organization": "CNO Financial Group",
    "industry": "Insurance",
    "marketCap": "3.01B"
  },
  {
    "ticker": "CNOB",
    "organization": "ConnectOne Bancorp",
    "industry": "Banks",
    "marketCap": "1.21B"
  },
  {
    "ticker": "CNP",
    "organization": "CenterPoint Energy",
    "industry": "Multi-Utilities",
    "marketCap": "14.74B"
  },
  {
    "ticker": "CNQ",
    "organization": "Canadian Natural Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CNR",
    "organization": "Cornerstone Building Brands",
    "industry": "Building Products",
    "marketCap": "1.85B"
  },
  {
    "ticker": "CNS",
    "organization": "Cohen & Steers",
    "industry": "Capital Markets",
    "marketCap": "4.13B"
  },
  {
    "ticker": "CNSL",
    "organization": "Consolidated Communications Holdings",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "903.60M"
  },
  {
    "ticker": "CNSP",
    "organization": "CNS Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "40.64M"
  },
  {
    "ticker": "CNTA",
    "organization": "Centessa Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.47B"
  },
  {
    "ticker": "CNTB",
    "organization": "Connect Biopharma Holdings",
    "industry": "Biotechnology",
    "marketCap": "1.38B"
  },
  {
    "ticker": "CNTG",
    "organization": "Centogene",
    "industry": "Biotechnology",
    "marketCap": "237.02M"
  },
  {
    "ticker": "CNTQ",
    "organization": "Chardan NexTech Acquisition 2",
    "industry": "Shell Companies",
    "marketCap": "134.06M"
  },
  {
    "ticker": "CNTY",
    "organization": "Century Casinos",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CNVY",
    "organization": "Convey Holding Parent",
    "industry": "Health Information Services",
    "marketCap": "609.66M"
  },
  {
    "ticker": "CNX",
    "organization": "CNX Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CNXC",
    "organization": "Concentrix",
    "industry": "IT Services",
    "marketCap": "9.27B"
  },
  {
    "ticker": "CNXN",
    "organization": "PC Connection",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CO",
    "organization": "Global Cord Blood",
    "industry": "Health Care Providers & Services",
    "marketCap": "561.57M"
  },
  {
    "ticker": "COCP",
    "organization": "Cocrystal Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "99.42M"
  },
  {
    "ticker": "CODA",
    "organization": "Coda Octopus Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CODI",
    "organization": "Compass Diversified Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "1.82B"
  },
  {
    "ticker": "CODX",
    "organization": "Co-Diagnostics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "265.79M"
  },
  {
    "ticker": "COE",
    "organization": "China Online Education Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "56.13M"
  },
  {
    "ticker": "COF",
    "organization": "Capital One Financial",
    "industry": "Consumer Finance",
    "marketCap": "73.59B"
  },
  {
    "ticker": "COFS",
    "organization": "ChoiceOne Financial Services",
    "industry": "Banks",
    "marketCap": "187.40M"
  },
  {
    "ticker": "COG",
    "organization": "Cabot Oil & Gas",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "COGT",
    "organization": "Cogent Biosciences",
    "industry": "Biotechnology",
    "marketCap": "339.91M"
  },
  {
    "ticker": "COHN",
    "organization": "Cohen & Company",
    "industry": "Capital Markets",
    "marketCap": "32.75M"
  },
  {
    "ticker": "COHR",
    "organization": "Coherent",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "COHU",
    "organization": "Cohu",
    "industry": " Inc.",
    "marketCap": "Semiconductors & Semiconductor Equipment"
  },
  {
    "ticker": "COIN",
    "organization": "Coinbase",
    "industry": "Software-Application",
    "marketCap": "60.84B"
  },
  {
    "ticker": "COKE",
    "organization": "Coca-Cola Consolidated",
    "industry": "Beverages",
    "marketCap": "3.70B"
  },
  {
    "ticker": "COLB",
    "organization": "Columbia Banking System",
    "industry": "Banks",
    "marketCap": "2.76B"
  },
  {
    "ticker": "COLD",
    "organization": "Americold Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "7.61B"
  },
  {
    "ticker": "COLI",
    "organization": "Colicity",
    "industry": "Shell Companies",
    "marketCap": "420.47M"
  },
  {
    "ticker": "COLL",
    "organization": "Collegium Pharmaceutical",
    "industry": "Pharmaceuticals",
    "marketCap": "701.33M"
  },
  {
    "ticker": "COLM",
    "organization": "Columbia Sportswear",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "COMM",
    "organization": "CommScope",
    "industry": "Communications Equipment",
    "marketCap": "2.76B"
  },
  {
    "ticker": "COMP",
    "organization": "Compass",
    "industry": "Software-Application",
    "marketCap": "4.97B"
  },
  {
    "ticker": "COMS",
    "organization": "ComSovereign Holding",
    "industry": "Telecom Services",
    "marketCap": "116.78M"
  },
  {
    "ticker": "CONE",
    "organization": "CyrusOne",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "9.70B"
  },
  {
    "ticker": "CONN",
    "organization": "Conn's",
    "industry": "Specialty Retail",
    "marketCap": "668.09M"
  },
  {
    "ticker": "CONX",
    "organization": "CONX Corp.",
    "industry": "Shell Companies",
    "marketCap": "918.95M"
  },
  {
    "ticker": "COO",
    "organization": "Cooper Companies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "20.57B"
  },
  {
    "ticker": "COOK",
    "organization": "Traeger",
    "industry": "Furnishings",
    "marketCap": " Fixtures & Appliances"
  },
  {
    "ticker": "COOL",
    "organization": "Corner Growth Acquisition",
    "industry": "Shell Companies",
    "marketCap": "468.96M"
  },
  {
    "ticker": "COOP",
    "organization": "Mr. Cooper Group",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "3.12B"
  },
  {
    "ticker": "COP",
    "organization": "ConocoPhillips",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "COR",
    "organization": "CoreSite Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.19B"
  },
  {
    "ticker": "CORR",
    "organization": "CorEnergy Infrastructure Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "68.57M"
  },
  {
    "ticker": "CORS",
    "organization": "Corsair Partnering",
    "industry": "Shell Companies",
    "marketCap": "263.25M"
  },
  {
    "ticker": "CORT",
    "organization": "Corcept Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "2.31B"
  },
  {
    "ticker": "COST",
    "organization": "Costco",
    "industry": "Food & Staples Retailing",
    "marketCap": "197.36B"
  },
  {
    "ticker": "COTY",
    "organization": "Coty Inc.",
    "industry": "Personal Products",
    "marketCap": "6.78B"
  },
  {
    "ticker": "COUP",
    "organization": "Coupa Software",
    "industry": "Software",
    "marketCap": "16.05B"
  },
  {
    "ticker": "COUR",
    "organization": "Coursera",
    "industry": "Education & Training Services",
    "marketCap": "4.39B"
  },
  {
    "ticker": "COVA",
    "organization": "Crescent Cove Acquisition",
    "industry": "Shell Companies",
    "marketCap": "364.50M"
  },
  {
    "ticker": "COWN",
    "organization": "Cowen Inc.",
    "industry": "Capital Markets",
    "marketCap": "995.53M"
  },
  {
    "ticker": "CP",
    "organization": "Canadian Pacific Railway",
    "industry": "Road & Rail",
    "marketCap": "44.34B"
  },
  {
    "ticker": "CPA",
    "organization": "Copa Holdings",
    "industry": "Airlines",
    "marketCap": "3.59B"
  },
  {
    "ticker": "CPAA",
    "organization": "Conyers Park III Acquisition",
    "industry": "Shell Companies",
    "marketCap": "425.69M"
  },
  {
    "ticker": "CPAC",
    "organization": "Cementos Pacasmayo",
    "industry": "Construction Materials",
    "marketCap": "500.35M"
  },
  {
    "ticker": "CPAR",
    "organization": "Catalyst Partners Acquisition",
    "industry": "Shell Companies",
    "marketCap": "380.25M"
  },
  {
    "ticker": "CPB",
    "organization": "Campbell Soup",
    "industry": "Food Products",
    "marketCap": "12.61B"
  },
  {
    "ticker": "CPE",
    "organization": "Callon Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CPF",
    "organization": "Central Pacific Financial",
    "industry": "Banks",
    "marketCap": "746.39M"
  },
  {
    "ticker": "CPG",
    "organization": "Crescent Point Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CPHC",
    "organization": "Canterbury Park Holding",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CPHI",
    "organization": "China Pharma Holdings",
    "industry": "Pharmaceuticals",
    "marketCap": "23.45M"
  },
  {
    "ticker": "CPIX",
    "organization": "Cumberland Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "40.62M"
  },
  {
    "ticker": "CPK",
    "organization": "Chesapeake Utilities",
    "industry": "Gas Utilities",
    "marketCap": "2.16B"
  },
  {
    "ticker": "CPLG",
    "organization": "CorePoint Lodging",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "906.20M"
  },
  {
    "ticker": "CPLP",
    "organization": "Capital Product Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CPNG",
    "organization": "Coupang",
    "industry": "Internet Retail",
    "marketCap": "46.88B"
  },
  {
    "ticker": "CPOP",
    "organization": "Pop Culture Group",
    "industry": "Advertising Agencies",
    "marketCap": "53.72M"
  },
  {
    "ticker": "CPRI",
    "organization": "Capri Holdings",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "CPRT",
    "organization": "Copart",
    "industry": "Commercial Services & Supplies",
    "marketCap": "33.33B"
  },
  {
    "ticker": "CPRX",
    "organization": "Catalyst Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "531.37M"
  },
  {
    "ticker": "CPS",
    "organization": "Cooper-Standard Holdings",
    "industry": "Auto Components",
    "marketCap": "366.46M"
  },
  {
    "ticker": "CPSH",
    "organization": "CPS Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CPSI",
    "organization": "Computer Programs & Systems",
    "industry": "Health Care Technology",
    "marketCap": "526.61M"
  },
  {
    "ticker": "CPSR",
    "organization": "Capstar Special Purpose Acquisition",
    "industry": "Shell Companies",
    "marketCap": "342.24M"
  },
  {
    "ticker": "CPSS",
    "organization": "Consumer Portfolio Services",
    "industry": "Consumer Finance",
    "marketCap": "133.30M"
  },
  {
    "ticker": "CPT",
    "organization": "Camden Property Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "15.04B"
  },
  {
    "ticker": "CPTK",
    "organization": "Crown PropTech Acquisitions",
    "industry": "Shell Companies",
    "marketCap": "335.34M"
  },
  {
    "ticker": "CPUH",
    "organization": "Compute Health Acquisition",
    "industry": "Shell Companies",
    "marketCap": "1.05B"
  },
  {
    "ticker": "CQP",
    "organization": "Cheniere Energy Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CR",
    "organization": "Crane Co.",
    "industry": "Machinery",
    "marketCap": "5.69B"
  },
  {
    "ticker": "CRAI",
    "organization": "CRA International",
    "industry": "Professional Services",
    "marketCap": "745.63M"
  },
  {
    "ticker": "CRBP",
    "organization": "Corbus Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "126.73M"
  },
  {
    "ticker": "CRBU",
    "organization": "Caribou Biosciences",
    "industry": "Biotechnology",
    "marketCap": "1.24B"
  },
  {
    "ticker": "CRC",
    "organization": "California Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CRCT",
    "organization": "Cricut",
    "industry": "Computer Hardware",
    "marketCap": "6.03B"
  },
  {
    "ticker": "CRD.A",
    "organization": "Crawford & Company",
    "industry": "Insurance Brokers",
    "marketCap": "486.58M"
  },
  {
    "ticker": "CRD.B",
    "organization": "Crawford & Company",
    "industry": "Insurance Brokers",
    "marketCap": "472.79M"
  },
  {
    "ticker": "CRDF",
    "organization": "Cardiff Oncology",
    "industry": "Biotechnology",
    "marketCap": "286.36M"
  },
  {
    "ticker": "CRDL",
    "organization": "Cardiol Therapeutics",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "170.50M"
  },
  {
    "ticker": "CREE",
    "organization": "Cree",
    "industry": " Inc.",
    "marketCap": "Semiconductors & Semiconductor Equipment"
  },
  {
    "ticker": "CREG",
    "organization": "China Recycling Energy",
    "industry": "Commercial Services & Supplies",
    "marketCap": "39.50M"
  },
  {
    "ticker": "CRESY",
    "organization": "Cresud",
    "industry": "Real Estate Management & Development",
    "marketCap": "576.19M"
  },
  {
    "ticker": "CREX",
    "organization": "Creative Realities",
    "industry": "Media",
    "marketCap": "15.80M"
  },
  {
    "ticker": "CRH",
    "organization": "CRH Plc",
    "industry": "Construction Materials",
    "marketCap": "36.79B"
  },
  {
    "ticker": "CRHC",
    "organization": "Cohn Robbins Holdings",
    "industry": "Shell Companies",
    "marketCap": "1.02B"
  },
  {
    "ticker": "CRI",
    "organization": "Carter's",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "CRIS",
    "organization": "Curis",
    "industry": " Inc.",
    "marketCap": "Biotechnology"
  },
  {
    "ticker": "CRK",
    "organization": "Comstock Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CRKN",
    "organization": "Crown Electrokinetics",
    "industry": "Specialty Chemicals",
    "marketCap": "60.15M"
  },
  {
    "ticker": "CRL",
    "organization": "Charles River Laboratories",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "21.01B"
  },
  {
    "ticker": "CRM",
    "organization": "Salesforce.com",
    "industry": "Software",
    "marketCap": "267.77B"
  },
  {
    "ticker": "CRMD",
    "organization": "CorMedix",
    "industry": "Pharmaceuticals",
    "marketCap": "182.43M"
  },
  {
    "ticker": "CRMT",
    "organization": "America's Car-Mart",
    "industry": "Specialty Retail",
    "marketCap": "763.39M"
  },
  {
    "ticker": "CRNC",
    "organization": "Cerence",
    "industry": "Software",
    "marketCap": "3.47B"
  },
  {
    "ticker": "CRNT",
    "organization": "Ceragon Networks",
    "industry": "Communications Equipment",
    "marketCap": "288.84M"
  },
  {
    "ticker": "CRNX",
    "organization": "Crinetics Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "835.60M"
  },
  {
    "ticker": "CRON",
    "organization": "Cronos Group",
    "industry": "Pharmaceuticals",
    "marketCap": "2.10B"
  },
  {
    "ticker": "CROX",
    "organization": "Crocs",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "CRS",
    "organization": "Carpenter Technology",
    "industry": "Metals & Mining",
    "marketCap": "1.62B"
  },
  {
    "ticker": "CRSP",
    "organization": "CRISPR Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "8.51B"
  },
  {
    "ticker": "CRSR",
    "organization": "Corsair Gaming",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "CRT",
    "organization": "Cross Timbers Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CRTD",
    "organization": "Creatd",
    "industry": "Internet Content & Information",
    "marketCap": "36.92M"
  },
  {
    "ticker": "CRTO",
    "organization": "Criteo",
    "industry": "Media",
    "marketCap": "2.30B"
  },
  {
    "ticker": "CRTX",
    "organization": "Cortexyme",
    "industry": "Biotechnology",
    "marketCap": "2.88B"
  },
  {
    "ticker": "CRU",
    "organization": "Crucible Acquisition",
    "industry": "Shell Companies",
    "marketCap": "315.68M"
  },
  {
    "ticker": "CRUS",
    "organization": "Cirrus Logic",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "4.75B"
  },
  {
    "ticker": "CRVL",
    "organization": "CorVel",
    "industry": "Health Care Providers & Services",
    "marketCap": "3.29B"
  },
  {
    "ticker": "CRVS",
    "organization": "Corvus Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "219.74M"
  },
  {
    "ticker": "CRWD",
    "organization": "CrowdStrike",
    "industry": "Software",
    "marketCap": "56.88B"
  },
  {
    "ticker": "CRWS",
    "organization": "Crown Crafts",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "CRXT",
    "organization": "Clarus Therapeutics",
    "industry": "Drug Manufacturers-General",
    "marketCap": "95.38M"
  },
  {
    "ticker": "CRY",
    "organization": "CryoLife",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "864.35M"
  },
  {
    "ticker": "CRZN",
    "organization": "Corazon Capital V838 Monoceros",
    "industry": "Shell Companies",
    "marketCap": "247.62M"
  },
  {
    "ticker": "CS",
    "organization": "Credit Suisse Group",
    "industry": "Capital Markets",
    "marketCap": "24.08B"
  },
  {
    "ticker": "CSBR",
    "organization": "Champions Oncology",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "138.28M"
  },
  {
    "ticker": "CSCO",
    "organization": "Cisco Systems",
    "industry": "Communications Equipment",
    "marketCap": "230.54B"
  },
  {
    "ticker": "CSCW",
    "organization": "Color Star Technology",
    "industry": "Entertainment",
    "marketCap": "62.70M"
  },
  {
    "ticker": "CSGP",
    "organization": "CoStar Group",
    "industry": "Professional Services",
    "marketCap": "33.99B"
  },
  {
    "ticker": "CSGS",
    "organization": "CSG Systems International",
    "industry": "IT Services",
    "marketCap": "1.58B"
  },
  {
    "ticker": "CSII",
    "organization": "Cardiovascular Systems",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.33B"
  },
  {
    "ticker": "CSIQ",
    "organization": "Canadian Solar",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.06B"
  },
  {
    "ticker": "CSL",
    "organization": "Carlisle Companies",
    "industry": "Industrial Conglomerates",
    "marketCap": "10.51B"
  },
  {
    "ticker": "CSLT",
    "organization": "Castlight Health",
    "industry": "Health Care Technology",
    "marketCap": "270.83M"
  },
  {
    "ticker": "CSOD",
    "organization": "Cornerstone OnDemand",
    "industry": "Software",
    "marketCap": "3.83B"
  },
  {
    "ticker": "CSPI",
    "organization": "CSP Inc.",
    "industry": "IT Services",
    "marketCap": "37.25M"
  },
  {
    "ticker": "CSPR",
    "organization": "Casper Sleep",
    "industry": "Furnishings",
    "marketCap": " Fixtures & Appliances"
  },
  {
    "ticker": "CSR",
    "organization": "Centerspace",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CSSE",
    "organization": "Chicken Soup for the Soul",
    "industry": "Entertainment",
    "marketCap": "375.96M"
  },
  {
    "ticker": "CSTA",
    "organization": "Constellation Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "387.53M"
  },
  {
    "ticker": "CSTE",
    "organization": "Caesarstone",
    "industry": "Building Products",
    "marketCap": "438.44M"
  },
  {
    "ticker": "CSTL",
    "organization": "Castle Biosciences",
    "industry": "Biotechnology",
    "marketCap": "1.64B"
  },
  {
    "ticker": "CSTM",
    "organization": "Constellium",
    "industry": "Metals & Mining",
    "marketCap": "2.66B"
  },
  {
    "ticker": "CSTR",
    "organization": "CapStar Financial Holdings",
    "industry": "Banks",
    "marketCap": "470.97M"
  },
  {
    "ticker": "CSU",
    "organization": "Capital Senior Living",
    "industry": "Health Care Providers & Services",
    "marketCap": "77.15M"
  },
  {
    "ticker": "CSV",
    "organization": "Carriage Services",
    "industry": "Diversified Consumer Services",
    "marketCap": "805.01M"
  },
  {
    "ticker": "CSWC",
    "organization": "Capital Southwest",
    "industry": "Capital Markets",
    "marketCap": "559.00M"
  },
  {
    "ticker": "CSWI",
    "organization": "CSW Industrials",
    "industry": "Building Products",
    "marketCap": "2.02B"
  },
  {
    "ticker": "CSX",
    "organization": "CSX Corporation",
    "industry": "Road & Rail",
    "marketCap": "68.40B"
  },
  {
    "ticker": "CTAQ",
    "organization": "Carney Technology Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "509.92M"
  },
  {
    "ticker": "CTAS",
    "organization": "Cintas",
    "industry": "Commercial Services & Supplies",
    "marketCap": "39.59B"
  },
  {
    "ticker": "CTBI",
    "organization": "Community Trust Bancorp",
    "industry": "Banks",
    "marketCap": "750.95M"
  },
  {
    "ticker": "CTEK",
    "organization": "CynergisTek",
    "industry": "Health Care Providers & Services",
    "marketCap": "21.45M"
  },
  {
    "ticker": "CTG",
    "organization": "Computer Task Group",
    "industry": "IT Services",
    "marketCap": "122.47M"
  },
  {
    "ticker": "CTHR",
    "organization": "Charles & Colvard",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "CTIB",
    "organization": "Yunhong CTI",
    "industry": "Household Durables",
    "marketCap": "11.36M"
  },
  {
    "ticker": "CTIC",
    "organization": "CTI BioPharma",
    "industry": "Biotechnology",
    "marketCap": "272.46M"
  },
  {
    "ticker": "CTK",
    "organization": "CooTek (Cayman) Inc.",
    "industry": "Software",
    "marketCap": "82.54M"
  },
  {
    "ticker": "CTKB",
    "organization": "Cytek Biosciences",
    "industry": "Medical Devices",
    "marketCap": "2.84B"
  },
  {
    "ticker": "CTLP",
    "organization": "Cantaloupe",
    "industry": "Information Technology Services",
    "marketCap": "750.35M"
  },
  {
    "ticker": "CTLT",
    "organization": "Catalent",
    "industry": "Pharmaceuticals",
    "marketCap": "22.74B"
  },
  {
    "ticker": "CTMX",
    "organization": "CytomX Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "328.72M"
  },
  {
    "ticker": "CTO",
    "organization": "Consolidated-Tomoka Land Co.",
    "industry": "Real Estate Management & Development",
    "marketCap": "325.94M"
  },
  {
    "ticker": "CTOS",
    "organization": "Custom Truck One Source",
    "industry": "Trading Companies & Distributors",
    "marketCap": "2.30B"
  },
  {
    "ticker": "CTRE",
    "organization": "CareTrust REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.02B"
  },
  {
    "ticker": "CTRM",
    "organization": "Castor Maritime",
    "industry": "Marine",
    "marketCap": "233.80M"
  },
  {
    "ticker": "CTRN",
    "organization": "Citi Trends",
    "industry": "Specialty Retail",
    "marketCap": "669.58M"
  },
  {
    "ticker": "CTS",
    "organization": "CTS Corporation",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "CTSH",
    "organization": "Cognizant",
    "industry": "IT Services",
    "marketCap": "38.97B"
  },
  {
    "ticker": "CTSO",
    "organization": "CytoSorbents",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "351.50M"
  },
  {
    "ticker": "CTT",
    "organization": "CatchMark Timber Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "578.48M"
  },
  {
    "ticker": "CTVA",
    "organization": "Corteva",
    "industry": "Chemicals",
    "marketCap": "31.94B"
  },
  {
    "ticker": "CTXR",
    "organization": "Citius Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "291.23M"
  },
  {
    "ticker": "CTXS",
    "organization": "Citrix Systems",
    "industry": "Software",
    "marketCap": "13.33B"
  },
  {
    "ticker": "CUBE",
    "organization": "CubeSmart",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "9.78B"
  },
  {
    "ticker": "CUBI",
    "organization": "Customers Bancorp",
    "industry": "Banks",
    "marketCap": "1.40B"
  },
  {
    "ticker": "CUE",
    "organization": "Cue Biopharma",
    "industry": "Biotechnology",
    "marketCap": "460.34M"
  },
  {
    "ticker": "CUEN",
    "organization": "Cuentas",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "42.30M"
  },
  {
    "ticker": "CUK",
    "organization": "Carnival",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CULL",
    "organization": "Cullman Bancorp",
    "industry": "Banks",
    "marketCap": "95.54M"
  },
  {
    "ticker": "CULP",
    "organization": "Culp",
    "industry": " Inc.",
    "marketCap": "Textiles"
  },
  {
    "ticker": "CURI",
    "organization": "CuriosityStream",
    "industry": "Broadcasting",
    "marketCap": "561.71M"
  },
  {
    "ticker": "CURO",
    "organization": "CURO Group Holdings",
    "industry": "Consumer Finance",
    "marketCap": "739.10M"
  },
  {
    "ticker": "CURV",
    "organization": "Torrid Holdings",
    "industry": "Apparel Retail",
    "marketCap": "1.70B"
  },
  {
    "ticker": "CUTR",
    "organization": "Cutera",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "832.89M"
  },
  {
    "ticker": "CUZ",
    "organization": "Cousins Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "5.57B"
  },
  {
    "ticker": "CVA",
    "organization": "Covanta Holding",
    "industry": "Commercial Services & Supplies",
    "marketCap": "2.68B"
  },
  {
    "ticker": "CVAC",
    "organization": "CureVac",
    "industry": "Biotechnology",
    "marketCap": "10.20B"
  },
  {
    "ticker": "CVBF",
    "organization": "CVB Financial",
    "industry": "Banks",
    "marketCap": "2.80B"
  },
  {
    "ticker": "CVCO",
    "organization": "Cavco Industries",
    "industry": "Household Durables",
    "marketCap": "2.23B"
  },
  {
    "ticker": "CVCY",
    "organization": "Central Valley Community Bancorp",
    "industry": "Banks",
    "marketCap": "261.14M"
  },
  {
    "ticker": "CVE",
    "organization": "Cenovus Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CVEO",
    "organization": "Civeo Corporation",
    "industry": "Commercial Services & Supplies",
    "marketCap": "321.97M"
  },
  {
    "ticker": "CVET",
    "organization": "Covetrus",
    "industry": "Health Care Providers & Services",
    "marketCap": "2.54B"
  },
  {
    "ticker": "CVGI",
    "organization": "Commercial Vehicle Group",
    "industry": "Machinery",
    "marketCap": "316.91M"
  },
  {
    "ticker": "CVGW",
    "organization": "Calavo Growers",
    "industry": "Food Products",
    "marketCap": "679.18M"
  },
  {
    "ticker": "CVI",
    "organization": "CVR Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CVII",
    "organization": "Churchill Capital VII",
    "industry": "Shell Companies",
    "marketCap": "1.68B"
  },
  {
    "ticker": "CVLG",
    "organization": "Covenant Logistics",
    "industry": "Road & Rail",
    "marketCap": "464.62M"
  },
  {
    "ticker": "CVLT",
    "organization": "Commvault Systems",
    "industry": "Software",
    "marketCap": "3.57B"
  },
  {
    "ticker": "CVLY",
    "organization": "Codorus Valley Bancorp",
    "industry": "Banks",
    "marketCap": "223.81M"
  },
  {
    "ticker": "CVM",
    "organization": "Cel-Sci Corporation",
    "industry": "Biotechnology",
    "marketCap": "478.04M"
  },
  {
    "ticker": "CVNA",
    "organization": "Carvana",
    "industry": "Specialty Retail",
    "marketCap": "25.15B"
  },
  {
    "ticker": "CVR",
    "organization": "Chicago Rivet & Machine Co.",
    "industry": "Machinery",
    "marketCap": "25.36M"
  },
  {
    "ticker": "CVRX",
    "organization": "CVRx",
    "industry": "Medical Devices",
    "marketCap": "326.28M"
  },
  {
    "ticker": "CVS",
    "organization": "CVS Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "111.98B"
  },
  {
    "ticker": "CVU",
    "organization": "CPI Aerostructures",
    "industry": "Aerospace & Defense",
    "marketCap": "34.24M"
  },
  {
    "ticker": "CVV",
    "organization": "CVD Equipment",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "30.75M"
  },
  {
    "ticker": "CVX",
    "organization": "Chevron",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "CW",
    "organization": "Curtiss-Wright",
    "industry": "Aerospace & Defense",
    "marketCap": "5.26B"
  },
  {
    "ticker": "CWAN",
    "organization": "Clearwater Analytics",
    "industry": "Software-Application",
    "marketCap": "5.66B"
  },
  {
    "ticker": "CWBC",
    "organization": "Community West Bancshares",
    "industry": "Banks",
    "marketCap": "112.95M"
  },
  {
    "ticker": "CWBR",
    "organization": "CohBar",
    "industry": "Biotechnology",
    "marketCap": "60.61M"
  },
  {
    "ticker": "CWCO",
    "organization": "Consolidated Water",
    "industry": "Water Utilities",
    "marketCap": "175.99M"
  },
  {
    "ticker": "CWEN",
    "organization": "Clearway Energy",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "3.44B"
  },
  {
    "ticker": "CWEN.A",
    "organization": "Clearway Energy",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "3.46B"
  },
  {
    "ticker": "CWH",
    "organization": "Camping World Holdings",
    "industry": "Specialty Retail",
    "marketCap": "3.40B"
  },
  {
    "ticker": "CWK",
    "organization": "Cushman & Wakefield",
    "industry": "Real Estate Management & Development",
    "marketCap": "4.22B"
  },
  {
    "ticker": "CWST",
    "organization": "Casella Waste Systems",
    "industry": "Commercial Services & Supplies",
    "marketCap": "3.92B"
  },
  {
    "ticker": "CWT",
    "organization": "California Water Service Group",
    "industry": "Water Utilities",
    "marketCap": "3.04B"
  },
  {
    "ticker": "CX",
    "organization": "CEMEX SAB de CV",
    "industry": "Construction Materials",
    "marketCap": "10.56B"
  },
  {
    "ticker": "CXDC",
    "organization": "China XD Plastics",
    "industry": "Auto Components",
    "marketCap": "32.18M"
  },
  {
    "ticker": "CXDO",
    "organization": "Crexendo",
    "industry": "IT Services",
    "marketCap": "129.78M"
  },
  {
    "ticker": "CXM",
    "organization": "Sprinklr",
    "industry": "Software-Application",
    "marketCap": "4.48B"
  },
  {
    "ticker": "CXP",
    "organization": "Columbia Property Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.19B"
  },
  {
    "ticker": "CXW",
    "organization": "CoreCivic",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.08B"
  },
  {
    "ticker": "CYAD",
    "organization": "Celyad",
    "industry": "Biotechnology",
    "marketCap": "66.96M"
  },
  {
    "ticker": "CYAN",
    "organization": "Cyanotech",
    "industry": "Personal Products",
    "marketCap": "17.45M"
  },
  {
    "ticker": "CYBE",
    "organization": "CyberOptics",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "259.26M"
  },
  {
    "ticker": "CYBN",
    "organization": "Cybin",
    "industry": "Biotechnology",
    "marketCap": "339.85M"
  },
  {
    "ticker": "CYBR",
    "organization": "CyberArk Software",
    "industry": "Software",
    "marketCap": "6.34B"
  },
  {
    "ticker": "CYCC",
    "organization": "Cyclacel Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "50.14M"
  },
  {
    "ticker": "CYCN",
    "organization": "Cyclerion Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "129.40M"
  },
  {
    "ticker": "CYD",
    "organization": "China Yuchai International",
    "industry": "Machinery",
    "marketCap": "567.52M"
  },
  {
    "ticker": "CYH",
    "organization": "Community Health Systems",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.57B"
  },
  {
    "ticker": "CYRN",
    "organization": "Cyren Ltd.",
    "industry": "Software",
    "marketCap": "53.88M"
  },
  {
    "ticker": "CYRX",
    "organization": "CryoPort",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.00B"
  },
  {
    "ticker": "CYT",
    "organization": "Cyteir Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "620.74M"
  },
  {
    "ticker": "CYTH",
    "organization": "Cyclo Therapeutics",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "43.99M"
  },
  {
    "ticker": "CYTK",
    "organization": "Cytokinetics",
    "industry": "Biotechnology",
    "marketCap": "3.05B"
  },
  {
    "ticker": "CYTO",
    "organization": "Altamira Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "26.47M"
  },
  {
    "ticker": "CYXT",
    "organization": "Cyxtera Technologies",
    "industry": "Information Technology Services",
    "marketCap": "1.53B"
  },
  {
    "ticker": "CZNC",
    "organization": "Citizens & Northern",
    "industry": "Banks",
    "marketCap": "400.40M"
  },
  {
    "ticker": "CZOO",
    "organization": "Cazoo Group",
    "industry": "Software-Application",
    "marketCap": "5.33B"
  },
  {
    "ticker": "CZR",
    "organization": "Caesars Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "CZWI",
    "organization": "Citizens Community Bancorp",
    "industry": "Banks",
    "marketCap": "147.31M"
  },
  {
    "ticker": "D",
    "organization": "Dominion Energy",
    "industry": "Multi-Utilities",
    "marketCap": "59.04B"
  },
  {
    "ticker": "DAC",
    "organization": "Danaos",
    "industry": "Marine",
    "marketCap": "1.69B"
  },
  {
    "ticker": "DADA",
    "organization": "Dada Nexus",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "4.74B"
  },
  {
    "ticker": "DAIO",
    "organization": "Data I/O",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "DAKT",
    "organization": "Daktronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "DAL",
    "organization": "Delta Air Lines",
    "industry": "Airlines",
    "marketCap": "29.04B"
  },
  {
    "ticker": "DALN",
    "organization": "DallasNews",
    "industry": "Media",
    "marketCap": "36.18M"
  },
  {
    "ticker": "DALS",
    "organization": "DA32 Life Science Tech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "251.37M"
  },
  {
    "ticker": "DAN",
    "organization": "Dana Incorporated",
    "industry": "Auto Components",
    "marketCap": "3.38B"
  },
  {
    "ticker": "DAO",
    "organization": "Youdao",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.51B"
  },
  {
    "ticker": "DAR",
    "organization": "Darling Ingredients",
    "industry": "Food Products",
    "marketCap": "11.65B"
  },
  {
    "ticker": "DARE",
    "organization": "Dare Bioscience",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "116.01M"
  },
  {
    "ticker": "DASH",
    "organization": "DoorDash",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "68.94B"
  },
  {
    "ticker": "DATS",
    "organization": "DatChat",
    "industry": "Software-Application",
    "marketCap": "194.23M"
  },
  {
    "ticker": "DAVA",
    "organization": "Endava",
    "industry": "IT Services",
    "marketCap": "8.34B"
  },
  {
    "ticker": "DAWN",
    "organization": "Day One Biopharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.49B"
  },
  {
    "ticker": "DB",
    "organization": "Deutsche Bank",
    "industry": "Capital Markets",
    "marketCap": "26.02B"
  },
  {
    "ticker": "DBD",
    "organization": "Diebold Nixdorf",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "DBDR",
    "organization": "Roman DBDR Tech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "293.50M"
  },
  {
    "ticker": "DBGI",
    "organization": "Digital Brands Group",
    "industry": "Apparel Retail",
    "marketCap": "37.50M"
  },
  {
    "ticker": "DBI",
    "organization": "Designer Brands",
    "industry": "Specialty Retail",
    "marketCap": "1.06B"
  },
  {
    "ticker": "DBRG",
    "organization": "DigitalBridge Group",
    "industry": "REIT-Diversified",
    "marketCap": "3.07B"
  },
  {
    "ticker": "DBTX",
    "organization": "Decibel Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "198.69M"
  },
  {
    "ticker": "DBVT",
    "organization": "DBV Technologies",
    "industry": "Biotechnology",
    "marketCap": "538.45M"
  },
  {
    "ticker": "DBX",
    "organization": "Dropbox",
    "industry": "Software",
    "marketCap": "11.73B"
  },
  {
    "ticker": "DCBO",
    "organization": "Docebo",
    "industry": "Software-Application",
    "marketCap": "2.35B"
  },
  {
    "ticker": "DCI",
    "organization": "Donaldson Company",
    "industry": "Machinery",
    "marketCap": "7.12B"
  },
  {
    "ticker": "DCO",
    "organization": "Ducommun",
    "industry": "Aerospace & Defense",
    "marketCap": "622.90M"
  },
  {
    "ticker": "DCOM",
    "organization": "Dime Community Bancshares",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.38B"
  },
  {
    "ticker": "DCP",
    "organization": "DCP Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DCPH",
    "organization": "Deciphera Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.96B"
  },
  {
    "ticker": "DCRC",
    "organization": "Decarbonization Plus Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "441.88M"
  },
  {
    "ticker": "DCRN",
    "organization": "Decarbonization Plus Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "99.20M"
  },
  {
    "ticker": "DCT",
    "organization": "Duck Creek Technologies",
    "industry": "Software",
    "marketCap": "5.79B"
  },
  {
    "ticker": "DCTH",
    "organization": "Delcath Systems",
    "industry": "Medical Devices",
    "marketCap": "72.90M"
  },
  {
    "ticker": "DD",
    "organization": "DuPont",
    "industry": "Chemicals",
    "marketCap": "36.16B"
  },
  {
    "ticker": "DDD",
    "organization": "3D Systems",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "DDI",
    "organization": "DoubleDown Interactive",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "870.65M"
  },
  {
    "ticker": "DDL",
    "organization": "Dingdong",
    "industry": "Grocery Stores",
    "marketCap": "5.54B"
  },
  {
    "ticker": "DDMX",
    "organization": "DD3 Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "65.73M"
  },
  {
    "ticker": "DDOG",
    "organization": "Datadog",
    "industry": "Software",
    "marketCap": "44.86B"
  },
  {
    "ticker": "DDS",
    "organization": "Dillard's",
    "industry": "Multiline Retail",
    "marketCap": "3.65B"
  },
  {
    "ticker": "DE",
    "organization": "Deere & Company",
    "industry": "Machinery",
    "marketCap": "106.76B"
  },
  {
    "ticker": "DEA",
    "organization": "Easterly Government Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.74B"
  },
  {
    "ticker": "DECK",
    "organization": "Deckers Outdoor",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "DEI",
    "organization": "Douglas Emmett",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "5.64B"
  },
  {
    "ticker": "DELL",
    "organization": "Dell Technologies",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "DEN",
    "organization": "Denbury",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DENN",
    "organization": "Denny's",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DEO",
    "organization": "Diageo",
    "industry": "Beverages",
    "marketCap": "112.75B"
  },
  {
    "ticker": "DESP",
    "organization": "Despegar.com",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "871.33M"
  },
  {
    "ticker": "DFFN",
    "organization": "Diffusion Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "51.98M"
  },
  {
    "ticker": "DFH",
    "organization": "Dream Finders Homes",
    "industry": "Residential Construction",
    "marketCap": "1.63B"
  },
  {
    "ticker": "DFIN",
    "organization": "Donnelley Financial Solutions",
    "industry": "Capital Markets",
    "marketCap": "1.16B"
  },
  {
    "ticker": "DFPH",
    "organization": "DFP Healthcare Acquisitions",
    "industry": "Shell Companies",
    "marketCap": "285.20M"
  },
  {
    "ticker": "DFS",
    "organization": "Discover Financial Services",
    "industry": "Consumer Finance",
    "marketCap": "38.00B"
  },
  {
    "ticker": "DG",
    "organization": "Dollar General",
    "industry": "Multiline Retail",
    "marketCap": "49.10B"
  },
  {
    "ticker": "DGICA",
    "organization": "Donegal Group",
    "industry": "Insurance",
    "marketCap": "447.83M"
  },
  {
    "ticker": "DGICB",
    "organization": "Donegal Group",
    "industry": "Insurance",
    "marketCap": "452.15M"
  },
  {
    "ticker": "DGII",
    "organization": "Digi International",
    "industry": "Communications Equipment",
    "marketCap": "727.25M"
  },
  {
    "ticker": "DGLY",
    "organization": "Digital Ally",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "DGNS",
    "organization": "Dragoneer Growth Opportunities II",
    "industry": "Shell Companies",
    "marketCap": "359.32M"
  },
  {
    "ticker": "DGNU",
    "organization": "Dragoneer Growth Opportunities III",
    "industry": "Shell Companies",
    "marketCap": "527.58M"
  },
  {
    "ticker": "DGX",
    "organization": "Quest Diagnostics",
    "industry": "Health Care Providers & Services",
    "marketCap": "17.56B"
  },
  {
    "ticker": "DH",
    "organization": "Definitive Healthcare",
    "industry": "Health Information Services",
    "marketCap": "6.01B"
  },
  {
    "ticker": "DHBC",
    "organization": "DHB Capital",
    "industry": "Shell Companies",
    "marketCap": "349.89M"
  },
  {
    "ticker": "DHC",
    "organization": "Diversified Healthcare Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "841.46M"
  },
  {
    "ticker": "DHCA",
    "organization": "DHC Acquisition",
    "industry": "Shell Companies",
    "marketCap": "377.14M"
  },
  {
    "ticker": "DHHC",
    "organization": "DiamondHead Holdings",
    "industry": "Shell Companies",
    "marketCap": "420.90M"
  },
  {
    "ticker": "DHI",
    "organization": "D.R. Horton",
    "industry": "Household Durables",
    "marketCap": "30.08B"
  },
  {
    "ticker": "DHIL",
    "organization": "Diamond Hill Investment Group",
    "industry": "Capital Markets",
    "marketCap": "578.48M"
  },
  {
    "ticker": "DHR",
    "organization": "Danaher",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "217.34B"
  },
  {
    "ticker": "DHT",
    "organization": "DHT Holdings",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DHX",
    "organization": "DHI Group",
    "industry": "Interactive Media & Services",
    "marketCap": "243.66M"
  },
  {
    "ticker": "DIBS",
    "organization": "1stdibs.com",
    "industry": "Internet Retail",
    "marketCap": "472.70M"
  },
  {
    "ticker": "DICE",
    "organization": "DICE Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.20B"
  },
  {
    "ticker": "DIDI",
    "organization": "DiDi Global",
    "industry": "Software-Application",
    "marketCap": "36.68B"
  },
  {
    "ticker": "DILA",
    "organization": "DILA Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "68.32M"
  },
  {
    "ticker": "DIN",
    "organization": "Dine Brands Global",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DIOD",
    "organization": "Diodes Incorporated",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "4.12B"
  },
  {
    "ticker": "DIS",
    "organization": "Disney",
    "industry": "Entertainment",
    "marketCap": "319.83B"
  },
  {
    "ticker": "DISA",
    "organization": "Disruptive Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "335.50M"
  },
  {
    "ticker": "DISCA",
    "organization": "Discovery",
    "industry": "Media",
    "marketCap": "12.88B"
  },
  {
    "ticker": "DISCB",
    "organization": "Discovery",
    "industry": "Media",
    "marketCap": "12.82B"
  },
  {
    "ticker": "DISCK",
    "organization": "Discovery",
    "industry": "Media",
    "marketCap": "12.96B"
  },
  {
    "ticker": "DISH",
    "organization": "DISH Network",
    "industry": "Media",
    "marketCap": "22.94B"
  },
  {
    "ticker": "DIT",
    "organization": "AMCON Distributing",
    "industry": "Distributors",
    "marketCap": "81.68M"
  },
  {
    "ticker": "DJCO",
    "organization": "Daily Journal",
    "industry": "Media",
    "marketCap": "444.28M"
  },
  {
    "ticker": "DK",
    "organization": "Delek US Holdings",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DKDCA",
    "organization": "Data Knights Acquisition",
    "industry": "Shell Companies",
    "marketCap": "130.90M"
  },
  {
    "ticker": "DKL",
    "organization": "Delek Logistics Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DKNG",
    "organization": "DraftKings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DKS",
    "organization": "Dick's Sporting Goods",
    "industry": "Specialty Retail",
    "marketCap": "10.79B"
  },
  {
    "ticker": "DLA",
    "organization": "Delta Apparel",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "DLB",
    "organization": "Dolby Laboratories",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "DLCA",
    "organization": "Deep Lake Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "252.02M"
  },
  {
    "ticker": "DLHC",
    "organization": "DLH Holdings",
    "industry": "Professional Services",
    "marketCap": "151.92M"
  },
  {
    "ticker": "DLNG",
    "organization": "Dynagas LNG Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DLO",
    "organization": "DLocal",
    "industry": "Software-Infrastructure",
    "marketCap": "16.22B"
  },
  {
    "ticker": "DLPN",
    "organization": "Dolphin Entertainment",
    "industry": "Entertainment",
    "marketCap": "93.75M"
  },
  {
    "ticker": "DLR",
    "organization": "Digital Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "41.31B"
  },
  {
    "ticker": "DLTH",
    "organization": "Duluth Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "448.58M"
  },
  {
    "ticker": "DLTR",
    "organization": "Dollar Tree",
    "industry": "Multiline Retail",
    "marketCap": "21.17B"
  },
  {
    "ticker": "DLX",
    "organization": "Deluxe Corporation",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.57B"
  },
  {
    "ticker": "DM",
    "organization": "Desktop Metal",
    "industry": "Computer Hardware",
    "marketCap": "1.87B"
  },
  {
    "ticker": "DMAC",
    "organization": "DiaMedica Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "78.34M"
  },
  {
    "ticker": "DMLP",
    "organization": "Dorchester Minerals",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DMRC",
    "organization": "Digimarc",
    "industry": "Software",
    "marketCap": "583.09M"
  },
  {
    "ticker": "DMS",
    "organization": "Digital Media Solutions",
    "industry": "Advertising Agencies",
    "marketCap": "450.71M"
  },
  {
    "ticker": "DMTK",
    "organization": "DermTech",
    "industry": "Biotechnology",
    "marketCap": "937.17M"
  },
  {
    "ticker": "DMYQ",
    "organization": "dMY Technology Group IV",
    "industry": "Shell Companies",
    "marketCap": "428.79M"
  },
  {
    "ticker": "DNA",
    "organization": "Ginkgo Bioworks",
    "industry": "Biotechnology",
    "marketCap": "22.27B"
  },
  {
    "ticker": "DNAA",
    "organization": "Social Capital Suvretta Holdings I",
    "industry": "Shell Companies",
    "marketCap": "270.76M"
  },
  {
    "ticker": "DNAB",
    "organization": "Social Capital Suvretta Holdings II",
    "industry": "Shell Companies",
    "marketCap": "272.41M"
  },
  {
    "ticker": "DNAC",
    "organization": "Social Capital Suvretta Holdings III",
    "industry": "Shell Companies",
    "marketCap": "272.41M"
  },
  {
    "ticker": "DNAD",
    "organization": "Social Capital Suvretta Holdings IV",
    "industry": "Entertainment",
    "marketCap": "251.90M"
  },
  {
    "ticker": "DNAY",
    "organization": "Codex DNA",
    "industry": "Medical Devices",
    "marketCap": "335.68M"
  },
  {
    "ticker": "DNB",
    "organization": "Dun & Bradstreet",
    "industry": "Professional Services",
    "marketCap": "7.58B"
  },
  {
    "ticker": "DNLI",
    "organization": "Denali Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "6.19B"
  },
  {
    "ticker": "DNMR",
    "organization": "Danimer Scientific",
    "industry": "Specialty Chemicals",
    "marketCap": "1.59B"
  },
  {
    "ticker": "DNN",
    "organization": "Denison Mines",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DNOW",
    "organization": "NOW Inc.",
    "industry": "Trading Companies & Distributors",
    "marketCap": "870.10M"
  },
  {
    "ticker": "DNUT",
    "organization": "Krispy Kreme",
    "industry": "Grocery Stores",
    "marketCap": "2.36B"
  },
  {
    "ticker": "DNZ",
    "organization": "D & Z Media Acquisition",
    "industry": "Shell Companies",
    "marketCap": "349.67M"
  },
  {
    "ticker": "DOC",
    "organization": "Physicians Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.87B"
  },
  {
    "ticker": "DOCN",
    "organization": "DigitalOcean",
    "industry": "Software-Infrastructure",
    "marketCap": "8.45B"
  },
  {
    "ticker": "DOCS",
    "organization": "Doximity",
    "industry": "Health Information Services",
    "marketCap": "14.52B"
  },
  {
    "ticker": "DOCU",
    "organization": "DocuSign",
    "industry": "Software",
    "marketCap": "50.71B"
  },
  {
    "ticker": "DOGZ",
    "organization": "Dogness International",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "DOLE",
    "organization": "Dole",
    "industry": "Farm Products",
    "marketCap": "1.46B"
  },
  {
    "ticker": "DOMA",
    "organization": "Doma Holdings",
    "industry": "Shell Companies",
    "marketCap": "342.84M"
  },
  {
    "ticker": "DOMO",
    "organization": "Domo",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "DOOO",
    "organization": "BRP Inc.",
    "industry": "Leisure Products",
    "marketCap": "7.47B"
  },
  {
    "ticker": "DOOR",
    "organization": "Masonite International",
    "industry": "Building Products",
    "marketCap": "2.63B"
  },
  {
    "ticker": "DORM",
    "organization": "Dorman Products",
    "industry": "Auto Components",
    "marketCap": "3.02B"
  },
  {
    "ticker": "DOV",
    "organization": "Dover",
    "industry": "Machinery",
    "marketCap": "22.58B"
  },
  {
    "ticker": "DOW",
    "organization": "Dow Inc",
    "industry": "Chemicals",
    "marketCap": "43.69B"
  },
  {
    "ticker": "DOX",
    "organization": "Amdocs",
    "industry": "IT Services",
    "marketCap": "9.66B"
  },
  {
    "ticker": "DOYU",
    "organization": "DouYu",
    "industry": "Entertainment",
    "marketCap": "1.01B"
  },
  {
    "ticker": "DPRO",
    "organization": "Draganfly",
    "industry": "Aerospace & Defense",
    "marketCap": "151.58M"
  },
  {
    "ticker": "DPW",
    "organization": "DPW Holdings",
    "industry": "Electrical Equipment",
    "marketCap": "147.57M"
  },
  {
    "ticker": "DPZ",
    "organization": "Domino's Pizza",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DQ",
    "organization": "Daqo New Energy",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "4.26B"
  },
  {
    "ticker": "DRAY",
    "organization": "Macondray Capital Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "307.50M"
  },
  {
    "ticker": "DRD",
    "organization": "DRDGOLD Limited",
    "industry": "Metals & Mining",
    "marketCap": "702.05M"
  },
  {
    "ticker": "DRE",
    "organization": "Duke Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "18.08B"
  },
  {
    "ticker": "DRH",
    "organization": "DiamondRock Hospitality",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.06B"
  },
  {
    "ticker": "DRI",
    "organization": "Darden Restaurants",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DRIO",
    "organization": "DarioHealth",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "221.23M"
  },
  {
    "ticker": "DRMA",
    "organization": "Dermata Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "37.78M"
  },
  {
    "ticker": "DRNA",
    "organization": "Dicerna Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.57B"
  },
  {
    "ticker": "DRQ",
    "organization": "Dril-Quip",
    "industry": "Energy Equipment & Services",
    "marketCap": "921.92M"
  },
  {
    "ticker": "DRRX",
    "organization": "DURECT Corporation",
    "industry": "Pharmaceuticals",
    "marketCap": "296.88M"
  },
  {
    "ticker": "DRTT",
    "organization": "DIRTT Environmental Solutions",
    "industry": "Building Products",
    "marketCap": "263.66M"
  },
  {
    "ticker": "DRVN",
    "organization": "Driven Brands",
    "industry": "Auto & Truck Dealerships",
    "marketCap": "4.81B"
  },
  {
    "ticker": "DS",
    "organization": "Drive Shack",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DSAC",
    "organization": "Duddell Street Acquisition",
    "industry": "Shell Companies",
    "marketCap": "214.16M"
  },
  {
    "ticker": "DSEY",
    "organization": "Diversey Holdings",
    "industry": "Personal Services",
    "marketCap": "4.78B"
  },
  {
    "ticker": "DSGN",
    "organization": "Design Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "799.16M"
  },
  {
    "ticker": "DSGX",
    "organization": "Descartes Systems Group",
    "industry": "Software",
    "marketCap": "6.92B"
  },
  {
    "ticker": "DSKE",
    "organization": "Daseke",
    "industry": "Road & Rail",
    "marketCap": "572.13M"
  },
  {
    "ticker": "DSP",
    "organization": "Viant Technology",
    "industry": "Software-Application",
    "marketCap": "753.19M"
  },
  {
    "ticker": "DSPG",
    "organization": "DSP Group",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "528.51M"
  },
  {
    "ticker": "DSS",
    "organization": "DSS",
    "industry": "Commercial Services & Supplies",
    "marketCap": "99.68M"
  },
  {
    "ticker": "DSWL",
    "organization": "Deswell Industries",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "DSX",
    "organization": "Diana Shipping",
    "industry": "Marine",
    "marketCap": "544.63M"
  },
  {
    "ticker": "DT",
    "organization": "Dynatrace",
    "industry": "Software",
    "marketCap": "20.70B"
  },
  {
    "ticker": "DTE",
    "organization": "DTE Energy",
    "industry": "Multi-Utilities",
    "marketCap": "21.64B"
  },
  {
    "ticker": "DTEA",
    "organization": "DAVIDsTEA",
    "industry": "Specialty Retail",
    "marketCap": "67.48M"
  },
  {
    "ticker": "DTIL",
    "organization": "Precision BioSciences",
    "industry": "Biotechnology",
    "marketCap": "694.68M"
  },
  {
    "ticker": "DTM",
    "organization": "DT Midstream",
    "industry": "Oil & Gas Midstream",
    "marketCap": "4.56B"
  },
  {
    "ticker": "DTOC",
    "organization": "Digital Transformation Opportunities",
    "industry": "Shell Companies",
    "marketCap": "405.20M"
  },
  {
    "ticker": "DTSS",
    "organization": "Datasea",
    "industry": "Software",
    "marketCap": "48.78M"
  },
  {
    "ticker": "DTST",
    "organization": "Data Storage Corporation",
    "industry": "Information Technology Services",
    "marketCap": "28.63M"
  },
  {
    "ticker": "DUK",
    "organization": "Duke Energy",
    "industry": "Electric Utilities",
    "marketCap": "75.76B"
  },
  {
    "ticker": "DUNE",
    "organization": "Dune Acquisition",
    "industry": "Shell Companies",
    "marketCap": "212.39M"
  },
  {
    "ticker": "DUO",
    "organization": "Fangdd Network Group",
    "industry": "Interactive Media & Services",
    "marketCap": "87.83M"
  },
  {
    "ticker": "DUOL",
    "organization": "Duolingo",
    "industry": "Software-Application",
    "marketCap": "5.76B"
  },
  {
    "ticker": "DUOT",
    "organization": "Duos Technologies Group",
    "industry": "Software",
    "marketCap": "22.33M"
  },
  {
    "ticker": "DV",
    "organization": "DoubleVerify",
    "industry": "Software-Application",
    "marketCap": "5.43B"
  },
  {
    "ticker": "DVA",
    "organization": "DaVita",
    "industry": "Health Care Providers & Services",
    "marketCap": "12.25B"
  },
  {
    "ticker": "DVAX",
    "organization": "Dynavax Technologies",
    "industry": "Biotechnology",
    "marketCap": "2.20B"
  },
  {
    "ticker": "DVD",
    "organization": "Dover Motorsports",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "DVN",
    "organization": "Devon Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "DWIN",
    "organization": "Delwinds Insurance Acquisition",
    "industry": "n/a",
    "marketCap": "204.67M"
  },
  {
    "ticker": "DWSN",
    "organization": "Dawson Geophysical",
    "industry": "Energy Equipment & Services",
    "marketCap": "55.06M"
  },
  {
    "ticker": "DX",
    "organization": "Dynex Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "598.43M"
  },
  {
    "ticker": "DXC",
    "organization": "DXC Technology",
    "industry": "IT Services",
    "marketCap": "8.62B"
  },
  {
    "ticker": "DXCM",
    "organization": "DexCom",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "52.91B"
  },
  {
    "ticker": "DXF",
    "organization": "Dunxin Financial Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "27.14M"
  },
  {
    "ticker": "DXLG",
    "organization": "Destination XL Group",
    "industry": "Specialty Retail",
    "marketCap": "384.47M"
  },
  {
    "ticker": "DXPE",
    "organization": "DXP Enterprises",
    "industry": "Trading Companies & Distributors",
    "marketCap": "590.80M"
  },
  {
    "ticker": "DXR",
    "organization": "Daxor",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "45.38M"
  },
  {
    "ticker": "DXYN",
    "organization": "Dixie Group",
    "industry": "Household Durables",
    "marketCap": "76.13M"
  },
  {
    "ticker": "DY",
    "organization": "Dycom Industries",
    "industry": "Construction & Engineering",
    "marketCap": "2.21B"
  },
  {
    "ticker": "DYAI",
    "organization": "Dyadic International",
    "industry": "Biotechnology",
    "marketCap": "149.10M"
  },
  {
    "ticker": "DYN",
    "organization": "Dyne Therapeutics",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "837.89M"
  },
  {
    "ticker": "DYNS",
    "organization": "Dynamics Special Purpose",
    "industry": "Shell Companies",
    "marketCap": "253.48M"
  },
  {
    "ticker": "DYNT",
    "organization": "Dynatronics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "24.33M"
  },
  {
    "ticker": "DZSI",
    "organization": "DZS",
    "industry": " Inc",
    "marketCap": "Communications Equipment"
  },
  {
    "ticker": "E",
    "organization": "Eni SpA",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EA",
    "organization": "Electronic Arts",
    "industry": "Entertainment",
    "marketCap": "40.48B"
  },
  {
    "ticker": "EAC",
    "organization": "Edify Acquisition",
    "industry": "Shell Companies",
    "marketCap": "68.39M"
  },
  {
    "ticker": "EAF",
    "organization": "GrafTech International",
    "industry": "Electrical Equipment",
    "marketCap": "2.79B"
  },
  {
    "ticker": "EAR",
    "organization": "Eargo",
    "industry": "Medical Devices",
    "marketCap": "265.81M"
  },
  {
    "ticker": "EARN",
    "organization": "Ellington Residential Mortgage",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "144.82M"
  },
  {
    "ticker": "EAST",
    "organization": "Eastside Distilling",
    "industry": "Beverages",
    "marketCap": "34.09M"
  },
  {
    "ticker": "EAT",
    "organization": "Brinker International",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "EB",
    "organization": "Eventbrite",
    "industry": "Interactive Media & Services",
    "marketCap": "1.91B"
  },
  {
    "ticker": "EBAC",
    "organization": "European Biotech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "158.57M"
  },
  {
    "ticker": "EBAY",
    "organization": "eBay Inc.",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "45.54B"
  },
  {
    "ticker": "EBC",
    "organization": "Eastern Bankshares",
    "industry": "Banks",
    "marketCap": "3.76B"
  },
  {
    "ticker": "EBET",
    "organization": "Esports Technologies",
    "industry": "Gambling",
    "marketCap": "444.84M"
  },
  {
    "ticker": "EBF",
    "organization": "Ennis",
    "industry": " Inc.",
    "marketCap": "Commercial Services & Supplies"
  },
  {
    "ticker": "EBIX",
    "organization": "Ebix",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "EBMT",
    "organization": "Eagle Bancorp Montana",
    "industry": "Banks",
    "marketCap": "149.82M"
  },
  {
    "ticker": "EBON",
    "organization": "Ebang International",
    "industry": "Computer Hardware",
    "marketCap": "353.09M"
  },
  {
    "ticker": "EBR",
    "organization": "Centrais Eletricas Brasileiras",
    "industry": "Electric Utilities",
    "marketCap": "11.42B"
  },
  {
    "ticker": "EBS",
    "organization": "Emergent BioSolutions",
    "industry": "Biotechnology",
    "marketCap": "2.88B"
  },
  {
    "ticker": "EBSB",
    "organization": "Meridian Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.10B"
  },
  {
    "ticker": "EBTC",
    "organization": "Enterprise Bancorp",
    "industry": "Banks",
    "marketCap": "427.31M"
  },
  {
    "ticker": "EC",
    "organization": "Ecopetrol",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ECC",
    "organization": "Eagle Point Credit",
    "industry": "n/a",
    "marketCap": "218.84M"
  },
  {
    "ticker": "ECHO",
    "organization": "Echo Global Logistics",
    "industry": "Air Freight & Logistics",
    "marketCap": "1.27B"
  },
  {
    "ticker": "ECL",
    "organization": "Ecolab",
    "industry": "Chemicals",
    "marketCap": "61.15B"
  },
  {
    "ticker": "ECOL",
    "organization": "US Ecology",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.02B"
  },
  {
    "ticker": "ECOM",
    "organization": "ChannelAdvisor",
    "industry": "Software",
    "marketCap": "760.45M"
  },
  {
    "ticker": "ECOR",
    "organization": "electroCore",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "75.74M"
  },
  {
    "ticker": "ECPG",
    "organization": "Encore Capital Group",
    "industry": "Consumer Finance",
    "marketCap": "1.52B"
  },
  {
    "ticker": "ECVT",
    "organization": "Ecovyst",
    "industry": "Specialty Chemicals",
    "marketCap": "1.64B"
  },
  {
    "ticker": "ED",
    "organization": "Consolidated Edison",
    "industry": "Multi-Utilities",
    "marketCap": "25.32B"
  },
  {
    "ticker": "EDAP",
    "organization": "EDAP TMS S.A.",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "210.08M"
  },
  {
    "ticker": "EDIT",
    "organization": "Editas Medicine",
    "industry": "Biotechnology",
    "marketCap": "2.78B"
  },
  {
    "ticker": "EDN",
    "organization": "Edenor SA",
    "industry": "Electric Utilities",
    "marketCap": "561.95M"
  },
  {
    "ticker": "EDR",
    "organization": "Endeavor Group Holdings",
    "industry": "Entertainment",
    "marketCap": "7.55B"
  },
  {
    "ticker": "EDRY",
    "organization": "EuroDry",
    "industry": "Marine",
    "marketCap": "82.08M"
  },
  {
    "ticker": "EDSA",
    "organization": "Edesa Biotech",
    "industry": "Biotechnology",
    "marketCap": "91.46M"
  },
  {
    "ticker": "EDTK",
    "organization": "Skillful Craftsman",
    "industry": "Education & Training Services",
    "marketCap": "18.33M"
  },
  {
    "ticker": "EDTX",
    "organization": "EdtechX Holdings Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "166.51M"
  },
  {
    "ticker": "EDU",
    "organization": "New Oriental Education & Technology",
    "industry": "Diversified Consumer Services",
    "marketCap": "3.55B"
  },
  {
    "ticker": "EDUC",
    "organization": "Educational Development",
    "industry": "Distributors",
    "marketCap": "83.39M"
  },
  {
    "ticker": "EEFT",
    "organization": "Euronet Worldwide",
    "industry": "IT Services",
    "marketCap": "6.95B"
  },
  {
    "ticker": "EEIQ",
    "organization": "Elite Education Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "36.92M"
  },
  {
    "ticker": "EEX",
    "organization": "Emerald Holding",
    "industry": "Media",
    "marketCap": "309.17M"
  },
  {
    "ticker": "EFC",
    "organization": "Ellington Financial",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "929.76M"
  },
  {
    "ticker": "EFOI",
    "organization": "Energy Focus",
    "industry": "Electrical Equipment",
    "marketCap": "15.66M"
  },
  {
    "ticker": "EFSC",
    "organization": "Enterprise Financial Services",
    "industry": "Banks",
    "marketCap": "1.81B"
  },
  {
    "ticker": "EFTR",
    "organization": "eFFECTOR Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "540.90M"
  },
  {
    "ticker": "EFX",
    "organization": "Equifax",
    "industry": "Professional Services",
    "marketCap": "31.07B"
  },
  {
    "ticker": "EGAN",
    "organization": "eGain Corporation",
    "industry": "Software",
    "marketCap": "327.71M"
  },
  {
    "ticker": "EGBN",
    "organization": "Eagle Bancorp - Maryland",
    "industry": "Banks",
    "marketCap": "1.87B"
  },
  {
    "ticker": "EGGF",
    "organization": "EG Acquisition",
    "industry": "Shell Companies",
    "marketCap": "303.44M"
  },
  {
    "ticker": "EGHT",
    "organization": "8x8",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "EGLE",
    "organization": "Eagle Bulk Shipping",
    "industry": "Marine",
    "marketCap": "699.78M"
  },
  {
    "ticker": "EGLX",
    "organization": "Enthusiast Gaming",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "457.75M"
  },
  {
    "ticker": "EGO",
    "organization": "Eldorado Gold",
    "industry": "Metals & Mining",
    "marketCap": "1.42B"
  },
  {
    "ticker": "EGP",
    "organization": "EastGroup Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.83B"
  },
  {
    "ticker": "EGRX",
    "organization": "Eagle Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "745.23M"
  },
  {
    "ticker": "EGY",
    "organization": "VAALCO Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EH",
    "organization": "EHang Holdings",
    "industry": "Aerospace & Defense",
    "marketCap": "1.29B"
  },
  {
    "ticker": "EHC",
    "organization": "Encompass Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "7.35B"
  },
  {
    "ticker": "EHTH",
    "organization": "eHealth",
    "industry": "Insurance",
    "marketCap": "1.07B"
  },
  {
    "ticker": "EIC",
    "organization": "Eagle Point Income",
    "industry": "n/a",
    "marketCap": "107.43M"
  },
  {
    "ticker": "EIG",
    "organization": "Employers Holdings",
    "industry": "Insurance",
    "marketCap": "1.14B"
  },
  {
    "ticker": "EIGR",
    "organization": "Eiger BioPharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "222.37M"
  },
  {
    "ticker": "EIX",
    "organization": "Edison International",
    "industry": "Electric Utilities",
    "marketCap": "20.90B"
  },
  {
    "ticker": "EJFA",
    "organization": "EJF Acquisition",
    "industry": "Shell Companies",
    "marketCap": "355.42M"
  },
  {
    "ticker": "EJH",
    "organization": "E-home Household Service Holdings Ltd",
    "industry": "Specialty Business Services",
    "marketCap": "86.98M"
  },
  {
    "ticker": "EKSO",
    "organization": "Ekso Bionics Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "58.85M"
  },
  {
    "ticker": "EL",
    "organization": "Estée Lauder",
    "industry": "Personal Products",
    "marketCap": "110.80B"
  },
  {
    "ticker": "ELA",
    "organization": "Envela",
    "industry": "Specialty Retail",
    "marketCap": "112.28M"
  },
  {
    "ticker": "ELAN",
    "organization": "Elanco Animal Health",
    "industry": "Pharmaceuticals",
    "marketCap": "15.18B"
  },
  {
    "ticker": "ELDN",
    "organization": "Eledon Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "89.13M"
  },
  {
    "ticker": "ELEV",
    "organization": "Elevation Oncology",
    "industry": "Biotechnology",
    "marketCap": "176.75M"
  },
  {
    "ticker": "ELF",
    "organization": "e.l.f. Beauty",
    "industry": "Personal Products",
    "marketCap": "1.51B"
  },
  {
    "ticker": "ELLO",
    "organization": "Ellomay Capital",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "338.45M"
  },
  {
    "ticker": "ELMD",
    "organization": "Electromed",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "91.67M"
  },
  {
    "ticker": "ELMS",
    "organization": "Electric Last Mile",
    "industry": "Auto Manufacturers",
    "marketCap": "894.17M"
  },
  {
    "ticker": "ELOX",
    "organization": "Eloxx Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "138.79M"
  },
  {
    "ticker": "ELP",
    "organization": "Companhia Paranaense de Energia",
    "industry": "Electric Utilities",
    "marketCap": "16.83B"
  },
  {
    "ticker": "ELS",
    "organization": "Equity LifeStyle Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "14.42B"
  },
  {
    "ticker": "ELSE",
    "organization": "Electro-Sensors",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ELTK",
    "organization": "Eltek",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ELVT",
    "organization": "Elevate Credit",
    "industry": "Consumer Finance",
    "marketCap": "141.95M"
  },
  {
    "ticker": "ELY",
    "organization": "Callaway Golf",
    "industry": "Leisure Products",
    "marketCap": "5.32B"
  },
  {
    "ticker": "ELYM",
    "organization": "Eliem Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "493.98M"
  },
  {
    "ticker": "ELYS",
    "organization": "Elys Game Technology",
    "industry": "Gambling",
    "marketCap": "113.86M"
  },
  {
    "ticker": "EM",
    "organization": "Smart Share Global",
    "industry": "Personal Services",
    "marketCap": "830.65M"
  },
  {
    "ticker": "EMAN",
    "organization": "eMagin",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "163.86M"
  },
  {
    "ticker": "EMCF",
    "organization": "Emclaire Financial",
    "industry": "Banks",
    "marketCap": "72.57M"
  },
  {
    "ticker": "EME",
    "organization": "EMCOR Group",
    "industry": "Construction & Engineering",
    "marketCap": "6.22B"
  },
  {
    "ticker": "EMKR",
    "organization": "EMCORE Corporation",
    "industry": "Communications Equipment",
    "marketCap": "278.11M"
  },
  {
    "ticker": "EML",
    "organization": "Eastern Company",
    "industry": "Machinery",
    "marketCap": "156.72M"
  },
  {
    "ticker": "EMN",
    "organization": "Eastman Chemical",
    "industry": "Chemicals",
    "marketCap": "13.90B"
  },
  {
    "ticker": "EMR",
    "organization": "Emerson Electric",
    "industry": "Electrical Equipment",
    "marketCap": "56.89B"
  },
  {
    "ticker": "EMX",
    "organization": "EMX Royalty",
    "industry": "Metals & Mining",
    "marketCap": "225.29M"
  },
  {
    "ticker": "ENB",
    "organization": "Enbridge",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ENBL",
    "organization": "Enable Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ENDP",
    "organization": "Endo International",
    "industry": "Pharmaceuticals",
    "marketCap": "800.91M"
  },
  {
    "ticker": "ENFA",
    "organization": "890 5th Avenue Partners",
    "industry": "Shell Companies",
    "marketCap": "364.58M"
  },
  {
    "ticker": "ENG",
    "organization": "ENGlobal",
    "industry": "Energy Equipment & Services",
    "marketCap": "93.81M"
  },
  {
    "ticker": "ENIA",
    "organization": "Enel Americas",
    "industry": "Electric Utilities",
    "marketCap": "13.00B"
  },
  {
    "ticker": "ENIC",
    "organization": "Enel Chile",
    "industry": "Electric Utilities",
    "marketCap": "3.33B"
  },
  {
    "ticker": "ENLC",
    "organization": "EnLink Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ENLV",
    "organization": "Enlivex Therapeutics",
    "industry": "Software",
    "marketCap": "173.77M"
  },
  {
    "ticker": "ENNV",
    "organization": "ECP Environmental Growth Opportunities",
    "industry": "Shell Companies",
    "marketCap": "427.37M"
  },
  {
    "ticker": "ENOB",
    "organization": "Enochian Biosciences",
    "industry": "Biotechnology",
    "marketCap": "355.09M"
  },
  {
    "ticker": "ENPC",
    "organization": "Executive Network Partnering",
    "industry": "Shell Companies",
    "marketCap": "436.29M"
  },
  {
    "ticker": "ENPH",
    "organization": "Enphase Energy",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "20.88B"
  },
  {
    "ticker": "ENR",
    "organization": "Energizer Holdings",
    "industry": "Household Products",
    "marketCap": "2.71B"
  },
  {
    "ticker": "ENS",
    "organization": "EnerSys",
    "industry": "Electrical Equipment",
    "marketCap": "3.17B"
  },
  {
    "ticker": "ENSC",
    "organization": "Ensysce Biosciences",
    "industry": "Biotechnology",
    "marketCap": "73.50M"
  },
  {
    "ticker": "ENSG",
    "organization": "The Ensign Group",
    "industry": "Health Care Providers & Services",
    "marketCap": "4.10B"
  },
  {
    "ticker": "ENSV",
    "organization": "Enservco",
    "industry": "Energy Equipment & Services",
    "marketCap": "16.63M"
  },
  {
    "ticker": "ENTA",
    "organization": "Enanta Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.22B"
  },
  {
    "ticker": "ENTG",
    "organization": "Entegris",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "16.93B"
  },
  {
    "ticker": "ENTX",
    "organization": "Entera Bio",
    "industry": "Biotechnology",
    "marketCap": "137.75M"
  },
  {
    "ticker": "ENV",
    "organization": "Envestnet",
    "industry": "Software",
    "marketCap": "4.48B"
  },
  {
    "ticker": "ENVA",
    "organization": "Enova International",
    "industry": "Consumer Finance",
    "marketCap": "1.32B"
  },
  {
    "ticker": "ENVB",
    "organization": "Enveric Biosciences",
    "industry": "Biotechnology",
    "marketCap": "42.65M"
  },
  {
    "ticker": "ENVI",
    "organization": "Environmental Impact Acquisition",
    "industry": "Software",
    "marketCap": "205.76M"
  },
  {
    "ticker": "ENVX",
    "organization": "Enovix",
    "industry": "Electrical Equipment & Parts",
    "marketCap": "2.75B"
  },
  {
    "ticker": "ENZ",
    "organization": "Enzo Biochem",
    "industry": "Health Care Providers & Services",
    "marketCap": "169.17M"
  },
  {
    "ticker": "EOCW",
    "organization": "Elliott Opportunity II",
    "industry": "Shell Companies",
    "marketCap": "637.97M"
  },
  {
    "ticker": "EOG",
    "organization": "EOG Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EOLS",
    "organization": "Evolus",
    "industry": "Pharmaceuticals",
    "marketCap": "421.87M"
  },
  {
    "ticker": "EOSE",
    "organization": "Eos Energy Enterprises",
    "industry": "Electrical Equipment & Parts",
    "marketCap": "756.81M"
  },
  {
    "ticker": "EPAC",
    "organization": "Enerpac Tool Group",
    "industry": "Machinery",
    "marketCap": "1.29B"
  },
  {
    "ticker": "EPAM",
    "organization": "EPAM Systems",
    "industry": "IT Services",
    "marketCap": "32.31B"
  },
  {
    "ticker": "EPAY",
    "organization": "Bottomline Technologies",
    "industry": "Software",
    "marketCap": "1.80B"
  },
  {
    "ticker": "EPC",
    "organization": "Edgewell Personal Care",
    "industry": "Personal Products",
    "marketCap": "1.99B"
  },
  {
    "ticker": "EPD",
    "organization": "Enterprise Products Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EPHY",
    "organization": "Epiphany Technology Acquisition",
    "industry": "Shell Companies",
    "marketCap": "498.86M"
  },
  {
    "ticker": "EPIX",
    "organization": "ESSA Pharma",
    "industry": "Biotechnology",
    "marketCap": "345.28M"
  },
  {
    "ticker": "EPM",
    "organization": "Evolution Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EPR",
    "organization": "EPR Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.80B"
  },
  {
    "ticker": "EPRT",
    "organization": "Essential Properties Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.36B"
  },
  {
    "ticker": "EPSN",
    "organization": "Epsilon Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EPWR",
    "organization": "Empowerment & Inclusion Capital I",
    "industry": "Shell Companies",
    "marketCap": "337.41M"
  },
  {
    "ticker": "EPZM",
    "organization": "Epizyme",
    "industry": "Biotechnology",
    "marketCap": "513.30M"
  },
  {
    "ticker": "EQ",
    "organization": "Equillium",
    "industry": "Biotechnology",
    "marketCap": "189.52M"
  },
  {
    "ticker": "EQBK",
    "organization": "Equity Bancshares",
    "industry": "Banks",
    "marketCap": "481.29M"
  },
  {
    "ticker": "EQC",
    "organization": "Equity Commonwealth",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.18B"
  },
  {
    "ticker": "EQD",
    "organization": "Equity Distribution Acquisition",
    "industry": "Shell Companies",
    "marketCap": "507.15M"
  },
  {
    "ticker": "EQH",
    "organization": "Equitable Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "12.46B"
  },
  {
    "ticker": "EQHA",
    "organization": "EQ Health Acquisition",
    "industry": "Shell Companies",
    "marketCap": "267.57M"
  },
  {
    "ticker": "EQIX",
    "organization": "Equinix",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "71.11B"
  },
  {
    "ticker": "EQNR",
    "organization": "Equinor",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EQOS",
    "organization": "Diginex",
    "industry": "Capital Markets",
    "marketCap": "126.51M"
  },
  {
    "ticker": "EQR",
    "organization": "Equity Residential",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "30.16B"
  },
  {
    "ticker": "EQS",
    "organization": "Equus Total Return",
    "industry": "Capital Markets",
    "marketCap": "30.28M"
  },
  {
    "ticker": "EQT",
    "organization": "EQT Corporation",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EQX",
    "organization": "Equinox Gold Corp.",
    "industry": "Metals & Mining",
    "marketCap": "1.94B"
  },
  {
    "ticker": "ERAS",
    "organization": "Erasca",
    "industry": "Biotechnology",
    "marketCap": "2.50B"
  },
  {
    "ticker": "ERES",
    "organization": "East Resources Acquisition",
    "industry": "Shell Companies",
    "marketCap": "424.78M"
  },
  {
    "ticker": "ERF",
    "organization": "Enerplus",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ERIC",
    "organization": "Ericsson",
    "industry": "Communications Equipment",
    "marketCap": "37.75B"
  },
  {
    "ticker": "ERIE",
    "organization": "Erie Indemnity",
    "industry": "Insurance",
    "marketCap": "9.39B"
  },
  {
    "ticker": "ERII",
    "organization": "Energy Recovery",
    "industry": "Machinery",
    "marketCap": "1.10B"
  },
  {
    "ticker": "ERJ",
    "organization": "Embraer",
    "industry": "Aerospace & Defense",
    "marketCap": "3.35B"
  },
  {
    "ticker": "ERO",
    "organization": "Ero Copper",
    "industry": "Metals & Mining",
    "marketCap": "2.04B"
  },
  {
    "ticker": "ERYP",
    "organization": "Erytech Pharma",
    "industry": "Biotechnology",
    "marketCap": "174.31M"
  },
  {
    "ticker": "ES",
    "organization": "Eversource Energy",
    "industry": "Electric Utilities",
    "marketCap": "28.23B"
  },
  {
    "ticker": "ESBA",
    "organization": "Empire State Realty OP",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.87B"
  },
  {
    "ticker": "ESBK",
    "organization": "Elmira Savings Bank",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "47.41M"
  },
  {
    "ticker": "ESCA",
    "organization": "Escalade",
    "industry": "Leisure Products",
    "marketCap": "262.42M"
  },
  {
    "ticker": "ESE",
    "organization": "ESCO Technologies",
    "industry": "Machinery",
    "marketCap": "2.05B"
  },
  {
    "ticker": "ESEA",
    "organization": "Euroseas",
    "industry": "Marine",
    "marketCap": "252.99M"
  },
  {
    "ticker": "ESGC",
    "organization": "Eros STX Global",
    "industry": "Entertainment",
    "marketCap": "348.43M"
  },
  {
    "ticker": "ESGR",
    "organization": "Enstar Group",
    "industry": "Insurance",
    "marketCap": "4.32B"
  },
  {
    "ticker": "ESI",
    "organization": "Element Solutions",
    "industry": "Chemicals",
    "marketCap": "5.39B"
  },
  {
    "ticker": "ESLT",
    "organization": "Elbit Systems",
    "industry": "Aerospace & Defense",
    "marketCap": "6.48B"
  },
  {
    "ticker": "ESM",
    "organization": "ESM Acquisition",
    "industry": "Shell Companies",
    "marketCap": "374.47M"
  },
  {
    "ticker": "ESMT",
    "organization": "EngageSmart",
    "industry": "Software-Application",
    "marketCap": "5.49B"
  },
  {
    "ticker": "ESNT",
    "organization": "Essent Group",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "4.92B"
  },
  {
    "ticker": "ESP",
    "organization": "Espey Manufacturing & Electronics",
    "industry": "Electrical Equipment",
    "marketCap": "39.32M"
  },
  {
    "ticker": "ESPR",
    "organization": "Esperion Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "337.07M"
  },
  {
    "ticker": "ESQ",
    "organization": "Esquire Financial Holdings",
    "industry": "Banks",
    "marketCap": "228.46M"
  },
  {
    "ticker": "ESRT",
    "organization": "Empire State Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.82B"
  },
  {
    "ticker": "ESS",
    "organization": "Essex Property Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "21.09B"
  },
  {
    "ticker": "ESSA",
    "organization": "ESSA Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "174.50M"
  },
  {
    "ticker": "ESSC",
    "organization": "East Stone Acquisition",
    "industry": "Shell Companies",
    "marketCap": "180.75M"
  },
  {
    "ticker": "ESTA",
    "organization": "Establishment Labs Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.71B"
  },
  {
    "ticker": "ESTC",
    "organization": "Elastic",
    "industry": "Software",
    "marketCap": "13.87B"
  },
  {
    "ticker": "ESTE",
    "organization": "Earthstone Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ESXB",
    "organization": "Community Bankers Trust",
    "industry": "Banks",
    "marketCap": "259.09M"
  },
  {
    "ticker": "ET",
    "organization": "Energy Transfer LP",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ETAC",
    "organization": "E.merge Technology Acquisition",
    "industry": "Shell Companies",
    "marketCap": "748.28M"
  },
  {
    "ticker": "ETD",
    "organization": "Ethan Allen Interiors",
    "industry": "Furnishings",
    "marketCap": " Fixtures & Appliances"
  },
  {
    "ticker": "ETN",
    "organization": "Eaton",
    "industry": "Electrical Equipment",
    "marketCap": "60.05B"
  },
  {
    "ticker": "ETNB",
    "organization": "89bio",
    "industry": "Biotechnology",
    "marketCap": "387.49M"
  },
  {
    "ticker": "ETON",
    "organization": "Eton Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "123.99M"
  },
  {
    "ticker": "ETR",
    "organization": "Entergy",
    "industry": "Electric Utilities",
    "marketCap": "19.97B"
  },
  {
    "ticker": "ETRN",
    "organization": "Equitrans Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "ETSY",
    "organization": "Etsy",
    "industry": " Inc.",
    "marketCap": "Internet & Direct Marketing Retail"
  },
  {
    "ticker": "ETTX",
    "organization": "Entasis Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "155.65M"
  },
  {
    "ticker": "ETWO",
    "organization": "E2open Parent Holdings",
    "industry": "Software-Infrastructure",
    "marketCap": "3.86B"
  },
  {
    "ticker": "EUCR",
    "organization": "Eucrates Biomedical Acquisition",
    "industry": "Shell Companies",
    "marketCap": "131.63M"
  },
  {
    "ticker": "EURN",
    "organization": "Euronav",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EUSG",
    "organization": "European Sustainable Growth Acquisition",
    "industry": "Shell Companies",
    "marketCap": "178.49M"
  },
  {
    "ticker": "EVA",
    "organization": "Enviva Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "EVAX",
    "organization": "Evaxion Biotech",
    "industry": "Biotechnology",
    "marketCap": "176.63M"
  },
  {
    "ticker": "EVBG",
    "organization": "Everbridge",
    "industry": "Software",
    "marketCap": "5.73B"
  },
  {
    "ticker": "EVBN",
    "organization": "Evans Bancorp",
    "industry": "Banks",
    "marketCap": "209.04M"
  },
  {
    "ticker": "EVC",
    "organization": "Entravision Communications",
    "industry": "Media",
    "marketCap": "613.75M"
  },
  {
    "ticker": "EVCM",
    "organization": "EverCommerce",
    "industry": "Software-Infrastructure",
    "marketCap": "3.28B"
  },
  {
    "ticker": "EVER",
    "organization": "EverQuote",
    "industry": "Interactive Media & Services",
    "marketCap": "541.69M"
  },
  {
    "ticker": "EVFM",
    "organization": "Evofem Biosciences",
    "industry": "Pharmaceuticals",
    "marketCap": "112.22M"
  },
  {
    "ticker": "EVGN",
    "organization": "Evogene",
    "industry": "Biotechnology",
    "marketCap": "105.32M"
  },
  {
    "ticker": "EVGO",
    "organization": "EVgo",
    "industry": "Specialty Retail",
    "marketCap": "2.14B"
  },
  {
    "ticker": "EVH",
    "organization": "Evolent Health",
    "industry": "Health Care Technology",
    "marketCap": "2.67B"
  },
  {
    "ticker": "EVI",
    "organization": "EVI Industries",
    "industry": "Trading Companies & Distributors",
    "marketCap": "345.02M"
  },
  {
    "ticker": "EVK",
    "organization": "Ever-Glory International Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "EVLO",
    "organization": "Evelo Biosciences",
    "industry": "Biotechnology",
    "marketCap": "409.56M"
  },
  {
    "ticker": "EVLV",
    "organization": "Evolv Technologies",
    "industry": "Security & Protection Services",
    "marketCap": "870.71M"
  },
  {
    "ticker": "EVOJ",
    "organization": "Evo Acquisition",
    "industry": "Shell Companies",
    "marketCap": "152.35M"
  },
  {
    "ticker": "EVOK",
    "organization": "Evoke Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "39.25M"
  },
  {
    "ticker": "EVOL",
    "organization": "Evolving Systems",
    "industry": "Software",
    "marketCap": "26.97M"
  },
  {
    "ticker": "EVOP",
    "organization": "EVO Payments",
    "industry": "IT Services",
    "marketCap": "1.12B"
  },
  {
    "ticker": "EVR",
    "organization": "Evercore",
    "industry": "Capital Markets",
    "marketCap": "5.37B"
  },
  {
    "ticker": "EVRG",
    "organization": "Evergy",
    "industry": "Electric Utilities",
    "marketCap": "14.26B"
  },
  {
    "ticker": "EVRI",
    "organization": "Everi Holdings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "EVTC",
    "organization": "Evertec",
    "industry": "IT Services",
    "marketCap": "3.31B"
  },
  {
    "ticker": "EW",
    "organization": "Edwards Lifesciences",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "70.96B"
  },
  {
    "ticker": "EWBC",
    "organization": "East West Bancorp",
    "industry": "Banks",
    "marketCap": "11.19B"
  },
  {
    "ticker": "EWCZ",
    "organization": "European Wax Center",
    "industry": "Household & Personal Products",
    "marketCap": "1.92B"
  },
  {
    "ticker": "EWTX",
    "organization": "Edgewise Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "883.76M"
  },
  {
    "ticker": "EXAI",
    "organization": "Exscientia",
    "industry": "Biological Products",
    "marketCap": "3.22B"
  },
  {
    "ticker": "EXAS",
    "organization": "Exact Sciences",
    "industry": "Biotechnology",
    "marketCap": "16.41B"
  },
  {
    "ticker": "EXC",
    "organization": "Exelon",
    "industry": "Electric Utilities",
    "marketCap": "47.17B"
  },
  {
    "ticker": "EXEL",
    "organization": "Exelixis",
    "industry": "Biotechnology",
    "marketCap": "6.66B"
  },
  {
    "ticker": "EXK",
    "organization": "Endeavour Silver",
    "industry": "Metals & Mining",
    "marketCap": "694.63M"
  },
  {
    "ticker": "EXLS",
    "organization": "ExlService Holdings",
    "industry": "IT Services",
    "marketCap": "4.14B"
  },
  {
    "ticker": "EXN",
    "organization": "Excellon Resources",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "42.79M"
  },
  {
    "ticker": "EXP",
    "organization": "Eagle Materials",
    "industry": "Construction Materials",
    "marketCap": "5.65B"
  },
  {
    "ticker": "EXPD",
    "organization": "Expeditors International",
    "industry": "Air Freight & Logistics",
    "marketCap": "20.00B"
  },
  {
    "ticker": "EXPE",
    "organization": "Expedia",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "24.72B"
  },
  {
    "ticker": "EXPI",
    "organization": "eXp World Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "5.95B"
  },
  {
    "ticker": "EXPO",
    "organization": "Exponent",
    "industry": "Professional Services",
    "marketCap": "5.98B"
  },
  {
    "ticker": "EXPR",
    "organization": "Express",
    "industry": "Specialty Retail",
    "marketCap": "316.81M"
  },
  {
    "ticker": "EXR",
    "organization": "Extra Space Storage",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "22.56B"
  },
  {
    "ticker": "EXTN",
    "organization": "Exterran",
    "industry": "Energy Equipment & Services",
    "marketCap": "143.38M"
  },
  {
    "ticker": "EXTR",
    "organization": "Extreme Networks",
    "industry": "Communications Equipment",
    "marketCap": "1.32B"
  },
  {
    "ticker": "EYE",
    "organization": "National Vision Holdings",
    "industry": "Specialty Retail",
    "marketCap": "4.57B"
  },
  {
    "ticker": "EYEG",
    "organization": "EyeGate Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "28.26M"
  },
  {
    "ticker": "EYEN",
    "organization": "Eyenovia",
    "industry": "Pharmaceuticals",
    "marketCap": "127.14M"
  },
  {
    "ticker": "EYES",
    "organization": "Second Sight Medical Products",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "124.14M"
  },
  {
    "ticker": "EYPT",
    "organization": "EyePoint Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "322.51M"
  },
  {
    "ticker": "EZFL",
    "organization": "EzFill Holdings",
    "industry": "Software-Application",
    "marketCap": "91.25M"
  },
  {
    "ticker": "EZGO",
    "organization": "EZGO Technologies",
    "industry": "Recreational Vehicles",
    "marketCap": "39.67M"
  },
  {
    "ticker": "EZPW",
    "organization": "EZCORP",
    "industry": " Inc.",
    "marketCap": "Consumer Finance"
  },
  {
    "ticker": "F",
    "organization": "Ford Motor",
    "industry": "Automobiles",
    "marketCap": "56.53B"
  },
  {
    "ticker": "FA",
    "organization": "First Advantage",
    "industry": "Specialty Business Services",
    "marketCap": "3.07B"
  },
  {
    "ticker": "FACA",
    "organization": "Figure Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "404.55M"
  },
  {
    "ticker": "FACT",
    "organization": "Freedom Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "97.70M"
  },
  {
    "ticker": "FAF",
    "organization": "First American Financial",
    "industry": "Insurance",
    "marketCap": "7.41B"
  },
  {
    "ticker": "FAMI",
    "organization": "Farmmi",
    "industry": "Food Products",
    "marketCap": "99.95M"
  },
  {
    "ticker": "FANG",
    "organization": "Diamondback Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "FANH",
    "organization": "Fanhua",
    "industry": "Insurance",
    "marketCap": "648.63M"
  },
  {
    "ticker": "FARM",
    "organization": "Farmer Brothers",
    "industry": "Food Products",
    "marketCap": "147.72M"
  },
  {
    "ticker": "FARO",
    "organization": "FARO Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "FAST",
    "organization": "Fastenal",
    "industry": "Trading Companies & Distributors",
    "marketCap": "29.70B"
  },
  {
    "ticker": "FAT",
    "organization": "FAT Brands",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "FATBB",
    "organization": "FAT Brands",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "FATE",
    "organization": "Fate Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "5.62B"
  },
  {
    "ticker": "FB",
    "organization": "Facebook",
    "industry": "Interactive Media & Services",
    "marketCap": "967.10B"
  },
  {
    "ticker": "FBC",
    "organization": "Flagstar Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "2.77B"
  },
  {
    "ticker": "FBHS",
    "organization": "Fortune Brands",
    "industry": "Building Products",
    "marketCap": "12.33B"
  },
  {
    "ticker": "FBIO",
    "organization": "Fortress Biotech",
    "industry": "Biotechnology",
    "marketCap": "320.38M"
  },
  {
    "ticker": "FBIZ",
    "organization": "First Business Financial Services",
    "industry": "Banks",
    "marketCap": "244.41M"
  },
  {
    "ticker": "FBK",
    "organization": "FB Financial",
    "industry": "Banks",
    "marketCap": "2.03B"
  },
  {
    "ticker": "FBMS",
    "organization": "First Bancshares",
    "industry": "Banks",
    "marketCap": "832.20M"
  },
  {
    "ticker": "FBNC",
    "organization": "First Bancorp",
    "industry": "Banks",
    "marketCap": "1.25B"
  },
  {
    "ticker": "FBP",
    "organization": "First BanCorp - Puerto Rico",
    "industry": "Banks",
    "marketCap": "2.78B"
  },
  {
    "ticker": "FBRX",
    "organization": "Forte Biosciences",
    "industry": "Biotechnology",
    "marketCap": "41.81M"
  },
  {
    "ticker": "FC",
    "organization": "Franklin Covey",
    "industry": "Professional Services",
    "marketCap": "574.06M"
  },
  {
    "ticker": "FCAP",
    "organization": "First Capital",
    "industry": "Banks",
    "marketCap": "141.30M"
  },
  {
    "ticker": "FCAX",
    "organization": "Fortress Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "487.50M"
  },
  {
    "ticker": "FCBC",
    "organization": "First Community Bancshares",
    "industry": "Banks",
    "marketCap": "548.13M"
  },
  {
    "ticker": "FCCO",
    "organization": "First Community",
    "industry": "Banks",
    "marketCap": "149.96M"
  },
  {
    "ticker": "FCCY",
    "organization": "1st Constitution Bancorp",
    "industry": "Banks",
    "marketCap": "246.74M"
  },
  {
    "ticker": "FCEL",
    "organization": "FuelCell Energy",
    "industry": "Electrical Equipment",
    "marketCap": "2.36B"
  },
  {
    "ticker": "FCF",
    "organization": "First Commonwealth Financial",
    "industry": "Banks",
    "marketCap": "1.34B"
  },
  {
    "ticker": "FCFS",
    "organization": "FirstCash",
    "industry": "Consumer Finance",
    "marketCap": "3.56B"
  },
  {
    "ticker": "FCN",
    "organization": "FTI Consulting",
    "industry": "Professional Services",
    "marketCap": "4.62B"
  },
  {
    "ticker": "FCNCA",
    "organization": "First Citizens BancShares",
    "industry": "Banks",
    "marketCap": "8.33B"
  },
  {
    "ticker": "FCPT",
    "organization": "Four Corners Property Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.05B"
  },
  {
    "ticker": "FCRD",
    "organization": "First Eagle Alternative Capital",
    "industry": "Asset Management",
    "marketCap": "132.78M"
  },
  {
    "ticker": "FCUV",
    "organization": "Focus Universal",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "FCX",
    "organization": "Freeport-McMoRan",
    "industry": "Metals & Mining",
    "marketCap": "47.97B"
  },
  {
    "ticker": "FDBC",
    "organization": "Fidelity D&D Bancorp",
    "industry": "Banks",
    "marketCap": "294.09M"
  },
  {
    "ticker": "FDMT",
    "organization": "4D Molecular Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "711.95M"
  },
  {
    "ticker": "FDP",
    "organization": "Fresh Del Monte Produce",
    "industry": "Food Products",
    "marketCap": "1.53B"
  },
  {
    "ticker": "FDS",
    "organization": "FactSet Research Systems",
    "industry": "Capital Markets",
    "marketCap": "14.83B"
  },
  {
    "ticker": "FDUS",
    "organization": "Fidus Investment",
    "industry": "Capital Markets",
    "marketCap": "429.73M"
  },
  {
    "ticker": "FDX",
    "organization": "FedEx",
    "industry": "Air Freight & Logistics",
    "marketCap": "59.12B"
  },
  {
    "ticker": "FE",
    "organization": "FirstEnergy",
    "industry": "Electric Utilities",
    "marketCap": "19.60B"
  },
  {
    "ticker": "FEDU",
    "organization": "Four Seasons Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "48.11M"
  },
  {
    "ticker": "FEIM",
    "organization": "Frequency Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "FELE",
    "organization": "Franklin Electric",
    "industry": "Machinery",
    "marketCap": "3.78B"
  },
  {
    "ticker": "FEMY",
    "organization": "Femasys",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "85.43M"
  },
  {
    "ticker": "FENC",
    "organization": "Fennec Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "240.99M"
  },
  {
    "ticker": "FENG",
    "organization": "Phoenix New Media",
    "industry": "Interactive Media & Services",
    "marketCap": "92.59M"
  },
  {
    "ticker": "FERG",
    "organization": "Ferguson",
    "industry": "Industrial Distribution",
    "marketCap": "30.86B"
  },
  {
    "ticker": "FET",
    "organization": "Forum Energy Technologies",
    "industry": "Energy Equipment & Services",
    "marketCap": "126.85M"
  },
  {
    "ticker": "FEYE",
    "organization": "FireEye",
    "industry": "Software",
    "marketCap": "4.28B"
  },
  {
    "ticker": "FF",
    "organization": "FutureFuel",
    "industry": "Chemicals",
    "marketCap": "319.41M"
  },
  {
    "ticker": "FFBC",
    "organization": "First Financial Bancorp",
    "industry": "Banks",
    "marketCap": "2.28B"
  },
  {
    "ticker": "FFBW",
    "organization": "FFBW",
    "industry": " Inc.",
    "marketCap": "Thrifts & Mortgage Finance"
  },
  {
    "ticker": "FFHL",
    "organization": "Fuwei Films",
    "industry": "Chemicals",
    "marketCap": "31.42M"
  },
  {
    "ticker": "FFIC",
    "organization": "Flushing Financial",
    "industry": "Banks",
    "marketCap": "711.23M"
  },
  {
    "ticker": "FFIE",
    "organization": "Faraday Future Intelligent Electric",
    "industry": "Auto Manufacturers",
    "marketCap": "2.92B"
  },
  {
    "ticker": "FFIN",
    "organization": "First Financial Bankshares",
    "industry": "Banks",
    "marketCap": "6.66B"
  },
  {
    "ticker": "FFIV",
    "organization": "F5 Networks",
    "industry": "Communications Equipment",
    "marketCap": "11.99B"
  },
  {
    "ticker": "FFNW",
    "organization": "First Financial Northwest",
    "industry": "Banks",
    "marketCap": "156.09M"
  },
  {
    "ticker": "FFWM",
    "organization": "First Foundation",
    "industry": "Banks",
    "marketCap": "1.19B"
  },
  {
    "ticker": "FGBI",
    "organization": "First Guaranty Bancshares",
    "industry": "Banks",
    "marketCap": "196.77M"
  },
  {
    "ticker": "FGEN",
    "organization": "FibroGen",
    "industry": "Biotechnology",
    "marketCap": "957.71M"
  },
  {
    "ticker": "FGF",
    "organization": "FG Financial Group",
    "industry": "Insurance",
    "marketCap": "26.20M"
  },
  {
    "ticker": "FHB",
    "organization": "First Hawaiian",
    "industry": "Banks",
    "marketCap": "3.83B"
  },
  {
    "ticker": "FHI",
    "organization": "Federated Hermes",
    "industry": "Asset Management",
    "marketCap": "3.18B"
  },
  {
    "ticker": "FHN",
    "organization": "First Horizon National",
    "industry": "Banks",
    "marketCap": "9.02B"
  },
  {
    "ticker": "FHS",
    "organization": "First High-School Education Group",
    "industry": "Education & Training Services",
    "marketCap": "84.23M"
  },
  {
    "ticker": "FHTX",
    "organization": "Foghorn Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "514.90M"
  },
  {
    "ticker": "FI",
    "organization": "Frank's International",
    "industry": "Energy Equipment & Services",
    "marketCap": "719.45M"
  },
  {
    "ticker": "FIBK",
    "organization": "First Interstate BancSystem",
    "industry": "Banks",
    "marketCap": "2.53B"
  },
  {
    "ticker": "FICO",
    "organization": "Fair Isaac",
    "industry": "Software",
    "marketCap": "11.51B"
  },
  {
    "ticker": "FICV",
    "organization": "Frontier Investment",
    "industry": "Shell Companies",
    "marketCap": "243.75M"
  },
  {
    "ticker": "FIGS",
    "organization": "FIGS",
    "industry": "Apparel Manufacturing",
    "marketCap": "5.95B"
  },
  {
    "ticker": "FINM",
    "organization": "Marlin Technology",
    "industry": "Shell Companies",
    "marketCap": "504.57M"
  },
  {
    "ticker": "FINV",
    "organization": "FinVolution Group",
    "industry": "Consumer Finance",
    "marketCap": "1.62B"
  },
  {
    "ticker": "FIS",
    "organization": "Fidelity National Information Services",
    "industry": "IT Services",
    "marketCap": "76.28B"
  },
  {
    "ticker": "FISI",
    "organization": "Financial Institutions",
    "industry": "Banks",
    "marketCap": "494.58M"
  },
  {
    "ticker": "FISV",
    "organization": "Fiserv",
    "industry": "IT Services",
    "marketCap": "72.70B"
  },
  {
    "ticker": "FITB",
    "organization": "Fifth Third Bancorp",
    "industry": "Banks",
    "marketCap": "29.25B"
  },
  {
    "ticker": "FIVE",
    "organization": "Five Below",
    "industry": "Specialty Retail",
    "marketCap": "9.71B"
  },
  {
    "ticker": "FIVN",
    "organization": "Five9",
    "industry": "Software",
    "marketCap": "11.32B"
  },
  {
    "ticker": "FIX",
    "organization": "Comfort Systems USA",
    "industry": "Construction & Engineering",
    "marketCap": "2.69B"
  },
  {
    "ticker": "FIXX",
    "organization": "Homology Medicines",
    "industry": "Biotechnology",
    "marketCap": "444.15M"
  },
  {
    "ticker": "FIZZ",
    "organization": "National Beverage",
    "industry": "Beverages",
    "marketCap": "4.96B"
  },
  {
    "ticker": "FKWL",
    "organization": "Franklin Wireless",
    "industry": "Communications Equipment",
    "marketCap": "82.75M"
  },
  {
    "ticker": "FL",
    "organization": "Foot Locker",
    "industry": "Specialty Retail",
    "marketCap": "4.81B"
  },
  {
    "ticker": "FLAC",
    "organization": "Frazier Lifesciences Acquisition",
    "industry": "Shell Companies",
    "marketCap": "174.31M"
  },
  {
    "ticker": "FLDM",
    "organization": "Fluidigm",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "464.24M"
  },
  {
    "ticker": "FLEX",
    "organization": "Flex Ltd.",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "FLGC",
    "organization": "Flora Growth",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "226.51M"
  },
  {
    "ticker": "FLGT",
    "organization": "Fulgent Genetics",
    "industry": "Health Care Providers & Services",
    "marketCap": "2.55B"
  },
  {
    "ticker": "FLIC",
    "organization": "First of Long Island",
    "industry": "Banks",
    "marketCap": "488.34M"
  },
  {
    "ticker": "FLL",
    "organization": "Full House Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "FLME",
    "organization": "Flame Acquisition",
    "industry": "Shell Companies",
    "marketCap": "349.31M"
  },
  {
    "ticker": "FLMN",
    "organization": "Falcon Minerals",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "FLNG",
    "organization": "Flex LNG",
    "industry": "Marine",
    "marketCap": "1.02B"
  },
  {
    "ticker": "FLNT",
    "organization": "Fluent",
    "industry": "Media",
    "marketCap": "181.07M"
  },
  {
    "ticker": "FLO",
    "organization": "Flowers Foods",
    "industry": "Food Products",
    "marketCap": "5.04B"
  },
  {
    "ticker": "FLOW",
    "organization": "SPX Flow",
    "industry": "Machinery",
    "marketCap": "3.06B"
  },
  {
    "ticker": "FLR",
    "organization": "Fluor Corporation",
    "industry": "Construction & Engineering",
    "marketCap": "2.29B"
  },
  {
    "ticker": "FLS",
    "organization": "Flowserve",
    "industry": "Machinery",
    "marketCap": "4.61B"
  },
  {
    "ticker": "FLT",
    "organization": "FleetCor Technologies",
    "industry": "IT Services",
    "marketCap": "22.03B"
  },
  {
    "ticker": "FLUX",
    "organization": "Flux Power Holdings",
    "industry": "Electrical Equipment",
    "marketCap": "81.22M"
  },
  {
    "ticker": "FLWS",
    "organization": "1-800-Flowers.com",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.99B"
  },
  {
    "ticker": "FLXN",
    "organization": "Flexion Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "308.29M"
  },
  {
    "ticker": "FLXS",
    "organization": "Flexsteel Industries",
    "industry": "Household Durables",
    "marketCap": "211.42M"
  },
  {
    "ticker": "FLYW",
    "organization": "Flywire",
    "industry": "Information Technology Services",
    "marketCap": "4.79B"
  },
  {
    "ticker": "FMAC",
    "organization": "FirstMark Horizon Acquisition",
    "industry": "Shell Companies",
    "marketCap": "507.67M"
  },
  {
    "ticker": "FMAO",
    "organization": "Farmers & Merchants Bancorp",
    "industry": "Banks",
    "marketCap": "250.64M"
  },
  {
    "ticker": "FMBH",
    "organization": "First Mid Bancshares",
    "industry": "Banks",
    "marketCap": "743.58M"
  },
  {
    "ticker": "FMBI",
    "organization": "First Midwest Bancorp",
    "industry": "Banks",
    "marketCap": "2.21B"
  },
  {
    "ticker": "FMC",
    "organization": "FMC Corporation",
    "industry": "Chemicals",
    "marketCap": "11.78B"
  },
  {
    "ticker": "FMIV",
    "organization": "Forum Merger IV",
    "industry": "Shell Companies",
    "marketCap": "418.00M"
  },
  {
    "ticker": "FMNB",
    "organization": "Farmers National Banc",
    "industry": "Banks",
    "marketCap": "456.32M"
  },
  {
    "ticker": "FMS",
    "organization": "Fresenius Medical Care",
    "industry": "Health Care Providers & Services",
    "marketCap": "20.65B"
  },
  {
    "ticker": "FMTX",
    "organization": "Forma Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.20B"
  },
  {
    "ticker": "FMX",
    "organization": "Fomento Economico Mexicano",
    "industry": "Beverages",
    "marketCap": "30.78B"
  },
  {
    "ticker": "FN",
    "organization": "Fabrinet",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "FNB",
    "organization": "F.N.B.",
    "industry": "Banks",
    "marketCap": "3.80B"
  },
  {
    "ticker": "FNCB",
    "organization": "FNCB Bancorp",
    "industry": "Banks",
    "marketCap": "166.37M"
  },
  {
    "ticker": "FNCH",
    "organization": "Finch Therapeutics Group",
    "industry": "Biotechnology",
    "marketCap": "625.14M"
  },
  {
    "ticker": "FND",
    "organization": "Floor & Decor Holdings",
    "industry": "Specialty Retail",
    "marketCap": "12.39B"
  },
  {
    "ticker": "FNF",
    "organization": "Fidelity National Financial",
    "industry": "Insurance",
    "marketCap": "13.04B"
  },
  {
    "ticker": "FNHC",
    "organization": "FedNat Holding",
    "industry": "Insurance",
    "marketCap": "44.30M"
  },
  {
    "ticker": "FNKO",
    "organization": "Funko",
    "industry": "Distributors",
    "marketCap": "937.33M"
  },
  {
    "ticker": "FNLC",
    "organization": "First Bancorp",
    "industry": "Banks",
    "marketCap": "324.88M"
  },
  {
    "ticker": "FNV",
    "organization": "Franco-Nevada",
    "industry": "Metals & Mining",
    "marketCap": "24.83B"
  },
  {
    "ticker": "FNWB",
    "organization": "First Northwest Bancorp",
    "industry": "Banks",
    "marketCap": "180.06M"
  },
  {
    "ticker": "FOA",
    "organization": "Finance of America",
    "industry": "Credit Services",
    "marketCap": "304.20M"
  },
  {
    "ticker": "FOCS",
    "organization": "Focus Financial Partners",
    "industry": "Capital Markets",
    "marketCap": "3.82B"
  },
  {
    "ticker": "FOE",
    "organization": "Ferro Corporation",
    "industry": "Chemicals",
    "marketCap": "1.68B"
  },
  {
    "ticker": "FOLD",
    "organization": "Amicus Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.63B"
  },
  {
    "ticker": "FONR",
    "organization": "Fonar Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "103.17M"
  },
  {
    "ticker": "FOR",
    "organization": "Forestar Group",
    "industry": "Real Estate Management & Development",
    "marketCap": "927.15M"
  },
  {
    "ticker": "FORA",
    "organization": "Forian",
    "industry": "Health Information Services",
    "marketCap": "340.56M"
  },
  {
    "ticker": "FORD",
    "organization": "Forward Industries",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "FORE",
    "organization": "Foresight Acquisition",
    "industry": "Shell Companies",
    "marketCap": "398.79M"
  },
  {
    "ticker": "FORG",
    "organization": "ForgeRock",
    "industry": "Software-Infrastructure",
    "marketCap": "2.86B"
  },
  {
    "ticker": "FORM",
    "organization": "FormFactor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.90B"
  },
  {
    "ticker": "FORR",
    "organization": "Forrester Research",
    "industry": "Professional Services",
    "marketCap": "956.10M"
  },
  {
    "ticker": "FORTY",
    "organization": "Formula Systems (1985) Ltd.",
    "industry": "IT Services",
    "marketCap": "1.50B"
  },
  {
    "ticker": "FOSL",
    "organization": "Fossil Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "FOUR",
    "organization": "Shift4 Payments",
    "industry": "IT Services",
    "marketCap": "6.78B"
  },
  {
    "ticker": "FOX",
    "organization": "Fox Corporation",
    "industry": "Media",
    "marketCap": "22.62B"
  },
  {
    "ticker": "FOXA",
    "organization": "Fox Corporation",
    "industry": "Media",
    "marketCap": "22.64B"
  },
  {
    "ticker": "FOXF",
    "organization": "Fox Factory Holding",
    "industry": "Auto Components",
    "marketCap": "6.09B"
  },
  {
    "ticker": "FOXW",
    "organization": "FoxWayne Enterprises Acquisition",
    "industry": "Shell Companies",
    "marketCap": "71.43M"
  },
  {
    "ticker": "FPAC",
    "organization": "Far Peak Acquisition",
    "industry": "Shell Companies",
    "marketCap": "696.80M"
  },
  {
    "ticker": "FPAY",
    "organization": "FlexShopper",
    "industry": "Diversified Financial Services",
    "marketCap": "66.12M"
  },
  {
    "ticker": "FPH",
    "organization": "Five Point Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "1.16B"
  },
  {
    "ticker": "FPI",
    "organization": "Farmland Partners",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "389.57M"
  },
  {
    "ticker": "FR",
    "organization": "First Industrial Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.84B"
  },
  {
    "ticker": "FRAF",
    "organization": "Franklin Financial Services",
    "industry": "Banks",
    "marketCap": "140.41M"
  },
  {
    "ticker": "FRBA",
    "organization": "First Bank",
    "industry": "Banks",
    "marketCap": "269.75M"
  },
  {
    "ticker": "FRBK",
    "organization": "Republic First Bancorp",
    "industry": "Banks",
    "marketCap": "182.55M"
  },
  {
    "ticker": "FRC",
    "organization": "First Republic Bank",
    "industry": "Banks",
    "marketCap": "34.96B"
  },
  {
    "ticker": "FRD",
    "organization": "Friedman Industries",
    "industry": "Metals & Mining",
    "marketCap": "82.04M"
  },
  {
    "ticker": "FREE",
    "organization": "Whole Earth Brands",
    "industry": "Packaged Foods",
    "marketCap": "441.95M"
  },
  {
    "ticker": "FREQ",
    "organization": "Frequency Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "242.98M"
  },
  {
    "ticker": "FREY",
    "organization": "FREYR Battery",
    "industry": "Electrical Equipment & Parts",
    "marketCap": "1.17B"
  },
  {
    "ticker": "FRG",
    "organization": "Franchise Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.47B"
  },
  {
    "ticker": "FRGI",
    "organization": "Fiesta Restaurant Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "FRHC",
    "organization": "Freedom Holding",
    "industry": "Capital Markets",
    "marketCap": "3.74B"
  },
  {
    "ticker": "FRLN",
    "organization": "Freeline Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "122.09M"
  },
  {
    "ticker": "FRME",
    "organization": "First Merchants",
    "industry": "Banks",
    "marketCap": "2.29B"
  },
  {
    "ticker": "FRO",
    "organization": "Frontline",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "FROG",
    "organization": "JFrog",
    "industry": "Software",
    "marketCap": "3.21B"
  },
  {
    "ticker": "FRON",
    "organization": "Frontier Acquisition",
    "industry": "Shell Companies",
    "marketCap": "284.69M"
  },
  {
    "ticker": "FRPH",
    "organization": "FRP Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "527.02M"
  },
  {
    "ticker": "FRPT",
    "organization": "Freshpet",
    "industry": "Food Products",
    "marketCap": "6.29B"
  },
  {
    "ticker": "FRSG",
    "organization": "First Reserve Sustainable Growth",
    "industry": "Shell Companies",
    "marketCap": "274.16M"
  },
  {
    "ticker": "FRSH",
    "organization": "Freshworks",
    "industry": "Software",
    "marketCap": "11.79B"
  },
  {
    "ticker": "FRST",
    "organization": "Primis Financial",
    "industry": "Banks",
    "marketCap": "356.56M"
  },
  {
    "ticker": "FRSX",
    "organization": "Foresight Autonomous",
    "industry": "Auto Components",
    "marketCap": "195.52M"
  },
  {
    "ticker": "FRT",
    "organization": "Federal Realty Investment Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "9.31B"
  },
  {
    "ticker": "FRTA",
    "organization": "Forterra",
    "industry": "Construction Materials",
    "marketCap": "1.58B"
  },
  {
    "ticker": "FRW",
    "organization": "PWP Forward Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "206.77M"
  },
  {
    "ticker": "FRXB",
    "organization": "Forest Road Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "427.87M"
  },
  {
    "ticker": "FSBC",
    "organization": "Five Star Bancorp",
    "industry": "Banks-Regional",
    "marketCap": "412.55M"
  },
  {
    "ticker": "FSBW",
    "organization": "FS Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "289.71M"
  },
  {
    "ticker": "FSEA",
    "organization": "First Seacoast Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "58.39M"
  },
  {
    "ticker": "FSFG",
    "organization": "First Savings Financial Group",
    "industry": "Banks",
    "marketCap": "200.12M"
  },
  {
    "ticker": "FSI",
    "organization": "Flexible Solutions International",
    "industry": "Chemicals",
    "marketCap": "42.71M"
  },
  {
    "ticker": "FSII",
    "organization": "FS Development II",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "211.42M"
  },
  {
    "ticker": "FSK",
    "organization": "FS KKR Capital",
    "industry": "Capital Markets",
    "marketCap": "6.33B"
  },
  {
    "ticker": "FSLR",
    "organization": "First Solar",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "10.27B"
  },
  {
    "ticker": "FSLY",
    "organization": "Fastly",
    "industry": "IT Services",
    "marketCap": "4.73B"
  },
  {
    "ticker": "FSM",
    "organization": "Fortuna Silver Mines",
    "industry": "Metals & Mining",
    "marketCap": "1.16B"
  },
  {
    "ticker": "FSNB",
    "organization": "Fusion Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "607.50M"
  },
  {
    "ticker": "FSP",
    "organization": "Franklin Street Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "517.64M"
  },
  {
    "ticker": "FSR",
    "organization": "Fisker",
    "industry": "Insurance",
    "marketCap": "4.38B"
  },
  {
    "ticker": "FSRX",
    "organization": "FinServ Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "372.66M"
  },
  {
    "ticker": "FSS",
    "organization": "Federal Signal",
    "industry": "Machinery",
    "marketCap": "2.40B"
  },
  {
    "ticker": "FSSI",
    "organization": "Fortistar Sustainable Solutions",
    "industry": "Shell Companies",
    "marketCap": "314.71M"
  },
  {
    "ticker": "FST",
    "organization": "Fast Acquisition",
    "industry": "Shell Companies",
    "marketCap": "322.57M"
  },
  {
    "ticker": "FSTR",
    "organization": "L.B. Foster Company",
    "industry": "Machinery",
    "marketCap": "168.10M"
  },
  {
    "ticker": "FSTX",
    "organization": "F-star Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "148.26M"
  },
  {
    "ticker": "FSV",
    "organization": "FirstService",
    "industry": "Real Estate Management & Development",
    "marketCap": "7.90B"
  },
  {
    "ticker": "FTAA",
    "organization": "FTAC Athena Acquisition",
    "industry": "Shell Companies",
    "marketCap": "339.40M"
  },
  {
    "ticker": "FTAI",
    "organization": "Fortress Transportation & Infrastructure Investors",
    "industry": "Trading Companies & Distributors",
    "marketCap": "2.48B"
  },
  {
    "ticker": "FTCH",
    "organization": "Farfetch",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "13.30B"
  },
  {
    "ticker": "FTCI",
    "organization": "FTC Solar",
    "industry": "Solar",
    "marketCap": "642.38M"
  },
  {
    "ticker": "FTCV",
    "organization": "FinTech Acquisition V",
    "industry": "Shell Companies",
    "marketCap": "346.99M"
  },
  {
    "ticker": "FTDR",
    "organization": "Frontdoor",
    "industry": " Inc.",
    "marketCap": "Diversified Consumer Services"
  },
  {
    "ticker": "FTEK",
    "organization": "Fuel Tech",
    "industry": "Commercial Services & Supplies",
    "marketCap": "52.96M"
  },
  {
    "ticker": "FTEV",
    "organization": "FinTech Evolution Acquisition",
    "industry": "Shell Companies",
    "marketCap": "332.35M"
  },
  {
    "ticker": "FTFT",
    "organization": "Future FinTech Group",
    "industry": "Food Products",
    "marketCap": "146.44M"
  },
  {
    "ticker": "FTHM",
    "organization": "Fathom Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "395.06M"
  },
  {
    "ticker": "FTI",
    "organization": "TechnipFMC",
    "industry": "Energy Equipment & Services",
    "marketCap": "3.39B"
  },
  {
    "ticker": "FTK",
    "organization": "Flotek Industries",
    "industry": "Chemicals",
    "marketCap": "94.48M"
  },
  {
    "ticker": "FTNT",
    "organization": "Fortinet",
    "industry": "Software",
    "marketCap": "48.67B"
  },
  {
    "ticker": "FTPA",
    "organization": "FTAC Parnassus Acquisition",
    "industry": "Shell Companies",
    "marketCap": "332.26M"
  },
  {
    "ticker": "FTRP",
    "organization": "Field Trip Health",
    "industry": "Medical Care Facilities",
    "marketCap": "329.23M"
  },
  {
    "ticker": "FTS",
    "organization": "Fortis",
    "industry": "Electric Utilities",
    "marketCap": "20.80B"
  },
  {
    "ticker": "FTSI",
    "organization": "FTS International",
    "industry": "Energy Equipment & Services",
    "marketCap": "345.49M"
  },
  {
    "ticker": "FTV",
    "organization": "Fortive",
    "industry": "Machinery",
    "marketCap": "25.28B"
  },
  {
    "ticker": "FTVI",
    "organization": "FinTech Acquisition VI",
    "industry": "Shell Companies",
    "marketCap": "296.48M"
  },
  {
    "ticker": "FUBO",
    "organization": "FuboTV",
    "industry": "Software",
    "marketCap": "3.46B"
  },
  {
    "ticker": "FUL",
    "organization": "H.B. Fuller",
    "industry": "Chemicals",
    "marketCap": "3.43B"
  },
  {
    "ticker": "FULC",
    "organization": "Fulcrum Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "1.14B"
  },
  {
    "ticker": "FULT",
    "organization": "Fulton Financial",
    "industry": "Banks",
    "marketCap": "2.55B"
  },
  {
    "ticker": "FUN",
    "organization": "Cedar Fair",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "FUNC",
    "organization": "First United",
    "industry": "Banks",
    "marketCap": "123.69M"
  },
  {
    "ticker": "FURY",
    "organization": "Fury Gold Mines",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "74.28M"
  },
  {
    "ticker": "FUSB",
    "organization": "First US Bancshares",
    "industry": "Banks",
    "marketCap": "67.15M"
  },
  {
    "ticker": "FUSN",
    "organization": "Fusion Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "341.79M"
  },
  {
    "ticker": "FUTU",
    "organization": "Futu Holdings",
    "industry": "Capital Markets",
    "marketCap": "13.24B"
  },
  {
    "ticker": "FUV",
    "organization": "Arcimoto",
    "industry": "Automobiles",
    "marketCap": "419.54M"
  },
  {
    "ticker": "FVAM",
    "organization": "5:01 Acquisition",
    "industry": "Shell Companies",
    "marketCap": "108.47M"
  },
  {
    "ticker": "FVCB",
    "organization": "FVCBankcorp",
    "industry": "Banks",
    "marketCap": "272.42M"
  },
  {
    "ticker": "FVE",
    "organization": "Five Star Senior Living",
    "industry": "Health Care Providers & Services",
    "marketCap": "134.03M"
  },
  {
    "ticker": "FVIV",
    "organization": "Fortress Value Acquisition IV",
    "industry": "Shell Companies",
    "marketCap": "632.45M"
  },
  {
    "ticker": "FVRR",
    "organization": "Fiverr International",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "6.73B"
  },
  {
    "ticker": "FVT",
    "organization": "Fortress Value Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "280.02M"
  },
  {
    "ticker": "FWAC",
    "organization": "Fifth Wall Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "318.50M"
  },
  {
    "ticker": "FWBI",
    "organization": "First Wave BioPharma",
    "industry": "Biotechnology",
    "marketCap": "22.11M"
  },
  {
    "ticker": "FWONA",
    "organization": "Liberty Media Formula One",
    "industry": "Entertainment",
    "marketCap": "11.91B"
  },
  {
    "ticker": "FWP",
    "organization": "Forward Pharma A/S",
    "industry": "Biotechnology",
    "marketCap": "46.11M"
  },
  {
    "ticker": "FWRD",
    "organization": "Forward Air",
    "industry": "Air Freight & Logistics",
    "marketCap": "2.26B"
  },
  {
    "ticker": "FWRG",
    "organization": "First Watch Restaurant Group",
    "industry": "Restaurants",
    "marketCap": "1.28B"
  },
  {
    "ticker": "FXLV",
    "organization": "F45 Training",
    "industry": "Leisure",
    "marketCap": "1.39B"
  },
  {
    "ticker": "FXNC",
    "organization": "First National",
    "industry": "Banks",
    "marketCap": "141.04M"
  },
  {
    "ticker": "FYBR",
    "organization": "Frontier Communications",
    "industry": "Telecom Services",
    "marketCap": "6.88B"
  },
  {
    "ticker": "FZT",
    "organization": "FAST Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "271.25M"
  },
  {
    "ticker": "G",
    "organization": "Genpact",
    "industry": "IT Services",
    "marketCap": "9.02B"
  },
  {
    "ticker": "GABC",
    "organization": "German American Bancorp",
    "industry": "Banks",
    "marketCap": "1.03B"
  },
  {
    "ticker": "GACQ",
    "organization": "Global Consumer Acquisition",
    "industry": "Shell Companies",
    "marketCap": "222.14M"
  },
  {
    "ticker": "GAIA",
    "organization": "Gaia",
    "industry": " Inc.",
    "marketCap": "Entertainment"
  },
  {
    "ticker": "GAIN",
    "organization": "Gladstone Investment",
    "industry": "Capital Markets",
    "marketCap": "466.20M"
  },
  {
    "ticker": "GALT",
    "organization": "Galectin Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "221.10M"
  },
  {
    "ticker": "GAMB",
    "organization": "Gambling.com Group",
    "industry": "Gambling",
    "marketCap": "308.65M"
  },
  {
    "ticker": "GAMC",
    "organization": "Golden Arrow Merger",
    "industry": "Shell Companies",
    "marketCap": "350.75M"
  },
  {
    "ticker": "GAME",
    "organization": "Engine Media",
    "industry": "Software",
    "marketCap": "62.71M"
  },
  {
    "ticker": "GAN",
    "organization": "GAN Limited",
    "industry": "Gambling",
    "marketCap": "658.84M"
  },
  {
    "ticker": "GANX",
    "organization": "Gain Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "88.67M"
  },
  {
    "ticker": "GAPA",
    "organization": "G&P Acquisition",
    "industry": "Shell Companies",
    "marketCap": "215.69M"
  },
  {
    "ticker": "GASS",
    "organization": "StealthGas",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GATO",
    "organization": "Gatos Silver",
    "industry": "Other Precious Metals & Mining",
    "marketCap": "788.57M"
  },
  {
    "ticker": "GATX",
    "organization": "GATX Corporation",
    "industry": "Trading Companies & Distributors",
    "marketCap": "3.18B"
  },
  {
    "ticker": "GAU",
    "organization": "Galiano Gold",
    "industry": "Metals & Mining",
    "marketCap": "165.33M"
  },
  {
    "ticker": "GB",
    "organization": "Global Blue",
    "industry": "Information Technology Services",
    "marketCap": "1.37B"
  },
  {
    "ticker": "GBCI",
    "organization": "Glacier Bancorp",
    "industry": "Banks",
    "marketCap": "5.35B"
  },
  {
    "ticker": "GBDC",
    "organization": "Golub Capital BDC",
    "industry": "Capital Markets",
    "marketCap": "2.69B"
  },
  {
    "ticker": "GBIO",
    "organization": "Generation Bio",
    "industry": "Biotechnology",
    "marketCap": "1.42B"
  },
  {
    "ticker": "GBL",
    "organization": "GAMCO Investors",
    "industry": "Capital Markets",
    "marketCap": "715.30M"
  },
  {
    "ticker": "GBLI",
    "organization": "Global Indemnity",
    "industry": "Insurance",
    "marketCap": "391.50M"
  },
  {
    "ticker": "GBNH",
    "organization": "Greenbrook TMS",
    "industry": "Medical Care Facilities",
    "marketCap": "133.51M"
  },
  {
    "ticker": "GBNY",
    "organization": "Generations Bancorp NY",
    "industry": "Banks-Regional",
    "marketCap": "28.03M"
  },
  {
    "ticker": "GBOX",
    "organization": "GreenBox POS",
    "industry": "Software-Infrastructure",
    "marketCap": "373.62M"
  },
  {
    "ticker": "GBR",
    "organization": "New Concept Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GBRG",
    "organization": "Goldenbridge Acquisition",
    "industry": "Shell Companies",
    "marketCap": "74.98M"
  },
  {
    "ticker": "GBS",
    "organization": "GBS",
    "industry": " Inc.",
    "marketCap": "Medical Devices"
  },
  {
    "ticker": "GBT",
    "organization": "Global Blood Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.58B"
  },
  {
    "ticker": "GBX",
    "organization": "Greenbrier Companies",
    "industry": "Machinery",
    "marketCap": "1.43B"
  },
  {
    "ticker": "GCAC",
    "organization": "Growth Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "213.90M"
  },
  {
    "ticker": "GCBC",
    "organization": "Greene County Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "310.53M"
  },
  {
    "ticker": "GCI",
    "organization": "Gannett",
    "industry": "Publishing",
    "marketCap": "963.38M"
  },
  {
    "ticker": "GCMG",
    "organization": "GCM Grosvenor",
    "industry": "Asset Management",
    "marketCap": "2.12B"
  },
  {
    "ticker": "GCO",
    "organization": "Genesco",
    "industry": "Specialty Retail",
    "marketCap": "891.81M"
  },
  {
    "ticker": "GCP",
    "organization": "GCP Applied Technologies",
    "industry": "Chemicals",
    "marketCap": "1.61B"
  },
  {
    "ticker": "GD",
    "organization": "General Dynamics",
    "industry": "Aerospace & Defense",
    "marketCap": "54.49B"
  },
  {
    "ticker": "GDDY",
    "organization": "GoDaddy",
    "industry": "IT Services",
    "marketCap": "11.94B"
  },
  {
    "ticker": "GDEN",
    "organization": "Golden Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "GDEV",
    "organization": "Nexters",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "1.30B"
  },
  {
    "ticker": "GDOT",
    "organization": "Green Dot",
    "industry": "Consumer Finance",
    "marketCap": "2.84B"
  },
  {
    "ticker": "GDP",
    "organization": "Goodrich Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GDRX",
    "organization": "GoodRx Holdings",
    "industry": "Health Care Technology",
    "marketCap": "16.23B"
  },
  {
    "ticker": "GDS",
    "organization": "GDS Holdings",
    "industry": "IT Services",
    "marketCap": "10.54B"
  },
  {
    "ticker": "GDYN",
    "organization": "Grid Dynamics Holdings",
    "industry": "IT Services",
    "marketCap": "1.86B"
  },
  {
    "ticker": "GE",
    "organization": "General Electric",
    "industry": "Industrial Conglomerates",
    "marketCap": "113.09B"
  },
  {
    "ticker": "GECC",
    "organization": "Great Elm Capital",
    "industry": "Capital Markets",
    "marketCap": "93.63M"
  },
  {
    "ticker": "GEF",
    "organization": "Greif",
    "industry": "Containers & Packaging",
    "marketCap": "3.22B"
  },
  {
    "ticker": "GEF.B",
    "organization": "Greif",
    "industry": "Packaging & Containers",
    "marketCap": "3.15B"
  },
  {
    "ticker": "GEG",
    "organization": "Great Elm Group",
    "industry": "Capital Markets",
    "marketCap": "58.14M"
  },
  {
    "ticker": "GEL",
    "organization": "Genesis Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GENC",
    "organization": "Gencor Industries",
    "industry": "Machinery",
    "marketCap": "162.98M"
  },
  {
    "ticker": "GENE",
    "organization": "Genetic Technologies",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "49.05M"
  },
  {
    "ticker": "GENI",
    "organization": "Genius Sports",
    "industry": "Interactive Media & Services",
    "marketCap": "3.67B"
  },
  {
    "ticker": "GEO",
    "organization": "GEO Group",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "915.48M"
  },
  {
    "ticker": "GEOS",
    "organization": "Geospace Technologies",
    "industry": "Energy Equipment & Services",
    "marketCap": "126.08M"
  },
  {
    "ticker": "GERN",
    "organization": "Geron",
    "industry": "Biotechnology",
    "marketCap": "445.63M"
  },
  {
    "ticker": "GES",
    "organization": "Guess",
    "industry": "Specialty Retail",
    "marketCap": "1.37B"
  },
  {
    "ticker": "GEVO",
    "organization": "Gevo",
    "industry": " Inc.",
    "marketCap": "Oil"
  },
  {
    "ticker": "GFAI",
    "organization": "Guardforce AI Co.",
    "industry": "Security & Protection Services",
    "marketCap": "131.91M"
  },
  {
    "ticker": "GFED",
    "organization": "Guaranty Federal Bancshares",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "105.50M"
  },
  {
    "ticker": "GFF",
    "organization": "Griffon Corporation",
    "industry": "Building Products",
    "marketCap": "1.40B"
  },
  {
    "ticker": "GFI",
    "organization": "Gold Fields",
    "industry": "Metals & Mining",
    "marketCap": "7.29B"
  },
  {
    "ticker": "GFL",
    "organization": "GFL Environmental",
    "industry": "Waste Management",
    "marketCap": "12.34B"
  },
  {
    "ticker": "GFOR",
    "organization": "Graf Acquisition IV",
    "industry": "Shell Companies",
    "marketCap": "181.69M"
  },
  {
    "ticker": "GFX",
    "organization": "Golden Falcon Acquisition",
    "industry": "Shell Companies",
    "marketCap": "422.19M"
  },
  {
    "ticker": "GGAL",
    "organization": "Grupo Financiero Galicia",
    "industry": "Banks",
    "marketCap": "2.95B"
  },
  {
    "ticker": "GGB",
    "organization": "Gerdau",
    "industry": "Metals & Mining",
    "marketCap": "8.73B"
  },
  {
    "ticker": "GGG",
    "organization": "Graco",
    "industry": "Machinery",
    "marketCap": "11.93B"
  },
  {
    "ticker": "GGGV",
    "organization": "G3 VRM Acquisition",
    "industry": "Shell Companies",
    "marketCap": "142.02M"
  },
  {
    "ticker": "GGMC",
    "organization": "Glenfarne Merger",
    "industry": "Shell Companies",
    "marketCap": "340.15M"
  },
  {
    "ticker": "GGPI",
    "organization": "Gores Guggenheim",
    "industry": "Shell Companies",
    "marketCap": "1.02B"
  },
  {
    "ticker": "GH",
    "organization": "Guardant Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "10.89B"
  },
  {
    "ticker": "GHAC",
    "organization": "Gaming & Hospitality Acquisition",
    "industry": "Shell Companies",
    "marketCap": "250.82M"
  },
  {
    "ticker": "GHC",
    "organization": "Graham Holdings",
    "industry": "Diversified Consumer Services",
    "marketCap": "2.95B"
  },
  {
    "ticker": "GHG",
    "organization": "GreenTree Hospitality Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "GHL",
    "organization": "Greenhill & Co.",
    "industry": "Capital Markets",
    "marketCap": "288.19M"
  },
  {
    "ticker": "GHLD",
    "organization": "Guild Holdings Company",
    "industry": "Mortgage Finance",
    "marketCap": "839.32M"
  },
  {
    "ticker": "GHM",
    "organization": "Graham Corporation",
    "industry": "Machinery",
    "marketCap": "131.60M"
  },
  {
    "ticker": "GHRS",
    "organization": "GH Research PLC",
    "industry": "Biotechnology",
    "marketCap": "1.16B"
  },
  {
    "ticker": "GHSI",
    "organization": "Guardion Health Sciences",
    "industry": "Personal Products",
    "marketCap": "30.29M"
  },
  {
    "ticker": "GIB",
    "organization": "CGI",
    "industry": " Inc",
    "marketCap": "IT Services"
  },
  {
    "ticker": "GIC",
    "organization": "Global Industrial",
    "industry": "Trading Companies & Distributors",
    "marketCap": "1.46B"
  },
  {
    "ticker": "GIFI",
    "organization": "Gulf Island Fabrication",
    "industry": "Energy Equipment & Services",
    "marketCap": "62.29M"
  },
  {
    "ticker": "GIG",
    "organization": "GigCapital4",
    "industry": "Shell Companies",
    "marketCap": "129.75M"
  },
  {
    "ticker": "GIGM",
    "organization": "GigaMedia",
    "industry": "Entertainment",
    "marketCap": "27.63M"
  },
  {
    "ticker": "GIII",
    "organization": "G-III Apparel Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "GIIX",
    "organization": "Gores Holdings VIII",
    "industry": "Shell Companies",
    "marketCap": "421.68M"
  },
  {
    "ticker": "GIL",
    "organization": "Gildan Activewear",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "GILD",
    "organization": "Gilead Sciences",
    "industry": "Biotechnology",
    "marketCap": "87.58B"
  },
  {
    "ticker": "GILT",
    "organization": "Gilat Satellite Networks",
    "industry": "Communications Equipment",
    "marketCap": "502.95M"
  },
  {
    "ticker": "GIS",
    "organization": "General Mills",
    "industry": "Food Products",
    "marketCap": "36.23B"
  },
  {
    "ticker": "GIW",
    "organization": "GigInternational1",
    "industry": "Banks",
    "marketCap": "257.68M"
  },
  {
    "ticker": "GKOS",
    "organization": "Glaukos Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "2.22B"
  },
  {
    "ticker": "GL",
    "organization": "Globe Life",
    "industry": "Insurance",
    "marketCap": "9.18B"
  },
  {
    "ticker": "GLAD",
    "organization": "Gladstone Capital",
    "industry": "Capital Markets",
    "marketCap": "394.84M"
  },
  {
    "ticker": "GLAQ",
    "organization": "Globis Acquisition",
    "industry": "Shell Companies",
    "marketCap": "151.39M"
  },
  {
    "ticker": "GLBE",
    "organization": "Global-E Online",
    "industry": "Internet Retail",
    "marketCap": "10.35B"
  },
  {
    "ticker": "GLBL",
    "organization": "Cartesian Growth",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "880.23M"
  },
  {
    "ticker": "GLBS",
    "organization": "Globus Maritime",
    "industry": "Marine",
    "marketCap": "60.28M"
  },
  {
    "ticker": "GLBZ",
    "organization": "Glen Burnie Bancorp",
    "industry": "Banks",
    "marketCap": "35.35M"
  },
  {
    "ticker": "GLDD",
    "organization": "Great Lakes Dredge & Dock",
    "industry": "Construction & Engineering",
    "marketCap": "986.84M"
  },
  {
    "ticker": "GLDG",
    "organization": "GoldMining",
    "industry": "Gold",
    "marketCap": "175.89M"
  },
  {
    "ticker": "GLEE",
    "organization": "Gladstone Acquisition",
    "industry": "Blank Checks / SPAC",
    "marketCap": "125.60M"
  },
  {
    "ticker": "GLG",
    "organization": "TD Holdings",
    "industry": "Road & Rail",
    "marketCap": "67.74M"
  },
  {
    "ticker": "GLHA",
    "organization": "Glass Houses Acquisition",
    "industry": "Shell Companies",
    "marketCap": "267.32M"
  },
  {
    "ticker": "GLMD",
    "organization": "Galmed Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "68.48M"
  },
  {
    "ticker": "GLNG",
    "organization": "Golar LNG",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GLOB",
    "organization": "Globant",
    "industry": "Software",
    "marketCap": "11.54B"
  },
  {
    "ticker": "GLOP",
    "organization": "GasLog Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GLP",
    "organization": "Global Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GLPG",
    "organization": "Galapagos",
    "industry": "Biotechnology",
    "marketCap": "3.47B"
  },
  {
    "ticker": "GLPI",
    "organization": "Gaming & Leisure Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "11.09B"
  },
  {
    "ticker": "GLRE",
    "organization": "Greenlight Capital Re",
    "industry": "Insurance",
    "marketCap": "249.91M"
  },
  {
    "ticker": "GLSI",
    "organization": "Greenwich LifeSciences",
    "industry": "Biotechnology",
    "marketCap": "506.71M"
  },
  {
    "ticker": "GLSPT",
    "organization": "Global SPAC Partners",
    "industry": "Shell Companies",
    "marketCap": "258.43M"
  },
  {
    "ticker": "GLT",
    "organization": "Glatfelter",
    "industry": "Paper & Forest Products",
    "marketCap": "629.58M"
  },
  {
    "ticker": "GLTA",
    "organization": "Galata Acquisition",
    "industry": "Shell Companies",
    "marketCap": "154.06M"
  },
  {
    "ticker": "GLTO",
    "organization": "Galecto",
    "industry": "Biotechnology",
    "marketCap": "90.16M"
  },
  {
    "ticker": "GLUE",
    "organization": "Monte Rosa Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "943.18M"
  },
  {
    "ticker": "GLW",
    "organization": "Corning",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "GLYC",
    "organization": "GlycoMimetics",
    "industry": "Biotechnology",
    "marketCap": "113.39M"
  },
  {
    "ticker": "GM",
    "organization": "General Motors",
    "industry": "Automobiles",
    "marketCap": "77.13B"
  },
  {
    "ticker": "GMAB",
    "organization": "Genmab A/S",
    "industry": "Biotechnology",
    "marketCap": "28.30B"
  },
  {
    "ticker": "GMBL",
    "organization": "Esports Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "GMBT",
    "organization": "Queen's Gambit Growth Capital",
    "industry": "Shell Companies",
    "marketCap": "426.94M"
  },
  {
    "ticker": "GMDA",
    "organization": "Gamida Cell",
    "industry": "Biotechnology",
    "marketCap": "234.75M"
  },
  {
    "ticker": "GME",
    "organization": "GameStop",
    "industry": "Specialty Retail",
    "marketCap": "13.35B"
  },
  {
    "ticker": "GMED",
    "organization": "Globus Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "7.97B"
  },
  {
    "ticker": "GMII",
    "organization": "Gores Metropoulos II",
    "industry": "Shell Companies",
    "marketCap": "557.44M"
  },
  {
    "ticker": "GMRE",
    "organization": "Global Medical REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "943.69M"
  },
  {
    "ticker": "GMS",
    "organization": "GMS Inc.",
    "industry": "Trading Companies & Distributors",
    "marketCap": "1.89B"
  },
  {
    "ticker": "GMTX",
    "organization": "Gemini Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "170.50M"
  },
  {
    "ticker": "GMVD",
    "organization": "G Medical Innovations",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "31.59M"
  },
  {
    "ticker": "GNAC",
    "organization": "Group Nine Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.02M"
  },
  {
    "ticker": "GNCA",
    "organization": "Genocea Biosciences",
    "industry": "Biotechnology",
    "marketCap": "113.29M"
  },
  {
    "ticker": "GNE",
    "organization": "Genie Energy",
    "industry": "Electric Utilities",
    "marketCap": "167.02M"
  },
  {
    "ticker": "GNFT",
    "organization": "Genfit",
    "industry": "Biotechnology",
    "marketCap": "186.18M"
  },
  {
    "ticker": "GNK",
    "organization": "Genco Shipping & Trading",
    "industry": "Marine",
    "marketCap": "843.26M"
  },
  {
    "ticker": "GNL",
    "organization": "Global Net Lease",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.62B"
  },
  {
    "ticker": "GNLN",
    "organization": "Greenlane Holdings",
    "industry": "Distributors",
    "marketCap": "189.37M"
  },
  {
    "ticker": "GNOG",
    "organization": "Golden Nugget Online Gaming",
    "industry": "Gambling",
    "marketCap": "841.99M"
  },
  {
    "ticker": "GNPX",
    "organization": "Genprex",
    "industry": "Biotechnology",
    "marketCap": "128.33M"
  },
  {
    "ticker": "GNRC",
    "organization": "Generac Holdings",
    "industry": "Electrical Equipment",
    "marketCap": "25.56B"
  },
  {
    "ticker": "GNSS",
    "organization": "Genasys",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "GNTX",
    "organization": "Gentex Corporation",
    "industry": "Auto Components",
    "marketCap": "7.84B"
  },
  {
    "ticker": "GNTY",
    "organization": "Guaranty Bancshares",
    "industry": "Banks",
    "marketCap": "424.56M"
  },
  {
    "ticker": "GNUS",
    "organization": "Genius Brands International",
    "industry": "Leisure Products",
    "marketCap": "407.81M"
  },
  {
    "ticker": "GNW",
    "organization": "Genworth Financial",
    "industry": "Insurance",
    "marketCap": "1.97B"
  },
  {
    "ticker": "GO",
    "organization": "Grocery Outlet",
    "industry": "Food & Staples Retailing",
    "marketCap": "2.05B"
  },
  {
    "ticker": "GOAC",
    "organization": "GO Acquisition",
    "industry": "Shell Companies",
    "marketCap": "705.09M"
  },
  {
    "ticker": "GOBI",
    "organization": "Gobi Acquisition",
    "industry": "Shell Companies",
    "marketCap": "308.32M"
  },
  {
    "ticker": "GOCO",
    "organization": "GoHealth",
    "industry": "Insurance Brokers",
    "marketCap": "1.61B"
  },
  {
    "ticker": "GOED",
    "organization": "1847 Goedeker",
    "industry": "Internet Retail",
    "marketCap": "334.06M"
  },
  {
    "ticker": "GOEV",
    "organization": "Canoo",
    "industry": "Auto Manufacturers",
    "marketCap": "1.73B"
  },
  {
    "ticker": "GOGL",
    "organization": "Golden Ocean Group",
    "industry": "Marine",
    "marketCap": "2.23B"
  },
  {
    "ticker": "GOGO",
    "organization": "Gogo Inc.",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "2.01B"
  },
  {
    "ticker": "GOL",
    "organization": "GOL Linhas Aereas Inteligentes",
    "industry": "Airlines",
    "marketCap": "1.62B"
  },
  {
    "ticker": "GOLD",
    "organization": "Barrick Gold",
    "industry": "Metals & Mining",
    "marketCap": "32.00B"
  },
  {
    "ticker": "GOLF",
    "organization": "Acushnet Holdings",
    "industry": "Leisure Products",
    "marketCap": "3.45B"
  },
  {
    "ticker": "GOOD",
    "organization": "Gladstone Commercial",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "794.32M"
  },
  {
    "ticker": "GOOG",
    "organization": "Alphabet",
    "industry": "Interactive Media & Services",
    "marketCap": "1"
  },
  {
    "ticker": "GOOGL",
    "organization": "Alphabet",
    "industry": "Interactive Media & Services",
    "marketCap": "1"
  },
  {
    "ticker": "GOOS",
    "organization": "Canada Goose",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "GORO",
    "organization": "Gold Resource",
    "industry": "Metals & Mining",
    "marketCap": "117.02M"
  },
  {
    "ticker": "GOSS",
    "organization": "Gossamer Bio",
    "industry": "Biotechnology",
    "marketCap": "991.72M"
  },
  {
    "ticker": "GOTU",
    "organization": "Gaotu Techedu",
    "industry": "Education & Training Services",
    "marketCap": "776.90M"
  },
  {
    "ticker": "GOVX",
    "organization": "GeoVax Labs",
    "industry": "Biotechnology",
    "marketCap": "26.64M"
  },
  {
    "ticker": "GP",
    "organization": "GreenPower Motor",
    "industry": "Auto Manufacturers",
    "marketCap": "325.68M"
  },
  {
    "ticker": "GPAC",
    "organization": "Global Partner Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "47.29M"
  },
  {
    "ticker": "GPC",
    "organization": "Genuine Parts",
    "industry": "Distributors",
    "marketCap": "17.45B"
  },
  {
    "ticker": "GPCO",
    "organization": "Golden Path Acquisition",
    "industry": "Shell Companies",
    "marketCap": "69.67M"
  },
  {
    "ticker": "GPI",
    "organization": "Group 1 Automotive",
    "industry": "Specialty Retail",
    "marketCap": "3.40B"
  },
  {
    "ticker": "GPK",
    "organization": "Graphic Packaging Holding",
    "industry": "Containers & Packaging",
    "marketCap": "5.91B"
  },
  {
    "ticker": "GPL",
    "organization": "Great Panther Mining",
    "industry": "Metals & Mining",
    "marketCap": "165.54M"
  },
  {
    "ticker": "GPMT",
    "organization": "Granite Point Mortgage Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "725.96M"
  },
  {
    "ticker": "GPN",
    "organization": "Global Payments",
    "industry": "IT Services",
    "marketCap": "46.29B"
  },
  {
    "ticker": "GPOR",
    "organization": "Gulfport Energy",
    "industry": "Oil & Gas E&P",
    "marketCap": "1.70B"
  },
  {
    "ticker": "GPP",
    "organization": "Green Plains Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GPRE",
    "organization": "Green Plains",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GPRK",
    "organization": "GeoPark",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GPRO",
    "organization": "GoPro",
    "industry": "Household Durables",
    "marketCap": "1.45B"
  },
  {
    "ticker": "GPS",
    "organization": "Gap",
    "industry": " Inc",
    "marketCap": "Specialty Retail"
  },
  {
    "ticker": "GPX",
    "organization": "GP Strategies",
    "industry": "Professional Services",
    "marketCap": "363.48M"
  },
  {
    "ticker": "GRAY",
    "organization": "Graybug Vision",
    "industry": "Biotechnology",
    "marketCap": "70.67M"
  },
  {
    "ticker": "GRBK",
    "organization": "Green Brick Partners",
    "industry": "Household Durables",
    "marketCap": "1.06B"
  },
  {
    "ticker": "GRC",
    "organization": "Gorman-Rupp Company",
    "industry": "Machinery",
    "marketCap": "955.71M"
  },
  {
    "ticker": "GRCL",
    "organization": "Gracell Biotechnologies",
    "industry": "Biotechnology",
    "marketCap": "960.24M"
  },
  {
    "ticker": "GRCY",
    "organization": "Greencity Acquisition",
    "industry": "Shell Companies",
    "marketCap": "53.39M"
  },
  {
    "ticker": "GREE",
    "organization": "Greenidge Generation Holdings",
    "industry": "Capital Markets",
    "marketCap": "980.52M"
  },
  {
    "ticker": "GRFS",
    "organization": "Grifols S.A.",
    "industry": "Biotechnology",
    "marketCap": "14.59B"
  },
  {
    "ticker": "GRIL",
    "organization": "Muscle Maker",
    "industry": "Restaurants",
    "marketCap": "19.85M"
  },
  {
    "ticker": "GRIN",
    "organization": "Grindrod Shipping Holdings",
    "industry": "Marine",
    "marketCap": "299.29M"
  },
  {
    "ticker": "GRMN",
    "organization": "Garmin",
    "industry": "Household Durables",
    "marketCap": "29.81B"
  },
  {
    "ticker": "GRNQ",
    "organization": "Greenpro Capital",
    "industry": "Capital Markets",
    "marketCap": "42.13M"
  },
  {
    "ticker": "GROM",
    "organization": "Grom Social Enterprises",
    "industry": "Internet Content & Information",
    "marketCap": "37.18M"
  },
  {
    "ticker": "GROW",
    "organization": "U.S. Global Investors",
    "industry": "Capital Markets",
    "marketCap": "92.86M"
  },
  {
    "ticker": "GROY",
    "organization": "Gold Royalty",
    "industry": "Metals & Mining",
    "marketCap": "364.18M"
  },
  {
    "ticker": "GRPH",
    "organization": "Graphite Bio",
    "industry": "Biotechnology",
    "marketCap": "933.62M"
  },
  {
    "ticker": "GRPN",
    "organization": "Groupon",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "688.81M"
  },
  {
    "ticker": "GRTS",
    "organization": "Gritstone Oncology",
    "industry": "Biotechnology",
    "marketCap": "590.21M"
  },
  {
    "ticker": "GRTX",
    "organization": "Galera Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "213.83M"
  },
  {
    "ticker": "GRUB",
    "organization": "Grubhub",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "15.75B"
  },
  {
    "ticker": "GRVI",
    "organization": "Grove",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "77.77M"
  },
  {
    "ticker": "GRVY",
    "organization": "Gravity",
    "industry": "Entertainment",
    "marketCap": "637.14M"
  },
  {
    "ticker": "GRWG",
    "organization": "GrowGeneration",
    "industry": "Specialty Retail",
    "marketCap": "1.48B"
  },
  {
    "ticker": "GS",
    "organization": "Goldman Sachs",
    "industry": "Capital Markets",
    "marketCap": "128.11B"
  },
  {
    "ticker": "GSAH",
    "organization": "GS Acquisition Holdings II",
    "industry": "Shell Companies",
    "marketCap": "953.91M"
  },
  {
    "ticker": "GSAQ",
    "organization": "Global Synergy Acquisition",
    "industry": "Shell Companies",
    "marketCap": "316.32M"
  },
  {
    "ticker": "GSAT",
    "organization": "Globalstar",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "2.90B"
  },
  {
    "ticker": "GSBC",
    "organization": "Great Southern Bancorp",
    "industry": "Banks",
    "marketCap": "758.72M"
  },
  {
    "ticker": "GSBD",
    "organization": "Goldman Sachs BDC",
    "industry": "Capital Markets",
    "marketCap": "1.87B"
  },
  {
    "ticker": "GSEV",
    "organization": "Gores Holdings VII",
    "industry": "Shell Companies",
    "marketCap": "677.87M"
  },
  {
    "ticker": "GSHD",
    "organization": "Goosehead Insurance",
    "industry": "Insurance",
    "marketCap": "5.65B"
  },
  {
    "ticker": "GSIT",
    "organization": "GSI Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "130.98M"
  },
  {
    "ticker": "GSK",
    "organization": "GlaxoSmithKline",
    "industry": "Pharmaceuticals",
    "marketCap": "95.93B"
  },
  {
    "ticker": "GSKY",
    "organization": "GreenSky",
    "industry": "IT Services",
    "marketCap": "2.06B"
  },
  {
    "ticker": "GSL",
    "organization": "Global Ship Lease",
    "industry": "Marine",
    "marketCap": "883.69M"
  },
  {
    "ticker": "GSM",
    "organization": "Ferroglobe",
    "industry": "Metals & Mining",
    "marketCap": "1.73B"
  },
  {
    "ticker": "GSMG",
    "organization": "Glory Star New Media Group Holdings",
    "industry": "Broadcasting",
    "marketCap": "110.78M"
  },
  {
    "ticker": "GSQB",
    "organization": "G Squared Ascend II",
    "industry": "Shell Companies",
    "marketCap": "152.81M"
  },
  {
    "ticker": "GSQD",
    "organization": "G Squared Ascend I",
    "industry": "Shell Companies",
    "marketCap": "425.05M"
  },
  {
    "ticker": "GSS",
    "organization": "Golden Star Resources",
    "industry": "Metals & Mining",
    "marketCap": "275.43M"
  },
  {
    "ticker": "GSV",
    "organization": "Gold Standard Ventures",
    "industry": "Metals & Mining",
    "marketCap": "159.91M"
  },
  {
    "ticker": "GT",
    "organization": "Goodyear Tire & Rubber",
    "industry": "Auto Components",
    "marketCap": "5.23B"
  },
  {
    "ticker": "GTBP",
    "organization": "GT Biopharma",
    "industry": "Biotechnology",
    "marketCap": "200.88M"
  },
  {
    "ticker": "GTE",
    "organization": "Gran Tierra Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "GTEC",
    "organization": "Greenland Technologies Holding",
    "industry": "Machinery",
    "marketCap": "71.64M"
  },
  {
    "ticker": "GTES",
    "organization": "Gates Industrial",
    "industry": "Machinery",
    "marketCap": "4.87B"
  },
  {
    "ticker": "GTH",
    "organization": "Genetron Holdings",
    "industry": "Diagnostics & Research",
    "marketCap": "1.22B"
  },
  {
    "ticker": "GTHX",
    "organization": "G1 Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "569.58M"
  },
  {
    "ticker": "GTIM",
    "organization": "Good Times Restaurants",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "GTLS",
    "organization": "Chart Industries",
    "industry": "Machinery",
    "marketCap": "7.19B"
  },
  {
    "ticker": "GTN",
    "organization": "Gray Television",
    "industry": "Media",
    "marketCap": "2.24B"
  },
  {
    "ticker": "GTN.A",
    "organization": "Gray Television",
    "industry": "Broadcasting",
    "marketCap": "2.10B"
  },
  {
    "ticker": "GTPA",
    "organization": "Gores Technology Partners",
    "industry": "Shell Companies",
    "marketCap": "336.19M"
  },
  {
    "ticker": "GTPB",
    "organization": "Gores Technology Partners II",
    "industry": "Shell Companies",
    "marketCap": "562.35M"
  },
  {
    "ticker": "GTS",
    "organization": "Triple-S Management",
    "industry": "Health Care Providers & Services",
    "marketCap": "836.43M"
  },
  {
    "ticker": "GTX",
    "organization": "Garrett Motion",
    "industry": "Auto Components",
    "marketCap": "473.65M"
  },
  {
    "ticker": "GTY",
    "organization": "Getty Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.34B"
  },
  {
    "ticker": "GTYH",
    "organization": "GTY Technology",
    "industry": "Software",
    "marketCap": "425.60M"
  },
  {
    "ticker": "GURE",
    "organization": "Gulf Resources",
    "industry": "Chemicals",
    "marketCap": "47.11M"
  },
  {
    "ticker": "GVA",
    "organization": "Granite Construction",
    "industry": "Construction & Engineering",
    "marketCap": "1.85B"
  },
  {
    "ticker": "GVP",
    "organization": "GSE Systems",
    "industry": "Software",
    "marketCap": "30.90M"
  },
  {
    "ticker": "GWB",
    "organization": "Great Western Bancorp",
    "industry": "Banks",
    "marketCap": "1.83B"
  },
  {
    "ticker": "GWGH",
    "organization": "GWG Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "316.39M"
  },
  {
    "ticker": "GWII",
    "organization": "Good Works II Acquisition",
    "industry": "Shell Companies",
    "marketCap": "251.11M"
  },
  {
    "ticker": "GWRE",
    "organization": "Guidewire Software",
    "industry": "Software",
    "marketCap": "9.88B"
  },
  {
    "ticker": "GWRS",
    "organization": "Global Water Resources",
    "industry": "Water Utilities",
    "marketCap": "425.04M"
  },
  {
    "ticker": "GWW",
    "organization": "W.W. Grainger",
    "industry": "Trading Companies & Distributors",
    "marketCap": "20.74B"
  },
  {
    "ticker": "GXII",
    "organization": "GX Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "362.25M"
  },
  {
    "ticker": "GXO",
    "organization": "GXO Logistics",
    "industry": "Specialty Business Services",
    "marketCap": "9.27B"
  },
  {
    "ticker": "GYRO",
    "organization": "Gyrodyne",
    "industry": "Real Estate Management & Development",
    "marketCap": "20.02M"
  },
  {
    "ticker": "H",
    "organization": "Hyatt Hotels",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "HA",
    "organization": "Hawaiian Holdings",
    "industry": "Airlines",
    "marketCap": "1.15B"
  },
  {
    "ticker": "HAAC",
    "organization": "Health Assurance Acquisition",
    "industry": "Shell Companies",
    "marketCap": "539.40M"
  },
  {
    "ticker": "HAE",
    "organization": "Haemonetics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.69B"
  },
  {
    "ticker": "HAFC",
    "organization": "Hanmi Financial",
    "industry": "Banks",
    "marketCap": "626.82M"
  },
  {
    "ticker": "HAIN",
    "organization": "Hain Celestial Group",
    "industry": "Food Products",
    "marketCap": "4.16B"
  },
  {
    "ticker": "HAL",
    "organization": "Halliburton",
    "industry": "Energy Equipment & Services",
    "marketCap": "19.81B"
  },
  {
    "ticker": "HALL",
    "organization": "Hallmark Financial Services",
    "industry": "Insurance",
    "marketCap": "66.32M"
  },
  {
    "ticker": "HALO",
    "organization": "Halozyme Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "5.78B"
  },
  {
    "ticker": "HAPP",
    "organization": "Happiness Biotech Group",
    "industry": "Personal Products",
    "marketCap": "30.36M"
  },
  {
    "ticker": "HARP",
    "organization": "Harpoon Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "254.50M"
  },
  {
    "ticker": "HAS",
    "organization": "Hasbro",
    "industry": "Leisure Products",
    "marketCap": "12.27B"
  },
  {
    "ticker": "HASI",
    "organization": "Hannon Armstrong",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.30B"
  },
  {
    "ticker": "HAYN",
    "organization": "Haynes International",
    "industry": "Metals & Mining",
    "marketCap": "473.67M"
  },
  {
    "ticker": "HAYW",
    "organization": "Hayward Holdings",
    "industry": "Leisure Products",
    "marketCap": "5.07B"
  },
  {
    "ticker": "HBAN",
    "organization": "Huntington Bancshares",
    "industry": "Banks",
    "marketCap": "23.40B"
  },
  {
    "ticker": "HBB",
    "organization": "Hamilton Beach Brands",
    "industry": "Household Durables",
    "marketCap": "212.33M"
  },
  {
    "ticker": "HBCP",
    "organization": "Home Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "338.14M"
  },
  {
    "ticker": "HBI",
    "organization": "Hanesbrands",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "HBIO",
    "organization": "Harvard Bioscience",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "284.53M"
  },
  {
    "ticker": "HBM",
    "organization": "HudBay Minerals",
    "industry": "Metals & Mining",
    "marketCap": "1.71B"
  },
  {
    "ticker": "HBMD",
    "organization": "Howard Bancorp",
    "industry": "Banks",
    "marketCap": "384.11M"
  },
  {
    "ticker": "HBNC",
    "organization": "Horizon Bancorp",
    "industry": "Banks",
    "marketCap": "798.58M"
  },
  {
    "ticker": "HBP",
    "organization": "Huttig Building Products",
    "industry": "Trading Companies & Distributors",
    "marketCap": "146.04M"
  },
  {
    "ticker": "HBT",
    "organization": "HBT Financial",
    "industry": "Banks",
    "marketCap": "444.78M"
  },
  {
    "ticker": "HCA",
    "organization": "HCA Healthcare",
    "industry": "Health Care Providers & Services",
    "marketCap": "79.03B"
  },
  {
    "ticker": "HCAQ",
    "organization": "HealthCor Catalio Acquisition",
    "industry": "Shell Companies",
    "marketCap": "268.46M"
  },
  {
    "ticker": "HCAR",
    "organization": "Healthcare Services Acquisition",
    "industry": "Shell Companies",
    "marketCap": "403.65M"
  },
  {
    "ticker": "HCAT",
    "organization": "Health Catalyst",
    "industry": "Health Care Technology",
    "marketCap": "2.52B"
  },
  {
    "ticker": "HCC",
    "organization": "Warrior Met Coal",
    "industry": "Metals & Mining",
    "marketCap": "1.31B"
  },
  {
    "ticker": "HCCC",
    "organization": "Healthcare Capital",
    "industry": "Shell Companies",
    "marketCap": "339.97M"
  },
  {
    "ticker": "HCCI",
    "organization": "Heritage-Crystal Clean",
    "industry": "Commercial Services & Supplies",
    "marketCap": "718.37M"
  },
  {
    "ticker": "HCDI",
    "organization": "Harbor Custom Development",
    "industry": "Real Estate-Development",
    "marketCap": "35.01M"
  },
  {
    "ticker": "HCI",
    "organization": "HCI Group",
    "industry": "Insurance",
    "marketCap": "959.06M"
  },
  {
    "ticker": "HCIC",
    "organization": "Hennessy Capital Investment V",
    "industry": "Shell Companies",
    "marketCap": "426.51M"
  },
  {
    "ticker": "HCII",
    "organization": "Hudson Executive Investment II",
    "industry": "Shell Companies",
    "marketCap": "304.84M"
  },
  {
    "ticker": "HCKT",
    "organization": "Hackett Group",
    "industry": "IT Services",
    "marketCap": "590.55M"
  },
  {
    "ticker": "HCM",
    "organization": "HUTCHMED",
    "industry": "Pharmaceuticals",
    "marketCap": "6.22B"
  },
  {
    "ticker": "HCNE",
    "organization": "JAWS Hurricane Acquisition",
    "industry": "Shell Companies",
    "marketCap": "360.45M"
  },
  {
    "ticker": "HCSG",
    "organization": "Healthcare Services Group",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.90B"
  },
  {
    "ticker": "HCWB",
    "organization": "HCW Biologics",
    "industry": "Biotechnology",
    "marketCap": "109.45M"
  },
  {
    "ticker": "HD",
    "organization": "Home Depot",
    "industry": "Specialty Retail",
    "marketCap": "343.60B"
  },
  {
    "ticker": "HDB",
    "organization": "HDFC Bank",
    "industry": "Banks",
    "marketCap": "136.06B"
  },
  {
    "ticker": "HDSN",
    "organization": "Hudson Technologies",
    "industry": "Commercial Services & Supplies",
    "marketCap": "155.73M"
  },
  {
    "ticker": "HE",
    "organization": "Hawaiian Electric Industries",
    "industry": "Electric Utilities",
    "marketCap": "4.43B"
  },
  {
    "ticker": "HEAR",
    "organization": "Turtle Beach",
    "industry": "Household Durables",
    "marketCap": "460.91M"
  },
  {
    "ticker": "HEES",
    "organization": "H&E Equipment Services",
    "industry": "Trading Companies & Distributors",
    "marketCap": "1.29B"
  },
  {
    "ticker": "HEI",
    "organization": "HEICO Corporation",
    "industry": "Aerospace & Defense",
    "marketCap": "17.22B"
  },
  {
    "ticker": "HEI.A",
    "organization": "HEICO Corporation",
    "industry": "Aerospace & Defense",
    "marketCap": "17.23B"
  },
  {
    "ticker": "HELE",
    "organization": "Helen of Troy",
    "industry": "Household Durables",
    "marketCap": "5.31B"
  },
  {
    "ticker": "HEP",
    "organization": "Holly Energy Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HEPA",
    "organization": "Hepion Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "118.91M"
  },
  {
    "ticker": "HEPS",
    "organization": "D-MARKET Electronic Services & Trading",
    "industry": "Internet Retail",
    "marketCap": "1.84B"
  },
  {
    "ticker": "HERA",
    "organization": "FTAC Hera Acquisition",
    "industry": "Shell Companies",
    "marketCap": "1.06B"
  },
  {
    "ticker": "HES",
    "organization": "Hess Corporation",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HESM",
    "organization": "Hess Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HEXO",
    "organization": "HEXO Corp.",
    "industry": "Pharmaceuticals",
    "marketCap": "503.38M"
  },
  {
    "ticker": "HFBL",
    "organization": "Home Federal Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "63.63M"
  },
  {
    "ticker": "HFC",
    "organization": "HollyFrontier",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HFFG",
    "organization": "HF Foods Group",
    "industry": "Food & Staples Retailing",
    "marketCap": "320.82M"
  },
  {
    "ticker": "HFWA",
    "organization": "Heritage Financial",
    "industry": "Banks",
    "marketCap": "926.25M"
  },
  {
    "ticker": "HGBL",
    "organization": "Heritage Global",
    "industry": "Capital Markets",
    "marketCap": "70.91M"
  },
  {
    "ticker": "HGEN",
    "organization": "Humanigen",
    "industry": "Biotechnology",
    "marketCap": "348.42M"
  },
  {
    "ticker": "HGSH",
    "organization": "China HGS Real Estate",
    "industry": "Real Estate Management & Development",
    "marketCap": "39.20M"
  },
  {
    "ticker": "HGV",
    "organization": "Hilton Grand Vacations",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "HHC",
    "organization": "Howard Hughes Corp",
    "industry": "Real Estate Management & Development",
    "marketCap": "4.88B"
  },
  {
    "ticker": "HHLA",
    "organization": "HH&L Acquisition",
    "industry": "Shell Companies",
    "marketCap": "503.01M"
  },
  {
    "ticker": "HHR",
    "organization": "Headhunter Group",
    "industry": "Professional Services",
    "marketCap": "2.52B"
  },
  {
    "ticker": "HI",
    "organization": "Hillenbrand",
    "industry": "Machinery",
    "marketCap": "3.18B"
  },
  {
    "ticker": "HIBB",
    "organization": "Hibbett Sports",
    "industry": "Specialty Retail",
    "marketCap": "1.08B"
  },
  {
    "ticker": "HIFS",
    "organization": "Hingham Institution for Savings",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "726.27M"
  },
  {
    "ticker": "HIG",
    "organization": "Hartford Financial Services",
    "industry": "Insurance",
    "marketCap": "24.51B"
  },
  {
    "ticker": "HIGA",
    "organization": "H.I.G. Acquisition",
    "industry": "Shell Companies",
    "marketCap": "444.47M"
  },
  {
    "ticker": "HIHO",
    "organization": "Highway Holdings",
    "industry": "Machinery",
    "marketCap": "15.06M"
  },
  {
    "ticker": "HII",
    "organization": "Huntington Ingalls Industries",
    "industry": "Aerospace & Defense",
    "marketCap": "7.76B"
  },
  {
    "ticker": "HIII",
    "organization": "Hudson Executive Investment III",
    "industry": "Shell Companies",
    "marketCap": "732.00M"
  },
  {
    "ticker": "HIL",
    "organization": "Hill International",
    "industry": "Professional Services",
    "marketCap": "115.57M"
  },
  {
    "ticker": "HIMS",
    "organization": "Hims & Hers Health",
    "industry": "Household & Personal Products",
    "marketCap": "1.48B"
  },
  {
    "ticker": "HIMX",
    "organization": "Himax Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.84B"
  },
  {
    "ticker": "HIPO",
    "organization": "Hippo Holdings",
    "industry": "Insurance-Specialty",
    "marketCap": "2.48B"
  },
  {
    "ticker": "HITI",
    "organization": "High Tide",
    "industry": "Pharmaceutical Retailers",
    "marketCap": "322.44M"
  },
  {
    "ticker": "HIVE",
    "organization": "HIVE Blockchain Technologies",
    "industry": "Capital Markets",
    "marketCap": "1.18B"
  },
  {
    "ticker": "HIW",
    "organization": "Highwoods Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.72B"
  },
  {
    "ticker": "HKIB",
    "organization": "AMTD International",
    "industry": "Capital Markets",
    "marketCap": "1.11B"
  },
  {
    "ticker": "HL",
    "organization": "Hecla Mining",
    "industry": "Metals & Mining",
    "marketCap": "2.95B"
  },
  {
    "ticker": "HLAH",
    "organization": "Hamilton Lane Alliance Holdings I",
    "industry": "Shell Companies",
    "marketCap": "314.96M"
  },
  {
    "ticker": "HLBZ",
    "organization": "Helbiz",
    "industry": "Recreational Vehicles",
    "marketCap": "550.39M"
  },
  {
    "ticker": "HLF",
    "organization": "Herbalife Nutrition",
    "industry": "Personal Products",
    "marketCap": "5.00B"
  },
  {
    "ticker": "HLG",
    "organization": "Hailiang Education Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "829.02M"
  },
  {
    "ticker": "HLI",
    "organization": "Houlihan Lokey",
    "industry": "Capital Markets",
    "marketCap": "6.32B"
  },
  {
    "ticker": "HLIO",
    "organization": "Helios Technologies",
    "industry": "Machinery",
    "marketCap": "2.67B"
  },
  {
    "ticker": "HLIT",
    "organization": "Harmonic",
    "industry": "Communications Equipment",
    "marketCap": "896.91M"
  },
  {
    "ticker": "HLLY",
    "organization": "Holley",
    "industry": "Auto Parts",
    "marketCap": "1.39B"
  },
  {
    "ticker": "HLMN",
    "organization": "Hillman Solutions",
    "industry": "Tools & Accessories",
    "marketCap": "2.22B"
  },
  {
    "ticker": "HLNE",
    "organization": "Hamilton Lane",
    "industry": "Capital Markets",
    "marketCap": "4.52B"
  },
  {
    "ticker": "HLT",
    "organization": "Hilton Worldwide",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "HLTH",
    "organization": "Cue Health",
    "industry": "Laboratory Analytical Instruments",
    "marketCap": "1.55B"
  },
  {
    "ticker": "HLX",
    "organization": "Helix Energy Solutions Group",
    "industry": "Energy Equipment & Services",
    "marketCap": "585.08M"
  },
  {
    "ticker": "HLXA",
    "organization": "Helix Acquisition",
    "industry": "Shell Companies",
    "marketCap": "150.53M"
  },
  {
    "ticker": "HMC",
    "organization": "Honda Motor Company",
    "industry": "Automobiles",
    "marketCap": "53.38B"
  },
  {
    "ticker": "HMCO",
    "organization": "HumanCo Acquisition",
    "industry": "Shell Companies",
    "marketCap": "380.15M"
  },
  {
    "ticker": "HMG",
    "organization": "HMG Courtland Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "17.29M"
  },
  {
    "ticker": "HMHC",
    "organization": "Houghton Mifflin Harcourt",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.79B"
  },
  {
    "ticker": "HMLP",
    "organization": "Hoegh Lng Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HMN",
    "organization": "Horace Mann Educators",
    "industry": "Insurance",
    "marketCap": "1.68B"
  },
  {
    "ticker": "HMNF",
    "organization": "HMN Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "109.61M"
  },
  {
    "ticker": "HMPT",
    "organization": "Home Point Capital",
    "industry": "Mortgage Finance",
    "marketCap": "594.24M"
  },
  {
    "ticker": "HMST",
    "organization": "HomeStreet",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "869.01M"
  },
  {
    "ticker": "HMTV",
    "organization": "Hemisphere Media Group",
    "industry": "Media",
    "marketCap": "498.54M"
  },
  {
    "ticker": "HMY",
    "organization": "Harmony Gold Mining",
    "industry": "Metals & Mining",
    "marketCap": "1.94B"
  },
  {
    "ticker": "HNGR",
    "organization": "Hanger",
    "industry": " Inc.",
    "marketCap": "Health Care Providers & Services"
  },
  {
    "ticker": "HNI",
    "organization": "HNI Corporation",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.65B"
  },
  {
    "ticker": "HNNA",
    "organization": "Hennessy Advisors",
    "industry": "Capital Markets",
    "marketCap": "70.87M"
  },
  {
    "ticker": "HNP",
    "organization": "Huaneng Power International",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "8.27B"
  },
  {
    "ticker": "HNRG",
    "organization": "Hallador Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HNST",
    "organization": "The Honest Company",
    "industry": "Specialty Retail",
    "marketCap": "921.23M"
  },
  {
    "ticker": "HOFT",
    "organization": "Hooker Furniture",
    "industry": "Household Durables",
    "marketCap": "319.92M"
  },
  {
    "ticker": "HOFV",
    "organization": "Hall of Fame Resort & Entertainment",
    "industry": "Entertainment",
    "marketCap": "252.68M"
  },
  {
    "ticker": "HOG",
    "organization": "Harley-Davidson",
    "industry": "Automobiles",
    "marketCap": "5.65B"
  },
  {
    "ticker": "HOLI",
    "organization": "HollySys Automation Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "HOLX",
    "organization": "Hologic",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "18.33B"
  },
  {
    "ticker": "HOMB",
    "organization": "Home Bancshares",
    "industry": "Banks",
    "marketCap": "4.06B"
  },
  {
    "ticker": "HON",
    "organization": "Honeywell",
    "industry": "Industrial Conglomerates",
    "marketCap": "146.56B"
  },
  {
    "ticker": "HONE",
    "organization": "HarborOne Bancorp",
    "industry": "Banks",
    "marketCap": "777.34M"
  },
  {
    "ticker": "HOOD",
    "organization": "Robinhood Markets",
    "industry": "Software-Infrastructure",
    "marketCap": "35.01B"
  },
  {
    "ticker": "HOOK",
    "organization": "HOOKIPA Pharma",
    "industry": "Biotechnology",
    "marketCap": "177.56M"
  },
  {
    "ticker": "HOPE",
    "organization": "Hope Bancorp",
    "industry": "Banks",
    "marketCap": "1.79B"
  },
  {
    "ticker": "HOTH",
    "organization": "Hoth Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "28.17M"
  },
  {
    "ticker": "HOV",
    "organization": "Hovnanian Enterprises",
    "industry": "Household Durables",
    "marketCap": "596.96M"
  },
  {
    "ticker": "HOWL",
    "organization": "Werewolf Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "478.58M"
  },
  {
    "ticker": "HP",
    "organization": "Helmerich & Payne",
    "industry": "Energy Equipment & Services",
    "marketCap": "3.08B"
  },
  {
    "ticker": "HPE",
    "organization": "Hewlett-Packard Enterprise",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "HPK",
    "organization": "HighPeak Energy",
    "industry": "Oil & Gas E&P",
    "marketCap": "834.69M"
  },
  {
    "ticker": "HPP",
    "organization": "Hudson Pacific Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.13B"
  },
  {
    "ticker": "HPQ",
    "organization": "HP Inc",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "HPX",
    "organization": "HPX Corp.",
    "industry": "Shell Companies",
    "marketCap": "312.14M"
  },
  {
    "ticker": "HQI",
    "organization": "HireQuest",
    "industry": "Professional Services",
    "marketCap": "264.07M"
  },
  {
    "ticker": "HQY",
    "organization": "HealthEquity",
    "industry": "Health Care Providers & Services",
    "marketCap": "5.58B"
  },
  {
    "ticker": "HR",
    "organization": "Healthcare Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.38B"
  },
  {
    "ticker": "HRB",
    "organization": "H&R Block",
    "industry": "Diversified Consumer Services",
    "marketCap": "4.51B"
  },
  {
    "ticker": "HRC",
    "organization": "Hill-Rom Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "9.87B"
  },
  {
    "ticker": "HRI",
    "organization": "Herc Holdings",
    "industry": "Trading Companies & Distributors",
    "marketCap": "4.88B"
  },
  {
    "ticker": "HRL",
    "organization": "Hormel Foods",
    "industry": "Food Products",
    "marketCap": "22.13B"
  },
  {
    "ticker": "HRMY",
    "organization": "Harmony Biosciences",
    "industry": "Biotechnology",
    "marketCap": "2.19B"
  },
  {
    "ticker": "HROW",
    "organization": "Harrow Health",
    "industry": "Pharmaceuticals",
    "marketCap": "244.73M"
  },
  {
    "ticker": "HRTG",
    "organization": "Heritage Insurance Holdings",
    "industry": "Insurance",
    "marketCap": "187.37M"
  },
  {
    "ticker": "HRTX",
    "organization": "Heron Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.09B"
  },
  {
    "ticker": "HRZN",
    "organization": "Horizon Technology Finance",
    "industry": "Capital Markets",
    "marketCap": "332.73M"
  },
  {
    "ticker": "HSAQ",
    "organization": "Health Sciences Acquisitions 2",
    "industry": "Shell Companies",
    "marketCap": "202.66M"
  },
  {
    "ticker": "HSBC",
    "organization": "HSBC Holdings",
    "industry": "Banks",
    "marketCap": "107.92B"
  },
  {
    "ticker": "HSC",
    "organization": "Harsco",
    "industry": "Machinery",
    "marketCap": "1.34B"
  },
  {
    "ticker": "HSDT",
    "organization": "Helius Medical Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "32.45M"
  },
  {
    "ticker": "HSIC",
    "organization": "Henry Schein",
    "industry": "Health Care Providers & Services",
    "marketCap": "10.97B"
  },
  {
    "ticker": "HSII",
    "organization": "Heidrick & Struggles",
    "industry": "Professional Services",
    "marketCap": "881.16M"
  },
  {
    "ticker": "HSKA",
    "organization": "Heska Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "2.73B"
  },
  {
    "ticker": "HSON",
    "organization": "Hudson Global",
    "industry": "Professional Services",
    "marketCap": "42.82M"
  },
  {
    "ticker": "HST",
    "organization": "Host Hotels & Resorts",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "11.99B"
  },
  {
    "ticker": "HSTM",
    "organization": "HealthStream",
    "industry": "Health Care Technology",
    "marketCap": "901.82M"
  },
  {
    "ticker": "HSTO",
    "organization": "Histogen",
    "industry": "Biotechnology",
    "marketCap": "31.48M"
  },
  {
    "ticker": "HSY",
    "organization": "Hershey",
    "industry": "Food Products",
    "marketCap": "35.20B"
  },
  {
    "ticker": "HT",
    "organization": "Hersha Hospitality Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "379.23M"
  },
  {
    "ticker": "HTA",
    "organization": "Healthcare Trust of America",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.55B"
  },
  {
    "ticker": "HTBI",
    "organization": "HomeTrust Bancshares",
    "industry": "Banks",
    "marketCap": "472.25M"
  },
  {
    "ticker": "HTBK",
    "organization": "Heritage Commerce",
    "industry": "Banks",
    "marketCap": "702.41M"
  },
  {
    "ticker": "HTBX",
    "organization": "Heat Biologics",
    "industry": "Biotechnology",
    "marketCap": "150.10M"
  },
  {
    "ticker": "HTGC",
    "organization": "Hercules Capital",
    "industry": "Capital Markets",
    "marketCap": "1.93B"
  },
  {
    "ticker": "HTGM",
    "organization": "HTG Molecular Diagnostics",
    "industry": "Health Care Technology",
    "marketCap": "42.70M"
  },
  {
    "ticker": "HTH",
    "organization": "Hilltop Holdings",
    "industry": "Banks",
    "marketCap": "2.71B"
  },
  {
    "ticker": "HTHT",
    "organization": "Huazhu Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "HTLD",
    "organization": "Heartland Express",
    "industry": "Road & Rail",
    "marketCap": "1.28B"
  },
  {
    "ticker": "HTLF",
    "organization": "Heartland Financial USA",
    "industry": "Banks",
    "marketCap": "2.07B"
  },
  {
    "ticker": "HTOO",
    "organization": "Fusion Fuel Green",
    "industry": "Utilities-Renewable",
    "marketCap": "144.23M"
  },
  {
    "ticker": "HTPA",
    "organization": "Highland Transcend Partners I",
    "industry": "Shell Companies",
    "marketCap": "372.00M"
  },
  {
    "ticker": "HUBB",
    "organization": "Hubbell",
    "industry": "Electrical Equipment",
    "marketCap": "9.82B"
  },
  {
    "ticker": "HUBG",
    "organization": "Hub Group",
    "industry": "Air Freight & Logistics",
    "marketCap": "2.41B"
  },
  {
    "ticker": "HUBS",
    "organization": "HubSpot",
    "industry": "Software",
    "marketCap": "32.16B"
  },
  {
    "ticker": "HUDI",
    "organization": "Huadi International Group",
    "industry": "Steel",
    "marketCap": "56.31M"
  },
  {
    "ticker": "HUGE",
    "organization": "FSD Pharma",
    "industry": "IT Services",
    "marketCap": "62.86M"
  },
  {
    "ticker": "HUGS",
    "organization": "USHG Acquisition",
    "industry": "Shell Companies",
    "marketCap": "347.21M"
  },
  {
    "ticker": "HUIZ",
    "organization": "Huize Holding",
    "industry": "Insurance Brokers",
    "marketCap": "115.82M"
  },
  {
    "ticker": "HUM",
    "organization": "Humana",
    "industry": "Health Care Providers & Services",
    "marketCap": "49.69B"
  },
  {
    "ticker": "HUMA",
    "organization": "Humacyte",
    "industry": "Biotechnology",
    "marketCap": "1.16B"
  },
  {
    "ticker": "HUN",
    "organization": "Huntsman",
    "industry": "Chemicals",
    "marketCap": "6.57B"
  },
  {
    "ticker": "HURC",
    "organization": "Hurco Companies",
    "industry": "Machinery",
    "marketCap": "209.00M"
  },
  {
    "ticker": "HURN",
    "organization": "Huron Consulting Group",
    "industry": "Professional Services",
    "marketCap": "1.17B"
  },
  {
    "ticker": "HUSA",
    "organization": "Houston American Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "HUSN",
    "organization": "Hudson Capital",
    "industry": "Capital Markets",
    "marketCap": "15.50M"
  },
  {
    "ticker": "HUT",
    "organization": "Hut 8 Mining",
    "industry": "Capital Markets",
    "marketCap": "1.52B"
  },
  {
    "ticker": "HUYA",
    "organization": "HUYA Inc.",
    "industry": "Entertainment",
    "marketCap": "1.88B"
  },
  {
    "ticker": "HVBC",
    "organization": "HV Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "47.76M"
  },
  {
    "ticker": "HVT",
    "organization": "Haverty Furniture",
    "industry": "Specialty Retail",
    "marketCap": "611.97M"
  },
  {
    "ticker": "HWBK",
    "organization": "Hawthorn Bancshares",
    "industry": "Banks",
    "marketCap": "151.56M"
  },
  {
    "ticker": "HWC",
    "organization": "Hancock Whitney",
    "industry": "Banks",
    "marketCap": "4.09B"
  },
  {
    "ticker": "HWEL",
    "organization": "Healthwell Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "306.25M"
  },
  {
    "ticker": "HWKN",
    "organization": "Hawkins",
    "industry": "Chemicals",
    "marketCap": "738.40M"
  },
  {
    "ticker": "HWM",
    "organization": "Howmet Aerospace",
    "industry": "Aerospace & Defense",
    "marketCap": "13.91B"
  },
  {
    "ticker": "HX",
    "organization": "Hexindai Inc.",
    "industry": "Consumer Finance",
    "marketCap": "35.82M"
  },
  {
    "ticker": "HXL",
    "organization": "Hexcel Corporation",
    "industry": "Aerospace & Defense",
    "marketCap": "5.03B"
  },
  {
    "ticker": "HY",
    "organization": "Hyster-Yale Materials Handling",
    "industry": "Machinery",
    "marketCap": "845.42M"
  },
  {
    "ticker": "HYAC",
    "organization": "Haymaker Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "384.18M"
  },
  {
    "ticker": "HYFM",
    "organization": "Hydrofarm",
    "industry": "Farm & Heavy Construction Machinery",
    "marketCap": "1.67B"
  },
  {
    "ticker": "HYLN",
    "organization": "Hyliion",
    "industry": "Auto Parts",
    "marketCap": "1.45B"
  },
  {
    "ticker": "HYMC",
    "organization": "Hycroft Mining Holding",
    "industry": "Other Precious Metals & Mining",
    "marketCap": "90.45M"
  },
  {
    "ticker": "HYRE",
    "organization": "HyreCar",
    "industry": "Diversified Consumer Services",
    "marketCap": "182.65M"
  },
  {
    "ticker": "HYW",
    "organization": "Hywin Holdings",
    "industry": "Investment Advice",
    "marketCap": "305.00M"
  },
  {
    "ticker": "HYZN",
    "organization": "Hyzon Motors",
    "industry": "Auto Manufacturers",
    "marketCap": "1.63B"
  },
  {
    "ticker": "HZAC",
    "organization": "Horizon Acquisition",
    "industry": "Shell Companies",
    "marketCap": "678.62M"
  },
  {
    "ticker": "HZN",
    "organization": "Horizon Global",
    "industry": "Auto Components",
    "marketCap": "191.82M"
  },
  {
    "ticker": "HZNP",
    "organization": "Horizon Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "24.74B"
  },
  {
    "ticker": "HZO",
    "organization": "MarineMax",
    "industry": "Specialty Retail",
    "marketCap": "1.11B"
  },
  {
    "ticker": "HZON",
    "organization": "Horizon Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "643.12M"
  },
  {
    "ticker": "IAA",
    "organization": "IAA",
    "industry": " Inc.",
    "marketCap": "Commercial Services & Supplies"
  },
  {
    "ticker": "IAC",
    "organization": "IAC/InterActiveCorp",
    "industry": "Interactive Media & Services",
    "marketCap": "11.71B"
  },
  {
    "ticker": "IACB",
    "organization": "ION Acquisition 2",
    "industry": "Shell Companies",
    "marketCap": "314.35M"
  },
  {
    "ticker": "IACC",
    "organization": "ION Acquisition 3",
    "industry": "Shell Companies",
    "marketCap": "283.33M"
  },
  {
    "ticker": "IAG",
    "organization": "Iamgold",
    "industry": "Metals & Mining",
    "marketCap": "1.04B"
  },
  {
    "ticker": "IART",
    "organization": "Integra LifeSciences",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "5.79B"
  },
  {
    "ticker": "IAS",
    "organization": "Integral Ad Science Holding",
    "industry": "Advertising Agencies",
    "marketCap": "3.09B"
  },
  {
    "ticker": "IBA",
    "organization": "Industrias Bachoco",
    "industry": "Food Products",
    "marketCap": "2.23B"
  },
  {
    "ticker": "IBCP",
    "organization": "Independent Bank",
    "industry": "Banks",
    "marketCap": "471.48M"
  },
  {
    "ticker": "IBER",
    "organization": "Ibere Pharmaceuticals",
    "industry": "Shell Companies",
    "marketCap": "166.98M"
  },
  {
    "ticker": "IBEX",
    "organization": "IBEX Holdings",
    "industry": "Software",
    "marketCap": "314.81M"
  },
  {
    "ticker": "IBIO",
    "organization": "iBio",
    "industry": " Inc.",
    "marketCap": "Biotechnology"
  },
  {
    "ticker": "IBKR",
    "organization": "Interactive Brokers",
    "industry": "Capital Markets",
    "marketCap": "26.31B"
  },
  {
    "ticker": "IBM",
    "organization": "International Business Machines",
    "industry": "IT Services",
    "marketCap": "128.51B"
  },
  {
    "ticker": "IBN",
    "organization": "ICICI Bank",
    "industry": "Banks",
    "marketCap": "65.67B"
  },
  {
    "ticker": "IBOC",
    "organization": "International Bancshares",
    "industry": "Banks",
    "marketCap": "2.71B"
  },
  {
    "ticker": "IBP",
    "organization": "Installed Building Products",
    "industry": "Household Durables",
    "marketCap": "3.13B"
  },
  {
    "ticker": "IBRX",
    "organization": "ImmunityBio",
    "industry": "Biotechnology",
    "marketCap": "3.86B"
  },
  {
    "ticker": "IBTX",
    "organization": "Independent Bank Group",
    "industry": "Banks",
    "marketCap": "3.12B"
  },
  {
    "ticker": "ICAD",
    "organization": "iCAD",
    "industry": " Inc.",
    "marketCap": "Health Care Technology"
  },
  {
    "ticker": "ICBK",
    "organization": "County Bancorp",
    "industry": "Banks",
    "marketCap": "217.32M"
  },
  {
    "ticker": "ICCC",
    "organization": "ImmuCell",
    "industry": "Biotechnology",
    "marketCap": "68.90M"
  },
  {
    "ticker": "ICCH",
    "organization": "ICC Holdings",
    "industry": "Insurance",
    "marketCap": "52.71M"
  },
  {
    "ticker": "ICCM",
    "organization": "IceCure Medical",
    "industry": "Medical Care Facilities",
    "marketCap": "271.37M"
  },
  {
    "ticker": "ICD",
    "organization": "Independence Contract Drilling",
    "industry": "Energy Equipment & Services",
    "marketCap": "21.88M"
  },
  {
    "ticker": "ICE",
    "organization": "Intercontinental Exchange",
    "industry": "Capital Markets",
    "marketCap": "64.99B"
  },
  {
    "ticker": "ICFI",
    "organization": "ICF International",
    "industry": "Professional Services",
    "marketCap": "1.70B"
  },
  {
    "ticker": "ICHR",
    "organization": "Ichor Holdings",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.15B"
  },
  {
    "ticker": "ICL",
    "organization": "ICL Group",
    "industry": "Chemicals",
    "marketCap": "9.76B"
  },
  {
    "ticker": "ICLK",
    "organization": "iClick Interactive Asia",
    "industry": "Media",
    "marketCap": "521.01M"
  },
  {
    "ticker": "ICLR",
    "organization": "ICON plc",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "20.90B"
  },
  {
    "ticker": "ICMB",
    "organization": "Investcorp Credit Management BDC",
    "industry": "Capital Markets",
    "marketCap": "78.39M"
  },
  {
    "ticker": "ICPT",
    "organization": "Intercept Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "432.49M"
  },
  {
    "ticker": "ICUI",
    "organization": "ICU Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "4.94B"
  },
  {
    "ticker": "ICVX",
    "organization": "Icosavax",
    "industry": "Biotechnology",
    "marketCap": "1.10B"
  },
  {
    "ticker": "ID",
    "organization": "PARTS iD",
    "industry": "Specialty Retail",
    "marketCap": "169.35M"
  },
  {
    "ticker": "IDA",
    "organization": "IDACORP",
    "industry": " Inc.",
    "marketCap": "Electric Utilities"
  },
  {
    "ticker": "IDBA",
    "organization": "IDEX Biometrics",
    "industry": "Software-Application",
    "marketCap": "252.56M"
  },
  {
    "ticker": "IDCC",
    "organization": "InterDigital",
    "industry": "Communications Equipment",
    "marketCap": "2.12B"
  },
  {
    "ticker": "IDEX",
    "organization": "Ideanomics",
    "industry": "Software",
    "marketCap": "934.11M"
  },
  {
    "ticker": "IDN",
    "organization": "Intellicheck",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "IDRA",
    "organization": "Idera Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "54.34M"
  },
  {
    "ticker": "IDT",
    "organization": "IDT Corporation",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "1.08B"
  },
  {
    "ticker": "IDW",
    "organization": "IDW Media",
    "industry": "Publishing",
    "marketCap": "36.82M"
  },
  {
    "ticker": "IDXX",
    "organization": "IDEXX Laboratories",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "53.08B"
  },
  {
    "ticker": "IDYA",
    "organization": "IDEAYA Biosciences",
    "industry": "Biotechnology",
    "marketCap": "980.81M"
  },
  {
    "ticker": "IEA",
    "organization": "Infrastructure & Energy Alternatives",
    "industry": "Construction & Engineering",
    "marketCap": "499.65M"
  },
  {
    "ticker": "IEC",
    "organization": "IEC Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "IEP",
    "organization": "Icahn Enterprises",
    "industry": "Industrial Conglomerates",
    "marketCap": "13.55B"
  },
  {
    "ticker": "IESC",
    "organization": "IES Holdings",
    "industry": "Construction & Engineering",
    "marketCap": "970.46M"
  },
  {
    "ticker": "IEX",
    "organization": "IDEX Corporation",
    "industry": "Machinery",
    "marketCap": "16.08B"
  },
  {
    "ticker": "IFBD",
    "organization": "Infobird",
    "industry": "Software-Application",
    "marketCap": "57.82M"
  },
  {
    "ticker": "IFF",
    "organization": "International Flavors & Fragrances",
    "industry": "Chemicals",
    "marketCap": "36.19B"
  },
  {
    "ticker": "IFMK",
    "organization": "iFresh",
    "industry": "Food & Staples Retailing",
    "marketCap": "37.37M"
  },
  {
    "ticker": "IFRX",
    "organization": "InflaRx N.V.",
    "industry": "Biotechnology",
    "marketCap": "111.79M"
  },
  {
    "ticker": "IFS",
    "organization": "Intercorp Financial Services",
    "industry": "Banks-Regional",
    "marketCap": "2.57B"
  },
  {
    "ticker": "IGAC",
    "organization": "IG Acquisition",
    "industry": "Shell Companies",
    "marketCap": "367.12M"
  },
  {
    "ticker": "IGC",
    "organization": "India Globalization Capital",
    "industry": "Trading Companies & Distributors",
    "marketCap": "75.03M"
  },
  {
    "ticker": "IGIC",
    "organization": "International General Insurance",
    "industry": "Insurance-Diversified",
    "marketCap": "398.40M"
  },
  {
    "ticker": "IGMS",
    "organization": "IGM Biosciences",
    "industry": "Biotechnology",
    "marketCap": "2.11B"
  },
  {
    "ticker": "IGNY",
    "organization": "Ignyte Acquisition",
    "industry": "Shell Companies",
    "marketCap": "71.34M"
  },
  {
    "ticker": "IGT",
    "organization": "International Game Technology",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "IH",
    "organization": "iHuman",
    "industry": "Education & Training Services",
    "marketCap": "252.22M"
  },
  {
    "ticker": "IHC",
    "organization": "Independence Holding",
    "industry": "Insurance",
    "marketCap": "723.21M"
  },
  {
    "ticker": "IHG",
    "organization": "InterContinental Hotels Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "IHRT",
    "organization": "iHeartMedia",
    "industry": "Media",
    "marketCap": "3.47B"
  },
  {
    "ticker": "IHT",
    "organization": "InnSuites Hospitality Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "36.67M"
  },
  {
    "ticker": "IIAC",
    "organization": "Investindustrial Acquisition",
    "industry": "Shell Companies",
    "marketCap": "501.11M"
  },
  {
    "ticker": "III",
    "organization": "Information Services Group",
    "industry": "IT Services",
    "marketCap": "352.33M"
  },
  {
    "ticker": "IIII",
    "organization": "Insu Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "334.18M"
  },
  {
    "ticker": "IIIN",
    "organization": "Insteel Industries",
    "industry": "Building Products",
    "marketCap": "736.56M"
  },
  {
    "ticker": "IIIV",
    "organization": "i3 Verticals",
    "industry": "IT Services",
    "marketCap": "779.76M"
  },
  {
    "ticker": "IIN",
    "organization": "Intricon",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "166.12M"
  },
  {
    "ticker": "IINN",
    "organization": "Inspira Technologies Oxy",
    "industry": "Medical Devices",
    "marketCap": "20.19M"
  },
  {
    "ticker": "IIPR",
    "organization": "Innovative Industrial Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "5.52B"
  },
  {
    "ticker": "IIVI",
    "organization": "II-VI Incorporated",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "IKNA",
    "organization": "Ikena Oncology",
    "industry": "Biotechnology",
    "marketCap": "517.52M"
  },
  {
    "ticker": "IKNX",
    "organization": "Ikonics",
    "industry": "Chemicals",
    "marketCap": "56.63M"
  },
  {
    "ticker": "IKT",
    "organization": "Inhibikase Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "49.26M"
  },
  {
    "ticker": "ILMN",
    "organization": "Illumina",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "61.96B"
  },
  {
    "ticker": "ILPT",
    "organization": "Industrial Logistics Properties Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.69B"
  },
  {
    "ticker": "IMAB",
    "organization": "I-Mab",
    "industry": "Biotechnology",
    "marketCap": "5.52B"
  },
  {
    "ticker": "IMAC",
    "organization": "IMAC Holdings",
    "industry": "Health Care Providers & Services",
    "marketCap": "36.97M"
  },
  {
    "ticker": "IMAQ",
    "organization": "International Media Acquisition",
    "industry": "Shell Companies",
    "marketCap": "261.88M"
  },
  {
    "ticker": "IMAX",
    "organization": "IMAX Corporation",
    "industry": "Entertainment",
    "marketCap": "1.17B"
  },
  {
    "ticker": "IMBI",
    "organization": "iMedia Brands",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "119.28M"
  },
  {
    "ticker": "IMCC",
    "organization": "IM Cannabis",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "249.24M"
  },
  {
    "ticker": "IMCR",
    "organization": "Immunocore",
    "industry": "Biotechnology",
    "marketCap": "1.62B"
  },
  {
    "ticker": "IMGN",
    "organization": "ImmunoGen",
    "industry": "Biotechnology",
    "marketCap": "1.15B"
  },
  {
    "ticker": "IMGO",
    "organization": "Imago BioSciences",
    "industry": "Biotechnology",
    "marketCap": "690.99M"
  },
  {
    "ticker": "IMH",
    "organization": "Impac Mortgage Holdings",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "29.84M"
  },
  {
    "ticker": "IMKTA",
    "organization": "Ingles Markets",
    "industry": "Food & Staples Retailing",
    "marketCap": "1.25B"
  },
  {
    "ticker": "IMMP",
    "organization": "Immutep",
    "industry": "Biotechnology",
    "marketCap": "295.28M"
  },
  {
    "ticker": "IMMR",
    "organization": "Immersion",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "IMNM",
    "organization": "Immunome",
    "industry": "Biotechnology",
    "marketCap": "289.45M"
  },
  {
    "ticker": "IMO",
    "organization": "Imperial Oil",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "IMOS",
    "organization": "ChipMOS Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.22B"
  },
  {
    "ticker": "IMPL",
    "organization": "Impel NeuroPharma",
    "industry": "Biotechnology",
    "marketCap": "225.14M"
  },
  {
    "ticker": "IMPX",
    "organization": "AEA-Bridges Impact Corp",
    "industry": "Shell Companies",
    "marketCap": "489.00M"
  },
  {
    "ticker": "IMRA",
    "organization": "IMARA Inc.",
    "industry": "Biotechnology",
    "marketCap": "105.78M"
  },
  {
    "ticker": "IMRN",
    "organization": "Immuron",
    "industry": "Biotechnology",
    "marketCap": "25.91M"
  },
  {
    "ticker": "IMRX",
    "organization": "Immuneering",
    "industry": "Biotechnology",
    "marketCap": "704.85M"
  },
  {
    "ticker": "IMTE",
    "organization": "Integrated Media Technology",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "IMTX",
    "organization": "Immatics",
    "industry": "Biotechnology",
    "marketCap": "831.66M"
  },
  {
    "ticker": "IMUX",
    "organization": "Immunic",
    "industry": "Biotechnology",
    "marketCap": "205.80M"
  },
  {
    "ticker": "IMV",
    "organization": "IMV Inc.",
    "industry": "Biotechnology",
    "marketCap": "137.00M"
  },
  {
    "ticker": "IMVT",
    "organization": "Immunovant",
    "industry": "Biotechnology",
    "marketCap": "1.02B"
  },
  {
    "ticker": "IMXI",
    "organization": "International Money Express",
    "industry": "IT Services",
    "marketCap": "659.17M"
  },
  {
    "ticker": "INAB",
    "organization": "IN8bio",
    "industry": "Biotechnology",
    "marketCap": "138.60M"
  },
  {
    "ticker": "INBK",
    "organization": "First Internet Bancorp",
    "industry": "Banks",
    "marketCap": "309.81M"
  },
  {
    "ticker": "INBX",
    "organization": "Inhibrx",
    "industry": "Biotechnology",
    "marketCap": "1.26B"
  },
  {
    "ticker": "INCR",
    "organization": "Intercure",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "295.31M"
  },
  {
    "ticker": "INCY",
    "organization": "Incyte",
    "industry": "Biotechnology",
    "marketCap": "15.06B"
  },
  {
    "ticker": "INDB",
    "organization": "Independent Bank",
    "industry": "Banks",
    "marketCap": "2.52B"
  },
  {
    "ticker": "INDI",
    "organization": "indie Semiconductor",
    "industry": "Semiconductor Equipment & Materials",
    "marketCap": "1.57B"
  },
  {
    "ticker": "INDO",
    "organization": "Indonesia Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "INDP",
    "organization": "Indaptus Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "42.33M"
  },
  {
    "ticker": "INDT",
    "organization": "INDUS Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "539.10M"
  },
  {
    "ticker": "INFI",
    "organization": "Infinity Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "298.98M"
  },
  {
    "ticker": "INFN",
    "organization": "Infinera",
    "industry": "Communications Equipment",
    "marketCap": "1.73B"
  },
  {
    "ticker": "INFO",
    "organization": "IHS Markit",
    "industry": "Professional Services",
    "marketCap": "46.52B"
  },
  {
    "ticker": "INFU",
    "organization": "InfuSystem Holdings",
    "industry": "Health Care Providers & Services",
    "marketCap": "268.01M"
  },
  {
    "ticker": "INFY",
    "organization": "Infosys",
    "industry": "IT Services",
    "marketCap": "94.69B"
  },
  {
    "ticker": "ING",
    "organization": "ING Group",
    "industry": "Banks",
    "marketCap": "57.45B"
  },
  {
    "ticker": "INGN",
    "organization": "Inogen",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "994.88M"
  },
  {
    "ticker": "INGR",
    "organization": "Ingredion",
    "industry": "Food Products",
    "marketCap": "5.99B"
  },
  {
    "ticker": "INKA",
    "organization": "KludeIn I Acquisition",
    "industry": "Shell Companies",
    "marketCap": "211.74M"
  },
  {
    "ticker": "INM",
    "organization": "InMed Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "15.75M"
  },
  {
    "ticker": "INMB",
    "organization": "Inmune Bio",
    "industry": "Biotechnology",
    "marketCap": "363.61M"
  },
  {
    "ticker": "INMD",
    "organization": "InMode",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "6.02B"
  },
  {
    "ticker": "INN",
    "organization": "Summit Hotel Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.06B"
  },
  {
    "ticker": "INNV",
    "organization": "Innovage Holding",
    "industry": "Medical Care Facilities",
    "marketCap": "895.77M"
  },
  {
    "ticker": "INO",
    "organization": "Inovio Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.37B"
  },
  {
    "ticker": "INOD",
    "organization": "Innodata",
    "industry": "IT Services",
    "marketCap": "257.25M"
  },
  {
    "ticker": "INOV",
    "organization": "Inovalon Holdings",
    "industry": "Health Care Technology",
    "marketCap": "6.07B"
  },
  {
    "ticker": "INPX",
    "organization": "Inpixon",
    "industry": "IT Services",
    "marketCap": "96.83M"
  },
  {
    "ticker": "INS",
    "organization": "Intelligent Systems",
    "industry": "Software",
    "marketCap": "355.04M"
  },
  {
    "ticker": "INSE",
    "organization": "Inspired Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "INSG",
    "organization": "Inseego",
    "industry": "Communications Equipment",
    "marketCap": "689.60M"
  },
  {
    "ticker": "INSM",
    "organization": "Insmed",
    "industry": "Biotechnology",
    "marketCap": "3.16B"
  },
  {
    "ticker": "INSP",
    "organization": "Inspire Medical Systems",
    "industry": "Health Care Technology",
    "marketCap": "6.52B"
  },
  {
    "ticker": "INST",
    "organization": "Instructure",
    "industry": "Software-Application",
    "marketCap": "3.24B"
  },
  {
    "ticker": "INSW",
    "organization": "International Seaways",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "INT",
    "organization": "World Fuel Services",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "INTA",
    "organization": "Intapp",
    "industry": "Software-Application",
    "marketCap": "1.48B"
  },
  {
    "ticker": "INTC",
    "organization": "Intel",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "218.51B"
  },
  {
    "ticker": "INTG",
    "organization": "InterGroup Corporation",
    "industry": "Real Estate Management & Development",
    "marketCap": "101.90M"
  },
  {
    "ticker": "INTT",
    "organization": "inTEST Corporation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "125.51M"
  },
  {
    "ticker": "INTU",
    "organization": "Intuit",
    "industry": "Software",
    "marketCap": "147.29B"
  },
  {
    "ticker": "INTZ",
    "organization": "Intrusion",
    "industry": "Software",
    "marketCap": "69.79M"
  },
  {
    "ticker": "INUV",
    "organization": "Inuvo",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "INVA",
    "organization": "Innoviva",
    "industry": " Inc.",
    "marketCap": "Pharmaceuticals"
  },
  {
    "ticker": "INVE",
    "organization": "Identiv",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "INVH",
    "organization": "Invitation Homes",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "22.89B"
  },
  {
    "ticker": "INVO",
    "organization": "INVO Bioscience",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "35.49M"
  },
  {
    "ticker": "INVZ",
    "organization": "Innoviz Technologies",
    "industry": "Auto Parts",
    "marketCap": "760.18M"
  },
  {
    "ticker": "INZY",
    "organization": "Inozyme Pharma",
    "industry": "Biotechnology",
    "marketCap": "274.24M"
  },
  {
    "ticker": "IO",
    "organization": "ION Geophysical",
    "industry": "Energy Equipment & Services",
    "marketCap": "40.90M"
  },
  {
    "ticker": "IONM",
    "organization": "Assure Holdings",
    "industry": "Health Care Providers & Services",
    "marketCap": "18.11M"
  },
  {
    "ticker": "IONQ",
    "organization": "IonQ",
    "industry": "Shell Companies",
    "marketCap": "390.00M"
  },
  {
    "ticker": "IONS",
    "organization": "Ionis Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "4.74B"
  },
  {
    "ticker": "IOR",
    "organization": "Income Opportunity Realty Investors",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "46.44M"
  },
  {
    "ticker": "IOSP",
    "organization": "Innospec",
    "industry": "Chemicals",
    "marketCap": "2.08B"
  },
  {
    "ticker": "IOVA",
    "organization": "Iovance Biotherapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.81B"
  },
  {
    "ticker": "IP",
    "organization": "International Paper",
    "industry": "Containers & Packaging",
    "marketCap": "20.78B"
  },
  {
    "ticker": "IPA",
    "organization": "ImmunoPrecise Antibodies",
    "industry": "Biotechnology",
    "marketCap": "118.40M"
  },
  {
    "ticker": "IPAR",
    "organization": "Inter Parfums",
    "industry": "Personal Products",
    "marketCap": "2.37B"
  },
  {
    "ticker": "IPDN",
    "organization": "Professional Diversity Network",
    "industry": "Staffing & Employment Services",
    "marketCap": "19.55M"
  },
  {
    "ticker": "IPG",
    "organization": "Interpublic Group of Companies",
    "industry": "Media",
    "marketCap": "14.56B"
  },
  {
    "ticker": "IPGP",
    "organization": "IPG Photonics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "IPHA",
    "organization": "Innate Pharma",
    "industry": "Biotechnology",
    "marketCap": "481.13M"
  },
  {
    "ticker": "IPI",
    "organization": "Intrepid Potash",
    "industry": "Chemicals",
    "marketCap": "415.73M"
  },
  {
    "ticker": "IPOD",
    "organization": "Social Capital Hedosophia IV",
    "industry": "Shell Companies",
    "marketCap": "576.72M"
  },
  {
    "ticker": "IPOF",
    "organization": "Social Capital Hedosophia VI",
    "industry": "Shell Companies",
    "marketCap": "1.46B"
  },
  {
    "ticker": "IPSC",
    "organization": "Century Therapeutics",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.25B"
  },
  {
    "ticker": "IPVA",
    "organization": "InterPrivate II Acquisition",
    "industry": "Shell Companies",
    "marketCap": "317.63M"
  },
  {
    "ticker": "IPVF",
    "organization": "InterPrivate III Financial Partners",
    "industry": "Shell Companies",
    "marketCap": "330.04M"
  },
  {
    "ticker": "IPVI",
    "organization": "InterPrivate IV InfraTech Partners",
    "industry": "Shell Companies",
    "marketCap": "349.31M"
  },
  {
    "ticker": "IPW",
    "organization": "iPower",
    "industry": "Internet Retail",
    "marketCap": "98.12M"
  },
  {
    "ticker": "IPWR",
    "organization": "Ideal Power",
    "industry": "Electrical Equipment",
    "marketCap": "89.37M"
  },
  {
    "ticker": "IQ",
    "organization": "iQIYI",
    "industry": " Inc.",
    "marketCap": "Entertainment"
  },
  {
    "ticker": "IQV",
    "organization": "IQVIA Holdings",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "46.16B"
  },
  {
    "ticker": "IR",
    "organization": "Ingersoll-Rand",
    "industry": "Machinery",
    "marketCap": "20.62B"
  },
  {
    "ticker": "IRBT",
    "organization": "iRobot Corporation",
    "industry": "Household Durables",
    "marketCap": "2.23B"
  },
  {
    "ticker": "IRCP",
    "organization": "IRSA Propiedades Comerciales",
    "industry": "Real Estate Management & Development",
    "marketCap": "377.51M"
  },
  {
    "ticker": "IRDM",
    "organization": "Iridium Communications",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "5.33B"
  },
  {
    "ticker": "IRIX",
    "organization": "IRIDEX Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "118.90M"
  },
  {
    "ticker": "IRM",
    "organization": "Iron Mountain",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "12.61B"
  },
  {
    "ticker": "IRMD",
    "organization": "IRadimed",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "414.01M"
  },
  {
    "ticker": "IRNT",
    "organization": "IronNet",
    "industry": "Software-Infrastructure",
    "marketCap": "1.14B"
  },
  {
    "ticker": "IROQ",
    "organization": "IF Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "71.99M"
  },
  {
    "ticker": "IRS",
    "organization": "IRSA Inversiones y Representaciones",
    "industry": "Real Estate Management & Development",
    "marketCap": "595.97M"
  },
  {
    "ticker": "IRT",
    "organization": "Independence Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.19B"
  },
  {
    "ticker": "IRTC",
    "organization": "iRhythm Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.72B"
  },
  {
    "ticker": "IRWD",
    "organization": "Ironwood Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.17B"
  },
  {
    "ticker": "IS",
    "organization": "ironSource",
    "industry": "Software-Application",
    "marketCap": "10.65B"
  },
  {
    "ticker": "ISAA",
    "organization": "Iron Spark I",
    "industry": "Shell Companies",
    "marketCap": "206.97M"
  },
  {
    "ticker": "ISBC",
    "organization": "Investors Bancorp",
    "industry": "Banks",
    "marketCap": "3.82B"
  },
  {
    "ticker": "ISDR",
    "organization": "Issuer Direct",
    "industry": "Software",
    "marketCap": "100.34M"
  },
  {
    "ticker": "ISEE",
    "organization": "IVERIC bio",
    "industry": "Biotechnology",
    "marketCap": "1.73B"
  },
  {
    "ticker": "ISIG",
    "organization": "Insignia Systems",
    "industry": "Media",
    "marketCap": "13.82M"
  },
  {
    "ticker": "ISLE",
    "organization": "Isleworth Healthcare Acquisition",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "ISOS",
    "organization": "Isos Acquisition",
    "industry": "Shell Companies",
    "marketCap": "316.95M"
  },
  {
    "ticker": "ISPC",
    "organization": "iSpecimen",
    "industry": "Diagnostics & Research",
    "marketCap": "40.57M"
  },
  {
    "ticker": "ISR",
    "organization": "IsoRay",
    "industry": "Biotechnology",
    "marketCap": "90.09M"
  },
  {
    "ticker": "ISRG",
    "organization": "Intuitive Surgical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "119.54B"
  },
  {
    "ticker": "ISSC",
    "organization": "Innovative Solutions & Support",
    "industry": "Aerospace & Defense",
    "marketCap": "123.66M"
  },
  {
    "ticker": "ISTR",
    "organization": "Investar Holding",
    "industry": "Banks",
    "marketCap": "228.07M"
  },
  {
    "ticker": "ISUN",
    "organization": "iSun",
    "industry": "Solar",
    "marketCap": "75.10M"
  },
  {
    "ticker": "IT",
    "organization": "Gartner",
    "industry": "IT Services",
    "marketCap": "25.56B"
  },
  {
    "ticker": "ITAC",
    "organization": "Industrial Tech Acquisitions",
    "industry": "Shell Companies",
    "marketCap": "96.42M"
  },
  {
    "ticker": "ITCB",
    "organization": "Itau Corpbanca",
    "industry": "Banks",
    "marketCap": "1.28B"
  },
  {
    "ticker": "ITCI",
    "organization": "Intra-Cellular Therapies",
    "industry": "Pharmaceuticals",
    "marketCap": "3.13B"
  },
  {
    "ticker": "ITGR",
    "organization": "Integer Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "2.97B"
  },
  {
    "ticker": "ITHX",
    "organization": "ITHAX Acquisition",
    "industry": "Shell Companies",
    "marketCap": "300.91M"
  },
  {
    "ticker": "ITI",
    "organization": "Iteris",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ITIC",
    "organization": "Investors Title Company",
    "industry": "Insurance",
    "marketCap": "348.12M"
  },
  {
    "ticker": "ITMR",
    "organization": "Itamar Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "498.29M"
  },
  {
    "ticker": "ITOS",
    "organization": "iTeos Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "950.66M"
  },
  {
    "ticker": "ITP",
    "organization": "IT Tech Packaging",
    "industry": "Paper & Forest Products",
    "marketCap": "37.91M"
  },
  {
    "ticker": "ITQ",
    "organization": "Itiquira Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.31M"
  },
  {
    "ticker": "ITRG",
    "organization": "Integra Resources",
    "industry": "Other Precious Metals & Mining",
    "marketCap": "141.60M"
  },
  {
    "ticker": "ITRI",
    "organization": "Itron",
    "industry": " Inc.",
    "marketCap": "Electronic Equipment"
  },
  {
    "ticker": "ITRM",
    "organization": "Iterum Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "102.06M"
  },
  {
    "ticker": "ITRN",
    "organization": "Ituran Location & Control",
    "industry": "Communications Equipment",
    "marketCap": "538.02M"
  },
  {
    "ticker": "ITT",
    "organization": "ITT Inc.",
    "industry": "Machinery",
    "marketCap": "7.35B"
  },
  {
    "ticker": "ITUB",
    "organization": "Itau Unibanco Holding",
    "industry": "Banks",
    "marketCap": "53.89B"
  },
  {
    "ticker": "ITW",
    "organization": "Illinois Tool Works",
    "industry": "Machinery",
    "marketCap": "65.08B"
  },
  {
    "ticker": "IVA",
    "organization": "Inventiva",
    "industry": "Biotechnology",
    "marketCap": "577.73M"
  },
  {
    "ticker": "IVAC",
    "organization": "Intevac",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "IVAN",
    "organization": "Ivanhoe Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "342.67M"
  },
  {
    "ticker": "IVC",
    "organization": "Invacare",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "166.62M"
  },
  {
    "ticker": "IVR",
    "organization": "Invesco Mortgage Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "912.50M"
  },
  {
    "ticker": "IVZ",
    "organization": "Invesco",
    "industry": "Capital Markets",
    "marketCap": "11.12B"
  },
  {
    "ticker": "IX",
    "organization": "ORIX Corporation",
    "industry": "Diversified Financial Services",
    "marketCap": "22.78B"
  },
  {
    "ticker": "IZEA",
    "organization": "IZEA Worldwide",
    "industry": "Interactive Media & Services",
    "marketCap": "120.64M"
  },
  {
    "ticker": "J",
    "organization": "Jacobs Engineering",
    "industry": "Construction & Engineering",
    "marketCap": "17.55B"
  },
  {
    "ticker": "JACK",
    "organization": "Jack in the Box",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "JAGX",
    "organization": "Jaguar Health",
    "industry": "Pharmaceuticals",
    "marketCap": "104.62M"
  },
  {
    "ticker": "JAKK",
    "organization": "JAKKS Pacific",
    "industry": "Leisure Products",
    "marketCap": "120.59M"
  },
  {
    "ticker": "JAMF",
    "organization": "Jamf Holding",
    "industry": "Software",
    "marketCap": "4.65B"
  },
  {
    "ticker": "JAN",
    "organization": "JanOne",
    "industry": "Commercial Services & Supplies",
    "marketCap": "16.01M"
  },
  {
    "ticker": "JANX",
    "organization": "Janux Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "904.63M"
  },
  {
    "ticker": "JATT",
    "organization": "JATT Acquisition",
    "industry": "Shell Companies",
    "marketCap": "147.90M"
  },
  {
    "ticker": "JAZZ",
    "organization": "Jazz Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "7.98B"
  },
  {
    "ticker": "JBGS",
    "organization": "JBG SMITH Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.96B"
  },
  {
    "ticker": "JBHT",
    "organization": "J.B. Hunt",
    "industry": "Road & Rail",
    "marketCap": "17.55B"
  },
  {
    "ticker": "JBI",
    "organization": "Janus International Group",
    "industry": "Building Products & Equipment",
    "marketCap": "1.69B"
  },
  {
    "ticker": "JBL",
    "organization": "Jabil",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "JBLU",
    "organization": "JetBlue Airways",
    "industry": "Airlines",
    "marketCap": "5.08B"
  },
  {
    "ticker": "JBSS",
    "organization": "John B. Sanfilippo & Son",
    "industry": "Food Products",
    "marketCap": "943.14M"
  },
  {
    "ticker": "JBT",
    "organization": "JBT Corporation",
    "industry": "Machinery",
    "marketCap": "4.55B"
  },
  {
    "ticker": "JCI",
    "organization": "Johnson Controls",
    "industry": "Building Products",
    "marketCap": "48.49B"
  },
  {
    "ticker": "JCIC",
    "organization": "Jack Creek Investment",
    "industry": "Shell Companies",
    "marketCap": "420.47M"
  },
  {
    "ticker": "JCOM",
    "organization": "J2 Global",
    "industry": "Software",
    "marketCap": "6.68B"
  },
  {
    "ticker": "JCS",
    "organization": "Communications Systems",
    "industry": "Communications Equipment",
    "marketCap": "75.41M"
  },
  {
    "ticker": "JCTCF",
    "organization": "Jewett-Cameron Trading",
    "industry": "Building Products",
    "marketCap": "41.24M"
  },
  {
    "ticker": "JD",
    "organization": "JD.com",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "109.94B"
  },
  {
    "ticker": "JEF",
    "organization": "Jefferies Financial Group",
    "industry": "Diversified Financial Services",
    "marketCap": "9.38B"
  },
  {
    "ticker": "JELD",
    "organization": "JELD-WEN Holding",
    "industry": "Building Products",
    "marketCap": "2.33B"
  },
  {
    "ticker": "JFIN",
    "organization": "Jiayin Group",
    "industry": "Consumer Finance",
    "marketCap": "196.11M"
  },
  {
    "ticker": "JFU",
    "organization": "9F Inc.",
    "industry": "Interactive Media & Services",
    "marketCap": "345.97M"
  },
  {
    "ticker": "JG",
    "organization": "Aurora Mobile",
    "industry": "Software",
    "marketCap": "195.74M"
  },
  {
    "ticker": "JHG",
    "organization": "Janus Henderson Group",
    "industry": "Capital Markets",
    "marketCap": "7.19B"
  },
  {
    "ticker": "JHX",
    "organization": "James Hardie Industries",
    "industry": "Construction Materials",
    "marketCap": "16.31B"
  },
  {
    "ticker": "JILL",
    "organization": "J.Jill",
    "industry": " Inc.",
    "marketCap": "Specialty Retail"
  },
  {
    "ticker": "JJSF",
    "organization": "J&J Snack Foods",
    "industry": "Food Products",
    "marketCap": "2.93B"
  },
  {
    "ticker": "JKHY",
    "organization": "Jack Henry & Associates",
    "industry": "IT Services",
    "marketCap": "12.14B"
  },
  {
    "ticker": "JKS",
    "organization": "JinkoSolar Holding",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.26B"
  },
  {
    "ticker": "JLL",
    "organization": "Jones Lang LaSalle",
    "industry": "Real Estate Management & Development",
    "marketCap": "12.58B"
  },
  {
    "ticker": "JMIA",
    "organization": "Jumia Technologies AG",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.82B"
  },
  {
    "ticker": "JMP",
    "organization": "JMP Group",
    "industry": "Capital Markets",
    "marketCap": "148.61M"
  },
  {
    "ticker": "JNCE",
    "organization": "Jounce Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "377.22M"
  },
  {
    "ticker": "JNJ",
    "organization": "Johnson & Johnson",
    "industry": "Pharmaceuticals",
    "marketCap": "424.17B"
  },
  {
    "ticker": "JNPR",
    "organization": "Juniper Networks",
    "industry": "Communications Equipment",
    "marketCap": "9.14B"
  },
  {
    "ticker": "JOAN",
    "organization": "JOANN",
    "industry": "Specialty Retail",
    "marketCap": "465.87M"
  },
  {
    "ticker": "JOB",
    "organization": "GEE Group",
    "industry": "Professional Services",
    "marketCap": "52.81M"
  },
  {
    "ticker": "JOBS",
    "organization": "51job",
    "industry": "Professional Services",
    "marketCap": "4.59B"
  },
  {
    "ticker": "JOBY",
    "organization": "Joby Aviation",
    "industry": "Airports & Air Services",
    "marketCap": "6.09B"
  },
  {
    "ticker": "JOE",
    "organization": "The St. Joe Company",
    "industry": "Real Estate Management & Development",
    "marketCap": "2.57B"
  },
  {
    "ticker": "JOFF",
    "organization": "JOFF Fintech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "501.97M"
  },
  {
    "ticker": "JOUT",
    "organization": "Johnson Outdoors",
    "industry": "Leisure Products",
    "marketCap": "1.11B"
  },
  {
    "ticker": "JP",
    "organization": "Jupai Holdings",
    "industry": "Capital Markets",
    "marketCap": "35.55M"
  },
  {
    "ticker": "JPM",
    "organization": "JPMorgan Chase",
    "industry": "Banks",
    "marketCap": "490.36B"
  },
  {
    "ticker": "JRJC",
    "organization": "China Finance Online",
    "industry": "Capital Markets",
    "marketCap": "13.02M"
  },
  {
    "ticker": "JRSH",
    "organization": "Jerash Holdings",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "JRVR",
    "organization": "James River Group Holdings",
    "industry": "Insurance",
    "marketCap": "1.45B"
  },
  {
    "ticker": "JSPR",
    "organization": "Jasper Therapeutics",
    "industry": "Shell Companies",
    "marketCap": "189.00M"
  },
  {
    "ticker": "JT",
    "organization": "Jianpu Technology",
    "industry": "Consumer Finance",
    "marketCap": "31.77M"
  },
  {
    "ticker": "JUGG",
    "organization": "JAWS Juggernaut Acquisition",
    "industry": "Shell Companies",
    "marketCap": "283.91M"
  },
  {
    "ticker": "JUPW",
    "organization": "Jupiter Wellness",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "32.33M"
  },
  {
    "ticker": "JVA",
    "organization": "Coffee Holding Co.",
    "industry": "Food Products",
    "marketCap": "25.97M"
  },
  {
    "ticker": "JW.A",
    "organization": "John Wiley & Sons",
    "industry": "Media",
    "marketCap": "2.94B"
  },
  {
    "ticker": "JW.B",
    "organization": "John Wiley & Sons",
    "industry": "Publishing",
    "marketCap": "2.85B"
  },
  {
    "ticker": "JWEL",
    "organization": "Jowell Global",
    "industry": "Internet Retail",
    "marketCap": "149.51M"
  },
  {
    "ticker": "JWN",
    "organization": "Nordstrom",
    "industry": "Multiline Retail",
    "marketCap": "4.17B"
  },
  {
    "ticker": "JWSM",
    "organization": "Jaws Mustang Acquisition",
    "industry": "Shell Companies",
    "marketCap": "1.26B"
  },
  {
    "ticker": "JXN",
    "organization": "Jackson Financial",
    "industry": "Asset Management",
    "marketCap": "2.45B"
  },
  {
    "ticker": "JYAC",
    "organization": "Jiya Acquisition",
    "industry": "Shell Companies",
    "marketCap": "136.40M"
  },
  {
    "ticker": "JYNT",
    "organization": "The Joint Corp.",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.38B"
  },
  {
    "ticker": "JZXN",
    "organization": "Jiuzi Holdings",
    "industry": "Auto & Truck Dealerships",
    "marketCap": "49.28M"
  },
  {
    "ticker": "K",
    "organization": "Kellogg",
    "industry": "Food Products",
    "marketCap": "21.84B"
  },
  {
    "ticker": "KAHC",
    "organization": "KKR Acquisition Holdings I",
    "industry": "Shell Companies",
    "marketCap": "1.69B"
  },
  {
    "ticker": "KAI",
    "organization": "Kadant",
    "industry": "Machinery",
    "marketCap": "2.39B"
  },
  {
    "ticker": "KAII",
    "organization": "Kismet Acquisition Two",
    "industry": "Shell Companies",
    "marketCap": "284.60M"
  },
  {
    "ticker": "KAIR",
    "organization": "Kairos Acquisition",
    "industry": "Shell Companies",
    "marketCap": "333.62M"
  },
  {
    "ticker": "KALA",
    "organization": "Kala Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "181.59M"
  },
  {
    "ticker": "KALU",
    "organization": "Kaiser Aluminum",
    "industry": "Metals & Mining",
    "marketCap": "1.73B"
  },
  {
    "ticker": "KALV",
    "organization": "KalVista Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "419.60M"
  },
  {
    "ticker": "KAMN",
    "organization": "Kaman Corporation",
    "industry": "Trading Companies & Distributors",
    "marketCap": "1.00B"
  },
  {
    "ticker": "KAR",
    "organization": "KAR Auction Services",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.95B"
  },
  {
    "ticker": "KARO",
    "organization": "Karooooo",
    "industry": "Software-Application",
    "marketCap": "923.58M"
  },
  {
    "ticker": "KAVL",
    "organization": "Kaival Brands Innovations Group",
    "industry": "Tobacco",
    "marketCap": "30.95M"
  },
  {
    "ticker": "KB",
    "organization": "KB Financial Group",
    "industry": "Banks",
    "marketCap": "18.34B"
  },
  {
    "ticker": "KBAL",
    "organization": "Kimball International",
    "industry": "Commercial Services & Supplies",
    "marketCap": "424.52M"
  },
  {
    "ticker": "KBH",
    "organization": "KB Home",
    "industry": "Household Durables",
    "marketCap": "3.86B"
  },
  {
    "ticker": "KBNT",
    "organization": "Kubient",
    "industry": "Software-Application",
    "marketCap": "46.04M"
  },
  {
    "ticker": "KBR",
    "organization": "KBR",
    "industry": " Inc.",
    "marketCap": "IT Services"
  },
  {
    "ticker": "KBSF",
    "organization": "KBS Fashion Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "KC",
    "organization": "Kingsoft Cloud Holdings",
    "industry": "IT Services",
    "marketCap": "6.24B"
  },
  {
    "ticker": "KCAC",
    "organization": "Kensington Capital Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "238.05M"
  },
  {
    "ticker": "KDMN",
    "organization": "Kadmon Holdings",
    "industry": "Biotechnology",
    "marketCap": "1.53B"
  },
  {
    "ticker": "KDNY",
    "organization": "Chinook Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "598.23M"
  },
  {
    "ticker": "KDP",
    "organization": "Keurig Dr Pepper",
    "industry": "Beverages",
    "marketCap": "47.07B"
  },
  {
    "ticker": "KE",
    "organization": "Kimball Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "KELYA",
    "organization": "Kelly Services",
    "industry": "Professional Services",
    "marketCap": "769.71M"
  },
  {
    "ticker": "KELYB",
    "organization": "Kelly Services",
    "industry": "Professional Services",
    "marketCap": "746.39M"
  },
  {
    "ticker": "KEN",
    "organization": "Kenon Holdings",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "2.24B"
  },
  {
    "ticker": "KEP",
    "organization": "Korea Electric Power",
    "industry": "Electric Utilities",
    "marketCap": "12.89B"
  },
  {
    "ticker": "KEQU",
    "organization": "Kewaunee Scientific",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "37.61M"
  },
  {
    "ticker": "KERN",
    "organization": "Akerna",
    "industry": "Professional Services",
    "marketCap": "76.39M"
  },
  {
    "ticker": "KEX",
    "organization": "Kirby Corporation",
    "industry": "Marine",
    "marketCap": "2.89B"
  },
  {
    "ticker": "KEY",
    "organization": "KeyCorp",
    "industry": "Banks",
    "marketCap": "20.97B"
  },
  {
    "ticker": "KEYS",
    "organization": "Keysight Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "KFFB",
    "organization": "Kentucky First Federal Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "58.83M"
  },
  {
    "ticker": "KFRC",
    "organization": "Kforce",
    "industry": "Professional Services",
    "marketCap": "1.33B"
  },
  {
    "ticker": "KFS",
    "organization": "Kingsway Financial Services",
    "industry": "Insurance",
    "marketCap": "118.12M"
  },
  {
    "ticker": "KFY",
    "organization": "Korn Ferry",
    "industry": "Professional Services",
    "marketCap": "3.94B"
  },
  {
    "ticker": "KGC",
    "organization": "Kinross Gold",
    "industry": "Metals & Mining",
    "marketCap": "6.69B"
  },
  {
    "ticker": "KHC",
    "organization": "Kraft Heinz",
    "industry": "Food Products",
    "marketCap": "44.87B"
  },
  {
    "ticker": "KIDS",
    "organization": "OrthoPediatrics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.26B"
  },
  {
    "ticker": "KIII",
    "organization": "Kismet Acquisition Three",
    "industry": "Shell Companies",
    "marketCap": "354.54M"
  },
  {
    "ticker": "KIM",
    "organization": "Kimco Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "13.30B"
  },
  {
    "ticker": "KINS",
    "organization": "Kingstone Companies",
    "industry": "Insurance",
    "marketCap": "70.41M"
  },
  {
    "ticker": "KINZ",
    "organization": "Kins Technology Group",
    "industry": "Shell Companies",
    "marketCap": "342.59M"
  },
  {
    "ticker": "KIQ",
    "organization": "Kelso Technologies",
    "industry": "Machinery",
    "marketCap": "34.09M"
  },
  {
    "ticker": "KIRK",
    "organization": "Kirkland's",
    "industry": "Specialty Retail",
    "marketCap": "265.22M"
  },
  {
    "ticker": "KKR",
    "organization": "KKR & Co.",
    "industry": "Capital Markets",
    "marketCap": "35.96B"
  },
  {
    "ticker": "KL",
    "organization": "Kirkland Lake Gold",
    "industry": "Metals & Mining",
    "marketCap": "10.92B"
  },
  {
    "ticker": "KLAC",
    "organization": "KLA Corporation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "50.40B"
  },
  {
    "ticker": "KLAQ",
    "organization": "KL Acquisition",
    "industry": "Shell Companies",
    "marketCap": "351.11M"
  },
  {
    "ticker": "KLDO",
    "organization": "Kaleido Biosciences",
    "industry": "Pharmaceuticals",
    "marketCap": "256.32M"
  },
  {
    "ticker": "KLIC",
    "organization": "Kulicke & Soffa Industries",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.59B"
  },
  {
    "ticker": "KLR",
    "organization": "Kaleyra",
    "industry": "Software",
    "marketCap": "469.44M"
  },
  {
    "ticker": "KLTR",
    "organization": "Kaltura",
    "industry": "Software-Infrastructure",
    "marketCap": "1.30B"
  },
  {
    "ticker": "KLXE",
    "organization": "KLX Energy Services",
    "industry": "Energy Equipment & Services",
    "marketCap": "42.09M"
  },
  {
    "ticker": "KMB",
    "organization": "Kimberly-Clark",
    "industry": "Household Products",
    "marketCap": "44.42B"
  },
  {
    "ticker": "KMDA",
    "organization": "Kamada",
    "industry": "Biotechnology",
    "marketCap": "237.07M"
  },
  {
    "ticker": "KMI",
    "organization": "Kinder Morgan",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "KMPH",
    "organization": "KemPharm",
    "industry": "Pharmaceuticals",
    "marketCap": "323.77M"
  },
  {
    "ticker": "KMPR",
    "organization": "Kemper Corporation",
    "industry": "Insurance",
    "marketCap": "4.27B"
  },
  {
    "ticker": "KMT",
    "organization": "Kennametal",
    "industry": "Machinery",
    "marketCap": "2.89B"
  },
  {
    "ticker": "KMX",
    "organization": "CarMax",
    "industry": "Specialty Retail",
    "marketCap": "20.67B"
  },
  {
    "ticker": "KN",
    "organization": "Knowles Corporation",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "KNBE",
    "organization": "KnowBe4",
    "industry": "Software-Infrastructure",
    "marketCap": "3.68B"
  },
  {
    "ticker": "KNDI",
    "organization": "Kandi Technologies",
    "industry": "Auto Components",
    "marketCap": "341.22M"
  },
  {
    "ticker": "KNOP",
    "organization": "KNOT Offshore Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "KNSA",
    "organization": "Kiniksa Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "780.48M"
  },
  {
    "ticker": "KNSL",
    "organization": "Kinsale Capital Group",
    "industry": "Insurance",
    "marketCap": "3.71B"
  },
  {
    "ticker": "KNTE",
    "organization": "Kinnate Biopharma",
    "industry": "Biotechnology",
    "marketCap": "1.03B"
  },
  {
    "ticker": "KNX",
    "organization": "Knight-Swift Transportation",
    "industry": "Road & Rail",
    "marketCap": "8.49B"
  },
  {
    "ticker": "KO",
    "organization": "Coca-Cola",
    "industry": "Beverages",
    "marketCap": "228.02B"
  },
  {
    "ticker": "KOD",
    "organization": "Kodiak Sciences",
    "industry": "Biotechnology",
    "marketCap": "4.99B"
  },
  {
    "ticker": "KODK",
    "organization": "Eastman Kodak",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "KOF",
    "organization": "Coca-Cola Femsa",
    "industry": "Beverages",
    "marketCap": "11.69B"
  },
  {
    "ticker": "KOP",
    "organization": "Koppers Holdings",
    "industry": "Chemicals",
    "marketCap": "696.41M"
  },
  {
    "ticker": "KOPN",
    "organization": "Kopin Corporation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "476.80M"
  },
  {
    "ticker": "KOR",
    "organization": "Corvus Gold",
    "industry": "Gold",
    "marketCap": "403.86M"
  },
  {
    "ticker": "KORE",
    "organization": "KORE Group Holdings",
    "industry": "Shell Companies",
    "marketCap": "260.62M"
  },
  {
    "ticker": "KOS",
    "organization": "Kosmos Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "KOSS",
    "organization": "Koss Corporation",
    "industry": "Household Durables",
    "marketCap": "147.79M"
  },
  {
    "ticker": "KPLT",
    "organization": "Katapult",
    "industry": "Software-Infrastructure",
    "marketCap": "502.50M"
  },
  {
    "ticker": "KPTI",
    "organization": "Karyopharm Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "440.53M"
  },
  {
    "ticker": "KR",
    "organization": "Kroger",
    "industry": "Food & Staples Retailing",
    "marketCap": "29.11B"
  },
  {
    "ticker": "KRA",
    "organization": "Kraton",
    "industry": "Chemicals",
    "marketCap": "1.46B"
  },
  {
    "ticker": "KRBP",
    "organization": "Kiromic BioPharma",
    "industry": "Biotechnology",
    "marketCap": "47.08M"
  },
  {
    "ticker": "KRC",
    "organization": "Kilroy Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "7.85B"
  },
  {
    "ticker": "KREF",
    "organization": "KKR Real Estate Finance Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.18B"
  },
  {
    "ticker": "KRG",
    "organization": "Kite Realty Group Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.79B"
  },
  {
    "ticker": "KRKR",
    "organization": "36Kr Holdings",
    "industry": "Interactive Media & Services",
    "marketCap": "61.30M"
  },
  {
    "ticker": "KRMD",
    "organization": "Repro-Med Systems",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "130.86M"
  },
  {
    "ticker": "KRNL",
    "organization": "Kernel Group Holdings",
    "industry": "Shell Companies",
    "marketCap": "371.03M"
  },
  {
    "ticker": "KRNT",
    "organization": "Kornit Digital",
    "industry": "Machinery",
    "marketCap": "6.70B"
  },
  {
    "ticker": "KRNY",
    "organization": "Kearny Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "953.94M"
  },
  {
    "ticker": "KRO",
    "organization": "Kronos Worldwide",
    "industry": "Chemicals",
    "marketCap": "1.47B"
  },
  {
    "ticker": "KRON",
    "organization": "Kronos Bio",
    "industry": "Biotechnology",
    "marketCap": "1.19B"
  },
  {
    "ticker": "KROS",
    "organization": "Keros Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "931.42M"
  },
  {
    "ticker": "KRP",
    "organization": "Kimbell Royalty Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "KRT",
    "organization": "Karat Packaging",
    "industry": "Packaging & Containers",
    "marketCap": "408.38M"
  },
  {
    "ticker": "KRTX",
    "organization": "Karuna Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.70B"
  },
  {
    "ticker": "KRUS",
    "organization": "Kura Sushi USA",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "KRYS",
    "organization": "Krystal Biotech",
    "industry": "Biotechnology",
    "marketCap": "1.21B"
  },
  {
    "ticker": "KSI",
    "organization": "Kadem Sustainable Impact",
    "industry": "Shell Companies",
    "marketCap": "211.53M"
  },
  {
    "ticker": "KSPN",
    "organization": "Kaspien Holdings",
    "industry": "Specialty Retail",
    "marketCap": "39.91M"
  },
  {
    "ticker": "KSS",
    "organization": "Kohl's",
    "industry": "Multiline Retail",
    "marketCap": "7.16B"
  },
  {
    "ticker": "KSU",
    "organization": "Kansas City Southern",
    "industry": "Road & Rail",
    "marketCap": "25.28B"
  },
  {
    "ticker": "KT",
    "organization": "KT Corporation",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "6.45B"
  },
  {
    "ticker": "KTB",
    "organization": "Kontoor Brands",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "KTCC",
    "organization": "Key Tronic",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "KTOS",
    "organization": "Kratos Defense & Security Solutions",
    "industry": "Aerospace & Defense",
    "marketCap": "2.74B"
  },
  {
    "ticker": "KTRA",
    "organization": "Kintara Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "37.14M"
  },
  {
    "ticker": "KTTA",
    "organization": "Pasithea Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "37.48M"
  },
  {
    "ticker": "KUKE",
    "organization": "Kuke Music",
    "industry": "Entertainment",
    "marketCap": "183.02M"
  },
  {
    "ticker": "KULR",
    "organization": "KULR Technology Group",
    "industry": "Electronic Components",
    "marketCap": "217.64M"
  },
  {
    "ticker": "KURA",
    "organization": "Kura Oncology",
    "industry": "Biotechnology",
    "marketCap": "1.23B"
  },
  {
    "ticker": "KURI",
    "organization": "Alkuri Global Acquisition",
    "industry": "Shell Companies",
    "marketCap": "429.96M"
  },
  {
    "ticker": "KVHI",
    "organization": "KVH Industries",
    "industry": "Communications Equipment",
    "marketCap": "181.14M"
  },
  {
    "ticker": "KVSA",
    "organization": "Khosla Ventures Acquisition",
    "industry": "Shell Companies",
    "marketCap": "399.64M"
  },
  {
    "ticker": "KVSB",
    "organization": "Khosla Ventures Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "480.78M"
  },
  {
    "ticker": "KVSC",
    "organization": "Khosla Ventures Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "650.70M"
  },
  {
    "ticker": "KW",
    "organization": "Kennedy-Wilson Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "3.29B"
  },
  {
    "ticker": "KWAC",
    "organization": "Kingswood Acquisition",
    "industry": "Shell Companies",
    "marketCap": "146.09M"
  },
  {
    "ticker": "KWR",
    "organization": "Quaker Chemical",
    "industry": "Chemicals",
    "marketCap": "4.23B"
  },
  {
    "ticker": "KXIN",
    "organization": "Kaixin Auto",
    "industry": "Specialty Retail",
    "marketCap": "395.95M"
  },
  {
    "ticker": "KYMR",
    "organization": "Kymera Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.00B"
  },
  {
    "ticker": "KZIA",
    "organization": "Kazia Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "149.70M"
  },
  {
    "ticker": "KZR",
    "organization": "Kezar Life Sciences",
    "industry": "Biotechnology",
    "marketCap": "416.39M"
  },
  {
    "ticker": "L",
    "organization": "Loews",
    "industry": "Insurance",
    "marketCap": "14.23B"
  },
  {
    "ticker": "LAAA",
    "organization": "Lakeshore Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "63.90M"
  },
  {
    "ticker": "LABP",
    "organization": "Landos Biopharma",
    "industry": "Biotechnology",
    "marketCap": "600.56M"
  },
  {
    "ticker": "LAC",
    "organization": "Lithium Americas",
    "industry": "Metals & Mining",
    "marketCap": "2.65B"
  },
  {
    "ticker": "LAD",
    "organization": "Lithia Motors",
    "industry": "Specialty Retail",
    "marketCap": "9.67B"
  },
  {
    "ticker": "LADR",
    "organization": "Ladder Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.43B"
  },
  {
    "ticker": "LAIX",
    "organization": "LAIX Inc.",
    "industry": "Diversified Consumer Services",
    "marketCap": "44.44M"
  },
  {
    "ticker": "LAKE",
    "organization": "Lakeland Industries",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "LAMR",
    "organization": "Lamar Advertising",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "11.50B"
  },
  {
    "ticker": "LANC",
    "organization": "Lancaster Colony",
    "industry": "Food Products",
    "marketCap": "4.63B"
  },
  {
    "ticker": "LAND",
    "organization": "Gladstone Land",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "715.52M"
  },
  {
    "ticker": "LARK",
    "organization": "Landmark Bancorp",
    "industry": "Banks",
    "marketCap": "132.12M"
  },
  {
    "ticker": "LASR",
    "organization": "nLIGHT",
    "industry": " Inc.",
    "marketCap": "Electronic Equipment"
  },
  {
    "ticker": "LAUR",
    "organization": "Laureate Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "3.22B"
  },
  {
    "ticker": "LAW",
    "organization": "CS Disco",
    "industry": "Software-Application",
    "marketCap": "2.76B"
  },
  {
    "ticker": "LAWS",
    "organization": "Lawson Products",
    "industry": "Trading Companies & Distributors",
    "marketCap": "455.46M"
  },
  {
    "ticker": "LAZ",
    "organization": "Lazard",
    "industry": "Capital Markets",
    "marketCap": "4.85B"
  },
  {
    "ticker": "LAZR",
    "organization": "Luminar Technologies",
    "industry": "Software-Application",
    "marketCap": "5.49B"
  },
  {
    "ticker": "LAZY",
    "organization": "Lazydays Holdings",
    "industry": "Specialty Retail",
    "marketCap": "241.78M"
  },
  {
    "ticker": "LBAI",
    "organization": "Lakeland Bancorp",
    "industry": "Banks",
    "marketCap": "911.33M"
  },
  {
    "ticker": "LBC",
    "organization": "Luther Burbank",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "694.65M"
  },
  {
    "ticker": "LBPH",
    "organization": "Longboard Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "152.01M"
  },
  {
    "ticker": "LBPS",
    "organization": "4D pharma",
    "industry": "Biotechnology",
    "marketCap": "144.80M"
  },
  {
    "ticker": "LBRDA",
    "organization": "Liberty Broadband",
    "industry": "Media",
    "marketCap": "31.95B"
  },
  {
    "ticker": "LBRDK",
    "organization": "Liberty Broadband",
    "industry": "Media",
    "marketCap": "31.79B"
  },
  {
    "ticker": "LBRT",
    "organization": "Liberty Oilfield Services",
    "industry": "Energy Equipment & Services",
    "marketCap": "2.29B"
  },
  {
    "ticker": "LBTYA",
    "organization": "Liberty Global",
    "industry": "Media",
    "marketCap": "15.94B"
  },
  {
    "ticker": "LBTYB",
    "organization": "Liberty Global",
    "industry": "Media",
    "marketCap": "16.59B"
  },
  {
    "ticker": "LBTYK",
    "organization": "Liberty Global",
    "industry": "Media",
    "marketCap": "16.12B"
  },
  {
    "ticker": "LC",
    "organization": "LendingClub",
    "industry": "Consumer Finance",
    "marketCap": "2.76B"
  },
  {
    "ticker": "LCA",
    "organization": "Landcadia Holdings IV",
    "industry": "Shell Companies",
    "marketCap": "610.63M"
  },
  {
    "ticker": "LCAA",
    "organization": "L Catterton Asia Acquisition",
    "industry": "Shell Companies",
    "marketCap": "349.18M"
  },
  {
    "ticker": "LCAP",
    "organization": "Lionheart Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "291.35M"
  },
  {
    "ticker": "LCI",
    "organization": "Lannett Company",
    "industry": "Pharmaceuticals",
    "marketCap": "126.83M"
  },
  {
    "ticker": "LCID",
    "organization": "Lucid Group",
    "industry": "Auto Manufacturers",
    "marketCap": "39.96B"
  },
  {
    "ticker": "LCII",
    "organization": "LCI Industries",
    "industry": "Auto Components",
    "marketCap": "3.40B"
  },
  {
    "ticker": "LCNB",
    "organization": "LCNB Corporation",
    "industry": "Banks",
    "marketCap": "221.01M"
  },
  {
    "ticker": "LCTX",
    "organization": "Lineage Cell Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "433.72M"
  },
  {
    "ticker": "LCUT",
    "organization": "Lifetime Brands",
    "industry": "Household Durables",
    "marketCap": "400.30M"
  },
  {
    "ticker": "LDHA",
    "organization": "LDH Growth I",
    "industry": "Shell Companies",
    "marketCap": "280.60M"
  },
  {
    "ticker": "LDI",
    "organization": "loanDepot",
    "industry": "Mortgage Finance",
    "marketCap": "2.03B"
  },
  {
    "ticker": "LDOS",
    "organization": "Leidos Holdings",
    "industry": "IT Services",
    "marketCap": "13.79B"
  },
  {
    "ticker": "LE",
    "organization": "Lands' End",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "774.39M"
  },
  {
    "ticker": "LEA",
    "organization": "Lear Corporation",
    "industry": "Auto Components",
    "marketCap": "9.37B"
  },
  {
    "ticker": "LEAP",
    "organization": "Ribbit LEAP",
    "industry": "Shell Companies",
    "marketCap": "593.53M"
  },
  {
    "ticker": "LECO",
    "organization": "Lincoln Electric Holdings",
    "industry": "Machinery",
    "marketCap": "7.78B"
  },
  {
    "ticker": "LEDS",
    "organization": "SemiLEDs",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "34.40M"
  },
  {
    "ticker": "LEE",
    "organization": "Lee Enterprises",
    "industry": "Media",
    "marketCap": "135.33M"
  },
  {
    "ticker": "LEG",
    "organization": "Leggett & Platt",
    "industry": "Household Durables",
    "marketCap": "6.11B"
  },
  {
    "ticker": "LEGA",
    "organization": "Lead Edge Growth Opportunities",
    "industry": "Shell Companies",
    "marketCap": "290.97M"
  },
  {
    "ticker": "LEGH",
    "organization": "Legacy Housing",
    "industry": "Household Durables",
    "marketCap": "439.76M"
  },
  {
    "ticker": "LEGN",
    "organization": "Legend Biotech",
    "industry": "Biotechnology",
    "marketCap": "7.27B"
  },
  {
    "ticker": "LEGO",
    "organization": "Legato Merger Corp",
    "industry": "Shell Companies",
    "marketCap": "318.38M"
  },
  {
    "ticker": "LEJU",
    "organization": "Leju Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "150.48M"
  },
  {
    "ticker": "LEN",
    "organization": "Lennar",
    "industry": "Household Durables",
    "marketCap": "28.92B"
  },
  {
    "ticker": "LEN.B",
    "organization": "Lennar",
    "industry": "Construction & Engineering",
    "marketCap": "28.59B"
  },
  {
    "ticker": "LESL",
    "organization": "Leslie's",
    "industry": "Home Improvement Retail",
    "marketCap": "3.81B"
  },
  {
    "ticker": "LEU",
    "organization": "Centrus Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "LEV",
    "organization": "Lion Electric",
    "industry": "Farm & Heavy Construction Machinery",
    "marketCap": "2.31B"
  },
  {
    "ticker": "LEVI",
    "organization": "Levi Strauss & Co.",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "LEVL",
    "organization": "Level One Bancorp",
    "industry": "Banks",
    "marketCap": "224.88M"
  },
  {
    "ticker": "LEXX",
    "organization": "Lexaria Bioscience",
    "industry": "Biotechnology",
    "marketCap": "36.16M"
  },
  {
    "ticker": "LFC",
    "organization": "China Life Insurance",
    "industry": "Insurance",
    "marketCap": "107.70B"
  },
  {
    "ticker": "LFG",
    "organization": "Archaea Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "LFMD",
    "organization": "LifeMD",
    "industry": "Pharmaceutical Retailers",
    "marketCap": "170.19M"
  },
  {
    "ticker": "LFST",
    "organization": "Lifestance Health Group",
    "industry": "Medical Care Facilities",
    "marketCap": "5.25B"
  },
  {
    "ticker": "LFT",
    "organization": "Lument Finance Trust",
    "industry": "REIT-Mortgage",
    "marketCap": "99.29M"
  },
  {
    "ticker": "LFTR",
    "organization": "Lefteris Acquisition",
    "industry": "Shell Companies",
    "marketCap": "253.44M"
  },
  {
    "ticker": "LFUS",
    "organization": "Littelfuse",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "LFVN",
    "organization": "LifeVantage Corporation",
    "industry": "Personal Products",
    "marketCap": "93.14M"
  },
  {
    "ticker": "LGAC",
    "organization": "Lazard Growth Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "699.34M"
  },
  {
    "ticker": "LGF.A",
    "organization": "Lions Gate Entertainment",
    "industry": "Entertainment",
    "marketCap": "3.09B"
  },
  {
    "ticker": "LGF.B",
    "organization": "Lions Gate Entertainment",
    "industry": "Entertainment",
    "marketCap": "3.08B"
  },
  {
    "ticker": "LGHL",
    "organization": "Lion Group Holding",
    "industry": "Asset Management",
    "marketCap": "58.76M"
  },
  {
    "ticker": "LGIH",
    "organization": "LGI Homes",
    "industry": "Household Durables",
    "marketCap": "3.49B"
  },
  {
    "ticker": "LGL",
    "organization": "LGL Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "LGND",
    "organization": "Ligand Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "2.32B"
  },
  {
    "ticker": "LGO",
    "organization": "Largo Resources",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "656.03M"
  },
  {
    "ticker": "LGV",
    "organization": "Longview Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "855.60M"
  },
  {
    "ticker": "LGVN",
    "organization": "Longeveron",
    "industry": "Biotechnology",
    "marketCap": "69.77M"
  },
  {
    "ticker": "LH",
    "organization": "LabCorp",
    "industry": "Health Care Providers & Services",
    "marketCap": "26.78B"
  },
  {
    "ticker": "LHAA",
    "organization": "Lerer Hippeau Acquisition",
    "industry": "Shell Companies",
    "marketCap": "284.72M"
  },
  {
    "ticker": "LHC",
    "organization": "Leo Holdings II",
    "industry": "Shell Companies",
    "marketCap": "456.56M"
  },
  {
    "ticker": "LHCG",
    "organization": "LHC Group",
    "industry": "Health Care Providers & Services",
    "marketCap": "4.85B"
  },
  {
    "ticker": "LHDX",
    "organization": "Lucira Health",
    "industry": "Diagnostics & Research",
    "marketCap": "275.23M"
  },
  {
    "ticker": "LHX",
    "organization": "L3Harris Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "44.10B"
  },
  {
    "ticker": "LI",
    "organization": "Li Auto",
    "industry": "Automobiles",
    "marketCap": "27.96B"
  },
  {
    "ticker": "LICY",
    "organization": "Li-Cycle",
    "industry": "Waste Management",
    "marketCap": "1.96B"
  },
  {
    "ticker": "LIDR",
    "organization": "AEye",
    "industry": "Auto Parts",
    "marketCap": "789.78M"
  },
  {
    "ticker": "LIFE",
    "organization": "aTyr Pharma",
    "industry": "Biotechnology",
    "marketCap": "237.12M"
  },
  {
    "ticker": "LII",
    "organization": "Lennox International",
    "industry": "Building Products",
    "marketCap": "11.05B"
  },
  {
    "ticker": "LIII",
    "organization": "Leo Holdings III",
    "industry": "Shell Companies",
    "marketCap": "342.72M"
  },
  {
    "ticker": "LILA",
    "organization": "Liberty Latin America",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "3.06B"
  },
  {
    "ticker": "LILAK",
    "organization": "Liberty Latin America",
    "industry": "Media",
    "marketCap": "3.07B"
  },
  {
    "ticker": "LILM",
    "organization": "Lilium",
    "industry": "Aerospace & Defense",
    "marketCap": "2.82B"
  },
  {
    "ticker": "LIN",
    "organization": "Linde",
    "industry": "Chemicals",
    "marketCap": "153.81B"
  },
  {
    "ticker": "LINC",
    "organization": "Lincoln Educational Services",
    "industry": "Diversified Consumer Services",
    "marketCap": "181.79M"
  },
  {
    "ticker": "LIND",
    "organization": "Lindblad Expeditions",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "LIQT",
    "organization": "LiqTech International",
    "industry": "Machinery",
    "marketCap": "115.20M"
  },
  {
    "ticker": "LITB",
    "organization": "LightInTheBox",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "160.30M"
  },
  {
    "ticker": "LITE",
    "organization": "Lumentum Holdings",
    "industry": "Communications Equipment",
    "marketCap": "6.21B"
  },
  {
    "ticker": "LITT",
    "organization": "Logistics Innovation Technologies",
    "industry": "Shell Companies",
    "marketCap": "377.04M"
  },
  {
    "ticker": "LIVE",
    "organization": "Live Ventures",
    "industry": "Household Durables",
    "marketCap": "60.26M"
  },
  {
    "ticker": "LIVN",
    "organization": "LivaNova",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "4.20B"
  },
  {
    "ticker": "LIVX",
    "organization": "LiveXLive Media",
    "industry": "Entertainment",
    "marketCap": "237.39M"
  },
  {
    "ticker": "LIXT",
    "organization": "Lixte Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "28.87M"
  },
  {
    "ticker": "LIZI",
    "organization": "Lizhi Inc.",
    "industry": "Internet Content & Information",
    "marketCap": "158.38M"
  },
  {
    "ticker": "LJAQ",
    "organization": "LightJump Acquisition",
    "industry": "Shell Companies",
    "marketCap": "171.27M"
  },
  {
    "ticker": "LJPC",
    "organization": "La Jolla Pharmaceutical",
    "industry": "Biotechnology",
    "marketCap": "112.15M"
  },
  {
    "ticker": "LKCO",
    "organization": "Luokung Technology",
    "industry": "Interactive Media & Services",
    "marketCap": "443.59M"
  },
  {
    "ticker": "LKFN",
    "organization": "Lakeland Financial",
    "industry": "Banks",
    "marketCap": "1.80B"
  },
  {
    "ticker": "LKQ",
    "organization": "LKQ Corporation",
    "industry": "Distributors",
    "marketCap": "15.12B"
  },
  {
    "ticker": "LL",
    "organization": "Lumber Liquidators",
    "industry": "Specialty Retail",
    "marketCap": "537.72M"
  },
  {
    "ticker": "LLNW",
    "organization": "Limelight Networks",
    "industry": "IT Services",
    "marketCap": "318.22M"
  },
  {
    "ticker": "LLY",
    "organization": "Eli Lilly",
    "industry": "Pharmaceuticals",
    "marketCap": "219.68B"
  },
  {
    "ticker": "LMACA",
    "organization": "Liberty Media Acquisition",
    "industry": "Shell Companies",
    "marketCap": "723.06M"
  },
  {
    "ticker": "LMAO",
    "organization": "LMF Acquisition Opportunities",
    "industry": "Shell Companies",
    "marketCap": "130.67M"
  },
  {
    "ticker": "LMAT",
    "organization": "LeMaitre Vascular",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.16B"
  },
  {
    "ticker": "LMB",
    "organization": "Limbach Holdings",
    "industry": "Construction & Engineering",
    "marketCap": "65.71M"
  },
  {
    "ticker": "LMDX",
    "organization": "LumiraDx",
    "industry": "Shell Companies",
    "marketCap": "171.46M"
  },
  {
    "ticker": "LMFA",
    "organization": "LM Funding America",
    "industry": "Diversified Financial Services",
    "marketCap": "22.42M"
  },
  {
    "ticker": "LMND",
    "organization": "Lemonade",
    "industry": "Insurance",
    "marketCap": "3.98B"
  },
  {
    "ticker": "LMNL",
    "organization": "Liminal BioSciences",
    "industry": "Biotechnology",
    "marketCap": "65.88M"
  },
  {
    "ticker": "LMNR",
    "organization": "Limoneira",
    "industry": "Food Products",
    "marketCap": "281.02M"
  },
  {
    "ticker": "LMPX",
    "organization": "LMP Automotive Holdings",
    "industry": "Specialty Retail",
    "marketCap": "152.29M"
  },
  {
    "ticker": "LMRK",
    "organization": "Landmark Infrastructure Partners",
    "industry": "Real Estate Management & Development",
    "marketCap": "418.53M"
  },
  {
    "ticker": "LMST",
    "organization": "Limestone Bancorp",
    "industry": "Banks",
    "marketCap": "134.95M"
  },
  {
    "ticker": "LMT",
    "organization": "Lockheed Martin",
    "industry": "Aerospace & Defense",
    "marketCap": "96.31B"
  },
  {
    "ticker": "LNC",
    "organization": "Lincoln National",
    "industry": "Insurance",
    "marketCap": "12.93B"
  },
  {
    "ticker": "LND",
    "organization": "BrasilAgro",
    "industry": "Food Products",
    "marketCap": "572.53M"
  },
  {
    "ticker": "LNDC",
    "organization": "Landec",
    "industry": "Food Products",
    "marketCap": "271.64M"
  },
  {
    "ticker": "LNFA",
    "organization": "L&F Acquisition",
    "industry": "Shell Companies",
    "marketCap": "215.63M"
  },
  {
    "ticker": "LNG",
    "organization": "Cheniere Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "LNN",
    "organization": "Lindsay Corporation",
    "industry": "Machinery",
    "marketCap": "1.66B"
  },
  {
    "ticker": "LNSR",
    "organization": "LENSAR",
    "industry": " Inc",
    "marketCap": "Medical Devices"
  },
  {
    "ticker": "LNT",
    "organization": "Alliant Energy",
    "industry": "Electric Utilities",
    "marketCap": "13.96B"
  },
  {
    "ticker": "LNTH",
    "organization": "Lantheus Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.70B"
  },
  {
    "ticker": "LOAN",
    "organization": "Manhattan Bridge Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "78.96M"
  },
  {
    "ticker": "LOB",
    "organization": "Live Oak Bancshares",
    "industry": "Banks",
    "marketCap": "2.77B"
  },
  {
    "ticker": "LOCO",
    "organization": "El Pollo Loco",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "LODE",
    "organization": "Comstock Mining",
    "industry": "Metals & Mining",
    "marketCap": "141.35M"
  },
  {
    "ticker": "LOGC",
    "organization": "LogicBio Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "146.05M"
  },
  {
    "ticker": "LOGI",
    "organization": "Logitech International",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "LOKB",
    "organization": "Live Oak Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "315.30M"
  },
  {
    "ticker": "LOKM",
    "organization": "Live Oak Mobility Acquisition",
    "industry": "Shell Companies",
    "marketCap": "305.81M"
  },
  {
    "ticker": "LOMA",
    "organization": "Loma Negra",
    "industry": "Construction Materials",
    "marketCap": "1.67B"
  },
  {
    "ticker": "LOOP",
    "organization": "Loop Industries",
    "industry": "Chemicals",
    "marketCap": "547.53M"
  },
  {
    "ticker": "LOPE",
    "organization": "Grand Canyon Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "3.94B"
  },
  {
    "ticker": "LORL",
    "organization": "Loral Space & Communications",
    "industry": "Media",
    "marketCap": "1.35B"
  },
  {
    "ticker": "LOTZ",
    "organization": "CarLotz",
    "industry": "Auto & Truck Dealerships",
    "marketCap": "424.56M"
  },
  {
    "ticker": "LOV",
    "organization": "Spark Networks SE",
    "industry": "Interactive Media & Services",
    "marketCap": "90.16M"
  },
  {
    "ticker": "LOVE",
    "organization": "Lovesac",
    "industry": "Household Durables",
    "marketCap": "999.18M"
  },
  {
    "ticker": "LOW",
    "organization": "Lowe's",
    "industry": "Specialty Retail",
    "marketCap": "141.86B"
  },
  {
    "ticker": "LPCN",
    "organization": "Lipocine",
    "industry": "Pharmaceuticals",
    "marketCap": "93.74M"
  },
  {
    "ticker": "LPG",
    "organization": "Dorian LPG",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "LPI",
    "organization": "Laredo Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "LPL",
    "organization": "LG Display",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "LPLA",
    "organization": "LPL Financial Holdings",
    "industry": "Capital Markets",
    "marketCap": "12.85B"
  },
  {
    "ticker": "LPRO",
    "organization": "Open Lending Corp.",
    "industry": "Capital Markets",
    "marketCap": "4.47B"
  },
  {
    "ticker": "LPSN",
    "organization": "LivePerson",
    "industry": "Software",
    "marketCap": "4.22B"
  },
  {
    "ticker": "LPTH",
    "organization": "LightPath Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "LPTX",
    "organization": "Leap Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "335.14M"
  },
  {
    "ticker": "LPX",
    "organization": "Louisiana-Pacific",
    "industry": "Paper & Forest Products",
    "marketCap": "5.84B"
  },
  {
    "ticker": "LQDA",
    "organization": "Liquidia Technologies",
    "industry": "Pharmaceuticals",
    "marketCap": "142.93M"
  },
  {
    "ticker": "LQDT",
    "organization": "Liquidity Services",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "748.50M"
  },
  {
    "ticker": "LRCX",
    "organization": "Lam Research",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "80.22B"
  },
  {
    "ticker": "LRFC",
    "organization": "Logan Ridge Finance",
    "industry": "Asset Management",
    "marketCap": "70.73M"
  },
  {
    "ticker": "LRMR",
    "organization": "Larimar Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "201.90M"
  },
  {
    "ticker": "LRN",
    "organization": "Stride",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.49B"
  },
  {
    "ticker": "LSAQ",
    "organization": "LifeSci Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "96.71M"
  },
  {
    "ticker": "LSBK",
    "organization": "Lake Shore Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "86.39M"
  },
  {
    "ticker": "LSCC",
    "organization": "Lattice Semiconductor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "8.98B"
  },
  {
    "ticker": "LSEA",
    "organization": "Landsea Homes",
    "industry": "Real Estate-Development",
    "marketCap": "404.50M"
  },
  {
    "ticker": "LSF",
    "organization": "Laird Superfood",
    "industry": "Packaged Foods",
    "marketCap": "171.73M"
  },
  {
    "ticker": "LSI",
    "organization": "Life Storage",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "9.40B"
  },
  {
    "ticker": "LSPD",
    "organization": "Lightspeed Commerce",
    "industry": "Software",
    "marketCap": "13.75B"
  },
  {
    "ticker": "LSTR",
    "organization": "Landstar System",
    "industry": "Road & Rail",
    "marketCap": "6.00B"
  },
  {
    "ticker": "LTBR",
    "organization": "Lightbridge",
    "industry": "Professional Services",
    "marketCap": "31.40M"
  },
  {
    "ticker": "LTC",
    "organization": "LTC Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.26B"
  },
  {
    "ticker": "LTCH",
    "organization": "Latch",
    "industry": "Software-Application",
    "marketCap": "1.54B"
  },
  {
    "ticker": "LTHM",
    "organization": "Livent",
    "industry": "Chemicals",
    "marketCap": "3.83B"
  },
  {
    "ticker": "LTRN",
    "organization": "Lantern Pharma",
    "industry": "Biotechnology",
    "marketCap": "119.67M"
  },
  {
    "ticker": "LTRPA",
    "organization": "Liberty TripAdvisor Holdings",
    "industry": "Interactive Media & Services",
    "marketCap": "364.99M"
  },
  {
    "ticker": "LTRPB",
    "organization": "Liberty TripAdvisor Holdings",
    "industry": "Interactive Media & Services",
    "marketCap": "320.56M"
  },
  {
    "ticker": "LTRX",
    "organization": "Lantronix",
    "industry": "Communications Equipment",
    "marketCap": "178.71M"
  },
  {
    "ticker": "LU",
    "organization": "Lufax Holding",
    "industry": "Consumer Finance",
    "marketCap": "17.48B"
  },
  {
    "ticker": "LUB",
    "organization": "Luby's",
    "industry": " Inc.",
    "marketCap": "Hotels"
  },
  {
    "ticker": "LULU",
    "organization": "Lululemon Athletica",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "LUMN",
    "organization": "Lumen Technologies",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "13.92B"
  },
  {
    "ticker": "LUMO",
    "organization": "Lumos Pharma",
    "industry": "Biotechnology",
    "marketCap": "80.15M"
  },
  {
    "ticker": "LUNA",
    "organization": "Luna Innovations",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "LUNG",
    "organization": "Pulmonx",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.39B"
  },
  {
    "ticker": "LUV",
    "organization": "Southwest Airlines",
    "industry": "Airlines",
    "marketCap": "31.45B"
  },
  {
    "ticker": "LUXA",
    "organization": "Lux Health Tech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "423.49M"
  },
  {
    "ticker": "LVOX",
    "organization": "LiveVox",
    "industry": "Software-Infrastructure",
    "marketCap": "660.03M"
  },
  {
    "ticker": "LVRA",
    "organization": "Levere Holdings",
    "industry": "Shell Companies",
    "marketCap": "329.73M"
  },
  {
    "ticker": "LVS",
    "organization": "Las Vegas Sands",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "LVTX",
    "organization": "LAVA Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "151.04M"
  },
  {
    "ticker": "LW",
    "organization": "Lamb Weston",
    "industry": "Food Products",
    "marketCap": "9.02B"
  },
  {
    "ticker": "LWAY",
    "organization": "Lifeway Foods",
    "industry": "Food Products",
    "marketCap": "85.05M"
  },
  {
    "ticker": "LWLG",
    "organization": "Lightwave Logic",
    "industry": "Chemicals",
    "marketCap": "1.12B"
  },
  {
    "ticker": "LX",
    "organization": "LexinFintech Holdings",
    "industry": "Consumer Finance",
    "marketCap": "1.06B"
  },
  {
    "ticker": "LXEH",
    "organization": "Lixiang Education",
    "industry": "Education & Training Services",
    "marketCap": "104.99M"
  },
  {
    "ticker": "LXFR",
    "organization": "Luxfer Holdings",
    "industry": "Machinery",
    "marketCap": "554.97M"
  },
  {
    "ticker": "LXP",
    "organization": "Lexington Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.64B"
  },
  {
    "ticker": "LXRX",
    "organization": "Lexicon Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "696.36M"
  },
  {
    "ticker": "LXU",
    "organization": "LSB Industries",
    "industry": "Chemicals",
    "marketCap": "930.97M"
  },
  {
    "ticker": "LYB",
    "organization": "LyondellBasell Industries",
    "industry": "Chemicals",
    "marketCap": "32.05B"
  },
  {
    "ticker": "LYEL",
    "organization": "Lyell Immunopharma",
    "industry": "Biotechnology",
    "marketCap": "3.26B"
  },
  {
    "ticker": "LYFT",
    "organization": "Lyft",
    "industry": "Road & Rail",
    "marketCap": "18.60B"
  },
  {
    "ticker": "LYG",
    "organization": "Lloyds Banking Group",
    "industry": "Banks",
    "marketCap": "44.21B"
  },
  {
    "ticker": "LYL",
    "organization": "Dragon Victory International",
    "industry": "Consumer Finance",
    "marketCap": "27.82M"
  },
  {
    "ticker": "LYRA",
    "organization": "Lyra Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "122.34M"
  },
  {
    "ticker": "LYTS",
    "organization": "LSI Industries",
    "industry": "Electrical Equipment",
    "marketCap": "209.70M"
  },
  {
    "ticker": "LYV",
    "organization": "Live Nation Entertainment",
    "industry": "Entertainment",
    "marketCap": "22.14B"
  },
  {
    "ticker": "LZ",
    "organization": "LegalZoom.com",
    "industry": "Consulting Services",
    "marketCap": "4.99B"
  },
  {
    "ticker": "LZB",
    "organization": "La-Z-Boy Incorporated",
    "industry": "Household Durables",
    "marketCap": "1.42B"
  },
  {
    "ticker": "M",
    "organization": "Macy's",
    "industry": "Multiline Retail",
    "marketCap": "7.03B"
  },
  {
    "ticker": "MA",
    "organization": "Mastercard",
    "industry": "IT Services",
    "marketCap": "350.02B"
  },
  {
    "ticker": "MAA",
    "organization": "Mid-America Apartment Communities",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "21.75B"
  },
  {
    "ticker": "MAC",
    "organization": "Macerich",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.71B"
  },
  {
    "ticker": "MACA",
    "organization": "Moringa Acquisition",
    "industry": "Shell Companies",
    "marketCap": "260.30M"
  },
  {
    "ticker": "MACC",
    "organization": "Mission Advancement",
    "industry": "Shell Companies",
    "marketCap": "97.20M"
  },
  {
    "ticker": "MACK",
    "organization": "Merrimack Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "64.64M"
  },
  {
    "ticker": "MACQ",
    "organization": "MCAP Acquisition",
    "industry": "Shell Companies",
    "marketCap": "27.11M"
  },
  {
    "ticker": "MACU",
    "organization": "Mallard Acquisition",
    "industry": "Shell Companies",
    "marketCap": "137.50M"
  },
  {
    "ticker": "MAG",
    "organization": "MAG Silver",
    "industry": "Metals & Mining",
    "marketCap": "1.55B"
  },
  {
    "ticker": "MAIN",
    "organization": "Main Street Capital",
    "industry": "Capital Markets",
    "marketCap": "2.84B"
  },
  {
    "ticker": "MAN",
    "organization": "ManpowerGroup",
    "industry": "Professional Services",
    "marketCap": "6.05B"
  },
  {
    "ticker": "MANH",
    "organization": "Manhattan Associates",
    "industry": "Software",
    "marketCap": "9.84B"
  },
  {
    "ticker": "MANT",
    "organization": "ManTech International",
    "industry": "IT Services",
    "marketCap": "3.13B"
  },
  {
    "ticker": "MANU",
    "organization": "Manchester United",
    "industry": "Entertainment",
    "marketCap": "3.22B"
  },
  {
    "ticker": "MAPS",
    "organization": "WM Technology",
    "industry": "Software-Application",
    "marketCap": "1.92B"
  },
  {
    "ticker": "MAQC",
    "organization": "Maquia Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "259.03M"
  },
  {
    "ticker": "MAR",
    "organization": "Marriott International",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MARA",
    "organization": "Marathon Digital Holdings",
    "industry": "IT Services",
    "marketCap": "3.30B"
  },
  {
    "ticker": "MARK",
    "organization": "Remark Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "103.40M"
  },
  {
    "ticker": "MARPS",
    "organization": "Marine Petroleum Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MAS",
    "organization": "Masco",
    "industry": "Building Products",
    "marketCap": "13.74B"
  },
  {
    "ticker": "MASI",
    "organization": "Masimo",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "14.83B"
  },
  {
    "ticker": "MASS",
    "organization": "908 Devices",
    "industry": "Medical Devices",
    "marketCap": "924.59M"
  },
  {
    "ticker": "MAT",
    "organization": "Mattel",
    "industry": "Leisure Products",
    "marketCap": "6.53B"
  },
  {
    "ticker": "MATW",
    "organization": "Matthews International",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.11B"
  },
  {
    "ticker": "MATX",
    "organization": "Matson",
    "industry": "Marine",
    "marketCap": "3.51B"
  },
  {
    "ticker": "MAX",
    "organization": "MediaAlpha",
    "industry": "Internet Content & Information",
    "marketCap": "699.60M"
  },
  {
    "ticker": "MAXN",
    "organization": "Maxeon Solar Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "779.19M"
  },
  {
    "ticker": "MAXR",
    "organization": "Maxar Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "2.07B"
  },
  {
    "ticker": "MAYS",
    "organization": "J.W. Mays",
    "industry": "Real Estate Management & Development",
    "marketCap": "74.81M"
  },
  {
    "ticker": "MBAC",
    "organization": "M3-Brigade Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "495.95M"
  },
  {
    "ticker": "MBCN",
    "organization": "Middlefield Banc",
    "industry": "Banks",
    "marketCap": "147.40M"
  },
  {
    "ticker": "MBI",
    "organization": "MBIA Inc.",
    "industry": "Insurance",
    "marketCap": "702.14M"
  },
  {
    "ticker": "MBII",
    "organization": "Marrone Bio Innovations",
    "industry": "Chemicals",
    "marketCap": "171.38M"
  },
  {
    "ticker": "MBIN",
    "organization": "Merchants Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.16B"
  },
  {
    "ticker": "MBIO",
    "organization": "Mustang Bio",
    "industry": "Biotechnology",
    "marketCap": "242.22M"
  },
  {
    "ticker": "MBOT",
    "organization": "Microbot Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "50.36M"
  },
  {
    "ticker": "MBRX",
    "organization": "Moleculin Biotech",
    "industry": "Biotechnology",
    "marketCap": "84.44M"
  },
  {
    "ticker": "MBT",
    "organization": "Mobile TeleSystems PJSC",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "8.35B"
  },
  {
    "ticker": "MBTC",
    "organization": "Nocturne Acquisition",
    "industry": "Shell Companies",
    "marketCap": "148.25M"
  },
  {
    "ticker": "MBUU",
    "organization": "Malibu Boats",
    "industry": "Leisure Products",
    "marketCap": "1.51B"
  },
  {
    "ticker": "MBWM",
    "organization": "Mercantile Bank",
    "industry": "Banks",
    "marketCap": "520.97M"
  },
  {
    "ticker": "MC",
    "organization": "Moelis & Company",
    "industry": "Capital Markets",
    "marketCap": "4.47B"
  },
  {
    "ticker": "MCAD",
    "organization": "Mountain Crest Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "75.42M"
  },
  {
    "ticker": "MCAE",
    "organization": "Mountain Crest Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "69.13M"
  },
  {
    "ticker": "MCAF",
    "organization": "Mountain Crest Acquisition IV",
    "industry": "Shell Companies",
    "marketCap": "69.25M"
  },
  {
    "ticker": "MCB",
    "organization": "Metropolitan Bank Holding",
    "industry": "Banks",
    "marketCap": "877.55M"
  },
  {
    "ticker": "MCBC",
    "organization": "Macatawa Bank",
    "industry": "Banks",
    "marketCap": "274.56M"
  },
  {
    "ticker": "MCBS",
    "organization": "MetroCity Bankshares",
    "industry": "Banks",
    "marketCap": "538.78M"
  },
  {
    "ticker": "MCD",
    "organization": "McDonald's",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MCF",
    "organization": "Contango Oil & Gas",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MCFE",
    "organization": "McAfee",
    "industry": "Software",
    "marketCap": "9.56B"
  },
  {
    "ticker": "MCFT",
    "organization": "MasterCraft Boat Holdings",
    "industry": "Leisure Products",
    "marketCap": "477.47M"
  },
  {
    "ticker": "MCG",
    "organization": "Membership Collective Group",
    "industry": "Lodging",
    "marketCap": "2.61B"
  },
  {
    "ticker": "MCHP",
    "organization": "Microchip Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "41.85B"
  },
  {
    "ticker": "MCHX",
    "organization": "Marchex",
    "industry": "Media",
    "marketCap": "123.63M"
  },
  {
    "ticker": "MCK",
    "organization": "McKesson",
    "industry": "Health Care Providers & Services",
    "marketCap": "30.90B"
  },
  {
    "ticker": "MCMJ",
    "organization": "Merida Merger Corp. I",
    "industry": "Shell Companies",
    "marketCap": "163.56M"
  },
  {
    "ticker": "MCO",
    "organization": "Moody's",
    "industry": "Capital Markets",
    "marketCap": "66.12B"
  },
  {
    "ticker": "MCRB",
    "organization": "Seres Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "664.04M"
  },
  {
    "ticker": "MCRI",
    "organization": "Monarch Casino & Resort",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MCS",
    "organization": "Marcus Corporation",
    "industry": "Entertainment",
    "marketCap": "564.56M"
  },
  {
    "ticker": "MCW",
    "organization": "Mister Car Wash",
    "industry": "Personal Services",
    "marketCap": "5.59B"
  },
  {
    "ticker": "MCY",
    "organization": "Mercury General",
    "industry": "Insurance",
    "marketCap": "3.08B"
  },
  {
    "ticker": "MD",
    "organization": "MEDNAX",
    "industry": " Inc.",
    "marketCap": "Health Care Providers & Services"
  },
  {
    "ticker": "MDB",
    "organization": "MongoDB",
    "industry": "IT Services",
    "marketCap": "31.06B"
  },
  {
    "ticker": "MDC",
    "organization": "M.D.C. Holdings",
    "industry": "Household Durables",
    "marketCap": "3.31B"
  },
  {
    "ticker": "MDGL",
    "organization": "Madrigal Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.32B"
  },
  {
    "ticker": "MDGS",
    "organization": "Medigus",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "37.55M"
  },
  {
    "ticker": "MDH",
    "organization": "MDH Acquisition",
    "industry": "Shell Companies",
    "marketCap": "340.17M"
  },
  {
    "ticker": "MDIA",
    "organization": "Mediaco Holding",
    "industry": "Broadcasting",
    "marketCap": "88.80M"
  },
  {
    "ticker": "MDJH",
    "organization": "MDJM Ltd.",
    "industry": "Real Estate Management & Development",
    "marketCap": "49.39M"
  },
  {
    "ticker": "MDLA",
    "organization": "Medallia",
    "industry": "Software",
    "marketCap": "5.46B"
  },
  {
    "ticker": "MDLZ",
    "organization": "Mondelez International",
    "industry": "Food Products",
    "marketCap": "81.51B"
  },
  {
    "ticker": "MDNA",
    "organization": "Medicenna Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "149.07M"
  },
  {
    "ticker": "MDP",
    "organization": "Meredith Corporation",
    "industry": "Media",
    "marketCap": "2.57B"
  },
  {
    "ticker": "MDRR",
    "organization": "Medalist Diversified REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "19.52M"
  },
  {
    "ticker": "MDRX",
    "organization": "Allscripts Healthcare Solutions",
    "industry": "Health Care Technology",
    "marketCap": "1.69B"
  },
  {
    "ticker": "MDT",
    "organization": "Medtronic",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "171.50B"
  },
  {
    "ticker": "MDU",
    "organization": "MDU Resources Group",
    "industry": "Multi-Utilities",
    "marketCap": "6.06B"
  },
  {
    "ticker": "MDVL",
    "organization": "MedAvail",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "96.27M"
  },
  {
    "ticker": "MDWD",
    "organization": "MediWound",
    "industry": "Pharmaceuticals",
    "marketCap": "91.00M"
  },
  {
    "ticker": "MDWT",
    "organization": "Midwest Holding",
    "industry": "Insurance-Life",
    "marketCap": "146.77M"
  },
  {
    "ticker": "MDXG",
    "organization": "MiMedx Group",
    "industry": "Biotechnology",
    "marketCap": "667.22M"
  },
  {
    "ticker": "ME",
    "organization": "23andMe",
    "industry": "Diagnostics & Research",
    "marketCap": "3.62B"
  },
  {
    "ticker": "MEAC",
    "organization": "Mercury Ecommerce Acquisition",
    "industry": "Shell Companies",
    "marketCap": "214.38M"
  },
  {
    "ticker": "MEC",
    "organization": "Mayville Engineering",
    "industry": "Metals & Mining",
    "marketCap": "376.35M"
  },
  {
    "ticker": "MED",
    "organization": "Medifast",
    "industry": "Personal Products",
    "marketCap": "2.28B"
  },
  {
    "ticker": "MEDP",
    "organization": "Medpace Holdings",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "6.61B"
  },
  {
    "ticker": "MEDS",
    "organization": "Trxade Group",
    "industry": "Pharmaceutical Retailers",
    "marketCap": "40.32M"
  },
  {
    "ticker": "MEG",
    "organization": "Montrose Environmental Group",
    "industry": "Media (discontinued effective close o...",
    "marketCap": "1.61B"
  },
  {
    "ticker": "MEI",
    "organization": "Methode Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "MEIP",
    "organization": "MEI Pharma",
    "industry": "Biotechnology",
    "marketCap": "296.34M"
  },
  {
    "ticker": "MEKA",
    "organization": "MELI Kaszek Pioneer",
    "industry": "Blank Checks / SPAC",
    "marketCap": "407.00M"
  },
  {
    "ticker": "MELI",
    "organization": "MercadoLibre",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "82.90B"
  },
  {
    "ticker": "MEOH",
    "organization": "Methanex",
    "industry": "Chemicals",
    "marketCap": "3.70B"
  },
  {
    "ticker": "MERC",
    "organization": "Mercer International",
    "industry": "Paper & Forest Products",
    "marketCap": "771.98M"
  },
  {
    "ticker": "MESA",
    "organization": "Mesa Air Group",
    "industry": "Airlines",
    "marketCap": "289.28M"
  },
  {
    "ticker": "MESO",
    "organization": "Mesoblast",
    "industry": "Biotechnology",
    "marketCap": "773.99M"
  },
  {
    "ticker": "MET",
    "organization": "MetLife",
    "industry": "Insurance",
    "marketCap": "53.57B"
  },
  {
    "ticker": "METC",
    "organization": "Ramaco Resources",
    "industry": "Metals & Mining",
    "marketCap": "590.40M"
  },
  {
    "ticker": "METX",
    "organization": "Meten Edtechx Education",
    "industry": "Education & Training Services",
    "marketCap": "45.82M"
  },
  {
    "ticker": "MF",
    "organization": "Missfresh",
    "industry": "Grocery Stores",
    "marketCap": "958.29M"
  },
  {
    "ticker": "MFA",
    "organization": "MFA Financial",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "2.04B"
  },
  {
    "ticker": "MFC",
    "organization": "Manulife Financial",
    "industry": "Insurance",
    "marketCap": "37.74B"
  },
  {
    "ticker": "MFG",
    "organization": "Mizuho Financial Group",
    "industry": "Banks",
    "marketCap": "35.49B"
  },
  {
    "ticker": "MFGP",
    "organization": "Micro Focus International",
    "industry": "Software",
    "marketCap": "1.87B"
  },
  {
    "ticker": "MFH",
    "organization": "Mercurity Fintech Holding",
    "industry": "Software",
    "marketCap": "22.67M"
  },
  {
    "ticker": "MFIN",
    "organization": "Medallion Financial",
    "industry": "Consumer Finance",
    "marketCap": "196.48M"
  },
  {
    "ticker": "MG",
    "organization": "MISTRAS Group",
    "industry": "Professional Services",
    "marketCap": "299.03M"
  },
  {
    "ticker": "MGA",
    "organization": "Magna International",
    "industry": "Auto Components",
    "marketCap": "22.95B"
  },
  {
    "ticker": "MGEE",
    "organization": "MGE Energy",
    "industry": "Electric Utilities",
    "marketCap": "2.67B"
  },
  {
    "ticker": "MGI",
    "organization": "MoneyGram International",
    "industry": "IT Services",
    "marketCap": "729.30M"
  },
  {
    "ticker": "MGIC",
    "organization": "Magic Software Enterprises",
    "industry": "Software",
    "marketCap": "974.33M"
  },
  {
    "ticker": "MGLN",
    "organization": "Magellan Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "2.48B"
  },
  {
    "ticker": "MGM",
    "organization": "MGM Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MGNI",
    "organization": "Magnite",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "3.73B"
  },
  {
    "ticker": "MGNX",
    "organization": "MacroGenics",
    "industry": "Biotechnology",
    "marketCap": "1.27B"
  },
  {
    "ticker": "MGP",
    "organization": "MGM Growth Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.05B"
  },
  {
    "ticker": "MGPI",
    "organization": "MGP Ingredients",
    "industry": "Beverages",
    "marketCap": "1.45B"
  },
  {
    "ticker": "MGRC",
    "organization": "McGrath RentCorp",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.74B"
  },
  {
    "ticker": "MGTA",
    "organization": "Magenta Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "426.37M"
  },
  {
    "ticker": "MGTX",
    "organization": "MeiraGTx Holdings",
    "industry": "Biotechnology",
    "marketCap": "589.83M"
  },
  {
    "ticker": "MGY",
    "organization": "Magnolia Oil & Gas",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MGYR",
    "organization": "Magyar Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "81.13M"
  },
  {
    "ticker": "MHH",
    "organization": "Mastech Digital",
    "industry": "Professional Services",
    "marketCap": "201.19M"
  },
  {
    "ticker": "MHK",
    "organization": "Mohawk Industries",
    "industry": "Household Durables",
    "marketCap": "12.45B"
  },
  {
    "ticker": "MHLD",
    "organization": "Maiden Holdings",
    "industry": "Insurance",
    "marketCap": "275.25M"
  },
  {
    "ticker": "MHO",
    "organization": "M/I Homes",
    "industry": "Household Durables",
    "marketCap": "1.70B"
  },
  {
    "ticker": "MIC",
    "organization": "Macquarie Infrastructure",
    "industry": "Transportation Infrastructure",
    "marketCap": "3.57B"
  },
  {
    "ticker": "MICT",
    "organization": "MICT",
    "industry": " Inc.",
    "marketCap": "Aerospace & Defense"
  },
  {
    "ticker": "MIDD",
    "organization": "Middleby Corporation",
    "industry": "Machinery",
    "marketCap": "9.53B"
  },
  {
    "ticker": "MIGI",
    "organization": "Mawson Infrastructure Group",
    "industry": "Biotechnology",
    "marketCap": "524.10M"
  },
  {
    "ticker": "MILE",
    "organization": "Metromile",
    "industry": "Insurance-Property & Casualty",
    "marketCap": "452.35M"
  },
  {
    "ticker": "MIME",
    "organization": "Mimecast",
    "industry": "Software",
    "marketCap": "4.23B"
  },
  {
    "ticker": "MIMO",
    "organization": "Airspan Networks",
    "industry": "Telecom Services",
    "marketCap": "471.76M"
  },
  {
    "ticker": "MIND",
    "organization": "MIND Technology",
    "industry": "Energy Equipment & Services",
    "marketCap": "26.03M"
  },
  {
    "ticker": "MINM",
    "organization": "Minim",
    "industry": "Communication Equipment",
    "marketCap": "85.70M"
  },
  {
    "ticker": "MIRM",
    "organization": "Mirum Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "590.48M"
  },
  {
    "ticker": "MIRO",
    "organization": "Miromatrix Medical",
    "industry": "Biotechnology",
    "marketCap": "140.25M"
  },
  {
    "ticker": "MIST",
    "organization": "Milestone Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "168.33M"
  },
  {
    "ticker": "MIT",
    "organization": "Mason Industrial Technology",
    "industry": "Shell Companies",
    "marketCap": "608.75M"
  },
  {
    "ticker": "MITA",
    "organization": "Coliseum Acquisition",
    "industry": "Shell Companies",
    "marketCap": "182.44M"
  },
  {
    "ticker": "MITC",
    "organization": "Meat-Tech 3D",
    "industry": "Packaged Foods",
    "marketCap": "98.07M"
  },
  {
    "ticker": "MITK",
    "organization": "Mitek Systems",
    "industry": "Software",
    "marketCap": "814.45M"
  },
  {
    "ticker": "MITO",
    "organization": "Stealth BioTherapeutics",
    "industry": "Biotechnology",
    "marketCap": "76.59M"
  },
  {
    "ticker": "MITQ",
    "organization": "Moving iMage Technologies",
    "industry": "n/a",
    "marketCap": "25.58M"
  },
  {
    "ticker": "MITT",
    "organization": "AG Mortgage Investment Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "186.44M"
  },
  {
    "ticker": "MIXT",
    "organization": "MiX Telematics",
    "industry": "Software",
    "marketCap": "302.26M"
  },
  {
    "ticker": "MKC",
    "organization": "McCormick",
    "industry": "Food Products",
    "marketCap": "21.63B"
  },
  {
    "ticker": "MKC.V",
    "organization": "McCormick",
    "industry": "Packaged Foods",
    "marketCap": "21.27B"
  },
  {
    "ticker": "MKD",
    "organization": "Molecular Data",
    "industry": "Chemicals",
    "marketCap": "66.69M"
  },
  {
    "ticker": "MKFG",
    "organization": "Markforged",
    "industry": "Computer Hardware",
    "marketCap": "1.17B"
  },
  {
    "ticker": "MKL",
    "organization": "Markel",
    "industry": "Insurance",
    "marketCap": "16.47B"
  },
  {
    "ticker": "MKSI",
    "organization": "MKS Instruments",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "8.40B"
  },
  {
    "ticker": "MKTW",
    "organization": "MarketWise",
    "industry": "Software-Application",
    "marketCap": "2.51B"
  },
  {
    "ticker": "MKTX",
    "organization": "MarketAxess Holdings",
    "industry": "Capital Markets",
    "marketCap": "15.99B"
  },
  {
    "ticker": "MKTY",
    "organization": "Mechanical Technology",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ML",
    "organization": "MoneyLion",
    "industry": "n/a",
    "marketCap": "1.49B"
  },
  {
    "ticker": "MLAB",
    "organization": "Mesa Laboratories",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.60B"
  },
  {
    "ticker": "MLAC",
    "organization": "Malacca Straits Acquisition",
    "industry": "Shell Companies",
    "marketCap": "178.61M"
  },
  {
    "ticker": "MLCO",
    "organization": "Melco Resorts & Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MLHR",
    "organization": "Herman Miller",
    "industry": "Commercial Services & Supplies",
    "marketCap": "2.96B"
  },
  {
    "ticker": "MLI",
    "organization": "Mueller Industries",
    "industry": "Machinery",
    "marketCap": "2.40B"
  },
  {
    "ticker": "MLM",
    "organization": "Martin Marietta",
    "industry": "Construction Materials",
    "marketCap": "21.31B"
  },
  {
    "ticker": "MLNK",
    "organization": "MeridianLink",
    "industry": "Software-Application",
    "marketCap": "1.97B"
  },
  {
    "ticker": "MLP",
    "organization": "Maui Land & Pineapple",
    "industry": "Real Estate Management & Development",
    "marketCap": "200.49M"
  },
  {
    "ticker": "MLR",
    "organization": "Miller Industries",
    "industry": "Machinery",
    "marketCap": "392.76M"
  },
  {
    "ticker": "MLSS",
    "organization": "Milestone Scientific",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "126.27M"
  },
  {
    "ticker": "MLVF",
    "organization": "Malvern Bancorp",
    "industry": "Banks",
    "marketCap": "129.50M"
  },
  {
    "ticker": "MMAT",
    "organization": "Meta Materials",
    "industry": "Electronic Components",
    "marketCap": "1.55B"
  },
  {
    "ticker": "MMC",
    "organization": "Marsh & McLennan",
    "industry": "Insurance",
    "marketCap": "78.09B"
  },
  {
    "ticker": "MMI",
    "organization": "Marcus & Millichap",
    "industry": "Real Estate Management & Development",
    "marketCap": "1.64B"
  },
  {
    "ticker": "MMLP",
    "organization": "Martin Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MMM",
    "organization": "3M Company",
    "industry": "Industrial Conglomerates",
    "marketCap": "102.45B"
  },
  {
    "ticker": "MMMB",
    "organization": "MamaMancini's Holdings",
    "industry": "Food Products",
    "marketCap": "86.10M"
  },
  {
    "ticker": "MMP",
    "organization": "Magellan Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MMS",
    "organization": "Maximus",
    "industry": "IT Services",
    "marketCap": "5.18B"
  },
  {
    "ticker": "MMSI",
    "organization": "Merit Medical Systems",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "4.07B"
  },
  {
    "ticker": "MMX",
    "organization": "Maverix Metals",
    "industry": "Metals & Mining",
    "marketCap": "647.55M"
  },
  {
    "ticker": "MMYT",
    "organization": "MakeMyTrip",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "2.87B"
  },
  {
    "ticker": "MN",
    "organization": "Manning & Napier",
    "industry": "Capital Markets",
    "marketCap": "170.53M"
  },
  {
    "ticker": "MNDO",
    "organization": "MIND CTI Ltd.",
    "industry": "Software",
    "marketCap": "63.75M"
  },
  {
    "ticker": "MNDY",
    "organization": "monday.com",
    "industry": "Software-Application",
    "marketCap": "14.51B"
  },
  {
    "ticker": "MNKD",
    "organization": "MannKind Corporation",
    "industry": "Biotechnology",
    "marketCap": "1.12B"
  },
  {
    "ticker": "MNMD",
    "organization": "MindMed",
    "industry": "Biotechnology",
    "marketCap": "892.59M"
  },
  {
    "ticker": "MNOV",
    "organization": "MediciNova",
    "industry": "Biotechnology",
    "marketCap": "188.53M"
  },
  {
    "ticker": "MNPR",
    "organization": "Monopar Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "57.88M"
  },
  {
    "ticker": "MNR",
    "organization": "Monmouth Real Estate Investment",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.84B"
  },
  {
    "ticker": "MNRL",
    "organization": "Brigham Minerals",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MNRO",
    "organization": "Monro",
    "industry": " Inc.",
    "marketCap": "Specialty Retail"
  },
  {
    "ticker": "MNSB",
    "organization": "MainStreet Bancshares",
    "industry": "Banks",
    "marketCap": "181.29M"
  },
  {
    "ticker": "MNSO",
    "organization": "Miniso Group",
    "industry": "Specialty Retail",
    "marketCap": "4.67B"
  },
  {
    "ticker": "MNST",
    "organization": "Monster Beverage",
    "industry": "Beverages",
    "marketCap": "47.54B"
  },
  {
    "ticker": "MNTK",
    "organization": "Montauk Renewables",
    "industry": "Utilities-Diversified",
    "marketCap": "1.70B"
  },
  {
    "ticker": "MNTS",
    "organization": "Momentus",
    "industry": "Aerospace & Defense",
    "marketCap": "874.30M"
  },
  {
    "ticker": "MNTV",
    "organization": "Momentive",
    "industry": "Software",
    "marketCap": "2.93B"
  },
  {
    "ticker": "MNTX",
    "organization": "Manitex International",
    "industry": "Machinery",
    "marketCap": "140.74M"
  },
  {
    "ticker": "MO",
    "organization": "Altria",
    "industry": "Tobacco",
    "marketCap": "84.49B"
  },
  {
    "ticker": "MOD",
    "organization": "Modine Manufacturing",
    "industry": "Auto Components",
    "marketCap": "603.70M"
  },
  {
    "ticker": "MODN",
    "organization": "Model N",
    "industry": "Software",
    "marketCap": "1.21B"
  },
  {
    "ticker": "MODV",
    "organization": "ModivCare",
    "industry": "Health Care Providers & Services",
    "marketCap": "2.52B"
  },
  {
    "ticker": "MOFG",
    "organization": "MidWestOne Financial Group",
    "industry": "Banks",
    "marketCap": "488.95M"
  },
  {
    "ticker": "MOG.A",
    "organization": "Moog Inc.",
    "industry": "Aerospace & Defense",
    "marketCap": "2.53B"
  },
  {
    "ticker": "MOG.B",
    "organization": "Moog Inc.",
    "industry": "Aerospace & Defense",
    "marketCap": "2.83B"
  },
  {
    "ticker": "MOGO",
    "organization": "Mogo Inc.",
    "industry": "Consumer Finance",
    "marketCap": "304.40M"
  },
  {
    "ticker": "MOGU",
    "organization": "Mogu",
    "industry": " Inc.",
    "marketCap": "Internet & Direct Marketing Retail"
  },
  {
    "ticker": "MOH",
    "organization": "Molina Healthcare",
    "industry": "Health Care Providers & Services",
    "marketCap": "15.67B"
  },
  {
    "ticker": "MOHO",
    "organization": "ECMOHO Limited",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "27.75M"
  },
  {
    "ticker": "MOLN",
    "organization": "Molecular Partners",
    "industry": "Biotechnology",
    "marketCap": "620.65M"
  },
  {
    "ticker": "MOMO",
    "organization": "Hello Group",
    "industry": "Interactive Media & Services",
    "marketCap": "2.15B"
  },
  {
    "ticker": "MON",
    "organization": "Monument Circle Acquisition",
    "industry": "Shell Companies",
    "marketCap": "305.31M"
  },
  {
    "ticker": "MOR",
    "organization": "MorphoSys",
    "industry": "Biotechnology",
    "marketCap": "1.66B"
  },
  {
    "ticker": "MORF",
    "organization": "Morphic Holding",
    "industry": "Biotechnology",
    "marketCap": "1.97B"
  },
  {
    "ticker": "MORN",
    "organization": "Morningstar",
    "industry": "Capital Markets",
    "marketCap": "11.26B"
  },
  {
    "ticker": "MOS",
    "organization": "Mosaic Company",
    "industry": "Chemicals",
    "marketCap": "14.36B"
  },
  {
    "ticker": "MOSY",
    "organization": "MoSys",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "41.47M"
  },
  {
    "ticker": "MOTN",
    "organization": "Motion Acquisition",
    "industry": "Shell Companies",
    "marketCap": "143.18M"
  },
  {
    "ticker": "MOTS",
    "organization": "Motus GI Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "33.31M"
  },
  {
    "ticker": "MOTV",
    "organization": "Motive Capital",
    "industry": "Shell Companies",
    "marketCap": "513.76M"
  },
  {
    "ticker": "MOV",
    "organization": "Movado Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "MOVE",
    "organization": "Movano",
    "industry": "Internet Software & Services (discont...",
    "marketCap": "113.06M"
  },
  {
    "ticker": "MOXC",
    "organization": "Moxian",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "148.74M"
  },
  {
    "ticker": "MP",
    "organization": "MP Materials",
    "industry": "Metals & Mining",
    "marketCap": "5.63B"
  },
  {
    "ticker": "MPAA",
    "organization": "Motorcar Parts of America",
    "industry": "Auto Components",
    "marketCap": "378.56M"
  },
  {
    "ticker": "MPAC",
    "organization": "Model Performance Acquisition",
    "industry": "Shell Companies",
    "marketCap": "70.83M"
  },
  {
    "ticker": "MPB",
    "organization": "Mid Penn Bancorp",
    "industry": "Banks",
    "marketCap": "315.38M"
  },
  {
    "ticker": "MPC",
    "organization": "Marathon Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MPLN",
    "organization": "MultiPlan",
    "industry": "Healthcare Plans",
    "marketCap": "3.74B"
  },
  {
    "ticker": "MPLX",
    "organization": "MPLX LP",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MPW",
    "organization": "Medical Properties Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "12.00B"
  },
  {
    "ticker": "MPWR",
    "organization": "Monolithic Power Systems",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "21.97B"
  },
  {
    "ticker": "MPX",
    "organization": "Marine Products",
    "industry": "Leisure Products",
    "marketCap": "426.96M"
  },
  {
    "ticker": "MQ",
    "organization": "Marqeta",
    "industry": "Software-Infrastructure",
    "marketCap": "11.79B"
  },
  {
    "ticker": "MRAC",
    "organization": "Marquee Raine Acquisition",
    "industry": "Shell Companies",
    "marketCap": "466.25M"
  },
  {
    "ticker": "MRAM",
    "organization": "Everspin Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "126.61M"
  },
  {
    "ticker": "MRBK",
    "organization": "Meridian",
    "industry": "Banks",
    "marketCap": "179.20M"
  },
  {
    "ticker": "MRC",
    "organization": "MRC Global",
    "industry": "Trading Companies & Distributors",
    "marketCap": "606.76M"
  },
  {
    "ticker": "MRCC",
    "organization": "Monroe Capital",
    "industry": "Capital Markets",
    "marketCap": "222.11M"
  },
  {
    "ticker": "MRCY",
    "organization": "Mercury Systems",
    "industry": "Aerospace & Defense",
    "marketCap": "2.72B"
  },
  {
    "ticker": "MREO",
    "organization": "Mereo BioPharma Group",
    "industry": "Biotechnology",
    "marketCap": "282.06M"
  },
  {
    "ticker": "MRIN",
    "organization": "Marin Software",
    "industry": "Software",
    "marketCap": "135.51M"
  },
  {
    "ticker": "MRK",
    "organization": "Merck",
    "industry": "Pharmaceuticals",
    "marketCap": "208.15B"
  },
  {
    "ticker": "MRKR",
    "organization": "Marker Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "138.74M"
  },
  {
    "ticker": "MRLN",
    "organization": "Marlin Business Services",
    "industry": "Diversified Financial Services",
    "marketCap": "266.81M"
  },
  {
    "ticker": "MRM",
    "organization": "Medirom Healthcare",
    "industry": "Personal Services",
    "marketCap": "46.17M"
  },
  {
    "ticker": "MRNA",
    "organization": "Moderna",
    "industry": "Biotechnology",
    "marketCap": "135.08B"
  },
  {
    "ticker": "MRNS",
    "organization": "Marinus Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "438.27M"
  },
  {
    "ticker": "MRO",
    "organization": "Marathon Oil",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MRSN",
    "organization": "Mersana Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "671.69M"
  },
  {
    "ticker": "MRTN",
    "organization": "Marten Transport",
    "industry": "Road & Rail",
    "marketCap": "1.30B"
  },
  {
    "ticker": "MRTX",
    "organization": "Mirati Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "8.88B"
  },
  {
    "ticker": "MRUS",
    "organization": "Merus N.V.",
    "industry": "Biotechnology",
    "marketCap": "821.50M"
  },
  {
    "ticker": "MRVI",
    "organization": "Maravai LifeSciences",
    "industry": "Biotechnology",
    "marketCap": "4.71B"
  },
  {
    "ticker": "MRVL",
    "organization": "Marvell Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "49.08B"
  },
  {
    "ticker": "MS",
    "organization": "Morgan Stanley",
    "industry": "Capital Markets",
    "marketCap": "177.89B"
  },
  {
    "ticker": "MSA",
    "organization": "MSA Safety",
    "industry": "Commercial Services & Supplies",
    "marketCap": "5.73B"
  },
  {
    "ticker": "MSAC",
    "organization": "Medicus Sciences Acquisition",
    "industry": "Shell Companies",
    "marketCap": "112.90M"
  },
  {
    "ticker": "MSB",
    "organization": "Mesabi Trust",
    "industry": "Metals & Mining",
    "marketCap": "394.39M"
  },
  {
    "ticker": "MSBI",
    "organization": "Midland States Bancorp",
    "industry": "Banks",
    "marketCap": "553.83M"
  },
  {
    "ticker": "MSC",
    "organization": "Studio City International",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MSCI",
    "organization": "MSCI Inc.",
    "industry": "Capital Markets",
    "marketCap": "49.47B"
  },
  {
    "ticker": "MSDA",
    "organization": "MSD Acquisition",
    "industry": "Shell Companies",
    "marketCap": "705.09M"
  },
  {
    "ticker": "MSEX",
    "organization": "Middlesex Water",
    "industry": "Water Utilities",
    "marketCap": "1.80B"
  },
  {
    "ticker": "MSFT",
    "organization": "Microsoft",
    "industry": "Software",
    "marketCap": "2"
  },
  {
    "ticker": "MSGE",
    "organization": "Madison Square Garden Entertainment",
    "industry": "Entertainment",
    "marketCap": "2.39B"
  },
  {
    "ticker": "MSGM",
    "organization": "Motorsport Games",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "266.49M"
  },
  {
    "ticker": "MSGS",
    "organization": "Madison Square Garden Sports",
    "industry": "Entertainment",
    "marketCap": "4.61B"
  },
  {
    "ticker": "MSI",
    "organization": "Motorola Solutions",
    "industry": "Communications Equipment",
    "marketCap": "39.39B"
  },
  {
    "ticker": "MSM",
    "organization": "MSC Industrial Direct",
    "industry": "Trading Companies & Distributors",
    "marketCap": "4.47B"
  },
  {
    "ticker": "MSN",
    "organization": "Emerson Radio",
    "industry": "Household Durables",
    "marketCap": "23.15M"
  },
  {
    "ticker": "MSON",
    "organization": "Misonix",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "443.64M"
  },
  {
    "ticker": "MSP",
    "organization": "Datto",
    "industry": "Software",
    "marketCap": "3.89B"
  },
  {
    "ticker": "MSTR",
    "organization": "MicroStrategy",
    "industry": "Software",
    "marketCap": "6.31B"
  },
  {
    "ticker": "MSVB",
    "organization": "Mid-Southern Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "45.69M"
  },
  {
    "ticker": "MT",
    "organization": "ArcelorMittal",
    "industry": "Metals & Mining",
    "marketCap": "29.50B"
  },
  {
    "ticker": "MTA",
    "organization": "Metalla Royalty & Streaming",
    "industry": "Metals & Mining",
    "marketCap": "297.48M"
  },
  {
    "ticker": "MTAC",
    "organization": "MedTech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "309.69M"
  },
  {
    "ticker": "MTAL",
    "organization": "Metals Acquisition",
    "industry": "Shell Companies",
    "marketCap": "307.19M"
  },
  {
    "ticker": "MTB",
    "organization": "M&T Bank",
    "industry": "Banks",
    "marketCap": "19.22B"
  },
  {
    "ticker": "MTBC",
    "organization": "MTBC",
    "industry": " Inc.",
    "marketCap": "Health Care Technology"
  },
  {
    "ticker": "MTC",
    "organization": "MMTec",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "MTCH",
    "organization": "Match Group",
    "industry": "Interactive Media & Services",
    "marketCap": "43.91B"
  },
  {
    "ticker": "MTCR",
    "organization": "Metacrine",
    "industry": "Biotechnology",
    "marketCap": "90.98M"
  },
  {
    "ticker": "MTD",
    "organization": "Mettler-Toledo",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "31.75B"
  },
  {
    "ticker": "MTDR",
    "organization": "Matador Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MTEM",
    "organization": "Molecular Templates",
    "industry": "Biotechnology",
    "marketCap": "368.57M"
  },
  {
    "ticker": "MTEX",
    "organization": "Mannatech",
    "industry": "Personal Products",
    "marketCap": "62.91M"
  },
  {
    "ticker": "MTG",
    "organization": "MGIC Investment",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "5.25B"
  },
  {
    "ticker": "MTH",
    "organization": "Meritage Homes",
    "industry": "Household Durables",
    "marketCap": "3.69B"
  },
  {
    "ticker": "MTL",
    "organization": "Mechel PAO",
    "industry": "Metals & Mining",
    "marketCap": "1.33B"
  },
  {
    "ticker": "MTLS",
    "organization": "Materialise",
    "industry": "Software",
    "marketCap": "1.14B"
  },
  {
    "ticker": "MTN",
    "organization": "Vail Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "MTNB",
    "organization": "Matinas BioPharma",
    "industry": "Biotechnology",
    "marketCap": "263.81M"
  },
  {
    "ticker": "MTOR",
    "organization": "Meritor",
    "industry": "Machinery",
    "marketCap": "1.49B"
  },
  {
    "ticker": "MTP",
    "organization": "Midatech Pharma",
    "industry": "Biotechnology",
    "marketCap": "22.21M"
  },
  {
    "ticker": "MTR",
    "organization": "Mesa Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MTRN",
    "organization": "Materion",
    "industry": "Metals & Mining",
    "marketCap": "1.40B"
  },
  {
    "ticker": "MTRX",
    "organization": "Matrix Service",
    "industry": "Energy Equipment & Services",
    "marketCap": "293.00M"
  },
  {
    "ticker": "MTSI",
    "organization": "MACOM Technology Solutions",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "4.49B"
  },
  {
    "ticker": "MTTR",
    "organization": "Matterport",
    "industry": "Software-Application",
    "marketCap": "4.44B"
  },
  {
    "ticker": "MTW",
    "organization": "Manitowoc Company",
    "industry": "Machinery",
    "marketCap": "778.34M"
  },
  {
    "ticker": "MTX",
    "organization": "Minerals Technologies",
    "industry": "Chemicals",
    "marketCap": "2.38B"
  },
  {
    "ticker": "MTZ",
    "organization": "MasTec",
    "industry": "Construction & Engineering",
    "marketCap": "6.64B"
  },
  {
    "ticker": "MU",
    "organization": "Micron Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "79.91B"
  },
  {
    "ticker": "MUDS",
    "organization": "Mudrick Capital Acquisition II",
    "industry": "Diversified Financial Services",
    "marketCap": "393.34M"
  },
  {
    "ticker": "MUFG",
    "organization": "Mitsubishi UFJ Financial",
    "industry": "Banks",
    "marketCap": "75.21B"
  },
  {
    "ticker": "MUR",
    "organization": "Murphy Oil",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MUSA",
    "organization": "Murphy USA",
    "industry": "Specialty Retail",
    "marketCap": "4.42B"
  },
  {
    "ticker": "MUX",
    "organization": "McEwen Mining",
    "industry": "Metals & Mining",
    "marketCap": "482.15M"
  },
  {
    "ticker": "MVBF",
    "organization": "MVB Financial",
    "industry": "Banks",
    "marketCap": "513.18M"
  },
  {
    "ticker": "MVIS",
    "organization": "MicroVision",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "MVST",
    "organization": "Microvast",
    "industry": "Electrical Equipment & Parts",
    "marketCap": "2.45B"
  },
  {
    "ticker": "MWA",
    "organization": "Mueller Water Products",
    "industry": "Machinery",
    "marketCap": "2.41B"
  },
  {
    "ticker": "MX",
    "organization": "MagnaChip Semiconductor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "826.83M"
  },
  {
    "ticker": "MXC",
    "organization": "Mexco Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "MXCT",
    "organization": "MaxCyte",
    "industry": "Diagnostics & Research",
    "marketCap": "786.65M"
  },
  {
    "ticker": "MXL",
    "organization": "MaxLinear",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.80B"
  },
  {
    "ticker": "MYE",
    "organization": "Myers Industries",
    "industry": "Containers & Packaging",
    "marketCap": "727.46M"
  },
  {
    "ticker": "MYFW",
    "organization": "First Western Financial",
    "industry": "Banks",
    "marketCap": "232.38M"
  },
  {
    "ticker": "MYGN",
    "organization": "Myriad Genetics",
    "industry": "Biotechnology",
    "marketCap": "2.49B"
  },
  {
    "ticker": "MYMD",
    "organization": "MyMD Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "265.72M"
  },
  {
    "ticker": "MYO",
    "organization": "Myomo",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "68.64M"
  },
  {
    "ticker": "MYOV",
    "organization": "Myovant Sciences",
    "industry": "Biotechnology",
    "marketCap": "2.04B"
  },
  {
    "ticker": "MYPS",
    "organization": "PLAYSTUDIOS",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "564.64M"
  },
  {
    "ticker": "MYRG",
    "organization": "MYR Group",
    "industry": "Construction & Engineering",
    "marketCap": "1.68B"
  },
  {
    "ticker": "MYSZ",
    "organization": "My Size",
    "industry": "Software",
    "marketCap": "20.46M"
  },
  {
    "ticker": "MYTE",
    "organization": "MYT Netherlands",
    "industry": "Luxury Goods",
    "marketCap": "2.29B"
  },
  {
    "ticker": "NAAC",
    "organization": "North Atlantic Acquisition",
    "industry": "Shell Companies",
    "marketCap": "462.99M"
  },
  {
    "ticker": "NABL",
    "organization": "N-able",
    "industry": "Information Technology Services",
    "marketCap": "2.25B"
  },
  {
    "ticker": "NAII",
    "organization": "Natural Alternatives International",
    "industry": "Personal Products",
    "marketCap": "85.39M"
  },
  {
    "ticker": "NAK",
    "organization": "Northern Dynasty Minerals",
    "industry": "Metals & Mining",
    "marketCap": "235.99M"
  },
  {
    "ticker": "NAKD",
    "organization": "Naked Brand Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "NAOV",
    "organization": "NanoVibronix",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "48.10M"
  },
  {
    "ticker": "NAPA",
    "organization": "Duckhorn",
    "industry": "Beverages-Wineries & Distilleries",
    "marketCap": "2.68B"
  },
  {
    "ticker": "NARI",
    "organization": "Inari Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.93B"
  },
  {
    "ticker": "NAT",
    "organization": "Nordic American Tankers",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NATH",
    "organization": "Nathan's Famous",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "NATI",
    "organization": "National Instruments",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NATR",
    "organization": "Nature's Sunshine Products",
    "industry": "Personal Products",
    "marketCap": "298.05M"
  },
  {
    "ticker": "NAUT",
    "organization": "Nautilus Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "768.19M"
  },
  {
    "ticker": "NAVB",
    "organization": "Navidea Biopharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "53.33M"
  },
  {
    "ticker": "NAVI",
    "organization": "Navient",
    "industry": "Consumer Finance",
    "marketCap": "3.21B"
  },
  {
    "ticker": "NBEV",
    "organization": "NewAge",
    "industry": "Beverages",
    "marketCap": "190.14M"
  },
  {
    "ticker": "NBHC",
    "organization": "National Bank Holdings",
    "industry": "Banks",
    "marketCap": "1.26B"
  },
  {
    "ticker": "NBIX",
    "organization": "Neurocrine Biosciences",
    "industry": "Biotechnology",
    "marketCap": "9.32B"
  },
  {
    "ticker": "NBN",
    "organization": "Northeast Bank",
    "industry": "Banks",
    "marketCap": "281.49M"
  },
  {
    "ticker": "NBR",
    "organization": "Nabors Industries",
    "industry": "Energy Equipment & Services",
    "marketCap": "821.44M"
  },
  {
    "ticker": "NBRV",
    "organization": "Nabriva Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "58.19M"
  },
  {
    "ticker": "NBSE",
    "organization": "NeuBase Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "116.14M"
  },
  {
    "ticker": "NBST",
    "organization": "Newbury Street Acquisition",
    "industry": "Shell Companies",
    "marketCap": "161.95M"
  },
  {
    "ticker": "NBTB",
    "organization": "NBT Bancorp",
    "industry": "Banks",
    "marketCap": "1.60B"
  },
  {
    "ticker": "NBTX",
    "organization": "Nanobiotix",
    "industry": "Biotechnology",
    "marketCap": "398.04M"
  },
  {
    "ticker": "NBY",
    "organization": "NovaBay Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "27.29M"
  },
  {
    "ticker": "NC",
    "organization": "NACCO Industries",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NCBS",
    "organization": "Nicolet Bankshares",
    "industry": "Banks",
    "marketCap": "902.67M"
  },
  {
    "ticker": "NCLH",
    "organization": "Norwegian Cruise Line",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "NCMI",
    "organization": "National CineMedia",
    "industry": "Media",
    "marketCap": "297.07M"
  },
  {
    "ticker": "NCNA",
    "organization": "NuCana",
    "industry": "Biotechnology",
    "marketCap": "128.32M"
  },
  {
    "ticker": "NCNO",
    "organization": "nCino",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "NCR",
    "organization": "NCR Corporation",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "NCSM",
    "organization": "NCS Multistage Holdings",
    "industry": "Energy Equipment & Services",
    "marketCap": "69.03M"
  },
  {
    "ticker": "NCTY",
    "organization": "The9 Limited",
    "industry": "Entertainment",
    "marketCap": "209.68M"
  },
  {
    "ticker": "NDAC",
    "organization": "Nightdragon Acquisition",
    "industry": "Shell Companies",
    "marketCap": "431.44M"
  },
  {
    "ticker": "NDAQ",
    "organization": "Nasdaq",
    "industry": "Capital Markets",
    "marketCap": "32.27B"
  },
  {
    "ticker": "NDLS",
    "organization": "Noodles & Company",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "NDRA",
    "organization": "ENDRA Life Sciences",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "72.41M"
  },
  {
    "ticker": "NDSN",
    "organization": "Nordson",
    "industry": "Machinery",
    "marketCap": "13.99B"
  },
  {
    "ticker": "NE",
    "organization": "Noble",
    "industry": "Oil & Gas Drilling",
    "marketCap": "1.68B"
  },
  {
    "ticker": "NECB",
    "organization": "Northeast Community Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "176.88M"
  },
  {
    "ticker": "NEE",
    "organization": "NextEra Energy",
    "industry": "Electric Utilities",
    "marketCap": "155.39B"
  },
  {
    "ticker": "NEGG",
    "organization": "Newegg Commerce",
    "industry": "Internet Retail",
    "marketCap": "5.04B"
  },
  {
    "ticker": "NEM",
    "organization": "Newmont Goldcorp",
    "industry": "Metals & Mining",
    "marketCap": "42.80B"
  },
  {
    "ticker": "NEN",
    "organization": "New England Realty Associates",
    "industry": "Real Estate Management & Development",
    "marketCap": "226.65M"
  },
  {
    "ticker": "NEO",
    "organization": "NeoGenomics",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "6.46B"
  },
  {
    "ticker": "NEOG",
    "organization": "Neogen Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "4.66B"
  },
  {
    "ticker": "NEON",
    "organization": "Neonode",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NEP",
    "organization": "NextEra Energy Partners",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "5.90B"
  },
  {
    "ticker": "NEPH",
    "organization": "Nephros",
    "industry": "Household Durables",
    "marketCap": "88.38M"
  },
  {
    "ticker": "NEPT",
    "organization": "Neptune Wellness Solutions",
    "industry": "Personal Products",
    "marketCap": "98.53M"
  },
  {
    "ticker": "NERV",
    "organization": "Minerva Neurosciences",
    "industry": "Biotechnology",
    "marketCap": "67.50M"
  },
  {
    "ticker": "NES",
    "organization": "Nuverra Environmental Solutions",
    "industry": "Energy Equipment & Services",
    "marketCap": "31.83M"
  },
  {
    "ticker": "NESR",
    "organization": "National Energy Services Reunited",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.14B"
  },
  {
    "ticker": "NET",
    "organization": "Cloudflare",
    "industry": "Software",
    "marketCap": "36.79B"
  },
  {
    "ticker": "NETE",
    "organization": "Net Element",
    "industry": "Software",
    "marketCap": "52.77M"
  },
  {
    "ticker": "NETI",
    "organization": "Eneti",
    "industry": "Marine",
    "marketCap": "318.91M"
  },
  {
    "ticker": "NEU",
    "organization": "NewMarket Corporation",
    "industry": "Chemicals",
    "marketCap": "3.70B"
  },
  {
    "ticker": "NEW",
    "organization": "Puxin",
    "industry": "Diversified Consumer Services",
    "marketCap": "47.23M"
  },
  {
    "ticker": "NEWP",
    "organization": "New Pacific Metals",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NEWR",
    "organization": "New Relic",
    "industry": "Software",
    "marketCap": "4.73B"
  },
  {
    "ticker": "NEWT",
    "organization": "Newtek Business Services",
    "industry": "Capital Markets",
    "marketCap": "633.35M"
  },
  {
    "ticker": "NEX",
    "organization": "NexTier Oilfield Solutions",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.13B"
  },
  {
    "ticker": "NEXA",
    "organization": "Nexa Resources",
    "industry": "Metals & Mining",
    "marketCap": "994.62M"
  },
  {
    "ticker": "NEXI",
    "organization": "NexImmune",
    "industry": "Biotechnology",
    "marketCap": "341.91M"
  },
  {
    "ticker": "NEXT",
    "organization": "NextDecade",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NFBK",
    "organization": "Northfield Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "883.00M"
  },
  {
    "ticker": "NFE",
    "organization": "New Fortress Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NFG",
    "organization": "National Fuel Gas",
    "industry": "Gas Utilities",
    "marketCap": "4.85B"
  },
  {
    "ticker": "NFGC",
    "organization": "New Found Gold",
    "industry": "Gold",
    "marketCap": "1.06B"
  },
  {
    "ticker": "NFH",
    "organization": "New Frontier Health",
    "industry": "Medical Care Facilities",
    "marketCap": "1.48B"
  },
  {
    "ticker": "NFLX",
    "organization": "Netflix",
    "industry": "Entertainment",
    "marketCap": "271.38B"
  },
  {
    "ticker": "NG",
    "organization": "NovaGold Resources",
    "industry": "Metals & Mining",
    "marketCap": "2.29B"
  },
  {
    "ticker": "NGAB",
    "organization": "Northern Genesis Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "514.91M"
  },
  {
    "ticker": "NGC",
    "organization": "Northern Genesis Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "210.82M"
  },
  {
    "ticker": "NGCA",
    "organization": "NextGen Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "473.70M"
  },
  {
    "ticker": "NGD",
    "organization": "New Gold",
    "industry": "Metals & Mining",
    "marketCap": "721.65M"
  },
  {
    "ticker": "NGG",
    "organization": "National Grid",
    "industry": "Multi-Utilities",
    "marketCap": "43.84B"
  },
  {
    "ticker": "NGL",
    "organization": "NGL Energy Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NGM",
    "organization": "NGM Biopharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "1.58B"
  },
  {
    "ticker": "NGMS",
    "organization": "NeoGames",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "NGS",
    "organization": "Natural Gas Services Group",
    "industry": "Energy Equipment & Services",
    "marketCap": "139.59M"
  },
  {
    "ticker": "NGVC",
    "organization": "Natural Grocers by Vitamin Cottage",
    "industry": "Food & Staples Retailing",
    "marketCap": "255.14M"
  },
  {
    "ticker": "NGVT",
    "organization": "Ingevity",
    "industry": "Chemicals",
    "marketCap": "2.94B"
  },
  {
    "ticker": "NH",
    "organization": "NantHealth",
    "industry": "Health Care Technology",
    "marketCap": "191.24M"
  },
  {
    "ticker": "NHC",
    "organization": "National HealthCare",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.08B"
  },
  {
    "ticker": "NHI",
    "organization": "National Health Investors",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.45B"
  },
  {
    "ticker": "NHTC",
    "organization": "Natural Health Trends",
    "industry": "Personal Products",
    "marketCap": "81.56M"
  },
  {
    "ticker": "NI",
    "organization": "NiSource",
    "industry": "Multi-Utilities",
    "marketCap": "9.54B"
  },
  {
    "ticker": "NICE",
    "organization": "NICE Ltd.",
    "industry": "Software",
    "marketCap": "17.56B"
  },
  {
    "ticker": "NICK",
    "organization": "Nicholas Financial",
    "industry": "Consumer Finance",
    "marketCap": "95.88M"
  },
  {
    "ticker": "NINE",
    "organization": "Nine Energy Service",
    "industry": "Energy Equipment & Services",
    "marketCap": "57.06M"
  },
  {
    "ticker": "NIO",
    "organization": "NIO Inc.",
    "industry": "Automobiles",
    "marketCap": "58.28B"
  },
  {
    "ticker": "NISN",
    "organization": "Nisun International",
    "industry": "Credit Services",
    "marketCap": "240.29M"
  },
  {
    "ticker": "NIU",
    "organization": "Niu Technologies",
    "industry": "Automobiles",
    "marketCap": "1.75B"
  },
  {
    "ticker": "NJR",
    "organization": "New Jersey Resources",
    "industry": "Gas Utilities",
    "marketCap": "3.46B"
  },
  {
    "ticker": "NKE",
    "organization": "Nike",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "NKLA",
    "organization": "Nikola",
    "industry": "Auto Manufacturers",
    "marketCap": "4.26B"
  },
  {
    "ticker": "NKSH",
    "organization": "National Bankshares",
    "industry": "Banks",
    "marketCap": "223.97M"
  },
  {
    "ticker": "NKTR",
    "organization": "Nektar Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "3.37B"
  },
  {
    "ticker": "NKTX",
    "organization": "Nkarta",
    "industry": "Biotechnology",
    "marketCap": "884.53M"
  },
  {
    "ticker": "NL",
    "organization": "NL Industries",
    "industry": "Commercial Services & Supplies",
    "marketCap": "296.23M"
  },
  {
    "ticker": "NLIT",
    "organization": "Northern Lights Acquisition",
    "industry": "Shell Companies",
    "marketCap": "130.15M"
  },
  {
    "ticker": "NLOK",
    "organization": "NortonLifeLock",
    "industry": "Software",
    "marketCap": "14.86B"
  },
  {
    "ticker": "NLS",
    "organization": "Nautilus",
    "industry": "Leisure Products",
    "marketCap": "292.77M"
  },
  {
    "ticker": "NLSN",
    "organization": "Nielsen",
    "industry": "Professional Services",
    "marketCap": "6.89B"
  },
  {
    "ticker": "NLSP",
    "organization": "NLS Pharmaceutics",
    "industry": "Biotechnology",
    "marketCap": "29.93M"
  },
  {
    "ticker": "NLTX",
    "organization": "Neoleukin Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "308.85M"
  },
  {
    "ticker": "NLY",
    "organization": "Annaly Capital Management",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "12.18B"
  },
  {
    "ticker": "NM",
    "organization": "Navios Maritime Holdings",
    "industry": "Marine",
    "marketCap": "80.60M"
  },
  {
    "ticker": "NMFC",
    "organization": "New Mountain Finance",
    "industry": "Capital Markets",
    "marketCap": "1.31B"
  },
  {
    "ticker": "NMG",
    "organization": "Nouveau Monde Graphite",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "269.23M"
  },
  {
    "ticker": "NMIH",
    "organization": "NMI Holdings",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "2.03B"
  },
  {
    "ticker": "NMM",
    "organization": "Navios Maritime Partners",
    "industry": "Marine",
    "marketCap": "899.44M"
  },
  {
    "ticker": "NMMC",
    "organization": "North Mountain Merger",
    "industry": "Shell Companies",
    "marketCap": "161.84M"
  },
  {
    "ticker": "NMR",
    "organization": "Nomura Holdings",
    "industry": "Capital Markets",
    "marketCap": "15.33B"
  },
  {
    "ticker": "NMRD",
    "organization": "Nemaura Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "141.95M"
  },
  {
    "ticker": "NMRK",
    "organization": "Newmark Group",
    "industry": "Real Estate Management & Development",
    "marketCap": "2.91B"
  },
  {
    "ticker": "NMTC",
    "organization": "NeuroOne Medical Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "48.60M"
  },
  {
    "ticker": "NMTR",
    "organization": "9 Meters Biopharma",
    "industry": "Pharmaceuticals",
    "marketCap": "328.63M"
  },
  {
    "ticker": "NNA",
    "organization": "Navios Maritime Acquisition",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NNBR",
    "organization": "NN",
    "industry": " Inc.",
    "marketCap": "Machinery"
  },
  {
    "ticker": "NNDM",
    "organization": "Nano Dimension",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "NNI",
    "organization": "Nelnet",
    "industry": "Consumer Finance",
    "marketCap": "3.09B"
  },
  {
    "ticker": "NNN",
    "organization": "National Retail Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "7.81B"
  },
  {
    "ticker": "NNOX",
    "organization": "Nano-X Imaging",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.08B"
  },
  {
    "ticker": "NNVC",
    "organization": "NanoViricides",
    "industry": "Biotechnology",
    "marketCap": "50.62M"
  },
  {
    "ticker": "NOA",
    "organization": "North American Construction",
    "industry": "Energy Equipment & Services",
    "marketCap": "418.58M"
  },
  {
    "ticker": "NOAC",
    "organization": "Natural Order Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.60M"
  },
  {
    "ticker": "NOAH",
    "organization": "Noah Holdings",
    "industry": "Capital Markets",
    "marketCap": "2.21B"
  },
  {
    "ticker": "NOC",
    "organization": "Northrop Grumman",
    "industry": "Aerospace & Defense",
    "marketCap": "58.02B"
  },
  {
    "ticker": "NODK",
    "organization": "NI Holdings",
    "industry": "Insurance",
    "marketCap": "369.94M"
  },
  {
    "ticker": "NOG",
    "organization": "Northern Oil & Gas",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NOK",
    "organization": "Nokia",
    "industry": "Communications Equipment",
    "marketCap": "31.13B"
  },
  {
    "ticker": "NOMD",
    "organization": "Nomad Foods",
    "industry": "Food Products",
    "marketCap": "4.95B"
  },
  {
    "ticker": "NOTV",
    "organization": "Inotiv",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "473.57M"
  },
  {
    "ticker": "NOV",
    "organization": "National Oilwell Varco",
    "industry": "Energy Equipment & Services",
    "marketCap": "5.27B"
  },
  {
    "ticker": "NOVA",
    "organization": "Sunnova Energy",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "3.71B"
  },
  {
    "ticker": "NOVN",
    "organization": "Novan",
    "industry": "Pharmaceuticals",
    "marketCap": "152.20M"
  },
  {
    "ticker": "NOVT",
    "organization": "Novanta",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NOW",
    "organization": "ServiceNow",
    "industry": "Software",
    "marketCap": "125.36B"
  },
  {
    "ticker": "NP",
    "organization": "Neenah",
    "industry": "Paper & Forest Products",
    "marketCap": "802.32M"
  },
  {
    "ticker": "NPCE",
    "organization": "NeuroPace",
    "industry": "Medical Devices",
    "marketCap": "381.69M"
  },
  {
    "ticker": "NPK",
    "organization": "National Presto Industries",
    "industry": "Aerospace & Defense",
    "marketCap": "582.39M"
  },
  {
    "ticker": "NPO",
    "organization": "EnPro Industries",
    "industry": "Machinery",
    "marketCap": "1.81B"
  },
  {
    "ticker": "NPTN",
    "organization": "NeoPhotonics",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "461.84M"
  },
  {
    "ticker": "NR",
    "organization": "Newpark Resources",
    "industry": "Energy Equipment & Services",
    "marketCap": "317.68M"
  },
  {
    "ticker": "NRAC",
    "organization": "Noble Rock Acquisition",
    "industry": "Shell Companies",
    "marketCap": "294.33M"
  },
  {
    "ticker": "NRBO",
    "organization": "NeuroBo Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "55.71M"
  },
  {
    "ticker": "NRC",
    "organization": "National Research",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.08B"
  },
  {
    "ticker": "NRDY",
    "organization": "Nerdy",
    "industry": "Software-Application",
    "marketCap": "910.79M"
  },
  {
    "ticker": "NREF",
    "organization": "NexPoint Real Estate Finance",
    "industry": "REIT-Diversified",
    "marketCap": "175.34M"
  },
  {
    "ticker": "NRG",
    "organization": "NRG Energy",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "9.99B"
  },
  {
    "ticker": "NRIM",
    "organization": "Northrim BanCorp",
    "industry": "Banks",
    "marketCap": "267.89M"
  },
  {
    "ticker": "NRIX",
    "organization": "Nurix Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.39B"
  },
  {
    "ticker": "NRP",
    "organization": "Natural Resource Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NRT",
    "organization": "North European Oil Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NRXP",
    "organization": "NRx Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "466.75M"
  },
  {
    "ticker": "NRZ",
    "organization": "New Residential Investment",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "5.09B"
  },
  {
    "ticker": "NS",
    "organization": "NuStar Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NSA",
    "organization": "National Storage Affiliates Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.67B"
  },
  {
    "ticker": "NSC",
    "organization": "Norfolk Southern",
    "industry": "Road & Rail",
    "marketCap": "60.02B"
  },
  {
    "ticker": "NSEC",
    "organization": "National Security Group",
    "industry": "Insurance",
    "marketCap": "26.52M"
  },
  {
    "ticker": "NSIT",
    "organization": "Insight Enterprises",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NSP",
    "organization": "Insperity",
    "industry": "Professional Services",
    "marketCap": "4.27B"
  },
  {
    "ticker": "NSPR",
    "organization": "InspireMD",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "32.45M"
  },
  {
    "ticker": "NSR",
    "organization": "Nomad Royalty Company",
    "industry": "Other Precious Metals & Mining",
    "marketCap": "337.66M"
  },
  {
    "ticker": "NSSC",
    "organization": "Napco Security Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NSTB",
    "organization": "Northern Star Investment II",
    "industry": "Shell Companies",
    "marketCap": "497.42M"
  },
  {
    "ticker": "NSTC",
    "organization": "Northern Star Investment III",
    "industry": "Shell Companies",
    "marketCap": "97.60M"
  },
  {
    "ticker": "NSTD",
    "organization": "Northern Star Investment IV",
    "industry": "Shell Companies",
    "marketCap": "488.00M"
  },
  {
    "ticker": "NSTG",
    "organization": "NanoString Technologies",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "2.16B"
  },
  {
    "ticker": "NSYS",
    "organization": "Nortech Systems",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "NTAP",
    "organization": "NetApp",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "NTB",
    "organization": "Bank of N.T. Butterfield & Son",
    "industry": "Banks",
    "marketCap": "1.78B"
  },
  {
    "ticker": "NTCO",
    "organization": "Natura &Co Holding",
    "industry": "Personal Products",
    "marketCap": "11.81B"
  },
  {
    "ticker": "NTCT",
    "organization": "NetScout Systems",
    "industry": "Communications Equipment",
    "marketCap": "2.01B"
  },
  {
    "ticker": "NTES",
    "organization": "NetEase",
    "industry": "Entertainment",
    "marketCap": "56.23B"
  },
  {
    "ticker": "NTGR",
    "organization": "Netgear",
    "industry": "Communications Equipment",
    "marketCap": "982.28M"
  },
  {
    "ticker": "NTIC",
    "organization": "Northern Technologies International",
    "industry": "Chemicals",
    "marketCap": "142.02M"
  },
  {
    "ticker": "NTIP",
    "organization": "Network-1 Technologies",
    "industry": "Communications Equipment",
    "marketCap": "72.86M"
  },
  {
    "ticker": "NTLA",
    "organization": "Intellia Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "9.43B"
  },
  {
    "ticker": "NTNX",
    "organization": "Nutanix",
    "industry": "Software",
    "marketCap": "8.17B"
  },
  {
    "ticker": "NTP",
    "organization": "Nam Tai Property",
    "industry": "Real Estate Management & Development",
    "marketCap": "938.66M"
  },
  {
    "ticker": "NTR",
    "organization": "Nutrien",
    "industry": "Chemicals",
    "marketCap": "38.46B"
  },
  {
    "ticker": "NTRA",
    "organization": "Natera",
    "industry": "Biotechnology",
    "marketCap": "10.16B"
  },
  {
    "ticker": "NTRS",
    "organization": "Northern Trust",
    "industry": "Capital Markets",
    "marketCap": "22.85B"
  },
  {
    "ticker": "NTST",
    "organization": "NetSTREIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "953.37M"
  },
  {
    "ticker": "NTUS",
    "organization": "Natus Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "882.62M"
  },
  {
    "ticker": "NTWK",
    "organization": "NetSol Technologies",
    "industry": "Software",
    "marketCap": "52.61M"
  },
  {
    "ticker": "NTZ",
    "organization": "Natuzzi",
    "industry": "Household Durables",
    "marketCap": "191.99M"
  },
  {
    "ticker": "NUAN",
    "organization": "Nuance Communications",
    "industry": "Software",
    "marketCap": "17.31B"
  },
  {
    "ticker": "NUE",
    "organization": "Nucor",
    "industry": "Metals & Mining",
    "marketCap": "28.93B"
  },
  {
    "ticker": "NURO",
    "organization": "NeuroMetrix",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "55.16M"
  },
  {
    "ticker": "NUS",
    "organization": "Nu Skin Enterprises",
    "industry": "Personal Products",
    "marketCap": "2.03B"
  },
  {
    "ticker": "NUVA",
    "organization": "NuVasive",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.18B"
  },
  {
    "ticker": "NUVB",
    "organization": "Nuvation Bio",
    "industry": "Biotechnology",
    "marketCap": "2.17B"
  },
  {
    "ticker": "NUVL",
    "organization": "Nuvalent",
    "industry": "Biotechnology",
    "marketCap": "1.13B"
  },
  {
    "ticker": "NUWE",
    "organization": "Nuwellis",
    "industry": "Medical Devices",
    "marketCap": "22.55M"
  },
  {
    "ticker": "NUZE",
    "organization": "NuZee",
    "industry": " Inc.",
    "marketCap": "Food Products"
  },
  {
    "ticker": "NVAX",
    "organization": "Novavax",
    "industry": "Biotechnology",
    "marketCap": "12.97B"
  },
  {
    "ticker": "NVCN",
    "organization": "Neovasc",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "50.01M"
  },
  {
    "ticker": "NVCR",
    "organization": "Novocure",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "12.03B"
  },
  {
    "ticker": "NVDA",
    "organization": "NVIDIA",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "511.06B"
  },
  {
    "ticker": "NVEC",
    "organization": "NVE Corporation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "315.85M"
  },
  {
    "ticker": "NVEE",
    "organization": "NV5 Global",
    "industry": "Construction & Engineering",
    "marketCap": "1.52B"
  },
  {
    "ticker": "NVFY",
    "organization": "Nova Lifestyle",
    "industry": "Household Durables",
    "marketCap": "15.05M"
  },
  {
    "ticker": "NVGS",
    "organization": "Navigator Holdings",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NVIV",
    "organization": "Invivo Therapeutics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "22.78M"
  },
  {
    "ticker": "NVMI",
    "organization": "Nova Measuring Instruments",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.86B"
  },
  {
    "ticker": "NVNO",
    "organization": "enVVeno Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "98.26M"
  },
  {
    "ticker": "NVO",
    "organization": "Novo Nordisk A/S",
    "industry": "Pharmaceuticals",
    "marketCap": "221.66B"
  },
  {
    "ticker": "NVOS",
    "organization": "Novo Integrated Sciences",
    "industry": "Health Care Providers & Services",
    "marketCap": "49.80M"
  },
  {
    "ticker": "NVR",
    "organization": "NVR",
    "industry": " Inc.",
    "marketCap": "Household Durables"
  },
  {
    "ticker": "NVRO",
    "organization": "Nevro Corp.",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "4.19B"
  },
  {
    "ticker": "NVS",
    "organization": "Novartis",
    "industry": "Pharmaceuticals",
    "marketCap": "184.42B"
  },
  {
    "ticker": "NVSA",
    "organization": "New Vista Acquisition",
    "industry": "Shell Companies",
    "marketCap": "335.68M"
  },
  {
    "ticker": "NVST",
    "organization": "Envista Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "6.90B"
  },
  {
    "ticker": "NVT",
    "organization": "nVent Electric",
    "industry": "Electrical Equipment",
    "marketCap": "5.58B"
  },
  {
    "ticker": "NVTA",
    "organization": "Invitae Corporation",
    "industry": "Biotechnology",
    "marketCap": "6.23B"
  },
  {
    "ticker": "NVVE",
    "organization": "Nuvve",
    "industry": "Specialty Retail",
    "marketCap": "214.02M"
  },
  {
    "ticker": "NWBI",
    "organization": "Northwest Bancshares",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.69B"
  },
  {
    "ticker": "NWE",
    "organization": "NorthWestern",
    "industry": "Multi-Utilities",
    "marketCap": "2.99B"
  },
  {
    "ticker": "NWFL",
    "organization": "Norwood Financial",
    "industry": "Banks",
    "marketCap": "208.55M"
  },
  {
    "ticker": "NWG",
    "organization": "NatWest Group",
    "industry": "Banks",
    "marketCap": "34.98B"
  },
  {
    "ticker": "NWL",
    "organization": "Newell Brands",
    "industry": "Household Durables",
    "marketCap": "9.45B"
  },
  {
    "ticker": "NWLI",
    "organization": "National Western Life Group",
    "industry": "Insurance",
    "marketCap": "771.09M"
  },
  {
    "ticker": "NWN",
    "organization": "Northwest Natural",
    "industry": "Gas Utilities",
    "marketCap": "1.42B"
  },
  {
    "ticker": "NWPX",
    "organization": "Northwest Pipe Company",
    "industry": "Construction & Engineering",
    "marketCap": "237.88M"
  },
  {
    "ticker": "NWS",
    "organization": "News Corp",
    "industry": "Media",
    "marketCap": "14.07B"
  },
  {
    "ticker": "NWSA",
    "organization": "News Corp",
    "industry": "Media",
    "marketCap": "14.03B"
  },
  {
    "ticker": "NX",
    "organization": "Quanex Building Products",
    "industry": "Building Products",
    "marketCap": "718.93M"
  },
  {
    "ticker": "NXE",
    "organization": "NexGen Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "NXGN",
    "organization": "NextGen Healthcare",
    "industry": "Health Care Technology",
    "marketCap": "969.58M"
  },
  {
    "ticker": "NXPI",
    "organization": "NXP Semiconductors",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "51.45B"
  },
  {
    "ticker": "NXRT",
    "organization": "NexPoint Residential Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.57B"
  },
  {
    "ticker": "NXST",
    "organization": "Nexstar Media Group",
    "industry": "Media",
    "marketCap": "6.50B"
  },
  {
    "ticker": "NXTC",
    "organization": "NextCure",
    "industry": "Biotechnology",
    "marketCap": "208.74M"
  },
  {
    "ticker": "NXTD",
    "organization": "Nxt-ID",
    "industry": "Software",
    "marketCap": "35.78M"
  },
  {
    "ticker": "NXTP",
    "organization": "NextPlay Technologies",
    "industry": "Information Technology Services",
    "marketCap": "119.03M"
  },
  {
    "ticker": "NXU",
    "organization": "Novus Capital II",
    "industry": "Shell Companies",
    "marketCap": "355.24M"
  },
  {
    "ticker": "NYC",
    "organization": "New York City REIT",
    "industry": "REIT-Office",
    "marketCap": "105.59M"
  },
  {
    "ticker": "NYCB",
    "organization": "New York Community Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "6.19B"
  },
  {
    "ticker": "NYMT",
    "organization": "New York Mortgage Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.63B"
  },
  {
    "ticker": "NYMX",
    "organization": "Nymox Pharmaceutical",
    "industry": "Biotechnology",
    "marketCap": "174.16M"
  },
  {
    "ticker": "NYT",
    "organization": "The New York Times",
    "industry": "Media",
    "marketCap": "8.23B"
  },
  {
    "ticker": "NYXH",
    "organization": "Nyxoah",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "721.16M"
  },
  {
    "ticker": "O",
    "organization": "Realty Income",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "25.64B"
  },
  {
    "ticker": "OACB",
    "organization": "Oaktree Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "306.87M"
  },
  {
    "ticker": "OAS",
    "organization": "Oasis Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "OB",
    "organization": "Outbrain",
    "industry": "Internet Content & Information",
    "marketCap": "861.37M"
  },
  {
    "ticker": "OBAS",
    "organization": "Optibase",
    "industry": "Real Estate Management & Development",
    "marketCap": "57.80M"
  },
  {
    "ticker": "OBCI",
    "organization": "Ocean Bio-Chem",
    "industry": "Household Products",
    "marketCap": "89.36M"
  },
  {
    "ticker": "OBLG",
    "organization": "Oblong",
    "industry": "Software-Application",
    "marketCap": "63.38M"
  },
  {
    "ticker": "OBNK",
    "organization": "Origin Bancorp",
    "industry": "Banks",
    "marketCap": "995.32M"
  },
  {
    "ticker": "OBSV",
    "organization": "ObsEva",
    "industry": "Biotechnology",
    "marketCap": "243.99M"
  },
  {
    "ticker": "OBT",
    "organization": "Orange County Bancorp",
    "industry": "Banks-Regional",
    "marketCap": "191.45M"
  },
  {
    "ticker": "OC",
    "organization": "Owens Corning",
    "industry": "Building Products",
    "marketCap": "8.98B"
  },
  {
    "ticker": "OCA",
    "organization": "Omnichannel Acquisition",
    "industry": "Shell Companies",
    "marketCap": "255.93M"
  },
  {
    "ticker": "OCAX",
    "organization": "OCA Acquisition",
    "industry": "Shell Companies",
    "marketCap": "185.38M"
  },
  {
    "ticker": "OCC",
    "organization": "Optical Cable Corporation",
    "industry": "Communications Equipment",
    "marketCap": "28.56M"
  },
  {
    "ticker": "OCCI",
    "organization": "OFS Credit Company",
    "industry": "Asset Management",
    "marketCap": "109.87M"
  },
  {
    "ticker": "OCDX",
    "organization": "Ortho Clinical Diagnostics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "4.37B"
  },
  {
    "ticker": "OCFC",
    "organization": "OceanFirst Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.30B"
  },
  {
    "ticker": "OCFT",
    "organization": "OneConnect Financial Technology",
    "industry": "Software",
    "marketCap": "1.59B"
  },
  {
    "ticker": "OCG",
    "organization": "Oriental Culture Holding",
    "industry": "Internet Retail",
    "marketCap": "78.71M"
  },
  {
    "ticker": "OCGN",
    "organization": "Ocugen",
    "industry": "Biotechnology",
    "marketCap": "1.39B"
  },
  {
    "ticker": "OCN",
    "organization": "Ocwen Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "264.51M"
  },
  {
    "ticker": "OCSL",
    "organization": "Oaktree Specialty Lending",
    "industry": "Capital Markets",
    "marketCap": "1.29B"
  },
  {
    "ticker": "OCUL",
    "organization": "Ocular Therapeutix",
    "industry": "Pharmaceuticals",
    "marketCap": "794.16M"
  },
  {
    "ticker": "OCUP",
    "organization": "Ocuphire Pharma",
    "industry": "Biotechnology",
    "marketCap": "87.02M"
  },
  {
    "ticker": "OCX",
    "organization": "OncoCyte",
    "industry": "Biotechnology",
    "marketCap": "322.37M"
  },
  {
    "ticker": "ODC",
    "organization": "Oil-Dri Corporation of America",
    "industry": "Household Products",
    "marketCap": "259.88M"
  },
  {
    "ticker": "ODFL",
    "organization": "Old Dominion Freight Line",
    "industry": "Road & Rail",
    "marketCap": "32.71B"
  },
  {
    "ticker": "ODP",
    "organization": "Office Depot",
    "industry": "Specialty Retail",
    "marketCap": "2.14B"
  },
  {
    "ticker": "ODT",
    "organization": "Odonate Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "117.42M"
  },
  {
    "ticker": "OEC",
    "organization": "Orion Engineered Carbons",
    "industry": "Chemicals",
    "marketCap": "1.14B"
  },
  {
    "ticker": "OEG",
    "organization": "Orbital Energy Group",
    "industry": "Utilities-Diversified",
    "marketCap": "200.36M"
  },
  {
    "ticker": "OEPW",
    "organization": "One Equity Partners Open Water I",
    "industry": "Shell Companies",
    "marketCap": "420.90M"
  },
  {
    "ticker": "OESX",
    "organization": "Orion Energy Systems",
    "industry": "Electrical Equipment",
    "marketCap": "122.45M"
  },
  {
    "ticker": "OFC",
    "organization": "Corporate Office Properties Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.08B"
  },
  {
    "ticker": "OFED",
    "organization": "Oconee Federal Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "129.75M"
  },
  {
    "ticker": "OFG",
    "organization": "OFG Bancorp",
    "industry": "Banks",
    "marketCap": "1.31B"
  },
  {
    "ticker": "OFIX",
    "organization": "Orthofix Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "778.34M"
  },
  {
    "ticker": "OFLX",
    "organization": "Omega Flex",
    "industry": "Machinery",
    "marketCap": "1.46B"
  },
  {
    "ticker": "OFS",
    "organization": "OFS Capital",
    "industry": "Capital Markets",
    "marketCap": "139.79M"
  },
  {
    "ticker": "OG",
    "organization": "Onion Global",
    "industry": "Software-Application",
    "marketCap": "702.85M"
  },
  {
    "ticker": "OGE",
    "organization": "OGE Energy",
    "industry": "Electric Utilities",
    "marketCap": "6.60B"
  },
  {
    "ticker": "OGEN",
    "organization": "Oragenics",
    "industry": "Biotechnology",
    "marketCap": "72.35M"
  },
  {
    "ticker": "OGI",
    "organization": "OrganiGram Holdings",
    "industry": "Pharmaceuticals",
    "marketCap": "678.24M"
  },
  {
    "ticker": "OGN",
    "organization": "Organon",
    "industry": "Drug Manufacturers-General",
    "marketCap": "8.47B"
  },
  {
    "ticker": "OGS",
    "organization": "ONE Gas",
    "industry": "Gas Utilities",
    "marketCap": "3.42B"
  },
  {
    "ticker": "OHI",
    "organization": "Omega Healthcare Investors",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "7.27B"
  },
  {
    "ticker": "OHPA",
    "organization": "Orion Acquisition",
    "industry": "Shell Companies",
    "marketCap": "502.23M"
  },
  {
    "ticker": "OI",
    "organization": "O-I Glass",
    "industry": "Containers & Packaging",
    "marketCap": "2.24B"
  },
  {
    "ticker": "OII",
    "organization": "Oceaneering International",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.33B"
  },
  {
    "ticker": "OIIM",
    "organization": "O2Micro International",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "173.51M"
  },
  {
    "ticker": "OIS",
    "organization": "Oil States International",
    "industry": "Energy Equipment & Services",
    "marketCap": "406.91M"
  },
  {
    "ticker": "OKE",
    "organization": "ONEOK",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "OKTA",
    "organization": "Okta",
    "industry": " Inc",
    "marketCap": "IT Services"
  },
  {
    "ticker": "OLB",
    "organization": "OLB Group",
    "industry": "Software-Application",
    "marketCap": "29.10M"
  },
  {
    "ticker": "OLED",
    "organization": "Universal Display",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "8.12B"
  },
  {
    "ticker": "OLK",
    "organization": "Olink Holding",
    "industry": "Diagnostics & Research",
    "marketCap": "2.92B"
  },
  {
    "ticker": "OLLI",
    "organization": "Ollie's Bargain Outlet",
    "industry": "Multiline Retail",
    "marketCap": "3.90B"
  },
  {
    "ticker": "OLMA",
    "organization": "Olema Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.11B"
  },
  {
    "ticker": "OLN",
    "organization": "Olin",
    "industry": "Chemicals",
    "marketCap": "7.74B"
  },
  {
    "ticker": "OLO",
    "organization": "Olo",
    "industry": " Inc.",
    "marketCap": "Software-Application"
  },
  {
    "ticker": "OLP",
    "organization": "One Liberty Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "648.21M"
  },
  {
    "ticker": "OLPX",
    "organization": "Olaplex Holdings",
    "industry": "Household & Personal Products",
    "marketCap": "15.00B"
  },
  {
    "ticker": "OM",
    "organization": "Outset Medical",
    "industry": "Medical Devices",
    "marketCap": "2.30B"
  },
  {
    "ticker": "OMAB",
    "organization": "Grupo Aeroportuario del Centro Norte",
    "industry": "Transportation Infrastructure",
    "marketCap": "2.60B"
  },
  {
    "ticker": "OMC",
    "organization": "Omnicom Group",
    "industry": "Media",
    "marketCap": "15.89B"
  },
  {
    "ticker": "OMCL",
    "organization": "Omnicell",
    "industry": "Health Care Technology",
    "marketCap": "6.58B"
  },
  {
    "ticker": "OMEG",
    "organization": "Omega Alpha SPAC",
    "industry": "Shell Companies",
    "marketCap": "172.72M"
  },
  {
    "ticker": "OMER",
    "organization": "Omeros",
    "industry": "Pharmaceuticals",
    "marketCap": "513.72M"
  },
  {
    "ticker": "OMEX",
    "organization": "Odyssey Marine Exploration",
    "industry": "Commercial Services & Supplies",
    "marketCap": "91.49M"
  },
  {
    "ticker": "OMF",
    "organization": "OneMain Holdings",
    "industry": "Consumer Finance",
    "marketCap": "7.53B"
  },
  {
    "ticker": "OMGA",
    "organization": "Omega Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "983.78M"
  },
  {
    "ticker": "OMI",
    "organization": "Owens & Minor",
    "industry": "Health Care Providers & Services",
    "marketCap": "2.35B"
  },
  {
    "ticker": "OMIC",
    "organization": "Singular Genomics Systems",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "839.35M"
  },
  {
    "ticker": "OMP",
    "organization": "Oasis Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "OMQS",
    "organization": "OMNIQ",
    "industry": "Software-Application",
    "marketCap": "73.80M"
  },
  {
    "ticker": "ON",
    "organization": "ON Semiconductor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "19.77B"
  },
  {
    "ticker": "ONB",
    "organization": "Old National Bancorp",
    "industry": "Banks",
    "marketCap": "2.83B"
  },
  {
    "ticker": "ONCR",
    "organization": "Oncorus",
    "industry": "Biotechnology",
    "marketCap": "240.24M"
  },
  {
    "ticker": "ONCS",
    "organization": "OncoSec Medical",
    "industry": "Biotechnology",
    "marketCap": "84.25M"
  },
  {
    "ticker": "ONCT",
    "organization": "Oncternal Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "203.96M"
  },
  {
    "ticker": "ONCY",
    "organization": "Oncolytics Biotech",
    "industry": "Biotechnology",
    "marketCap": "110.47M"
  },
  {
    "ticker": "ONDS",
    "organization": "Ondas Holdings",
    "industry": "Communication Equipment",
    "marketCap": "360.18M"
  },
  {
    "ticker": "ONE",
    "organization": "OneSmart International Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "71.58M"
  },
  {
    "ticker": "ONEM",
    "organization": "1Life Healthcare",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "3.89B"
  },
  {
    "ticker": "ONEW",
    "organization": "OneWater Marine",
    "industry": "Specialty Retail",
    "marketCap": "633.74M"
  },
  {
    "ticker": "ONON",
    "organization": "On Holding",
    "industry": "Apparel Retail",
    "marketCap": "8.27B"
  },
  {
    "ticker": "ONTF",
    "organization": "ON24",
    "industry": "Software-Application",
    "marketCap": "916.74M"
  },
  {
    "ticker": "ONTO",
    "organization": "Onto Innovation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.60B"
  },
  {
    "ticker": "ONTX",
    "organization": "Onconova Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "76.06M"
  },
  {
    "ticker": "ONVO",
    "organization": "Organovo Holdings",
    "industry": "Biotechnology",
    "marketCap": "57.89M"
  },
  {
    "ticker": "OOMA",
    "organization": "Ooma",
    "industry": " Inc.",
    "marketCap": "Diversified Telecommunication Services"
  },
  {
    "ticker": "OPA",
    "organization": "Magnum Opus Acquisition",
    "industry": "Shell Companies",
    "marketCap": "248.00M"
  },
  {
    "ticker": "OPAD",
    "organization": "Offerpad Solutions",
    "industry": "Real Estate Services",
    "marketCap": "2.03B"
  },
  {
    "ticker": "OPBK",
    "organization": "OP Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "155.12M"
  },
  {
    "ticker": "OPCH",
    "organization": "Option Care Health",
    "industry": "Medical Care Facilities",
    "marketCap": "4.46B"
  },
  {
    "ticker": "OPEN",
    "organization": "Opendoor Technologies",
    "industry": "Real Estate Management & Development",
    "marketCap": "12.22B"
  },
  {
    "ticker": "OPFI",
    "organization": "OppFi",
    "industry": "Software-Application",
    "marketCap": "842.33M"
  },
  {
    "ticker": "OPGN",
    "organization": "OpGen",
    "industry": " Inc.",
    "marketCap": "Biotechnology"
  },
  {
    "ticker": "OPHC",
    "organization": "OptimumBank Holdings",
    "industry": "Banks",
    "marketCap": "22.60M"
  },
  {
    "ticker": "OPI",
    "organization": "Office Properties Income Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.25B"
  },
  {
    "ticker": "OPK",
    "organization": "OPKO Health",
    "industry": "Biotechnology",
    "marketCap": "2.44B"
  },
  {
    "ticker": "OPNT",
    "organization": "Opiant Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "112.98M"
  },
  {
    "ticker": "OPOF",
    "organization": "Old Point Financial",
    "industry": "Banks",
    "marketCap": "111.19M"
  },
  {
    "ticker": "OPRA",
    "organization": "Opera",
    "industry": "Software",
    "marketCap": "1.03B"
  },
  {
    "ticker": "OPRT",
    "organization": "Oportun Financial",
    "industry": "Consumer Finance",
    "marketCap": "709.31M"
  },
  {
    "ticker": "OPRX",
    "organization": "OptimizeRx",
    "industry": "Health Care Technology",
    "marketCap": "1.53B"
  },
  {
    "ticker": "OPT",
    "organization": "Opthea",
    "industry": "Biotechnology",
    "marketCap": "343.57M"
  },
  {
    "ticker": "OPTN",
    "organization": "OptiNose",
    "industry": "Pharmaceuticals",
    "marketCap": "161.26M"
  },
  {
    "ticker": "OPTT",
    "organization": "Ocean Power Technologies",
    "industry": "Electrical Equipment",
    "marketCap": "120.39M"
  },
  {
    "ticker": "OPY",
    "organization": "Oppenheimer Holdings",
    "industry": "Capital Markets",
    "marketCap": "585.08M"
  },
  {
    "ticker": "OR",
    "organization": "Osisko Gold Royalties",
    "industry": "Metals & Mining",
    "marketCap": "1.90B"
  },
  {
    "ticker": "ORA",
    "organization": "Ormat Technologies",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "3.73B"
  },
  {
    "ticker": "ORAN",
    "organization": "Orange S.A.",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "28.71B"
  },
  {
    "ticker": "ORC",
    "organization": "Orchid Island Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "681.99M"
  },
  {
    "ticker": "ORCC",
    "organization": "Owl Rock Capital",
    "industry": "Capital Markets",
    "marketCap": "5.53B"
  },
  {
    "ticker": "ORCL",
    "organization": "Oracle",
    "industry": "Software",
    "marketCap": "245.05B"
  },
  {
    "ticker": "ORGN",
    "organization": "Origin Materials",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "970.37M"
  },
  {
    "ticker": "ORGO",
    "organization": "Organogenesis Holdings",
    "industry": "Biotechnology",
    "marketCap": "1.74B"
  },
  {
    "ticker": "ORGS",
    "organization": "Orgenesis",
    "industry": "Biotechnology",
    "marketCap": "122.69M"
  },
  {
    "ticker": "ORI",
    "organization": "Old Republic International",
    "industry": "Insurance",
    "marketCap": "7.04B"
  },
  {
    "ticker": "ORIA",
    "organization": "Orion Biotech Opportunities",
    "industry": "Shell Companies",
    "marketCap": "245.75M"
  },
  {
    "ticker": "ORIC",
    "organization": "Oric Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "798.15M"
  },
  {
    "ticker": "ORLA",
    "organization": "Orla Mining",
    "industry": "Gold",
    "marketCap": "797.07M"
  },
  {
    "ticker": "ORLY",
    "organization": "O'Reilly Automotive",
    "industry": "Specialty Retail",
    "marketCap": "41.68B"
  },
  {
    "ticker": "ORMP",
    "organization": "Oramed Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "680.52M"
  },
  {
    "ticker": "ORN",
    "organization": "Orion Group Holdings",
    "industry": "Construction & Engineering",
    "marketCap": "166.04M"
  },
  {
    "ticker": "ORPH",
    "organization": "Orphazyme",
    "industry": "Biotechnology",
    "marketCap": "149.13M"
  },
  {
    "ticker": "ORRF",
    "organization": "Orrstown Financial Services",
    "industry": "Banks",
    "marketCap": "266.10M"
  },
  {
    "ticker": "ORTX",
    "organization": "Orchard Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "279.58M"
  },
  {
    "ticker": "OSAT",
    "organization": "Orbsat",
    "industry": "Communication Equipment",
    "marketCap": "31.78M"
  },
  {
    "ticker": "OSBC",
    "organization": "Old Second Bancorp",
    "industry": "Banks",
    "marketCap": "379.23M"
  },
  {
    "ticker": "OSCR",
    "organization": "Oscar Health",
    "industry": "Healthcare Plans",
    "marketCap": "3.68B"
  },
  {
    "ticker": "OSG",
    "organization": "Overseas Shipholding Group",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "OSH",
    "organization": "Oak Street Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "10.11B"
  },
  {
    "ticker": "OSI",
    "organization": "Osiris Acquisition",
    "industry": "Shell Companies",
    "marketCap": "284.60M"
  },
  {
    "ticker": "OSIS",
    "organization": "OSI Systems",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "OSK",
    "organization": "Oshkosh",
    "industry": "Machinery",
    "marketCap": "7.29B"
  },
  {
    "ticker": "OSMT",
    "organization": "Osmotica Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "191.80M"
  },
  {
    "ticker": "OSPN",
    "organization": "OneSpan",
    "industry": "Software",
    "marketCap": "780.49M"
  },
  {
    "ticker": "OSS",
    "organization": "One Stop Systems",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "OSTK",
    "organization": "Overstock.com",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "3.40B"
  },
  {
    "ticker": "OSTR",
    "organization": "Oyster Enterprises Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.60M"
  },
  {
    "ticker": "OSUR",
    "organization": "OraSure Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "768.33M"
  },
  {
    "ticker": "OSW",
    "organization": "OneSpaWorld Holdings",
    "industry": "Diversified Consumer Services",
    "marketCap": "937.33M"
  },
  {
    "ticker": "OTEC",
    "organization": "OceanTech Acquisitions I",
    "industry": "Shell Companies",
    "marketCap": "124.99M"
  },
  {
    "ticker": "OTEX",
    "organization": "Open Text",
    "industry": "Software",
    "marketCap": "13.14B"
  },
  {
    "ticker": "OTIC",
    "organization": "Otonomy",
    "industry": "Pharmaceuticals",
    "marketCap": "101.46M"
  },
  {
    "ticker": "OTIS",
    "organization": "Otis Worldwide",
    "industry": "Machinery",
    "marketCap": "35.21B"
  },
  {
    "ticker": "OTLK",
    "organization": "Outlook Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "376.98M"
  },
  {
    "ticker": "OTLY",
    "organization": "Oatly Group",
    "industry": "Beverages-Non-Alcoholic",
    "marketCap": "8.58B"
  },
  {
    "ticker": "OTMO",
    "organization": "Otonomo Technologies",
    "industry": "Software-Application",
    "marketCap": "610.58M"
  },
  {
    "ticker": "OTRA",
    "organization": "OTR Acquisition",
    "industry": "Shell Companies",
    "marketCap": "133.61M"
  },
  {
    "ticker": "OTRK",
    "organization": "Ontrak",
    "industry": "Health Care Providers & Services",
    "marketCap": "186.50M"
  },
  {
    "ticker": "OTTR",
    "organization": "Otter Tail Corporation",
    "industry": "Electric Utilities",
    "marketCap": "2.33B"
  },
  {
    "ticker": "OUST",
    "organization": "Ouster",
    "industry": "Electronic Components",
    "marketCap": "1.16B"
  },
  {
    "ticker": "OUT",
    "organization": "OUTFRONT Media",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.72B"
  },
  {
    "ticker": "OVBC",
    "organization": "Ohio Valley Banc",
    "industry": "Banks",
    "marketCap": "128.06M"
  },
  {
    "ticker": "OVID",
    "organization": "Ovid Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "229.61M"
  },
  {
    "ticker": "OVLY",
    "organization": "Oak Valley Bancorp",
    "industry": "Banks",
    "marketCap": "144.49M"
  },
  {
    "ticker": "OVV",
    "organization": "Ovintiv",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "OWL",
    "organization": "Blue Owl Capital",
    "industry": "Asset Management",
    "marketCap": "5.54B"
  },
  {
    "ticker": "OWLT",
    "organization": "Owlet",
    "industry": "Medical Devices",
    "marketCap": "628.02M"
  },
  {
    "ticker": "OXBR",
    "organization": "Oxbridge Re Holdings",
    "industry": "Insurance",
    "marketCap": "16.86M"
  },
  {
    "ticker": "OXM",
    "organization": "Oxford Industries",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "OXSQ",
    "organization": "Oxford Square Capital",
    "industry": "Capital Markets",
    "marketCap": "201.97M"
  },
  {
    "ticker": "OXY",
    "organization": "Occidental Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "OYST",
    "organization": "Oyster Point Pharma",
    "industry": "Biotechnology",
    "marketCap": "311.13M"
  },
  {
    "ticker": "OZK",
    "organization": "Bank OZK",
    "industry": "Banks",
    "marketCap": "5.69B"
  },
  {
    "ticker": "OZON",
    "organization": "Ozon Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "10.24B"
  },
  {
    "ticker": "PAA",
    "organization": "Plains All American Pipeline",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PAAS",
    "organization": "Pan American Silver",
    "industry": "Metals & Mining",
    "marketCap": "4.92B"
  },
  {
    "ticker": "PAC",
    "organization": "Grupo Aeroportuario del Pacifico",
    "industry": "Transportation Infrastructure",
    "marketCap": "6.20B"
  },
  {
    "ticker": "PACB",
    "organization": "Pacific Biosciences of California",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "5.65B"
  },
  {
    "ticker": "PACK",
    "organization": "Ranpak Holdings",
    "industry": "Containers & Packaging",
    "marketCap": "2.24B"
  },
  {
    "ticker": "PACW",
    "organization": "PacWest Bancorp",
    "industry": "Banks",
    "marketCap": "5.42B"
  },
  {
    "ticker": "PACX",
    "organization": "Pioneer Merger",
    "industry": "Shell Companies",
    "marketCap": "500.87M"
  },
  {
    "ticker": "PAE",
    "organization": "PAE Incorporated",
    "industry": "Specialty Business Services",
    "marketCap": "561.21M"
  },
  {
    "ticker": "PAG",
    "organization": "Penske Automotive Group",
    "industry": "Specialty Retail",
    "marketCap": "8.03B"
  },
  {
    "ticker": "PAGP",
    "organization": "Plains GP Holdings",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PAGS",
    "organization": "PagSeguro Digital",
    "industry": "IT Services",
    "marketCap": "17.36B"
  },
  {
    "ticker": "PAHC",
    "organization": "Phibro Animal Health",
    "industry": "Pharmaceuticals",
    "marketCap": "882.98M"
  },
  {
    "ticker": "PAIC",
    "organization": "Petra Acquisition",
    "industry": "Shell Companies",
    "marketCap": "91.70M"
  },
  {
    "ticker": "PALI",
    "organization": "Palisade Bio",
    "industry": "Biotechnology",
    "marketCap": "32.59M"
  },
  {
    "ticker": "PALT",
    "organization": "Paltalk",
    "industry": "Software-Application",
    "marketCap": "82.97M"
  },
  {
    "ticker": "PAM",
    "organization": "Pampa Energia",
    "industry": "Electric Utilities",
    "marketCap": "971.06M"
  },
  {
    "ticker": "PANA",
    "organization": "Panacea Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "199.88M"
  },
  {
    "ticker": "PANL",
    "organization": "Pangaea Logistics Solutions",
    "industry": "Marine",
    "marketCap": "239.02M"
  },
  {
    "ticker": "PANW",
    "organization": "Palo Alto Networks",
    "industry": "Software",
    "marketCap": "46.39B"
  },
  {
    "ticker": "PAQC",
    "organization": "Provident Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.31M"
  },
  {
    "ticker": "PAR",
    "organization": "PAR Technology",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "PARR",
    "organization": "Par Pacific Holdings",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PASG",
    "organization": "Passage Bio",
    "industry": "Biotechnology",
    "marketCap": "547.97M"
  },
  {
    "ticker": "PATH",
    "organization": "UiPath",
    "industry": "Software-Infrastructure",
    "marketCap": "26.42B"
  },
  {
    "ticker": "PATI",
    "organization": "Patriot Transportation Holding",
    "industry": "Road & Rail",
    "marketCap": "39.98M"
  },
  {
    "ticker": "PATK",
    "organization": "Patrick Industries",
    "industry": "Building Products",
    "marketCap": "2.07B"
  },
  {
    "ticker": "PAVM",
    "organization": "PAVmed",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "695.09M"
  },
  {
    "ticker": "PAX",
    "organization": "Patria Investments",
    "industry": "Asset Management",
    "marketCap": "2.27B"
  },
  {
    "ticker": "PAY",
    "organization": "Paymentus Holdings",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "PAYA",
    "organization": "Paya Holdings",
    "industry": "Software-Infrastructure",
    "marketCap": "1.40B"
  },
  {
    "ticker": "PAYC",
    "organization": "Paycom Software",
    "industry": "Software",
    "marketCap": "30.21B"
  },
  {
    "ticker": "PAYO",
    "organization": "Payoneer Global",
    "industry": "Software-Infrastructure",
    "marketCap": "2.93B"
  },
  {
    "ticker": "PAYS",
    "organization": "PaySign",
    "industry": "IT Services",
    "marketCap": "133.40M"
  },
  {
    "ticker": "PAYX",
    "organization": "Paychex",
    "industry": "IT Services",
    "marketCap": "41.00B"
  },
  {
    "ticker": "PB",
    "organization": "Prosperity Bancshares",
    "industry": "Banks",
    "marketCap": "6.77B"
  },
  {
    "ticker": "PBA",
    "organization": "Pembina Pipeline",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PBBK",
    "organization": "PB Bankshares",
    "industry": "Banks-Regional",
    "marketCap": "38.46M"
  },
  {
    "ticker": "PBCT",
    "organization": "People's United",
    "industry": "Banks",
    "marketCap": "7.48B"
  },
  {
    "ticker": "PBF",
    "organization": "PBF Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PBFS",
    "organization": "Pioneer Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "328.88M"
  },
  {
    "ticker": "PBFX",
    "organization": "PBF Logistics",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PBH",
    "organization": "Prestige Consumer Healthcare",
    "industry": "Pharmaceuticals",
    "marketCap": "2.77B"
  },
  {
    "ticker": "PBHC",
    "organization": "Pathfinder Bancorp",
    "industry": "Banks",
    "marketCap": "96.57M"
  },
  {
    "ticker": "PBI",
    "organization": "Pitney Bowes",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.32B"
  },
  {
    "ticker": "PBIP",
    "organization": "Prudential Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "118.47M"
  },
  {
    "ticker": "PBLA",
    "organization": "Panbela Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "28.80M"
  },
  {
    "ticker": "PBPB",
    "organization": "Potbelly Corporation",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "PBR",
    "organization": "Petroleo Brasileiro",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PBR.A",
    "organization": "Petroleo Brasileiro",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PBT",
    "organization": "Permian Basin Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PBTS",
    "organization": "Powerbridge Technologies",
    "industry": "Software",
    "marketCap": "56.47M"
  },
  {
    "ticker": "PBYI",
    "organization": "Puma Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "276.89M"
  },
  {
    "ticker": "PCAR",
    "organization": "PACCAR Inc",
    "industry": "Machinery",
    "marketCap": "27.67B"
  },
  {
    "ticker": "PCB",
    "organization": "PCB Bancorp",
    "industry": "Banks",
    "marketCap": "297.53M"
  },
  {
    "ticker": "PCG",
    "organization": "PG&E Corporation",
    "industry": "Electric Utilities",
    "marketCap": "21.62B"
  },
  {
    "ticker": "PCH",
    "organization": "PotlatchDeltic",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.44B"
  },
  {
    "ticker": "PCOM",
    "organization": "Points International",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "256.22M"
  },
  {
    "ticker": "PCOR",
    "organization": "Procore Technologies",
    "industry": "Software-Application",
    "marketCap": "11.53B"
  },
  {
    "ticker": "PCPC",
    "organization": "Periphas Capital Partnering",
    "industry": "Shell Companies",
    "marketCap": "432.21M"
  },
  {
    "ticker": "PCRX",
    "organization": "Pacira Biosciences",
    "industry": "Pharmaceuticals",
    "marketCap": "2.52B"
  },
  {
    "ticker": "PCSA",
    "organization": "Processa Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "131.39M"
  },
  {
    "ticker": "PCSB",
    "organization": "PCSB Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "294.60M"
  },
  {
    "ticker": "PCT",
    "organization": "PureCycle Technologies",
    "industry": "Pollution & Treatment Controls",
    "marketCap": "1.53B"
  },
  {
    "ticker": "PCTI",
    "organization": "PCTEL",
    "industry": " Inc.",
    "marketCap": "Communications Equipment"
  },
  {
    "ticker": "PCTY",
    "organization": "Paylocity Holding",
    "industry": "Software",
    "marketCap": "15.26B"
  },
  {
    "ticker": "PCVX",
    "organization": "Vaxcyte",
    "industry": "Biotechnology",
    "marketCap": "1.37B"
  },
  {
    "ticker": "PCYG",
    "organization": "Park City Group",
    "industry": "Software",
    "marketCap": "105.51M"
  },
  {
    "ticker": "PCYO",
    "organization": "Pure Cycle",
    "industry": "Water Utilities",
    "marketCap": "315.85M"
  },
  {
    "ticker": "PD",
    "organization": "PagerDuty",
    "industry": "Software",
    "marketCap": "3.59B"
  },
  {
    "ticker": "PDCE",
    "organization": "PDC Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PDCO",
    "organization": "Patterson Companies",
    "industry": "Health Care Providers & Services",
    "marketCap": "2.92B"
  },
  {
    "ticker": "PDD",
    "organization": "Pinduoduo",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "110.48B"
  },
  {
    "ticker": "PDEX",
    "organization": "Pro-Dex",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "93.79M"
  },
  {
    "ticker": "PDFS",
    "organization": "PDF Solutions",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "857.79M"
  },
  {
    "ticker": "PDLB",
    "organization": "PDL Community Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "251.99M"
  },
  {
    "ticker": "PDM",
    "organization": "Piedmont Office Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.16B"
  },
  {
    "ticker": "PDOT",
    "organization": "Peridot Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "495.76M"
  },
  {
    "ticker": "PDS",
    "organization": "Precision Drilling",
    "industry": "Energy Equipment & Services",
    "marketCap": "545.08M"
  },
  {
    "ticker": "PDSB",
    "organization": "PDS Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "405.61M"
  },
  {
    "ticker": "PEAK",
    "organization": "Healthpeak Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "18.27B"
  },
  {
    "ticker": "PEB",
    "organization": "Pebblebrook Hotel Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.02B"
  },
  {
    "ticker": "PEBK",
    "organization": "Peoples Bancorp of North Carolina",
    "industry": "Banks",
    "marketCap": "165.98M"
  },
  {
    "ticker": "PEBO",
    "organization": "Peoples Bancorp",
    "industry": "Banks",
    "marketCap": "898.64M"
  },
  {
    "ticker": "PECO",
    "organization": "Phillips Edison & Company",
    "industry": "REIT-Retail",
    "marketCap": "3.49B"
  },
  {
    "ticker": "PED",
    "organization": "Pedevco",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PEG",
    "organization": "Public Service Enterprise Group",
    "industry": "Multi-Utilities",
    "marketCap": "30.77B"
  },
  {
    "ticker": "PEGA",
    "organization": "Pegasystems",
    "industry": "Software",
    "marketCap": "10.35B"
  },
  {
    "ticker": "PEI",
    "organization": "Pennsylvania REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "154.80M"
  },
  {
    "ticker": "PEN",
    "organization": "Penumbra",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "9.62B"
  },
  {
    "ticker": "PENN",
    "organization": "Penn National Gaming",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "PEP",
    "organization": "PepsiCo",
    "industry": "Beverages",
    "marketCap": "208.53B"
  },
  {
    "ticker": "PERI",
    "organization": "Perion Network",
    "industry": "Media",
    "marketCap": "626.03M"
  },
  {
    "ticker": "PESI",
    "organization": "Perma-Fix Environmental Services",
    "industry": "Commercial Services & Supplies",
    "marketCap": "78.42M"
  },
  {
    "ticker": "PETQ",
    "organization": "PetIQ",
    "industry": " Inc.",
    "marketCap": "Health Care Providers & Services"
  },
  {
    "ticker": "PETS",
    "organization": "PetMed Express",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "539.50M"
  },
  {
    "ticker": "PETV",
    "organization": "PetVivo Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "26.05M"
  },
  {
    "ticker": "PETZ",
    "organization": "TDH Holdings",
    "industry": "Food Products",
    "marketCap": "76.38M"
  },
  {
    "ticker": "PFBC",
    "organization": "Preferred Bank",
    "industry": "Banks",
    "marketCap": "1.02B"
  },
  {
    "ticker": "PFC",
    "organization": "Premier Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.20B"
  },
  {
    "ticker": "PFDR",
    "organization": "Pathfinder Acquisition",
    "industry": "Shell Companies",
    "marketCap": "401.38M"
  },
  {
    "ticker": "PFE",
    "organization": "Pfizer",
    "industry": "Pharmaceuticals",
    "marketCap": "240.70B"
  },
  {
    "ticker": "PFG",
    "organization": "Principal Financial Group",
    "industry": "Insurance",
    "marketCap": "17.72B"
  },
  {
    "ticker": "PFGC",
    "organization": "Performance Food Group",
    "industry": "Food & Staples Retailing",
    "marketCap": "6.55B"
  },
  {
    "ticker": "PFHD",
    "organization": "Professional Holding",
    "industry": "Banks",
    "marketCap": "251.92M"
  },
  {
    "ticker": "PFIE",
    "organization": "Profire Energy",
    "industry": "Energy Equipment & Services",
    "marketCap": "54.99M"
  },
  {
    "ticker": "PFIN",
    "organization": "P&F Industries",
    "industry": "Household Durables",
    "marketCap": "21.44M"
  },
  {
    "ticker": "PFIS",
    "organization": "Peoples Financial Services",
    "industry": "Banks",
    "marketCap": "328.21M"
  },
  {
    "ticker": "PFLT",
    "organization": "PennantPark Floating Rate Capital",
    "industry": "Capital Markets",
    "marketCap": "500.55M"
  },
  {
    "ticker": "PFMT",
    "organization": "Performant Financial",
    "industry": "Commercial Services & Supplies",
    "marketCap": "251.66M"
  },
  {
    "ticker": "PFS",
    "organization": "Provident Financial Services",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.86B"
  },
  {
    "ticker": "PFSI",
    "organization": "PennyMac Financial Services",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "3.81B"
  },
  {
    "ticker": "PFSW",
    "organization": "PFSweb",
    "industry": "IT Services",
    "marketCap": "273.46M"
  },
  {
    "ticker": "PFTA",
    "organization": "Portage Fintech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "284.20M"
  },
  {
    "ticker": "PFX",
    "organization": "PhenixFIN",
    "industry": "Capital Markets",
    "marketCap": "114.33M"
  },
  {
    "ticker": "PG",
    "organization": "Procter & Gamble",
    "industry": "Household Products",
    "marketCap": "338.00B"
  },
  {
    "ticker": "PGC",
    "organization": "Peapack-Gladstone Financial",
    "industry": "Banks",
    "marketCap": "642.66M"
  },
  {
    "ticker": "PGEN",
    "organization": "Precigen",
    "industry": "Biotechnology",
    "marketCap": "1.06B"
  },
  {
    "ticker": "PGNY",
    "organization": "Progyny",
    "industry": "Health Care Providers & Services",
    "marketCap": "5.11B"
  },
  {
    "ticker": "PGR",
    "organization": "Progressive",
    "industry": "Insurance",
    "marketCap": "53.23B"
  },
  {
    "ticker": "PGRE",
    "organization": "Paramount Group",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.03B"
  },
  {
    "ticker": "PGRW",
    "organization": "Progress Acquisition",
    "industry": "Shell Companies",
    "marketCap": "212.35M"
  },
  {
    "ticker": "PGTI",
    "organization": "PGT Innovations",
    "industry": "Building Products",
    "marketCap": "1.14B"
  },
  {
    "ticker": "PH",
    "organization": "Parker-Hannifin",
    "industry": "Machinery",
    "marketCap": "35.95B"
  },
  {
    "ticker": "PHAR",
    "organization": "Pharming Group",
    "industry": "Biotechnology",
    "marketCap": "598.28M"
  },
  {
    "ticker": "PHAS",
    "organization": "PhaseBio Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "147.49M"
  },
  {
    "ticker": "PHAT",
    "organization": "Phathom Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "1.01B"
  },
  {
    "ticker": "PHCF",
    "organization": "Puhui Wealth Investment Management",
    "industry": "Capital Markets",
    "marketCap": "25.55M"
  },
  {
    "ticker": "PHG",
    "organization": "Koninklijke Philips",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "40.32B"
  },
  {
    "ticker": "PHGE",
    "organization": "BiomX",
    "industry": "Biotechnology",
    "marketCap": "85.71M"
  },
  {
    "ticker": "PHI",
    "organization": "PLDT Inc.",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "7.04B"
  },
  {
    "ticker": "PHIC",
    "organization": "Population Health Investment",
    "industry": "Shell Companies",
    "marketCap": "211.10M"
  },
  {
    "ticker": "PHIO",
    "organization": "Phio Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "26.93M"
  },
  {
    "ticker": "PHM",
    "organization": "PulteGroup",
    "industry": "Household Durables",
    "marketCap": "11.97B"
  },
  {
    "ticker": "PHR",
    "organization": "Phreesia",
    "industry": "Health Care Technology",
    "marketCap": "3.08B"
  },
  {
    "ticker": "PHUN",
    "organization": "Phunware",
    "industry": "Software-Application",
    "marketCap": "69.42M"
  },
  {
    "ticker": "PHVS",
    "organization": "Pharvaris",
    "industry": "Biotechnology",
    "marketCap": "588.03M"
  },
  {
    "ticker": "PHX",
    "organization": "PHX Minerals",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PI",
    "organization": "Impinj",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.40B"
  },
  {
    "ticker": "PIAI",
    "organization": "Prime Impact Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "355.12M"
  },
  {
    "ticker": "PICC",
    "organization": "Pivotal Investment III",
    "industry": "Shell Companies",
    "marketCap": "336.03M"
  },
  {
    "ticker": "PII",
    "organization": "Polaris",
    "industry": "Leisure Products",
    "marketCap": "7.25B"
  },
  {
    "ticker": "PINC",
    "organization": "Premier",
    "industry": "Health Care Providers & Services",
    "marketCap": "4.66B"
  },
  {
    "ticker": "PINE",
    "organization": "Alpine Income Property Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "207.23M"
  },
  {
    "ticker": "PING",
    "organization": "Ping Identity",
    "industry": "Software",
    "marketCap": "2.08B"
  },
  {
    "ticker": "PINS",
    "organization": "Pinterest",
    "industry": "Interactive Media & Services",
    "marketCap": "33.92B"
  },
  {
    "ticker": "PIPP",
    "organization": "Pine Island Acquisition",
    "industry": "Shell Companies",
    "marketCap": "266.16M"
  },
  {
    "ticker": "PIPR",
    "organization": "Piper Sandler",
    "industry": "Capital Markets",
    "marketCap": "2.57B"
  },
  {
    "ticker": "PIRS",
    "organization": "Pieris Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "347.56M"
  },
  {
    "ticker": "PIXY",
    "organization": "ShiftPixy",
    "industry": "Professional Services",
    "marketCap": "31.29M"
  },
  {
    "ticker": "PJT",
    "organization": "PJT Partners",
    "industry": "Capital Markets",
    "marketCap": "3.24B"
  },
  {
    "ticker": "PK",
    "organization": "Park Hotels & Resorts",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.64B"
  },
  {
    "ticker": "PKBK",
    "organization": "Parke Bancorp",
    "industry": "Banks",
    "marketCap": "258.08M"
  },
  {
    "ticker": "PKE",
    "organization": "Park Aerospace",
    "industry": "Aerospace & Defense",
    "marketCap": "278.14M"
  },
  {
    "ticker": "PKG",
    "organization": "Packaging Corporation of America",
    "industry": "Containers & Packaging",
    "marketCap": "13.06B"
  },
  {
    "ticker": "PKI",
    "organization": "PerkinElmer",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "21.87B"
  },
  {
    "ticker": "PKOH",
    "organization": "Park-Ohio Holdings",
    "industry": "Machinery",
    "marketCap": "319.63M"
  },
  {
    "ticker": "PKX",
    "organization": "POSCO",
    "industry": "Metals & Mining",
    "marketCap": "20.99B"
  },
  {
    "ticker": "PLAB",
    "organization": "Photronics",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "833.49M"
  },
  {
    "ticker": "PLAG",
    "organization": "Planet Green Holdings",
    "industry": "Food Products",
    "marketCap": "41.26M"
  },
  {
    "ticker": "PLAN",
    "organization": "Anaplan",
    "industry": "Software",
    "marketCap": "9.06B"
  },
  {
    "ticker": "PLAY",
    "organization": "Dave & Buster's",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "PLBC",
    "organization": "Plumas Bancorp",
    "industry": "Banks",
    "marketCap": "183.49M"
  },
  {
    "ticker": "PLBY",
    "organization": "PLBY Group",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "PLCE",
    "organization": "Children's Place",
    "industry": "Specialty Retail",
    "marketCap": "1.20B"
  },
  {
    "ticker": "PLD",
    "organization": "Prologis",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "93.29B"
  },
  {
    "ticker": "PLG",
    "organization": "Platinum Group Metals",
    "industry": "Metals & Mining",
    "marketCap": "151.71M"
  },
  {
    "ticker": "PLIN",
    "organization": "China Xiangtai Food",
    "industry": "Food Products",
    "marketCap": "41.94M"
  },
  {
    "ticker": "PLL",
    "organization": "Piedmont Lithium",
    "industry": "Metals & Mining",
    "marketCap": "839.97M"
  },
  {
    "ticker": "PLM",
    "organization": "PolyMet Mining",
    "industry": "Metals & Mining",
    "marketCap": "308.08M"
  },
  {
    "ticker": "PLMI",
    "organization": "Plum Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "387.45M"
  },
  {
    "ticker": "PLMR",
    "organization": "Palomar Holdings",
    "industry": "Insurance",
    "marketCap": "2.06B"
  },
  {
    "ticker": "PLNT",
    "organization": "Planet Fitness",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "PLOW",
    "organization": "Douglas Dynamics",
    "industry": "Machinery",
    "marketCap": "864.55M"
  },
  {
    "ticker": "PLPC",
    "organization": "Preformed Line Products",
    "industry": "Electrical Equipment",
    "marketCap": "319.12M"
  },
  {
    "ticker": "PLRX",
    "organization": "Pliant Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "620.65M"
  },
  {
    "ticker": "PLSE",
    "organization": "Pulse Biosciences",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "638.60M"
  },
  {
    "ticker": "PLTK",
    "organization": "Playtika",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "11.27B"
  },
  {
    "ticker": "PLTR",
    "organization": "Palantir",
    "industry": "Software",
    "marketCap": "46.95B"
  },
  {
    "ticker": "PLUG",
    "organization": "Plug Power",
    "industry": "Electrical Equipment",
    "marketCap": "14.57B"
  },
  {
    "ticker": "PLUS",
    "organization": "ePlus",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "PLX",
    "organization": "Protalix BioTherapeutics",
    "industry": "Biotechnology",
    "marketCap": "55.84M"
  },
  {
    "ticker": "PLXP",
    "organization": "PLx Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "523.02M"
  },
  {
    "ticker": "PLXS",
    "organization": "Plexus Corp.",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "PLYA",
    "organization": "Playa Hotels & Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "PLYM",
    "organization": "Plymouth Industrial REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "726.67M"
  },
  {
    "ticker": "PM",
    "organization": "Philip Morris",
    "industry": "Tobacco",
    "marketCap": "149.03B"
  },
  {
    "ticker": "PMBC",
    "organization": "Pacific Mercantile Bancorp",
    "industry": "Banks",
    "marketCap": "228.16M"
  },
  {
    "ticker": "PMCB",
    "organization": "PharmaCyte Biotech",
    "industry": "Biotechnology",
    "marketCap": "64.22M"
  },
  {
    "ticker": "PMD",
    "organization": "Psychemedics",
    "industry": "Health Care Providers & Services",
    "marketCap": "46.78M"
  },
  {
    "ticker": "PME",
    "organization": "Pingtan Marine Enterprise",
    "industry": "Food Products",
    "marketCap": "62.23M"
  },
  {
    "ticker": "PMGM",
    "organization": "Priveterra Acquisition",
    "industry": "Shell Companies",
    "marketCap": "385.55M"
  },
  {
    "ticker": "PMT",
    "organization": "PennyMac Mortgage Investment Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.95B"
  },
  {
    "ticker": "PMTS",
    "organization": "CPI Card Group",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "PMVC",
    "organization": "PMV Consumer Acquisition",
    "industry": "Shell Companies",
    "marketCap": "213.97M"
  },
  {
    "ticker": "PMVP",
    "organization": "PMV Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.35B"
  },
  {
    "ticker": "PNBK",
    "organization": "Patriot National Bancorp",
    "industry": "Banks",
    "marketCap": "39.71M"
  },
  {
    "ticker": "PNC",
    "organization": "PNC Financial Services",
    "industry": "Banks",
    "marketCap": "84.71B"
  },
  {
    "ticker": "PNFP",
    "organization": "Pinnacle Financial Partners",
    "industry": "Banks",
    "marketCap": "7.32B"
  },
  {
    "ticker": "PNM",
    "organization": "PNM Resources",
    "industry": "Electric Utilities",
    "marketCap": "4.26B"
  },
  {
    "ticker": "PNNT",
    "organization": "PennantPark Investment",
    "industry": "Capital Markets",
    "marketCap": "443.84M"
  },
  {
    "ticker": "PNR",
    "organization": "Pentair",
    "industry": "Machinery",
    "marketCap": "12.08B"
  },
  {
    "ticker": "PNRG",
    "organization": "PrimeEnergy Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PNT",
    "organization": "POINT Biopharma Global",
    "industry": "Biotechnology",
    "marketCap": "681.32M"
  },
  {
    "ticker": "PNTG",
    "organization": "Pennant Group",
    "industry": "Health Care Providers & Services",
    "marketCap": "795.27M"
  },
  {
    "ticker": "PNTM",
    "organization": "Pontem",
    "industry": "Shell Companies",
    "marketCap": "839.21M"
  },
  {
    "ticker": "PNW",
    "organization": "Pinnacle West Capital",
    "industry": "Electric Utilities",
    "marketCap": "8.20B"
  },
  {
    "ticker": "POAI",
    "organization": "Predictive Oncology",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "94.84M"
  },
  {
    "ticker": "PODD",
    "organization": "Insulet",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "19.22B"
  },
  {
    "ticker": "POLA",
    "organization": "Polar Power",
    "industry": "Electrical Equipment",
    "marketCap": "69.70M"
  },
  {
    "ticker": "POLY",
    "organization": "Plantronics",
    "industry": "Communications Equipment",
    "marketCap": "1.09B"
  },
  {
    "ticker": "POND",
    "organization": "Angel Pond Holdings",
    "industry": "Shell Companies",
    "marketCap": "342.82M"
  },
  {
    "ticker": "POOL",
    "organization": "Pool Corporation",
    "industry": "Distributors",
    "marketCap": "17.36B"
  },
  {
    "ticker": "POR",
    "organization": "Portland General Electric",
    "industry": "Electric Utilities",
    "marketCap": "4.20B"
  },
  {
    "ticker": "POSH",
    "organization": "Poshmark",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.89B"
  },
  {
    "ticker": "POST",
    "organization": "Post Holdings",
    "industry": "Food Products",
    "marketCap": "7.10B"
  },
  {
    "ticker": "POW",
    "organization": "Powered Brands",
    "industry": "Shell Companies",
    "marketCap": "337.76M"
  },
  {
    "ticker": "POWI",
    "organization": "Power Integrations",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "6.06B"
  },
  {
    "ticker": "POWL",
    "organization": "Powell Industries",
    "industry": "Electrical Equipment",
    "marketCap": "287.27M"
  },
  {
    "ticker": "POWW",
    "organization": "AMMO Inc",
    "industry": "Leisure Products",
    "marketCap": "684.75M"
  },
  {
    "ticker": "PPBI",
    "organization": "Pacific Premier Bancorp",
    "industry": "Banks",
    "marketCap": "4.07B"
  },
  {
    "ticker": "PPBT",
    "organization": "Purple Biotech",
    "industry": "Biotechnology",
    "marketCap": "80.44M"
  },
  {
    "ticker": "PPC",
    "organization": "Pilgrim's Pride",
    "industry": "Food Products",
    "marketCap": "7.14B"
  },
  {
    "ticker": "PPD",
    "organization": "PPD",
    "industry": " Inc.",
    "marketCap": "Life Sciences Tools & Services"
  },
  {
    "ticker": "PPG",
    "organization": "PPG Industries",
    "industry": "Chemicals",
    "marketCap": "33.78B"
  },
  {
    "ticker": "PPGH",
    "organization": "Poema Global",
    "industry": "Shell Companies",
    "marketCap": "424.78M"
  },
  {
    "ticker": "PPIH",
    "organization": "Perma-Pipe International Holdings",
    "industry": "Machinery",
    "marketCap": "63.74M"
  },
  {
    "ticker": "PPL",
    "organization": "PPL Corporation",
    "industry": "Electric Utilities",
    "marketCap": "21.46B"
  },
  {
    "ticker": "PPSI",
    "organization": "Pioneer Power Solutions",
    "industry": "Electrical Equipment",
    "marketCap": "28.75M"
  },
  {
    "ticker": "PPTA",
    "organization": "Perpetua Resources",
    "industry": "Other Precious Metals & Mining",
    "marketCap": "319.94M"
  },
  {
    "ticker": "PRA",
    "organization": "ProAssurance",
    "industry": "Insurance",
    "marketCap": "1.28B"
  },
  {
    "ticker": "PRAA",
    "organization": "PRA Group",
    "industry": "Consumer Finance",
    "marketCap": "1.95B"
  },
  {
    "ticker": "PRAX",
    "organization": "Praxis Precision Medicines",
    "industry": "Biotechnology",
    "marketCap": "832.10M"
  },
  {
    "ticker": "PRCH",
    "organization": "Porch Group",
    "industry": "Software-Application",
    "marketCap": "1.64B"
  },
  {
    "ticker": "PRCT",
    "organization": "PROCEPT BioRobotics",
    "industry": "Medical Devices",
    "marketCap": "1.64B"
  },
  {
    "ticker": "PRDO",
    "organization": "Perdoceo Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "759.69M"
  },
  {
    "ticker": "PRFT",
    "organization": "Perficient",
    "industry": "IT Services",
    "marketCap": "3.93B"
  },
  {
    "ticker": "PRFX",
    "organization": "PainReform",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "29.04M"
  },
  {
    "ticker": "PRG",
    "organization": "PROG Holdings",
    "industry": "Rental & Leasing Services",
    "marketCap": "2.85B"
  },
  {
    "ticker": "PRGO",
    "organization": "Perrigo",
    "industry": "Pharmaceuticals",
    "marketCap": "6.49B"
  },
  {
    "ticker": "PRGS",
    "organization": "Progress Software",
    "industry": "Software",
    "marketCap": "2.18B"
  },
  {
    "ticker": "PRI",
    "organization": "Primerica",
    "industry": "Insurance",
    "marketCap": "6.16B"
  },
  {
    "ticker": "PRIM",
    "organization": "Primoris Services",
    "industry": "Construction & Engineering",
    "marketCap": "1.33B"
  },
  {
    "ticker": "PRK",
    "organization": "Park National",
    "industry": "Banks",
    "marketCap": "2.05B"
  },
  {
    "ticker": "PRLB",
    "organization": "Proto Labs",
    "industry": "Machinery",
    "marketCap": "1.85B"
  },
  {
    "ticker": "PRLD",
    "organization": "Prelude Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.47B"
  },
  {
    "ticker": "PRMW",
    "organization": "Primo Water",
    "industry": "Beverages",
    "marketCap": "2.60B"
  },
  {
    "ticker": "PRO",
    "organization": "PROS Holdings",
    "industry": "Software",
    "marketCap": "1.64B"
  },
  {
    "ticker": "PROC",
    "organization": "Procaps Group",
    "industry": "Shell Companies",
    "marketCap": "182.93M"
  },
  {
    "ticker": "PROF",
    "organization": "Profound Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "290.10M"
  },
  {
    "ticker": "PROG",
    "organization": "Progenity",
    "industry": "Health Care Providers & Services",
    "marketCap": "213.74M"
  },
  {
    "ticker": "PROV",
    "organization": "Provident Financial Holdings",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "128.37M"
  },
  {
    "ticker": "PRPB",
    "organization": "CC Neuberger Principal Holdings II",
    "industry": "Shell Companies",
    "marketCap": "1.07B"
  },
  {
    "ticker": "PRPC",
    "organization": "CC Neuberger Principal Holdings III",
    "industry": "Shell Companies",
    "marketCap": "539.30M"
  },
  {
    "ticker": "PRPH",
    "organization": "ProPhase Labs",
    "industry": "Pharmaceuticals",
    "marketCap": "78.04M"
  },
  {
    "ticker": "PRPL",
    "organization": "Purple Innovation",
    "industry": "Household Durables",
    "marketCap": "1.42B"
  },
  {
    "ticker": "PRPO",
    "organization": "Precipio",
    "industry": "Health Care Providers & Services",
    "marketCap": "61.99M"
  },
  {
    "ticker": "PRQR",
    "organization": "ProQR Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "549.30M"
  },
  {
    "ticker": "PRSR",
    "organization": "Prospector Capital",
    "industry": "Shell Companies",
    "marketCap": "397.31M"
  },
  {
    "ticker": "PRT",
    "organization": "PermRock Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PRTA",
    "organization": "Prothena",
    "industry": "Biotechnology",
    "marketCap": "3.08B"
  },
  {
    "ticker": "PRTC",
    "organization": "PureTech Health",
    "industry": "Biotechnology",
    "marketCap": "1.38B"
  },
  {
    "ticker": "PRTG",
    "organization": "Portage Biotech",
    "industry": "Biotechnology",
    "marketCap": "279.18M"
  },
  {
    "ticker": "PRTH",
    "organization": "Priority Technology",
    "industry": "IT Services",
    "marketCap": "521.05M"
  },
  {
    "ticker": "PRTK",
    "organization": "Paratek Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "238.61M"
  },
  {
    "ticker": "PRTS",
    "organization": "CarParts.com",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "822.41M"
  },
  {
    "ticker": "PRTY",
    "organization": "Party City",
    "industry": "Specialty Retail",
    "marketCap": "800.19M"
  },
  {
    "ticker": "PRU",
    "organization": "Prudential Financial",
    "industry": "Insurance",
    "marketCap": "40.67B"
  },
  {
    "ticker": "PRVA",
    "organization": "Privia Health Group",
    "industry": "Health Information Services",
    "marketCap": "2.47B"
  },
  {
    "ticker": "PRVB",
    "organization": "Provention Bio",
    "industry": "Pharmaceuticals",
    "marketCap": "409.40M"
  },
  {
    "ticker": "PSA",
    "organization": "Public Storage",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "52.06B"
  },
  {
    "ticker": "PSAG",
    "organization": "Property Solutions Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "396.63M"
  },
  {
    "ticker": "PSB",
    "organization": "PS Business Parks",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.38B"
  },
  {
    "ticker": "PSEC",
    "organization": "Prospect Capital",
    "industry": "Capital Markets",
    "marketCap": "3.05B"
  },
  {
    "ticker": "PSFE",
    "organization": "Paysafe",
    "industry": "Information Technology Services",
    "marketCap": "5.48B"
  },
  {
    "ticker": "PSHG",
    "organization": "Performance Shipping",
    "industry": "Marine Shipping",
    "marketCap": "29.17M"
  },
  {
    "ticker": "PSMT",
    "organization": "PriceSmart",
    "industry": "Food & Staples Retailing",
    "marketCap": "2.38B"
  },
  {
    "ticker": "PSN",
    "organization": "Parsons",
    "industry": "Aerospace & Defense",
    "marketCap": "3.54B"
  },
  {
    "ticker": "PSNL",
    "organization": "Personalis",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "863.38M"
  },
  {
    "ticker": "PSO",
    "organization": "Pearson",
    "industry": "Media",
    "marketCap": "7.51B"
  },
  {
    "ticker": "PSPC",
    "organization": "Post Holdings Partnering",
    "industry": "Shell Companies",
    "marketCap": "375.38M"
  },
  {
    "ticker": "PSTG",
    "organization": "Pure Storage",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "PSTH",
    "organization": "Pershing Square Tontine Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "3.94B"
  },
  {
    "ticker": "PSTI",
    "organization": "Pluristem Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "81.29M"
  },
  {
    "ticker": "PSTL",
    "organization": "Postal Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "253.58M"
  },
  {
    "ticker": "PSTV",
    "organization": "Plus Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "29.70M"
  },
  {
    "ticker": "PSTX",
    "organization": "Poseida Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "439.49M"
  },
  {
    "ticker": "PSX",
    "organization": "Phillips 66",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PSXP",
    "organization": "Phillips 66 Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PT",
    "organization": "Pintec Technology",
    "industry": "Consumer Finance",
    "marketCap": "41.41M"
  },
  {
    "ticker": "PTC",
    "organization": "PTC Inc.",
    "industry": "Software",
    "marketCap": "14.19B"
  },
  {
    "ticker": "PTCT",
    "organization": "PTC Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.57B"
  },
  {
    "ticker": "PTE",
    "organization": "PolarityTE",
    "industry": "Biotechnology",
    "marketCap": "52.96M"
  },
  {
    "ticker": "PTEN",
    "organization": "Patterson-UTI Energy",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.78B"
  },
  {
    "ticker": "PTGX",
    "organization": "Protagonist Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "853.53M"
  },
  {
    "ticker": "PTIC",
    "organization": "Proptech Investment II",
    "industry": "Shell Companies",
    "marketCap": "281.46M"
  },
  {
    "ticker": "PTIX",
    "organization": "Protagenic Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "30.88M"
  },
  {
    "ticker": "PTMN",
    "organization": "Portman Ridge Finance",
    "industry": "Capital Markets",
    "marketCap": "221.94M"
  },
  {
    "ticker": "PTN",
    "organization": "Palatin Technologies",
    "industry": "Biotechnology",
    "marketCap": "104.25M"
  },
  {
    "ticker": "PTNR",
    "organization": "Partner Communications",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "839.00M"
  },
  {
    "ticker": "PTOC",
    "organization": "Pine Technology Acquisition",
    "industry": "Shell Companies",
    "marketCap": "416.59M"
  },
  {
    "ticker": "PTON",
    "organization": "Peloton Interactive",
    "industry": "Leisure Products",
    "marketCap": "26.06B"
  },
  {
    "ticker": "PTPI",
    "organization": "Petros Pharmaceuticals",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "19.36M"
  },
  {
    "ticker": "PTR",
    "organization": "PetroChina",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PTRA",
    "organization": "Proterra",
    "industry": "Auto Manufacturers",
    "marketCap": "2.13B"
  },
  {
    "ticker": "PTRS",
    "organization": "Partners Bancorp",
    "industry": "Banks",
    "marketCap": "146.91M"
  },
  {
    "ticker": "PTSI",
    "organization": "P.A.M. Transportation Services",
    "industry": "Road & Rail",
    "marketCap": "509.75M"
  },
  {
    "ticker": "PTVE",
    "organization": "Pactiv Evergreen",
    "industry": "Containers & Packaging",
    "marketCap": "2.22B"
  },
  {
    "ticker": "PUBM",
    "organization": "PubMatic",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.29B"
  },
  {
    "ticker": "PUCK",
    "organization": "Goal Acquisitions",
    "industry": "Shell Companies",
    "marketCap": "322.99M"
  },
  {
    "ticker": "PUK",
    "organization": "Prudential",
    "industry": "Insurance",
    "marketCap": "51.91B"
  },
  {
    "ticker": "PULM",
    "organization": "Pulmatrix",
    "industry": "Pharmaceuticals",
    "marketCap": "43.50M"
  },
  {
    "ticker": "PUMP",
    "organization": "ProPetro Holding",
    "industry": "Energy Equipment & Services",
    "marketCap": "926.24M"
  },
  {
    "ticker": "PUYI",
    "organization": "Puyi Inc.",
    "industry": "Capital Markets",
    "marketCap": "367.92M"
  },
  {
    "ticker": "PV",
    "organization": "Primavera Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "523.79M"
  },
  {
    "ticker": "PVAC",
    "organization": "Penn Virginia",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PVBC",
    "organization": "Provident Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "296.23M"
  },
  {
    "ticker": "PVG",
    "organization": "Pretium Resources",
    "industry": "Metals & Mining",
    "marketCap": "1.81B"
  },
  {
    "ticker": "PVH",
    "organization": "PVH Corp",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "PVL",
    "organization": "Permianville Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PW",
    "organization": "Power REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "166.02M"
  },
  {
    "ticker": "PWFL",
    "organization": "PowerFleet",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "PWOD",
    "organization": "Penns Woods Bancorp",
    "industry": "Banks",
    "marketCap": "168.86M"
  },
  {
    "ticker": "PWP",
    "organization": "Perella Weinberg Partners",
    "industry": "Capital Markets",
    "marketCap": "568.09M"
  },
  {
    "ticker": "PWR",
    "organization": "Quanta Services",
    "industry": "Construction & Engineering",
    "marketCap": "16.22B"
  },
  {
    "ticker": "PWSC",
    "organization": "PowerSchool Holdings",
    "industry": "Software-Application",
    "marketCap": "4.77B"
  },
  {
    "ticker": "PXD",
    "organization": "Pioneer Natural Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "PXLW",
    "organization": "Pixelworks",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "251.16M"
  },
  {
    "ticker": "PXS",
    "organization": "Pyxis Tankers",
    "industry": "Marine",
    "marketCap": "30.27M"
  },
  {
    "ticker": "PYCR",
    "organization": "Paycor",
    "industry": "Software-Application",
    "marketCap": "6.21B"
  },
  {
    "ticker": "PYPD",
    "organization": "PolyPid",
    "industry": "Biotechnology",
    "marketCap": "144.14M"
  },
  {
    "ticker": "PYPL",
    "organization": "PayPal",
    "industry": "IT Services",
    "marketCap": "310.97B"
  },
  {
    "ticker": "PYR",
    "organization": "Pyrogenesis Canada",
    "industry": "Specialty Industrial Machinery",
    "marketCap": "689.50M"
  },
  {
    "ticker": "PZG",
    "organization": "Paramount Gold Nevada",
    "industry": "Metals & Mining",
    "marketCap": "34.03M"
  },
  {
    "ticker": "PZN",
    "organization": "Pzena Investment Management",
    "industry": "Capital Markets",
    "marketCap": "718.31M"
  },
  {
    "ticker": "PZZA",
    "organization": "Papa John's",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "QADA",
    "organization": "QAD Inc.",
    "industry": "Software",
    "marketCap": "1.84B"
  },
  {
    "ticker": "QADB",
    "organization": "QAD Inc.",
    "industry": "Software",
    "marketCap": "1.84B"
  },
  {
    "ticker": "QCOM",
    "organization": "Qualcomm",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "145.49B"
  },
  {
    "ticker": "QCRH",
    "organization": "QCR Holdings",
    "industry": "Banks",
    "marketCap": "808.33M"
  },
  {
    "ticker": "QD",
    "organization": "Qudian Inc.",
    "industry": "Consumer Finance",
    "marketCap": "379.63M"
  },
  {
    "ticker": "QDEL",
    "organization": "Quidel Corporation",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "5.92B"
  },
  {
    "ticker": "QFIN",
    "organization": "360 Finance",
    "industry": "Consumer Finance",
    "marketCap": "3.03B"
  },
  {
    "ticker": "QFTA",
    "organization": "Quantum FinTech Acquisition",
    "industry": "Shell Companies",
    "marketCap": "247.03M"
  },
  {
    "ticker": "QGEN",
    "organization": "Qiagen",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "11.67B"
  },
  {
    "ticker": "QH",
    "organization": "Quhuo",
    "industry": "Software-Application",
    "marketCap": "139.37M"
  },
  {
    "ticker": "QIPT",
    "organization": "Quipt Home Medical",
    "industry": "Medical Devices",
    "marketCap": "201.60M"
  },
  {
    "ticker": "QIWI",
    "organization": "Qiwi PLC",
    "industry": "IT Services",
    "marketCap": "531.18M"
  },
  {
    "ticker": "QK",
    "organization": "Q&K International Group",
    "industry": "Real Estate Management & Development",
    "marketCap": "39.66M"
  },
  {
    "ticker": "QLGN",
    "organization": "Qualigen Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "37.41M"
  },
  {
    "ticker": "QLI",
    "organization": "Qilian International",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "143.71M"
  },
  {
    "ticker": "QLYS",
    "organization": "Qualys",
    "industry": "Software",
    "marketCap": "4.34B"
  },
  {
    "ticker": "QMCO",
    "organization": "Quantum Corporation",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "QNST",
    "organization": "QuinStreet",
    "industry": "Interactive Media & Services",
    "marketCap": "973.71M"
  },
  {
    "ticker": "QRHC",
    "organization": "Quest Resource Holding",
    "industry": "Commercial Services & Supplies",
    "marketCap": "112.05M"
  },
  {
    "ticker": "QRTEA",
    "organization": "Qurate Retail",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "4.28B"
  },
  {
    "ticker": "QRTEB",
    "organization": "Qurate Retail",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "4.24B"
  },
  {
    "ticker": "QRVO",
    "organization": "Qorvo",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "18.81B"
  },
  {
    "ticker": "QS",
    "organization": "QuantumScape",
    "industry": "Auto Components",
    "marketCap": "10.07B"
  },
  {
    "ticker": "QSI",
    "organization": "Quantum-Si",
    "industry": "Biotechnology",
    "marketCap": "1.11B"
  },
  {
    "ticker": "QSR",
    "organization": "Restaurant Brands International",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "QTNT",
    "organization": "Quotient",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "276.32M"
  },
  {
    "ticker": "QTRX",
    "organization": "Quanterix",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "1.87B"
  },
  {
    "ticker": "QTT",
    "organization": "Qutoutiao",
    "industry": "Interactive Media & Services",
    "marketCap": "281.77M"
  },
  {
    "ticker": "QTWO",
    "organization": "Q2 Holdings",
    "industry": "Software",
    "marketCap": "4.61B"
  },
  {
    "ticker": "QUAD",
    "organization": "Quad/Graphics",
    "industry": "Commercial Services & Supplies",
    "marketCap": "238.16M"
  },
  {
    "ticker": "QUBT",
    "organization": "Quantum Computing",
    "industry": "Computer Hardware",
    "marketCap": "180.19M"
  },
  {
    "ticker": "QUIK",
    "organization": "QuickLogic",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "65.21M"
  },
  {
    "ticker": "QUMU",
    "organization": "Qumu Corporation",
    "industry": "Software",
    "marketCap": "43.93M"
  },
  {
    "ticker": "QUOT",
    "organization": "Quotient Technology",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "543.97M"
  },
  {
    "ticker": "QURE",
    "organization": "uniQure",
    "industry": "Biotechnology",
    "marketCap": "1.46B"
  },
  {
    "ticker": "R",
    "organization": "Ryder System",
    "industry": "Road & Rail",
    "marketCap": "4.40B"
  },
  {
    "ticker": "RAAS",
    "organization": "Cloopen Group Holding",
    "industry": "Software-Application",
    "marketCap": "708.43M"
  },
  {
    "ticker": "RACB",
    "organization": "Research Alliance II",
    "industry": "Shell Companies",
    "marketCap": "188.99M"
  },
  {
    "ticker": "RACE",
    "organization": "Ferrari",
    "industry": "Automobiles",
    "marketCap": "51.90B"
  },
  {
    "ticker": "RAD",
    "organization": "Rite Aid",
    "industry": "Food & Staples Retailing",
    "marketCap": "765.16M"
  },
  {
    "ticker": "RADA",
    "organization": "RADA Electronic Industries",
    "industry": "Aerospace & Defense",
    "marketCap": "514.72M"
  },
  {
    "ticker": "RADI",
    "organization": "Radius Global Infrastructure",
    "industry": "Telecom Services",
    "marketCap": "1.24B"
  },
  {
    "ticker": "RAIL",
    "organization": "FreightCar America",
    "industry": "Machinery",
    "marketCap": "71.23M"
  },
  {
    "ticker": "RAIN",
    "organization": "Rain Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "400.97M"
  },
  {
    "ticker": "RAM",
    "organization": "Aries I Acquisition",
    "industry": "Shell Companies",
    "marketCap": "155.00M"
  },
  {
    "ticker": "RAMP",
    "organization": "LiveRamp Holdings",
    "industry": "IT Services",
    "marketCap": "3.26B"
  },
  {
    "ticker": "RAND",
    "organization": "Rand Capital",
    "industry": "Capital Markets",
    "marketCap": "41.11M"
  },
  {
    "ticker": "RANI",
    "organization": "Rani Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "899.03M"
  },
  {
    "ticker": "RAPT",
    "organization": "Rapt Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "943.04M"
  },
  {
    "ticker": "RARE",
    "organization": "Ultragenyx Pharmaceutical",
    "industry": "Biotechnology",
    "marketCap": "5.95B"
  },
  {
    "ticker": "RAVE",
    "organization": "Rave Restaurant Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "RAVN",
    "organization": "Raven Industries",
    "industry": "Industrial Conglomerates",
    "marketCap": "2.07B"
  },
  {
    "ticker": "RBA",
    "organization": "Ritchie Bros. Auctioneers",
    "industry": "Commercial Services & Supplies",
    "marketCap": "6.83B"
  },
  {
    "ticker": "RBAC",
    "organization": "Redball Acquisition",
    "industry": "Shell Companies",
    "marketCap": "707.25M"
  },
  {
    "ticker": "RBB",
    "organization": "RBB Bancorp",
    "industry": "Banks",
    "marketCap": "489.74M"
  },
  {
    "ticker": "RBBN",
    "organization": "Ribbon Communications",
    "industry": "Communications Equipment",
    "marketCap": "907.94M"
  },
  {
    "ticker": "RBC",
    "organization": "Regal Beloit",
    "industry": "Electrical Equipment",
    "marketCap": "5.97B"
  },
  {
    "ticker": "RBCAA",
    "organization": "Republic Bancorp",
    "industry": "Banks",
    "marketCap": "1.06B"
  },
  {
    "ticker": "RBCN",
    "organization": "Rubicon Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "24.82M"
  },
  {
    "ticker": "RBKB",
    "organization": "Rhinebeck Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "120.13M"
  },
  {
    "ticker": "RBLX",
    "organization": "Roblox",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "42.92B"
  },
  {
    "ticker": "RBNC",
    "organization": "Reliant Bancorp",
    "industry": "Banks",
    "marketCap": "536.36M"
  },
  {
    "ticker": "RBOT",
    "organization": "Vicarious Surgical",
    "industry": "Medical Devices",
    "marketCap": "596.42M"
  },
  {
    "ticker": "RC",
    "organization": "Ready Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.05B"
  },
  {
    "ticker": "RCAT",
    "organization": "Red Cat",
    "industry": "Software-Application",
    "marketCap": "176.07M"
  },
  {
    "ticker": "RCEL",
    "organization": "Avita Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "451.61M"
  },
  {
    "ticker": "RCHG",
    "organization": "Recharge Acquisition",
    "industry": "Shell Companies",
    "marketCap": "247.99M"
  },
  {
    "ticker": "RCI",
    "organization": "Rogers Communications",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "23.64B"
  },
  {
    "ticker": "RCII",
    "organization": "Rent-A-Center",
    "industry": "Specialty Retail",
    "marketCap": "3.78B"
  },
  {
    "ticker": "RCKT",
    "organization": "Rocket Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "1.92B"
  },
  {
    "ticker": "RCKY",
    "organization": "Rocky Brands",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "RCL",
    "organization": "Royal Caribbean Cruises",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "RCLF",
    "organization": "Rosecliff Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "306.76M"
  },
  {
    "ticker": "RCM",
    "organization": "R1 RCM Inc.",
    "industry": "Health Care Providers & Services",
    "marketCap": "6.12B"
  },
  {
    "ticker": "RCMT",
    "organization": "RCM Technologies",
    "industry": "Professional Services",
    "marketCap": "68.43M"
  },
  {
    "ticker": "RCON",
    "organization": "Recon Technology",
    "industry": "Energy Equipment & Services",
    "marketCap": "75.77M"
  },
  {
    "ticker": "RCOR",
    "organization": "Renovacor",
    "industry": "Biotechnology",
    "marketCap": "156.84M"
  },
  {
    "ticker": "RCRT",
    "organization": "Recruiter.com",
    "industry": "Staffing & Employment Services",
    "marketCap": "48.51M"
  },
  {
    "ticker": "RCUS",
    "organization": "Arcus Biosciences",
    "industry": "Biotechnology",
    "marketCap": "2.49B"
  },
  {
    "ticker": "RDCM",
    "organization": "RADCOM Ltd.",
    "industry": "Communications Equipment",
    "marketCap": "157.92M"
  },
  {
    "ticker": "RDFN",
    "organization": "Redfin",
    "industry": "Real Estate Management & Development",
    "marketCap": "5.28B"
  },
  {
    "ticker": "RDHL",
    "organization": "RedHill Biopharma",
    "industry": "Pharmaceuticals",
    "marketCap": "204.17M"
  },
  {
    "ticker": "RDI",
    "organization": "Reading International",
    "industry": "Entertainment",
    "marketCap": "142.21M"
  },
  {
    "ticker": "RDIB",
    "organization": "Reading International",
    "industry": "Entertainment",
    "marketCap": "153.70M"
  },
  {
    "ticker": "RDN",
    "organization": "Radian Group",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "4.32B"
  },
  {
    "ticker": "RDNT",
    "organization": "RadNet",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.56B"
  },
  {
    "ticker": "RDS.A",
    "organization": "Royal Dutch Shell",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "RDS.B",
    "organization": "Royal Dutch Shell",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "RDUS",
    "organization": "Radius Health",
    "industry": "Biotechnology",
    "marketCap": "625.80M"
  },
  {
    "ticker": "RDVT",
    "organization": "Red Violet",
    "industry": "Professional Services",
    "marketCap": "336.38M"
  },
  {
    "ticker": "RDW",
    "organization": "Redwire",
    "industry": "Aerospace & Defense",
    "marketCap": "573.05M"
  },
  {
    "ticker": "RDWR",
    "organization": "Radware",
    "industry": "Communications Equipment",
    "marketCap": "1.55B"
  },
  {
    "ticker": "RDY",
    "organization": "Dr. Reddy's Laboratories",
    "industry": "Pharmaceuticals",
    "marketCap": "11.10B"
  },
  {
    "ticker": "RE",
    "organization": "Everest Re Group",
    "industry": "Insurance",
    "marketCap": "10.05B"
  },
  {
    "ticker": "REAL",
    "organization": "RealReal",
    "industry": " Inc",
    "marketCap": "Internet & Direct Marketing Retail"
  },
  {
    "ticker": "REAX",
    "organization": "Real Brokerage",
    "industry": "Real Estate Services",
    "marketCap": "333.76M"
  },
  {
    "ticker": "REDU",
    "organization": "RISE Education Cayman",
    "industry": "Diversified Consumer Services",
    "marketCap": "34.70M"
  },
  {
    "ticker": "REE",
    "organization": "REE Automotive",
    "industry": "Recreational Vehicles",
    "marketCap": "1.43B"
  },
  {
    "ticker": "REED",
    "organization": "Reed's",
    "industry": "Beverages",
    "marketCap": "54.32M"
  },
  {
    "ticker": "REFR",
    "organization": "Research Frontiers",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "REG",
    "organization": "Regency Centers",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "11.77B"
  },
  {
    "ticker": "REGI",
    "organization": "Renewable Energy Group",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "REGN",
    "organization": "Regeneron Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "61.05B"
  },
  {
    "ticker": "REI",
    "organization": "Ring Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "REKR",
    "organization": "Rekor Systems",
    "industry": "Professional Services",
    "marketCap": "474.79M"
  },
  {
    "ticker": "RELI",
    "organization": "Reliance Global Group",
    "industry": "Insurance Brokers",
    "marketCap": "28.56M"
  },
  {
    "ticker": "RELL",
    "organization": "Richardson Electronics",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "RELX",
    "organization": "Relx PLC",
    "industry": "Professional Services",
    "marketCap": "57.21B"
  },
  {
    "ticker": "RELY",
    "organization": "Remitly Global",
    "industry": "Software-Infrastructure",
    "marketCap": "6.08B"
  },
  {
    "ticker": "RENN",
    "organization": "Renren",
    "industry": "Specialty Retail",
    "marketCap": "329.07M"
  },
  {
    "ticker": "REPH",
    "organization": "Recro Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "94.63M"
  },
  {
    "ticker": "REPL",
    "organization": "Replimune Group",
    "industry": "Biotechnology",
    "marketCap": "1.38B"
  },
  {
    "ticker": "REPX",
    "organization": "Riley Exploration Permian",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "RERE",
    "organization": "AiHuiShou International",
    "industry": "Internet Retail",
    "marketCap": "2.12B"
  },
  {
    "ticker": "RES",
    "organization": "RPC",
    "industry": " Inc.",
    "marketCap": "Energy Equipment & Services"
  },
  {
    "ticker": "RESN",
    "organization": "Resonant",
    "industry": "Communications Equipment",
    "marketCap": "146.85M"
  },
  {
    "ticker": "RETA",
    "organization": "Reata Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "3.78B"
  },
  {
    "ticker": "RETO",
    "organization": "ReTo Eco-Solutions",
    "industry": "Construction Materials",
    "marketCap": "21.41M"
  },
  {
    "ticker": "REV",
    "organization": "Revlon",
    "industry": "Personal Products",
    "marketCap": "547.26M"
  },
  {
    "ticker": "REVG",
    "organization": "REV Group",
    "industry": "Machinery",
    "marketCap": "1.11B"
  },
  {
    "ticker": "REVH",
    "organization": "Revolution Healthcare Acquisition",
    "industry": "Shell Companies",
    "marketCap": "564.22M"
  },
  {
    "ticker": "REX",
    "organization": "REX American Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "REXR",
    "organization": "Rexford Industrial Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "8.32B"
  },
  {
    "ticker": "REYN",
    "organization": "Reynolds Consumer Products",
    "industry": "Packaging & Containers",
    "marketCap": "5.83B"
  },
  {
    "ticker": "REZI",
    "organization": "Resideo Technologies",
    "industry": "Building Products",
    "marketCap": "3.62B"
  },
  {
    "ticker": "RF",
    "organization": "Regions Financial",
    "industry": "Banks",
    "marketCap": "20.37B"
  },
  {
    "ticker": "RFIL",
    "organization": "RF Industries",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "RFL",
    "organization": "Rafael Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "657.42M"
  },
  {
    "ticker": "RFP",
    "organization": "Resolute Forest Products",
    "industry": "Paper & Forest Products",
    "marketCap": "963.54M"
  },
  {
    "ticker": "RGA",
    "organization": "Reinsurance Group of America",
    "industry": "Insurance",
    "marketCap": "7.84B"
  },
  {
    "ticker": "RGC",
    "organization": "Regencell Bioscience",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "288.49M"
  },
  {
    "ticker": "RGCO",
    "organization": "RGC Resources",
    "industry": "Gas Utilities",
    "marketCap": "188.41M"
  },
  {
    "ticker": "RGEN",
    "organization": "Repligen",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "15.53B"
  },
  {
    "ticker": "RGLD",
    "organization": "Royal Gold",
    "industry": "Metals & Mining",
    "marketCap": "6.23B"
  },
  {
    "ticker": "RGLS",
    "organization": "Regulus Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "60.55M"
  },
  {
    "ticker": "RGNX",
    "organization": "REGENXBIO Inc.",
    "industry": "Biotechnology",
    "marketCap": "1.72B"
  },
  {
    "ticker": "RGP",
    "organization": "Resources Connection",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "RGR",
    "organization": "Sturm",
    "industry": " Ruger & Company",
    "marketCap": "Leisure Products"
  },
  {
    "ticker": "RGS",
    "organization": "Regis Corporation",
    "industry": "Diversified Consumer Services",
    "marketCap": "121.53M"
  },
  {
    "ticker": "RH",
    "organization": "Restoration Hardware",
    "industry": "Specialty Retail",
    "marketCap": "13.84B"
  },
  {
    "ticker": "RHE",
    "organization": "Regional Health Properties",
    "industry": "Health Care Providers & Services",
    "marketCap": "13.61M"
  },
  {
    "ticker": "RHI",
    "organization": "Robert Half International",
    "industry": "Professional Services",
    "marketCap": "11.23B"
  },
  {
    "ticker": "RHP",
    "organization": "Ryman Hospitality Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.78B"
  },
  {
    "ticker": "RIBT",
    "organization": "RiceBran Technologies",
    "industry": "Food Products",
    "marketCap": "27.95M"
  },
  {
    "ticker": "RICK",
    "organization": "RCI Hospitality Holdings",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "RICO",
    "organization": "Agrico Acquisition",
    "industry": "Shell Companies",
    "marketCap": "157.66M"
  },
  {
    "ticker": "RIDE",
    "organization": "Lordstown Motors",
    "industry": "Auto Manufacturers",
    "marketCap": "1.20B"
  },
  {
    "ticker": "RIG",
    "organization": "Transocean",
    "industry": "Energy Equipment & Services",
    "marketCap": "2.42B"
  },
  {
    "ticker": "RIGL",
    "organization": "Rigel Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "603.10M"
  },
  {
    "ticker": "RILY",
    "organization": "B. Riley Financial",
    "industry": "Capital Markets",
    "marketCap": "1.65B"
  },
  {
    "ticker": "RIO",
    "organization": "Rio Tinto",
    "industry": "Metals & Mining",
    "marketCap": "108.17B"
  },
  {
    "ticker": "RIOT",
    "organization": "Riot Blockchain",
    "industry": "Software",
    "marketCap": "2.53B"
  },
  {
    "ticker": "RIVE",
    "organization": "Riverview Financial",
    "industry": "Banks",
    "marketCap": "122.37M"
  },
  {
    "ticker": "RJF",
    "organization": "Raymond James Financial",
    "industry": "Capital Markets",
    "marketCap": "19.15B"
  },
  {
    "ticker": "RKDA",
    "organization": "Arcadia Biosciences",
    "industry": "Food Products",
    "marketCap": "46.34M"
  },
  {
    "ticker": "RKLB",
    "organization": "Rocket Lab USA",
    "industry": "Aerospace & Defense",
    "marketCap": "139.04M"
  },
  {
    "ticker": "RKLY",
    "organization": "Rockley Photonics",
    "industry": "Semiconductors",
    "marketCap": "924.19M"
  },
  {
    "ticker": "RKT",
    "organization": "Rocket Companies",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "2.22B"
  },
  {
    "ticker": "RKTA",
    "organization": "Rocket Internet Growth Opportunities",
    "industry": "Shell Companies",
    "marketCap": "326.07M"
  },
  {
    "ticker": "RL",
    "organization": "Ralph Lauren",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "RLAY",
    "organization": "Relay Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.76B"
  },
  {
    "ticker": "RLGT",
    "organization": "Radiant Logistics",
    "industry": "Air Freight & Logistics",
    "marketCap": "325.47M"
  },
  {
    "ticker": "RLGY",
    "organization": "Realogy Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "2.10B"
  },
  {
    "ticker": "RLI",
    "organization": "RLI Corp.",
    "industry": "Insurance",
    "marketCap": "4.53B"
  },
  {
    "ticker": "RLJ",
    "organization": "RLJ Lodging Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.56B"
  },
  {
    "ticker": "RLMD",
    "organization": "Relmada Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "467.23M"
  },
  {
    "ticker": "RLX",
    "organization": "RLX Technology",
    "industry": "Tobacco",
    "marketCap": "7.13B"
  },
  {
    "ticker": "RLYB",
    "organization": "Rallybio",
    "industry": "Biotechnology",
    "marketCap": "610.90M"
  },
  {
    "ticker": "RM",
    "organization": "Regional Management",
    "industry": "Consumer Finance",
    "marketCap": "595.58M"
  },
  {
    "ticker": "RMAX",
    "organization": "RE/MAX Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "605.46M"
  },
  {
    "ticker": "RMBI",
    "organization": "Richmond Mutual Bancorporation",
    "industry": "Banks",
    "marketCap": "195.11M"
  },
  {
    "ticker": "RMBL",
    "organization": "RumbleOn",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "549.21M"
  },
  {
    "ticker": "RMBS",
    "organization": "Rambus",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.41B"
  },
  {
    "ticker": "RMCF",
    "organization": "Rocky Mountain Chocolate Factory",
    "industry": "Food Products",
    "marketCap": "45.32M"
  },
  {
    "ticker": "RMD",
    "organization": "ResMed",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "38.39B"
  },
  {
    "ticker": "RMED",
    "organization": "Ra Medical Systems",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "21.16M"
  },
  {
    "ticker": "RMGC",
    "organization": "RMG Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "587.45M"
  },
  {
    "ticker": "RMNI",
    "organization": "Rimini Street",
    "industry": "Software",
    "marketCap": "843.92M"
  },
  {
    "ticker": "RMO",
    "organization": "Romeo Power",
    "industry": "Auto Parts",
    "marketCap": "648.84M"
  },
  {
    "ticker": "RMR",
    "organization": "RMR Group",
    "industry": "Real Estate Management & Development",
    "marketCap": "558.85M"
  },
  {
    "ticker": "RMTI",
    "organization": "Rockwell Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "53.52M"
  },
  {
    "ticker": "RNA",
    "organization": "Avidity Biosciences",
    "industry": "Biotechnology",
    "marketCap": "1.15B"
  },
  {
    "ticker": "RNAZ",
    "organization": "TransCode Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "34.23M"
  },
  {
    "ticker": "RNDB",
    "organization": "Randolph Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "113.02M"
  },
  {
    "ticker": "RNG",
    "organization": "RingCentral",
    "industry": "Software",
    "marketCap": "20.79B"
  },
  {
    "ticker": "RNGR",
    "organization": "Ranger Energy Services",
    "industry": "Energy Equipment & Services",
    "marketCap": "160.71M"
  },
  {
    "ticker": "RNLX",
    "organization": "Renalytix AI",
    "industry": "Health Care Technology",
    "marketCap": "754.56M"
  },
  {
    "ticker": "RNR",
    "organization": "RenaissanceRe Holdings",
    "industry": "Insurance",
    "marketCap": "6.54B"
  },
  {
    "ticker": "RNST",
    "organization": "Renasant",
    "industry": "Banks",
    "marketCap": "2.09B"
  },
  {
    "ticker": "RNW",
    "organization": "ReNew Energy Global",
    "industry": "Utilities-Renewable",
    "marketCap": "4.21B"
  },
  {
    "ticker": "RNWK",
    "organization": "RealNetworks",
    "industry": "Software",
    "marketCap": "76.92M"
  },
  {
    "ticker": "RNXT",
    "organization": "RenovoRx",
    "industry": "Biotechnology",
    "marketCap": "45.08M"
  },
  {
    "ticker": "ROAD",
    "organization": "Construction Partners",
    "industry": "Construction & Engineering",
    "marketCap": "1.75B"
  },
  {
    "ticker": "ROCG",
    "organization": "Roth CH Acquisition IV",
    "industry": "Shell Companies",
    "marketCap": "127.04M"
  },
  {
    "ticker": "ROCK",
    "organization": "Gibraltar Industries",
    "industry": "Building Products",
    "marketCap": "2.29B"
  },
  {
    "ticker": "ROCR",
    "organization": "Roth CH Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "146.65M"
  },
  {
    "ticker": "ROG",
    "organization": "Rogers Corporation",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ROIC",
    "organization": "Retail Opportunity Investments",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.16B"
  },
  {
    "ticker": "ROIV",
    "organization": "Roivant Sciences",
    "industry": "Shell Companies",
    "marketCap": "480.03M"
  },
  {
    "ticker": "ROK",
    "organization": "Rockwell Automation",
    "industry": "Electrical Equipment",
    "marketCap": "34.46B"
  },
  {
    "ticker": "ROKU",
    "organization": "Roku",
    "industry": " Inc",
    "marketCap": "Entertainment"
  },
  {
    "ticker": "ROL",
    "organization": "Rollins",
    "industry": "Commercial Services & Supplies",
    "marketCap": "17.39B"
  },
  {
    "ticker": "ROLL",
    "organization": "RBC Bearings",
    "industry": "Machinery",
    "marketCap": "6.22B"
  },
  {
    "ticker": "RONI",
    "organization": "Rice Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "358.90M"
  },
  {
    "ticker": "ROOT",
    "organization": "Root",
    "industry": " Inc.",
    "marketCap": "Insurance-Property & Casualty"
  },
  {
    "ticker": "ROP",
    "organization": "Roper Technologies",
    "industry": "Industrial Conglomerates",
    "marketCap": "47.03B"
  },
  {
    "ticker": "ROSS",
    "organization": "Ross Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "418.82M"
  },
  {
    "ticker": "ROST",
    "organization": "Ross Stores",
    "industry": "Specialty Retail",
    "marketCap": "39.02B"
  },
  {
    "ticker": "ROVR",
    "organization": "Rover Group",
    "industry": "Personal Services",
    "marketCap": "2.14B"
  },
  {
    "ticker": "RPAI",
    "organization": "Retail Properties of America",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.85B"
  },
  {
    "ticker": "RPAY",
    "organization": "Repay Holdings",
    "industry": "IT Services",
    "marketCap": "2.18B"
  },
  {
    "ticker": "RPD",
    "organization": "Rapid7",
    "industry": "Software",
    "marketCap": "6.34B"
  },
  {
    "ticker": "RPHM",
    "organization": "Reneo Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "175.47M"
  },
  {
    "ticker": "RPID",
    "organization": "Rapid Micro Biosystems",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "736.34M"
  },
  {
    "ticker": "RPM",
    "organization": "RPM International",
    "industry": "Chemicals",
    "marketCap": "10.08B"
  },
  {
    "ticker": "RPRX",
    "organization": "Royalty Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "22.06B"
  },
  {
    "ticker": "RPT",
    "organization": "RPT Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.08B"
  },
  {
    "ticker": "RPTX",
    "organization": "Repare Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "975.43M"
  },
  {
    "ticker": "RRBI",
    "organization": "Red River Bancshares",
    "industry": "Banks",
    "marketCap": "366.01M"
  },
  {
    "ticker": "RRC",
    "organization": "Range Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "RRD",
    "organization": "R.R. Donnelley & Sons",
    "industry": "Commercial Services & Supplies",
    "marketCap": "374.19M"
  },
  {
    "ticker": "RRGB",
    "organization": "Red Robin Gourmet Burgers",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "RRR",
    "organization": "Red Rock Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "RS",
    "organization": "Reliance Steel & Aluminum",
    "industry": "Metals & Mining",
    "marketCap": "8.98B"
  },
  {
    "ticker": "RSG",
    "organization": "Republic Services",
    "industry": "Commercial Services & Supplies",
    "marketCap": "38.53B"
  },
  {
    "ticker": "RSI",
    "organization": "Rush Street Interactive",
    "industry": "Gambling",
    "marketCap": "4.26B"
  },
  {
    "ticker": "RSKD",
    "organization": "Riskified",
    "industry": "Software-Application",
    "marketCap": "3.55B"
  },
  {
    "ticker": "RSLS",
    "organization": "ReShape Lifesciences",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "42.62M"
  },
  {
    "ticker": "RSSS",
    "organization": "Research Solutions",
    "industry": "IT Services",
    "marketCap": "70.53M"
  },
  {
    "ticker": "RSVR",
    "organization": "Reservoir Media",
    "industry": "Entertainment",
    "marketCap": "568.62M"
  },
  {
    "ticker": "RTLR",
    "organization": "Rattler Midstream",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "RTPY",
    "organization": "Reinvent Technology Partners Y",
    "industry": "Shell Companies",
    "marketCap": "1.21B"
  },
  {
    "ticker": "RTX",
    "organization": "Raytheon Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "131.91B"
  },
  {
    "ticker": "RUBY",
    "organization": "Rubius Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.59B"
  },
  {
    "ticker": "RUN",
    "organization": "SunRun",
    "industry": "Electrical Equipment",
    "marketCap": "9.17B"
  },
  {
    "ticker": "RUSHA",
    "organization": "Rush Enterprises",
    "industry": "Trading Companies & Distributors",
    "marketCap": "2.57B"
  },
  {
    "ticker": "RUSHB",
    "organization": "Rush Enterprises",
    "industry": "Auto & Truck Dealerships",
    "marketCap": "2.52B"
  },
  {
    "ticker": "RUTH",
    "organization": "Ruth's Hospitality Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "RVI",
    "organization": "Retail Value",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "556.02M"
  },
  {
    "ticker": "RVLV",
    "organization": "Revolve Group",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "4.62B"
  },
  {
    "ticker": "RVMD",
    "organization": "Revolution Medicines",
    "industry": "Biotechnology",
    "marketCap": "2.14B"
  },
  {
    "ticker": "RVNC",
    "organization": "Revance Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "2.00B"
  },
  {
    "ticker": "RVP",
    "organization": "Retractable Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "363.56M"
  },
  {
    "ticker": "RVPH",
    "organization": "Reviva Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "55.16M"
  },
  {
    "ticker": "RVSB",
    "organization": "Riverview Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "161.83M"
  },
  {
    "ticker": "RWLK",
    "organization": "ReWalk Robotics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "85.55M"
  },
  {
    "ticker": "RWT",
    "organization": "Redwood Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "1.46B"
  },
  {
    "ticker": "RXDX",
    "organization": "Prometheus Biosciences",
    "industry": "Biotechnology",
    "marketCap": "911.21M"
  },
  {
    "ticker": "RXN",
    "organization": "Rexnord",
    "industry": "Machinery",
    "marketCap": "7.65B"
  },
  {
    "ticker": "RXRA",
    "organization": "RXR Acquisition",
    "industry": "Shell Companies",
    "marketCap": "420.47M"
  },
  {
    "ticker": "RXRX",
    "organization": "Recursion Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "3.67B"
  },
  {
    "ticker": "RXST",
    "organization": "RxSight",
    "industry": "Medical Devices",
    "marketCap": "345.83M"
  },
  {
    "ticker": "RXT",
    "organization": "Rackspace Technology",
    "industry": "Software-Infrastructure",
    "marketCap": "3.06B"
  },
  {
    "ticker": "RY",
    "organization": "Royal Bank of Canada",
    "industry": "Banks",
    "marketCap": "142.13B"
  },
  {
    "ticker": "RYAAY",
    "organization": "Ryanair Holdings",
    "industry": "Airlines",
    "marketCap": "26.53B"
  },
  {
    "ticker": "RYAM",
    "organization": "Rayonier Advanced Materials",
    "industry": "Chemicals",
    "marketCap": "493.33M"
  },
  {
    "ticker": "RYAN",
    "organization": "Ryan Specialty Group",
    "industry": "Insurance-Specialty",
    "marketCap": "8.57B"
  },
  {
    "ticker": "RYB",
    "organization": "RYB Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "79.59M"
  },
  {
    "ticker": "RYI",
    "organization": "Ryerson Holding",
    "industry": "Metals & Mining",
    "marketCap": "862.99M"
  },
  {
    "ticker": "RYN",
    "organization": "Rayonier",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.97B"
  },
  {
    "ticker": "RYTM",
    "organization": "Rhythm Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "670.54M"
  },
  {
    "ticker": "RZLT",
    "organization": "Rezolute",
    "industry": "Biotechnology",
    "marketCap": "64.47M"
  },
  {
    "ticker": "S",
    "organization": "SentinelOne",
    "industry": "Software-Infrastructure",
    "marketCap": "14.27B"
  },
  {
    "ticker": "SA",
    "organization": "Seabridge Gold",
    "industry": "Metals & Mining",
    "marketCap": "1.18B"
  },
  {
    "ticker": "SABR",
    "organization": "Sabre Corporation",
    "industry": "IT Services",
    "marketCap": "4.05B"
  },
  {
    "ticker": "SACH",
    "organization": "Sachem Capital",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "155.88M"
  },
  {
    "ticker": "SAFE",
    "organization": "Safehold",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.12B"
  },
  {
    "ticker": "SAFM",
    "organization": "Sanderson Farms",
    "industry": "Food Products",
    "marketCap": "4.19B"
  },
  {
    "ticker": "SAFT",
    "organization": "Safety Insurance Group",
    "industry": "Insurance",
    "marketCap": "1.20B"
  },
  {
    "ticker": "SAGE",
    "organization": "Sage Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.66B"
  },
  {
    "ticker": "SAH",
    "organization": "Sonic Automotive",
    "industry": "Specialty Retail",
    "marketCap": "2.18B"
  },
  {
    "ticker": "SAIA",
    "organization": "Saia",
    "industry": " Inc.",
    "marketCap": "Road & Rail"
  },
  {
    "ticker": "SAIC",
    "organization": "Science Applications International",
    "industry": "IT Services",
    "marketCap": "4.90B"
  },
  {
    "ticker": "SAIL",
    "organization": "SailPoint Technologies",
    "industry": "Software",
    "marketCap": "4.02B"
  },
  {
    "ticker": "SAL",
    "organization": "Salisbury Bancorp",
    "industry": "Banks",
    "marketCap": "148.81M"
  },
  {
    "ticker": "SALM",
    "organization": "Salem Media Group",
    "industry": "Media",
    "marketCap": "99.68M"
  },
  {
    "ticker": "SAM",
    "organization": "Boston Beer Company",
    "industry": "Beverages",
    "marketCap": "6.26B"
  },
  {
    "ticker": "SAMG",
    "organization": "Silvercrest Asset Management",
    "industry": "Capital Markets",
    "marketCap": "226.02M"
  },
  {
    "ticker": "SAN",
    "organization": "Banco Santander",
    "industry": "Banks",
    "marketCap": "63.51B"
  },
  {
    "ticker": "SANA",
    "organization": "Sana Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "4.09B"
  },
  {
    "ticker": "SAND",
    "organization": "Sandstorm Gold",
    "industry": "Metals & Mining",
    "marketCap": "1.11B"
  },
  {
    "ticker": "SANM",
    "organization": "Sanmina",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SANW",
    "organization": "S&W Seed Company",
    "industry": "Food Products",
    "marketCap": "95.25M"
  },
  {
    "ticker": "SAP",
    "organization": "SAP SE",
    "industry": "Software",
    "marketCap": "160.99B"
  },
  {
    "ticker": "SAR",
    "organization": "Saratoga Investment",
    "industry": "Capital Markets",
    "marketCap": "321.41M"
  },
  {
    "ticker": "SASR",
    "organization": "Sandy Spring Bancorp",
    "industry": "Banks",
    "marketCap": "2.22B"
  },
  {
    "ticker": "SATS",
    "organization": "EchoStar",
    "industry": "Communications Equipment",
    "marketCap": "2.27B"
  },
  {
    "ticker": "SAVA",
    "organization": "Cassava Sciences",
    "industry": "Pharmaceuticals",
    "marketCap": "2.42B"
  },
  {
    "ticker": "SAVE",
    "organization": "Spirit Airlines",
    "industry": "Airlines",
    "marketCap": "2.91B"
  },
  {
    "ticker": "SB",
    "organization": "Safe Bulkers",
    "industry": "Marine",
    "marketCap": "617.75M"
  },
  {
    "ticker": "SBAC",
    "organization": "SBA Communications",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "36.73B"
  },
  {
    "ticker": "SBBP",
    "organization": "Strongbridge Biopharma",
    "industry": "Pharmaceuticals",
    "marketCap": "141.76M"
  },
  {
    "ticker": "SBCF",
    "organization": "Seacoast Banking Corporation of Florida",
    "industry": "Banks",
    "marketCap": "2.04B"
  },
  {
    "ticker": "SBEA",
    "organization": "SilverBox Engaged Merger I",
    "industry": "Shell Companies",
    "marketCap": "422.63M"
  },
  {
    "ticker": "SBET",
    "organization": "SharpLink Gaming",
    "industry": "Gambling",
    "marketCap": "65.93M"
  },
  {
    "ticker": "SBEV",
    "organization": "Splash Beverage Group",
    "industry": "Beverages-Brewers",
    "marketCap": "60.96M"
  },
  {
    "ticker": "SBFG",
    "organization": "SB Financial Group",
    "industry": "Banks",
    "marketCap": "127.61M"
  },
  {
    "ticker": "SBGI",
    "organization": "Sinclair Broadcast Group",
    "industry": "Media",
    "marketCap": "2.43B"
  },
  {
    "ticker": "SBH",
    "organization": "Sally Beauty Holdings",
    "industry": "Specialty Retail",
    "marketCap": "1.90B"
  },
  {
    "ticker": "SBII",
    "organization": "Sandbridge X2",
    "industry": "Shell Companies",
    "marketCap": "289.09M"
  },
  {
    "ticker": "SBLK",
    "organization": "Star Bulk Carriers",
    "industry": "Marine",
    "marketCap": "2.46B"
  },
  {
    "ticker": "SBNY",
    "organization": "Signature Bank",
    "industry": "Banks",
    "marketCap": "16.51B"
  },
  {
    "ticker": "SBOW",
    "organization": "SilverBow Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SBR",
    "organization": "Sabine Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SBRA",
    "organization": "Sabra Health Care REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.25B"
  },
  {
    "ticker": "SBS",
    "organization": "Companhia de Saneamento Basico",
    "industry": "Water Utilities",
    "marketCap": "4.94B"
  },
  {
    "ticker": "SBSI",
    "organization": "Southside Bancshares",
    "industry": "Banks",
    "marketCap": "1.26B"
  },
  {
    "ticker": "SBSW",
    "organization": "Sibanye Stillwater",
    "industry": "Metals & Mining",
    "marketCap": "9.02B"
  },
  {
    "ticker": "SBT",
    "organization": "Sterling Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "265.00M"
  },
  {
    "ticker": "SBTX",
    "organization": "Silverback Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "394.16M"
  },
  {
    "ticker": "SBUX",
    "organization": "Starbucks",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "SC",
    "organization": "Santander Consumer USA",
    "industry": "Consumer Finance",
    "marketCap": "12.73B"
  },
  {
    "ticker": "SCAQ",
    "organization": "Stratim Cloud Acquisition",
    "industry": "Shell Companies",
    "marketCap": "305.31M"
  },
  {
    "ticker": "SCCO",
    "organization": "Southern Copper",
    "industry": "Metals & Mining",
    "marketCap": "43.90B"
  },
  {
    "ticker": "SCHL",
    "organization": "Scholastic",
    "industry": "Media",
    "marketCap": "1.26B"
  },
  {
    "ticker": "SCHN",
    "organization": "Schnitzer Steel Industries",
    "industry": "Metals & Mining",
    "marketCap": "1.25B"
  },
  {
    "ticker": "SCHW",
    "organization": "Charles Schwab",
    "industry": "Capital Markets",
    "marketCap": "140.86B"
  },
  {
    "ticker": "SCI",
    "organization": "Service Corporation International",
    "industry": "Diversified Consumer Services",
    "marketCap": "10.10B"
  },
  {
    "ticker": "SCKT",
    "organization": "Socket Mobile",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "SCL",
    "organization": "Stepan Company",
    "industry": "Chemicals",
    "marketCap": "2.59B"
  },
  {
    "ticker": "SCLE",
    "organization": "Broadscale Acquisition",
    "industry": "Shell Companies",
    "marketCap": "418.74M"
  },
  {
    "ticker": "SCM",
    "organization": "Stellus Capital Investment",
    "industry": "Capital Markets",
    "marketCap": "255.85M"
  },
  {
    "ticker": "SCOA",
    "organization": "ScION Tech Growth I",
    "industry": "Shell Companies",
    "marketCap": "702.94M"
  },
  {
    "ticker": "SCOB",
    "organization": "ScION Tech Growth II",
    "industry": "Shell Companies",
    "marketCap": "422.63M"
  },
  {
    "ticker": "SCOR",
    "organization": "Comscore",
    "industry": "Media",
    "marketCap": "321.37M"
  },
  {
    "ticker": "SCPH",
    "organization": "scPharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "174.53M"
  },
  {
    "ticker": "SCPL",
    "organization": "SciPlay",
    "industry": "Entertainment",
    "marketCap": "521.39M"
  },
  {
    "ticker": "SCPS",
    "organization": "Scopus Biopharma",
    "industry": "Biotechnology",
    "marketCap": "74.73M"
  },
  {
    "ticker": "SCR",
    "organization": "Score Media & Gaming",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "1.99B"
  },
  {
    "ticker": "SCS",
    "organization": "Steelcase",
    "industry": "Commercial Services & Supplies",
    "marketCap": "1.45B"
  },
  {
    "ticker": "SCSC",
    "organization": "ScanSource",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SCU",
    "organization": "Sculptor Capital Management",
    "industry": "Capital Markets",
    "marketCap": "1.64B"
  },
  {
    "ticker": "SCVL",
    "organization": "Shoe Carnival",
    "industry": "Specialty Retail",
    "marketCap": "933.28M"
  },
  {
    "ticker": "SCVX",
    "organization": "SCVX Corp.",
    "industry": "Shell Companies",
    "marketCap": "285.77M"
  },
  {
    "ticker": "SCWX",
    "organization": "SecureWorks",
    "industry": "Software",
    "marketCap": "1.73B"
  },
  {
    "ticker": "SCX",
    "organization": "L.S. Starrett Company",
    "industry": "Machinery",
    "marketCap": "90.24M"
  },
  {
    "ticker": "SCYX",
    "organization": "SCYNEXIS",
    "industry": "Pharmaceuticals",
    "marketCap": "120.04M"
  },
  {
    "ticker": "SD",
    "organization": "SandRidge Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SDAC",
    "organization": "Sustainable Development Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "385.82M"
  },
  {
    "ticker": "SDC",
    "organization": "SmileDirectClub",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "2.13B"
  },
  {
    "ticker": "SDGR",
    "organization": "Schrodinger",
    "industry": "Health Care Technology",
    "marketCap": "3.82B"
  },
  {
    "ticker": "SDH",
    "organization": "Global Internet of People",
    "industry": "Consulting Services",
    "marketCap": "56.17M"
  },
  {
    "ticker": "SDPI",
    "organization": "Superior Drilling Products",
    "industry": "Energy Equipment & Services",
    "marketCap": "38.90M"
  },
  {
    "ticker": "SE",
    "organization": "Sea Limited",
    "industry": "Entertainment",
    "marketCap": "176.45B"
  },
  {
    "ticker": "SEAC",
    "organization": "SeaChange International",
    "industry": "Software",
    "marketCap": "52.23M"
  },
  {
    "ticker": "SEAH",
    "organization": "Sports Entertainment Acquisition",
    "industry": "Shell Companies",
    "marketCap": "563.06M"
  },
  {
    "ticker": "SEAS",
    "organization": "SeaWorld Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "SEB",
    "organization": "Seaboard Corporation",
    "industry": "Food Products",
    "marketCap": "4.72B"
  },
  {
    "ticker": "SECO",
    "organization": "Secoo Holding",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "87.35M"
  },
  {
    "ticker": "SEDG",
    "organization": "SolarEdge Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "14.22B"
  },
  {
    "ticker": "SEE",
    "organization": "Sealed Air",
    "industry": "Containers & Packaging",
    "marketCap": "8.21B"
  },
  {
    "ticker": "SEED",
    "organization": "Origin Agritech",
    "industry": "Food Products",
    "marketCap": "49.54M"
  },
  {
    "ticker": "SEEL",
    "organization": "Seelos Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "243.51M"
  },
  {
    "ticker": "SEER",
    "organization": "Seer",
    "industry": " Inc",
    "marketCap": "Life Sciences Tools & Services"
  },
  {
    "ticker": "SEIC",
    "organization": "SEI Investments",
    "industry": "Capital Markets",
    "marketCap": "8.44B"
  },
  {
    "ticker": "SELB",
    "organization": "Selecta Biosciences",
    "industry": "Biotechnology",
    "marketCap": "481.03M"
  },
  {
    "ticker": "SELF",
    "organization": "Global Self Storage",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "54.29M"
  },
  {
    "ticker": "SEM",
    "organization": "Select Medical Holdings",
    "industry": "Health Care Providers & Services",
    "marketCap": "4.93B"
  },
  {
    "ticker": "SEMR",
    "organization": "SEMrush Holdings",
    "industry": "Software",
    "marketCap": "3.14B"
  },
  {
    "ticker": "SENEA",
    "organization": "Seneca Foods",
    "industry": "Food Products",
    "marketCap": "444.16M"
  },
  {
    "ticker": "SENEB",
    "organization": "Seneca Foods",
    "industry": "Food Products",
    "marketCap": "443.26M"
  },
  {
    "ticker": "SENS",
    "organization": "Senseonics Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.54B"
  },
  {
    "ticker": "SERA",
    "organization": "Sera Prognostics",
    "industry": "Diagnostics & Research",
    "marketCap": "348.11M"
  },
  {
    "ticker": "SESN",
    "organization": "Sesen Bio",
    "industry": "Biotechnology",
    "marketCap": "155.47M"
  },
  {
    "ticker": "SEVN",
    "organization": "Seven Hills Realty Trust",
    "industry": "REIT-Mortgage",
    "marketCap": "105.34M"
  },
  {
    "ticker": "SF",
    "organization": "Stifel Financial",
    "industry": "Capital Markets",
    "marketCap": "7.37B"
  },
  {
    "ticker": "SFBC",
    "organization": "Sound Financial Bancorp",
    "industry": "Banks",
    "marketCap": "118.29M"
  },
  {
    "ticker": "SFBS",
    "organization": "ServisFirst Bancshares",
    "industry": "Banks",
    "marketCap": "4.30B"
  },
  {
    "ticker": "SFE",
    "organization": "Safeguard Scientifics",
    "industry": "Capital Markets",
    "marketCap": "185.99M"
  },
  {
    "ticker": "SFET",
    "organization": "Safe-T Group",
    "industry": "Software",
    "marketCap": "33.21M"
  },
  {
    "ticker": "SFIX",
    "organization": "Stitch Fix",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "4.44B"
  },
  {
    "ticker": "SFL",
    "organization": "SFL Corporation",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SFM",
    "organization": "Sprouts Farmers Markets",
    "industry": "Food & Staples Retailing",
    "marketCap": "2.57B"
  },
  {
    "ticker": "SFNC",
    "organization": "Simmons First National",
    "industry": "Banks",
    "marketCap": "3.22B"
  },
  {
    "ticker": "SFST",
    "organization": "Southern First Bancshares",
    "industry": "Banks",
    "marketCap": "423.75M"
  },
  {
    "ticker": "SFT",
    "organization": "Shift Technologies",
    "industry": "Internet Retail",
    "marketCap": "575.76M"
  },
  {
    "ticker": "SFUN",
    "organization": "Fang Holdings",
    "industry": "Interactive Media & Services",
    "marketCap": "58.08M"
  },
  {
    "ticker": "SGA",
    "organization": "Saga Communications",
    "industry": "Media",
    "marketCap": "136.05M"
  },
  {
    "ticker": "SGAM",
    "organization": "Seaport Global Acquisition",
    "industry": "Shell Companies",
    "marketCap": "180.95M"
  },
  {
    "ticker": "SGBX",
    "organization": "SG Blocks",
    "industry": "Machinery",
    "marketCap": "28.85M"
  },
  {
    "ticker": "SGC",
    "organization": "Superior Group of Companies",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "SGEN",
    "organization": "Seagen",
    "industry": "Biotechnology",
    "marketCap": "30.39B"
  },
  {
    "ticker": "SGFY",
    "organization": "Signify Health",
    "industry": "Health Information Services",
    "marketCap": "2.85B"
  },
  {
    "ticker": "SGH",
    "organization": "SMART Global Holdings",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.08B"
  },
  {
    "ticker": "SGHT",
    "organization": "Sight Sciences",
    "industry": "Medical Devices",
    "marketCap": "1.11B"
  },
  {
    "ticker": "SGLB",
    "organization": "Sigma Labs",
    "industry": "Aerospace & Defense",
    "marketCap": "32.84M"
  },
  {
    "ticker": "SGMA",
    "organization": "SigmaTron International",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SGML",
    "organization": "Sigma Lithium",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "742.63M"
  },
  {
    "ticker": "SGMO",
    "organization": "Sangamo Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.32B"
  },
  {
    "ticker": "SGMS",
    "organization": "Scientific Games",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "SGOC",
    "organization": "SGOCO Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SGRP",
    "organization": "SPAR Group",
    "industry": "Media",
    "marketCap": "29.65M"
  },
  {
    "ticker": "SGRY",
    "organization": "Surgery Partners",
    "industry": "Health Care Providers & Services",
    "marketCap": "3.72B"
  },
  {
    "ticker": "SGTX",
    "organization": "Sigilon Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "183.37M"
  },
  {
    "ticker": "SGU",
    "organization": "Star Group",
    "industry": "Gas Utilities",
    "marketCap": "403.58M"
  },
  {
    "ticker": "SHAC",
    "organization": "SCP & CO Healthcare Acquisition",
    "industry": "Shell Companies",
    "marketCap": "279.74M"
  },
  {
    "ticker": "SHAK",
    "organization": "Shake Shack",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "SHBI",
    "organization": "Shore Bancshares",
    "industry": "Banks",
    "marketCap": "208.15M"
  },
  {
    "ticker": "SHC",
    "organization": "Sotera Health",
    "industry": "Diagnostics & Research",
    "marketCap": "7.36B"
  },
  {
    "ticker": "SHCR",
    "organization": "Sharecare",
    "industry": "Health Information Services",
    "marketCap": "2.63B"
  },
  {
    "ticker": "SHEN",
    "organization": "Shenandoah Telecommunications",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "1.62B"
  },
  {
    "ticker": "SHG",
    "organization": "Shinhan Financial Group",
    "industry": "Banks",
    "marketCap": "17.60B"
  },
  {
    "ticker": "SHI",
    "organization": "Sinopec Shanghai Petrochemical",
    "industry": "Chemicals",
    "marketCap": "5.70B"
  },
  {
    "ticker": "SHIP",
    "organization": "Seanergy Maritime Holdings",
    "industry": "Marine",
    "marketCap": "240.94M"
  },
  {
    "ticker": "SHLS",
    "organization": "Shoals Technologies Group",
    "industry": "Solar",
    "marketCap": "4.54B"
  },
  {
    "ticker": "SHLX",
    "organization": "Shell Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SHO",
    "organization": "Sunstone Hotel Investors",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.70B"
  },
  {
    "ticker": "SHOO",
    "organization": "Steven Madden",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "SHOP",
    "organization": "Shopify",
    "industry": "IT Services",
    "marketCap": "167.57B"
  },
  {
    "ticker": "SHPW",
    "organization": "Shapeways",
    "industry": "Shell Companies",
    "marketCap": "148.60M"
  },
  {
    "ticker": "SHQA",
    "organization": "Shelter Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "243.00M"
  },
  {
    "ticker": "SHW",
    "organization": "Sherwin-Williams",
    "industry": "Chemicals",
    "marketCap": "75.95B"
  },
  {
    "ticker": "SHYF",
    "organization": "Shyft Group",
    "industry": "Machinery",
    "marketCap": "1.40B"
  },
  {
    "ticker": "SI",
    "organization": "Silvergate Capital",
    "industry": "Banks",
    "marketCap": "3.40B"
  },
  {
    "ticker": "SIBN",
    "organization": "SI-BONE",
    "industry": " Inc.",
    "marketCap": "Health Care Equipment & Supplies"
  },
  {
    "ticker": "SIC",
    "organization": "Select Interior Concepts",
    "industry": "Diversified Consumer Services",
    "marketCap": "374.14M"
  },
  {
    "ticker": "SID",
    "organization": "Companhia Siderurgica Nacional",
    "industry": "Metals & Mining",
    "marketCap": "7.58B"
  },
  {
    "ticker": "SIEB",
    "organization": "Siebert Financial",
    "industry": "Capital Markets",
    "marketCap": "103.86M"
  },
  {
    "ticker": "SIEN",
    "organization": "Sientra",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "322.46M"
  },
  {
    "ticker": "SIF",
    "organization": "SIFCO Industries",
    "industry": "Aerospace & Defense",
    "marketCap": "51.03M"
  },
  {
    "ticker": "SIFY",
    "organization": "Sify Technologies",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "623.25M"
  },
  {
    "ticker": "SIG",
    "organization": "Signet Jewelers",
    "industry": "Specialty Retail",
    "marketCap": "4.27B"
  },
  {
    "ticker": "SIGA",
    "organization": "SIGA Technologies",
    "industry": "Pharmaceuticals",
    "marketCap": "565.70M"
  },
  {
    "ticker": "SIGI",
    "organization": "Selective Insurance Group",
    "industry": "Insurance",
    "marketCap": "4.49B"
  },
  {
    "ticker": "SII",
    "organization": "Sprott",
    "industry": "Capital Markets",
    "marketCap": "912.15M"
  },
  {
    "ticker": "SILC",
    "organization": "Silicom",
    "industry": "Communications Equipment",
    "marketCap": "284.69M"
  },
  {
    "ticker": "SILK",
    "organization": "Silk Road Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.89B"
  },
  {
    "ticker": "SILV",
    "organization": "SilverCrest Metals",
    "industry": "Metals & Mining",
    "marketCap": "1.01B"
  },
  {
    "ticker": "SIM",
    "organization": "Grupo Simec",
    "industry": "Metals & Mining",
    "marketCap": "3.51B"
  },
  {
    "ticker": "SIMO",
    "organization": "Silicon Motion Technology",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "2.39B"
  },
  {
    "ticker": "SINO",
    "organization": "Sino-Global Shipping America",
    "industry": "Transportation Infrastructure",
    "marketCap": "37.31M"
  },
  {
    "ticker": "SINT",
    "organization": "SINTX Technologies",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "31.37M"
  },
  {
    "ticker": "SIOX",
    "organization": "Sio Gene Therapies",
    "industry": "Biotechnology",
    "marketCap": "156.09M"
  },
  {
    "ticker": "SIRI",
    "organization": "Sirius XM",
    "industry": "Media",
    "marketCap": "24.71B"
  },
  {
    "ticker": "SITC",
    "organization": "SITE Centers",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "3.41B"
  },
  {
    "ticker": "SITE",
    "organization": "SiteOne Landscape Supply",
    "industry": "Trading Companies & Distributors",
    "marketCap": "9.07B"
  },
  {
    "ticker": "SITM",
    "organization": "SiTime",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.98B"
  },
  {
    "ticker": "SIVB",
    "organization": "SVB Financial Group",
    "industry": "Banks",
    "marketCap": "37.95B"
  },
  {
    "ticker": "SIX",
    "organization": "Six Flags Entertainment",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "SJ",
    "organization": "Scienjoy Holding",
    "industry": "Broadcasting",
    "marketCap": "122.14M"
  },
  {
    "ticker": "SJI",
    "organization": "South Jersey Industries",
    "industry": "Gas Utilities",
    "marketCap": "2.34B"
  },
  {
    "ticker": "SJM",
    "organization": "J. M. Smucker",
    "industry": "Food Products",
    "marketCap": "13.01B"
  },
  {
    "ticker": "SJR",
    "organization": "Shaw Communications",
    "industry": "Media",
    "marketCap": "14.68B"
  },
  {
    "ticker": "SJT",
    "organization": "San Juan Basin Royalty Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SJW",
    "organization": "SJW Group",
    "industry": "Water Utilities",
    "marketCap": "1.97B"
  },
  {
    "ticker": "SKIL",
    "organization": "Skillsoft",
    "industry": "Education & Training Services",
    "marketCap": "1.57B"
  },
  {
    "ticker": "SKIN",
    "organization": "Beauty Health Co.",
    "industry": "Household & Personal Products",
    "marketCap": "3.50B"
  },
  {
    "ticker": "SKLZ",
    "organization": "Skillz",
    "industry": "Entertainment",
    "marketCap": "3.91B"
  },
  {
    "ticker": "SKM",
    "organization": "SK Telecom",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "19.77B"
  },
  {
    "ticker": "SKT",
    "organization": "Tanger Factory Outlet Centers",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.75B"
  },
  {
    "ticker": "SKX",
    "organization": "Skechers USA",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "SKY",
    "organization": "Skyline Champion",
    "industry": "Household Durables",
    "marketCap": "3.41B"
  },
  {
    "ticker": "SKYA",
    "organization": "Skydeck Acquisition",
    "industry": "Shell Companies",
    "marketCap": "262.50M"
  },
  {
    "ticker": "SKYT",
    "organization": "SkyWater Technology",
    "industry": "Semiconductors",
    "marketCap": "1.01B"
  },
  {
    "ticker": "SKYW",
    "organization": "Sky West",
    "industry": "Airlines",
    "marketCap": "2.58B"
  },
  {
    "ticker": "SLAB",
    "organization": "Silicon Laboratories",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "6.28B"
  },
  {
    "ticker": "SLAC",
    "organization": "Social Leverage Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "422.19M"
  },
  {
    "ticker": "SLAM",
    "organization": "Slam Corp.",
    "industry": "Shell Companies",
    "marketCap": "126.75M"
  },
  {
    "ticker": "SLB",
    "organization": "Schlumberger",
    "industry": "Energy Equipment & Services",
    "marketCap": "41.53B"
  },
  {
    "ticker": "SLCA",
    "organization": "U.S. Silica Holdings",
    "industry": "Energy Equipment & Services",
    "marketCap": "657.83M"
  },
  {
    "ticker": "SLCR",
    "organization": "Silver Crest Acquisition",
    "industry": "Shell Companies",
    "marketCap": "423.49M"
  },
  {
    "ticker": "SLCT",
    "organization": "Select Bancorp",
    "industry": "Banks",
    "marketCap": "303.24M"
  },
  {
    "ticker": "SLDB",
    "organization": "Solid Biosciences",
    "industry": "Biotechnology",
    "marketCap": "260.85M"
  },
  {
    "ticker": "SLF",
    "organization": "Sun Life Financial",
    "industry": "Insurance",
    "marketCap": "29.87B"
  },
  {
    "ticker": "SLG",
    "organization": "SL Green Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.95B"
  },
  {
    "ticker": "SLGC",
    "organization": "SomaLogic",
    "industry": "Health Information Services",
    "marketCap": "2.15B"
  },
  {
    "ticker": "SLGG",
    "organization": "Super League Gaming",
    "industry": "Interactive Media & Services",
    "marketCap": "110.55M"
  },
  {
    "ticker": "SLGL",
    "organization": "Sol-Gel Technologies",
    "industry": "Pharmaceuticals",
    "marketCap": "224.31M"
  },
  {
    "ticker": "SLGN",
    "organization": "Silgan Holdings",
    "industry": "Containers & Packaging",
    "marketCap": "4.15B"
  },
  {
    "ticker": "SLHG",
    "organization": "Skylight Health Group",
    "industry": "Medical Care Facilities",
    "marketCap": "42.80M"
  },
  {
    "ticker": "SLI",
    "organization": "Standard Lithium",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "776.16M"
  },
  {
    "ticker": "SLM",
    "organization": "SLM Corporation",
    "industry": "Consumer Finance",
    "marketCap": "5.44B"
  },
  {
    "ticker": "SLN",
    "organization": "Silence Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "625.78M"
  },
  {
    "ticker": "SLNG",
    "organization": "Stabilis Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SLNO",
    "organization": "Soleno Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "73.27M"
  },
  {
    "ticker": "SLP",
    "organization": "Simulations Plus",
    "industry": "Health Care Technology",
    "marketCap": "802.09M"
  },
  {
    "ticker": "SLQT",
    "organization": "SelectQuote",
    "industry": "Insurance Brokers",
    "marketCap": "2.14B"
  },
  {
    "ticker": "SLRC",
    "organization": "SLR Investment",
    "industry": "Capital Markets",
    "marketCap": "817.32M"
  },
  {
    "ticker": "SLRX",
    "organization": "Salarius Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "43.27M"
  },
  {
    "ticker": "SLS",
    "organization": "SELLAS Life Sciences Group",
    "industry": "Biotechnology",
    "marketCap": "144.29M"
  },
  {
    "ticker": "SLVM",
    "organization": "Sylvamo",
    "industry": "n/a",
    "marketCap": "1.46B"
  },
  {
    "ticker": "SM",
    "organization": "SM Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SMAR",
    "organization": "Smartsheet",
    "industry": "Software",
    "marketCap": "8.72B"
  },
  {
    "ticker": "SMBC",
    "organization": "Southern Missouri Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "399.81M"
  },
  {
    "ticker": "SMBK",
    "organization": "SmartFinancial",
    "industry": "Banks",
    "marketCap": "441.44M"
  },
  {
    "ticker": "SMCI",
    "organization": "Super Micro Computer",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "SMED",
    "organization": "Sharps Compliance",
    "industry": "Health Care Providers & Services",
    "marketCap": "159.72M"
  },
  {
    "ticker": "SMFG",
    "organization": "Sumitomo Mitsui Financial Group",
    "industry": "Banks",
    "marketCap": "48.01B"
  },
  {
    "ticker": "SMFR",
    "organization": "Sema4 Holdings",
    "industry": "Health Information Services",
    "marketCap": "1.80B"
  },
  {
    "ticker": "SMG",
    "organization": "Scotts Miracle-Gro",
    "industry": "Chemicals",
    "marketCap": "8.17B"
  },
  {
    "ticker": "SMHI",
    "organization": "Seacor Marine Holdings",
    "industry": "Energy Equipment & Services",
    "marketCap": "113.37M"
  },
  {
    "ticker": "SMID",
    "organization": "Smith-Midland",
    "industry": "Construction Materials",
    "marketCap": "77.67M"
  },
  {
    "ticker": "SMIH",
    "organization": "Summit Healthcare Acquisition",
    "industry": "Shell Companies",
    "marketCap": "250.73M"
  },
  {
    "ticker": "SMIT",
    "organization": "Schmitt Industries",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SMLP",
    "organization": "Summit Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SMLR",
    "organization": "Semler Scientific",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "871.26M"
  },
  {
    "ticker": "SMMF",
    "organization": "Summit Financial Group",
    "industry": "Banks",
    "marketCap": "320.86M"
  },
  {
    "ticker": "SMMT",
    "organization": "Summit Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "488.86M"
  },
  {
    "ticker": "SMP",
    "organization": "Standard Motor Products",
    "industry": "Auto Components",
    "marketCap": "971.26M"
  },
  {
    "ticker": "SMPL",
    "organization": "Simply Good Foods",
    "industry": "Food Products",
    "marketCap": "3.34B"
  },
  {
    "ticker": "SMRT",
    "organization": "SmartRent",
    "industry": "Specialty Retail",
    "marketCap": "3.59M"
  },
  {
    "ticker": "SMSI",
    "organization": "Smith Micro Software",
    "industry": "Software",
    "marketCap": "261.30M"
  },
  {
    "ticker": "SMTC",
    "organization": "Semtech",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "5.06B"
  },
  {
    "ticker": "SMTI",
    "organization": "Sanara MedTech",
    "industry": "Medical Care Facilities",
    "marketCap": "262.97M"
  },
  {
    "ticker": "SMTS",
    "organization": "Sierra Metals",
    "industry": "Metals & Mining",
    "marketCap": "352.13M"
  },
  {
    "ticker": "SMWB",
    "organization": "Similarweb",
    "industry": "Internet Content & Information",
    "marketCap": "1.53B"
  },
  {
    "ticker": "SNA",
    "organization": "Snap-on",
    "industry": "Machinery",
    "marketCap": "11.25B"
  },
  {
    "ticker": "SNAP",
    "organization": "Snap",
    "industry": " Inc.",
    "marketCap": "Interactive Media & Services"
  },
  {
    "ticker": "SNAX",
    "organization": "Stryve Foods",
    "industry": "Packaged Foods",
    "marketCap": "45.61M"
  },
  {
    "ticker": "SNBR",
    "organization": "Sleep Number",
    "industry": "Specialty Retail",
    "marketCap": "2.23B"
  },
  {
    "ticker": "SNCR",
    "organization": "Synchronoss Technologies",
    "industry": "Software",
    "marketCap": "208.83M"
  },
  {
    "ticker": "SNCY",
    "organization": "Sun Country Airlines Holdings",
    "industry": "Airlines",
    "marketCap": "1.99B"
  },
  {
    "ticker": "SND",
    "organization": "Smart Sand",
    "industry": "Energy Equipment & Services",
    "marketCap": "108.24M"
  },
  {
    "ticker": "SNDL",
    "organization": "Sundial Growers",
    "industry": "Pharmaceuticals",
    "marketCap": "1.38B"
  },
  {
    "ticker": "SNDR",
    "organization": "Schneider National",
    "industry": "Road & Rail",
    "marketCap": "3.99B"
  },
  {
    "ticker": "SNDX",
    "organization": "Syndax Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "948.72M"
  },
  {
    "ticker": "SNES",
    "organization": "SenesTech",
    "industry": "Pharmaceuticals",
    "marketCap": "18.41M"
  },
  {
    "ticker": "SNEX",
    "organization": "StoneX Group",
    "industry": "Capital Markets",
    "marketCap": "1.31B"
  },
  {
    "ticker": "SNFCA",
    "organization": "Security National Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "167.85M"
  },
  {
    "ticker": "SNGX",
    "organization": "Soligenix",
    "industry": "Biotechnology",
    "marketCap": "42.51M"
  },
  {
    "ticker": "SNII",
    "organization": "Supernova Partners Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "421.33M"
  },
  {
    "ticker": "SNMP",
    "organization": "Sanchez Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SNN",
    "organization": "Smith & Nephew",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "15.56B"
  },
  {
    "ticker": "SNOA",
    "organization": "Sonoma Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "15.28M"
  },
  {
    "ticker": "SNOW",
    "organization": "Snowflake",
    "industry": "IT Services",
    "marketCap": "91.39B"
  },
  {
    "ticker": "SNP",
    "organization": "China Petroleum & Chemical",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SNPO",
    "organization": "Snap One Holdings",
    "industry": "Electronics & Computer Distribution",
    "marketCap": "1.25B"
  },
  {
    "ticker": "SNPS",
    "organization": "Synopsys",
    "industry": "Software",
    "marketCap": "45.66B"
  },
  {
    "ticker": "SNPX",
    "organization": "Synaptogenix",
    "industry": "Biotechnology",
    "marketCap": "56.70M"
  },
  {
    "ticker": "SNRH",
    "organization": "Senior Connect Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "505.60M"
  },
  {
    "ticker": "SNSE",
    "organization": "Sensei Biotherapeutics",
    "industry": "Biotechnology",
    "marketCap": "310.78M"
  },
  {
    "ticker": "SNT",
    "organization": "Senstar Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SNTG",
    "organization": "Sentage Holdings",
    "industry": "Credit Services",
    "marketCap": "31.78M"
  },
  {
    "ticker": "SNV",
    "organization": "Synovus Financial",
    "industry": "Banks",
    "marketCap": "6.46B"
  },
  {
    "ticker": "SNX",
    "organization": "Synnex",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SNY",
    "organization": "Sanofi",
    "industry": "Pharmaceuticals",
    "marketCap": "120.25B"
  },
  {
    "ticker": "SO",
    "organization": "Southern Company",
    "industry": "Electric Utilities",
    "marketCap": "65.38B"
  },
  {
    "ticker": "SOFI",
    "organization": "SoFi Technologies",
    "industry": "Credit Services",
    "marketCap": "12.94B"
  },
  {
    "ticker": "SOHO",
    "organization": "Sotherly Hotels",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "43.13M"
  },
  {
    "ticker": "SOHU",
    "organization": "Sohu.com",
    "industry": "Interactive Media & Services",
    "marketCap": "807.35M"
  },
  {
    "ticker": "SOI",
    "organization": "Solaris Oilfield Infrastructure",
    "industry": "Energy Equipment & Services",
    "marketCap": "384.18M"
  },
  {
    "ticker": "SOL",
    "organization": "ReneSola",
    "industry": "Construction & Engineering",
    "marketCap": "455.46M"
  },
  {
    "ticker": "SOLO",
    "organization": "Electrameccanica Vehicles",
    "industry": "Automobiles",
    "marketCap": "385.47M"
  },
  {
    "ticker": "SOLY",
    "organization": "Soliton",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "442.51M"
  },
  {
    "ticker": "SON",
    "organization": "Sonoco Products",
    "industry": "Containers & Packaging",
    "marketCap": "5.92B"
  },
  {
    "ticker": "SONM",
    "organization": "Sonim Technologies",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "SONN",
    "organization": "Sonnet BioTherapeutics",
    "industry": "Biotechnology",
    "marketCap": "37.74M"
  },
  {
    "ticker": "SONO",
    "organization": "Sonos",
    "industry": " Inc.",
    "marketCap": "Household Durables"
  },
  {
    "ticker": "SONY",
    "organization": "Sony Group",
    "industry": "Household Durables",
    "marketCap": "137.12B"
  },
  {
    "ticker": "SOPH",
    "organization": "SOPHiA GENETICS",
    "industry": "Health Information Services",
    "marketCap": "1.17B"
  },
  {
    "ticker": "SOS",
    "organization": "SOS Limited",
    "industry": "Software-Infrastructure",
    "marketCap": "402.30M"
  },
  {
    "ticker": "SOTK",
    "organization": "Sono-Tek Corporation",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SOVO",
    "organization": "Sovos Brands",
    "industry": "Packaged Foods",
    "marketCap": "1.31B"
  },
  {
    "ticker": "SP",
    "organization": "SP Plus",
    "industry": "Commercial Services & Supplies",
    "marketCap": "719.55M"
  },
  {
    "ticker": "SPAQ",
    "organization": "Spartan Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "683.79M"
  },
  {
    "ticker": "SPB",
    "organization": "Spectrum Brands Holdings",
    "industry": "Household Products",
    "marketCap": "4.12B"
  },
  {
    "ticker": "SPCB",
    "organization": "SuperCom",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "SPCE",
    "organization": "Virgin Galactic",
    "industry": "Aerospace & Defense",
    "marketCap": "6.13B"
  },
  {
    "ticker": "SPFI",
    "organization": "South Plains Financial",
    "industry": "Banks",
    "marketCap": "442.39M"
  },
  {
    "ticker": "SPG",
    "organization": "Simon Property Group",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "43.55B"
  },
  {
    "ticker": "SPGI",
    "organization": "S&P Global",
    "industry": "Capital Markets",
    "marketCap": "103.23B"
  },
  {
    "ticker": "SPGS",
    "organization": "Simon Property Group Acquisition",
    "industry": "Shell Companies",
    "marketCap": "420.90M"
  },
  {
    "ticker": "SPH",
    "organization": "Suburban Propane Partners",
    "industry": "Gas Utilities",
    "marketCap": "973.71M"
  },
  {
    "ticker": "SPI",
    "organization": "SPI Energy",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "117.18M"
  },
  {
    "ticker": "SPIR",
    "organization": "Spire Global",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.04B"
  },
  {
    "ticker": "SPK",
    "organization": "SPK Acquisition",
    "industry": "Shell Companies",
    "marketCap": "69.16M"
  },
  {
    "ticker": "SPKB",
    "organization": "Silver Spike Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "351.47M"
  },
  {
    "ticker": "SPLK",
    "organization": "Splunk",
    "industry": "Software",
    "marketCap": "23.45B"
  },
  {
    "ticker": "SPLP",
    "organization": "Steel Partners Holdings",
    "industry": "Industrial Conglomerates",
    "marketCap": "616.80M"
  },
  {
    "ticker": "SPNE",
    "organization": "SeaSpine Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "575.82M"
  },
  {
    "ticker": "SPNS",
    "organization": "Sapiens International",
    "industry": "Software",
    "marketCap": "1.57B"
  },
  {
    "ticker": "SPNT",
    "organization": "SiriusPoint",
    "industry": "Insurance-Reinsurance",
    "marketCap": "1.52B"
  },
  {
    "ticker": "SPOK",
    "organization": "Spok Holdings",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "200.90M"
  },
  {
    "ticker": "SPOT",
    "organization": "Spotify Technology",
    "industry": "Entertainment",
    "marketCap": "43.88B"
  },
  {
    "ticker": "SPPI",
    "organization": "Spectrum Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "357.68M"
  },
  {
    "ticker": "SPR",
    "organization": "Spirit AeroSystems",
    "industry": "Aerospace & Defense",
    "marketCap": "4.84B"
  },
  {
    "ticker": "SPRB",
    "organization": "Spruce Biosciences",
    "industry": "Biotechnology",
    "marketCap": "139.33M"
  },
  {
    "ticker": "SPRO",
    "organization": "Spero Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "556.78M"
  },
  {
    "ticker": "SPSC",
    "organization": "SPS Commerce",
    "industry": "Software",
    "marketCap": "5.75B"
  },
  {
    "ticker": "SPT",
    "organization": "Sprout Social",
    "industry": "Software",
    "marketCap": "6.78B"
  },
  {
    "ticker": "SPTK",
    "organization": "SportsTek Acquisition",
    "industry": "Shell Companies",
    "marketCap": "210.02M"
  },
  {
    "ticker": "SPTN",
    "organization": "SpartanNash",
    "industry": "Food & Staples Retailing",
    "marketCap": "792.80M"
  },
  {
    "ticker": "SPWH",
    "organization": "Sportsman's Warehouse",
    "industry": "Specialty Retail",
    "marketCap": "774.57M"
  },
  {
    "ticker": "SPWR",
    "organization": "SunPower",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.92B"
  },
  {
    "ticker": "SPXC",
    "organization": "SPX Corporation",
    "industry": "Machinery",
    "marketCap": "2.54B"
  },
  {
    "ticker": "SQ",
    "organization": "Square",
    "industry": "IT Services",
    "marketCap": "110.00B"
  },
  {
    "ticker": "SQFT",
    "organization": "Presidio Property Trust",
    "industry": "REIT-Diversified",
    "marketCap": "39.51M"
  },
  {
    "ticker": "SQL",
    "organization": "SeqLL",
    "industry": "Diagnostics & Research",
    "marketCap": "42.46M"
  },
  {
    "ticker": "SQM",
    "organization": "Sociedad Quimica y Minera de Chile",
    "industry": "Chemicals",
    "marketCap": "15.43B"
  },
  {
    "ticker": "SQNS",
    "organization": "Sequans Communications",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "160.69M"
  },
  {
    "ticker": "SQSP",
    "organization": "Squarespace",
    "industry": "Software-Infrastructure",
    "marketCap": "5.42B"
  },
  {
    "ticker": "SQZ",
    "organization": "SQZ Biotechnologies",
    "industry": "Biotechnology",
    "marketCap": "403.04M"
  },
  {
    "ticker": "SR",
    "organization": "Spire",
    "industry": "Gas Utilities",
    "marketCap": "3.21B"
  },
  {
    "ticker": "SRAD",
    "organization": "Sportradar",
    "industry": "Software-Application",
    "marketCap": "26.00B"
  },
  {
    "ticker": "SRAX",
    "organization": "SRAX",
    "industry": " Inc.",
    "marketCap": "Media"
  },
  {
    "ticker": "SRC",
    "organization": "Spirit Realty Capital",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "5.64B"
  },
  {
    "ticker": "SRCE",
    "organization": "1st Source",
    "industry": "Banks",
    "marketCap": "1.21B"
  },
  {
    "ticker": "SRCL",
    "organization": "Stericycle",
    "industry": "Commercial Services & Supplies",
    "marketCap": "6.39B"
  },
  {
    "ticker": "SRDX",
    "organization": "SurModics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "773.50M"
  },
  {
    "ticker": "SRE",
    "organization": "Sempra Energy",
    "industry": "Multi-Utilities",
    "marketCap": "40.10B"
  },
  {
    "ticker": "SREV",
    "organization": "ServiceSource International",
    "industry": "IT Services",
    "marketCap": "132.13M"
  },
  {
    "ticker": "SRG",
    "organization": "Seritage Growth Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "678.03M"
  },
  {
    "ticker": "SRGA",
    "organization": "Surgalign Holdings",
    "industry": "Medical Devices",
    "marketCap": "153.34M"
  },
  {
    "ticker": "SRI",
    "organization": "Stoneridge",
    "industry": "Auto Components",
    "marketCap": "565.82M"
  },
  {
    "ticker": "SRL",
    "organization": "Scully Royalty",
    "industry": "Capital Markets",
    "marketCap": "154.23M"
  },
  {
    "ticker": "SRLP",
    "organization": "Sprague Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SRNE",
    "organization": "Sorrento Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.02B"
  },
  {
    "ticker": "SRPT",
    "organization": "Sarepta Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "7.44B"
  },
  {
    "ticker": "SRRA",
    "organization": "Sierra Oncology",
    "industry": "Biotechnology",
    "marketCap": "278.91M"
  },
  {
    "ticker": "SRRK",
    "organization": "Scholar Rock Holding",
    "industry": "Biotechnology",
    "marketCap": "1.14B"
  },
  {
    "ticker": "SRSA",
    "organization": "Sarissa Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "246.50M"
  },
  {
    "ticker": "SRT",
    "organization": "Startek",
    "industry": "IT Services",
    "marketCap": "232.96M"
  },
  {
    "ticker": "SRTS",
    "organization": "Sensus Healthcare",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "61.05M"
  },
  {
    "ticker": "SRZN",
    "organization": "Surrozen",
    "industry": "Biotechnology",
    "marketCap": "237.14M"
  },
  {
    "ticker": "SSAA",
    "organization": "Science Strategic Acquisition Alpha",
    "industry": "Shell Companies",
    "marketCap": "379.97M"
  },
  {
    "ticker": "SSB",
    "organization": "South State Corporation",
    "industry": "Banks",
    "marketCap": "5.41B"
  },
  {
    "ticker": "SSBI",
    "organization": "Summit State Bank",
    "industry": "Banks",
    "marketCap": "120.23M"
  },
  {
    "ticker": "SSBK",
    "organization": "Southern States Bancshares",
    "industry": "Banks-Regional",
    "marketCap": "167.11M"
  },
  {
    "ticker": "SSD",
    "organization": "Simpson Manufacturing",
    "industry": "Building Products",
    "marketCap": "4.74B"
  },
  {
    "ticker": "SSKN",
    "organization": "STRATA Skin Sciences",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "62.93M"
  },
  {
    "ticker": "SSL",
    "organization": "Sasol",
    "industry": "Chemicals",
    "marketCap": "11.89B"
  },
  {
    "ticker": "SSNC",
    "organization": "SS&C Technologies",
    "industry": "Software",
    "marketCap": "17.83B"
  },
  {
    "ticker": "SSNT",
    "organization": "SilverSun Technologies",
    "industry": "Software",
    "marketCap": "32.36M"
  },
  {
    "ticker": "SSP",
    "organization": "E.W. Scripps",
    "industry": "Media",
    "marketCap": "1.51B"
  },
  {
    "ticker": "SSRM",
    "organization": "SSR Mining",
    "industry": "Metals & Mining",
    "marketCap": "3.11B"
  },
  {
    "ticker": "SSSS",
    "organization": "SuRo Capital",
    "industry": "Capital Markets",
    "marketCap": "341.51M"
  },
  {
    "ticker": "SSTI",
    "organization": "ShotSpotter",
    "industry": "Software",
    "marketCap": "429.76M"
  },
  {
    "ticker": "SSTK",
    "organization": "Shutterstock",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "4.30B"
  },
  {
    "ticker": "SSY",
    "organization": "SunLink Health Systems",
    "industry": "Health Care Providers & Services",
    "marketCap": "18.00M"
  },
  {
    "ticker": "SSYS",
    "organization": "Stratasys",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "ST",
    "organization": "Sensata Technologies Holding",
    "industry": "Electrical Equipment",
    "marketCap": "8.76B"
  },
  {
    "ticker": "STAA",
    "organization": "STAAR Surgical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "6.09B"
  },
  {
    "ticker": "STAB",
    "organization": "Statera Biopharma",
    "industry": "Biotechnology",
    "marketCap": "65.12M"
  },
  {
    "ticker": "STAF",
    "organization": "Staffing 360 Solutions",
    "industry": "Professional Services",
    "marketCap": "24.66M"
  },
  {
    "ticker": "STAG",
    "organization": "Stag Industrial",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "6.36B"
  },
  {
    "ticker": "STAR",
    "organization": "iStar Inc.",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.79B"
  },
  {
    "ticker": "STBA",
    "organization": "S&T Bancorp",
    "industry": "Banks",
    "marketCap": "1.18B"
  },
  {
    "ticker": "STC",
    "organization": "Stewart Information Services",
    "industry": "Insurance",
    "marketCap": "1.70B"
  },
  {
    "ticker": "STCN",
    "organization": "Steel Connect",
    "industry": "IT Services",
    "marketCap": "129.98M"
  },
  {
    "ticker": "STE",
    "organization": "Steris",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "20.59B"
  },
  {
    "ticker": "STEM",
    "organization": "Stem",
    "industry": "Software-Infrastructure",
    "marketCap": "3.17B"
  },
  {
    "ticker": "STEP",
    "organization": "StepStone Group",
    "industry": "Asset Management",
    "marketCap": "2.24B"
  },
  {
    "ticker": "STER",
    "organization": "Sterling Check",
    "industry": "Software-Application",
    "marketCap": "2.45B"
  },
  {
    "ticker": "STFC",
    "organization": "State Auto Financial",
    "industry": "Insurance",
    "marketCap": "2.25B"
  },
  {
    "ticker": "STG",
    "organization": "Sunlands Technology Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "71.87M"
  },
  {
    "ticker": "STGW",
    "organization": "Stagwell",
    "industry": "Advertising Agencies",
    "marketCap": "1.96B"
  },
  {
    "ticker": "STIM",
    "organization": "Neuronetics",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "173.44M"
  },
  {
    "ticker": "STKL",
    "organization": "SunOpta",
    "industry": "Food Products",
    "marketCap": "942.54M"
  },
  {
    "ticker": "STKS",
    "organization": "ONE Group Hospitality",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "STL",
    "organization": "Sterling Bancorp",
    "industry": "Banks",
    "marketCap": "4.94B"
  },
  {
    "ticker": "STLA",
    "organization": "Stellantis",
    "industry": "Automobiles",
    "marketCap": "59.22B"
  },
  {
    "ticker": "STLD",
    "organization": "Steel Dynamics",
    "industry": "Metals & Mining",
    "marketCap": "11.89B"
  },
  {
    "ticker": "STM",
    "organization": "STMicroelectronics",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "39.47B"
  },
  {
    "ticker": "STMP",
    "organization": "Stamps.com",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "6.13B"
  },
  {
    "ticker": "STN",
    "organization": "Stantec",
    "industry": "Professional Services",
    "marketCap": "5.20B"
  },
  {
    "ticker": "STNE",
    "organization": "StoneCo",
    "industry": "IT Services",
    "marketCap": "10.94B"
  },
  {
    "ticker": "STNG",
    "organization": "Scorpio Tankers",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "STOK",
    "organization": "Stoke Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "964.30M"
  },
  {
    "ticker": "STON",
    "organization": "StoneMor",
    "industry": "Diversified Consumer Services",
    "marketCap": "290.31M"
  },
  {
    "ticker": "STOR",
    "organization": "STORE Capital",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "8.97B"
  },
  {
    "ticker": "STRA",
    "organization": "Strategic Education",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.77B"
  },
  {
    "ticker": "STRC",
    "organization": "Sarcos Technology & Robotics",
    "industry": "Shell Companies",
    "marketCap": "346.72M"
  },
  {
    "ticker": "STRE",
    "organization": "Supernova Partners Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "343.21M"
  },
  {
    "ticker": "STRL",
    "organization": "Sterling Construction Company",
    "industry": "Construction & Engineering",
    "marketCap": "657.55M"
  },
  {
    "ticker": "STRM",
    "organization": "Streamline Health Solutions",
    "industry": "Health Care Technology",
    "marketCap": "86.86M"
  },
  {
    "ticker": "STRO",
    "organization": "Sutro Biopharma",
    "industry": "Biotechnology",
    "marketCap": "891.57M"
  },
  {
    "ticker": "STRR",
    "organization": "Star Equity Holdings",
    "industry": "Diagnostics & Research",
    "marketCap": "13.69M"
  },
  {
    "ticker": "STRS",
    "organization": "Stratus Properties",
    "industry": "Real Estate Management & Development",
    "marketCap": "257.91M"
  },
  {
    "ticker": "STRT",
    "organization": "STRATTEC Security",
    "industry": "Auto Components",
    "marketCap": "153.26M"
  },
  {
    "ticker": "STSA",
    "organization": "Satsuma Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "146.93M"
  },
  {
    "ticker": "STT",
    "organization": "State Street",
    "industry": "Capital Markets",
    "marketCap": "31.59B"
  },
  {
    "ticker": "STTK",
    "organization": "Shattuck Labs",
    "industry": "Biotechnology",
    "marketCap": "870.26M"
  },
  {
    "ticker": "STVN",
    "organization": "Stevanato Group",
    "industry": "Medical Instruments & Supplies",
    "marketCap": "7.20B"
  },
  {
    "ticker": "STWD",
    "organization": "Starwood Property Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "7.22B"
  },
  {
    "ticker": "STWO",
    "organization": "ACON S2 Acquisition",
    "industry": "Shell Companies",
    "marketCap": "312.50M"
  },
  {
    "ticker": "STX",
    "organization": "Seagate Technology",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "STXB",
    "organization": "Spirit of Texas Bancshares",
    "industry": "Banks",
    "marketCap": "415.49M"
  },
  {
    "ticker": "STXS",
    "organization": "Stereotaxis",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "406.81M"
  },
  {
    "ticker": "STZ",
    "organization": "Constellation Brands",
    "industry": "Beverages",
    "marketCap": "41.04B"
  },
  {
    "ticker": "SU",
    "organization": "Suncor Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SUI",
    "organization": "Sun Communities",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "21.45B"
  },
  {
    "ticker": "SUM",
    "organization": "Summit Materials",
    "industry": "Construction Materials",
    "marketCap": "3.93B"
  },
  {
    "ticker": "SUMO",
    "organization": "Sumo Logic",
    "industry": "Software",
    "marketCap": "1.77B"
  },
  {
    "ticker": "SUMR",
    "organization": "Summer Infant",
    "industry": "Leisure Products",
    "marketCap": "18.17M"
  },
  {
    "ticker": "SUN",
    "organization": "Sunoco",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SUNL",
    "organization": "Sunlight Financial",
    "industry": "Credit Services",
    "marketCap": "217.78M"
  },
  {
    "ticker": "SUNS",
    "organization": "Solar Senior Capital",
    "industry": "Capital Markets",
    "marketCap": "250.59M"
  },
  {
    "ticker": "SUNW",
    "organization": "Sunworks",
    "industry": "Electrical Equipment",
    "marketCap": "167.70M"
  },
  {
    "ticker": "SUP",
    "organization": "Superior Industries International",
    "industry": "Auto Components",
    "marketCap": "184.06M"
  },
  {
    "ticker": "SUPN",
    "organization": "Supernus Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "1.42B"
  },
  {
    "ticker": "SUPV",
    "organization": "Grupo Supervielle",
    "industry": "Banks",
    "marketCap": "410.29M"
  },
  {
    "ticker": "SURF",
    "organization": "Surface Oncology",
    "industry": "Biotechnology",
    "marketCap": "344.07M"
  },
  {
    "ticker": "SUZ",
    "organization": "Suzano",
    "industry": "Paper & Forest Products",
    "marketCap": "13.28B"
  },
  {
    "ticker": "SV",
    "organization": "Spring Valley Acquisition",
    "industry": "Shell Companies",
    "marketCap": "252.42M"
  },
  {
    "ticker": "SVBI",
    "organization": "Severn Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "160.80M"
  },
  {
    "ticker": "SVC",
    "organization": "Service Properties Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.91B"
  },
  {
    "ticker": "SVFA",
    "organization": "SVF Investment",
    "industry": "Shell Companies",
    "marketCap": "736.95M"
  },
  {
    "ticker": "SVFB",
    "organization": "SVF Investment 2",
    "industry": "Shell Companies",
    "marketCap": "289.79M"
  },
  {
    "ticker": "SVFC",
    "organization": "SVF Investment 3",
    "industry": "Shell Companies",
    "marketCap": "403.01M"
  },
  {
    "ticker": "SVFD",
    "organization": "Save Foods",
    "industry": "Agricultural Inputs",
    "marketCap": "18.36M"
  },
  {
    "ticker": "SVM",
    "organization": "Silvercorp Metals",
    "industry": "Metals & Mining",
    "marketCap": "679.55M"
  },
  {
    "ticker": "SVOK",
    "organization": "Seven Oaks Acquisition",
    "industry": "Shell Companies",
    "marketCap": "321.20M"
  },
  {
    "ticker": "SVRA",
    "organization": "Savara",
    "industry": "Biotechnology",
    "marketCap": "155.69M"
  },
  {
    "ticker": "SVT",
    "organization": "Servotronics",
    "industry": "Electrical Equipment",
    "marketCap": "30.27M"
  },
  {
    "ticker": "SVVC",
    "organization": "Firsthand Technology Value Fund",
    "industry": "Securities and Commodity Exchanges",
    "marketCap": "24.26M"
  },
  {
    "ticker": "SWAG",
    "organization": "Software Acquisition Group III",
    "industry": "Shell Companies",
    "marketCap": "246.50M"
  },
  {
    "ticker": "SWAV",
    "organization": "ShockWave Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "7.01B"
  },
  {
    "ticker": "SWBI",
    "organization": "Smith & Wesson Brands",
    "industry": "Leisure Products",
    "marketCap": "1.01B"
  },
  {
    "ticker": "SWBK",
    "organization": "Switchback II",
    "industry": "Shell Companies",
    "marketCap": "394.13M"
  },
  {
    "ticker": "SWCH",
    "organization": "Switch",
    "industry": " Inc.",
    "marketCap": "IT Services"
  },
  {
    "ticker": "SWET",
    "organization": "Athlon Acquisition",
    "industry": "Shell Companies",
    "marketCap": "335.34M"
  },
  {
    "ticker": "SWI",
    "organization": "SolarWinds",
    "industry": "Software",
    "marketCap": "2.62B"
  },
  {
    "ticker": "SWIM",
    "organization": "Latham Group",
    "industry": "Building Products & Equipment",
    "marketCap": "1.88B"
  },
  {
    "ticker": "SWIR",
    "organization": "Sierra Wireless",
    "industry": "Communications Equipment",
    "marketCap": "578.29M"
  },
  {
    "ticker": "SWK",
    "organization": "Stanley Black & Decker",
    "industry": "Machinery",
    "marketCap": "28.50B"
  },
  {
    "ticker": "SWKH",
    "organization": "SWK Holdings",
    "industry": "Diversified Financial Services",
    "marketCap": "232.60M"
  },
  {
    "ticker": "SWKS",
    "organization": "Skyworks Solutions",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "26.78B"
  },
  {
    "ticker": "SWM",
    "organization": "Schweitzer-Mauduit International",
    "industry": "Paper & Forest Products",
    "marketCap": "1.12B"
  },
  {
    "ticker": "SWN",
    "organization": "Southwestern Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "SWTX",
    "organization": "Springworks Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.11B"
  },
  {
    "ticker": "SWX",
    "organization": "Southwest Gas Holdings",
    "industry": "Gas Utilities",
    "marketCap": "3.95B"
  },
  {
    "ticker": "SXC",
    "organization": "SunCoke Energy",
    "industry": "Metals & Mining",
    "marketCap": "538.49M"
  },
  {
    "ticker": "SXI",
    "organization": "Standex International",
    "industry": "Machinery",
    "marketCap": "1.21B"
  },
  {
    "ticker": "SXT",
    "organization": "Sensient Technologies",
    "industry": "Chemicals",
    "marketCap": "3.92B"
  },
  {
    "ticker": "SXTC",
    "organization": "China SXT Pharmaceuticals",
    "industry": "Personal Products",
    "marketCap": "15.07M"
  },
  {
    "ticker": "SY",
    "organization": "So-Young International",
    "industry": "Interactive Media & Services",
    "marketCap": "444.96M"
  },
  {
    "ticker": "SYBT",
    "organization": "Stock Yards Bancorp",
    "industry": "Banks",
    "marketCap": "1.56B"
  },
  {
    "ticker": "SYBX",
    "organization": "Synlogic",
    "industry": "Biotechnology",
    "marketCap": "155.55M"
  },
  {
    "ticker": "SYF",
    "organization": "Synchrony Financial",
    "industry": "Consumer Finance",
    "marketCap": "28.43B"
  },
  {
    "ticker": "SYK",
    "organization": "Stryker",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "99.45B"
  },
  {
    "ticker": "SYN",
    "organization": "Synthetic Biologics",
    "industry": "Biotechnology",
    "marketCap": "60.67M"
  },
  {
    "ticker": "SYNA",
    "organization": "Synaptics",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "7.13B"
  },
  {
    "ticker": "SYNH",
    "organization": "Syneos Health",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "9.05B"
  },
  {
    "ticker": "SYNL",
    "organization": "Synalloy",
    "industry": "Metals & Mining",
    "marketCap": "101.86M"
  },
  {
    "ticker": "SYPR",
    "organization": "Sypris Solutions",
    "industry": "Auto Components",
    "marketCap": "75.34M"
  },
  {
    "ticker": "SYRS",
    "organization": "Syros Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "281.79M"
  },
  {
    "ticker": "SYTA",
    "organization": "Siyata Mobile",
    "industry": "Communications Equipment",
    "marketCap": "16.62M"
  },
  {
    "ticker": "SYY",
    "organization": "Sysco",
    "industry": "Food & Staples Retailing",
    "marketCap": "41.39B"
  },
  {
    "ticker": "T",
    "organization": "AT&T",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "194.14B"
  },
  {
    "ticker": "TA",
    "organization": "TravelCenters of America",
    "industry": "Specialty Retail",
    "marketCap": "725.96M"
  },
  {
    "ticker": "TAC",
    "organization": "TransAlta",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "2.87B"
  },
  {
    "ticker": "TACA",
    "organization": "Trepont Acquisition I",
    "industry": "Shell Companies",
    "marketCap": "286.35M"
  },
  {
    "ticker": "TACO",
    "organization": "Del Taco Restaurants",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "TACT",
    "organization": "TransAct Technologies",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "TAIT",
    "organization": "Taitron Components",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "TAK",
    "organization": "Takeda Pharmaceutical",
    "industry": "Pharmaceuticals",
    "marketCap": "52.02B"
  },
  {
    "ticker": "TAL",
    "organization": "TAL Education Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "3.11B"
  },
  {
    "ticker": "TALK",
    "organization": "Talkspace",
    "industry": "Medical Care Facilities",
    "marketCap": "577.05M"
  },
  {
    "ticker": "TALO",
    "organization": "Talos Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TALS",
    "organization": "Talaris Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "618.74M"
  },
  {
    "ticker": "TANH",
    "organization": "Tantech Holdings",
    "industry": "Chemicals",
    "marketCap": "23.75M"
  },
  {
    "ticker": "TAOP",
    "organization": "Taoping",
    "industry": "IT Services",
    "marketCap": "35.21M"
  },
  {
    "ticker": "TAP",
    "organization": "Molson Coors",
    "industry": "Beverages",
    "marketCap": "10.24B"
  },
  {
    "ticker": "TARA",
    "organization": "ArTara Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "78.09M"
  },
  {
    "ticker": "TARO",
    "organization": "Taro Pharmaceutical Industries",
    "industry": "Pharmaceuticals",
    "marketCap": "2.43B"
  },
  {
    "ticker": "TARS",
    "organization": "Tarsus Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "442.75M"
  },
  {
    "ticker": "TASK",
    "organization": "TaskUs",
    "industry": "Information Technology Services",
    "marketCap": "6.33B"
  },
  {
    "ticker": "TAST",
    "organization": "Carrols Restaurant Group",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "TATT",
    "organization": "TAT Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "52.80M"
  },
  {
    "ticker": "TAYD",
    "organization": "Taylor Devices",
    "industry": "Machinery",
    "marketCap": "39.16M"
  },
  {
    "ticker": "TBBK",
    "organization": "The Bancorp",
    "industry": " Inc.",
    "marketCap": "Banks"
  },
  {
    "ticker": "TBCP",
    "organization": "Thunder Bridge Capital Partners III",
    "industry": "Shell Companies",
    "marketCap": "513.02M"
  },
  {
    "ticker": "TBI",
    "organization": "TrueBlue",
    "industry": "Professional Services",
    "marketCap": "1.01B"
  },
  {
    "ticker": "TBK",
    "organization": "Triumph Bancorp",
    "industry": "Banks",
    "marketCap": "2.62B"
  },
  {
    "ticker": "TBLA",
    "organization": "Taboola",
    "industry": "n/a",
    "marketCap": "1.76B"
  },
  {
    "ticker": "TBLD",
    "organization": "Thornburg Income Builder Opportunities Trust",
    "industry": "n/a",
    "marketCap": "350.18M"
  },
  {
    "ticker": "TBLT",
    "organization": "Toughbuilt Industries",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "TBNK",
    "organization": "Territorial Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "234.27M"
  },
  {
    "ticker": "TBPH",
    "organization": "Theravance Biopharma",
    "industry": "Pharmaceuticals",
    "marketCap": "546.62M"
  },
  {
    "ticker": "TBSA",
    "organization": "TB SA Acquisition",
    "industry": "Shell Companies",
    "marketCap": "244.00M"
  },
  {
    "ticker": "TC",
    "organization": "TuanChe",
    "industry": "Internet Content & Information",
    "marketCap": "45.31M"
  },
  {
    "ticker": "TCAC",
    "organization": "Tuatara Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "243.25M"
  },
  {
    "ticker": "TCBC",
    "organization": "TC Bancshares",
    "industry": "Banks-Regional",
    "marketCap": "68.25M"
  },
  {
    "ticker": "TCBI",
    "organization": "Texas Capital Bancshares",
    "industry": "Banks",
    "marketCap": "3.11B"
  },
  {
    "ticker": "TCBK",
    "organization": "TriCo Bancshares",
    "industry": "Banks",
    "marketCap": "1.32B"
  },
  {
    "ticker": "TCBS",
    "organization": "Texas Community Bancshares",
    "industry": "Banks-Regional",
    "marketCap": "50.80M"
  },
  {
    "ticker": "TCDA",
    "organization": "Tricida",
    "industry": "Pharmaceuticals",
    "marketCap": "229.45M"
  },
  {
    "ticker": "TCFC",
    "organization": "Community Financial Corporation",
    "industry": "Banks",
    "marketCap": "211.93M"
  },
  {
    "ticker": "TCI",
    "organization": "Transcontinental Realty Investors",
    "industry": "Real Estate Management & Development",
    "marketCap": "337.11M"
  },
  {
    "ticker": "TCMD",
    "organization": "Tactile Systems Technology",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "908.60M"
  },
  {
    "ticker": "TCOM",
    "organization": "Trip.com Group",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "19.76B"
  },
  {
    "ticker": "TCON",
    "organization": "TRACON Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "75.39M"
  },
  {
    "ticker": "TCPC",
    "organization": "Blackrock TCP Capital",
    "industry": "Capital Markets",
    "marketCap": "808.74M"
  },
  {
    "ticker": "TCRR",
    "organization": "TCR2 Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "318.56M"
  },
  {
    "ticker": "TCRX",
    "organization": "TScan Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "206.59M"
  },
  {
    "ticker": "TCS",
    "organization": "Container Store Group",
    "industry": "Specialty Retail",
    "marketCap": "502.74M"
  },
  {
    "ticker": "TCVA",
    "organization": "TCV Acquisition",
    "industry": "Shell Companies",
    "marketCap": "437.21M"
  },
  {
    "ticker": "TCX",
    "organization": "Tucows",
    "industry": "IT Services",
    "marketCap": "869.00M"
  },
  {
    "ticker": "TD",
    "organization": "Toronto-Dominion Bank",
    "industry": "Banks",
    "marketCap": "122.27B"
  },
  {
    "ticker": "TDAC",
    "organization": "Trident Acquisitions",
    "industry": "Shell Companies",
    "marketCap": "141.22M"
  },
  {
    "ticker": "TDC",
    "organization": "Teradata",
    "industry": "Software",
    "marketCap": "6.26B"
  },
  {
    "ticker": "TDCX",
    "organization": "TDCX",
    "industry": "Services - Computer Integrated System...",
    "marketCap": "2.72B"
  },
  {
    "ticker": "TDG",
    "organization": "TransDigm Group",
    "industry": "Aerospace & Defense",
    "marketCap": "35.87B"
  },
  {
    "ticker": "TDOC",
    "organization": "Teladoc Health",
    "industry": "Health Care Technology",
    "marketCap": "20.18B"
  },
  {
    "ticker": "TDS",
    "organization": "Telephone & Data Systems",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "2.26B"
  },
  {
    "ticker": "TDUP",
    "organization": "ThredUp",
    "industry": "Internet Retail",
    "marketCap": "2.01B"
  },
  {
    "ticker": "TDW",
    "organization": "Tidewater",
    "industry": "Energy Equipment & Services",
    "marketCap": "511.78M"
  },
  {
    "ticker": "TDY",
    "organization": "Teledyne Technologies",
    "industry": "Aerospace & Defense",
    "marketCap": "20.02B"
  },
  {
    "ticker": "TEAM",
    "organization": "Atlassian",
    "industry": "Software",
    "marketCap": "98.81B"
  },
  {
    "ticker": "TECH",
    "organization": "Bio-Techne",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "19.23B"
  },
  {
    "ticker": "TECK",
    "organization": "Teck Resources",
    "industry": "Metals & Mining",
    "marketCap": "13.34B"
  },
  {
    "ticker": "TEDU",
    "organization": "Tarena International",
    "industry": "Diversified Consumer Services",
    "marketCap": "64.55M"
  },
  {
    "ticker": "TEF",
    "organization": "Telefonica",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "26.33B"
  },
  {
    "ticker": "TEKK",
    "organization": "Tekkorp Digital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "306.56M"
  },
  {
    "ticker": "TEL",
    "organization": "TE Connectivity",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "TELA",
    "organization": "TELA Bio",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "188.14M"
  },
  {
    "ticker": "TELL",
    "organization": "Tellurian",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TEN",
    "organization": "Tenneco",
    "industry": "Auto Components",
    "marketCap": "1.17B"
  },
  {
    "ticker": "TENB",
    "organization": "Tenable Holdings",
    "industry": "Software",
    "marketCap": "4.97B"
  },
  {
    "ticker": "TENX",
    "organization": "Tenax Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "45.36M"
  },
  {
    "ticker": "TEO",
    "organization": "Telecom Argentina",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "2.15B"
  },
  {
    "ticker": "TER",
    "organization": "Teradyne",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "18.10B"
  },
  {
    "ticker": "TERN",
    "organization": "Terns Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "262.49M"
  },
  {
    "ticker": "TESS",
    "organization": "TESSCO Technologies",
    "industry": "Communications Equipment",
    "marketCap": "50.62M"
  },
  {
    "ticker": "TETC",
    "organization": "Tech & Energy Transition",
    "industry": "Shell Companies",
    "marketCap": "467.29M"
  },
  {
    "ticker": "TEVA",
    "organization": "Teva Pharmaceutical",
    "industry": "Pharmaceuticals",
    "marketCap": "10.81B"
  },
  {
    "ticker": "TEX",
    "organization": "Terex",
    "industry": "Machinery",
    "marketCap": "3.01B"
  },
  {
    "ticker": "TFC",
    "organization": "Truist Financial",
    "industry": "Banks",
    "marketCap": "80.38B"
  },
  {
    "ticker": "TFFP",
    "organization": "TFF Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "191.56M"
  },
  {
    "ticker": "TFII",
    "organization": "TFI International",
    "industry": "Road & Rail",
    "marketCap": "9.53B"
  },
  {
    "ticker": "TFSL",
    "organization": "TFS Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "5.46B"
  },
  {
    "ticker": "TFX",
    "organization": "Teleflex",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "17.94B"
  },
  {
    "ticker": "TG",
    "organization": "Tredegar",
    "industry": "Chemicals",
    "marketCap": "413.16M"
  },
  {
    "ticker": "TGA",
    "organization": "TransGlobe Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TGB",
    "organization": "Taseko Mines",
    "industry": "Metals & Mining",
    "marketCap": "540.47M"
  },
  {
    "ticker": "TGH",
    "organization": "Textainer Group Holdings",
    "industry": "Trading Companies & Distributors",
    "marketCap": "1.76B"
  },
  {
    "ticker": "TGI",
    "organization": "Triumph Group",
    "industry": "Aerospace & Defense",
    "marketCap": "1.35B"
  },
  {
    "ticker": "TGLS",
    "organization": "Tecnoglass",
    "industry": "Construction Materials",
    "marketCap": "1.03B"
  },
  {
    "ticker": "TGNA",
    "organization": "Tegna",
    "industry": "Media",
    "marketCap": "4.45B"
  },
  {
    "ticker": "TGP",
    "organization": "Teekay LNG Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TGS",
    "organization": "Transportadora de Gas del Sur",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TGT",
    "organization": "Target",
    "industry": "Multiline Retail",
    "marketCap": "109.31B"
  },
  {
    "ticker": "TGTX",
    "organization": "TG Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "4.81B"
  },
  {
    "ticker": "TH",
    "organization": "Target Hospitality",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "THC",
    "organization": "Tenet Healthcare",
    "industry": "Health Care Providers & Services",
    "marketCap": "7.37B"
  },
  {
    "ticker": "THCA",
    "organization": "Tuscan Holdings Corp. II",
    "industry": "Shell Companies",
    "marketCap": "196.72M"
  },
  {
    "ticker": "THCP",
    "organization": "Thunder Bridge Capital Partners IV",
    "industry": "Shell Companies",
    "marketCap": "278.88M"
  },
  {
    "ticker": "THFF",
    "organization": "First Financial Corporation",
    "industry": "Banks",
    "marketCap": "548.68M"
  },
  {
    "ticker": "THG",
    "organization": "Hanover Insurance Group",
    "industry": "Insurance",
    "marketCap": "4.72B"
  },
  {
    "ticker": "THM",
    "organization": "International Tower Hill Mines",
    "industry": "Metals & Mining",
    "marketCap": "148.15M"
  },
  {
    "ticker": "THMA",
    "organization": "Thimble Point Acquisition",
    "industry": "Shell Companies",
    "marketCap": "342.59M"
  },
  {
    "ticker": "THMO",
    "organization": "ThermoGenesis Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "23.59M"
  },
  {
    "ticker": "THO",
    "organization": "Thor Industries",
    "industry": "Automobiles",
    "marketCap": "7.02B"
  },
  {
    "ticker": "THR",
    "organization": "Thermon Group Holdings",
    "industry": "Electrical Equipment",
    "marketCap": "577.13M"
  },
  {
    "ticker": "THRM",
    "organization": "Gentherm",
    "industry": "Auto Components",
    "marketCap": "2.68B"
  },
  {
    "ticker": "THRN",
    "organization": "Thorne HealthTech",
    "industry": "Packaged Foods",
    "marketCap": "445.32M"
  },
  {
    "ticker": "THRY",
    "organization": "Thryv Holdings",
    "industry": "Media",
    "marketCap": "1.04B"
  },
  {
    "ticker": "THS",
    "organization": "TreeHouse Foods",
    "industry": "Food Products",
    "marketCap": "2.23B"
  },
  {
    "ticker": "THTX",
    "organization": "Theratechnologies",
    "industry": "Biotechnology",
    "marketCap": "357.42M"
  },
  {
    "ticker": "TIG",
    "organization": "Trean Insurance Group",
    "industry": "Biotechnology",
    "marketCap": "549.09M"
  },
  {
    "ticker": "TIGO",
    "organization": "Millicom International Cellular",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "3.72B"
  },
  {
    "ticker": "TIGR",
    "organization": "UP Fintech Holding",
    "industry": "Capital Markets",
    "marketCap": "1.69B"
  },
  {
    "ticker": "TIL",
    "organization": "Instil Bio",
    "industry": "Biotechnology",
    "marketCap": "2.40B"
  },
  {
    "ticker": "TILE",
    "organization": "Interface",
    "industry": "Commercial Services & Supplies",
    "marketCap": "910.04M"
  },
  {
    "ticker": "TIMB",
    "organization": "TIM S.A.",
    "industry": "Telecom Services",
    "marketCap": "5.29B"
  },
  {
    "ticker": "TINV",
    "organization": "Tiga Acquisition",
    "industry": "Shell Companies",
    "marketCap": "349.14M"
  },
  {
    "ticker": "TIOA",
    "organization": "Tio Tech A",
    "industry": "Shell Companies",
    "marketCap": "362.63M"
  },
  {
    "ticker": "TIPT",
    "organization": "Tiptree",
    "industry": "Insurance",
    "marketCap": "339.42M"
  },
  {
    "ticker": "TIRX",
    "organization": "Tian Ruixiang Holdings",
    "industry": "Insurance Brokers",
    "marketCap": "43.52M"
  },
  {
    "ticker": "TISI",
    "organization": "Team",
    "industry": " Inc.",
    "marketCap": "Commercial Services & Supplies"
  },
  {
    "ticker": "TITN",
    "organization": "Titan Machinery",
    "industry": "Trading Companies & Distributors",
    "marketCap": "589.06M"
  },
  {
    "ticker": "TIXT",
    "organization": "TELUS International",
    "industry": "Software-Infrastructure",
    "marketCap": "9.30B"
  },
  {
    "ticker": "TJX",
    "organization": "TJX Companies",
    "industry": "Specialty Retail",
    "marketCap": "79.14B"
  },
  {
    "ticker": "TK",
    "organization": "Teekay Corporation",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TKAT",
    "organization": "Takung Art",
    "industry": "Interactive Media & Services",
    "marketCap": "94.60M"
  },
  {
    "ticker": "TKC",
    "organization": "Turkcell",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "3.80B"
  },
  {
    "ticker": "TKNO",
    "organization": "Alpha Teknova",
    "industry": "Drug Manufacturers-Specialty & Generic",
    "marketCap": "735.31M"
  },
  {
    "ticker": "TKR",
    "organization": "Timken",
    "industry": "Machinery",
    "marketCap": "5.09B"
  },
  {
    "ticker": "TLGA",
    "organization": "TLG Acquisition One",
    "industry": "Shell Companies",
    "marketCap": "487.00M"
  },
  {
    "ticker": "TLGT",
    "organization": "Teligent",
    "industry": "Pharmaceuticals",
    "marketCap": "33.76M"
  },
  {
    "ticker": "TLIS",
    "organization": "Talis Biomedical",
    "industry": "Medical Devices",
    "marketCap": "160.57M"
  },
  {
    "ticker": "TLK",
    "organization": "Telkom Indonesia",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "25.59B"
  },
  {
    "ticker": "TLMD",
    "organization": "SOC Telemed",
    "industry": "Medical Care Facilities",
    "marketCap": "221.75M"
  },
  {
    "ticker": "TLRY",
    "organization": "Tilray",
    "industry": "Pharmaceuticals",
    "marketCap": "5.13B"
  },
  {
    "ticker": "TLS",
    "organization": "Telos",
    "industry": "Software",
    "marketCap": "1.91B"
  },
  {
    "ticker": "TLSA",
    "organization": "Tiziana Life Sciences",
    "industry": "Biotechnology",
    "marketCap": "139.15M"
  },
  {
    "ticker": "TLYS",
    "organization": "Tilly's",
    "industry": "Specialty Retail",
    "marketCap": "433.71M"
  },
  {
    "ticker": "TM",
    "organization": "Toyota Motor",
    "industry": "Automobiles",
    "marketCap": "290.00B"
  },
  {
    "ticker": "TMAC",
    "organization": "Music Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.31M"
  },
  {
    "ticker": "TMBR",
    "organization": "Timber Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "32.55M"
  },
  {
    "ticker": "TMC",
    "organization": "TMC the metals company",
    "industry": "Other Industrial Metals & Mining",
    "marketCap": "1.17B"
  },
  {
    "ticker": "TMCI",
    "organization": "Treace Medical Concepts",
    "industry": "Medical Devices",
    "marketCap": "1.38B"
  },
  {
    "ticker": "TMDI",
    "organization": "Titan Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "171.94M"
  },
  {
    "ticker": "TMDX",
    "organization": "TransMedics Group",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "904.48M"
  },
  {
    "ticker": "TME",
    "organization": "Tencent Music Entertainment",
    "industry": "Entertainment",
    "marketCap": "12.07B"
  },
  {
    "ticker": "TMHC",
    "organization": "Taylor Morrison Home",
    "industry": "Household Durables",
    "marketCap": "3.25B"
  },
  {
    "ticker": "TMKR",
    "organization": "Tastemaker Acquisition",
    "industry": "Shell Companies",
    "marketCap": "340.17M"
  },
  {
    "ticker": "TMO",
    "organization": "Thermo Fisher Scientific",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "226.09B"
  },
  {
    "ticker": "TMP",
    "organization": "Tompkins Financial",
    "industry": "Banks",
    "marketCap": "1.21B"
  },
  {
    "ticker": "TMPM",
    "organization": "Turmeric Acquisition",
    "industry": "Shell Companies",
    "marketCap": "123.69M"
  },
  {
    "ticker": "TMQ",
    "organization": "Trilogy Metals",
    "industry": "Metals & Mining",
    "marketCap": "261.45M"
  },
  {
    "ticker": "TMST",
    "organization": "TimkenSteel",
    "industry": "Metals & Mining",
    "marketCap": "620.16M"
  },
  {
    "ticker": "TMTS",
    "organization": "Spartacus Acquisition",
    "industry": "Shell Companies",
    "marketCap": "252.78M"
  },
  {
    "ticker": "TMUS",
    "organization": "T-Mobile US",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "158.19B"
  },
  {
    "ticker": "TMX",
    "organization": "Terminix Global Holdings",
    "industry": "Personal Services",
    "marketCap": "5.23B"
  },
  {
    "ticker": "TNC",
    "organization": "Tennant Company",
    "industry": "Machinery",
    "marketCap": "1.41B"
  },
  {
    "ticker": "TNDM",
    "organization": "Tandem Diabetes Care",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "7.64B"
  },
  {
    "ticker": "TNET",
    "organization": "TriNet Group",
    "industry": "Professional Services",
    "marketCap": "6.25B"
  },
  {
    "ticker": "TNGX",
    "organization": "Tango Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.16B"
  },
  {
    "ticker": "TNK",
    "organization": "Teekay Tankers",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TNL",
    "organization": "Travel+Leisure",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "TNP",
    "organization": "Tsakos Energy Navigation",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TNT",
    "organization": "Peak Fintech Group",
    "industry": "Information Technology Services",
    "marketCap": "607.26M"
  },
  {
    "ticker": "TNXP",
    "organization": "Tonix Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "210.44M"
  },
  {
    "ticker": "TNYA",
    "organization": "Tenaya Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "864.75M"
  },
  {
    "ticker": "TOL",
    "organization": "Toll Brothers",
    "industry": "Household Durables",
    "marketCap": "6.73B"
  },
  {
    "ticker": "TOMZ",
    "organization": "TOMI Environmental Solutions",
    "industry": "Commercial Services & Supplies",
    "marketCap": "22.86M"
  },
  {
    "ticker": "TOPS",
    "organization": "Top Ships",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TOST",
    "organization": "Toast",
    "industry": "Software-Infrastructure",
    "marketCap": "26.75B"
  },
  {
    "ticker": "TOUR",
    "organization": "Tuniu Corporation",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "TOWN",
    "organization": "TowneBank",
    "industry": "Banks",
    "marketCap": "2.29B"
  },
  {
    "ticker": "TPB",
    "organization": "Turning Point Brands",
    "industry": "Tobacco",
    "marketCap": "918.01M"
  },
  {
    "ticker": "TPC",
    "organization": "Tutor Perini",
    "industry": "Construction & Engineering",
    "marketCap": "662.92M"
  },
  {
    "ticker": "TPGS",
    "organization": "TPG Pace Solutions",
    "industry": "Shell Companies",
    "marketCap": "342.04M"
  },
  {
    "ticker": "TPGY",
    "organization": "TPG Pace Beneficial Finance",
    "industry": "Shell Companies",
    "marketCap": "463.75M"
  },
  {
    "ticker": "TPH",
    "organization": "TRI Pointe Group",
    "industry": "Household Durables",
    "marketCap": "2.33B"
  },
  {
    "ticker": "TPHS",
    "organization": "Trinity Place Holdings",
    "industry": "Real Estate Management & Development",
    "marketCap": "63.96M"
  },
  {
    "ticker": "TPIC",
    "organization": "TPI Composites",
    "industry": "Electrical Equipment",
    "marketCap": "1.27B"
  },
  {
    "ticker": "TPL",
    "organization": "Texas Pacific Land Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TPR",
    "organization": "Tapestry",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "TPST",
    "organization": "Tempest Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "101.94M"
  },
  {
    "ticker": "TPTX",
    "organization": "Turning Point Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "3.33B"
  },
  {
    "ticker": "TPVG",
    "organization": "TriplePoint Venture Growth BDC",
    "industry": "Capital Markets",
    "marketCap": "499.22M"
  },
  {
    "ticker": "TPX",
    "organization": "Tempur Sealy International",
    "industry": "Household Durables",
    "marketCap": "9.14B"
  },
  {
    "ticker": "TR",
    "organization": "Tootsie Roll Industries",
    "industry": "Food Products",
    "marketCap": "2.07B"
  },
  {
    "ticker": "TRC",
    "organization": "Tejon Ranch",
    "industry": "Real Estate Management & Development",
    "marketCap": "473.02M"
  },
  {
    "ticker": "TRCA",
    "organization": "Twin Ridge Capital Acquisition",
    "industry": "Shell Companies",
    "marketCap": "58.50M"
  },
  {
    "ticker": "TREB",
    "organization": "Trebia Acquisition",
    "industry": "Shell Companies",
    "marketCap": "641.70M"
  },
  {
    "ticker": "TREC",
    "organization": "Trecora Resources",
    "industry": "Chemicals",
    "marketCap": "204.06M"
  },
  {
    "ticker": "TREE",
    "organization": "LendingTree",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "1.83B"
  },
  {
    "ticker": "TREX",
    "organization": "Trex Company",
    "industry": "Building Products",
    "marketCap": "11.63B"
  },
  {
    "ticker": "TRGP",
    "organization": "Targa Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TRHC",
    "organization": "Tabula Rasa HealthCare",
    "industry": "Health Care Technology",
    "marketCap": "666.86M"
  },
  {
    "ticker": "TRI",
    "organization": "Thomson Reuters",
    "industry": "Professional Services",
    "marketCap": "54.66B"
  },
  {
    "ticker": "TRIB",
    "organization": "Trinity Biotech",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "44.31M"
  },
  {
    "ticker": "TRIL",
    "organization": "Trillium Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.85B"
  },
  {
    "ticker": "TRIN",
    "organization": "Trinity Capital",
    "industry": "Asset Management",
    "marketCap": "427.26M"
  },
  {
    "ticker": "TRIP",
    "organization": "TripAdvisor",
    "industry": "Interactive Media & Services",
    "marketCap": "5.07B"
  },
  {
    "ticker": "TRIT",
    "organization": "Triterras Fintech",
    "industry": "Information Technology Services",
    "marketCap": "485.03M"
  },
  {
    "ticker": "TRKA",
    "organization": "Troika Media Group",
    "industry": "Advertising Agencies",
    "marketCap": "19.94M"
  },
  {
    "ticker": "TRMB",
    "organization": "Trimble",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "TRMD",
    "organization": "Torm PLC",
    "industry": "Oil & Gas Midstream",
    "marketCap": "640.88M"
  },
  {
    "ticker": "TRMK",
    "organization": "Trustmark",
    "industry": "Banks",
    "marketCap": "2.05B"
  },
  {
    "ticker": "TRMR",
    "organization": "Tremor International",
    "industry": "Advertising Agencies",
    "marketCap": "1.45B"
  },
  {
    "ticker": "TRN",
    "organization": "Trinity Industries",
    "industry": "Machinery",
    "marketCap": "2.77B"
  },
  {
    "ticker": "TRNO",
    "organization": "Terreno Realty",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "4.48B"
  },
  {
    "ticker": "TRNS",
    "organization": "Transcat",
    "industry": "Trading Companies & Distributors",
    "marketCap": "491.56M"
  },
  {
    "ticker": "TRON",
    "organization": "Corner Growth Acquisition 2",
    "industry": "Shell Companies",
    "marketCap": "215.47M"
  },
  {
    "ticker": "TROW",
    "organization": "T. Rowe Price Group",
    "industry": "Capital Markets",
    "marketCap": "45.06B"
  },
  {
    "ticker": "TROX",
    "organization": "Tronox Holdings",
    "industry": "Chemicals",
    "marketCap": "3.81B"
  },
  {
    "ticker": "TRP",
    "organization": "TC Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TRQ",
    "organization": "Turquoise Hill Resources",
    "industry": "Metals & Mining",
    "marketCap": "2.95B"
  },
  {
    "ticker": "TRS",
    "organization": "TriMas Corporation",
    "industry": "Machinery",
    "marketCap": "1.40B"
  },
  {
    "ticker": "TRST",
    "organization": "TrustCo Bank Corp NY",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "629.19M"
  },
  {
    "ticker": "TRT",
    "organization": "Trio-Tech International",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "17.49M"
  },
  {
    "ticker": "TRTL",
    "organization": "TortoiseEcofin Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "364.50M"
  },
  {
    "ticker": "TRTN",
    "organization": "Triton International",
    "industry": "Trading Companies & Distributors",
    "marketCap": "3.60B"
  },
  {
    "ticker": "TRTX",
    "organization": "TPG RE Finance Trust",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "968.47M"
  },
  {
    "ticker": "TRU",
    "organization": "TransUnion",
    "industry": "Professional Services",
    "marketCap": "21.83B"
  },
  {
    "ticker": "TRUE",
    "organization": "TrueCar",
    "industry": "Interactive Media & Services",
    "marketCap": "402.00M"
  },
  {
    "ticker": "TRUP",
    "organization": "Trupanion",
    "industry": "Insurance",
    "marketCap": "3.21B"
  },
  {
    "ticker": "TRV",
    "organization": "Travelers",
    "industry": "Insurance",
    "marketCap": "38.14B"
  },
  {
    "ticker": "TRVG",
    "organization": "Trivago",
    "industry": "Interactive Media & Services",
    "marketCap": "907.08M"
  },
  {
    "ticker": "TRVI",
    "organization": "Trevi Therapeutics",
    "industry": "Pharmaceuticals",
    "marketCap": "27.86M"
  },
  {
    "ticker": "TRVN",
    "organization": "Trevena",
    "industry": "Biotechnology",
    "marketCap": "213.85M"
  },
  {
    "ticker": "TRX",
    "organization": "Tanzanian Gold",
    "industry": "Metals & Mining",
    "marketCap": "124.61M"
  },
  {
    "ticker": "TS",
    "organization": "Tenaris",
    "industry": "Energy Equipment & Services",
    "marketCap": "12.64B"
  },
  {
    "ticker": "TSBK",
    "organization": "Timberland Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "246.86M"
  },
  {
    "ticker": "TSC",
    "organization": "TriState Capital Holdings",
    "industry": "Banks",
    "marketCap": "709.55M"
  },
  {
    "ticker": "TSCO",
    "organization": "Tractor Supply",
    "industry": "Specialty Retail",
    "marketCap": "23.00B"
  },
  {
    "ticker": "TSE",
    "organization": "Trinseo",
    "industry": "Chemicals",
    "marketCap": "2.22B"
  },
  {
    "ticker": "TSEM",
    "organization": "Tower Semiconductor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "3.30B"
  },
  {
    "ticker": "TSHA",
    "organization": "Taysha Gene Therapies",
    "industry": "Biotechnology",
    "marketCap": "737.11M"
  },
  {
    "ticker": "TSIB",
    "organization": "Tishman Speyer Innovation II",
    "industry": "Shell Companies",
    "marketCap": "367.50M"
  },
  {
    "ticker": "TSLA",
    "organization": "Tesla",
    "industry": "Automobiles",
    "marketCap": "769.69B"
  },
  {
    "ticker": "TSLX",
    "organization": "TPG Specialty Lending",
    "industry": "Capital Markets",
    "marketCap": "1.64B"
  },
  {
    "ticker": "TSM",
    "organization": "Taiwan Semiconductor",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "578.56B"
  },
  {
    "ticker": "TSN",
    "organization": "Tyson Foods",
    "industry": "Food Products",
    "marketCap": "28.67B"
  },
  {
    "ticker": "TSP",
    "organization": "TuSimple Holdings",
    "industry": "Trucking",
    "marketCap": "7.40B"
  },
  {
    "ticker": "TSPQ",
    "organization": "TCW Special Purpose Acquisition",
    "industry": "Shell Companies",
    "marketCap": "566.58M"
  },
  {
    "ticker": "TSQ",
    "organization": "Townsquare Media",
    "industry": "Media",
    "marketCap": "211.75M"
  },
  {
    "ticker": "TSRI",
    "organization": "TSR",
    "industry": " Inc.",
    "marketCap": "IT Services"
  },
  {
    "ticker": "TT",
    "organization": "Trane Technologies",
    "industry": "Building Products",
    "marketCap": "41.52B"
  },
  {
    "ticker": "TTC",
    "organization": "Toro Company",
    "industry": "Machinery",
    "marketCap": "10.37B"
  },
  {
    "ticker": "TTCF",
    "organization": "Tattooed Chef",
    "industry": "Packaged Foods",
    "marketCap": "1.54B"
  },
  {
    "ticker": "TTD",
    "organization": "The Trade Desk",
    "industry": "Software",
    "marketCap": "33.71B"
  },
  {
    "ticker": "TTE",
    "organization": "TotalEnergies",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "TTEC",
    "organization": "TTEC Holdings",
    "industry": "IT Services",
    "marketCap": "4.48B"
  },
  {
    "ticker": "TTEK",
    "organization": "Tetra Tech",
    "industry": "Commercial Services & Supplies",
    "marketCap": "8.21B"
  },
  {
    "ticker": "TTGT",
    "organization": "TechTarget",
    "industry": "Media",
    "marketCap": "2.31B"
  },
  {
    "ticker": "TTI",
    "organization": "TETRA Technologies",
    "industry": "Energy Equipment & Services",
    "marketCap": "393.74M"
  },
  {
    "ticker": "TTM",
    "organization": "Tata Motors",
    "industry": "Automobiles",
    "marketCap": "17.44B"
  },
  {
    "ticker": "TTMI",
    "organization": "TTM Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "TTNP",
    "organization": "Titan Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "18.30M"
  },
  {
    "ticker": "TTOO",
    "organization": "T2 Biosystems",
    "industry": "Biotechnology",
    "marketCap": "155.55M"
  },
  {
    "ticker": "TTSH",
    "organization": "Tile Shop Holdings",
    "industry": "Specialty Retail",
    "marketCap": "415.74M"
  },
  {
    "ticker": "TTWO",
    "organization": "Take-Two Interactive",
    "industry": "Entertainment",
    "marketCap": "18.47B"
  },
  {
    "ticker": "TU",
    "organization": "TELUS Corporation",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "29.89B"
  },
  {
    "ticker": "TUEM",
    "organization": "Tuesday Morning",
    "industry": "Specialty Retail",
    "marketCap": "229.45M"
  },
  {
    "ticker": "TUFN",
    "organization": "Tufin Software Technologies",
    "industry": "Software",
    "marketCap": "364.33M"
  },
  {
    "ticker": "TUGC",
    "organization": "TradeUP Global",
    "industry": "Shell Companies",
    "marketCap": "51.11M"
  },
  {
    "ticker": "TUP",
    "organization": "Tupperware Brands",
    "industry": "Household Durables",
    "marketCap": "1.07B"
  },
  {
    "ticker": "TURN",
    "organization": "180 Degree Capital",
    "industry": "Capital Markets",
    "marketCap": "75.11M"
  },
  {
    "ticker": "TUSK",
    "organization": "Mammoth Energy Services",
    "industry": "Energy Equipment & Services",
    "marketCap": "141.91M"
  },
  {
    "ticker": "TUYA",
    "organization": "Tuya",
    "industry": "Software-Infrastructure",
    "marketCap": "4.84B"
  },
  {
    "ticker": "TV",
    "organization": "Grupo Televisa",
    "industry": "Media",
    "marketCap": "6.26B"
  },
  {
    "ticker": "TVAC",
    "organization": "Thayer Ventures Acquisition",
    "industry": "Shell Companies",
    "marketCap": "218.00M"
  },
  {
    "ticker": "TVTX",
    "organization": "Travere Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.50B"
  },
  {
    "ticker": "TVTY",
    "organization": "Tivity Health",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.17B"
  },
  {
    "ticker": "TW",
    "organization": "Tradeweb Markets",
    "industry": "Capital Markets",
    "marketCap": "18.92B"
  },
  {
    "ticker": "TWCB",
    "organization": "Bilander Acquisition",
    "industry": "Shell Companies",
    "marketCap": "193.61M"
  },
  {
    "ticker": "TWI",
    "organization": "Titan International",
    "industry": "Machinery",
    "marketCap": "450.77M"
  },
  {
    "ticker": "TWIN",
    "organization": "Twin Disc",
    "industry": "Machinery",
    "marketCap": "145.56M"
  },
  {
    "ticker": "TWKS",
    "organization": "Thoughtworks Holding",
    "industry": "Information Technology Services",
    "marketCap": "8.57B"
  },
  {
    "ticker": "TWLO",
    "organization": "Twilio",
    "industry": "IT Services",
    "marketCap": "57.46B"
  },
  {
    "ticker": "TWLV",
    "organization": "Twelve Seas Investment II",
    "industry": "Shell Companies",
    "marketCap": "77.88M"
  },
  {
    "ticker": "TWND",
    "organization": "Tailwind Acquisition",
    "industry": "Shell Companies",
    "marketCap": "409.00M"
  },
  {
    "ticker": "TWNI",
    "organization": "Tailwind International Acquisition",
    "industry": "Shell Companies",
    "marketCap": "418.31M"
  },
  {
    "ticker": "TWNK",
    "organization": "Hostess Brands",
    "industry": "Food Products",
    "marketCap": "2.28B"
  },
  {
    "ticker": "TWNT",
    "organization": "Tailwind Two Acquisition",
    "industry": "Shell Companies",
    "marketCap": "418.34M"
  },
  {
    "ticker": "TWO",
    "organization": "Two Harbors Investment",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "2.02B"
  },
  {
    "ticker": "TWOA",
    "organization": "two",
    "industry": "Shell Companies",
    "marketCap": "267.40M"
  },
  {
    "ticker": "TWOU",
    "organization": "2U",
    "industry": " Inc",
    "marketCap": "Software"
  },
  {
    "ticker": "TWST",
    "organization": "Twist Bioscience",
    "industry": "Biotechnology",
    "marketCap": "5.20B"
  },
  {
    "ticker": "TWTR",
    "organization": "Twitter",
    "industry": "Interactive Media & Services",
    "marketCap": "48.19B"
  },
  {
    "ticker": "TX",
    "organization": "Ternium",
    "industry": "Metals & Mining",
    "marketCap": "8.28B"
  },
  {
    "ticker": "TXG",
    "organization": "10X Genomics",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "15.94B"
  },
  {
    "ticker": "TXMD",
    "organization": "TherapeuticsMD",
    "industry": "Pharmaceuticals",
    "marketCap": "312.40M"
  },
  {
    "ticker": "TXN",
    "organization": "Texas Instruments",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "176.89B"
  },
  {
    "ticker": "TXRH",
    "organization": "Texas Roadhouse",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "TXT",
    "organization": "Textron",
    "industry": "Aerospace & Defense",
    "marketCap": "15.65B"
  },
  {
    "ticker": "TYG",
    "organization": "Tortoise Energy Infrastructure",
    "industry": "Asset Management",
    "marketCap": "233.20M"
  },
  {
    "ticker": "TYHT",
    "organization": "Shineco",
    "industry": "Personal Products",
    "marketCap": "82.99M"
  },
  {
    "ticker": "TYL",
    "organization": "Tyler Technologies",
    "industry": "Software",
    "marketCap": "18.96B"
  },
  {
    "ticker": "TYME",
    "organization": "Tyme Technologies",
    "industry": "Biotechnology",
    "marketCap": "174.79M"
  },
  {
    "ticker": "TYRA",
    "organization": "Tyra Biosciences",
    "industry": "Biotechnology",
    "marketCap": "702.51M"
  },
  {
    "ticker": "TZOO",
    "organization": "Travelzoo",
    "industry": "Interactive Media & Services",
    "marketCap": "142.67M"
  },
  {
    "ticker": "TZPS",
    "organization": "TZP Strategies Acquisition",
    "industry": "Shell Companies",
    "marketCap": "351.47M"
  },
  {
    "ticker": "U",
    "organization": "Unity Software",
    "industry": "Software",
    "marketCap": "35.66B"
  },
  {
    "ticker": "UA",
    "organization": "Under Armour",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "UAA",
    "organization": "Under Armour",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "UAL",
    "organization": "United Airlines",
    "industry": "Airlines",
    "marketCap": "16.47B"
  },
  {
    "ticker": "UAMY",
    "organization": "United States Antimony",
    "industry": "Metals & Mining",
    "marketCap": "92.76M"
  },
  {
    "ticker": "UAN",
    "organization": "CVR Partners",
    "industry": "Chemicals",
    "marketCap": "787.43M"
  },
  {
    "ticker": "UAVS",
    "organization": "AgEagle Aerial Systems",
    "industry": "Machinery",
    "marketCap": "226.19M"
  },
  {
    "ticker": "UBA",
    "organization": "Urstadt Biddle Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "759.70M"
  },
  {
    "ticker": "UBCP",
    "organization": "United Bancorp",
    "industry": "Banks",
    "marketCap": "84.86M"
  },
  {
    "ticker": "UBER",
    "organization": "Uber Technologies",
    "industry": "Road & Rail",
    "marketCap": "88.66B"
  },
  {
    "ticker": "UBFO",
    "organization": "United Security Bancshares",
    "industry": "Banks",
    "marketCap": "135.23M"
  },
  {
    "ticker": "UBOH",
    "organization": "United Bancshares",
    "industry": "Banks",
    "marketCap": "98.21M"
  },
  {
    "ticker": "UBP",
    "organization": "Urstadt Biddle Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "745.39M"
  },
  {
    "ticker": "UBS",
    "organization": "UBS Group",
    "industry": "Capital Markets",
    "marketCap": "55.77B"
  },
  {
    "ticker": "UBSI",
    "organization": "United Bankshares",
    "industry": "Banks",
    "marketCap": "4.73B"
  },
  {
    "ticker": "UBX",
    "organization": "Unity Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "165.31M"
  },
  {
    "ticker": "UCBI",
    "organization": "United Community Banks",
    "industry": "Banks",
    "marketCap": "2.88B"
  },
  {
    "ticker": "UCL",
    "organization": "uCloudlink Group",
    "industry": "Telecom Services",
    "marketCap": "131.43M"
  },
  {
    "ticker": "UCTT",
    "organization": "Ultra Clean Holdings",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.92B"
  },
  {
    "ticker": "UDR",
    "organization": "UDR",
    "industry": " Inc.",
    "marketCap": "Equity Real Estate Investment Trusts..."
  },
  {
    "ticker": "UE",
    "organization": "Urban Edge Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.24B"
  },
  {
    "ticker": "UEC",
    "organization": "Uranium Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "UEIC",
    "organization": "Universal Electronics",
    "industry": "Household Durables",
    "marketCap": "671.62M"
  },
  {
    "ticker": "UEPS",
    "organization": "Net 1 UEPS Technologies",
    "industry": "IT Services",
    "marketCap": "271.87M"
  },
  {
    "ticker": "UFAB",
    "organization": "Unique Fabricating",
    "industry": "Auto Components",
    "marketCap": "38.37M"
  },
  {
    "ticker": "UFCS",
    "organization": "United Fire Group",
    "industry": "Insurance",
    "marketCap": "587.74M"
  },
  {
    "ticker": "UFI",
    "organization": "Unifi",
    "industry": " Inc.",
    "marketCap": "Textiles"
  },
  {
    "ticker": "UFPI",
    "organization": "Universal Forest Products",
    "industry": "Building Products",
    "marketCap": "4.24B"
  },
  {
    "ticker": "UFPT",
    "organization": "UFP Technologies",
    "industry": "Containers & Packaging",
    "marketCap": "467.02M"
  },
  {
    "ticker": "UFS",
    "organization": "Domtar",
    "industry": "Paper & Forest Products",
    "marketCap": "2.77B"
  },
  {
    "ticker": "UG",
    "organization": "United-Guardian",
    "industry": "Personal Products",
    "marketCap": "65.15M"
  },
  {
    "ticker": "UGI",
    "organization": "UGI Corporation",
    "industry": "Gas Utilities",
    "marketCap": "9.13B"
  },
  {
    "ticker": "UGP",
    "organization": "Ultrapar Participacoes",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "UGRO",
    "organization": "Urban-gro",
    "industry": "Farm & Heavy Construction Machinery",
    "marketCap": "139.40M"
  },
  {
    "ticker": "UHAL",
    "organization": "Amerco",
    "industry": "Road & Rail",
    "marketCap": "12.94B"
  },
  {
    "ticker": "UHS",
    "organization": "Universal Health Services",
    "industry": "Health Care Providers & Services",
    "marketCap": "11.46B"
  },
  {
    "ticker": "UHT",
    "organization": "Universal Health Realty Income Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "785.52M"
  },
  {
    "ticker": "UI",
    "organization": "Ubiquiti",
    "industry": "Communications Equipment",
    "marketCap": "18.93B"
  },
  {
    "ticker": "UIHC",
    "organization": "United Insurance Holdings",
    "industry": "Insurance",
    "marketCap": "156.62M"
  },
  {
    "ticker": "UIS",
    "organization": "Unisys",
    "industry": "IT Services",
    "marketCap": "1.74B"
  },
  {
    "ticker": "UK",
    "organization": "Ucommune International",
    "industry": "Real Estate Services",
    "marketCap": "76.00M"
  },
  {
    "ticker": "UL",
    "organization": "Unilever PLC",
    "industry": "Personal Products",
    "marketCap": "140.07B"
  },
  {
    "ticker": "ULBI",
    "organization": "Ultralife",
    "industry": "Electrical Equipment",
    "marketCap": "114.30M"
  },
  {
    "ticker": "ULCC",
    "organization": "Frontier Group Holdings",
    "industry": "Airlines",
    "marketCap": "3.59B"
  },
  {
    "ticker": "ULH",
    "organization": "Universal Logistics Holdings",
    "industry": "Road & Rail",
    "marketCap": "545.66M"
  },
  {
    "ticker": "ULTA",
    "organization": "Ulta Beauty",
    "industry": "Specialty Retail",
    "marketCap": "20.04B"
  },
  {
    "ticker": "UMBF",
    "organization": "UMB Financial",
    "industry": "Banks",
    "marketCap": "4.68B"
  },
  {
    "ticker": "UMC",
    "organization": "United Microelectronics",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "28.07B"
  },
  {
    "ticker": "UMH",
    "organization": "UMH Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "1.09B"
  },
  {
    "ticker": "UMPQ",
    "organization": "Umpqua Holdings",
    "industry": "Banks",
    "marketCap": "4.53B"
  },
  {
    "ticker": "UNAM",
    "organization": "Unico American",
    "industry": "Insurance",
    "marketCap": "17.98M"
  },
  {
    "ticker": "UNB",
    "organization": "Union Bankshares",
    "industry": "Banks",
    "marketCap": "139.08M"
  },
  {
    "ticker": "UNCY",
    "organization": "Unicycive Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "38.30M"
  },
  {
    "ticker": "UNF",
    "organization": "UniFirst",
    "industry": "Commercial Services & Supplies",
    "marketCap": "4.03B"
  },
  {
    "ticker": "UNFI",
    "organization": "United Natural Foods",
    "industry": "Food & Staples Retailing",
    "marketCap": "2.71B"
  },
  {
    "ticker": "UNH",
    "organization": "UnitedHealth",
    "industry": "Health Care Providers & Services",
    "marketCap": "368.44B"
  },
  {
    "ticker": "UNIT",
    "organization": "Uniti Group",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.87B"
  },
  {
    "ticker": "UNM",
    "organization": "Unum Group",
    "industry": "Insurance",
    "marketCap": "5.28B"
  },
  {
    "ticker": "UNP",
    "organization": "Union Pacific",
    "industry": "Road & Rail",
    "marketCap": "128.94B"
  },
  {
    "ticker": "UNTY",
    "organization": "Unity Bancorp",
    "industry": "Banks",
    "marketCap": "248.35M"
  },
  {
    "ticker": "UNVR",
    "organization": "Univar Solutions",
    "industry": "Trading Companies & Distributors",
    "marketCap": "4.19B"
  },
  {
    "ticker": "UONE",
    "organization": "Urban One",
    "industry": "Media",
    "marketCap": "375.47M"
  },
  {
    "ticker": "UONEK",
    "organization": "Urban One",
    "industry": "Media",
    "marketCap": "372.94M"
  },
  {
    "ticker": "UP",
    "organization": "Wheels Up",
    "industry": "Airports & Air Services",
    "marketCap": "1.79B"
  },
  {
    "ticker": "UPC",
    "organization": "Universe Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "52.20M"
  },
  {
    "ticker": "UPH",
    "organization": "UpHealth",
    "industry": "Health Information Services",
    "marketCap": "369.28M"
  },
  {
    "ticker": "UPLD",
    "organization": "Upland Software",
    "industry": "Software",
    "marketCap": "1.03B"
  },
  {
    "ticker": "UPS",
    "organization": "United Parcel Service",
    "industry": "Air Freight & Logistics",
    "marketCap": "158.09B"
  },
  {
    "ticker": "UPST",
    "organization": "Upstart Holdings",
    "industry": "Consumer Finance",
    "marketCap": "22.90B"
  },
  {
    "ticker": "UPTD",
    "organization": "TradeUP Acquisition",
    "industry": "Shell Companies",
    "marketCap": "52.42M"
  },
  {
    "ticker": "UPWK",
    "organization": "Upwork",
    "industry": "Professional Services",
    "marketCap": "6.06B"
  },
  {
    "ticker": "URBN",
    "organization": "Urban Outfitters",
    "industry": "Specialty Retail",
    "marketCap": "3.01B"
  },
  {
    "ticker": "URG",
    "organization": "Ur-Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "URGN",
    "organization": "UroGen Pharma",
    "industry": "Biotechnology",
    "marketCap": "367.42M"
  },
  {
    "ticker": "URI",
    "organization": "United Rentals",
    "industry": "Trading Companies & Distributors",
    "marketCap": "25.77B"
  },
  {
    "ticker": "UROY",
    "organization": "Uranium Royalty",
    "industry": "Uranium",
    "marketCap": "313.22M"
  },
  {
    "ticker": "USAC",
    "organization": "USA Compression Partners",
    "industry": "Energy Equipment & Services",
    "marketCap": "1.60B"
  },
  {
    "ticker": "USAK",
    "organization": "USA Truck",
    "industry": "Road & Rail",
    "marketCap": "137.06M"
  },
  {
    "ticker": "USAP",
    "organization": "Universal Stainless & Alloy Products",
    "industry": "Metals & Mining",
    "marketCap": "92.30M"
  },
  {
    "ticker": "USAS",
    "organization": "Americas Gold & Silver",
    "industry": "Metals & Mining",
    "marketCap": "110.46M"
  },
  {
    "ticker": "USAU",
    "organization": "U.S. Gold Corp",
    "industry": "Metals & Mining",
    "marketCap": "73.18M"
  },
  {
    "ticker": "USB",
    "organization": "U.S. Bancorp",
    "industry": "Banks",
    "marketCap": "90.09B"
  },
  {
    "ticker": "USCB",
    "organization": "U.S. Century Bank",
    "industry": "Banks-Regional",
    "marketCap": "230.84M"
  },
  {
    "ticker": "USDP",
    "organization": "USD Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "USEG",
    "organization": "U.S. Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "USFD",
    "organization": "US Foods Holding",
    "industry": "Food & Staples Retailing",
    "marketCap": "8.06B"
  },
  {
    "ticker": "USIO",
    "organization": "Usio",
    "industry": " Inc.",
    "marketCap": "IT Services"
  },
  {
    "ticker": "USLM",
    "organization": "United States Lime & Minerals",
    "industry": "Construction Materials",
    "marketCap": "679.02M"
  },
  {
    "ticker": "USM",
    "organization": "United States Cellular",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "2.79B"
  },
  {
    "ticker": "USNA",
    "organization": "USANA Health Sciences",
    "industry": "Personal Products",
    "marketCap": "1.88B"
  },
  {
    "ticker": "USPH",
    "organization": "U.S. Physical Therapy",
    "industry": "Health Care Providers & Services",
    "marketCap": "1.43B"
  },
  {
    "ticker": "USWS",
    "organization": "U.S. Well Services",
    "industry": "Oil & Gas Midstream",
    "marketCap": "435.19M"
  },
  {
    "ticker": "USX",
    "organization": "U.S. Xpress Enterprises",
    "industry": "Road & Rail",
    "marketCap": "439.49M"
  },
  {
    "ticker": "UTHR",
    "organization": "United Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "8.35B"
  },
  {
    "ticker": "UTI",
    "organization": "Universal Technical Institute",
    "industry": "Diversified Consumer Services",
    "marketCap": "221.89M"
  },
  {
    "ticker": "UTL",
    "organization": "Unitil",
    "industry": "Multi-Utilities",
    "marketCap": "694.43M"
  },
  {
    "ticker": "UTMD",
    "organization": "Utah Medical Products",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "353.10M"
  },
  {
    "ticker": "UTME",
    "organization": "UTime",
    "industry": "Consumer Electronics",
    "marketCap": "42.66M"
  },
  {
    "ticker": "UTSI",
    "organization": "UTStarcom Holdings",
    "industry": "Communications Equipment",
    "marketCap": "41.27M"
  },
  {
    "ticker": "UTZ",
    "organization": "Utz Brands",
    "industry": "Food Products",
    "marketCap": "2.24B"
  },
  {
    "ticker": "UUU",
    "organization": "Universal Security Instruments",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "UUUU",
    "organization": "Energy Fuels",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "UVE",
    "organization": "Universal Insurance Holdings",
    "industry": "Insurance",
    "marketCap": "403.69M"
  },
  {
    "ticker": "UVSP",
    "organization": "Univest Financial",
    "industry": "Banks",
    "marketCap": "818.70M"
  },
  {
    "ticker": "UVV",
    "organization": "Universal Corporation",
    "industry": "Tobacco",
    "marketCap": "1.20B"
  },
  {
    "ticker": "UWMC",
    "organization": "UWM Holdings",
    "industry": "Mortgage Finance",
    "marketCap": "10.91B"
  },
  {
    "ticker": "UXIN",
    "organization": "Uxin Limited",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "1.10B"
  },
  {
    "ticker": "V",
    "organization": "Visa",
    "industry": " Inc",
    "marketCap": "IT Services"
  },
  {
    "ticker": "VABK",
    "organization": "Virginia National Bankshares",
    "industry": "Banks",
    "marketCap": "187.64M"
  },
  {
    "ticker": "VAC",
    "organization": "Marriott Vacations Worldwide",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "VACC",
    "organization": "Vaccitech",
    "industry": "Biotechnology",
    "marketCap": "532.43M"
  },
  {
    "ticker": "VAL",
    "organization": "Valaris",
    "industry": "Oil & Gas Equipment & Services",
    "marketCap": "2.69B"
  },
  {
    "ticker": "VALE",
    "organization": "Vale S.A.",
    "industry": "Metals & Mining",
    "marketCap": "70.88B"
  },
  {
    "ticker": "VALN",
    "organization": "Valneva",
    "industry": "Biotechnology",
    "marketCap": "1.47B"
  },
  {
    "ticker": "VALU",
    "organization": "Value Line",
    "industry": "Capital Markets",
    "marketCap": "330.49M"
  },
  {
    "ticker": "VAPO",
    "organization": "Vapotherm",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "544.84M"
  },
  {
    "ticker": "VAQC",
    "organization": "Vector Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "559.74M"
  },
  {
    "ticker": "VATE",
    "organization": "INNOVATE",
    "industry": "Telecom Services",
    "marketCap": "319.06M"
  },
  {
    "ticker": "VBFC",
    "organization": "Village Bank & Trust Financial",
    "industry": "Banks",
    "marketCap": "72.52M"
  },
  {
    "ticker": "VBIV",
    "organization": "VBI Vaccines",
    "industry": "Biotechnology",
    "marketCap": "783.38M"
  },
  {
    "ticker": "VBLT",
    "organization": "Vascular Biogenics",
    "industry": "Biotechnology",
    "marketCap": "129.10M"
  },
  {
    "ticker": "VBNK",
    "organization": "VersaBank",
    "industry": "Commercial Banks",
    "marketCap": "233.63M"
  },
  {
    "ticker": "VBTX",
    "organization": "Veritex Holdings",
    "industry": "Banks",
    "marketCap": "1.98B"
  },
  {
    "ticker": "VC",
    "organization": "Visteon",
    "industry": "Auto Components",
    "marketCap": "2.69B"
  },
  {
    "ticker": "VCEL",
    "organization": "Vericel",
    "industry": "Biotechnology",
    "marketCap": "2.35B"
  },
  {
    "ticker": "VCKA",
    "organization": "Vickers Vantage I",
    "industry": "Shell Companies",
    "marketCap": "230.00M"
  },
  {
    "ticker": "VCNX",
    "organization": "Vaccinex",
    "industry": "Biotechnology",
    "marketCap": "64.07M"
  },
  {
    "ticker": "VCRA",
    "organization": "Vocera Communications",
    "industry": "Health Care Technology",
    "marketCap": "1.59B"
  },
  {
    "ticker": "VCTR",
    "organization": "Victory Capital Holdings",
    "industry": "Capital Markets",
    "marketCap": "2.38B"
  },
  {
    "ticker": "VCYT",
    "organization": "Veracyte",
    "industry": "Biotechnology",
    "marketCap": "3.29B"
  },
  {
    "ticker": "VEC",
    "organization": "Vectrus",
    "industry": "Aerospace & Defense",
    "marketCap": "608.16M"
  },
  {
    "ticker": "VECO",
    "organization": "Veeco Instruments",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.13B"
  },
  {
    "ticker": "VECT",
    "organization": "VectivBio Holding",
    "industry": "Biotechnology",
    "marketCap": "246.95M"
  },
  {
    "ticker": "VEDL",
    "organization": "Vedanta",
    "industry": "Metals & Mining",
    "marketCap": "14.56B"
  },
  {
    "ticker": "VEEE",
    "organization": "Twin Vee PowerCats",
    "industry": "Recreational Vehicles",
    "marketCap": "27.09M"
  },
  {
    "ticker": "VEEV",
    "organization": "Veeva Systems",
    "industry": "Health Care Technology",
    "marketCap": "43.84B"
  },
  {
    "ticker": "VEI",
    "organization": "Vine Energy",
    "industry": "Oil & Gas E&P",
    "marketCap": "1.26B"
  },
  {
    "ticker": "VEL",
    "organization": "Velocity Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "272.66M"
  },
  {
    "ticker": "VELO",
    "organization": "Velocity Acquisition",
    "industry": "Shell Companies",
    "marketCap": "283.47M"
  },
  {
    "ticker": "VENA",
    "organization": "Venus Acquisition",
    "industry": "Shell Companies",
    "marketCap": "60.73M"
  },
  {
    "ticker": "VEON",
    "organization": "VEON Ltd.",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "3.62B"
  },
  {
    "ticker": "VER",
    "organization": "VEREIT",
    "industry": " Inc",
    "marketCap": "Equity Real Estate Investment Trusts..."
  },
  {
    "ticker": "VERA",
    "organization": "Vera Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "386.83M"
  },
  {
    "ticker": "VERB",
    "organization": "Verb Technology Company",
    "industry": "Software",
    "marketCap": "131.90M"
  },
  {
    "ticker": "VERI",
    "organization": "Veritone",
    "industry": "Software",
    "marketCap": "795.32M"
  },
  {
    "ticker": "VERO",
    "organization": "Venus Concept",
    "industry": "Medical Devices",
    "marketCap": "131.03M"
  },
  {
    "ticker": "VERU",
    "organization": "Veru Inc.",
    "industry": "Personal Products",
    "marketCap": "671.57M"
  },
  {
    "ticker": "VERV",
    "organization": "Verve Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "2.34B"
  },
  {
    "ticker": "VERX",
    "organization": "Vertex",
    "industry": "Software-Application",
    "marketCap": "2.99B"
  },
  {
    "ticker": "VERY",
    "organization": "Vericity",
    "industry": "Insurance",
    "marketCap": "134.02M"
  },
  {
    "ticker": "VET",
    "organization": "Vermilion Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "VEV",
    "organization": "Vicinity Motor",
    "industry": "Auto Manufacturers",
    "marketCap": "168.80M"
  },
  {
    "ticker": "VFC",
    "organization": "VF Corporation",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "VFF",
    "organization": "Village Farms International",
    "industry": "Food Products",
    "marketCap": "714.46M"
  },
  {
    "ticker": "VG",
    "organization": "Vonage Holdings",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "4.10B"
  },
  {
    "ticker": "VGII",
    "organization": "Virgin Group Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "490.04M"
  },
  {
    "ticker": "VGR",
    "organization": "Vector Group",
    "industry": "Tobacco",
    "marketCap": "2.05B"
  },
  {
    "ticker": "VGZ",
    "organization": "Vista Gold",
    "industry": "Metals & Mining",
    "marketCap": "85.54M"
  },
  {
    "ticker": "VHAQ",
    "organization": "Viveon Health Acquisition",
    "industry": "Shell Companies",
    "marketCap": "251.31M"
  },
  {
    "ticker": "VHC",
    "organization": "VirnetX Holding",
    "industry": "Software",
    "marketCap": "278.88M"
  },
  {
    "ticker": "VHI",
    "organization": "Valhi",
    "industry": " Inc.",
    "marketCap": "Chemicals"
  },
  {
    "ticker": "VIA",
    "organization": "Via Renewables",
    "industry": "Utilities-Regulated Electric",
    "marketCap": "368.53M"
  },
  {
    "ticker": "VIAC",
    "organization": "ViacomCBS",
    "industry": "Media",
    "marketCap": "25.90B"
  },
  {
    "ticker": "VIACA",
    "organization": "ViacomCBS",
    "industry": "Media",
    "marketCap": "25.90B"
  },
  {
    "ticker": "VIAO",
    "organization": "VIA optronics AG",
    "industry": "Electronic Components",
    "marketCap": "173.53M"
  },
  {
    "ticker": "VIAV",
    "organization": "Viavi Solutions",
    "industry": "Communications Equipment",
    "marketCap": "3.63B"
  },
  {
    "ticker": "VICI",
    "organization": "VICI Properties",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "18.32B"
  },
  {
    "ticker": "VICR",
    "organization": "Vicor Corporation",
    "industry": "Electrical Equipment",
    "marketCap": "6.03B"
  },
  {
    "ticker": "VIEW",
    "organization": "View",
    "industry": "Building Products & Equipment",
    "marketCap": "1.24B"
  },
  {
    "ticker": "VIH",
    "organization": "VPC Impact Acquisition",
    "industry": "Shell Companies",
    "marketCap": "260.77M"
  },
  {
    "ticker": "VII",
    "organization": "7GC & Co. Holdings",
    "industry": "Shell Companies",
    "marketCap": "3.62M"
  },
  {
    "ticker": "VINC",
    "organization": "Vincerx Pharma",
    "industry": "Biotechnology",
    "marketCap": "290.15M"
  },
  {
    "ticker": "VINO",
    "organization": "Gaucho Group Holdings",
    "industry": "Real Estate-Diversified",
    "marketCap": "26.70M"
  },
  {
    "ticker": "VINP",
    "organization": "Vinci Partners Investments",
    "industry": "Asset Management",
    "marketCap": "766.93M"
  },
  {
    "ticker": "VIOT",
    "organization": "Viomi Technology",
    "industry": "Household Durables",
    "marketCap": "307.98M"
  },
  {
    "ticker": "VIPS",
    "organization": "Vipshop Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "7.38B"
  },
  {
    "ticker": "VIR",
    "organization": "Vir Biotechnology",
    "industry": "Biotechnology",
    "marketCap": "4.49B"
  },
  {
    "ticker": "VIRC",
    "organization": "Virco Manufacturing",
    "industry": "Commercial Services & Supplies",
    "marketCap": "56.67M"
  },
  {
    "ticker": "VIRI",
    "organization": "Virios Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "41.90M"
  },
  {
    "ticker": "VIRT",
    "organization": "Virtu Financial",
    "industry": "Capital Markets",
    "marketCap": "4.56B"
  },
  {
    "ticker": "VIRX",
    "organization": "Viracta Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "290.74M"
  },
  {
    "ticker": "VISL",
    "organization": "Vislink Technologies",
    "industry": "Communications Equipment",
    "marketCap": "87.36M"
  },
  {
    "ticker": "VIST",
    "organization": "Vista Oil & Gas",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "VITL",
    "organization": "Vital Farms",
    "industry": "Farm Products",
    "marketCap": "703.00M"
  },
  {
    "ticker": "VIV",
    "organization": "Telefonica Brasil",
    "industry": "Telecom Services",
    "marketCap": "13.33B"
  },
  {
    "ticker": "VIVE",
    "organization": "Viveve Medical",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "24.36M"
  },
  {
    "ticker": "VIVO",
    "organization": "Meridian Bioscience",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "846.70M"
  },
  {
    "ticker": "VJET",
    "organization": "Voxeljet AG",
    "industry": "Machinery",
    "marketCap": "62.89M"
  },
  {
    "ticker": "VKTX",
    "organization": "Viking Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "493.38M"
  },
  {
    "ticker": "VLAT",
    "organization": "Valor Latitude Acquisition",
    "industry": "Blank Checks / SPAC",
    "marketCap": "242.25M"
  },
  {
    "ticker": "VLD",
    "organization": "Velo3D",
    "industry": "Shell Companies",
    "marketCap": "424.78M"
  },
  {
    "ticker": "VLDR",
    "organization": "Velodyne Lidar",
    "industry": "Scientific & Technical Instruments",
    "marketCap": "1.16B"
  },
  {
    "ticker": "VLGEA",
    "organization": "Village Super Market",
    "industry": "Food & Staples Retailing",
    "marketCap": "317.84M"
  },
  {
    "ticker": "VLN",
    "organization": "Valens Semiconductor",
    "industry": "Shell Companies",
    "marketCap": "101.49M"
  },
  {
    "ticker": "VLO",
    "organization": "Valero Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "VLON",
    "organization": "Vallon Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "48.03M"
  },
  {
    "ticker": "VLRS",
    "organization": "Controladora Vuela Compania de Aviacion",
    "industry": "Airlines",
    "marketCap": "2.58B"
  },
  {
    "ticker": "VLTA",
    "organization": "Volta",
    "industry": "Specialty Retail",
    "marketCap": "1.53B"
  },
  {
    "ticker": "VLY",
    "organization": "Valley National Bancorp",
    "industry": "Banks",
    "marketCap": "5.42B"
  },
  {
    "ticker": "VMAC",
    "organization": "Vistas Media Acquisition",
    "industry": "Shell Companies",
    "marketCap": "129.07M"
  },
  {
    "ticker": "VMAR",
    "organization": "Vision Marine Technologies",
    "industry": "Leisure Products",
    "marketCap": "55.40M"
  },
  {
    "ticker": "VMC",
    "organization": "Vulcan Materials",
    "industry": "Construction Materials",
    "marketCap": "22.95B"
  },
  {
    "ticker": "VMD",
    "organization": "Viemed Healthcare",
    "industry": "Health Care Providers & Services",
    "marketCap": "222.09M"
  },
  {
    "ticker": "VMEO",
    "organization": "Vimeo",
    "industry": "Software-Application",
    "marketCap": "4.94B"
  },
  {
    "ticker": "VMI",
    "organization": "Valmont Industries",
    "industry": "Construction & Engineering",
    "marketCap": "5.02B"
  },
  {
    "ticker": "VMW",
    "organization": "VMware",
    "industry": "Software",
    "marketCap": "63.68B"
  },
  {
    "ticker": "VNCE",
    "organization": "Vince Holding",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "VNDA",
    "organization": "Vanda Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "988.13M"
  },
  {
    "ticker": "VNE",
    "organization": "Veoneer",
    "industry": "Auto Components",
    "marketCap": "3.87B"
  },
  {
    "ticker": "VNET",
    "organization": "21Vianet Group",
    "industry": "IT Services",
    "marketCap": "2.43B"
  },
  {
    "ticker": "VNO",
    "organization": "Vornado Realty Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "8.87B"
  },
  {
    "ticker": "VNOM",
    "organization": "Viper Energy Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "VNRX",
    "organization": "VolitionRX",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "161.85M"
  },
  {
    "ticker": "VNT",
    "organization": "Vontier",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "VNTR",
    "organization": "Venator Materials",
    "industry": "Chemicals",
    "marketCap": "307.09M"
  },
  {
    "ticker": "VOC",
    "organization": "VOC Energy Trust",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "VOD",
    "organization": "Vodafone Group",
    "industry": "Wireless Telecommunication Services",
    "marketCap": "42.64B"
  },
  {
    "ticker": "VOLT",
    "organization": "Volt Information Sciences",
    "industry": "Professional Services",
    "marketCap": "77.94M"
  },
  {
    "ticker": "VOR",
    "organization": "Vor Biopharma",
    "industry": "Biotechnology",
    "marketCap": "585.21M"
  },
  {
    "ticker": "VOSO",
    "organization": "Virtuoso Acquisition",
    "industry": "Shell Companies",
    "marketCap": "285.20M"
  },
  {
    "ticker": "VOXX",
    "organization": "VOXX International",
    "industry": "Household Durables",
    "marketCap": "278.27M"
  },
  {
    "ticker": "VOYA",
    "organization": "Voya Financial",
    "industry": "Diversified Financial Services",
    "marketCap": "7.02B"
  },
  {
    "ticker": "VPCB",
    "organization": "VPC Impact Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "316.21M"
  },
  {
    "ticker": "VPCC",
    "organization": "VPC Impact Acquisition III",
    "industry": "Shell Companies",
    "marketCap": "314.35M"
  },
  {
    "ticker": "VPG",
    "organization": "Vishay Precision Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "VQS",
    "organization": "VIQ Solutions",
    "industry": "Software-Application",
    "marketCap": "93.14M"
  },
  {
    "ticker": "VRA",
    "organization": "Vera Bradley",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "VRAR",
    "organization": "Glimpse Group",
    "industry": "Software-Infrastructure",
    "marketCap": "72.02M"
  },
  {
    "ticker": "VRAY",
    "organization": "ViewRay",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.15B"
  },
  {
    "ticker": "VRCA",
    "organization": "Verrica Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "344.21M"
  },
  {
    "ticker": "VRDN",
    "organization": "Viridian Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "287.87M"
  },
  {
    "ticker": "VREX",
    "organization": "Varex Imaging",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "1.13B"
  },
  {
    "ticker": "VRM",
    "organization": "Vroom",
    "industry": "Specialty Retail",
    "marketCap": "2.97B"
  },
  {
    "ticker": "VRME",
    "organization": "VerifyMe",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "VRNA",
    "organization": "Verona Pharma",
    "industry": "Pharmaceuticals",
    "marketCap": "313.99M"
  },
  {
    "ticker": "VRNS",
    "organization": "Varonis Systems",
    "industry": "Software",
    "marketCap": "6.61B"
  },
  {
    "ticker": "VRNT",
    "organization": "Verint Systems",
    "industry": "Software",
    "marketCap": "2.94B"
  },
  {
    "ticker": "VRPX",
    "organization": "Virpax Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "53.07M"
  },
  {
    "ticker": "VRRM",
    "organization": "Verra Mobility",
    "industry": "IT Services",
    "marketCap": "2.33B"
  },
  {
    "ticker": "VRS",
    "organization": "Verso",
    "industry": "Paper & Forest Products",
    "marketCap": "621.26M"
  },
  {
    "ticker": "VRSK",
    "organization": "Verisk Analytics",
    "industry": "Professional Services",
    "marketCap": "32.38B"
  },
  {
    "ticker": "VRSN",
    "organization": "VeriSign",
    "industry": "IT Services",
    "marketCap": "22.94B"
  },
  {
    "ticker": "VRT",
    "organization": "Vertiv Holdings",
    "industry": "Electrical Equipment & Parts",
    "marketCap": "8.65B"
  },
  {
    "ticker": "VRTS",
    "organization": "Virtus Investment Partners",
    "industry": "Capital Markets",
    "marketCap": "2.39B"
  },
  {
    "ticker": "VRTV",
    "organization": "Veritiv Corporation",
    "industry": "Trading Companies & Distributors",
    "marketCap": "1.40B"
  },
  {
    "ticker": "VRTX",
    "organization": "Vertex Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "47.06B"
  },
  {
    "ticker": "VS",
    "organization": "Versus Systems",
    "industry": "Electronic Gaming & Multimedia",
    "marketCap": "61.02M"
  },
  {
    "ticker": "VSAT",
    "organization": "ViaSat",
    "industry": "Communications Equipment",
    "marketCap": "4.03B"
  },
  {
    "ticker": "VSCO",
    "organization": "Victoria's Secret & Co.",
    "industry": "Apparel Retail",
    "marketCap": "4.87B"
  },
  {
    "ticker": "VSEC",
    "organization": "VSE Corporation",
    "industry": "Commercial Services & Supplies",
    "marketCap": "625.81M"
  },
  {
    "ticker": "VSH",
    "organization": "Vishay Intertechnology",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "VST",
    "organization": "Vistra Energy",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "8.13B"
  },
  {
    "ticker": "VSTA",
    "organization": "Vasta Platform",
    "industry": "Education & Training Services",
    "marketCap": "376.74M"
  },
  {
    "ticker": "VSTM",
    "organization": "Verastem",
    "industry": "Biotechnology",
    "marketCap": "550.41M"
  },
  {
    "ticker": "VSTO",
    "organization": "Vista Outdoor",
    "industry": "Leisure Products",
    "marketCap": "2.36B"
  },
  {
    "ticker": "VTAQ",
    "organization": "Ventoux CCM Acquisition",
    "industry": "Shell Companies",
    "marketCap": "215.62M"
  },
  {
    "ticker": "VTEX",
    "organization": "VTEX",
    "industry": "Software-Application",
    "marketCap": "3.89B"
  },
  {
    "ticker": "VTGN",
    "organization": "VistaGen Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "518.91M"
  },
  {
    "ticker": "VTIQ",
    "organization": "VectoIQ Acquisition II",
    "industry": "Shell Companies",
    "marketCap": "345.15M"
  },
  {
    "ticker": "VTNR",
    "organization": "Vertex Energy",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "VTOL",
    "organization": "Bristow Group",
    "industry": "Oil & Gas Equipment & Services",
    "marketCap": "946.69M"
  },
  {
    "ticker": "VTR",
    "organization": "Ventas",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "21.66B"
  },
  {
    "ticker": "VTRS",
    "organization": "Viatris",
    "industry": "Pharmaceuticals",
    "marketCap": "16.43B"
  },
  {
    "ticker": "VTRU",
    "organization": "Vitru",
    "industry": "Education & Training Services",
    "marketCap": "367.64M"
  },
  {
    "ticker": "VTSI",
    "organization": "VirTra",
    "industry": "Aerospace & Defense",
    "marketCap": "109.88M"
  },
  {
    "ticker": "VTVT",
    "organization": "vTv Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "129.10M"
  },
  {
    "ticker": "VUZI",
    "organization": "Vuzix",
    "industry": "Household Durables",
    "marketCap": "664.77M"
  },
  {
    "ticker": "VVI",
    "organization": "Viad Corp",
    "industry": "Commercial Services & Supplies",
    "marketCap": "953.97M"
  },
  {
    "ticker": "VVNT",
    "organization": "Vivint Smart Home",
    "industry": "Security & Protection Services",
    "marketCap": "2.00B"
  },
  {
    "ticker": "VVOS",
    "organization": "Vivos Therapeutics",
    "industry": "Medical Devices",
    "marketCap": "92.62M"
  },
  {
    "ticker": "VVPR",
    "organization": "VivoPower International",
    "industry": "Independent Power and Renewable Elect...",
    "marketCap": "118.69M"
  },
  {
    "ticker": "VVV",
    "organization": "Valvoline",
    "industry": "Chemicals",
    "marketCap": "5.74B"
  },
  {
    "ticker": "VWE",
    "organization": "Vintage Wine Estates",
    "industry": "Beverages-Wineries & Distilleries",
    "marketCap": "603.41M"
  },
  {
    "ticker": "VWTR",
    "organization": "Vidler Water Resources",
    "industry": "Commercial Services & Supplies",
    "marketCap": "208.52M"
  },
  {
    "ticker": "VXRT",
    "organization": "Vaxart",
    "industry": "Biotechnology",
    "marketCap": "899.45M"
  },
  {
    "ticker": "VYGG",
    "organization": "Vy Global Growth",
    "industry": "Shell Companies",
    "marketCap": "630.81M"
  },
  {
    "ticker": "VYGR",
    "organization": "Voyager Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "99.01M"
  },
  {
    "ticker": "VYNE",
    "organization": "VYNE Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "72.12M"
  },
  {
    "ticker": "VYNT",
    "organization": "Vyant Bio",
    "industry": "Biotechnology",
    "marketCap": "68.70M"
  },
  {
    "ticker": "VZ",
    "organization": "Verizon",
    "industry": "Diversified Telecommunication Services",
    "marketCap": "223.61B"
  },
  {
    "ticker": "VZIO",
    "organization": "VIZIO Holding",
    "industry": "Household Durables",
    "marketCap": "3.88B"
  },
  {
    "ticker": "W",
    "organization": "Wayfair",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "26.29B"
  },
  {
    "ticker": "WAB",
    "organization": "Wabtec",
    "industry": "Machinery",
    "marketCap": "16.75B"
  },
  {
    "ticker": "WABC",
    "organization": "Westamerica Bancorporation",
    "industry": "Banks",
    "marketCap": "1.53B"
  },
  {
    "ticker": "WAFD",
    "organization": "Washington Federal",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "2.36B"
  },
  {
    "ticker": "WAFU",
    "organization": "Wah Fu Education Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "27.44M"
  },
  {
    "ticker": "WAL",
    "organization": "Western Alliance Bancorporation",
    "industry": "Banks",
    "marketCap": "11.44B"
  },
  {
    "ticker": "WALD",
    "organization": "Waldencast Acquisition",
    "industry": "Shell Companies",
    "marketCap": "422.63M"
  },
  {
    "ticker": "WARR",
    "organization": "Warrior Technologies Acquisition",
    "industry": "Shell Companies",
    "marketCap": "0.00"
  },
  {
    "ticker": "WASH",
    "organization": "Washington Trust Bancorp",
    "industry": "Banks",
    "marketCap": "938.77M"
  },
  {
    "ticker": "WAT",
    "organization": "Waters Corporation",
    "industry": "Life Sciences Tools & Services",
    "marketCap": "21.93B"
  },
  {
    "ticker": "WATT",
    "organization": "Energous",
    "industry": "Electrical Equipment",
    "marketCap": "132.04M"
  },
  {
    "ticker": "WAVE",
    "organization": "Eco Wave Power Global",
    "industry": "Software",
    "marketCap": "35.17M"
  },
  {
    "ticker": "WB",
    "organization": "Weibo",
    "industry": "Interactive Media & Services",
    "marketCap": "10.51B"
  },
  {
    "ticker": "WBA",
    "organization": "Walgreens Boots Alliance",
    "industry": "Food & Staples Retailing",
    "marketCap": "40.48B"
  },
  {
    "ticker": "WBK",
    "organization": "Westpac Banking",
    "industry": "Banks",
    "marketCap": "68.98B"
  },
  {
    "ticker": "WBS",
    "organization": "Webster Financial",
    "industry": "Banks",
    "marketCap": "5.08B"
  },
  {
    "ticker": "WBT",
    "organization": "Welbilt",
    "industry": "Machinery",
    "marketCap": "3.35B"
  },
  {
    "ticker": "WCC",
    "organization": "WESCO International",
    "industry": "Trading Companies & Distributors",
    "marketCap": "5.96B"
  },
  {
    "ticker": "WCN",
    "organization": "Waste Connections",
    "industry": "Commercial Services & Supplies",
    "marketCap": "32.85B"
  },
  {
    "ticker": "WD",
    "organization": "Walker & Dunlop",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "3.70B"
  },
  {
    "ticker": "WDAY",
    "organization": "Workday",
    "industry": "Software",
    "marketCap": "62.31B"
  },
  {
    "ticker": "WDC",
    "organization": "Western Digital",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "WDFC",
    "organization": "WD-40 Company",
    "industry": "Household Products",
    "marketCap": "3.21B"
  },
  {
    "ticker": "WDH",
    "organization": "Waterdrop",
    "industry": "Insurance-Diversified",
    "marketCap": "921.86M"
  },
  {
    "ticker": "WEBR",
    "organization": "Weber",
    "industry": "Furnishings",
    "marketCap": " Fixtures & Appliances"
  },
  {
    "ticker": "WEC",
    "organization": "WEC Energy Group",
    "industry": "Multi-Utilities",
    "marketCap": "27.72B"
  },
  {
    "ticker": "WEI",
    "organization": "Weidai",
    "industry": "Consumer Finance",
    "marketCap": "54.57M"
  },
  {
    "ticker": "WELL",
    "organization": "Welltower",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "35.43B"
  },
  {
    "ticker": "WEN",
    "organization": "Wendy's",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "WERN",
    "organization": "Werner Enterprises",
    "industry": "Road & Rail",
    "marketCap": "2.98B"
  },
  {
    "ticker": "WES",
    "organization": "Western Midstream Partners",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "WETF",
    "organization": "WisdomTree Investments",
    "industry": "Capital Markets",
    "marketCap": "840.16M"
  },
  {
    "ticker": "WEX",
    "organization": "WEX Inc.",
    "industry": "IT Services",
    "marketCap": "8.05B"
  },
  {
    "ticker": "WEYS",
    "organization": "Weyco Group",
    "industry": "Distributors",
    "marketCap": "220.11M"
  },
  {
    "ticker": "WF",
    "organization": "Woori Financial Group",
    "industry": "Banks",
    "marketCap": "7.20B"
  },
  {
    "ticker": "WFC",
    "organization": "Wells Fargo",
    "industry": "Banks",
    "marketCap": "193.80B"
  },
  {
    "ticker": "WFCF",
    "organization": "Where Food Comes From",
    "industry": "Software",
    "marketCap": "81.64M"
  },
  {
    "ticker": "WFG",
    "organization": "West Fraser Timber",
    "industry": "Paper & Forest Products",
    "marketCap": "9.14B"
  },
  {
    "ticker": "WFRD",
    "organization": "Weatherford International",
    "industry": "Oil & Gas Equipment & Services",
    "marketCap": "1.39B"
  },
  {
    "ticker": "WGO",
    "organization": "Winnebago Industries",
    "industry": "Automobiles",
    "marketCap": "2.62B"
  },
  {
    "ticker": "WH",
    "organization": "Wyndham Hotels & Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "WHD",
    "organization": "Cactus",
    "industry": "Energy Equipment & Services",
    "marketCap": "2.97B"
  },
  {
    "ticker": "WHF",
    "organization": "WhiteHorse Finance",
    "industry": "Capital Markets",
    "marketCap": "317.22M"
  },
  {
    "ticker": "WHG",
    "organization": "Westwood Holdings Group",
    "industry": "Capital Markets",
    "marketCap": "159.51M"
  },
  {
    "ticker": "WHLM",
    "organization": "Wilhelmina International",
    "industry": "Commercial Services & Supplies",
    "marketCap": "27.75M"
  },
  {
    "ticker": "WHLR",
    "organization": "Wheeler Real Estate Investment Trust",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "28.26M"
  },
  {
    "ticker": "WHR",
    "organization": "Whirlpool",
    "industry": "Household Durables",
    "marketCap": "12.87B"
  },
  {
    "ticker": "WILC",
    "organization": "G. Willi Food International",
    "industry": "Food & Staples Retailing",
    "marketCap": "281.92M"
  },
  {
    "ticker": "WIMI",
    "organization": "WiMi Hologram Cloud",
    "industry": "Advertising Agencies",
    "marketCap": "385.53M"
  },
  {
    "ticker": "WINA",
    "organization": "Winmark Corporation",
    "industry": "Specialty Retail",
    "marketCap": "789.56M"
  },
  {
    "ticker": "WING",
    "organization": "Wingstop",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "WINT",
    "organization": "Windtree Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "55.55M"
  },
  {
    "ticker": "WIRE",
    "organization": "Encore Wire Corporation",
    "industry": "Electrical Equipment",
    "marketCap": "1.99B"
  },
  {
    "ticker": "WISA",
    "organization": "Summit Wireless Technologies",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "41.11M"
  },
  {
    "ticker": "WISH",
    "organization": "ContextLogic",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "3.39B"
  },
  {
    "ticker": "WIT",
    "organization": "Wipro",
    "industry": "IT Services",
    "marketCap": "48.83B"
  },
  {
    "ticker": "WIX",
    "organization": "Wix.com",
    "industry": "IT Services",
    "marketCap": "10.65B"
  },
  {
    "ticker": "WK",
    "organization": "Workiva",
    "industry": "Software",
    "marketCap": "7.19B"
  },
  {
    "ticker": "WKEY",
    "organization": "WISeKey International Holding",
    "industry": "Software",
    "marketCap": "122.97M"
  },
  {
    "ticker": "WKHS",
    "organization": "Workhorse Group",
    "industry": "Auto Components",
    "marketCap": "914.74M"
  },
  {
    "ticker": "WKME",
    "organization": "WalkMe",
    "industry": "Software-Application",
    "marketCap": "2.42B"
  },
  {
    "ticker": "WKSP",
    "organization": "Worksport",
    "industry": "Auto Parts",
    "marketCap": "67.92M"
  },
  {
    "ticker": "WLDN",
    "organization": "Willdan Group",
    "industry": "Professional Services",
    "marketCap": "437.53M"
  },
  {
    "ticker": "WLFC",
    "organization": "Willis Lease Finance",
    "industry": "Trading Companies & Distributors",
    "marketCap": "246.50M"
  },
  {
    "ticker": "WLK",
    "organization": "Westlake Chemical",
    "industry": "Chemicals",
    "marketCap": "11.85B"
  },
  {
    "ticker": "WLKP",
    "organization": "Westlake Chemical Partners LP",
    "industry": "Chemicals",
    "marketCap": "857.23M"
  },
  {
    "ticker": "WLL",
    "organization": "Whiting Petroleum",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "WLMS",
    "organization": "Williams Industrial Services",
    "industry": "Construction & Engineering",
    "marketCap": "111.44M"
  },
  {
    "ticker": "WLTW",
    "organization": "Willis Towers Watson",
    "industry": "Insurance",
    "marketCap": "31.09B"
  },
  {
    "ticker": "WM",
    "organization": "Waste Management",
    "industry": "Commercial Services & Supplies",
    "marketCap": "63.10B"
  },
  {
    "ticker": "WMB",
    "organization": "Williams Companies",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "WMC",
    "organization": "Western Asset Mortgage Capital",
    "industry": "Mortgage Real Estate Investment Trus...",
    "marketCap": "157.50M"
  },
  {
    "ticker": "WMG",
    "organization": "Warner Music Group",
    "industry": "Entertainment",
    "marketCap": "22.98B"
  },
  {
    "ticker": "WMK",
    "organization": "Weis Markets",
    "industry": "Food & Staples Retailing",
    "marketCap": "1.42B"
  },
  {
    "ticker": "WMPN",
    "organization": "William Penn Bancorporation",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "185.23M"
  },
  {
    "ticker": "WMS",
    "organization": "Advanced Drainage Systems",
    "industry": "Building Products",
    "marketCap": "7.78B"
  },
  {
    "ticker": "WMT",
    "organization": "Walmart",
    "industry": "Food & Staples Retailing",
    "marketCap": "382.94B"
  },
  {
    "ticker": "WNC",
    "organization": "Wabash National",
    "industry": "Machinery",
    "marketCap": "776.64M"
  },
  {
    "ticker": "WNEB",
    "organization": "Western New England Bancorp",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "204.91M"
  },
  {
    "ticker": "WNS",
    "organization": "WNS (Holdings) Limited",
    "industry": "IT Services",
    "marketCap": "4.04B"
  },
  {
    "ticker": "WNW",
    "organization": "Wunong Net Technology",
    "industry": "Restaurants",
    "marketCap": "99.75M"
  },
  {
    "ticker": "WOOF",
    "organization": "Petco",
    "industry": "Specialty Retail",
    "marketCap": "6.43B"
  },
  {
    "ticker": "WOR",
    "organization": "Worthington Industries",
    "industry": "Metals & Mining",
    "marketCap": "2.72B"
  },
  {
    "ticker": "WORX",
    "organization": "SCWorx",
    "industry": "Health Care Technology",
    "marketCap": "22.97M"
  },
  {
    "ticker": "WOW",
    "organization": "WideOpenWest",
    "industry": "Media",
    "marketCap": "1.71B"
  },
  {
    "ticker": "WPC",
    "organization": "W.P. Carey",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "14.05B"
  },
  {
    "ticker": "WPCA",
    "organization": "Warburg Pincus Capital I-A",
    "industry": "Shell Companies",
    "marketCap": "347.90M"
  },
  {
    "ticker": "WPCB",
    "organization": "Warburg Pincus Capital I-B",
    "industry": "Shell Companies",
    "marketCap": "668.79M"
  },
  {
    "ticker": "WPM",
    "organization": "Wheaton Precious Metals",
    "industry": "Metals & Mining",
    "marketCap": "16.81B"
  },
  {
    "ticker": "WPP",
    "organization": "WPP plc",
    "industry": "Media",
    "marketCap": "16.23B"
  },
  {
    "ticker": "WPRT",
    "organization": "Westport Fuel Systems",
    "industry": "Machinery",
    "marketCap": "560.28M"
  },
  {
    "ticker": "WRAC",
    "organization": "Williams Rowland Acquisition",
    "industry": "Shell Companies",
    "marketCap": "248.00M"
  },
  {
    "ticker": "WRAP",
    "organization": "Wrap Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "WRB",
    "organization": "W.R. Berkley",
    "industry": "Insurance",
    "marketCap": "12.89B"
  },
  {
    "ticker": "WRBY",
    "organization": "Warby Parker",
    "industry": "Specialty Retail",
    "marketCap": "5.98B"
  },
  {
    "ticker": "WRE",
    "organization": "Washington REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.16B"
  },
  {
    "ticker": "WRK",
    "organization": "WestRock",
    "industry": "Containers & Packaging",
    "marketCap": "13.55B"
  },
  {
    "ticker": "WRLD",
    "organization": "World Acceptance",
    "industry": "Consumer Finance",
    "marketCap": "1.32B"
  },
  {
    "ticker": "WRN",
    "organization": "Western Copper & Gold",
    "industry": "Metals & Mining",
    "marketCap": "220.59M"
  },
  {
    "ticker": "WSBC",
    "organization": "WesBanco",
    "industry": "Banks",
    "marketCap": "2.29B"
  },
  {
    "ticker": "WSBF",
    "organization": "Waterstone Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "517.87M"
  },
  {
    "ticker": "WSC",
    "organization": "WillScot",
    "industry": "Construction & Engineering",
    "marketCap": "7.20B"
  },
  {
    "ticker": "WSFS",
    "organization": "WSFS Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "2.48B"
  },
  {
    "ticker": "WSM",
    "organization": "Williams-Sonoma",
    "industry": "Specialty Retail",
    "marketCap": "13.07B"
  },
  {
    "ticker": "WSO",
    "organization": "Watsco",
    "industry": "Trading Companies & Distributors",
    "marketCap": "10.44B"
  },
  {
    "ticker": "WSR",
    "organization": "Whitestone REIT",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "458.24M"
  },
  {
    "ticker": "WST",
    "organization": "West Pharmaceutical Services",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "31.05B"
  },
  {
    "ticker": "WSTG",
    "organization": "Wayside Technology Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "WTBA",
    "organization": "West Bancorporation",
    "industry": "Banks",
    "marketCap": "502.11M"
  },
  {
    "ticker": "WTER",
    "organization": "Alkaline Water",
    "industry": "Beverages",
    "marketCap": "155.20M"
  },
  {
    "ticker": "WTFC",
    "organization": "Wintrust Financial",
    "industry": "Banks",
    "marketCap": "4.63B"
  },
  {
    "ticker": "WTI",
    "organization": "W&T Offshore",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "WTM",
    "organization": "White Mountains Insurance Group",
    "industry": "Insurance",
    "marketCap": "3.32B"
  },
  {
    "ticker": "WTRG",
    "organization": "Essential Utilities",
    "industry": "Water Utilities",
    "marketCap": "11.37B"
  },
  {
    "ticker": "WTRH",
    "organization": "Waitr Holdings",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "102.12M"
  },
  {
    "ticker": "WTS",
    "organization": "Watts Water Technologies",
    "industry": "Machinery",
    "marketCap": "5.65B"
  },
  {
    "ticker": "WTT",
    "organization": "Wireless Telecom Group",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "WTTR",
    "organization": "Select Energy Services",
    "industry": "Energy Equipment & Services",
    "marketCap": "573.38M"
  },
  {
    "ticker": "WU",
    "organization": "Western Union",
    "industry": "IT Services",
    "marketCap": "8.35B"
  },
  {
    "ticker": "WVE",
    "organization": "Wave Life Sciences",
    "industry": "Pharmaceuticals",
    "marketCap": "243.70M"
  },
  {
    "ticker": "WVFC",
    "organization": "WVS Financial",
    "industry": "Thrifts & Mortgage Finance",
    "marketCap": "30.07M"
  },
  {
    "ticker": "WVVI",
    "organization": "Willamette Valley Vineyards",
    "industry": "Beverages",
    "marketCap": "63.40M"
  },
  {
    "ticker": "WW",
    "organization": "WW International",
    "industry": "Diversified Consumer Services",
    "marketCap": "1.32B"
  },
  {
    "ticker": "WWD",
    "organization": "Woodward",
    "industry": "Machinery",
    "marketCap": "7.38B"
  },
  {
    "ticker": "WWE",
    "organization": "World Wrestling Entertainment",
    "industry": "Entertainment",
    "marketCap": "4.38B"
  },
  {
    "ticker": "WWR",
    "organization": "Westwater Resources",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "WWW",
    "organization": "Wolverine World Wide",
    "industry": "Textiles",
    "marketCap": " Apparel & Luxury Goods"
  },
  {
    "ticker": "WY",
    "organization": "Weyerhaeuser",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "26.82B"
  },
  {
    "ticker": "WYNN",
    "organization": "Wynn Resorts",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "WYY",
    "organization": "WidePoint",
    "industry": "IT Services",
    "marketCap": "46.86M"
  },
  {
    "ticker": "X",
    "organization": "United States Steel",
    "industry": "Metals & Mining",
    "marketCap": "5.81B"
  },
  {
    "ticker": "XAIR",
    "organization": "Beyond Air",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "254.09M"
  },
  {
    "ticker": "XBIO",
    "organization": "Xenetic Biosciences",
    "industry": "Biotechnology",
    "marketCap": "19.89M"
  },
  {
    "ticker": "XBIT",
    "organization": "XBiotech",
    "industry": "Biotechnology",
    "marketCap": "402.21M"
  },
  {
    "ticker": "XCUR",
    "organization": "Exicure",
    "industry": "Biotechnology",
    "marketCap": "105.59M"
  },
  {
    "ticker": "XEL",
    "organization": "Xcel Energy",
    "industry": "Electric Utilities",
    "marketCap": "33.61B"
  },
  {
    "ticker": "XELA",
    "organization": "Exela Technologies",
    "industry": "IT Services",
    "marketCap": "267.92M"
  },
  {
    "ticker": "XELB",
    "organization": "XCel Brands",
    "industry": "Specialty Retail",
    "marketCap": "28.92M"
  },
  {
    "ticker": "XENE",
    "organization": "Xenon Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "641.54M"
  },
  {
    "ticker": "XENT",
    "organization": "Intersect ENT",
    "industry": "Pharmaceuticals",
    "marketCap": "908.02M"
  },
  {
    "ticker": "XERS",
    "organization": "Xeris Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "164.25M"
  },
  {
    "ticker": "XFOR",
    "organization": "X4 Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "127.99M"
  },
  {
    "ticker": "XGN",
    "organization": "Exagen",
    "industry": "Health Care Providers & Services",
    "marketCap": "227.07M"
  },
  {
    "ticker": "XHR",
    "organization": "Xenia Hotels & Resorts",
    "industry": "Equity Real Estate Investment Trusts...",
    "marketCap": "2.08B"
  },
  {
    "ticker": "XIN",
    "organization": "Xinyuan Real Estate",
    "industry": "Real Estate Management & Development",
    "marketCap": "116.12M"
  },
  {
    "ticker": "XL",
    "organization": "XL Fleet",
    "industry": "Auto Parts",
    "marketCap": "854.32M"
  },
  {
    "ticker": "XLNX",
    "organization": "Xilinx",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "36.90B"
  },
  {
    "ticker": "XLRN",
    "organization": "Acceleron Pharma",
    "industry": "Biotechnology",
    "marketCap": "10.54B"
  },
  {
    "ticker": "XM",
    "organization": "Qualtrics International",
    "industry": "Software-Application",
    "marketCap": "22.58B"
  },
  {
    "ticker": "XMTR",
    "organization": "Xometry",
    "industry": "Specialty Industrial Machinery",
    "marketCap": "2.39B"
  },
  {
    "ticker": "XNCR",
    "organization": "Xencor",
    "industry": "Biotechnology",
    "marketCap": "1.94B"
  },
  {
    "ticker": "XNET",
    "organization": "Xunlei",
    "industry": "Software",
    "marketCap": "195.46M"
  },
  {
    "ticker": "XOG",
    "organization": "Extraction Oil & Gas",
    "industry": "Oil & Gas E&P",
    "marketCap": "1.50B"
  },
  {
    "ticker": "XOM",
    "organization": "Exxon Mobil",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "XOMA",
    "organization": "XOMA Corporation",
    "industry": "Biotechnology",
    "marketCap": "278.20M"
  },
  {
    "ticker": "XONE",
    "organization": "ExOne Company",
    "industry": "Machinery",
    "marketCap": "513.02M"
  },
  {
    "ticker": "XOS",
    "organization": "Xos",
    "industry": "Farm & Heavy Construction Machinery",
    "marketCap": "744.43M"
  },
  {
    "ticker": "XP",
    "organization": "XP Inc.",
    "industry": "Capital Markets",
    "marketCap": "23.51B"
  },
  {
    "ticker": "XPAX",
    "organization": "XPAC Acquisition",
    "industry": "Shell Companies",
    "marketCap": "241.25M"
  },
  {
    "ticker": "XPDI",
    "organization": "Power & Digital Infrastructure Acquisition",
    "industry": "Shell Companies",
    "marketCap": "442.03M"
  },
  {
    "ticker": "XPEL",
    "organization": "XPEL",
    "industry": " Inc.",
    "marketCap": "Auto Components"
  },
  {
    "ticker": "XPER",
    "organization": "Xperi Corporation",
    "industry": "Semiconductors & Semiconductor Equipment",
    "marketCap": "1.98B"
  },
  {
    "ticker": "XPEV",
    "organization": "XPeng",
    "industry": "Automobiles",
    "marketCap": "30.34B"
  },
  {
    "ticker": "XPL",
    "organization": "Solitario Zinc",
    "industry": "Metals & Mining",
    "marketCap": "32.44M"
  },
  {
    "ticker": "XPO",
    "organization": "XPO Logistics",
    "industry": "Air Freight & Logistics",
    "marketCap": "9.30B"
  },
  {
    "ticker": "XPOA",
    "organization": "DPCM Capital",
    "industry": "Shell Companies",
    "marketCap": "366.94M"
  },
  {
    "ticker": "XPOF",
    "organization": "Xponential Fitness",
    "industry": "Leisure",
    "marketCap": "575.56M"
  },
  {
    "ticker": "XRAY",
    "organization": "Dentsply Sirona",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "12.89B"
  },
  {
    "ticker": "XRX",
    "organization": "Xerox",
    "industry": "Technology Hardware",
    "marketCap": " Storage & Periph..."
  },
  {
    "ticker": "XSPA",
    "organization": "XpresSpa Group",
    "industry": "Diversified Consumer Services",
    "marketCap": "155.71M"
  },
  {
    "ticker": "XTLB",
    "organization": "XTL Biopharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "23.28M"
  },
  {
    "ticker": "XTNT",
    "organization": "Xtant Medical Holdings",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "97.11M"
  },
  {
    "ticker": "XXII",
    "organization": "22nd Century Group",
    "industry": "Tobacco",
    "marketCap": "506.11M"
  },
  {
    "ticker": "XYF",
    "organization": "X Financial",
    "industry": "Consumer Finance",
    "marketCap": "222.95M"
  },
  {
    "ticker": "XYL",
    "organization": "Xylem",
    "industry": "Machinery",
    "marketCap": "22.28B"
  },
  {
    "ticker": "Y",
    "organization": "Alleghany",
    "industry": "Insurance",
    "marketCap": "8.76B"
  },
  {
    "ticker": "YAC",
    "organization": "Yucaipa Acquisition",
    "industry": "Shell Companies",
    "marketCap": "426.51M"
  },
  {
    "ticker": "YALA",
    "organization": "Yalla Group",
    "industry": "Interactive Media & Services",
    "marketCap": "1.10B"
  },
  {
    "ticker": "YCBD",
    "organization": "cbdMD",
    "industry": "Pharmaceuticals",
    "marketCap": "113.24M"
  },
  {
    "ticker": "YELL",
    "organization": "Yellow Corporation",
    "industry": "Road & Rail",
    "marketCap": "298.15M"
  },
  {
    "ticker": "YELP",
    "organization": "Yelp Inc.",
    "industry": "Interactive Media & Services",
    "marketCap": "2.92B"
  },
  {
    "ticker": "YETI",
    "organization": "YETI Holdings",
    "industry": "Leisure Products",
    "marketCap": "7.52B"
  },
  {
    "ticker": "YEXT",
    "organization": "Yext",
    "industry": " Inc.",
    "marketCap": "Software"
  },
  {
    "ticker": "YGMZ",
    "organization": "MingZhu Logistics",
    "industry": "Trucking",
    "marketCap": "48.15M"
  },
  {
    "ticker": "YI",
    "organization": "111",
    "industry": " Inc.",
    "marketCap": "Food & Staples Retailing"
  },
  {
    "ticker": "YJ",
    "organization": "Yunji",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "152.23M"
  },
  {
    "ticker": "YMAB",
    "organization": "Y-mAbs Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "1.28B"
  },
  {
    "ticker": "YMM",
    "organization": "Full Truck Alliance Co.",
    "industry": "Software-Application",
    "marketCap": "15.51B"
  },
  {
    "ticker": "YMTX",
    "organization": "Yumanity Therapeutics",
    "industry": "Biotechnology",
    "marketCap": "108.95M"
  },
  {
    "ticker": "YNDX",
    "organization": "Yandex",
    "industry": "Interactive Media & Services",
    "marketCap": "28.42B"
  },
  {
    "ticker": "YORW",
    "organization": "York Water Company",
    "industry": "Water Utilities",
    "marketCap": "578.73M"
  },
  {
    "ticker": "YOU",
    "organization": "Clear Secure",
    "industry": "Software-Application",
    "marketCap": "5.99B"
  },
  {
    "ticker": "YPF",
    "organization": "YPF S.A.",
    "industry": "Oil",
    "marketCap": " Gas & Consumable Fuels"
  },
  {
    "ticker": "YQ",
    "organization": "17 Education & Technology",
    "industry": "Interactive Media & Services",
    "marketCap": "172.60M"
  },
  {
    "ticker": "YRD",
    "organization": "Yiren Digital",
    "industry": "Consumer Finance",
    "marketCap": "255.31M"
  },
  {
    "ticker": "YSAC",
    "organization": "Yellowstone Acquisition",
    "industry": "Shell Companies",
    "marketCap": "171.86M"
  },
  {
    "ticker": "YSG",
    "organization": "Yatsen Holding",
    "industry": "Personal Products",
    "marketCap": "2.36B"
  },
  {
    "ticker": "YTEN",
    "organization": "Yield10 Bioscience",
    "industry": "Biotechnology",
    "marketCap": "29.81M"
  },
  {
    "ticker": "YTPG",
    "organization": "TPG Pace Beneficial II",
    "industry": "Shell Companies",
    "marketCap": "468.53M"
  },
  {
    "ticker": "YTRA",
    "organization": "Yatra Online",
    "industry": "Internet & Direct Marketing Retail",
    "marketCap": "126.27M"
  },
  {
    "ticker": "YUM",
    "organization": "Yum! Brands",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "YUMC",
    "organization": "Yum China",
    "industry": "Hotels",
    "marketCap": " Restaurants & Leisure"
  },
  {
    "ticker": "YVR",
    "organization": "Liquid Media Group",
    "industry": "Entertainment",
    "marketCap": "23.29M"
  },
  {
    "ticker": "YY",
    "organization": "JOYY Inc.",
    "industry": "Interactive Media & Services",
    "marketCap": "4.20B"
  },
  {
    "ticker": "Z",
    "organization": "Zillow",
    "industry": "Interactive Media & Services",
    "marketCap": "22.43B"
  },
  {
    "ticker": "ZBH",
    "organization": "Zimmer Biomet",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "31.22B"
  },
  {
    "ticker": "ZBRA",
    "organization": "Zebra Technologies",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ZCMD",
    "organization": "Zhongchao",
    "industry": "Health Information Services",
    "marketCap": "38.20M"
  },
  {
    "ticker": "ZDGE",
    "organization": "Zedge",
    "industry": " Inc.",
    "marketCap": "Interactive Media & Services"
  },
  {
    "ticker": "ZEAL",
    "organization": "Zealand Pharma A/S",
    "industry": "Biotechnology",
    "marketCap": "1.24B"
  },
  {
    "ticker": "ZEN",
    "organization": "Zendesk",
    "industry": "Software",
    "marketCap": "14.00B"
  },
  {
    "ticker": "ZENV",
    "organization": "Zenvia",
    "industry": "Software-Infrastructure",
    "marketCap": "499.44M"
  },
  {
    "ticker": "ZEPP",
    "organization": "Zepp Health",
    "industry": "Electronic Equipment",
    "marketCap": " Instruments & C..."
  },
  {
    "ticker": "ZEST",
    "organization": "Ecoark Holdings",
    "industry": "Software",
    "marketCap": "138.33M"
  },
  {
    "ticker": "ZETA",
    "organization": "Zeta Global Holdings",
    "industry": "Software-Application",
    "marketCap": "1.16B"
  },
  {
    "ticker": "ZEUS",
    "organization": "Olympic Steel",
    "industry": "Metals & Mining",
    "marketCap": "271.28M"
  },
  {
    "ticker": "ZEV",
    "organization": "Lightning eMotors",
    "industry": "Farm & Heavy Construction Machinery",
    "marketCap": "621.76M"
  },
  {
    "ticker": "ZG",
    "organization": "Zillow",
    "industry": "Interactive Media & Services",
    "marketCap": "23.09B"
  },
  {
    "ticker": "ZGNX",
    "organization": "Zogenix",
    "industry": "Pharmaceuticals",
    "marketCap": "871.45M"
  },
  {
    "ticker": "ZGYH",
    "organization": "Yunhong International",
    "industry": "Shell Companies",
    "marketCap": "91.77M"
  },
  {
    "ticker": "ZH",
    "organization": "Zhihu",
    "industry": "Internet Content & Information",
    "marketCap": "5.09B"
  },
  {
    "ticker": "ZI",
    "organization": "ZoomInfo Technologies",
    "industry": "Interactive Media & Services",
    "marketCap": "24.09B"
  },
  {
    "ticker": "ZIM",
    "organization": "ZIM Integrated Shipping Services",
    "industry": "Marine",
    "marketCap": "5.63B"
  },
  {
    "ticker": "ZION",
    "organization": "Zions Bancorporation",
    "industry": "Banks",
    "marketCap": "10.03B"
  },
  {
    "ticker": "ZIOP",
    "organization": "ZIOPHARM Oncology",
    "industry": "Biotechnology",
    "marketCap": "391.24M"
  },
  {
    "ticker": "ZIP",
    "organization": "ZipRecruiter",
    "industry": "Staffing & Employment Services",
    "marketCap": "3.18B"
  },
  {
    "ticker": "ZIVO",
    "organization": "Zivo Bioscience",
    "industry": "Personal Products",
    "marketCap": "38.17M"
  },
  {
    "ticker": "ZIXI",
    "organization": "Zix Corporation",
    "industry": "Software",
    "marketCap": "408.09M"
  },
  {
    "ticker": "ZKIN",
    "organization": "ZK International Group",
    "industry": "Metals & Mining",
    "marketCap": "76.35M"
  },
  {
    "ticker": "ZLAB",
    "organization": "Zai Lab",
    "industry": "Biotechnology",
    "marketCap": "10.16B"
  },
  {
    "ticker": "ZM",
    "organization": "Zoom Video Communications",
    "industry": "Software",
    "marketCap": "79.48B"
  },
  {
    "ticker": "ZME",
    "organization": "Zhangmen Education",
    "industry": "Education & Training Services",
    "marketCap": "442.53M"
  },
  {
    "ticker": "ZNGA",
    "organization": "Zynga Inc.",
    "industry": "Entertainment",
    "marketCap": "8.14B"
  },
  {
    "ticker": "ZNH",
    "organization": "China Southern Airlines",
    "industry": "Airlines",
    "marketCap": "13.84B"
  },
  {
    "ticker": "ZNTE",
    "organization": "Zanite Acquisition",
    "industry": "Shell Companies",
    "marketCap": "290.95M"
  },
  {
    "ticker": "ZNTL",
    "organization": "Zentalis Pharmaceuticals",
    "industry": "Biotechnology",
    "marketCap": "3.02B"
  },
  {
    "ticker": "ZOM",
    "organization": "Zomedica",
    "industry": "Pharmaceuticals",
    "marketCap": "557.86M"
  },
  {
    "ticker": "ZS",
    "organization": "Zscaler",
    "industry": "Software",
    "marketCap": "36.51B"
  },
  {
    "ticker": "ZSAN",
    "organization": "Zosano Pharma",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "82.16M"
  },
  {
    "ticker": "ZT",
    "organization": "Zimmer Energy Transition Acquisition",
    "industry": "Shell Companies",
    "marketCap": "364.88M"
  },
  {
    "ticker": "ZTO",
    "organization": "ZTO Express (Cayman) Inc.",
    "industry": "Air Freight & Logistics",
    "marketCap": "25.28B"
  },
  {
    "ticker": "ZTS",
    "organization": "Zoetis",
    "industry": "Pharmaceuticals",
    "marketCap": "92.92B"
  },
  {
    "ticker": "ZUMZ",
    "organization": "Zumiez",
    "industry": "Specialty Retail",
    "marketCap": "996.35M"
  },
  {
    "ticker": "ZUO",
    "organization": "Zuora",
    "industry": "Software",
    "marketCap": "2.13B"
  },
  {
    "ticker": "ZVIA",
    "organization": "Zevia",
    "industry": "Beverages-Non-Alcoholic",
    "marketCap": "743.06M"
  },
  {
    "ticker": "ZVO",
    "organization": "Zovio",
    "industry": "Diversified Consumer Services",
    "marketCap": "80.20M"
  },
  {
    "ticker": "ZWRK",
    "organization": "Z-Work Acquisition",
    "industry": "Shell Companies",
    "marketCap": "280.60M"
  },
  {
    "ticker": "ZY",
    "organization": "Zymergen",
    "industry": "Chemicals",
    "marketCap": "1.43B"
  },
  {
    "ticker": "ZYME",
    "organization": "Zymeworks",
    "industry": "Biotechnology",
    "marketCap": "1.35B"
  },
  {
    "ticker": "ZYNE",
    "organization": "Zynerba Pharmaceuticals",
    "industry": "Pharmaceuticals",
    "marketCap": "174.08M"
  },
  {
    "ticker": "ZYXI",
    "organization": "Zynex",
    "industry": "Health Care Equipment & Supplies",
    "marketCap": "386.54M"
  }
]

export const getOrganizationFromTicker = (ticker) => {
  if (!ticker || !ticker.length) {
    throw new Error('Please provide a valid ticker to get organization');
  }
  const matchingTicker = TICKERS.find(t => t.ticker.toUpperCase() === ticker?.toUpperCase());
  return matchingTicker?.organization || null;
}