import BabyList from './components/baby-list'
import BabyProvider from './contexts/baby';

function App() {
  return (
    <BabyProvider>
      <BabyList />
    </BabyProvider>
  )
}

export default App;
