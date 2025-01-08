import { useState } from 'react';
import './App.css'
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div>
      <Header>
        <input
          placeholder='search courses...'
          className='text-field'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </Header>
      <CourseList search={search} />
      <Footer />
    </div>

  )
}

export default App;
