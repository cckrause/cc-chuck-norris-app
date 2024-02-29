import { useRouter } from 'next/router'
import Jokes from '.'

export const Category: React.FunctionComponent = () => {
    const router = useRouter()
    const { category } = router.query

    return <Jokes category={category as string} />
}

export default Category
