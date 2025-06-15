import { create } from 'zustand'

type Habit = {
  id: string
  name: string
}

type TrackerState = {
  habits: Habit[]
  addHabit: (name: string) => void
}

export const TrackerStore = create<TrackerState>((set) => ({
  habits: [
    { id: '1', name: 'Drink water' },
    { id: '2', name: 'Read' },
    { id: '3', name: 'Touch some grass' },
  ],
  addHabit: (name) =>
    set((state) => ({
      habits: [
        ...state.habits,
        { id: Date.now().toString(), name },
      ],
    })),
}))