import {createContext, useState} from 'react'

const LoginContext = createContext()

const LoginContextProvider = ({children}) => {
	const [isLogged, setIsLogged] = useState(false)

	return (
		<LoginContext.Provider value={[isLogged, setIsLogged]}>
			{children}
		</LoginContext.Provider>
	)
}

export {LoginContext}
export default LoginContextProvider