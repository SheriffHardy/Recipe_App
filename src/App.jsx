import './App.css'
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

export default function App() {
  return (
    <main>
     <h1>Meals APP</h1>
      {/* <Favorites /> */}
      <Meals />
      { /*<Modal /> */ }
      { /*<Search /> */ }
    </main>
  )
}
