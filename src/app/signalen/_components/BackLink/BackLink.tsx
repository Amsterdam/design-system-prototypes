/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/* eslint-disable react/jsx-props-no-spreading */

import { Icon } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

import './BackLink.css'
import Link from 'next/link'

export type BackLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

export const BackLink = forwardRef(
  ({ children, className, href, ...otherProps }: BackLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <Link {...otherProps} href={href} ref={ref} className={`ams-back-link ${className}`}>
      <Icon svg={ChevronLeftIcon} size="level-6" />
      {children}
    </Link>
  ),
)

BackLink.displayName = 'BackLink'
