import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: October 24, 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Ellis App Development, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ellis App Development provides web and mobile application development services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Custom web application development</li>
                  <li>Mobile application development (iOS and Android)</li>
                  <li>Application maintenance and support</li>
                  <li>Consulting and technical advisory services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Project Engagement</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All development projects are subject to a separate written agreement that will include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Project scope and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Payment terms and schedule</li>
                  <li>Intellectual property rights</li>
                  <li>Support and maintenance terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise agreed in writing, upon full payment, you will own the intellectual property rights to the custom code developed specifically for your project. Pre-existing code, frameworks, libraries, and tools remain the property of their respective owners and are typically licensed under open-source or commercial licenses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Standard payment terms include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Payment schedule as outlined in the project agreement</li>
                  <li>Invoices are due within 14 days of receipt</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Work may be suspended for overdue payments</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Warranties and Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to deliver high-quality work but cannot guarantee that the services will be error-free or uninterrupted. The services are provided "as is" without warranties of any kind, except as explicitly stated in your project agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Ellis App Development shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific services in question.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We agree to maintain the confidentiality of your proprietary information and will not disclose it to third parties without your consent, except as required by law or as necessary to provide our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project engagement as outlined in the project agreement. Termination terms, including payment for work completed and return of materials, will be specified in your project agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:{" "}
                  <a href="mailto:blain@ellisappdev.co.uk" className="text-primary hover:underline">
                    blain@ellisappdev.co.uk
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

