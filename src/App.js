import BabyContextProvider from './contexts/baby'
import BabyList from './components/baby-list'

function App() {
  return (
    <BabyContextProvider>
      <BabyList />
    </BabyContextProvider>
  )
}

export default App;
