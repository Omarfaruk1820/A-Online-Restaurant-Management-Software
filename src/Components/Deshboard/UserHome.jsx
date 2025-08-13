import useAuth from "../Auth/useAuth";


const UserHome = () => {
    const {user}=useAuth()
    return (
        <div>
           <h1> <spn>Hi Welcome</spn> </h1>
           {
            user?.displayName?user.displayName:"Back"
           } 
        </div>
    );
};

export default UserHome;