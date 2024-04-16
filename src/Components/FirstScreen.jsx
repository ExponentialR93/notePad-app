import ListItem from "./ListItem"


export default function FirstScreen({onPlus, myList, onSearch, searchBool, searchValue, onInputSearch, onSearchDone, filteredList, inputField}) {
    return (
        <>
            <div className="flex flex-col items-center pt-4 border-blue-600 border-2 w-72 h-5/6 rounded-lg">
                <div className="flex justify-between border-blue-600 border-2 w-64 h-12 rounded-lg mx-4">
                    {searchBool ? (
                        <>
                            <input type="text" className="flex items-center border-slate-200 border-2 rounded-lg pl-2" onChange={onInputSearch} value={searchValue} />
                            <button className="border-slate-200 border-2 rounded-lg px-3 hover:border-slate-600 hover:border-2 active:bg-blue-100" onClick={onSearchDone}>X</button>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center text-bold text-blue-600 text-xl pl-2">Notebook</div>
                            <button className="border-slate-200 border-2 rounded-lg px-5 hover:border-slate-600 hover:border-2 active:bg-blue-100" onClick={onSearch}>search</button>
                        </>
                    )}
                    {/*<div className="flex items-center text-bold text-blue-600 text-xl pl-2">Notebook</div>
                    <button className="border-slate-200 border-2 rounded-lg px-5 hover:border-slate-600 hover:border-2 active:bg-blue-100">
                        search
                    </button>*/}
                </div>
                <div className='flex flex-col overflow-y-auto no-scrollbar items-end border-blue-600 border-2 w-64 h-full my-4 rounded-lg relative'>
                    <button onClick={onPlus} className="my-4 rounded-full bg-blue-600 w-20 h-20 text-white text-3xl hover:bg-blue-700 active:bg-blue-800 fixed bottom-20 mr-4">+</button>
                    {/*searchBool ? (<ListItem myList={filteredList} />) : (<ListItem myList={myList} />)*/}
                    <ListItem myList={myList} />
                </div>

        </div>
        </>
    )
}