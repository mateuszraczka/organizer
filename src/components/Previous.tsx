import Button from "./Button";

const Previous = ({...props}) => {
    return (
        <Button variant="horizontal" className="bg-green-400 hover:bg-green-300 p-3 rounded-md" {...props}>
            Poprzedni
        </Button>
    )
}
export default Previous;