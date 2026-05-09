import { GradientBackground } from '@/components/shared/GradientBackground';
import { StarryBackground } from '@/components/shared/StarryBackground';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Privacy Policy — UnLoop',
  description:
    'How UnLoop handles your data. We minimize collection and never sell your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <GradientBackground />
      <StarryBackground />
      <Nav />
      <LegalPage title="Privacy Policy" lastUpdated="May 8, 2026">
        <p>
          UnLoop is a mental health application. We take your privacy
          seriously and have designed our systems to minimize data collection
          and prevent misuse of sensitive information.
        </p>

        <h2>What we collect</h2>
        <p>To provide the app&apos;s core functionality, we collect:</p>
        <ul>
          <li>
            <strong>Account information</strong>: email address (if you create
            an account), authentication tokens
          </li>
          <li>
            <strong>Session data</strong>: the content of your unloop sessions
            (text or voice transcripts), session timestamps, technique
            preferences, and quietness scores
          </li>
          <li>
            <strong>Memory data</strong>: optional, opt-in. If enabled, we
            store summarized facts that help personalize future sessions.
            Excludes crisis content and personally identifying details.
          </li>
          <li>
            <strong>Subscription information</strong>: managed by Apple and
            RevenueCat; we do not store payment details
          </li>
          <li>
            <strong>Anonymous usage analytics</strong>: app open events,
            feature usage, crash reports
          </li>
        </ul>

        <h2>What we don&apos;t collect</h2>
        <ul>
          <li>We do not collect your contacts, location, or photos</li>
          <li>We do not access your microphone outside of voice mode</li>
          <li>We do not sell or rent your data to anyone, ever</li>
          <li>We do not use your session content to train AI models</li>
          <li>We do not share your data with advertisers</li>
        </ul>

        <h2>How we use your data</h2>
        <p>Your data powers the app&apos;s core functionality:</p>
        <ul>
          <li>Providing personalized AI conversations</li>
          <li>Tracking your progress over time</li>
          <li>Generating insights and trends</li>
          <li>Improving the app via aggregated, anonymized analytics</li>
        </ul>

        <h2>How we protect your data</h2>
        <p>
          All data is encrypted in transit (TLS) and at rest. We use Supabase
          for our database with row-level security policies that prevent
          cross-user data access. Voice audio is processed in real-time and
          not retained after transcription. Sensitive memories are handled
          with additional safeguards and are never proactively surfaced
          without your input on the topic.
        </p>

        <h2>Third-party services</h2>
        <p>UnLoop uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Anthropic (Claude)</strong>: AI conversation generation.
            Session content is sent to Anthropic for processing and not
            retained for training.
          </li>
          <li>
            <strong>OpenAI</strong>: voice transcription. Audio is processed
            in real-time and not retained.
          </li>
          <li>
            <strong>ElevenLabs</strong>: voice synthesis. Generated audio is
            not retained beyond the session.
          </li>
          <li>
            <strong>Supabase</strong>: database hosting and authentication.
          </li>
          <li>
            <strong>RevenueCat</strong>: subscription management.
          </li>
        </ul>

        <h2>Your rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Export all your data at any time (Settings → Export your data)</li>
          <li>Delete all your data (Settings → Clear all unloops)</li>
          <li>
            Delete your account entirely (Settings → Delete account); this
            action is permanent
          </li>
          <li>Disable memory entirely (Settings → Memory → Off)</li>
          <li>Contact us with any questions or concerns</li>
        </ul>

        <h2>Children&apos;s privacy</h2>
        <p>
          UnLoop is intended for users 13 years of age or older. We do not
          knowingly collect data from children under 13. If you believe a
          child has provided us with personal information, contact us and
          we will delete it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. Material
          changes will be communicated in-app and via email. Continued use of
          the app constitutes acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, concerns, or requests? Email us at{' '}
          <a href="mailto:privacy@unloop.app">privacy@unloop.app</a>.
        </p>

        <h2>A note on mental health</h2>
        <p>
          UnLoop is a self-help tool, not a substitute for professional mental
          health care. If you are experiencing a crisis or considering harm to
          yourself, please contact a crisis helpline immediately. In the US,
          dial or text 988 to reach the Suicide and Crisis Lifeline.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
