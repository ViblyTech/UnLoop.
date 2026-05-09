import Image from 'next/image';

interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
}

export function PhoneFrame({ src, alt, width = 280, priority = false }: PhoneFrameProps) {
  const height = width * 2.16;

  return (
    <div className="relative" style={{ width, height }}>
      {/* Phone body */}
      <div
        className="absolute inset-0 rounded-[3rem] bg-black"
        style={{
          boxShadow: `
            0 30px 60px -20px rgba(0, 0, 0, 0.7),
            0 0 0 2px rgba(255, 255, 255, 0.05)
          `,
        }}
      >
        {/* Screen */}
        <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>

        {/* Notch / Dynamic Island */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full"
          style={{ width: '40%', height: '24px' }}
        />
      </div>
    </div>
  );
}
