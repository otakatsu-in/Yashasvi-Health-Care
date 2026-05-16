import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, BookOpen, Video } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const articles = [
  {
    id: 1,
    category: "Diabetology",
    categoryColor: "primary",
    title: "Understanding Diabetes: Types, Causes & What It Means For You",
    intro:
      "Diabetes is not a single disease — it is a group of metabolic disorders characterised by high blood glucose. Understanding the differences between Type 1, Type 2, and Gestational Diabetes is the first step to effective management.",
    content: `Type 1 Diabetes is an autoimmune condition in which the body's immune system attacks insulin-producing cells in the pancreas. It typically manifests in childhood or early adulthood and requires lifelong insulin therapy.

Type 2 Diabetes, the most common form, develops when the body becomes resistant to insulin or does not produce enough of it. Lifestyle factors including diet, physical inactivity, and obesity are major risk factors.

Gestational Diabetes develops during pregnancy and usually resolves after delivery, though it significantly increases the risk of Type 2 Diabetes later in life for both mother and child.

Key warning signs include excessive thirst, frequent urination, unexplained weight loss, blurred vision, and slow-healing wounds. If you experience any of these, consult Dr. Yeshavanth G at Yashasvi Health Care for accurate diagnosis and personalised treatment.`,
    doctor: "Dr. Yeshavanth G",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Diabetology",
    categoryColor: "primary",
    title: "Managing Diabetes: Diet, Lifestyle & Medication",
    intro:
      "Effective diabetes management is about more than just medication. A structured approach involving diet, physical activity, self-monitoring, and regular medical supervision can dramatically improve quality of life.",
    content: `Diet is central to diabetes control. A low-glycaemic diet rich in fibre, lean proteins, and healthy fats helps stabilise blood sugar. Avoid refined sugars, white rice in large quantities, and ultra-processed foods.

Physical activity — even 30 minutes of moderate walking per day — significantly improves insulin sensitivity. It is one of the most powerful non-pharmaceutical interventions available.

Medications range from oral antidiabetic drugs (Metformin, Glipizide, DPP-4 inhibitors) to injectable insulin and newer GLP-1 receptor agonists. The right regimen is tailored individually.

Self-monitoring of blood glucose using a glucometer, and regular HbA1c tests (every 3 months), are essential to understand how well your diabetes is controlled. Target HbA1c for most adults: below 7%.

Regular follow-up with Dr. Yeshavanth G ensures your treatment plan is always optimal and complications are caught early.`,
    doctor: "Dr. Yeshavanth G",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Infectious Disease",
    categoryColor: "primary",
    title: "Common Infectious Diseases in Karnataka: Recognition & Prevention",
    intro:
      "Karnataka's climate makes it susceptible to several vector-borne and waterborne diseases. Early recognition of symptoms and timely medical care are essential to prevent complications.",
    content: `Dengue Fever is transmitted by the Aedes mosquito and peaks during monsoon season. Symptoms include high fever, severe headache, pain behind the eyes, muscle aches, rash, and in severe cases — bleeding tendencies. No specific antiviral exists; supportive treatment and close monitoring are critical.

Malaria, caused by Plasmodium parasites, presents with cyclical fever, chills, and rigors. Prompt testing and appropriate antimalarial therapy are vital. Self-medication without diagnosis is dangerous.

Typhoid (Enteric Fever) spreads through contaminated food and water. It causes prolonged fever, abdominal pain, and headache. Blood culture remains the gold standard for diagnosis.

Leptospirosis often occurs after floods and presents as an influenza-like illness that can progress to liver or kidney failure.

Prevention tips: use mosquito repellents and nets, drink boiled or filtered water, wash hands regularly, and avoid stagnant water near your home.

If you have a fever lasting more than 2-3 days, please do not self-medicate. Consult Dr. Yeshavanth G for accurate diagnosis.`,
    doctor: "Dr. Yeshavanth G",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Heart Health",
    categoryColor: "primary",
    title: "The Link Between Diabetes and Heart Disease",
    intro:
      "Diabetic patients are two to four times more likely to develop cardiovascular disease. Understanding this connection — and how to manage both conditions together — can save your life.",
    content: `Diabetes and heart disease are deeply intertwined. High blood glucose over time damages blood vessels and the nerves controlling the heart, significantly increasing the risk of coronary artery disease, heart attack, stroke, and heart failure.

Key cardiovascular risk factors in diabetics include hypertension (high blood pressure), dyslipidaemia (abnormal cholesterol), obesity, smoking, and a sedentary lifestyle.

Managing cardiovascular risk in diabetic patients requires more than just blood sugar control. Blood pressure should be maintained below 130/80 mmHg, LDL cholesterol below 70 mg/dL, and regular ECG evaluations.

Warning signs of a cardiac event include chest pain or pressure, shortness of breath, pain radiating to the arm or jaw, sudden sweating, and dizziness. Call for emergency help immediately if these occur.

At Yashasvi Health Care, Dr. Yeshavanth G integrates cardiovascular risk management into every diabetic patient's care plan.`,
    doctor: "Dr. Yeshavanth G",
    readTime: "6 min read",
  },
  {
    id: 5,
    category: "Women's Health",
    categoryColor: "accent",
    title: "PCOS Explained: Symptoms, Impact & Treatment Options",
    intro:
      "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age, yet it remains widely misunderstood. Early diagnosis and proper management can prevent long-term complications.",
    content: `PCOS is characterised by hormonal imbalance, irregular or absent periods, multiple small cysts on the ovaries (as seen on ultrasound), and excess androgen levels (leading to acne, excess hair growth, or hair thinning).

The exact cause is unknown but involves genetics, insulin resistance, and hormonal dysregulation. Women with PCOS have a higher risk of type 2 diabetes, cardiovascular disease, endometrial cancer, and infertility.

Treatment is tailored to the patient's symptoms and goals. For those seeking pregnancy, ovulation induction with medications like Letrozole or Clomiphene is first-line. For those not seeking pregnancy, combined oral contraceptives (COCs) regulate cycles and manage androgen excess.

Lifestyle modification — particularly weight loss of even 5-10% body weight — can restore normal menstrual cycles and improve insulin sensitivity in overweight women with PCOS.

If you have irregular periods, facial hair, acne, or difficulty conceiving, consult Dr. Shilpa Nabapure for a comprehensive PCOS evaluation.`,
    doctor: "Dr. Shilpa Nabapure",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Pregnancy",
    categoryColor: "accent",
    title: "High-Risk Pregnancy: What It Means and How We Support You",
    intro:
      "A high-risk pregnancy requires additional monitoring and specialist care. Understanding the risk factors and what to expect can help you navigate this journey with confidence.",
    content: `A pregnancy is classified as high-risk when certain conditions increase the likelihood of complications for the mother, baby, or both. Common causes include advanced maternal age (above 35), pre-existing conditions like diabetes or hypertension, twin or multiple pregnancies, obesity, previous pregnancy complications, and thyroid disorders.

High-risk pregnancy management requires more frequent antenatal visits, closer ultrasound monitoring, and sometimes early hospital admission. Dr. Shilpa Nabapure's expertise in high-risk pregnancies ensures that every patient receives individualised, evidence-based care.

Key warning signs that require immediate attention during pregnancy: severe headache, vision changes, sudden swelling of the face or hands, reduced fetal movements, vaginal bleeding, or severe abdominal pain.

At Yashasvi Health Care, we offer comprehensive antenatal monitoring including obstetric ultrasound, anomaly scan, Doppler studies, and specialist consultations — all designed to ensure the best possible outcomes.

Do not hesitate to come in if you have concerns. Early intervention saves lives.`,
    doctor: "Dr. Shilpa Nabapure",
    readTime: "6 min read",
  },
  {
    id: 7,
    category: "Menopause",
    categoryColor: "accent",
    title: "Understanding Menopause: Managing the Transition with Confidence",
    intro:
      "Menopause is a natural phase of a woman's life, but its symptoms — hot flushes, sleep disturbances, mood changes — can significantly impact quality of life. Effective management options are available.",
    content: `Menopause occurs when menstrual periods permanently stop, typically between ages 45–55. The transition (perimenopause) can begin several years earlier and is characterised by irregular periods, hot flushes, night sweats, vaginal dryness, mood changes, and sleep difficulties.

Long-term effects of oestrogen deficiency include osteoporosis (bone thinning), cardiovascular risk, and urogenital changes. These are manageable with proper care.

Hormone Replacement Therapy (HRT) remains the most effective treatment for menopausal symptoms and is safe for most healthy women under 60. The type, dose, and duration are individualised.

Non-hormonal options include certain antidepressants (SSRIs), gabapentin, and lifestyle measures such as regular exercise, a calcium-rich diet, and avoiding triggers like spicy food and alcohol.

Bone health is a priority — regular weight-bearing exercise and adequate calcium (1200mg/day) and Vitamin D supplementation are essential post-menopause.

Dr. Shilpa Nabapure provides compassionate, evidence-based care for women navigating this transition.`,
    doctor: "Dr. Shilpa Nabapure",
    readTime: "6 min read",
  },
];

const videos = [
  { title: "Diabetes Management Tips — Dr. Yeshavanth G", duration: "Coming Soon", doctor: "Dr. Yeshavanth G" },
  { title: "Understanding PCOS — Dr. Shilpa Nabapure", duration: "Coming Soon", doctor: "Dr. Shilpa Nabapure" },
  { title: "When to See a Doctor for Fever — Dr. Yeshavanth G", duration: "Coming Soon", doctor: "Dr. Yeshavanth G" },
  { title: "Laparoscopic Surgery: What to Expect — Dr. Shilpa Nabapure", duration: "Coming Soon", doctor: "Dr. Shilpa Nabapure" },
];

export default function Education() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Patient Education — Health Articles | Yashasvi Health Care Davanagere";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Read expert health articles from Dr. Yeshavanth G and Dr. Shilpa Nabapure on diabetes, infectious disease, PCOS, pregnancy, menopause, and more."
      );
    }
  }, []);

  const categories = ["All", "Diabetology", "Infectious Disease", "Heart Health", "Women's Health", "Pregnancy", "Menopause"];

  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-5">
              Patient Education
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Health Knowledge, From Our Specialists to You
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Evidence-based health articles from Dr. Yeshavanth G and Dr. Shilpa Nabapure — designed to help you understand your health and make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div {...fadeUp} className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filtered.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          article.categoryColor === "primary"
                            ? "bg-primary/10 text-primary"
                            : "text-white"
                        }`}
                        style={
                          article.categoryColor === "accent"
                            ? { backgroundColor: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))" }
                            : {}
                        }
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h2 className="font-serif text-lg font-bold text-foreground mb-3 leading-snug">{article.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.intro}</p>

                    {expandedArticle === article.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4 border-t border-border pt-4"
                      >
                        {article.content}
                      </motion.div>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{article.doctor}</span>
                      </div>
                      <button
                        data-testid={`article-toggle-${article.id}`}
                        onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                        className={`flex items-center gap-1 text-sm font-medium ${
                          article.categoryColor === "primary" ? "text-primary" : ""
                        }`}
                        style={article.categoryColor === "accent" ? { color: "hsl(var(--accent))" } : {}}
                      >
                        {expandedArticle === article.id ? (
                          <>
                            Read Less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Read More <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-muted/20 border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Educational Videos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Short-form health videos from our specialists. Coming soon — check back for updates.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {videos.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full border-border">
                  <CardContent className="p-5">
                    <div className="bg-primary/10 rounded-lg aspect-video flex items-center justify-center mb-4">
                      <Video className="w-8 h-8 text-primary/40" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">{v.title}</h3>
                    <p className="text-xs text-muted-foreground">{v.duration}</p>
                    <p className="text-xs text-muted-foreground mt-1">{v.doctor}</p>
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
              Have a Specific Health Question?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              The best answers come from a personal consultation. Book an appointment with the right specialist today.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 font-semibold">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
