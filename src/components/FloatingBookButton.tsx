import { CalendarCheck } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

const FloatingBookButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <BookingDialog
        trigger={
          <button className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center">
            <CalendarCheck className="h-6 w-6" />
          </button>
        }
      />
    </div>
  );
};

export default FloatingBookButton;
