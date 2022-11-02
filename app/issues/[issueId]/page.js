import IssueDetails from "./IssueDetails";
import {PrismaClient} from '@prisma/client'
import {wait} from "../../../util/time";

export default async function IssueDetailsPage({params}) {
    const prisma = new PrismaClient();
    const issue = await prisma.issue.findFirst({ where: { id : +params.issueId }})

    // await wait(3)
    // if (!issue) {
    //     throw new Error('issue not found')
    // }
  return(
      <IssueDetails issue={issue}>

      </IssueDetails>
  )
}