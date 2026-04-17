import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, BadgeCheck, ArrowRight } from "lucide-react";
import drYeshavanthPath from "@assets/WhatsApp_Image_2026-04-15_at_11.12.41_(1)_1776442797661.jpeg";
import drShilpaPath from "@assets/WhatsApp_Image_2026-04-15_at_11.12.41_1776442797662.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  useEffect(() => {
    document.title = "About Yashasvi Health Care - Specialist Clinic in Davanagere, Karnataka";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Yashasvi Health Care in Davanagere houses two highly credentialed specialists - Dr. Yeshavanth G (Diabetologist) and Dr. Shilpa Nabapure (Gynaecologist). Learn about their academic and clinical excellence.");
    }
  }, []);

  const clinicValues = [
    {
      icon: <BadgeCheck className="w-6 h-6 text-primary" />,
      title: "Academic Excellence",
      desc: "Both specialists are Professor-grade faculty at SSIMS and RC, bringing the rigour of academic medicine into every consultation.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Patient-First Approach",
      desc: "We prioritize dignity, privacy, and personalised attention. Every patient is heard and treated with compassion.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Evidence-Based Care",
      desc: "Treatment protocols rooted in the latest evidence, aligned with national and international clinical guidelines.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Proven Track Record",
      desc: "Decades of combined experience across Internal Medicine, Diabetology, Obstetrics, Gynaecology, and Laparoscopic Surgery.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="bg-primary/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-5">
              About the Clinic
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Where Academic Expertise Meets Compassionate Care
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Yashasvi Health Care is a multi-specialty clinic in the heart of Davanagere, Karnataka, established to bring specialist-level medical care closer to the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Clinic Built on Trust and Clinical Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Yashasvi Health Care was founded on the belief that every patient deserves access to specialist care delivered with warmth, honesty, and transparency. Located at Vibha Residency, MCC A Block, Davanagere, our clinic serves patients from across the district.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                We house two distinct specialties under one roof: Internal Medicine & Diabetology and Obstetrics & Gynaecology. This deliberate pairing ensures that families have access to comprehensive care for the most critical health needs — chronic disease management for men and women, and complete women's health support from reproductive years through menopause.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our specialists are not just practitioners — they are professors, researchers, and academic leaders at SSIMS and RC, one of Karnataka's premier medical institutions. This means when you consult at Yashasvi Health Care, you benefit from the latest advancements in medicine, not just routine clinical practice.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={doctorsBothPath}
                  alt="Dr. Shilpa Nabapure and Dr. Yeshavanth G - Yashasvi Health Care Specialists"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-5 rounded-xl shadow-lg hidden md:block">
                <p className="font-serif text-2xl font-bold">28+</p>
                <p className="text-sm font-medium text-white/80">Years Combined Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Clinical Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      {v.icon}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Specialists</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Two exceptional clinicians with distinguished academic and clinical credentials.
            </p>
          </motion.div>

          {/* Dr. Yeshavanth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-primary/5 rounded-2xl border border-primary/15 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-1">
                  <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                    General Medicine &amp; Diabetology
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">Dr. Yeshavanth G</h3>
                  <p className="text-primary font-medium mb-4">MBBS, MD, FGID</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Dr. Yeshavanth G is a highly accomplished Internal Medicine specialist with over 15 years of experience in advanced diabetology, infectious disease management, and critical care. As a Professor and Head of Department at SSIMS and RC, he brings a depth of knowledge that is rarely available outside major academic medical centres — directly to the patients of Davanagere.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Experience", value: "15+ Years" },
                      { label: "Designation", value: "Professor & HOD, SSIMS and RC" },
                      { label: "Specialization", value: "Diabetology, Infectious Disease, Internal Medicine, Critical Care" },
                      { label: "Qualifications", value: "MBBS, MD, FGID" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white rounded-lg p-4 border border-border">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                    <Link href="/dr-yeshavanth">
                      Full Profile <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dr. Shilpa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-accent/5 rounded-2xl border border-accent/15 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-1">
                  <div className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                    Obstetrics, Gynaecology &amp; Laparoscopy
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">Dr. Shilpa Nabapure</h3>
                  <p className="text-accent font-medium mb-4">MBBS, MS, FMAS, DMAS, Fellowship in USG</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Dr. Shilpa Nabapure is a distinguished Obstetrician and Gynaecologist with 13+ years of expertise in laparoscopic surgery and infertility management. A University Rank Holder in MS OBG, Vice President of the Davanagere OBG Society, and Member of the World Association of Laparoscopic Surgeons — her credentials place her among the very best in the field. Her approach is non-judgemental, patient-friendly, and rooted in empathy.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Experience", value: "13+ Years" },
                      { label: "Designation", value: "Professor & Unit Head, SSIMS and RC" },
                      { label: "Specialization", value: "High-risk Pregnancy, PCOS, Infertility, Laparoscopy, Menopause" },
                      { label: "Achievements", value: "University Rank Holder MS OBG | VP, Davanagere OBG Society | WALS Member" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white rounded-lg p-4 border border-border">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild style={{ backgroundColor: "hsl(var(--accent))" }} className="text-white hover:opacity-90 rounded-full px-6">
                    <Link href="/dr-shilpa">
                      Full Profile <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Schedule a Consultation?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Reach out today and our team will help you book an appointment with the right specialist.
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
