"use client";

import { useState } from "react";
import {
  Domino,
  countDoubles,
  sortDominoes,
  flipDominoes,
  removeByTotal,
  removeDuplicates,
  generateRandomDominoes,
} from "@/lib/domino";
import DominoCard from "@/components/dominoCard";

const CARD_COUNT = 14; // 7 per row × 2 rows

export default function Home() {
  const [data, setData] = useState<Domino[]>(
    () => generateRandomDominoes(CARD_COUNT)
  );
  const [total, setTotal] = useState<number | "">("");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Dominoes</h1>

        <p className="text-gray-600 mb-6">
          Double count:{" "}
          <span className="font-semibold text-black">
            {countDoubles(data)}
          </span>
        </p>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Button onClick={() => setData(sortDominoes(data, "asc"))}>
            Sort ASC
          </Button>

          <Button onClick={() => setData(sortDominoes(data, "desc"))}>
            Sort DESC
          </Button>

          <Button onClick={() => setData(removeDuplicates(data))}>
            Remove Duplicates
          </Button>

          <Button onClick={() => setData(flipDominoes(data))}>
            Flip Cards
          </Button>

          <input
            type="number"
            placeholder="Total"
            value={total}
            onChange={(e) =>
              setTotal(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-24 px-3 py-2 rounded-lg border border-gray-400"
          />

          <Button
            onClick={() => total !== "" && setData(removeByTotal(data, total))}
            disabled={total === ""}
          >
            Remove Total
          </Button>

          <Button
            variant="secondary"
            onClick={() => setData(generateRandomDominoes(CARD_COUNT))}
          >
            Reset
          </Button>
        </div>

        {/* Domino Grid – 7 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {data.map((domino, index) => (
            <DominoCard key={index} value={domino} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}) {
  const base = "px-4 py-2 rounded-lg font-medium transition shadow-sm";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white border border-gray-400 hover:bg-gray-200";
  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${disabledStyle}`}
    >
      {children}
    </button>
  );
}
