import React from "react";
import { cn } from "../utils";

export const Deposit = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-12", className)}
    >
      <g clipPath="url(#clip0_4440_215)">
        <path
          d="M21.875 31.9375V10.9375H15.3125V31.9375C15.3125 34.3536 17.2712 36.3125 19.6875 36.3125H26.25C23.8337 36.3125 21.875 34.3536 21.875 31.9375Z"
          fill="#C1CDDC"
        />
        <path
          d="M23.625 47.6248L24.9064 46.3433C25.6981 45.5517 26.7918 45.062 28 45.062C29.2082 45.062 30.3019 45.5517 31.0936 46.3434L32.375 47.6248"
          stroke="#EF8659"
          strokeWidth="4.375"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 53.812V45.062"
          stroke="#EF8659"
          strokeWidth="4.375"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5625 19.687C4.1463 19.687 2.1875 17.7282 2.1875 15.312V6.56201C2.1875 4.14581 4.1463 2.18701 6.5625 2.18701H49.4375C51.8537 2.18701 53.8125 4.14581 53.8125 6.56201V15.312C53.8125 17.7282 51.8537 19.687 49.4375 19.687"
          stroke="#053771"
          strokeWidth="4.375"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9375 10.9375H45.0625"
          stroke="#053771"
          strokeWidth="4.375"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.0625 27.5625V19.6875"
          stroke="#053771"
          strokeWidth="4.375"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.6875 10.9375V31.9375C40.6875 34.3537 38.7287 36.3125 36.3125 36.3125H19.6875C17.2713 36.3125 15.3125 34.3537 15.3125 31.9375V10.9375"
          stroke="#053771"
          strokeWidth="4.375"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4440_215">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
