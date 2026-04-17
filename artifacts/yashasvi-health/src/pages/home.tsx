import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Activity, Heart, ArrowRight, CheckCircle2, Phone, Clock } from "lucide-react";
import doctorsBothPath from "@assets/E_1776442012787.png";
import drShilpaPath from "@assets/Obstetrician_and_Gynaecologist,_Laparoscopic_surgeon,_Infertil_1776442012796.png";

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
                  src={doctorsBothPath} 
                  alt="Dr. Yeshavanth G and Dr. Shilpa Nabapure" 
                  className="w-full h-auto rounded-[1.5rem] object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-in slide-in-from-left-8 duration-700 delay-500">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">25+ Years</p>
                    <p className="text-xs text-muted-foreground">Combined Experience</p>
                  </div>
                </div>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <div className="p-8 sm:p-10 relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Activity className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">Dr. Yeshavanth G</h3>
                    <p className="text-primary font-medium">General Physician & Diabetologist</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  Professor and HOD with over 15 years of experience specializing in internal medicine, advanced diabetology, infectious diseases, and critical care.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Diabetes Management", "Infectious Diseases", "Internal Medicine", "Critical Care"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full group-hover:shadow-md transition-all">
                  <Link href="/dr-yeshavanth">View Profile & Services</Link>
                </Button>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <div className="p-8 sm:p-10 relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Stethoscope className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">Dr. Shilpa Nabapure</h3>
                    <p className="text-accent font-medium">Obstetrician & Gynaecologist</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  Professor and Unit Head with over 13 years of expertise in high-risk pregnancies, laparoscopic surgery, and infertility treatments.
                </p>
                <ul className="space-y-3 mb-8">
                  {["High-Risk Pregnancy", "Laparoscopic Surgery", "Infertility Treatments", "PCOS & Menopause"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white rounded-full group-hover:shadow-md transition-all">
                  <Link href="/dr-shilpa">View Profile & Services</Link>
                </Button>
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
              <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-secondary relative">
                {/* Placeholders for clinic imagery or we use doctors image again gently */}
                <img 
                  src={drShilpaPath} 
                  alt="Dr Shilpa Clinic Environment" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xl font-serif font-medium mb-2">Modern Facilities</p>
                    <p className="text-white/80 text-sm">Equipped with advanced diagnostic and treatment technology.</p>
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
                <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-primary-foreground" /> +91 0000000000</p>
              </div>
            </div>
            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-medium whitespace-nowrap shadow-xl">
              <Link href="/contact">Book Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
