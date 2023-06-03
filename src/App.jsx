import { CakeView } from './features/cake/cakeView'
import { IcecreamView } from './features/icecream/icecreamView'
import { UserView } from './features/user/userView'


function App() {

  return (
    <>
    <div className="h-screen bg-gray-500">
      <div className="max-w-3xl p-2 mx-auto">
        <div className="flex gap-3 mb-3 justify-center">
          <CakeView />
          <IcecreamView />
        </div>
        <UserView />
      </div>
    </div>
    </>
  )
}

export default App
 