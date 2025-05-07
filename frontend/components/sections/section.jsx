export default function Section({ children, className }) {
  return (
    <section className={`container mx-auto ${className}`}>{children}</section>
  );
}
