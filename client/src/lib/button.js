function Tombol({ title, warna, className, onClick }) {
    return (
        <div >
            <button className={`btn btn-${warna} ${className}`} onClick={onClick}>{title}</button>
        </div>
    )
}

export { Tombol }