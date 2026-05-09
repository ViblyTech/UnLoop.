export function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-20 noise-texture"
      style={{
        background: `linear-gradient(180deg, #1E1B3A 0%, #2E2B5F 33%, #1A1733 66%, #0F0D22 100%)`,
      }}
      aria-hidden="true"
    />
  );
}
