import Owl from "../assets/svg/owl.svg?react"
import Butterfly from "../assets/svg/butterfly.svg?react"
import Lion from "../assets/svg/lion.svg?react"
import Dolphin from "../assets/svg/dolphin.svg?react"
import Elephant from "../assets/svg/elephant.svg?react"

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
