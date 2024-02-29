import '../styles/globals.css'
import { Container, Heading, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }) {
    return (
        <Theme appearance="dark" accentColor="blue" radius="full">
            <Container size="2" p="4">
                <Heading my="6" size="8">
                    Chuck Norris is roundhouse kickin' jokes in your face! 🧔
                </Heading>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </Container>
        </Theme>
    )
}
