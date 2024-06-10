"use client"
import Image from "next/image"
import React from "react"
import { format } from "date-fns"
import Link from "next/link"

const formatDate = (dateString: string) => {
  return format(new Date(dateString), "PP kk:mm")
}
const EmailEntry = ({ id, sender, subject, date, preview, isRead }: any) => (
  <div className="flex items-center p-4 border-b border-gray-200">
    <div className="flex-shrink-0">
      <Image
        className="w-16 rounded-full"
        src="/assets/images/person_group.png"
        alt="Inbox person"
        width={100}
        height={100}
      />
    </div>
    <div className="ml-4">
      <div className="text-sm font-medium text-blue-600">
        <Link href={`/inbox/${id}`} className="hover:underline">
          {subject}
        </Link>
      </div>
      <div className="text-sm  font-bold">{sender} :</div>
      <div className="text-sm text-gray-500">
        {preview.length > 50 ? preview.substring(0, 50) + "..." : preview}
      </div>
    </div>
    <div className="ml-auto text-sm text-gray-500">{!isRead ? formatDate(date) : date}</div>
    {!isRead && <div className="ml-2 h-2 w-2 rounded-full bg-red-500"></div>}
  </div>
)

const EmailList = ({ emails }: any) => (
  <div className="divide-y divide-gray-200">
    {emails && emails.map((email: any) => <EmailEntry key={email.id} {...email} />)}
  </div>
)

export default EmailList
