import Header from '../headers/header';



const Layout = ({children}) =>{

    return (
        <div>
            <Header />
            
            {children}
        </div>
    )
}

export default Layout
