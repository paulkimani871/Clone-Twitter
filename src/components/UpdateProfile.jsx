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
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";

export function UpdateProfile({user}) {
  console.log(user)
  const [open, setOpen] = useState(false);
  const [handle, setHandle] = useState(user?.handle || user?.name);
  const [name, setName] = useState(user?.name);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  async function handleUpdateProfile(e) {
    console.log("testing");
    
    e.preventDefault();
    try {
        setIsLoading(true)
        setError("")
        const docRef = doc (db,"users", auth.currentUser.uid )

        await updateDoc(docRef,{
            name,
            handle,

        })
        toast.success("profile updated successfully")

        setOpen(false)



    } catch (err) {

      console.error(err.message || "failed to update profile");
      toast.error("failed to update profile")
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button className="btn" onClick={() => setOpen(true)}>
        Edit Profile
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <form onSubmit={handleUpdateProfile} id="update-profile">
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input value={name} onChange={e=> setName(e.target.value)} id="name-1" name="name" />
              </Field>
              <Field>
                <Label htmlFor="handle">Handle</Label>
                <Input value ={handle} onChange ={e=> setHandle(e.target.value)} id="handle" name="handle" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit" form="update-profile" disabled={isLoading}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
