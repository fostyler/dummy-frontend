import BabyContextProvider from './contexts/baby'
import BabyList from './components/baby-list'
import BabyInput from './components/baby-input'

function App() {
  return (
    <BabyContextProvider>
      <BabyInput />
      <BabyList />
    </BabyContextProvider>
  )
}

export default App;
