"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export const FileUploader = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileRef?.current?.click();
  };

  const router = useRouter();

  const handleChange = (e: any) => {
    router.replace("/searching");
  };

  return (
    <div>
      <div onClick={handleClick}>
        <button className="py-5 px-3 w-[343px] flex place-content-center rounded-md no-underline text-white text-xl font-bold bg-primary hover:bg-white hover:text-primary hover:border-primary border-4">
          계약서 파일 업로드
        </button>

        <input
          ref={fileRef}
          id="file"
          name="file"
          type="file"
          onChange={handleChange}
          style={{
            opacity: 0,
          }}
        />
      </div>
    </div>
  );
};
