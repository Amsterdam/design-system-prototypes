/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { StandaloneLink } from '@amsterdam/design-system-react'
import { ChevronBackwardIcon } from '@amsterdam/design-system-react-icons'
import formatPath from '../../../../utils/formatPath'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> & {
  href: string
}

export const BackLink = ({ href, ...restProps }: Props) => (
  <StandaloneLink {...restProps} href={formatPath(href)} icon={ChevronBackwardIcon} />
)
