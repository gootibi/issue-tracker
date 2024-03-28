import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({ issue }: { issue: Issue }) => {
    return (
        <>
            <Heading as='h1'>{issue.title}</Heading><Flex className='gap-3' my="2">
                <IssueStatusBadge status={issue.status} />
                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex><Card className='prose max-w-full' my="4">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </>
    )
}

export default IssueDetails