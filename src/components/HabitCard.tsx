type HabitCardItems = {
  name: string
}

function HabitCard({ name }: HabitCardItems) {
  return (
    <div className="bg-emerald-300 shadow rounded-xl px-4 py-3 mb-3">
      <span className="text-gray-800">{name}</span>
    </div>
  )
}

export default HabitCard