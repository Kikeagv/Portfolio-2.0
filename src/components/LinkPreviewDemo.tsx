"use client";

import React from "react";
import { LinkPreview } from "~/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-full flex-col px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <div className="text-white text-xl md:text-3xl max-w-3xl mx-auto mb-10 drop-shadow-lg">
          <LinkPreview url="https://github.com" className="font-bold">
            GitHub
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview url="https://vercel.com" className="font-bold">
            Vercel
          </LinkPreview>{" "}
          are essential tools for modern web development.
        </div>
        <div className="text-white text-xl md:text-3xl max-w-3xl mx-auto drop-shadow-lg">
          Check out{" "}
          <LinkPreview
            url="https://nextjs.org"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-400"
          >
            Next.js
          </LinkPreview>{" "}
          for building full-stack React applications with the best developer experience.
        </div>
        <div className="text-white text-xl md:text-3xl max-w-3xl mx-auto mt-10 drop-shadow-lg">
          Explore{" "}
          <LinkPreview url="https://typescriptlang.org" className="font-bold">
            TypeScript
          </LinkPreview>
          {" "}for type-safe JavaScript development and{" "}
          <LinkPreview url="https://tailwindcss.com" className="font-bold">
            Tailwind CSS
          </LinkPreview>
          {" "}for rapid UI styling.
        </div>
      </div>
    </div>
  );
}