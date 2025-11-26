import heroVideo from "@assets/hero-video.mp4";

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
