//import './App.css'
import { useReducer } from 'react'
import SecondScreen from './Components/SecondScreen'
import FirstScreen from './Components/FirstScreen'
import reducerFunc from './Components/reducerFunc';


function App() {
  
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  

  const listItem = state.list.filter(item => {
    if (state.searchField === '') {
      return item;
    } else if (item.title.toLowerCase().includes(state.searchField.toLowerCase())) {
      return item;
    }
  }).map(item => (<li key={item.key}><button onClick={() => dispatch({type: 'EDIT', id: item.key, title: item.title, note: item.note})} className='flex flex-row items-center pl-2 border-blue-600 border-2 w-56 h-12 rounded-lg mx-4 mb-2 hover:border-slate-600 hover:border-2 active:bg-blue-100'>{item.title}</button></li>))

  //const filteredList = listItem.slice();

  return (
    <div className="flex justify-around items-center border-solid border-2 border-red-600 h-screen mx-0">
      {state.firstScreen ? (<FirstScreen  myList={listItem} searchBool={state.search} searchValue={state.searchField} onSearch={() => dispatch({type: 'SEARCH'})} onInputSearch={(e) => dispatch({type: 'INPUT_SEARCH', payload: e.target.value})} onSearchDone={() => dispatch({type: 'SEARCH_DONE'})} onPlus={() => dispatch({type: 'PLUS_NOTE'})} />) : (<SecondScreen edit={state.edit} onSave={() => dispatch({type: 'SAVE_ITEM'})} onDelete={() => dispatch({type: 'DELETE'})} onBack={() => dispatch({type: 'BACK'})} onTitle={(e) => dispatch({type: 'TITLE_CHANGE', payload: e.target.value})} onNote={(e) => dispatch({type: 'NOTE_CHANGE', payload: e.target.value})} title={state.title} note={state.note} />)}
    </div>
  )
}

export default App

const initialState = { 

  firstScreen: true,
  list: [],
  title: '',
  note: '',
  idNum: 0,
  edit: false,
  tempId: 0,
  search: false,
  searchField: '',
  //searchList: []

}