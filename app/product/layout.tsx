import Link from "next/link"

export default function RootLayout({
    children
}:{
    children: React.ReactNode
}){
    return (
        <section>
        <Link href="/" className="text-sm">← Back to store</Link>
        <h1 className="mt-4">Product Detail Page</h1>
        {children}
        </section>
    )
}