
import Link from 'next/link'
// import Endpoint from '../pages/api/login'
import useSwr from 'swr'
import qBank from './text'



const fetcher = (...args) => fetch(...args)
                .then(res=> res.json());
const url = 'http://localhost:3000/api/users/123'




function Home() {
  const {data: result, error} = useSwr(url,fetcher)
  if(error) return <h1>something went wrong</h1>
  if(!result) return <h1>Loading...</h1>
  console.log(result)

// for( e of qBank){
//   console.log(e);
// }


console.log(qBank.length);
const random = Math.floor(Math.random() * qBank.length );
// for( i = random; )
 
  
  return (
    <div>
      <ul>
          <Link href={'./login/login'}>
            <a>
              <li>Sign-In</li>
            </a>
          </Link>
          <Link href={'./login/signUp'}>
            <a>
              <li>Sign-Up</li>
            </a>
          </Link>
      </ul>
   <h4>{result.name}</h4>
   <h4>{result.id}</h4>
    </div>
  )
}


export default Home;
