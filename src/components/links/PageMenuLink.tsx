import {
  AnchorHTMLAttributes,
  ForwardedRef,
  HTMLAttributeAnchorTarget,
  MouseEvent,
  PropsWithChildren,
  forwardRef,
} from 'react'
import { useHref, useLinkClickHandler } from 'react-router-dom'
import { PageMenu } from '@amsterdam/design-system-react'
import type { PageMenuLinkProps } from '@amsterdam/design-system-react'

export interface LinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>, PageMenuLinkProps {
  to: string
  target?: HTMLAttributeAnchorTarget
  replace?: boolean
  state?: unknown
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

const PageMenuLink = forwardRef(
  (
    { children, onClick, replace = false, state, target, to, ...rest }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const href = useHref(to)
    const handleClick = useLinkClickHandler(to, { replace, state, target })

    return (
      <PageMenu.Link
        {...rest}
        href={href}
        onClick={(event) => {
          window.scrollTo(0, 0)
          onClick?.(event)
          if (!event.defaultPrevented) {
            handleClick(event)
          }
        }}
        ref={ref}
        target={target}
      >
        {children}
      </PageMenu.Link>
    )
  },
)

export default PageMenuLink
