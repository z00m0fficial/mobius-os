import { nanoid } from "nanoid";

export type MosPrefix = "ORG" | "WSP" | "DSH" | "WFL" | "TSK" | "SCH" | "NTF" | "AUD";

export function createMosId(prefix: MosPrefix): string {
  return `${prefix}-${nanoid(10).toUpperCase()}`;
}
