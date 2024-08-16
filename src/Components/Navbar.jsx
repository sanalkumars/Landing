import logo from "../assets/logo.png"
import { navItems } from "../constants";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex  justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight">Landing</span>
                </div>
                {/* next is the links */}
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {
                        navItems.map((item , index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a> 
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden lg:flex justify-center items-center space-x-12">
                    <a href="#" className="py-2 px-3 border rounded-md">Sign-In</a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-purple-800 px-3
                       py-2 rounded-md">Create An Account
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar