/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/* eslint-disable react/jsx-props-no-spreading */

import { Icon } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'
import NextLink from 'next/link'

import './back-link.css'

export type BackLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

export const BackLink = forwardRef(
  ({ children, className, href, ...otherProps }: BackLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <NextLink {...otherProps} className={`ams-back-link ${className}`} href={href} ref={ref}>
      <Icon svg={ChevronLeftIcon} size="small" />
      {children}
    </NextLink>
  ),
)

BackLink.displayName = 'BackLink'
