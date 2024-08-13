"use client";
import React, { useRef } from "react";

export const FileUploader = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  // input click method
  const handleClick = () => {
    fileRef?.current?.click();
  };

  return (
    <form>
      <div>
        <div onClick={handleClick}>
          <button className="py-5 px-3 w-[343px] flex place-content-center rounded-md no-underline text-white text-xl font-bold bg-primary hover:bg-white hover:text-primary hover:border-primary border-4">
            계약서 파일 업로드
          </button>
        </div>

        <input
          ref={fileRef}
          name="file"
          className="hidden"
          type="file"
          multiple
          accept="image/*"
          onChange={handleClick}
        />
      </div>
    </form>
  );
};
