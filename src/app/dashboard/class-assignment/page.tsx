"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
} from "@/components/ui/alert-dialog";

const initialClasses = [
  { id: 1, name: "8A", numberOfStudents: 30 },
  { id: 2, name: "9B", numberOfStudents: 28 },
  { id: 3, name: "10A", numberOfStudents: 32 },
  { id: 4, name: "11C", numberOfStudents: 25 },
  { id: 5, name: "12B", numberOfStudents: 27 },
];

export default function ClassAssignment() {
  const [classes, setClasses] = useState(initialClasses);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState<Class | null>(null);
  const [newClassName, setNewClassName] = useState("");
  const [newClassSize, setNewClassSize] = useState("");

  interface Class {
    id: number;
    name: string;
    numberOfStudents: number;
  }

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    const newClass: Class = {
      id: classes.length + 1,
      name: newClassName,
      numberOfStudents: parseInt(newClassSize),
    };
    setClasses([...classes, newClass]);
    setIsCreateModalOpen(false);
    setNewClassName("");
    setNewClassSize("");
  };

  interface Class {
    id: number;
    name: string;
    numberOfStudents: number;
  }

  const handleEditClass = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedClasses = classes.map((c: Class) =>
      c.id === currentClass?.id
        ? { ...c, name: newClassName, numberOfStudents: parseInt(newClassSize) }
        : c
    );
    setClasses(updatedClasses);
    setIsEditModalOpen(false);
    setCurrentClass(null);
    setNewClassName("");
    setNewClassSize("");
  };

  const handleDeleteClass = (id: number) => {
    const updatedClasses = classes.filter((c: Class) => c.id !== id);
    setClasses(updatedClasses);
  };

  const openEditModal = (classItem: Class) => {
    setCurrentClass(classItem);
    setNewClassName(classItem.name);
    setNewClassSize(classItem.numberOfStudents.toString());
    setIsEditModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Class Assignment</h1>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button>Create Class</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Class</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateClass} className="space-y-4">
              <div>
                <Label htmlFor="className">Class Name</Label>
                <Input
                  id="className"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="Enter class name"
                />
              </div>
              <div>
                <Label htmlFor="classSize">Number of Students</Label>
                <Input
                  id="classSize"
                  type="number"
                  value={newClassSize}
                  onChange={(e) => setNewClassSize(e.target.value)}
                  placeholder="Enter number of students"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Class</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class</TableHead>
            <TableHead>Number of Students</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem) => (
            <TableRow key={classItem.id}>
              <TableCell>{classItem.name}</TableCell>
              <TableCell>{classItem.numberOfStudents}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => openEditModal(classItem)}
                >
                  Edit
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the class and remove its data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteClass(classItem.id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Class</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditClass} className="space-y-4">
            <div>
              <Label htmlFor="editClassName">Class Name</Label>
              <Input
                id="editClassName"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
                placeholder="Enter class name"
              />
            </div>
            <div>
              <Label htmlFor="editClassSize">Number of Students</Label>
              <Input
                id="editClassSize"
                type="number"
                value={newClassSize}
                onChange={(e) => setNewClassSize(e.target.value)}
                placeholder="Enter number of students"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
