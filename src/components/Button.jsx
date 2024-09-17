export default function Button({color, active, onClick}) {
    return(
    <div
        className={`color-button ${color} ${active ? 'active' : ''}`}
        onClick={onClick}
    />
)
}