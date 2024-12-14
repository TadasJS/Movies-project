
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NoPage } from '../pages/NoPage'
import { BasicLayout } from '../layout/BasicLayout'
import { CreateCardMovie } from '../components/CreateCardMovie'
import { CreateCardSerial } from '../components/CreateCardSerial'
import { MovieDataList } from '../components/MovieDataList'

function App() {

  return (
 <BrowserRouter>    
    <Routes>
        <Route Component={BasicLayout}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/addcardmov" element={<CreateCardMovie />} />
          <Route index path="/addcardser" element={<CreateCardSerial />} />
    


          <Route path="*" element={<NoPage />} />
        </Route> 
    </Routes>
 </BrowserRouter>
  )
}

export default App
