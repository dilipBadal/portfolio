export default function BrandLogo({ src, className = "" }) {
  return (
    <span className={`brand-logo ${className}`} aria-hidden="true">
      <img src={`${process.env.PUBLIC_URL}${src}`} alt="" width="48" height="48" />
    </span>
  );
}
