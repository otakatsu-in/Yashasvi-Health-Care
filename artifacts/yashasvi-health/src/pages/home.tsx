import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Activity, Heart, ArrowRight, CheckCircle2, Phone, Clock } from "lucide-react";
import oldCombinedPath from "@assets/E_1776442012787.png";
import drYeshavanthPath from "@assets/WhatsApp_Image_2026-04-15_at_11.12.41_(1)_1776442797661.jpeg";
import drShilpaPath from "@assets/WhatsApp_Image_2026-04-15_at_11.12.41_1776442797662.jpeg";

export default function Home() {
  useEffect(() => {
    document.title = "Yashasvi Health Care - Best Specialist Clinic in Davanagere, Karnataka";
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Trusted Specialist Care in Davanagere
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground mb-6 leading-tight">
                Expert Medical Care With <span className="text-primary italic">Compassion</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Yashasvi Health Care brings together highly credentialed specialists to provide comprehensive, evidence-based treatments in a calming environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
                  <Link href="/contact">Book an Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-primary/5 text-primary">
                  <Link href="/about">Meet Our Doctors</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[2.5rem] blur-2xl z-0"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl bg-white z-10 p-2">
                <img 
                  src={oldCombinedPath} 
                  alt="Dr. Yeshavanth G and Dr. Shilpa Nabapure" 
                  className="w-full h-auto rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-full shadow-xl border border-gray-100 flex items-center gap-3 whitespace-nowrap">
                <Heart className="h-5 w-5 text-primary" />
                <p className="text-sm font-bold text-foreground">25+ Years Combined Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Section: Doctors */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Medical Directors</h2>
            <p className="text-lg text-muted-foreground">
              Highly qualified specialists dedicated to your well-being, bringing academic excellence to everyday patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dr. Yeshavanth Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-0">
                {/* Photo column */}
                <div className="w-36 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={drYeshavanthPath}
                    alt="Dr. Yeshavanth G"
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: 200 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
                </div>
                {/* Content column */}
                <div className="flex-1 p-7 flex flex-col">
                  <div className="mb-1">
                    <h3 className="text-xl font-serif font-bold text-foreground">Dr. Yeshavanth G</h3>
                    <p className="text-primary font-medium text-sm mb-1">General Physician &amp; Diabetologist</p>
                    <p className="text-xs font-medium text-muted-foreground">MBBS, MD, FGID</p>
                  </div>
                  <div className="my-3 py-2 px-3 bg-primary/8 rounded-lg border border-primary/15 inline-flex items-center gap-2 self-start">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-primary">15+ Years Experience</span>
                  </div>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {["Diabetes Management", "Infectious Diseases", "Internal Medicine", "Critical Care"].map((item) => (
                      <li key={item} className="flex items-center text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                    <Link href="/dr-yeshavanth">View Profile <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Dr. Shilpa Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-0">
                {/* Photo column */}
                <div className="w-36 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={drShilpaPath}
                    alt="Dr. Shilpa Nabapure"
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: 200 }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, hsl(var(--background) / 0.3))" }} />
                </div>
                {/* Content column */}
                <div className="flex-1 p-7 flex flex-col">
                  <div className="mb-1">
                    <h3 className="text-xl font-serif font-bold text-foreground">Dr. Shilpa Nabapure</h3>
                    <p className="text-sm font-medium mb-1" style={{ color: "hsl(var(--accent))" }}>Obstetrician &amp; Gynaecologist</p>
                    <p className="text-xs font-medium text-muted-foreground">MBBS, MS, FMAS, DMAS</p>
                  </div>
                  <div className="my-3 py-2 px-3 rounded-lg border inline-flex items-center gap-2 self-start" style={{ backgroundColor: "hsl(var(--accent) / 0.08)", borderColor: "hsl(var(--accent) / 0.2)" }}>
                    <Stethoscope className="w-4 h-4" style={{ color: "hsl(var(--accent))" }} />
                    <span className="text-xs font-bold" style={{ color: "hsl(var(--accent))" }}>13+ Years Experience</span>
                  </div>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {["High-Risk Pregnancy", "Laparoscopic Surgery", "Infertility Treatments", "PCOS & Menopause"].map((item) => (
                      <li key={item} className="flex items-center text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 mr-2 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="sm" className="text-white rounded-full hover:opacity-90" style={{ backgroundColor: "hsl(var(--accent))" }}>
                    <Link href="/dr-shilpa">View Profile <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Why Choose Yashasvi Health Care?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that excellent medical care requires both deep academic knowledge and a compassionate, non-judgemental approach. Our clinic is designed to provide you with expert care without the stress of a large hospital.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Academic Excellence", desc: "Both directors serve as Professors at SSIMS & RC." },
                  { title: "Comprehensive Care", desc: "From general medicine to complex gynecological surgeries." },
                  { title: "In-House Facilities", desc: "Laboratory, pharmacy, and ultrasonography under one roof." },
                  { title: "Patient-First Approach", desc: "Unrushed consultations and compassionate listening." }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                    <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={drYeshavanthPath}
                    alt="Dr. Yeshavanth G"
                    className="w-full h-56 object-cover object-top"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img
                    src={drShilpaPath}
                    alt="Dr. Shilpa Nabapure"
                    className="w-full h-56 object-cover object-top"
                  />
                </div>
                <div className="col-span-2 bg-primary rounded-xl p-4 flex items-center justify-around">
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-white">15+</p>
                    <p className="text-xs text-white/80">Years — Dr. Yeshavanth</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-white">13+</p>
                    <p className="text-xs text-white/80">Years — Dr. Shilpa</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-white">28+</p>
                    <p className="text-xs text-white/80">Combined Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OPD Timings CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[200%] rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Ready to consult our specialists?</h2>
              <div className="flex flex-col gap-2 text-white/80">
                <p className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary-foreground" /> Mon - Sat: 1:00 PM - 3:00 PM & 5:00 PM - 9:00 PM</p>
                <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-primary-foreground" /> 99722 57307</p>
              </div>
            </div>
            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-medium whitespace-nowrap shadow-xl">
              <a href="https://wa.me/919972257307?text=Hi%2C%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noreferrer">Book Your Visit</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
