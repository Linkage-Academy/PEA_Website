import {Stack} from "@mantine/core";
import HomeHero from "./components/HomeHero/HomeHero";
import Categories from "./components/Categories/Categories";
import BannerMinecraft from "./components/BannerMinecraft/BannerMinecraft";


function Home() {

    return (
        <Stack>
            <Stack spacing={"lg"}>
                <HomeHero/>
                <Categories/>
                <BannerMinecraft/>
            </Stack>
        </Stack>
    )
}

export default Home;