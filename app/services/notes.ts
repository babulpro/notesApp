import { revalidatePath } from "next/cache";

const notes = [
  {
    id: 1,
    content: "Next.js utilizes React Server Components",
    important: true
  },
  {
    id: 2,
    content: "Server Components can fetch data directly on the server",
    important: true
  },
  {
    id: 3,
    content: "Client Components are used when we need interactivity",
    important: false
  },
  {
    id: 4,
    content: "useState is used to manage state in React",
    important: true
  },
  {
    id: 5,
    content: "useEffect is used to handle side effects",
    important: false
  },
  {
    id: 6,
    content: "Next.js provides file-based routing",
    important: true
  },
  {
    id: 7,
    content: "Prisma makes it easier to work with databases",
    important: false
  },
  {
    id: 8,
    content: "MongoDB is a NoSQL database",
    important: true
  },
  {
    id: 9,
    content: "TypeScript adds static typing to JavaScript",
    important: true
  },
  {
    id: 10,
    content: "Git helps developers track changes in their code",
    important: false
  }
];


export const getNotes=()=>{
 return notes
}

let nextId:number = 11
export const addNote=(content:string,important:boolean)=>{
    notes.push({id:nextId++,content,important})
}


export const NoteById=(id:number)=>{
    return notes.find((note)=>note.id===id)
}






export const toggleImportance = (id: number) => {
  const note = notes.find((note) => note.id === id)
  if (note) {
    note.important = !note.important
  }
}


export const toggleNoteImportance = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  toggleImportance(id)
  revalidatePath(`/notes/${id}`)
  revalidatePath("/notes")
}