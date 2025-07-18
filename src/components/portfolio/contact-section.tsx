import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Send, Linkedin, Github, Mail, X } from "lucide-react"

export function ContactSection() {
  const form = useRef(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_2pj9x3w",
        "template_4kg60ek",
        form.current!,
        "V0O0S1s0HHqpfuz84"
      )
      .then(() => {
        setSent(true)
        form.current?.reset()
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d18] to-black text-white overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-60 sm:w-72 h-60 sm:h-72 bg-fuchsia-600 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse-slower" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate on innovative AI projects? Let’s discuss how we can work together.
          </p>
        </div>

        {sent && (
          <div className="fixed bottom-6 left-6 z-50">
            <Card className="bg-white/10 backdrop-blur-xl text-green-400 border border-green-500 px-5 py-3 shadow-lg flex items-center gap-3.5 rounded-lg">
              <span className="font-semibold text-sm">✅ Message sent successfully!</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSent(false)}
                className="hover:bg-white/20 text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="space-y-5">
            <Card className="card-glass p-4 sm:p-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-gradient-primary">
                  <MapPin className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Location</h4>
                  <p className="text-muted-foreground text-sm leading-snug">
                    Gat 1, Bajrang Housing Society,<br />
                    Rupeenagar, Talwade, Pimpri-Chinchwad,<br />
                    Maharashtra 411062, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/hUwKof5bPqCDiDVB7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow hover:opacity-90 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-white/10 shadow-sm h-56">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.799438936455!2d73.7851711!3d18.6747392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQwJzI5LjEiTiA3M8KwNDcnMDYuNiJF!5e0!3m2!1sen!2sin!4v1752599500990!5m2!1sen!2sin"
                ></iframe>
              </div>
            </Card>

            <div className="flex gap-3 pt-2">
              <a
                href="mailto:yashwantkarnawat@gmail.com"
                className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:scale-110 hover:shadow-lg transition-transform duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/yashwant-karnawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:scale-110 hover:shadow-lg transition-transform duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/yashwantk21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:scale-110 hover:shadow-lg transition-transform duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <Card className="card-glass p-4 sm:p-5 h-fit">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="bg-secondary/50 border-border focus:border-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    name="from_email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-secondary/50 border-border focus:border-primary text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <Input
                  name="subject"
                  placeholder="Project Collaboration / Job Opportunity / Inquiry"
                  required
                  className="bg-secondary/50 border-border focus:border-primary text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or how we can work together..."
                  rows={4}
                  required
                  className="bg-secondary/50 border-border focus:border-primary text-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm py-4 hover:scale-105 transition-transform duration-300 shadow-md"
                disabled={loading}
              >
                {loading ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
