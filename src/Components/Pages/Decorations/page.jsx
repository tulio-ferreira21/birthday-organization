import { useState } from "react"
import { ListItems } from "../../UI/ListItems";
export default function Decorations() {
    const [items] = useState([]);
    return (
        <>
            {<ListItems title={"Decorações"} data={items} />}
        </>
    )
}