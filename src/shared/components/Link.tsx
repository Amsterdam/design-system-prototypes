import type { LinkProps as LinkComponentProps } from '@amsterdam/design-system-react'
import { Link as LinkComponent } from '@amsterdam/design-system-react'
import { ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, MouseEvent, PropsWithChildren } from 'react'
import { useHref, useLinkClickHandler } from 'react-router-dom'

type LinkProps = LinkComponentProps & {
  to: string
  target?: HTMLAttributeAnchorTarget
  replace?: boolean
  state?: unknown
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

export const Link = forwardRef(
  (
    // TODO: Remove `PropsWithChildren` when using @amsterdam/design-system-react ^0.4.0
    { children, onClick, replace = false, state, target, to, ...rest }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const href = useHref(to)
    const handleClick = useLinkClickHandler(to, { replace, state, target })

    return (
      <LinkComponent
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
      </LinkComponent>
    )
  },
)
