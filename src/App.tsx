import { useRoutes } from 'react-router-dom'
import syncRouter from './router'

function App() {
  const element = useRoutes(syncRouter)
  // https://www.jq22.com/yanshi22947

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App
