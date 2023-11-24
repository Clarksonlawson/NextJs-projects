import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div className="col-md-3 mb-2 mb-md-0">
      <Link href={"/"}><Image src={"/cover.png"} alt="Logo" width={140} height={100} priority /></Link>
    </div>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><Link href="/" className="nav-link px-2 link-secondary">Home</Link></li>
      <li><Link href="/users" className="nav-link px-2">Registered Users</Link></li>
    </ul>

    <div className="col-md-3 text-end">
      <Link href="/login" className="btn btn-outline-success me-2">Login</Link>
      <Link  className="btn btn-danger" href="/register">Sign-up</Link>
    </div>
</header>)
}