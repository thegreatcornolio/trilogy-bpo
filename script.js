// ===== Team data =====
const team = [
  { name: "Kobus van der Westhuizen", title: "CEO & Founder", email: "kobusvdw@trilogybpo.com", img: "assets/team/kobus.jpg",
    bio: "Kobus is a renowned customer service and contact centre strategist with more than 20 years' experience in customer service and contact centre improvement consulting, analytics and supply chain optimisation. His experience includes the development of Customer Experience strategies and service improvement for more than 30 brands globally. Kobus also held executive positions, as well as consulted to large global BPO companies such as CCN and Aegis." },
  { name: "Tanya Phillips", title: "Chief Operating Officer", email: "tanyap@trilogybpo.com", img: "assets/team/tanya.jpg",
    bio: "Tanya is an accomplished leader and leading personality of the Call Centre Industry. As Operations Director for leading Outsource Providers in South Africa she has developed comprehensive experience including multi-site management, inbound and outbound operations and in-sourced, outsourced and co-sourced solutions. Tanya holds an MBA, is currently Chairperson of the Professional Body and has been the convening judge for the CCMG industry awards for the past decade. She is a successful change agent, coach and experienced digital transformation specialist." },
  { name: "Craig Shalekoff", title: "CTO & Founder", email: "craigs@trilogybpo.com", img: "assets/team/craig.jpg",
    bio: "Craig has over 20 years BPO experience with a proven track record in developing and implementing major transformation projects involving large international BPO organisations. Craig has run multiple IT departments and worked across Africa and Asia Pacific building multiple global networks. His project management has delivered the All Africa Games, built VISA centres for the British High Commission and delivered contact centres from international BPO players throughout Africa." },
  { name: "Rudi Jansen", title: "Director of People", email: "", img: "assets/team/rudi.jpg",
    bio: "Rudi has spent two decades proving that people, when genuinely invested in, transform organisations. A creative at heart and a people strategist by trade, Rudi spent years in the performing arts before building a career leading HR, talent, and leadership development across some of South Africa's largest BPO operations. He brings an unusual combination of creative thinking, human-centred leadership, and hard operational experience to everything he does." },
  { name: "Vancyon van Zyl", title: "Director of Transitions", email: "vancyonvz@trilogybpo.com", img: "assets/team/vancyon.jpg",
    bio: "Vancyon brings extensive experience from roles at Ascensos, Digital Tribe BPO, CallForce and Capita SA. He holds a Certificate in Contact Centre Management and brings a robust skill set including Call Centre, BPO, Contact Centres, Operations Management and Outsourcing. Vancyon is passionate about South Africa's diverse culture and its representation in the global BPO market." },
  { name: "Keanu Vieira", title: "Head of CX Solutions", email: "keanu@trilogybpo.com", img: "assets/team/keanu.jpg",
    bio: "As Head of CX Solutions, Keanu consults with new clients to understand their pain points, design the right CX solution, and guide them through a seamless transition to offshore their operations. He specialises in Trilogy's AI-enabled, voice + digital + autonomous CX contact centres delivering 40\u201350% cost savings compared to UK-based in-house operations \u2014 from voice to digital to autonomous CX." },
  { name: "Jason Luboyera", title: "Head of Digital", email: "", img: "assets/team/jason.jpg",
    bio: "Jason is Founder and CEO of 360 DigiSales and a founding team member of The Lekker Network, a global social networking platform connecting South Africans worldwide. Known for his energy and ambition, he hosts Professional Pillow Talk, a podcast dedicated to asking tough questions of experienced professionals. He is an ambassador of Finding Thabo (an early learning initiative by The Reach Trust) and a scholarship recipient from one of Europe's top business schools." },
  { name: "Tish Carruthers", title: "Marketing & Intelligence Lead", email: "tishc@trilogybpo.com", img: "assets/team/tish.jpg",
    bio: "Tish's focus is connecting market insight with practical business action \u2014 from target-account intelligence and industry research to content, positioning and growth initiatives. Her work spans customer experience operations, intelligence-led marketing, AI-enabled service models, market research, and LinkedIn and digital campaigns. She enjoys building structured systems, simplifying complex ideas and finding better ways to connect marketing and sales." },
  { name: "Frank Kilbourn", title: "Non-Executive Director", email: "", img: "assets/team/frank.jpg",
    bio: "Frank holds separate degrees in Law, Commerce and Philosophy. He founded the Bright Group of companies in 2002, focusing on private equity and venture capital, and is co-founder of the Bright Foundation. He serves on the board of City Lodge Hotels Ltd as head independent director and was Chairperson of the South African Tourism Board. He is a co-owner of Grootbos Nature Reserve, a trustee of WWF South Africa, and Chairman of Strauss & Co since 2016." },
  { name: "Jonathan Broll", title: "Non-Executive Director", email: "", img: "assets/team/jonathan.jpg",
    bio: "Jonathan is a seasoned executive with 49 years of experience in the real estate sector, currently serving as Chairman of Broll Property Group (Pty) Ltd. He has also held the position of Director at Catalyst Fund Managers since 2005. A holder of the Chartered Accountant (SA) designation, Jonathan brings a strong foundation in finance and accounting to his strategic guidance and leadership role at Trilogy." },
  { name: "Heather Wallace", title: "Non-Executive Director", email: "", img: "assets/team/heather.jpg",
    bio: "With over 20 years of experience in the multifamily real estate industry, Heather has been involved in the development, lease-up, acquisition and rehabilitation of multi-family projects, specialising in the scaling of management platforms. She brings deep experience in strategic oversight and governance to the Trilogy board." }
];

const teamGrid = document.getElementById("teamGrid");
team.forEach((m) => {
  const card = document.createElement("article");
  card.className = "team-card reveal";
  const emailHTML = m.email
    ? `<a href="mailto:${m.email}" class="team-email">\u2709 ${m.email}</a>`
    : "";
  card.innerHTML = `
    <div class="team-img-wrap"><img src="${m.img}" alt="${m.name}" class="team-img" loading="lazy" /></div>
    <p class="team-name">${m.name}</p>
    <p class="team-title">${m.title}</p>
    <button class="team-toggle" type="button" aria-expanded="false">
      <span>About</span><span class="arrow">\u25BC</span>
    </button>
    <div class="team-bio">${m.bio}${emailHTML}</div>`;
  card.querySelector(".team-toggle").addEventListener("click", (e) => {
    const btn = e.currentTarget;
    btn.classList.toggle("open");
    btn.setAttribute("aria-expanded", btn.classList.contains("open"));
    btn.nextElementSibling.classList.toggle("open");
  });
  teamGrid.appendChild(card);
});

// ===== Mobile navigation =====
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

mainNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ===== Scroll reveal =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== Animated counters =====
function animateCount(el) {
  const target = Number(el.dataset.count);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-count]").forEach((el) => statObserver.observe(el));

// ===== Contact form (front-end only — wire to a backend or form service later) =====
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    formNote.textContent = "Please fill in all fields with a valid email.";
    formNote.style.color = "#ffb4a8";
    return;
  }

  formNote.style.color = "";
  formNote.textContent = "Thanks! We'll be in touch within one business day.";
  form.reset();
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
