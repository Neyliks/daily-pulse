import HabitCard from '../components/HabitCard'
import { TrackerStore } from '../store/TrackerStore'

function Today() {
  const habits = TrackerStore((state) => state.habits)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Habits for Today</h1>
      {habits.map((habit) => (
        <HabitCard key={habit.id} name={habit.name} />
      ))}
    </div>
  )
}

export default Today
