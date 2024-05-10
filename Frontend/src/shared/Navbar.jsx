import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        {path: 'Home', to: '/'},
        {path: 'Reviews', to: '/reviews'},
        {path: 'Login', to: '/login'},
        {path: 'SignUp', to: '/signup'},
    ];
  return (
    <div className=" h-30 w-screen bg-slate-500 flex-col justify-center items-center">
        <div className="text-white m-5 text-base ">
            {
                menuItems.map(item => (
                    <div  key={item.path }>
                        <Link to={item.to}>{item.path}</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar