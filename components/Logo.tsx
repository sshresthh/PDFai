import Image from "next/image";
function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="PDFai logo"
      width={105}
      height={105}
      className="mr-2"
    />
  );
}
export default Logo;
