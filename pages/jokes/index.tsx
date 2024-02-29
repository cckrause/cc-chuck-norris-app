import { Button, Flex } from '@radix-ui/themes'
import { CaretLeftIcon, ShuffleIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { Joke } from '../../components/Joke'
import { getJoke } from '../../api/norris'

const Jokes: React.FunctionComponent = () => {
    const {
        data: joke,
        isLoading,
        isRefetching,
        refetch,
    } = useQuery({
        queryKey: ['all'],
        queryFn: getJoke,
    })
    const router = useRouter()

    return (
        <>
            <Flex gap="4">
                <Button variant="soft" onClick={() => router.push('/')}>
                    <CaretLeftIcon />
                </Button>
                <Button
                    variant="soft"
                    color="blue"
                    onClick={() => refetch()}
                    size="4"
                    m="auto"
                >
                    <ShuffleIcon />
                </Button>
            </Flex>
            <Joke isLoading={isLoading || isRefetching} joke={joke?.value} />
        </>
    )
}

export default Jokes
