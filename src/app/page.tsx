"use client";

import { useRouter } from "next/navigation";

const brokenPath = "/other?query=a%20b";
const workingPath = "/other?query=a_b";
export default function Page() {
  const { prefetch, push } = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <button onClick={() => prefetch(brokenPath)}>Broken Prefetch</button>
        <button onClick={() => push(brokenPath)}>Broken Push</button>
      </div>
      <div className="flex gap-4">
        <button onClick={() => prefetch(workingPath)}>Working Prefetch</button>
        <button onClick={() => push(workingPath)}>Working Push</button>
      </div>
    </div>
  );
}
