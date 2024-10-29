import { data } from "@/types/main";
import Hero from "./components/Hero";

interface Props {
    data: data
}


const HomePage = ({ data }: Props) => {
    return (
        <>
        {data.main ? ( <Hero mainData={data.main} />
        
        ) : (
            <p>Loading main data...</p>
        )
        }
            {/* <Header logo={data.main.name} /> */}
           
        </>
    );
}

export default HomePage;