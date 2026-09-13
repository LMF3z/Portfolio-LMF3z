export default function BatSymbol({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.4}
      viewBox="0 0 100 40"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 12 C48 12 46 10 44 6 L40 12 C36 11 32 10 28 10 C22 10 16 12 10 16 C6 18 2 22 0 26 C4 22 10 20 14 22 C12 26 10 30 8 34 C14 30 20 28 26 28 C30 30 34 34 38 38 L50 30 L62 38 C66 34 70 30 74 28 C80 28 86 30 92 34 C90 30 88 26 86 22 C90 20 96 22 100 26 C98 22 94 18 90 16 C84 12 78 10 72 10 C68 10 64 11 60 12 L56 6 C54 10 52 12 50 12Z" />
    </svg>
  );
}