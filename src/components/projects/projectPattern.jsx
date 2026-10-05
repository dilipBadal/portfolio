const patterns = {
  lens: (
    <>
      <circle cx="78" cy="33" r="47" />
      <circle cx="130" cy="33" r="36" />
      <circle cx="182" cy="33" r="47" />
      <circle cx="130" cy="33" r="15" />
    </>
  ),
  campus: (
    <>
      <path d="M-10 50 45 18 94 48 145 15 195 44 270 12M45 18 145 15M94 48 195 44" />
      {[[-10, 50], [45, 18], [94, 48], [145, 15], [195, 44], [270, 12]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="6" className="pattern-node" />
      ))}
    </>
  ),
  social: (
    <>
      <path d="M-12 58C25 58 30 7 74 7S119 59 161 59 209 9 272 9" />
      <path d="M-12 8C25 8 30 59 74 59S119 7 161 7 209 57 272 57" />
      <path d="M-12 33C39 33 41 18 74 18S129 48 161 48 211 33 272 33" opacity=".45" />
    </>
  ),
  stats: (
    <>
      <path d="M130 0 169 17 169 49 130 66 91 49 91 17ZM130 10 157 22 157 44 130 56 103 44 103 22Z" />
      <path d="M130 0V66M91 17 169 49M91 49 169 17M0 16H65M0 33H53M0 50H73M195 16H260M207 33H260M187 50H260" opacity=".5" />
      {[[130, 10], [157, 22], [157, 44], [130, 56], [103, 44], [103, 22]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" className="pattern-node" />
      ))}
    </>
  ),
  chess: (
    <>
      {Array.from({ length: 24 }, (_, index) => {
        const x = index % 8;
        const y = Math.floor(index / 8);
        return (x + y) % 2 === 0 ? <rect key={index} x={x * 33} y={y * 22} width="33" height="22" className="pattern-square" /> : null;
      })}
      <path d="M49 55 115 55 115 11 181 11" />
      <circle cx="49" cy="55" r="4" className="pattern-node" />
      <circle cx="181" cy="11" r="4" className="pattern-node" />
    </>
  ),
};

export default function ProjectPattern({ visual, pattern }) {
  return (
    <div className={`project-art project-art-${visual}`} aria-hidden="true">
      <svg viewBox="0 0 260 66" preserveAspectRatio="xMidYMid slice" focusable="false">
        {patterns[pattern]}
      </svg>
    </div>
  );
}
