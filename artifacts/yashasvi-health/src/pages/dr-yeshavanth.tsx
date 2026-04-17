import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, GraduationCap, Stethoscope, FlaskConical, Pill } from "lucide-react";
import drYeshavanthPath from "@assets/WhatsApp_Image_2026-04-15_at_11.12.41_(1)_1776442797661.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const specializations = [
  "Internal Medicine & General Physician",
  "Advanced Diabetology & Diabetes Management",
  "Infectious Disease Diagnosis & Treatment",
  "Critical Care Medicine",
  "Metabolic Disorders",
  "Hypertension & Cardiovascular Risk",
  "Fever of Unknown Origin",
  "Tropical & Vector-borne Diseases",
];

const services = [
  {
    icon: <Stethoscope className="w-6 h-6 text-primary" />,
    title: "Expert Consultations",
    desc: "Comprehensive outpatient consultations for internal medicine, diabetes, and infectious disease. Evidence-based diagnosis with personalised treatment planning.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    title: "In-House Lab Services",
    desc: "A range of on-site diagnostic investigations including blood sugar monitoring, lipid profiles, complete blood counts, and infection panels.",
  },
  {
    icon: <Pill className="w-6 h-6 text-primary" />,
    title: "Pharmacy",
    desc: "Clinic-adjacent pharmacy services ensuring immediate access to prescribed medications with professional dispensing guidance.",
  },
];

const education = [
  {
    topic: "Living with Diabetes",
    desc: "Understanding blood sugar control, HbA1c targets, diet modification, medication adherence, and preventing complications like neuropathy, nephropathy, and retinopathy.",
  },
  {
    topic: "Infectious Disease Awareness",
    desc: "Recognising symptoms of common infectious diseases, antibiotic stewardship, and prevention strategies for tropical diseases prevalent in Karnataka.",
  },
  {
    topic: "Heart Disease & Cardiovascular Risk",
    desc: "Understanding cardiac risk factors, the connection between diabetes and heart disease, lifestyle modifications, and when to seek urgent care.",
  },
];

export default function DrYeshavanth() {
  useEffect(() => {
    document.title = "Dr. Yeshavanth G - Diabetologist & General Physician in Davanagere | Yashasvi Health Care";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Consult Dr. Yeshavanth G, MBBS MD FGID, a leading Diabetologist and General Physician in Davanagere, Karnataka. Professor & HOD at SSIMS. 15+ years experience in diabetes, infectious disease, and internal medicine."
      );
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
                Diabetologist &amp; General Physician, Davanagere
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Dr. Yeshavanth G
              </h1>
              <p className="text-primary font-semibold text-lg mb-5">MBBS, MD, FGID</p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Professor &amp; Head of Department — SSIMS and RC, Davanagere. One of Karnataka's foremost specialists in Internal Medicine, Diabetology, and Infectious Disease, with over 15 years of clinical and academic experience.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["15+ Years Experience", "Professor & HOD, SSIMS", "Diabetologist", "Infectious Disease"].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
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
                src={drYeshavanthPath}
                alt="Dr. Yeshavanth G - Diabetologist and General Physician at Yashasvi Health Care, Davanagere"
                className="w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications & OPD Timings */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Credentials */}
            <motion.div {...fadeUp}>
              <Card className="h-full border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground">Qualifications & Credentials</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { label: "Qualifications", value: "MBBS, MD, FGID" },
                      { label: "Experience", value: "15+ years in clinical practice" },
                      { label: "Academic Position", value: "Professor & Head of Department, SSIMS and RC" },
                      { label: "Clinical Focus", value: "Internal Medicine, Diabetology, Infectious Disease, Critical Care" },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col border-b border-border pb-4 last:border-0 last:pb-0">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</span>
                        <span className="text-sm font-medium text-foreground">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* OPD Timings */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="h-full border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground">OPD Timings (General Medicine)</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-primary/5 rounded-xl p-5">
                      <p className="font-semibold text-foreground mb-1">Monday – Saturday</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Afternoon Session</span>
                          <span className="font-semibold text-primary">1:00 PM – 3:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Evening Session</span>
                          <span className="font-semibold text-primary">5:00 PM – 9:00 PM</span>
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
                  <Button asChild className="mt-6 w-full bg-primary hover:bg-primary/90 text-white rounded-full">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Areas of Specialization</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Bringing specialist expertise in the most complex aspects of internal medicine to every patient.
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
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Services Available</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                    <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      {s.icon}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Education */}
      <section className="bg-primary/5 border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Patient Education</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Informed patients make better health decisions. Dr. Yeshavanth G is committed to health literacy.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((e, i) => (
              <motion.div
                key={e.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-primary mb-3">{e.topic}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                    <Link href="/education" className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline">
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Consult Davanagere's Leading Diabetologist Today
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Whether it's diabetes management, an infectious illness, or a general medicine query — Dr. Yeshavanth G is here to help.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 font-semibold">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
