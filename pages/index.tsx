import { Button, Flex } from '@radix-ui/themes'
import { useRouter } from 'next/router'
import { Categories } from '../components/Categories'

const Home = () => {
    const router = useRouter()

    return (
        <Flex direction="column" justify="center" gap="6">
            <Button
                variant="soft"
                color="blue"
                onClick={() => router.push(`/jokes/`)}
                size="4"
                m="auto"
            >
                Feeling lucky? 🦶🏼💥
            </Button>
            <Categories />
        </Flex>
    )
}

export default Home
