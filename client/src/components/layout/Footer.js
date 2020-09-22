import React from 'react'
import text from 'body-parser/lib/types/text'

export default ()=> {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            Copyright &copy; {new Date().getFullYear()} DevConnecter
        </footer>
    )
}
