import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number").max(15),
  doctor: z.enum(["Dr. Yeshavanth G", "Dr. Shilpa Nabapure"], {
    required_error: "Please select a doctor",
  }),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

const timings = [
  {
    doctor: "Dr. Yeshavanth G",
    specialty: "General Medicine & Diabetology",
    colorClass: "bg-primary/10",
    textColor: "text-primary",
    sessions: [
      { days: "Monday – Saturday", slot: "1:00 PM – 3:00 PM", label: "Afternoon" },
      { days: "Monday – Saturday", slot: "5:00 PM – 9:00 PM", label: "Evening" },
      { days: "Sunday", slot: "Closed", label: "Holiday" },
    ],
  },
  {
    doctor: "Dr. Shilpa Nabapure",
    specialty: "Obstetrics & Gynaecology",
    colorClass: "bg-accent/10",
    textColor: "text-accent",
    sessions: [
      { days: "Monday – Saturday", slot: "1:00 PM – 3:00 PM", label: "Afternoon" },
      { days: "Monday – Saturday", slot: "5:00 PM – 7:00 PM", label: "Evening" },
      { days: "Sunday", slot: "Closed", label: "Holiday" },
    ],
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact & Appointments | Yashasvi Health Care, Davanagere";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Book an appointment at Yashasvi Health Care, Davanagere. OPD timings for Dr. Yeshavanth G and Dr. Shilpa Nabapure. Located at Vibha Residency, 7th Main Road, MCC A Block, Davanagere 577004."
      );
    }
  }, []);

  const form = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      preferredDate: "",
      message: "",
    },
  });

  async function onSubmit(data: AppointmentForm) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      toast({
        title: "Appointment Request Received",
        description: `Thank you, ${data.name}. We will contact you shortly to confirm your appointment with ${data.doctor}.`,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem sending your request. Please try contacting us by phone.",
      });
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-5">
              Contact &amp; Appointments
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Book a Consultation at Yashasvi Health Care
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Walk in during OPD hours or fill the form below to request an appointment. Our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div {...fadeUp} className="space-y-8">
              {/* Clinic Address */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-serif text-lg font-bold text-foreground">Clinic Address</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Vibha Residency,<br />
                    7th Main Road, MCC A Block,<br />
                    Davanagere – 577004,<br />
                    Karnataka, India
                  </p>
                </CardContent>
              </Card>

              {/* OPD Timings */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-lg font-bold text-foreground">OPD Timings</h2>
                </div>
                <div className="space-y-4">
                  {timings.map((t) => (
                    <Card key={t.doctor} className="border-border">
                      <CardContent className="p-5">
                        <div className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${t.colorClass} ${t.textColor}`}>
                          {t.specialty}
                        </div>
                        <h3 className="font-semibold text-foreground mb-3">{t.doctor}</h3>
                        <div className="space-y-2">
                          {t.sessions.map((s) => (
                            <div key={s.label + s.days} className="flex justify-between items-center text-sm py-1.5 border-b border-border/50 last:border-0">
                              <div>
                                <span className="font-medium text-foreground">{s.days}</span>
                                <span className="text-muted-foreground ml-2 text-xs">({s.label})</span>
                              </div>
                              <span
                                className={`font-semibold ${s.slot === "Closed" ? "text-muted-foreground" : t.textColor}`}
                              >
                                {s.slot}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <h2 className="font-serif text-lg font-bold text-foreground mb-4">Contact Details</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>99722 57307</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>contact@yashasvihealthcare.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <div>
                <h2 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Find Us on the Map
                </h2>
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm" style={{ height: 300 }}>
                  <iframe
                    title="Yashasvi Health Care Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.1278432052!2d75.91827931527505!3d14.465012479915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba262a3b96cdb5%3A0xf6c96e8b15d24d02!2sMCC%20A%20Block%2C%20Davanagere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card className="border-border shadow-md">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Request Received!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We will contact you shortly to confirm your appointment.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Request an Appointment</h2>
                      <p className="text-muted-foreground text-sm mb-6">
                        Fill the form below and we will call you back to confirm.
                      </p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    data-testid="input-name"
                                    placeholder="Your full name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    data-testid="input-phone"
                                    placeholder="+91 98765 43210"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="doctor"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Select Doctor</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-doctor">
                                      <SelectValue placeholder="Choose a specialist" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Dr. Yeshavanth G">Dr. Yeshavanth G — General Medicine &amp; Diabetology</SelectItem>
                                    <SelectItem value="Dr. Shilpa Nabapure">Dr. Shilpa Nabapure — OBG &amp; Gynaecology</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="preferredDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Date</FormLabel>
                                <FormControl>
                                  <Input
                                    data-testid="input-date"
                                    type="date"
                                    min={new Date().toISOString().split("T")[0]}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea
                                    data-testid="input-message"
                                    placeholder="Briefly describe your concern or reason for visit..."
                                    className="resize-none"
                                    rows={3}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            data-testid="button-submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-base font-semibold"
                          >
                            Request Appointment
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
