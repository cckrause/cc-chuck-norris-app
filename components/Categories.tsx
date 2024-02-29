import { Button, Flex, Heading, Section } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { getCategories } from '../api/norris'

export const Categories = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    })

    const router = useRouter()

    return (
        <Section p="0">
            <Heading mb="2" size="4">
                {isLoading ? 'Loading Categories...' : 'Categories'}
            </Heading>
            <Flex gap="3" justify="start" wrap="wrap">
                {categories?.map((category) => (
                    <Button
                        key={category}
                        color="bronze"
                        variant="soft"
                        onClick={() => router.push(`/jokes/${category}`)}
                    >
                        {category}
                    </Button>
                ))}
            </Flex>
        </Section>
    )
}
