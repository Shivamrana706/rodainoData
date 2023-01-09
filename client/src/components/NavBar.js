const NavBar = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand"  active="true" href="/">Roadino Employees</a>
                </div>
                <ul className="nav navbar-nav">                   
                    
                    <li><a href="/all">All User</a></li>
                    <li><a href="/add">Add User</a></li>
                    
                    
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;