import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to find the perfect helper for your family? Fill out the form below or visit us at our office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl border border-border shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-gray-50 border-gray-200 focus:border-secondary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-primary">Phone Number</label>
                  <Input id="phone" placeholder="+65 9123 4567" className="bg-gray-50 border-gray-200 focus:border-secondary" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                <Input id="email" type="email" placeholder="you@example.com" className="bg-gray-50 border-gray-200 focus:border-secondary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-primary">Service Required</label>
                <select id="service" className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-secondary">
                  <option>New Helper</option>
                  <option>Transfer Helper</option>
                  <option>Elderly Care</option>
                  <option>Childcare</option>
                  <option>Work Permit Renewal</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">Message / Requirements</label>
                <Textarea id="message" placeholder="Tell us about your family needs (e.g. number of children, pets, specific care requirements)..." className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-secondary" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg">
                Send Enquiry
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-8">
            <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Visit Us</h4>
                    <p className="text-muted-foreground">123 Bukit Timah Road, #02-05<br />Singapore 589632</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Call Us</h4>
                    <p className="text-muted-foreground">+65 1234 5678</p>
                    <p className="text-sm text-muted-foreground">(Mon-Sun: 10am - 7pm)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email Us</h4>
                    <p className="text-muted-foreground">hello@aminemployment.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-secondary" />
                <h3 className="font-heading text-2xl font-bold">Operating Hours</h3>
              </div>
              <ul className="space-y-2 text-white/80">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & PH</span>
                  <span>By Appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
