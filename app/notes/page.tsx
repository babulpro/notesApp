import { getNotes } from "../services/notes";

 


function NotesPage() {
    const notes =getNotes()
    return (
        <div className="container max-h-full m-auto">
            <h1 className="text-3xl underline  mb-10">All Notes</h1>
            <ul>
                {notes.length>0 &&
                notes.map((note)=>(
                     
                    <li className=" " key={note.id}>{note.content} {note.important && <strong>(Important)</strong>}</li>
                ))
                }
            </ul>
            
            
            
        </div>
    );
}

export default NotesPage;