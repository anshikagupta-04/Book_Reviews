import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        {path: 'Home', to: '/'},
        {path: 'Reviews', to: '/reviews'},
        {path: 'Login', to: '/login'},
        {path: 'SignUp', to: '/signup'},
    ];
  return (
    <div className=" h-16 w-screen bg-slate-500 top-0">
        <div className="text-white text-xl h-full w-full flex justify-center items-center gap-10">
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