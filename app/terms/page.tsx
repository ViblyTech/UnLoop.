import { GradientBackground } from '@/components/shared/GradientBackground';
import { StarryBackground } from '@/components/shared/StarryBackground';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Terms of Service — UnLoop',
  description:
    'Terms of service for UnLoop. By using the app, you agree to these terms.',
};

export default function TermsPage() {
  return (
    <>
      <GradientBackground />
      <StarryBackground />
      <Nav />
      <LegalPage title="Terms of Service" lastUpdated="May 8, 2026">
        <p>
          By using UnLoop, you agree to these terms. Please read them carefully.
        </p>

        <h2>Eligibility</h2>
        <p>
          You must be at least 13 years old to use UnLoop. If you are under
          18, you must have parental or guardian consent.
        </p>

        <h2>Account responsibility</h2>
        <p>
          You are responsible for maintaining the security of your account
          credentials and for all activity that occurs under your account.
          Notify us immediately of any unauthorized access.
        </p>

        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app to harm yourself or others</li>
          <li>
            Attempt to reverse-engineer, decompile, or extract the app&apos;s
            source code
          </li>
          <li>Use the app to generate harmful, abusive, or illegal content</li>
          <li>Resell, redistribute, or commercialize the app or its content</li>
          <li>Bypass any technical or licensing restrictions</li>
          <li>Use the app in any way that violates applicable laws</li>
        </ul>

        <h2>Subscriptions and billing</h2>
        <p>
          UnLoop offers free and paid tiers. Paid subscriptions (UnLoop Pro)
          are billed through Apple&apos;s App Store on a monthly or annual basis.
          Subscriptions auto-renew unless cancelled at least 24 hours before
          the end of the current billing period. Manage or cancel
          subscriptions through your Apple ID account settings.
        </p>
        <p>
          A 7-day free trial is offered on the annual subscription for new
          subscribers. After the trial, billing begins automatically unless
          cancelled.
        </p>

        <h2>Refunds</h2>
        <p>
          Refund requests are processed by Apple per their App Store refund
          policy. UnLoop cannot directly issue refunds for subscriptions
          purchased through the App Store.
        </p>

        <h2>Mental health disclaimer</h2>
        <p>
          UnLoop is a self-help tool designed to support mental wellness. It
          is NOT a substitute for professional mental health care, medical
          treatment, or crisis intervention. The app does not provide medical
          diagnoses or treatment.
        </p>
        <p>
          If you are experiencing a mental health crisis, suicidal thoughts,
          or thoughts of harming yourself or others, please contact emergency
          services or a crisis helpline immediately:
        </p>
        <ul>
          <li>
            <strong>United States</strong>: 988 (Suicide and Crisis Lifeline)
          </li>
          <li>
            <strong>International</strong>: Visit{' '}
            <a
              href="https://findahelpline.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              findahelpline.com
            </a>{' '}
            for resources in your country
          </li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          UnLoop and all associated content, features, and functionality are
          owned by UnLoop and protected by copyright, trademark, and other
          intellectual property laws. You retain ownership of content you
          create within the app (your session text, journal entries, etc.).
        </p>

        <h2>Service modifications</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect
          of the app at any time, with or without notice. We will provide
          reasonable advance notice for material changes that affect existing
          users.
        </p>

        <h2>Termination</h2>
        <p>
          We may suspend or terminate your access to UnLoop at our discretion,
          including for violations of these terms. You may terminate your
          account at any time through Settings → Delete account.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, UnLoop is provided &quot;as
          is&quot; without warranties of any kind. We are not liable for any
          indirect, incidental, or consequential damages arising from your use
          of the app. Our total liability for any claim is limited to the
          amount you paid for the app in the 12 months preceding the claim.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the United States and the
          state in which UnLoop is incorporated, without regard to conflict
          of law principles.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Material changes will
          be communicated in-app and via email. Continued use of the app
          constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email us at{' '}
          <a href="mailto:legal@unloop.app">legal@unloop.app</a>.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
