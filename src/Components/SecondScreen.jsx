export default function SecondScreen({ onBack, onTitle, onNote, title, note, onSave, edit, onDelete }){
    return (
        <>
            <div className="flex flex-col items-center pt-4 border-blue-600 border-2 w-72 h-5/6 rounded-lg">
                <div className="flex justify-between border-blue-600 border-2 w-64 h-12 rounded-lg">
                    <button onClick={onBack} className="border-slate-200 border-2 rounded-lg px-5 hover:border-slate-600 hover:border-2 active:bg-blue-100">back</button>
                    {edit && <button onClick={onDelete} className="border_slate_200 border-2 rounded-lg px-5 hover:border-slate-600 hover:border-2 active:bg-blue-100">delete</button>}
                    <button onClick={onSave} className="border-slate-200 border-2 rounded-lg px-5 hover:border-slate-600 hover:border-2 active:bg-blue-100">save</button>
                </div>
                <input type="text" placeholder="Title" value={title} onChange={onTitle} className="border-blue-600 border-2 indent-2 w-64 h-12 mt-4 pl-2 placeholder:pl-0 rounded-lg hover:border-slate-600 hover:border-2" />
                <textarea name="" value={note} onChange={onNote} placeholder="Notes" id="" cols="30" rows="10" className="border-blue-600 border-2 align-middle pt-1 pl-2 indent-2 w-64 mt-4 mb-4 h-full placeholder:pl-0 placeholder:pt-0  rounded-lg hover:border-slate-600 hover:border-2"></textarea>
            </div>
        </>
    )
}