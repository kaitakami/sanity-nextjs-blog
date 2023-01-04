import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="">
            <Link href="/">
                Kai Takami
            </Link>
        </div>
    </header>
    )
}

export default Header
