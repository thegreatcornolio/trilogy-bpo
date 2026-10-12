import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/FaqJsonLd";
import FaqSection from "@/components/FaqSection";
import SectionKicker from "@/components/SectionKicker";
import { company } from "@/lib/content";
import { pageMetadata, privacyFaqs } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Trilogy BPO collects, uses and protects personal data under UK GDPR and POPIA — lawful basis, data subject rights, security, 72-hour breach response and third-party DPAs.",
  path: "/privacy/",
  keywords: [
    "Trilogy BPO privacy policy",
    "UK GDPR compliant BPO",
    "POPIA compliant",
    "data subject rights",
    "data processing agreement",
  ],
});

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: [
      `${company.name} (“Trilogy”, “we”, “us”) is committed to protecting personal data and operating in line with the UK General Data Protection Regulation (UK GDPR) and South Africa’s Protection of Personal Information Act (POPIA).`,
      "This notice explains what personal data we collect, why we process it, how long we keep it, the rights available to individuals, and the safeguards we apply across our customer experience and technology operations.",
    ],
  },
  {
    id: "data-audit",
    title: "Data audit and records of processing",
    body: [
      "We maintain a Record of Processing Activities (ROPA) that maps the personal data our organisation collects, where it is stored, how it flows through our systems and operations, and who has access.",
      "This inventory is reviewed as services, systems and processors change so we understand our data footprint and can demonstrate accountability to clients and regulators.",
    ],
  },
  {
    id: "lawful-basis",
    title: "Lawful basis for processing",
    body: [
      "For every instance in which we process personal data, we identify and document a lawful basis under Article 6 of the UK GDPR (and the equivalent requirements under POPIA). Depending on the activity, that may include:",
    ],
    bullets: [
      "Consent — where an individual has given clear, affirmative permission",
      "Contract — where processing is necessary to perform a contract or take steps at the individual’s request",
      "Legitimate interests — where processing is necessary for our (or a client’s) legitimate interests and those interests are not overridden by the individual’s rights",
      "Legal obligation — where we must process data to comply with applicable law",
    ],
    after: [
      "Where we process special-category or high-risk data, we apply the additional conditions and safeguards required by law.",
    ],
  },
  {
    id: "what-we-collect",
    title: "What we collect and why",
    body: [
      "Depending on how you interact with us — for example through our websites, enquiry forms, recruitment channels, client programmes or service delivery — we may process:",
    ],
    bullets: [
      "Identity and contact details (name, email, phone, company)",
      "Communications and enquiry content",
      "Client customer data processed under contract as a service provider / processor",
      "Recruitment and employment-related information where applicable",
      "Technical data such as IP address, device/browser information and limited analytics cookies needed to operate the site",
    ],
    after: [
      "We only collect personal data that is relevant to the stated purpose, and we do not use it for incompatible secondary purposes without a fresh lawful basis and appropriate notice.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: [
      "We retain personal data only for as long as needed for the purpose it was collected, including to meet legal, accounting, contractual or regulatory requirements.",
      "Retention periods are defined in our ROPA and related schedules. When data is no longer required, it is securely deleted, anonymised or returned in line with our agreements and legal duties.",
    ],
  },
  {
    id: "rights",
    title: "Your data subject rights",
    body: [
      "Individuals have rights over their personal data. Subject to applicable law and any contractual role we hold (controller or processor), you may request to:",
    ],
    bullets: [
      "Access the personal data we hold about you",
      "Rectify inaccurate or incomplete data",
      "Erase data (“right to be forgotten”) where grounds apply",
      "Restrict or object to certain processing",
      "Receive data in a portable format where applicable",
      "Withdraw consent where processing is based on consent",
    ],
    after: [
      "We maintain internal processes to receive, verify and respond to data subject requests, typically within one month. Complex or high-volume requests may take longer where the law allows; we will keep you informed.",
      `To exercise your rights, contact us at ${company.email} with enough detail for us to identify your request. If we process your data only as a processor for a client, we will redirect or support the request via the relevant controller as required.`,
    ],
  },
  {
    id: "security",
    title: "Data security",
    body: [
      "We apply technical and organisational measures appropriate to the risk, including measures aligned with our ISO 27001 certified information security management and PCI DSS compliant payment-data controls where relevant.",
    ],
    bullets: [
      "Encryption and secure transmission of personal data where appropriate",
      "Pseudonymisation and minimisation where suitable for the processing purpose",
      "Access controls, least-privilege permissions and authentication standards",
      "Monitoring, logging and vulnerability management for relevant systems",
      "Staff privacy and security awareness training",
      "Physical and environmental controls at our facilities",
    ],
  },
  {
    id: "breaches",
    title: "Personal data breaches",
    body: [
      "We maintain an incident response plan for personal data breaches. Where a breach is likely to result in a risk to individuals’ rights and freedoms, we will notify the relevant supervisory authority without undue delay and, where required, within 72 hours of becoming aware of it.",
      "Where the law requires, we will also inform affected individuals without undue delay, and we will work with clients when we act as a processor so contractual and regulatory notification duties are met.",
    ],
  },
  {
    id: "leadership",
    title: "Leadership, DPO and representatives",
    body: [
      "Accountability for privacy sits with Trilogy leadership. Where our core activities involve large-scale or high-risk processing of personal data, we designate a Data Protection Officer (DPO) or equivalent privacy lead with the independence and resources needed to advise the business and monitor compliance.",
      "Where required for processing related to individuals in the UK/EU while we operate from outside those territories, we appoint an appropriate representative and publish contact details for privacy enquiries.",
      `Privacy enquiries can be sent to ${company.email}. Our registered operating address is ${company.address}.`,
    ],
  },
  {
    id: "third-parties",
    title: "Third-party processors and vendor risk",
    body: [
      "Where vendors or sub-processors handle personal data on our behalf, we carry out appropriate due diligence and put Data Processing Agreements (DPAs) in place covering instructions, confidentiality, security, sub-processing, assistance with data subject rights, breach notification and deletion or return of data at the end of the engagement.",
      "We only use processors that provide sufficient guarantees to implement appropriate technical and organisational measures. International transfers, where they occur, are supported by an approved transfer mechanism such as adequacy, standard contractual clauses or another lawful safeguard.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and this website",
    body: [
      "Our website uses essential cookies required for security and basic functionality. Where we use analytics or similar optional technologies, we will do so on a lawful basis and provide controls where required.",
      "You can control cookies through your browser settings. Blocking some cookies may affect site functionality.",
    ],
  },
  {
    id: "updates",
    title: "Updates to this notice",
    body: [
      "We may update this privacy notice as our services, systems or legal obligations change. The latest version will always be published on this page with an updated “last reviewed” date.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <main>
      <FaqJsonLd faqs={privacyFaqs} path="/privacy/" />
      <section style={{ padding: "88px 0 56px", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionKicker onDark>Legal</SectionKicker>
          <h1
            style={{
              margin: "4px 0 0",
              fontSize: "clamp(34px, 5vw, 52px)",
              fontWeight: 400,
              letterSpacing: "-.03em",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              margin: "18px 0 0",
              maxWidth: "58ch",
              fontSize: 17,
              lineHeight: 1.65,
              fontWeight: 300,
              color: "rgba(247,245,240,.72)",
            }}
          >
            How {company.name} collects, uses, protects and respects personal data — aligned to UK GDPR and POPIA.
          </p>
          <p className="mono" style={{ margin: "22px 0 0", fontSize: 11.5, color: "rgba(247,245,240,.45)" }}>
            Last reviewed: October 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 0 96px", background: "#F7F5F0" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <nav
            aria-label="Privacy sections"
            style={{
              marginBottom: 40,
              padding: "22px 24px",
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(14,27,42,.08)",
            }}
          >
            <div className="mono" style={{ fontSize: 11.5, letterSpacing: ".12em", color: "rgba(14,27,42,.45)", marginBottom: 12 }}>
              On this page
            </div>
            <ol style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 8 }}>
              {sections.map((section) => (
                <li key={section.id} style={{ fontSize: 14.5, lineHeight: 1.45 }}>
                  <a href={`#${section.id}`} style={{ color: "#0E1B2A", fontWeight: 400 }}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div style={{ display: "grid", gap: 36 }}>
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                style={{
                  scrollMarginTop: 96,
                  padding: "28px 28px 30px",
                  borderRadius: 16,
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    fontWeight: 400,
                    letterSpacing: "-.02em",
                    color: "#0E1B2A",
                  }}
                >
                  {section.title}
                </h2>
                {"body" in section && section.body
                  ? section.body.map((para) => (
                      <p
                        key={para}
                        style={{
                          margin: "14px 0 0",
                          fontSize: 15.5,
                          lineHeight: 1.7,
                          color: "rgba(14,27,42,.68)",
                          fontWeight: 300,
                        }}
                      >
                        {para}
                      </p>
                    ))
                  : null}
                {"bullets" in section && section.bullets ? (
                  <ul
                    style={{
                      margin: "16px 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: 10,
                    }}
                  >
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: "rgba(14,27,42,.72)",
                          fontWeight: 300,
                        }}
                      >
                        <span style={{ color: "#0E7C46", fontWeight: 700, flex: "none" }}>+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {"after" in section && section.after
                  ? section.after.map((para) => (
                      <p
                        key={para}
                        style={{
                          margin: "14px 0 0",
                          fontSize: 15.5,
                          lineHeight: 1.7,
                          color: "rgba(14,27,42,.68)",
                          fontWeight: 300,
                        }}
                      >
                        {para}
                      </p>
                    ))
                  : null}
              </article>
            ))}
          </div>

          <FaqSection title="Privacy FAQs" faqs={privacyFaqs} />

          <div
            style={{
              marginTop: 40,
              padding: "24px 28px",
              borderRadius: 14,
              background: "#0E1B2A",
              color: "#F7F5F0",
            }}
          >
            <div className="mono" style={{ fontSize: 11.5, letterSpacing: ".12em", color: "rgba(247,245,240,.45)" }}>
              Contact
            </div>
            <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, fontWeight: 300, color: "rgba(247,245,240,.82)" }}>
              For privacy requests or questions, email{" "}
              <a href={`mailto:${company.email}`} style={{ color: "#2FE85C" }}>
                {company.email}
              </a>
              . UK {company.phoneUk} · SA {company.phoneSa}.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.55, color: "rgba(247,245,240,.55)", fontWeight: 300 }}>
              {company.legalName} · {company.address}
            </p>
            <p style={{ margin: "18px 0 0" }}>
              <Link href="/" style={{ color: "rgba(247,245,240,.82)", fontSize: 14.5 }}>
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
