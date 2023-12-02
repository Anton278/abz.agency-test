import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Position } from "../models/Position";
import positionsService from "../services/positions";

interface PositionsState {
  positions: Position[];
  isLoading: boolean;
  error: string;

  getPositions: () => Promise<void>;
}

export const usePositions = create<PositionsState>()(
  devtools(
    (set) => ({
      positions: [],
      isLoading: true,
      error: "",

      getPositions: async () => {
        try {
          const res = await positionsService.getAll();
          set({ positions: res.positions, isLoading: false });
        } catch (err) {
          set({ isLoading: false, error: "Failed to get positions" });
        }
      },
    }),
    {
      name: "positions-storage",
    }
  )
);
