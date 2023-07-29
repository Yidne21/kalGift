import React from 'react'
import SwitchTheme from './ThemeSwitcher'

function Header() {
  return (
      <div className="navbar bg-base-100">
          <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl" href='/'>kalGift</a>
          </div>
          <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                  <li><a href='/login'>Login</a></li>
                  <li><SwitchTheme/></li>
              </ul>
          </div>
      </div>
  )
}

export default Header