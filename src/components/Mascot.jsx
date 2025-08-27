import Owl from "../assets/animals/owl.svg?react"
import Butterfly from "../assets/animals/butterfly.svg?react"
import Lion from "../assets/animals/lion.svg?react"
import Dolphin from "../assets/animals/dolphin.svg?react"
import Elephant from "../assets/animals/elephant.svg?react"

const mascots = {
  home: Butterfly,
  categories: Elephant,
  trending: Lion,
  authors: Owl,
  about: Dolphin,
}

export default function Mascot({ page }) {
  const Icon = mascots[page] || Owl
  return (
    <div className="flex justify-center my-6">
      <Icon className="w-20 h-20 text-amber-500 dark:text-amber-300 animate-bounce" />
    </div>
  )
}
