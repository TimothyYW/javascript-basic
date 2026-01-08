export type Domino = [number, number];

export function generateRandomDomino(): Domino {
  const a = Math.floor(Math.random() * 7);
  const b = Math.floor(Math.random() * 7);
  return [a, b];
}

export function generateRandomDominoes(count: number): Domino[] {
  return Array.from({ length: count }, generateRandomDomino);
}

export function countDoubles(data: Domino[]): number {
  return data.filter(([a, b]) => a === b).length;
}

export function sortDominoes(
  data: Domino[],
  order: "asc" | "desc"
): Domino[] {
  return [...data].sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA !== sumB) {
      return order === "asc" ? sumA - sumB : sumB - sumA;
    }

    const minA = Math.min(...a);
    const minB = Math.min(...b);

    return order === "asc" ? minA - minB : minB - minA;
  });
}

export function flipDominoes(data: Domino[]): Domino[] {
  return data.map(([a, b]) => [b, a]);
}

export function removeByTotal(data: Domino[], total: number): Domino[] {
  return data.filter(([a, b]) => a + b !== total);
}

export function removeDuplicates(data: Domino[]): Domino[] {
  const seen = new Set<string>();

  return data.filter(([a, b]) => {
    const key = [Math.min(a, b), Math.max(a, b)].join("-");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
