import BabyList from './components/baby-list'
import BabyProvider from './contexts/baby';
import BabyInput from './components/baby-input'

function App() {
  return (
    <BabyProvider>
      <BabyInput />
      <BabyList />
    </BabyProvider>
  )
}

export default App;