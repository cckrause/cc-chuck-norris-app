import { CrossCircledIcon } from '@radix-ui/react-icons'
import { Callout } from '@radix-ui/themes'

export const ErrorNotice: React.FunctionComponent<{
    message: string
}> = ({ message }) => (
    <Callout.Root color="red" my="4">
        <Callout.Icon>
            <CrossCircledIcon />
        </Callout.Icon>
        <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
)
