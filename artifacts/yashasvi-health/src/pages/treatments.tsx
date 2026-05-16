import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Stethoscope, HeartPulse, FlaskConical, Pill, Baby, Microscope, Scissors, Activity } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const yeshavanth = [
  {
    icon: <Stethoscope className="w-5 h-5 text-primary" />,
    title: "General Medicine",
    items: [
      "Fever & acute illness evaluation",
      "Hypertension management",
      "Anaemia & nutritional disorders",
      "Thyroid disorders",
      "Respiratory tract infections",
      "Chronic disease follow-up",
    ],
  },
  {
    icon: <Activity className="w-5 h-5 text-primary" />,
    title: "Diabetology",
    items: [
      "Type 1 & Type 2 Diabetes diagnosis",
      "HbA1c monitoring & target setting",
      "Insulin therapy management",
      "Diabetic neuropathy, nephropathy, retinopathy",
      "Gestational diabetes",
      "Metabolic syndrome counselling",
    ],
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-primary" />,
    title: "Infectious Disease",
    items: [
      "Dengue, Malaria, Typhoid management",
      "Leptospirosis & vector-borne diseases",
      "Viral hepatitis evaluation",
      "HIV/AIDS care & counselling",
      "Antibiotic stewardship",
      "Fever of Unknown Origin (FUO)",
    ],
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
    title: "In-House Lab Services",
    items: [
      "Complete Blood Count (CBC)",
      "Blood glucose & HbA1c",
      "Lipid profile & liver function",
      "Kidney function tests",
      "Thyroid function tests",
      "Urine routine examination",
    ],
  },
  {
    icon: <Pill className="w-5 h-5 text-primary" />,
    title: "Pharmacy",
    items: [
      "Prescription medicines dispensing",
      "Diabetes medications & insulin",
      "Antibiotic & antimalarial dispensing",
      "Patient counselling on medication use",
    ],
  },
];

const shilpa = [
  {
    icon: <Baby className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />,
    title: "Obstetrics & Pregnancy Care",
    items: [
      "Antenatal care & regular monitoring",
      "High-risk pregnancy management",
      "Normal labour & delivery",
      "Post-natal care",
      "Gestational hypertension & preeclampsia",
      "Gestational diabetes in pregnancy",
    ],
  },
  {
    icon: <HeartPulse className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />,
    title: "Gynaecological Disorders",
    items: [
      "PCOS diagnosis and treatment",
      "Irregular menstrual cycles",
      "Endometriosis management",
      "Uterine fibroids",
      "Ovarian cysts",
      "Menopausal disorders & HRT",
    ],
  },
  {
    icon: <Scissors className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />,
    title: "Laparoscopic Surgery",
    items: [
      "Diagnostic laparoscopy",
      "Operative laparoscopy",
      "Laparoscopic hysterectomy",
      "Laparoscopic ovarian cystectomy",
      "Laparoscopic myomectomy",
      "Adhesiolysis",
    ],
  },
  {
    icon: <Activity className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />,
    title: "Infertility Treatment",
    items: [
      "Infertility evaluation (male & female)",
      "Ovulation induction",
      "Follicular monitoring (USG)",
      "IUI counselling & preparation",
      "Recurrent pregnancy loss workup",
    ],
  },
  {
    icon: <Microscope className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />,
    title: "Ultrasonography & Imaging",
    items: [
      "Obstetric USG (all trimesters)",
      "Anomaly scan",
      "Follicular imaging",
      "Gynaecological pelvic USG",
      "Doppler studies",
    ],
  },
  {
    icon: <FlaskConical className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />,
    title: "Minor Procedures",
    items: [
      "Copper T (Cu T) insertion & removal",
      "Mirena (LNG-IUS) insertion & removal",
      "Pap smear collection",
      "Liquid-Based Cytology (LBC)",
      "Cervical biopsy",
    ],
  },
];

export default function Treatments() {
  const [activeTab, setActiveTab] = useState<"yeshavanth" | "shilpa">("yeshavanth");

  useEffect(() => {
    document.title = "Treatments & Laboratory Services | Yashasvi Health Care, Davanagere";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Comprehensive treatment services at Yashasvi Health Care Davanagere — General Medicine, Diabetology, Infectious Disease, Obstetrics, Gynaecology, Laparoscopic Surgery, and in-house lab."
      );
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-5">
              Treatments &amp; Laboratory
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Comprehensive Specialist Services Under One Roof
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore the full range of treatments and diagnostic services offered by our specialists at Yashasvi Health Care, Davanagere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex justify-center mb-12">
            <div className="inline-flex bg-muted rounded-xl p-1.5 gap-1">
              <button
                data-testid="tab-yeshavanth"
                onClick={() => setActiveTab("yeshavanth")}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "yeshavanth"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Dr. Yeshavanth G — General Medicine &amp; Diabetes
              </button>
              <button
                data-testid="tab-shilpa"
                onClick={() => setActiveTab("shilpa")}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "shilpa"
                    ? "text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={
                  activeTab === "shilpa"
                    ? { backgroundColor: "hsl(var(--accent))" }
                    : {}
                }
              >
                Dr. Shilpa Nabapure — OBG &amp; Laparoscopy
              </button>
            </div>
          </motion.div>

          {activeTab === "yeshavanth" && (
            <motion.div
              key="yeshavanth"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Services by Dr. Yeshavanth G
                </h2>
                <p className="text-muted-foreground">General Physician, Diabetologist &amp; Infectious Disease Specialist</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {yeshavanth.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Card className="h-full border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                          <div className="bg-primary/10 rounded-lg p-2">{cat.icon}</div>
                          <h3 className="font-serif text-base font-bold text-primary">{cat.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
                  <Link href="/dr-yeshavanth">View Full Profile &rarr;</Link>
                </Button>
              </div>
            </motion.div>
          )}

          {activeTab === "shilpa" && (
            <motion.div
              key="shilpa"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Services by Dr. Shilpa Nabapure
                </h2>
                <p className="text-muted-foreground">Obstetrician, Gynaecologist, Laparoscopic Surgeon &amp; Infertility Specialist</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shilpa.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Card className="h-full border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                          <div className="rounded-lg p-2" style={{ backgroundColor: "hsl(var(--accent) / 0.1)" }}>
                            {cat.icon}
                          </div>
                          <h3 className="font-serif text-base font-bold" style={{ color: "hsl(var(--accent))" }}>
                            {cat.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button
                  asChild
                  className="text-white rounded-full px-8 h-12 hover:opacity-90"
                  style={{ backgroundColor: "hsl(var(--accent))" }}
                >
                  <Link href="/dr-shilpa">View Full Profile &rarr;</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 border-t border-border py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not Sure Which Specialist You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team will guide you to the right doctor. Simply reach out and we will help schedule the most appropriate consultation.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
