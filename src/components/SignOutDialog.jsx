import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function SignOutDialog() {
      const [isLoading, setisLoading] = useState(false);

    const navigate = useNavigate();
    
      async function handleSignOut() {
        setisLoading(true);
        try {
          await signOut(auth);
          toast.success("Signed Out");
          navigate("/signin");
          //   onClose()
        } catch (error) {
          toast.error(error.message);
          console.error(error);
        } finally {
          setisLoading(false);
    
        }
      }
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button className="bg-[#2563eb] text-xl border-none rounded-3xl  py-2 cursor-pointer text-white mt-7 hover:bg-white hover:text-black hover:font-bold transition duration-500 ease-in-out " variant="outline">LogOut</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are You Sure You Want To LogOut?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSignOut}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
