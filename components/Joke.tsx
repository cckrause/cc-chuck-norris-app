import { Quote, Section, Text } from '@radix-ui/themes'

export const Joke: React.FunctionComponent<{
    isLoading: boolean
    joke: string
}> = ({ isLoading, joke }) => (
    <Section>
        <Text size="8">
            <Quote>{isLoading || joke === '' ? '...' : joke}</Quote>
        </Text>
    </Section>
)
