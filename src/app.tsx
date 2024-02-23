import { ChangeEvent, useState } from "react"
import logo from "./assets/logo-nlw-expert.svg"
import { NewCard } from "./components/new-card"
import { NoteCard } from "./components/note-card"

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("@notes-expert")

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return []
  })

  function onNoteCreate(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem("@notes-expert", JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes =
    search != "" ? notes.filter((note) => note.content.toLocaleLowerCase().includes(search)) : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw-expert-logo" />
      <form className="w-full">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewCard onNoteCreate={onNoteCreate} />
        {filteredNotes.map((note) => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}
