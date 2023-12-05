"use client"
import { MoreHorizontalIcon } from "lucide-react"
import {ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { DataTableColumnHeader } from "@/components/ui/datacolumn-header"
export const columns = [
    {
        id: "select",
        header: ({table}) =>(
            <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: false,
    },

    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "fullname",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Fullname" />

        )
    },
    {
        accessorKey: "email",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Email" />

        )

    },
    {
        accessorKey: "country",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Country" />

        )
    },
    {
        accessorKey: "phone",
        header: "Phone"

    },
    {
        accessorKey: "password",
        header: "Password"
    },
    {
        accessorKey: "Actions",
        cell: ({row}) => {
            const user = row.original;
            return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => navigator.clipboard.writeText(user.email)}
                    >
                      Copy email
                    </DropdownMenuItem>                
                    <DropdownMenuItem><Link href={`/users/${user.id}`}> View</Link> </DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link href={`/users/${user.id}`}> Delete</Link> </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
        }
    },
    
]