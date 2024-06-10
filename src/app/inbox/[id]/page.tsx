import ClientPage from "@/app/client_page"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Messages from "@/app/_components/messages"
function Page() {
  const commonClasses =
    "flex flex-col items-center gap-2 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  return (
    <>
      <div className="fixed bottom-4 right-4 flex gap-4 items-end group">
        <div className={commonClasses}>
          <p className="text-white">Task</p>
          <button className="w-16 h-16">
            <Image
              src="/assets/images/btn-task.png"
              alt="Task"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className={commonClasses}>
          <p className="text-white">Inbox</p>
          <button className="w-16 h-16">
            <Image
              src="/assets/images/btn-inbox.png"
              alt="Inbox"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </button>
        </div>
        <button className="w-16 h-16 z-10">
          <Image
            src="/assets/images/btn-quicks.png"
            alt="Quicks"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </button>
      </div>

      <div id="chat-container" className="fixed bottom-24 w-[768px] right-4">
        <Messages />
      </div>
    </>
  )
}

export default Page
