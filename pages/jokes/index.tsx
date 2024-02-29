import { Button, Flex } from '@radix-ui/themes'
import { CaretLeftIcon, ShuffleIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { Joke } from '../../components/Joke'
import { getJoke } from '../../api/norris'

export const Jokes: React.FunctionComponent<{ category?: string }> = ({
    category = 'all',
}) => {
    const {
        data: joke,
        isLoading,
        isError,
        isRefetching,
        refetch,
    } = useQuery({
        queryKey: [category],
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
            {isError ? (
                'Category not found.'
            ) : (
                <Joke
                    isLoading={isLoading || isRefetching}
                    joke={joke?.value}
                />
            )}
        </>
    )
}

export default Jokes
