const portraits = {
  formal: { file: "Dilip Badal.png", alt: "Dilip Badal wearing a dark suit and glasses", width: 794, height: 783 },
  personal: { file: "ab1.png", alt: "Dilip Badal smiling while spending time with dogs", width: 1344, height: 768 },
};

export default function Portrait({ className = "", variant = "formal" }) {
  const portrait = portraits[variant] || portraits.formal;
  return (
    <img className={`portrait ${className}`}
      src={`${process.env.PUBLIC_URL}/${portrait.file}`}
      alt={portrait.alt}
      width={portrait.width} height={portrait.height} />
  );
}
