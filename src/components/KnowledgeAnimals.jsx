// src/components/KnowledgeAnimals.jsx
import { Link } from "react-router-dom";

const animals = [
  { name: "Owl", page: "/categories", svg: "🦉" },
  { name: "Elephant", page: "/trending", svg: "🐘" },
  { name: "Dolphin", page: "/authors", svg: "🐬" },
  { name: "Fox", page: "/about", svg: "🦊" },
];

export default function KnowledgeAnimals() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {animals.map((animal) => (
        <Link
          key={animal.name}
          to={animal.page}
          className="group flex items-center gap-2 p-2 bg-white/80 dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <span className="text-2xl">{animal.svg}</span>
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {animal.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
