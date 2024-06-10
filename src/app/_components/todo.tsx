/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GwLRRkGFY1I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"

export default function Todo() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <Select>
          <SelectTrigger className="text-sm font-semibold">
            <SelectValue placeholder="My Tasks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my-tasks">My Tasks</SelectItem>
            <SelectItem value="completed-tasks">Completed Tasks</SelectItem>
            <SelectItem value="all-tasks">All Tasks</SelectItem>
          </SelectContent>
        </Select>
        <Button>New Task</Button>
      </div>
      <ScrollArea className="space-y-6">
        <div className="flex items-start space-x-4">
          <Checkbox id="task-1" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Close off Case #012920 - RODRIGUES, Amiguel</h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-semibold">2 Days Left</span>
                <span>12/06/2021</span>
                <ChevronUpIcon className="w-4 h-4" />
                <EllipsisVerticalIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4" />
              <span>12/06/2021</span>
              <ClipboardIcon className="w-4 h-4" />
            </div>
            <p className="text-sm mt-2">
              Closing off this case since this application has been cancelled. No one really
              understand how this case could possibly be cancelled. The options and the documents
              within this document were totally a guaranteed for a success!
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Checkbox id="task-2" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                Set up documentation report for several Cases: Case 145443, Case 192829 and Case
                182203
              </h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-semibold">4 Days Left</span>
                <span>14/06/2021</span>
                <ChevronUpIcon className="w-4 h-4" />
                <EllipsisVerticalIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4" />
              <span>14/06/2021</span>
              <ClipboardIcon className="w-4 h-4" />
            </div>
            <p className="text-sm mt-2">
              All Cases must include all payment transactions, all documents and forms filled. All
              conversations in comments and messages in channels and emails should be provided as
              well in.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Checkbox id="task-3" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Set up appointment with Dr Blake</h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-semibold">10 Days Left</span>
                <span>22/06/2021</span>
                <ChevronUpIcon className="w-4 h-4" />
                <EllipsisVerticalIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4" />
              <span>22/06/2021</span>
              <ClipboardIcon className="w-4 h-4" />
            </div>
            <p className="text-sm mt-2">No Description</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Checkbox id="task-4" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold line-through">Contact Mr Caleb - video conference</h3>
              <div className="flex items-center space-x-2 text-sm">
                <ChevronDownIcon className="w-4 h-4" />
                <EllipsisVerticalIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>3/06/2021</span>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Checkbox id="task-5" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold line-through">Assign homework to Client A</h3>
              <div className="flex items-center space-x-2 text-sm">
                <ChevronDownIcon className="w-4 h-4" />
                <EllipsisVerticalIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>2/06/2021</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ChevronUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function EllipsisVerticalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}
