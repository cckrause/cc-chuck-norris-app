import { Button, Flex, Text } from '@radix-ui/themes'
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()

    return (
        <Flex direction="column" justify="center" gap="4">
            <Button
                variant="soft"
                color="blue"
                onClick={() => router.push(`/jokes/`)}
            >
                Random Joke
            </Button>
            <Text>TODO: Categories</Text>
        </Flex>
    )
}

export default Home
