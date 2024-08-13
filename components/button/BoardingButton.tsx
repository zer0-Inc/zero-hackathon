import Link from "next/link";

export default async function BoardingButton() {
  return (
    <Link
      href="/login"
      className="py-5 px-3 w-1/3 flex place-content-center rounded-md no-underline text-white text-xl font-bold bg-black hover:bg-white hover:text-black"
    >
      시작하기
    </Link>
  );
}
