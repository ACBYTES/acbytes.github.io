'use client';

import { useState, useRef } from "react";
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Eye, DollarSign, BriefcaseBusiness, Filter, HelpingHand, Library } from "lucide-react"
import { AnimatedSuccessDialog } from "@/components/consultation-request-success-dialog"

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "CEO & Lead Automation Architect",
    bio: "15+ years in enterprise automation with expertise in AI and machine learning implementations.",
    email: "alex@acbytes.com",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Technical Director",
    bio: "Former Google engineer specializing in scalable automation solutions and cloud architecture.",
    email: "sarah@acbytes.com",
    linkedin: "#",
  },
  {
    name: "Michael Thompson",
    role: "Operations Analysis Lead",
    bio: "Expert in business process analysis with 12+ years optimizing workflows across industries.",
    email: "michael@acbytes.com",
    linkedin: "#",
  },
  {
    name: "Emily Davis",
    role: "AI Solutions Specialist",
    bio: "PhD in Computer Science, focused on implementing AI-driven automation in enterprise environments.",
    email: "emily@acbytes.com",
    linkedin: "#",
  },
]
export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = formRef.current;
    if (!form)
      return;

    if (!form.checkValidity())
      return;

    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    console.log(data);

    try {
      setLoading(true);
      const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfn8qQcIYLzCsf2Nw3g4A1WrTTAu9wo35JcBEzsDuupkfl-zA/formResponse";

      const formData = new URLSearchParams();
      formData.append("entry.1484754187", data["firstName"]);
      formData.append("entry.1473841677", data["lastName"]);
      formData.append("entry.1278843840", data["email"]);
      formData.append("entry.1802342268", data["company"]);
      formData.append("entry.53388809", data["phone"]);
      formData.append("entry.1311724580", data["message"]);

      const res = await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // required to bypass CORS, but it disables response visibility
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      // const result = await res.json();

      setOpen(true);
      form.reset();

      // if (result.success) {
      //   setOpen(true);
      //   form.reset(); // reset after successful submit
      // }
      // else {
      //   alert("Something went wrong. Please try again.");
      // }
    }
    catch (err) {
      alert("Error submitting form.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold">
              Let's <span className="gradient-text">Automate Together</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your operations? Get in touch with our team of automation experts and start your
              journey toward unprecedented efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll schedule a free consultation to analyze your automation potential.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} className="space-y-4"
                  method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input name="firstName" type="text" required={true} placeholder="First Name*" className="bg-gray-800 border-gray-700" />
                    <Input name="lastName" type="text" required={false} placeholder="Last Name" className="bg-gray-800 border-gray-700" />
                  </div>
                  <Input name="email" type="email" required={true} placeholder="Email Address*" className="bg-gray-800 border-gray-700" />
                  <Input name="company" required={true} type="text" placeholder="Company Name*" className="bg-gray-800 border-gray-700" />
                  <Input name="phone" required={true} type="tel" pattern="^\+\d{8,15}$" placeholder="+12345678900*" className="bg-gray-800 border-gray-700" />
                  <Textarea
                    name="message"
                    required={true}
                    placeholder="Tell us about your current manual processes and what you'd like to automate...*"
                    className="bg-gray-800 border-gray-700 min-h-[120px]"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                    {loading ? "Sending..." : "Schedule Consultation At No Cost"}
                  </Button>
                </form>
                <iframe
                  name="hidden_iframe"
                  style={{ display: "none !important", height: "0", maxHeight: "0" }}></iframe>
              </CardContent>
            </Card>

            <AnimatedSuccessDialog open={open} setOpen={setOpen}></AnimatedSuccessDialog>

            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span><a href="mailto:admin@acbytes.com">admin@acbytes.com</a></span>
                    </div>
                    {/* <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div> */}
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Worldwide & Canada</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose ACBYTES?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <div className="flex items-center space-x-3">
                        <Eye className="h-5 w-5 text-primary" />
                        <span>We spend time observing and learning your workflows from the inside</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span>Initial consultation and analysis at no cost</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-3">
                        <BriefcaseBusiness className="h-5 w-5 text-primary" />
                        <span>Proven track record with companies in different industries</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-3">
                        <Filter className="h-5 w-5 text-primary" />
                        <span>Average 70% reduction in manual workload</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-3">
                        <Library className="h-5 w-5 text-primary" />
                        <span>Custom solutions tailored to your needs</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-3">
                        <HelpingHand className="h-5 w-5 text-primary" />
                        <span>Ongoing support and optimization</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our team combines deep technical expertise with hands-on business process experience to deliver
                automation solutions that truly transform operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
