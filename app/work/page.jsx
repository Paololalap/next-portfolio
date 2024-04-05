import Link from "next/link";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="mt-14 text-center">
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 size-8 text-zinc-300 sm:size-9 md:size-10"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <path d="M3 12h4" />
          <path d="M17 12h4" />
          <path d="M18.364 5.636l-2.828 2.828" />
          <path d="M8.464 15.536l-2.828 2.828" />
          <path d="M5.636 5.636l2.828 2.828" />
          <path d="M15.536 15.536l2.828 2.828" />
        </svg>
        <div className="text-2xl font-semibold text-zinc-300 sm:text-3xl md:text-4xl">
          This is still a work in progress
        </div>
      </div>
      <p className="mx-auto mt-3 w-4/5 text-zinc-500 sm:text-lg md:w-2/3 md:text-xl">
        In the meantime, please visit my{" "}
        <Link
          target="_blank"
          href={"https://github.com/paololalap"}
          className="text-zinc-400 hover:underline"
        >
          Github
        </Link>{" "}
        while I work on this section, Thank you!
      </p>
    </main>
  );
}
