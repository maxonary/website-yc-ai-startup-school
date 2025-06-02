// autofill.js
(function() {
  const fields = [
    { id: 'input-age', value: '22' },
    { id: 'input-gender', value: 'Male' },
    { id: 'input-website', value: 'https://maxarnold.dev' },
    { id: 'input-github', value: 'https://github.com/maxarnold' },
    { id: 'input-twitter', value: 'https://x.com/maxarnold' },
    { id: 'input-fhack', value: 'Free Christmas Postcards as a business: During Christmas of 2024, German a postcard company offered a voucher to send one free postcard per account. However, the system lacked two-factor authentication and treated Gmail aliases (using the “+” symbol) as unique addresses. I automated the signup process using an Android emulator and mass-generated Gmail aliases, eventually creating thousands of accounts. The system went viral at our University, and we sent so many postcards that I thought of actually opening my own printing service. Surprising friends with fun and lovely mail.' },
    { id: 'input-test-scores', value: 'SAT: 1550/1600, TOEFL: 117/120, Abitur: 1.7, ranked Top 5% at CODE University Berlin, - DAAD Scholar - awarded for academic excellence and leadership (German Academic Exchange Ministry), - Selected for Stanford University Exchange Program' },
    { id: 'input-fability', value: 'While on exchange at Stanford, I established an official partnership between my home university (CODE Berlin) and Stanford, making us one of only 30 global partners in the International Honors Program. Starting this year, 20 students per year can attend Stanford with a 20% scholarship, because I knew the best answer to “How did you get in?” was “Let me show you how.”' },
    { id: 'input-projects', value: 'SAP MCP, Chat with your Data, Self-Service Application for Porsche Procurement and Purchase – E-Sports wagering system, Peer-2-peer videogame sports betting for Clash Royale, Fortnite, Fifa ($100k early VC offer by Sukna Ventures at Stanford -> now WAGR - backed by Antler NYC): https://wagr.co – Won €50k at T-Mobile XR-Challenge: Market research tool for using AR for in-store experiences. Show what consumer technology is capable of: https://www.telekom.com/en/media/media-information/archive/future-of-shopping-and-service-with-xr-1008492 – Shipped the official Telekom Career AR Career Center: https://www.telekom.com/de/blog/karriere/artikel/studierende-aufgepasst-karriereinformation-trifft-augmented-reality-1058742 – App Store https://apps.apple.com/de/app/telekom-career/id6467720358 – Google Play Store https://play.google.com/store/apps/details?id=de.telekom.career.ar&hl=gsw – War drone that defends against military grade FPV drones on €550 budget (sent to Ukraine, paper in progress, now Locusta Dynamics - Angel backed) – AI RAG mapping corporate workforces for internal hiring (discussed with Intel IT CTO): https://community.intel.com/t5/Blogs/Tech-Innovation/Artificial-Intelligence-AI/AI-SpeedRacers-Code-Atzen-and-Team-Kanton-Enhance-Enterprise/post/1621917?source=MessageSyndication – AI for predicting Brazilian Lawsuits, based on 60.000 official classified law cases, with support by Stanford HPC and Intel – Failed productively with B2B SaaS Startup for European Wind Turbine Construction (7 devs, €150k LOI): https://sterna.studio – Open Source rebuilding the Lego Universe MMO: https://darkflameuniverse.org – Minecraft Server Manager, (beautiful UI pre AI): https://convitelist.vercel.app/ or https://github.com/maxonary/convitelist – Chess Robot for Chess.com API and Digital Clone https://chesse.koeni.dev – ERP System as SAP Competitor – Smart Mirror Video Call Portal – Smart Herb Box Arduino' },
    { id: 'input-awards', value: 'Grand Prize Intel Liftoff AI and Cloud Hackathon, START Hack, St. Gallen Switzerland/ Santa Clara USA 2024 (Fast track offer into the Intel Liftoff Startup program. Discussing the software with the CTO of Intel IT in Santa Clara) – Top 10 Samsung Solve for Tomorrow, Frankfurt, Germany 2023 (Presented to the executive board of Samsung Germany, later handed IP over to ENBW) – Winning Team (2nd place) €50k Telekom XR-Challenge, Bonn, Germany 2022 (Presented to the executive board of T-Mobile USA, Funded my college tuition within my first semester of studies)' },
    { id: 'input-clubs', value: 'Reviving CODE’s Entrepreneurship Community as the President of the Student Body, Hosting biweekly HackDays, Taking over University Marketing department and lowering cost per lead from €500+ to €5-10), strategic Partnerships – Building my own university CODE Incubator, and Hacker House with 22 Apartments for Young European Software Talents – MotionLab.Berlin IoT Talent Program and Scholarship (Funds and Resources at Berlins official Deep Tech Hub) – Elephant Club Host at IPAI (Innovation Hub Artificial Intelligence Heilbronn sponsored by Schwarz Group, Stackit Cloud) – Stanford BASES Entrepreneurship Club ($100.000 VC investment offer for 10%) – Buildspace IRL Nights & Weekends S5 (chosen for San Francisco Event) – Google for Startups Berlin (Credits and connections to Europes DevOps community) – Head of Technology at Slash Hackathon (Hosting a 350+ Participant Hackathon, €15k fundraising with German SME, SMP companies) – Voluntary mentor at children refugee integration kein Abseits! e.V. – Initiator IoT & Robotics Club back in High-School, easing the entry to tech for youth (LEGO robotics team for young students)' },
    { id: 'input-summer-plans', value: 'I’m wrapping up my AI capstone project with Porsche, where I’ve already received a full-time offer. But I’m focused on more entrepreneurial paths. I’m in final-stage talks to join Dodo (YC S24) in San Francisco as a founding engineer to test ideas, move fast, and build hands-on. And yes, I still plan to arm wrestle Michael Seibel, something I promised at Startup School 2024. This summer feels like the right time to make that happen.' }
  ];
  // Autofill input and textarea fields
  fields.forEach(({id, value}) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.value = localStorage.getItem(id) || value;
      el.addEventListener('input', () => {
        localStorage.setItem(id, el.value);
      });
    }
  });
  // Autofill name and email spans
  const name = 'Max Arnold';
  const email = 'maximilian.arnold@code.berlin';
  const nameEl = document.getElementById('autofill-name');
  if (nameEl) nameEl.textContent = name;
  const emailEl = document.getElementById('autofill-email');
  if (emailEl) emailEl.textContent = email;
})();
