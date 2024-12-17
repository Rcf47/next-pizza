"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        className={cn("flex rounded-2xl flex-1 justify-between relative h-11")}
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          <Link href="/product/1">
            <div className="px-3 py-2 hover:bg primary/10 cursor-pointer">
              Пицца 1
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
