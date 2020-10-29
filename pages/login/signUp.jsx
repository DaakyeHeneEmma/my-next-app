import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
// import { Button } from 'next-button'



const SignUp = () => {
 
  const [input, setInput] = useState({name:''})
  const [email, setEmail] = useState({email:''})
  const [password, setPassword] = useState({password:''})
   
    console.log('anything');
  const handleSubmit = ( ) =>{       
      console.log("submited")
      
  }

  const Forms = () =>{
    return(
      <div>
      <input onChange={e => setInput({ ...input, name: e.target.value})}
      name={input.name} placeholder="Your Name" type="text" /> 
      <br />
      <br />
      <input name={input.email} placeholder="Your E-mail" type="email" 
      onChange={e => setEmail({...email, email: e.target.value})} />{' | '}
                <br /> <br />
      <input name={input.password} placeholder="Your E-mail" type="email" 
      onChange={e => setPassword({...password, password: e.target.value})} />{' | '}
    
      <button onClick={handleSubmit}>Send</button>{' | already have account '}
    <Link href={'./login'}><a>Sign In</a></Link>
   
    <p className="copyright">Information about Deway.Inc</p>
      </div>
    
    )
  
  }

  return (
    <div>
     <Head>
     <title>{'Sign-Up'}</title>
     <meta name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width" />
  <link src="/_next/static/style.css" rel="stylesheet"/>
     </Head>
     <div className="mainBody">
     <h2>Sign Up
     </h2>
         <Forms />
     </div>
</div>

  )
}
export default SignUp;