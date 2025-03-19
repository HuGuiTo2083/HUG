import { useState } from 'react'
import ViewLogin from './views/ViewLogin.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [count, setCount] = useState(0)

  return (
    <GoogleOAuthProvider clientId="689575216932-dltaibglvgc9r6gbeco0005sbsbuq4m7.apps.googleusercontent.com">
      <ViewLogin></ViewLogin>
    </GoogleOAuthProvider>


  )
}

export default App
