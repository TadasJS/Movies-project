
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NoPage } from '../pages/NoPage'
import { BasicLayout } from '../layout/BasicLayout'

function App() {

  return (
 <BrowserRouter>
    <Routes>
        <Route Component={BasicLayout}>
          <Route index path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />


        </Route> 
    </Routes>
 </BrowserRouter>
  )
}

export default App
