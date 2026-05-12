export function AnimatedBackdrop() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0a1a]"
    >
      <div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-3xl animate-drift-slow"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[75vw] h-[75vw] rounded-full blur-3xl animate-drift-slower"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-[55vw] h-[55vw] rounded-full blur-3xl animate-drift-reverse"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.10), transparent 65%)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl animate-drift-slow animation-delay-2"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 65%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
