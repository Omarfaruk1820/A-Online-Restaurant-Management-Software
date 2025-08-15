import { useEffect, useState } from "react";



const useMenu = () => {

     const [menus,setMenu]=useState([])
     const [loading,setLoading]=useState(true)
       useEffect(()=>{
           fetch('https://bistro-boss-resturant-server-side-psi.vercel.app/menu')
           .then(res=>res.json())
           .then(data=>{
             setMenu(data)
            setLoading(false)
            })
       },[])
    // const {refetch,data:menus=[],isPending:loading}=useQuery({
    //   queryKey:['menu'],
    //   queryFn: async()=>{
    //     const res=await axiosPublic.get('/menu')
    //     return res.data;

    //   }

    // })
       return [menus,loading]
};

export default useMenu;