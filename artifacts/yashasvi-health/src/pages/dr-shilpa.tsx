import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, GraduationCap, Award } from "lucide-react";
import drShilpaPath from "@assets/Obstetrician_and_Gynaecologist,_Laparoscopic_surgeon,_Infertil_1776442012796.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const specializations = [
  "High-Risk Pregnancy Management",
  "Normal & Complicated Labour",
  "PCOS (Polycystic Ovary Syndrome)",
  "Gynaecological Disorders",
  "Infertility Evaluation & Treatment",
  "Menopausal Disorders",
  "Laparoscopic Surgery",
  "Endometriosis",
];

const services = [
  {
    title: "Obstetrics & High-Risk Pregnancy",
    items: [
      "Antenatal care and monitoring",
      "High-risk pregnancy management",
      "Ultrasonography for pregnancy",
      "Follicular imaging for fertility",
    ],
  },
  {
    title: "Gynaecological Services",
    items: [
      "PCOS diagnosis and management",
      "Menopausal health and HRT",
      "Irregular menstrual cycle treatment",
      "Pap smear / LBC (Liquid-Based Cytology)",
    ],
  },
  {
    title: "Minor Procedures",
    items: [
      "Copper T (Cu T) insertion & removal",
      "Mirena insertion & removal",
      "Pap smear collection",
      "Liquid-Based Cytology (LBC)",
    ],
  },
  {
    title: "Laparoscopic & Infertility",
    items: [
      "Diagnostic and operative laparoscopy",
      "Infertility evaluation (male & female)",
      "Ovulation induction",
      "IUI preparation counselling",
    ],
  },
];

const achievements = [
  {
    icon: <Award className="w-5 h-5 text-accent" />,
    text: "University Rank Holder in MS OBG",
  },
  {
    icon: <Award className="w-5 h-5 text-accent" />,
    text: "Vice President — Davanagere OBG Society",
  },
  {
    icon: <Award className="w-5 h-5 text-accent" />,
    text: "Member — World Association of Laparoscopic Surgeons (WALS)",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-accent" />,
    text: "Professor & Unit Head — SSIMS and RC",
  },
];

export default function DrShilpa() {
  useEffect(() => {
    document.title =
      "Dr. Shilpa Nabapure - Gynaecologist & Laparoscopic Surgeon in Davanagere | Yashasvi Health Care";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Consult Dr. Shilpa Nabapure, MBBS MS FMAS DMAS, a leading Obstetrician, Gynaecologist, Laparoscopic Surgeon & Infertility Specialist in Davanagere, Karnataka. VP, Davanagere OBG Society. 13+ years experience."
      );
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-accent/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase"
                style={{ backgroundColor: "hsl(var(--accent))" }}
              >
                Gynaecologist &amp; Laparoscopic Surgeon, Davanagere
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Dr. Shilpa Nabapure
              </h1>
              <p className="font-semibold text-lg mb-5" style={{ color: "hsl(var(--accent))" }}>
                MBBS, MS, FMAS, DMAS, Fellowship in USG
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Professor &amp; Unit Head — SSIMS and RC, Davanagere. An award-winning Obstetrician, Gynaecologist, Laparoscopic Surgeon, and Infertility Specialist with 13+ years of experience and a commitment to compassionate, non-judgemental care.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["13+ Years Experience", "Laparoscopic Surgeon", "Infertility Specialist", "High-Risk Pregnancy"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-white text-sm font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: "hsl(var(--accent) / 0.15)", color: "hsl(var(--accent))" }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <Button
                asChild
                size="lg"
                className="text-white rounded-full px-8 h-12 hover:opacity-90"
                style={{ backgroundColor: "hsl(var(--accent))" }}
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={drShilpaPath}
                alt="Dr. Shilpa Nabapure - Gynaecologist, Laparoscopic Surgeon & Infertility Specialist in Davanagere"
                className="w-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, hsl(var(--accent) / 0.15), transparent)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials & OPD Timings */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Credentials */}
            <motion.div {...fadeUp}>
              <Card className="h-full border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded-lg p-2" style={{ backgroundColor: "hsl(var(--accent) / 0.1)" }}>
                      <GraduationCap className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground">Qualifications & Achievements</h2>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {[
                      { label: "Qualifications", value: "MBBS, MS, FMAS, DMAS, Fellowship in USG" },
                      { label: "Experience", value: "13+ years in OBG & Laparoscopic Surgery" },
                      { label: "Academic Position", value: "Professor & Unit Head, SSIMS and RC" },
                      { label: "Approach", value: "Non-judgemental, patient-friendly care" },
                    ].map((item) => (
                      <li
                        key={item.label}
                        className="flex flex-col border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-foreground">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Distinctions &amp; Awards
                    </h3>
                    {achievements.map((a) => (
                      <div key={a.text} className="flex items-start gap-3 bg-accent/5 rounded-lg p-3">
                        {a.icon}
                        <span className="text-sm text-foreground">{a.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* OPD Timings */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="h-full border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded-lg p-2" style={{ backgroundColor: "hsl(var(--accent) / 0.1)" }}>
                      <Clock className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground">OPD Timings (OBG)</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl p-5" style={{ backgroundColor: "hsl(var(--accent) / 0.07)" }}>
                      <p className="font-semibold text-foreground mb-1">Monday – Saturday</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Afternoon Session</span>
                          <span className="font-semibold" style={{ color: "hsl(var(--accent))" }}>
                            1:00 PM – 3:00 PM
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Evening Session</span>
                          <span className="font-semibold" style={{ color: "hsl(var(--accent))" }}>
                            5:00 PM – 7:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-5">
                      <p className="font-semibold text-foreground mb-1">Sunday</p>
                      <p className="text-sm text-muted-foreground">Holiday — Clinic Closed</p>
                    </div>
                    <div className="bg-muted/20 rounded-xl p-5">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Clinic Address: </span>
                        Vibha Residency, 7th Main Road, MCC A Block, Davanagere – 577004, Karnataka
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="mt-6 w-full text-white rounded-full hover:opacity-90"
                    style={{ backgroundColor: "hsl(var(--accent))" }}
                  >
                    <Link href="/contact">Book Appointment</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Areas of Specialization
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive women's health care across every stage of life.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {specializations.map((spec, i) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-border rounded-xl p-4 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                <span className="text-sm font-medium text-foreground">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Services Offered</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A full spectrum of women's health services — from antenatal care to advanced laparoscopic procedures.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3
                      className="font-serif text-base font-bold mb-4 pb-3 border-b border-border"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {s.title}
                    </h3>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: "hsl(var(--accent))" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "hsl(var(--accent))" }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Consult Davanagere's Leading Gynaecologist Today
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Whether it's pregnancy care, PCOS, infertility, or a gynaecological concern — Dr. Shilpa Nabapure is here with expert, compassionate guidance.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 rounded-full px-8 h-12 font-semibold" style={{ color: "hsl(var(--accent))" }}>
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
