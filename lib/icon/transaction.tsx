import { cn } from "../utils";

export const Transaction = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-12", className)}
    >
      <path
        d="M8.75 30.1875V8.75C8.75 5.12564 11.6881 2.1875 15.3125 2.1875H8.75C5.12564 2.1875 2.1875 5.12564 2.1875 8.75V30.1875C2.1875 33.8119 5.12564 36.75 8.75 36.75H15.3125C11.6881 36.75 8.75 33.8119 8.75 30.1875Z"
        fill="#C1CDDC"
      />
      <path
        d="M19.25 49.875L23.625 45.5H10.5"
        stroke="#EF8659"
        strokeWidth="4.375"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.75 6.12451L32.375 10.4995H45.5"
        stroke="#EF8659"
        strokeWidth="4.375"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0625 36.75H8.75C5.12564 36.75 2.1875 33.8119 2.1875 30.1875V8.75C2.1875 5.12564 5.12564 2.1875 8.75 2.1875H17.0625C20.6869 2.1875 23.625 5.12564 23.625 8.75V30.1875C23.625 33.8119 20.6869 36.75 17.0625 36.75Z"
        stroke="#053771"
        strokeWidth="4.375"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.25 53.8125H38.9375C35.3131 53.8125 32.375 50.8744 32.375 47.25V25.8125C32.375 22.1881 35.3131 19.25 38.9375 19.25H47.25C50.8744 19.25 53.8125 22.1881 53.8125 25.8125V47.25C53.8125 50.8744 50.8744 53.8125 47.25 53.8125Z"
        stroke="#053771"
        strokeWidth="4.375"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.8125 45.0625H32.375"
        stroke="#053771"
        strokeWidth="4.375"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.625 27.9995H2.1875"
        stroke="#053771"
        strokeWidth="4.375"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
