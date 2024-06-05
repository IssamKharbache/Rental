//next components
import Link from 'next/link';
//my components
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import AddPropertyButton from './AddProperty';


const NavBar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 py-6 border-b bg-white z-10'>
      <div className="max-w-[1500px] mx-auto px-6 ">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
          Rental
          {/* logo here */}
          </Link>
          {/* SEARCH FILTERS */}
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          {/* LINKS */}
          <div className="flex items-center space-x-6">
            <AddPropertyButton />
           <UserNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar