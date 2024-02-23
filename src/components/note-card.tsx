export function NoteCard() {
  return (
    <button className="text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-slate-300 font-medium text-sm">Há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur
        reiciendis modi nihil illo natus cupiditate repudiandae ad,
        consequuntur, adipisci alias voluptates atque, neque ullam! Accusantium
        officiis distinctio quasi quos.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  )
}
