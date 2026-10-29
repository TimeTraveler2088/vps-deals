// ============================================
//  Deals Data File - Edit ONLY this file
//  Add / remove / update deals here
// ============================================

const dealsData = [

  // ---------- ≤ $25 / year ----------
  {
    section: "under25",           // 所属分区：under25 / under30 / China / storage / tempsms
    provider: "DediRock",         // 商家名称
    plan: "1 vCPU - 2GB RAM",     // 套餐规格
    tags: [ "kvm", "ssd"],         // 标签：china-optimized / kvm / nvme / dedicated / storage
    country: "USA",                // 国家
    specs: `1 vCPU                
2GB RAM
30GB SSD
2000G Bandwidth
1× IPv4
1Gbps Port
New York, US`,
    price: "$9.8",
    period: "/ year",
    link: "https://billing.dedirock.com/aff.php?aff=7&pid=264",                    // 购买链接，改成真实链接
    buttonText: "Buy Now"
  },
  {
    section: "under25",
    provider: "DediRock",
    plan: "1 vCPU - 2GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `1 vCPU
2GB RAM
30GB SSD
2000G Bandwidth
1× IPv4
1Gbps Port
Los Angeles, US`,
    price: "$10.8",
    period: "/ year",
    link: "https://billing.dedirock.com/aff.php?aff=7&pid=265",
    buttonText: "Buy Now"
  },
  {
    section: "under25",
    provider: "BitsFlow",
    plan: "1 vCPU - 1GB RAM",
    tags: ["kvm","nvme"],
    country: "USA, Germany, United Kingdom, Hong Kong, Japan",
    specs: `1 vCPU
1GB RAM
20GB NVMe SSD
4000G Bandwidth
1× IPv4 + /64 IPv6
2.5Gbps Port
Multiple Global Locations`,
    price: "$14.7",
    period: "/ year",
    link: "https://bitsflow.cloud/26-aut-yp.html",
    buttonText: "Buy Now"
  },
  {
    section: "under25",
    provider: "DediRock",
    plan: "1 vCPU - 2GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `1 vCPU
2GB RAM
20GB SSD
2000G Bandwidth
1× IPv4
1Gbps Port
Los Angeles, US`,
    price: "$17.8",
    period: "/ year",
    link: "https://billing.dedirock.com/aff.php?aff=7&pid=126",
    buttonText: "Buy Now"
  },
  {
    section: "under25",
    provider: "RackNerd",
    plan: "1 vCPU - 1GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `1 vCPU
1GB RAM
20 GB PURE SSD RAID-10 Storage
3000G Bandwidth
1× IPv4
1Gbps Port
Multiple Locations，US`,
    price: "$21.9",
    period: "/ year",
    link: "https://my.racknerd.com/aff.php?aff=12581&pid=952",
    buttonText: "Buy Now"
  },
  {
    section: "under25",
    provider: "BitsFlow",
    plan: "1 vCPU - 1GB RAM",
    tags: ["kvm","nvme"],
    country: "USA, Germany, United Kingdom, Hong Kong, Japan",
    specs: `1 vCPU
1GB RAM
20GB NVMe SSD
2000G Bandwidth
1× IPv4 + /64 IPv6
2.5Gbps Port
Multiple Global Locations,Japan`,
    price: "$28",
    period: "/ year",
    link: "https://ccp.bitsflow.cloud/order/main/packages/fcf26-tyo/?group_id=53&a=Njk2",
    buttonText: "Buy Now"
  },

  // ---------- ≥ $30 / year ----------
    {
    section: "under30",
    provider: "Evoxt",
    plan: "1 vCPU - 512MB RAM",
    tags: ["kvm", "NVMe"],
    country: "USA, Germany, United Kingdom, Hong Kong, Japan",
    specs: `1 vCPU
512MB RAM
5GB NVMe
500G Bandwidth
1× IPv4 + /1 IPv6
1Gbps Port
Hong Kong`,
    price: "$2.84", "code：AFF1978-88"，
    period: "/ month",
    link: "https://console.evoxt.com/aff.php?aff=1978",
    buttonText: "Buy Now"
  },
  {
    section: "under30",
    provider: "DMIT",
    plan: "1 vCPU - 1GB RAM",
    tags: ["kvm", "ssd"],
    country: "Hong Kong",
    specs: `1 vCPU
1GB RAM
20GB SSD
1000G Bandwidth
1× IPv4 + /64 IPv6
4Gbps Port
Hong Kong`,
    price: "$36.9",
    period: "/ year",
    link: "https://www.dmit.io/aff.php?aff=11031&pid=197",
    buttonText: "Buy Now"
  },
  {
    section: "under30",
    provider: "DMIT",
    plan: "1 vCPU - 1GB RAM",
    tags: ["kvm", "ssd"],
    country: "Japan",
    specs: `1 vCPU
1GB RAM
20GB SSD
1000G Bandwidth
1× IPv4 + /64 IPv6
4Gbps Port
Japan`,
    price: "$36.9",
    period: "/ year",
    link: "https://www.dmit.io/aff.php?aff=11031&pid=228",
    buttonText: "Buy Now"
  },
  {
    section: "under30",
    provider: "RackNerd",
    plan: "2 vCPU - 2GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `2 vCPU
2GB RAM
35 GB PURE SSD RAID-10 Storage
5000G Bandwidth
1× IPv4
1Gbps Port
Multiple Locations，US`,
    price: "$35.9",
    period: "/ year",
    link: "https://my.racknerd.com/aff.php?aff=12581&pid=953",
    buttonText: "Buy Now"
  },
  {
    section: "under30",
    provider: "RackNerd",
    plan: "3 vCPU - 4GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `3 vCPU
4GB RAM
60 GB PURE SSD RAID-10 Storage
7000G Bandwidth
1× IPv4
1Gbps Port
Multiple Locations，US`,
    price: "$59.9",
    period: "/ year",
    link: "https://my.racknerd.com/aff.php?aff=12581&pid=954",
    buttonText: "Buy Now"
  },
  {
    section: "under30",
    provider: "RackNerd",
    plan: "6 vCPU - 6GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `6 vCPU
6GB RAM
100 GB PURE SSD RAID-10 Storage
12000G Bandwidth
1× IPv4
1Gbps Port
Multiple Locations，US`,
    price: "$89.9",
    period: "/ year",
    link: "https://my.racknerd.com/aff.php?aff=12581&pid=955",
    buttonText: "Buy Now"
  },
    {
    section: "under30",
    provider: "RackNerd",
    plan: "7 vCPU - 8GB RAM",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `7 vCPU
8GB RAM
150 GB PURE SSD RAID-10 Storage
20000G Bandwidth
1× IPv4
1Gbps Port
Multiple Locations，US`,
    price: "$119.9",
    period: "/ year",
    link: "https://my.racknerd.com/aff.php?aff=12581&pid=956",
    buttonText: "Buy Now"
  },

  // ---------- China-optimized VPS ----------
  {
    section: "china",
    provider: "NoSLA",
    plan: "AS9929 & CMIN2",
    tags: ["kvm", "nvme", "china-optimized"],
    country: "USA, Germany, Hong Kong, Japan",
    specs: `1 vCPU
1GB RAM
20GB NVMe SSD
500G Bandwidth
1× IPv4 + /64 IPv6
150 Mbps Port
Multiple Global Locations
AS9929 & CMIN2`,
    price: "$38.7",
    period: "/ year",
    link: "https://nosla.cloud/ypocr.html",
    buttonText: "Buy Now"
  },
  {
    section: "china",
    provider: "NoSLA",
    plan: "CN2 GIA & AS9929 & CMIN2",
    tags: ["kvm", "nvme", "china-optimized"],
    country: "USA, Germany, Hong Kong, Japan",
    specs: `1 vCPU（AMD 7V13）
1GB RAM
30GB NVMe SSD
500G Bandwidth
1× IPv4 + /64 IPv6
500 Mbps Port
Multiple Global Locations
CN2 GIA & AS9929 & CMIN2`,
    price: "$50.4",
    period: "/ year",
    link: "https://nosla.cloud/ypocr.html",
    buttonText: "Buy Now"
  },
  {
    section: "china",
    provider: "DMIT",
    plan: "CN2 GIA",
    tags: ["kvm", "ssd" , "china-optimized"],
    country: "Hong Kong",
    specs: `1 vCPU
1GB RAM
20GB SSD
500G Bandwidth
1× IPv4 + /64 IPv6
1Gbps Port
Hong Kong
CN2 GIA`,
    price: "$39.9",
    period: "/ month",
    link: "https://www.dmit.io/aff.php?aff=11031&pid=265",
    buttonText: "Buy Now"
  },
  {
    section: "china",
    provider: "BandwagonHost",
    plan: "CN2 GIA",
    tags: ["kvm", "ssd" , "china-optimized"],
    country: "USA",
    specs: `2 vCPU
1GB RAM
20GB SSD
1000G Bandwidth
1× IPv4
2.5Gbps Port
Los Angeles, US, Japan
CN2 GIA`,
    price: "$49.9",
    period: "/ quarter",
    link: "https://bwh89.net/aff.php?aff=76203&pid=87",
    buttonText: "Buy Now"
  },
  {
    section: "china",
    provider: "BandwagonHost",
    plan: "CN2 GIA",
    tags: ["kvm", "ssd" , "china-optimized"],
    country: "Japan",
    specs: `2 vCPU
2GB RAM
40GB SSD
500G Bandwidth
1× IPv4
1.5Gbps Port
Japan
CN2 GIA`,
    price: "$49.9",
    period: "/ month",
    link: "https://bwh89.net/aff.php?aff=76203&pid=134",
    buttonText: "Buy Now"
  },  
 {
    section: "china",
    provider: "BandwagonHost",
    plan: "CN2 GIA",
    tags: ["kvm", "ssd" , "china-optimized"],
    country: "Hong Kong",
    specs: `2 vCPU
2GB RAM
40GB SSD
500G Bandwidth
1× IPv4
1Gbps Port
Hong Kong
CN2 GIA`,
    price: "$89.9",
    period: "/ month",
    link: "https://bwh89.net/aff.php?aff=76203&pid=95",
    buttonText: "Buy Now"
  },  
  {
    section: "china",
    provider: "BandwagonHost",
    plan: "CN2 GIA",
    tags: ["kvm", "ssd" , "china-optimized"],
    country: "Japan",
    specs: `2 vCPU
2GB RAM
40GB SSD
500G Bandwidth
1× IPv4
1.2Gbps Port
Japan
CN2 GIA`,
    price: "$89.9",
    period: "/ month",
    link: "https://bwh89.net/aff.php?aff=76203&pid=108",
    buttonText: "Buy Now"
  },  

  // ---------- Storage VPS ----------
  {
    section: "storage",
    provider: "DediRock",
    plan: "Storage 1000G",
    tags: ["kvm", "storage"],
    country: "USA",
    specs: `1 vCPU
1GB RAM
1000GB HDD

2000G Bandwidth
1× IPv4
1Gbps Port
New York, US`,
    price: "$17.6",
    period: "/ year",
    link: "https://billing.dedirock.com/aff.php?aff=7&pid=107",
    buttonText: "Buy Now"
  },
  {
    section: "month",
    provider: "AlphaVPS",
    plan: "Storage 128G",
    tags: ["kvm", "storage"],
    country: "USA",
    specs: `1 vCPU
512M RAM
128GB RAID60 HDD

500G Bandwidth
1× IPv4 + /64 IPv6
10Gbps Port
Bulgaria`,
    price: "$17.8",
    period: "/ year",
    link: "https://alphavps.com/clients/aff.php?aff=902&pid=246",
    buttonText: "Buy Now"
  },
  {
    section: "storage",
    provider: "GreenCloud",
    plan: "Storage 500G",
    tags: ["kvm", "storage"],
    country: "USA, Japan, Singapore",
    specs: `1 vCPU
2G RAM
20GB NVMe OS Boot
500GB SATA RAID-10 Hard drives
3000G Bandwidth
1× IPv4 + /64 IPv6
10Gbps Port
Multiple Global Locations`,
    price: "$25",
    period: "/ year",
    link: "https://greencloudvps.com/billing/aff.php?aff=8417&gid=73",
    buttonText: "Buy Now"
  },
  {
    section: "storage",
    provider: "DediRock",
    plan: "Storage 256G SSD",
    tags: ["kvm", "ssd"],
    country: "USA",
    specs: `1 vCPU
2GB RAM
256GB SSD
2000G Bandwidth
1× IPv4
1Gbps Port
Los Angeles, US`,
    price: "$28.9",
    period: "/ year",
    link: "https://billing.dedirock.com/aff.php?aff=7&pid=265",
    buttonText: "Buy Now"
  },   
  {
    section: "storage",
    provider: "HostBrr",
    plan: "Storage 1000G",
    tags: ["kvm", "storage"],
    country: "USA, Germany",
    specs: `1 vCPU （AMD EPYC 7003/9004）
1G ECC RAM
15GB NVMe Gen4 Storage
1000 GB HDD Raid-6 storage
5000 Bandwidth
1× IPv4 + /64 IPv6
10Gbps Port
Germany`,
    price: "$40",
    period: "/ year",
    link: "https://my.hostbrr.com/order/main/packages/BF2025/?group_id=62&a=MjIwMw==",
    buttonText: "Buy Now"
  },
  {
    section: "storage",
    provider: "GreenCloud",
    plan: "Storage 1000G",
    tags: ["kvm", "storage"],
    country: "USA, Japan, Singapore",
    specs: `2 vCPU
3G RAM
40GB NVMe OS Boot
1000GB SATA RAID-10 Hard drives
6000G Bandwidth
1× IPv4 + /64 IPv6
10Gbps Port
Multiple Global Locations`,
    price: "$45",
    period: "/ year",
    link: "https://greencloudvps.com/billing/aff.php?aff=8417&gid=73",
    buttonText: "Buy Now"
  },

  // ---------- Temp SMS ----------
  {
    section: "tempsms",
    provider: "SMS-MAN",
    plan: "SMS",
    tags: ["temp sms"],
    specs: `180+ countries · 1000+ services
One-time & rental numbers`,
    link: "https://sms-man.com/cn?ref=kYAjrypNLrYB",
    buttonText: "Buy Now"
  },
  {
    section: "tempsms",
    provider: "Hero SMS",
    plan: "SMS",
    tags: ["temp sms"],
    specs: `180+ countries · 700+ services
One-time & rental numbers`,
    link: "https://hero-sms.com/?ref=1827954",
    buttonText: "Buy Now"
  },
  {
    section: "tempsms",
    provider: "Tiger SMS",
    plan: "SMS",
    tags: ["temp sms"],
    specs: `100+ countries · 300+ services
One-time & rental numbers`,
    link: "https://tiger-sms.com/r/8cdtzmmj",
    buttonText: "Buy Now"
  },
  {
    section: "tempsms",
    provider: "Online SIM",
    plan: "SMS",
    tags: ["temp sms"],
    specs: `100+ countries · 1000+ services
One-time & rental numbers`,
    link: "https://onlinesim.io/?aref=9631609",
    buttonText: "Buy Now"
  },

];
