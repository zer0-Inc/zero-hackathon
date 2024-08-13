import NextLogo from "@/components/NextLogo";
import BoardingButton from "@/components/BoardingButton";

export default function Header() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col h-full items-center gap-14">
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto  text-center font-black text-white">
          이젠 부동산거래, 안전하게
        </p>
        <NextLogo />
      </div>
      <main className="flex place-content-center">
        <BoardingButton />
      </main>
    </div>
  );
}
