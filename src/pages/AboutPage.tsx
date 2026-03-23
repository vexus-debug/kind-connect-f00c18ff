import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, Target, Eye, Award, CheckCircle, Star, Clock, MapPin, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import clinicImg from "@/assets/clinic-interior.jpg";
import dentistImg from "@/assets/dentist-team.jpg";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";
import receptionDesk from "@/assets/gallery/reception-desk.jpg";
import dentalTeam from "@/assets/gallery/dental-team.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";
import dentistAtWork from "@/assets/gallery/dentist-at-work.jpg";
import anniversaryBanner from "@/assets/gallery/anniversary-banner.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stats = [
  { number: "5,000+", label: "Happy Patients", icon: Heart },
  { number: "3", label: "Branches", icon: MapPin },
  { number: "15+", label: "Specialists", icon: Stethoscope },
  { number: "24/7", label: "Emergency Care", icon: Clock },
];

const values = [
  { icon: Shield, title: "Advanced Technology", desc: "We invest in cutting-edge digital scanners, 3D imaging, and modern sterilization systems to ensure the most accurate diagnoses and comfortable treatments.", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Patient Comfort", desc: "Every procedure is designed around your comfort. Our pain-minimizing techniques and gentle approach ensure a stress-free experience every visit.", color: "bg-accent/10 text-accent" },
  { icon: Sparkles, title: "Expert Clinicians", desc: "Our team of internationally trained dentists and orthodontists bring years of specialized experience across cosmetic, restorative, and general dentistry.", color: "bg-primary/10 text-primary" },
  { icon: Users, title: "Family Focused", desc: "From your child's first dental visit to advanced procedures for adults, we provide comprehensive care tailored to every family member.", color: "bg-accent/10 text-accent" },
];

const milestones = [
  { year: "2023", title: "Founded in Port Harcourt", desc: "Opened our flagship clinic at 61 Stadium Road with state-of-the-art equipment.", image: clinicEntrance },
  { year: "2023", title: "Aba Branch Launch", desc: "Expanded to Abia State to serve more communities in the South East.", image: receptionDesk },
  { year: "2024", title: "Owerri Branch Opening", desc: "Brought modern dental care to Imo State with our third branch.", image: loungeArea },
  { year: "2024", title: "5,000+ Patients Served", desc: "Reached a milestone of over 5,000 happy patients across all branches.", image: anniversaryBanner },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="Who We Are"
        title="Your Trusted Partner in"
        highlight="Dental Health"
        description="Smile 365 Star Dental Clinic is a fast-growing dental care provider in Nigeria, delivering modern, technology-driven oral healthcare across Rivers, Abia, and Imo States."
        breadcrumb="About Us"
      />

      {/* Stats Banner */}
      <section className="relative -mt-12 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl border border-border shadow-elevated p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision — Offset Overlap Cards */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Driven by a <span className="text-primary">Greater Mission</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform" />
              <div className="relative bg-background rounded-3xl p-8 md:p-10 border border-border">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To help individuals and families achieve healthy, confident smiles through accessible, modern, and patient-centered dentistry. We combine advanced technology with compassionate care to deliver exceptional oral healthcare experiences.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group md:mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl transform -rotate-2 group-hover:-rotate-1 transition-transform" />
              <div className="relative bg-background rounded-3xl p-8 md:p-10 border border-border">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To become Nigeria's most trusted dental care provider, recognized for clinical excellence, innovative technology, and a relentless focus on patient satisfaction — making quality dental care accessible to every Nigerian.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section — Immersive Image Grid */}
      <section className="py-20 md:py-28 bg-gradient-mint overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Built on a Passion for <span className="text-primary">Better Smiles</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Smile 365 Star Dental Clinic was founded in 2023 with a clear mission: to bring world-class dental care closer to Nigerians. Starting with our flagship clinic in Port Harcourt, we quickly built a reputation for combining advanced dental technology with warm, patient-focused care.
                </p>
                <p>
                  Our founder recognized that many Nigerians lacked access to modern dental services — often traveling abroad for treatments that could be provided locally with the right equipment and expertise.
                </p>
                <p>
                  Today, with three thriving branches across Rivers, Abia, and Imo States, we continue to grow — driven by the smiles of thousands of satisfied patients.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-primary/10 rounded-xl px-5 py-3">
                  <span className="font-display text-xl font-bold text-primary">2023</span>
                  <span className="font-body text-sm text-muted-foreground ml-2">Founded</span>
                </div>
                <div className="bg-accent/10 rounded-xl px-5 py-3">
                  <span className="font-display text-xl font-bold text-accent">3</span>
                  <span className="font-body text-sm text-muted-foreground ml-2">States</span>
                </div>
                <div className="bg-primary/10 rounded-xl px-5 py-3">
                  <span className="font-display text-xl font-bold text-primary">100%</span>
                  <span className="font-body text-sm text-muted-foreground ml-2">Commitment</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <img src={clinicImg} alt="Modern clinic interior" className="rounded-2xl w-full h-48 md:h-56 object-cover shadow-card" />
                  <img src={waitingArea} alt="Comfortable waiting area" className="rounded-2xl w-full h-32 md:h-40 object-cover shadow-card" />
                </div>
                <div className="space-y-3 mt-6">
                  <img src={treatmentRoom} alt="Treatment room" className="rounded-2xl w-full h-32 md:h-40 object-cover shadow-card" />
                  <img src={dentistAtWork} alt="Dentist at work" className="rounded-2xl w-full h-48 md:h-56 object-cover shadow-card" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values — Full-Width Bento Grid */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">What Drives Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Everything we do is rooted in four guiding principles that shape how we care for you and your family.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-background rounded-2xl p-7 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`h-14 w-14 rounded-2xl ${v.color} flex items-center justify-center mb-5`}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section — Asymmetric Layout */}
      <section className="py-20 md:py-28 bg-gradient-mint overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            <motion.div {...fadeUp} className="lg:col-span-2">
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Team</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Expert Care, <span className="text-primary">Gentle Hands</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our clinic is staffed by highly trained dentists, orthodontists, and dental specialists who are passionate about delivering exceptional care.
              </p>
              <div className="space-y-4">
                {[
                  "International training & certifications",
                  "Cosmetic & orthodontic specialists",
                  "Continuous professional development",
                  "Patient-focused treatment planning",
                  "Gentle care & clear communication",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <img src={dentalTeam} alt="Our dental team" className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-card" />
                </div>
                <div className="space-y-3">
                  <img src={dentistImg} alt="Dentist team" className="rounded-2xl w-full h-[calc(50%-0.375rem)] object-cover shadow-card" />
                  <img src={dentistAtWork} alt="Dentist performing procedure" className="rounded-2xl w-full h-[calc(50%-0.375rem)] object-cover shadow-card" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline — Card-based */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Key <span className="text-primary">Milestones</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground font-display font-bold text-sm px-3 py-1 rounded-full">
                    {m.year}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 md:py-28 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUp}>
              <img src={loungeArea} alt="Our welcoming lounge" className="rounded-2xl w-full h-72 md:h-96 object-cover shadow-elevated" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Promise</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                What Makes Us <span className="text-primary">Different</span>
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Star, title: "No Compromises on Quality", desc: "We use only premium materials and certified equipment for every procedure." },
                  { icon: Shield, title: "Transparent Pricing", desc: "No hidden fees. We discuss costs upfront so you can make informed decisions." },
                  { icon: Award, title: "Satisfaction Guaranteed", desc: "Your comfort and results matter most. We stand behind every treatment." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground">{item.title}</h4>
                      <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join thousands of happy patients who trust Smile 365 Star for their dental care.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
