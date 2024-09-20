

export default function Authlayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-full justify-center items-center bg-sky-500">
      {children}
    </div>
  )
}
