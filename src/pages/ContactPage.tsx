import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'bg-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@yogaconvent.edu.in', 'admissions@yogaconvent.edu.in'],
      color: 'bg-green-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Yoga Convent School', '123 Education Lane, City, State - 110001'],
      color: 'bg-purple-500',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 8:00 AM - 1:00 PM'],
      color: 'bg-orange-500',
    },
  ];

  const admissionSteps = [
    {
      step: '1',
      title: 'Enquiry',
      description: 'Contact us via phone, email, or visit our school to get information about admission process and requirements.',
    },
    {
      step: '2',
      title: 'Application Form',
      description: 'Collect and fill the admission application form with required details and attach necessary documents.',
    },
    {
      step: '3',
      title: 'Interaction',
      description: 'Parents and child meet with our faculty for a friendly interaction to understand the child\'s learning needs.',
    },
    {
      step: '4',
      title: 'Admission',
      description: 'Upon successful completion, admission is confirmed and the child becomes part of our school family.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-95">
              Get in Touch for Admissions, Enquiries, or Any Questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`${info.color} text-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our School</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-6">
                  <MapPin className="h-24 w-24 text-muted-foreground" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">School Address</h4>
                    <p className="text-muted-foreground">
                      Yoga Convent School<br />
                      123 Education Lane<br />
                      Near City Center<br />
                      City, State - 110001<br />
                      India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How to Reach</h4>
                    <p className="text-muted-foreground text-sm">
                      Our school is easily accessible by public transport and has ample parking space for visitors. The nearest metro station is just 2 km away.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Admission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Documents Required for Admission</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <span>Birth Certificate (Original & Photocopy)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <span>Transfer Certificate (if applicable)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <span>Previous Year Report Card</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <span>Aadhaar Card (Student & Parents)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <span>Passport Size Photographs (4 copies)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                      ✓
                    </div>
                    <span>Address Proof (Electricity Bill/Rent Agreement)</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> All documents should be self-attested. Original documents will be verified and returned at the time of admission.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What classes does Yoga Convent School offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer classes from Class 1 to Class 8, providing quality education with a focus on overall personality development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is the student-teacher ratio?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain an optimal student-teacher ratio to ensure personalized attention for each child. Our class sizes are kept small for better learning outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide transport facilities?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide safe and secure school transport facilities covering various routes across the city.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When does the admission process start?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Admissions typically open in January-February for the new academic session starting in April. However, you can contact us anytime for enquiries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to schedule a visit or learn more about our admission process. We look forward to welcoming your child to Yoga Convent School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
