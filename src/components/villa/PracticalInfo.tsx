import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  CreditCard,
  Shield,
  AlertCircle,
  Sparkles,
  BanIcon,
} from "lucide-react";

const infoSections = [
  {
    icon: Clock,
    title: "Check-in & Check-out",
    items: [
      "Check-in: from 3:00 PM",
      "Check-out: by 11:00 AM",
      "Early check-in possible upon request",
      "Late check-out available for extra fee",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment & Deposit",
    items: [
      "50% deposit upon booking",
      "Remaining amount 30 days before arrival",
      "Deposit: 10,000 THB (refunded at checkout)",
      "We accept Visa, MasterCard & bank transfer",
    ],
  },
  {
    icon: Sparkles,
    title: "Cleaning & Service",
    items: [
      "Daily housekeeping included",
      "Daily pool service",
      "Garden maintenance 2x/week",
      "Extra cleaning can be arranged",
    ],
  },
  {
    icon: Shield,
    title: "Security",
    items: [
      "CCTV cameras (outdoor only)",
      "Secure safe in each bedroom",
      "Smoke detectors in all rooms",
      "24/7 phone support",
    ],
  },
];

const rules = [
  { allowed: false, text: "No smoking indoors" },
  { allowed: false, text: "No pets allowed" },
  { allowed: false, text: "No parties or events" },
  { allowed: true, text: "Max 8 guests" },
  { allowed: true, text: "Children welcome" },
  { allowed: true, text: "Smoking allowed on terrace" },
];

export function PracticalInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="info" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ocean font-medium text-sm tracking-widest uppercase mb-4 block">
            Information
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Practical Information
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know before your stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {infoSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 bg-card rounded-2xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ocean/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-ocean" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* House Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 md:p-8 bg-secondary/50 rounded-2xl border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-sunset" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground">
              House Rules
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  rule.allowed ? "bg-palm/5" : "bg-destructive/5"
                }`}
              >
                {rule.allowed ? (
                  <span className="text-palm">✓</span>
                ) : (
                  <BanIcon className="w-4 h-4 text-destructive" />
                )}
                <span className="text-foreground text-sm">{rule.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
