"use client";

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  year: string;
  tags: string[];
  imageUrl: string;
  logoUrl?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  year,
  tags,
  imageUrl,
  logoUrl,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={`bg-white rounded-3xl p-6 md:p-8 w-full ${className}`}>
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={648}
            height={420}
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-4">
              {logoUrl && (
                <div className="w-16 h-16 relative">
                  <Image
                    src={logoUrl}
                    alt="Project logo"
                    width={65}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <h3 className="text-4xl md:text-5xl font-normal text-black leading-tight">
                {title}
              </h3>
            </div>
            <p className="text-2xl font-semibold text-black">{year}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-6 py-2 rounded-full text-sm font-normal text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-8">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={375}
            height={420}
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="space-y-2">
            <div className="space-y-4">
              {logoUrl && (
                <div className="w-16 h-16 relative">
                  <Image
                    src={logoUrl}
                    alt="Project logo"
                    width={65}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <h3 className="text-4xl font-normal text-black leading-tight">
                {title}
              </h3>
            </div>
            <p className="text-2xl font-semibold text-black">{year}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-6 py-2 rounded-full text-sm font-normal text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}