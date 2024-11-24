import { useQuery } from '@tanstack/react-query'

const fetchUsers= async ()=> {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok){
        throw new Error("Failed to fetch users");
        
    }
    return res.json();
}

export default function useUsers() {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
      });
}
