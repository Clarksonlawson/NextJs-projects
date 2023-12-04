import Image from "next/image";
import prisma from "../lib/prisma"

export async function getUsers(){
    const users = await prisma.users.findMany();
    return users;
}


export default async function Users(){
    const users = await getUsers();

    return(<div class="row">
            {
                users.map((user) => (
                    <div class="col-md-2" key={user.id}>
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{user.fullname}</h5>
                            <p class="card-text">{user.email}.</p>
                            <p class="card-text">{user.phone}.</p>
                            <p class="card-text">{user.country}.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                ))
            }
         </div>
        
    )
}