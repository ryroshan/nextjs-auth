
import { getUsers } from '@/helper/getUsers';
import Search from '../components/Search';

export default async function page() {
  const fetchData = await getUsers();
  
  return (
    <div>
      <h1 className='text-2xl text-center text-red-600 p-3'>all user here</h1>
      <div className='text-center mb-5' >
        <Search data={fetchData}/>     
      </div>
      
      <table className='flex flex-col justify-center items-center bg-yellow-500 rounded-md'>
      <thead className='text-3xl gap-4 text-gray-300 border-blue-900'>
              <tr className='flex gap-20'>
                <td className='text-center'>UserName</td>
                <td className='text-center'>Email</td>
                <td className='text-center'>isAdmin</td>
              </tr>
            </thead>
            <tbody className='text-white text-2xl'>
              {fetchData.data.map((item:any)=>(
                <tr key={item.username}className='flex gap-20'>
                <td className='text-center'>{item.username}</td>
                <td className='text-center'>{item.email}</td>
                <td className='text-center'>{String(item.isAdmin)}</td>
                </tr>
              ))}
            </tbody>
      </table> 

      {/* {/* {loading ? <h1 className='text-white'>Loading...</h1> :<pre className='text-white'>{JSON.stringify(allUsers, null, 2)}</pre>} */}
    </div>
  )
}
