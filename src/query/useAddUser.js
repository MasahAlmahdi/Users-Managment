import { useMutation, useQueryClient } from '@tanstack/react-query';

const addUser = async (userData)=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users',{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
});

if(!res.ok){
    throw new Error("Failed to add user");
    
}
return res.json();
};

export default function useAddUser() {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: (newUser) => {
      const existingUsers = queryClient.getQueryData(["users"]) || [];
      queryClient.setQueryData(["users"], [...existingUsers, newUser]);
    }
  });
}