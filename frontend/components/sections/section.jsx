export default function Section({ children, className }) {
  return (
    <section className={`w-full mx-auto ${className}`}>{children}</section>
  );
}
