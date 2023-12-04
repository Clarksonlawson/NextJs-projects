"use client"
import { ColumnDef } from "@tanstack/react-table"


export const columns = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "fullname",
        header: "Fullname",
    },
    {
        accessorKey: "email",
        header: "Email"

    },
    {
        accessorKey: "country",
        header: "Country"
    },
    {
        accessorKey: "phone",
        header: "Phone"

    },
    {
        accessorKey: "password",
        header: "Password"
    }
]