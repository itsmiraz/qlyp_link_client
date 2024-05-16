import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CopIcon from "@/assets/icons/copyIcon";
import toast from "react-hot-toast";
import { useToast } from "@/components/ui/use-toast";

export function ShowShortURlModal({
  open,
  link,
  setModal,
}: {
  open: boolean | undefined;
  link: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toast } = useToast();

  const handleCopy = (code: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    toast({
      title: "Copid",
    });
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-0">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Here is your shorten link.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={link} readOnly />
          </div>
          <Button
            onClick={() => handleCopy(link)}
            type="submit"
            size="sm"
            className="px-3"
          >
            <span className="sr-only">Copy</span>
            <CopIcon />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={() => setModal(false)} type="button">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
