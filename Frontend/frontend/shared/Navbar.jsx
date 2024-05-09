import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        {path: 'Home', to: '/'},
        {path: 'Reviews', to: '/reviews'},
        {path: 'Login', to: '/login'},
        {path: 'SignUp', to: '/signup'},
    ];
  return (
    <div className="absolute h-48 w-screen bg-slate-500 ">
        <ul>
            {
                menuItems.map(item => (
                    <li className="text-white m-5 text-base flex justify-center items-center" key={item.path }>
                        <Link to={item.to}>{item.path}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar