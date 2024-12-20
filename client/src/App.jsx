
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NoPage } from '../pages/NoPage'
import { BasicLayout } from '../layout/BasicLayout'
import { CreateCardMovie } from '../components/CreateCardMovie'
import { CreateCardSerial } from '../components/CreateCardSerial'
import { MovieDataList } from '../components/MovieDataList'
import UpdateMovieForm from "../components/UpdateMovieForm"
import UpdateTvShowForm from '../components/UpdateTvShowForm'
import { DeleteMovie } from '../components/DeleteMovie'

function App() {
  
  return (
 <BrowserRouter>    
    <Routes>
        <Route Component={BasicLayout}>
          <Route index path="/" element={<HomePage />} />

          <Route path="/updateMovie/:id" element={<UpdateMovieForm />} />
          <Route path="/updateTvshow/:id" element={<UpdateTvShowForm />} />
                

          <Route path="/addcardmov" element={<CreateCardMovie />} />
          <Route path="/addcardser" element={<CreateCardSerial />} />
    


          <Route path="*" element={<NoPage />} />
        </Route> 
    </Routes>
 </BrowserRouter>
  )
}

export default App
