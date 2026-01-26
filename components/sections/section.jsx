export default function Section({ children, className, id }) {
  return (
    <section id={id || null} className={`w-full mx-auto ${className}`}>
      {children}
    </section>
  );
}
