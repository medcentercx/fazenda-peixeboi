import heroVideo from "@assets/SnapInsta.to_AQOs_Ge24CTM7dqUtK3FJ2l5X_E9nMUdfw7GlwMLZ2bI64vEA-wsOBwKsXWeYJFAFpUVgqokmvRRlrbfw4QRlqrBNG9LGjavttItoEA_1762441428751.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        data-testid="video-hero"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </section>
  );
}
