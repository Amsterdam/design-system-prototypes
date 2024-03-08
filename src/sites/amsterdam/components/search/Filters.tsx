import { Checkbox, Column, Heading } from '@amsterdam/design-system-react'
import { filters } from './filters'

export const Filters = () => (
  <Column gap="medium">
    {filters.map((section) => (
      <Column as="section" key={section.title} gap="extra-small">
        <Heading level={2} size="level-4">
          {section.title}
        </Heading>
        {section.filters.map((filter) => (
          <Checkbox key={filter.label}>
            {filter.label} ({filter.hits})
          </Checkbox>
        ))}
      </Column>
    ))}
  </Column>
)
