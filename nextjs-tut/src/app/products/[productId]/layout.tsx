export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <>
            {children}
            <h2>Features product</h2>
        </>
    )
}