import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <div className="prose max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our Text-to-JSON Prompt Converter service, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily use our service for personal and commercial purposes under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>Under this license you may not modify or copy the service</li>
                <li>You may not use the service for any commercial purpose without explicit permission</li>
                <li>You may not attempt to reverse engineer any software contained on our service</li>
                <li>You may not remove any copyright or other proprietary notations</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-700 mb-4">
                You agree to use our service responsibly and in accordance with these guidelines:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Do not use the service for illegal or unauthorized purposes</li>
                <li>Do not input malicious code or content that could harm other users</li>
                <li>Do not attempt to overwhelm our servers with excessive requests</li>
                <li>Do not use automated tools to scrape or harvest data from our service</li>
                <li>Respect intellectual property rights of others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide reliable service, but please note:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Service availability is not guaranteed and may be interrupted</li>
                <li>We may modify or discontinue the service at any time</li>
                <li>Maintenance may temporarily affect service availability</li>
                <li>We are not liable for any downtime or service interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All text processing happens locally in your browser</li>
                <li>We do not permanently store your input text or generated JSON</li>
                <li>Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link> for detailed information</li>
                <li>You are responsible for the content you input into our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The information on this service is provided on an "as is" basis:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We make no representations or warranties of any kind</li>
                <li>Generated JSON output may not be perfect and should be reviewed</li>
                <li>You use this service at your own risk</li>
                <li>We are not responsible for any decisions made based on generated output</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall our company or its suppliers be liable for any damages:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Loss of data or profits arising out of the use of our service</li>
                <li>Interruption of business or any other commercial damages</li>
                <li>Damages resulting from the use or inability to use our service</li>
                <li>Even if we have been advised of the possibility of such damages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at our <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact page</Link> or email us at legal@jsonconverter.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}