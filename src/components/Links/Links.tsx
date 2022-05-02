import React from 'react'
import { Link } from 'react-router-dom'
// components
import { Search } from 'components'
// constants
import { Link as ILink } from 'constants/types'

interface LinksProps {
  links: ILink[],
  title?: string
  searchEnabled?: boolean
  className?: string
}

const Links = ({ links, className, title, searchEnabled }:LinksProps) => {
  return (
    <div className={className}>
      {title && <span>{title}</span>}
      <ul>
        {links.map(link => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}
        {searchEnabled && <li><Search /></li>}
      </ul>
    </div>
  )
}

export default Links
