import { useState } from "react"
import { ListItems } from "../../UI/ListItems";
export default function Disposable() {
    const [items, setItems] = useState([]);
    return (
        <>
            {<ListItems title={"Descartáveis"} data={items} />}
        </>
    )
}