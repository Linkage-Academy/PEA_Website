import {Stack, Title} from "@mantine/core";
import HomeHero from "./components/HomeHero/HomeHero";

function Home() {
    
    return (
        <Stack >
            
            <Stack align={"center"} spacing={"lg"}>
                <HomeHero/>
            </Stack>
        </Stack>
    )
}

export default Home;