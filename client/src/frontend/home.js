import { Footbar } from "./footbar"
import { Main } from "./main"
import { Navbar, NewNavbar } from "./navbar"

function TampilanHome(){
    return (
        <div>
            <NewNavbar/>
            <Main/>
            <Footbar/>

        </div>
    )
}

export { TampilanHome }