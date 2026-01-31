import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import poolNight from "@/assets/pool-night.jpg";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We will get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={poolNight}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ocean-light font-medium text-sm tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
              Ready to book your paradise?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Have questions or want to book the villa? Contact us and we'll help 
              you plan your dream trip to Thailand.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:info@villasiam.com"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Email</div>
                  <div className="font-medium">info@villasiam.com</div>
                </div>
              </a>

              <a
                href="tel:+66123456789"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Phone</div>
                  <div className="font-medium">+66 123 456 789</div>
                </div>
              </a>

              <a
                href="https://wa.me/66123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">WhatsApp</div>
                  <div className="font-medium">Chat with us</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-strong"
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Send Inquiry
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Check-in
                    </label>
                    <Input
                      name="checkin"
                      type="date"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Check-out
                    </label>
                    <Input
                      name="checkout"
                      type="date"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Number of Guests
                  </label>
                  <Input
                    name="guests"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="1-8 guests"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your wishes..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-ocean text-primary-foreground hover:opacity-90 transition-opacity gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
