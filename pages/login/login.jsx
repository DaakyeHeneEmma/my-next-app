import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
// import { Button } from 'next-button'




const LogIn = () => {

    
 

 

  const Forms = () =>{
    
  const [input, setInput] = useState('')
   const handleChange = (e) =>{
     setInput(e.target.value)
    }

   
    const handleSubmit = () =>{
      console.log(handleChange);
    }
    


    return(
      <div>
       <p>{moment}</p>
      <form>
      <input onChange={handleChange}
      name={input.name} placeholder="Your Name" type="text" /> 
     
    <button onSubmit={handleSubmit}>Send</button>{' | or '}
    <Link href={'./signUp'}><a>sign up</a></Link>
   
    <p className="copyright">Information about Deway.Inc</p>
      </form>
    
  </div>
    )
  
  }

  return (
    
    <div>
     <Head>
     <title>{'Sign-In'}</title>
     <meta name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width" />
  <link src="/_next/static/style.css" rel="stylesheet"/>
     </Head>
     <div className="mainBody">
     <h2>Sign In 
     </h2>
         <Forms />
     </div>
</div>

  )
}
export default LogIn;