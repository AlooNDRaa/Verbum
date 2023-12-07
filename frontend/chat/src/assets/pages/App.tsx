import AuthProvider from "../Componentes/token/auth/authprovider";
import Routees from "../Componentes/token/constRoutes/rouutes";


function App() {
  return (
    <>
    <AuthProvider>
      <Routees/>
    </AuthProvider>
    </>
  )
}

export default App;