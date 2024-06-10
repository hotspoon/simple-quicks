import { cn } from "@/lib/utils"
import Flatpickr, { DateTimePickerProps } from "react-flatpickr"
import "flatpickr/dist/themes/light.css"

interface CustomProps extends DateTimePickerProps {
  placeholder?: string
  maxDate?: string | Date
}

function FlatpickrCustom({ placeholder, className, maxDate = "today", ...props }: CustomProps) {
  return (
    <Flatpickr
      {...props}
      options={{ ...props.options, maxDate }}
      className={cn(
        "flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:shadow-primary hover:cursor-pointer",
        className
      )}
      placeholder={placeholder || "Pilih Tanggal"}
    />
  )
}

export default FlatpickrCustom
