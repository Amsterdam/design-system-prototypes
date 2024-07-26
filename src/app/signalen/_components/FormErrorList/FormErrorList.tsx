/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/* eslint-disable react/jsx-props-no-spreading */

import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Alert, LinkList } from '@amsterdam/design-system-react'

export type FormError = {
  id: string
  label: string
}

export type FormErrorListProps = {
  /** The list of error messages to display. */
  errors: FormError[]
} & HTMLAttributes<HTMLDivElement>

export const FormErrorList = forwardRef(
  ({ className, errors, ...restProps }: FormErrorListProps, ref: ForwardedRef<HTMLDivElement>) => {
    if (errors.length === 0) return undefined

    return (
      <Alert
        {...restProps}
        className={`ams-form-error-list ${className}`}
        heading="Verbeter de fouten voor u verder gaat"
        headingLevel={3}
        ref={ref}
        role="alert"
        severity="error"
      >
        <LinkList>
          {errors.map(({ id, label }) => (
            <LinkList.Link href={id} key={`${id}-${label}`}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Alert>
    )
  },
)

FormErrorList.displayName = 'FormErrorList'
